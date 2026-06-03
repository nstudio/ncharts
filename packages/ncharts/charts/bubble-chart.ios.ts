/**
 * BubbleChart - iOS Implementation
 */
import { BubbleChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, BubbleDataSetConfig, nchartsLog, nchartsError, animationProperty, extraOffsetsProperty, ViewPortOffset } from '../common';
import { toUIColor, parseEasingIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyYAxisDualIOS, applyDescriptionIOS } from './style-helpers.ios';

@NativeClass()
class BubbleChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<BubbleChart>;

  static initWithOwner(owner: BubbleChart): BubbleChartViewDelegateImpl {
    const delegate = BubbleChartViewDelegateImpl.new() as BubbleChartViewDelegateImpl;
    delegate._owner = new WeakRef(owner);
    return delegate;
  }

  chartValueSelectedEntryHighlight(chartView: ChartViewBase, entry: ChartDataEntry, highlight: ChartHighlight): void {
    const owner = this._owner?.deref();
    if (owner) {
      const data = {
        x: entry.x,
        y: entry.y,
        dataSetIndex: highlight.dataSetIndex,
        dataIndex: highlight.dataIndex,
        data: entry.data,
      };
      owner.notify({ eventName: BubbleChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: BubbleChart.deselectEvent, object: owner });
    }
  }
}

function applyBubbleDataSetConfig(dataSet: BubbleChartDataSet, config: BubbleDataSetConfig): void {
  if (!dataSet || !config) return;

  if (config.colors?.length) {
    dataSet.resetColors();
    for (const c of config.colors) {
      const color = toUIColor(c);
      if (color) dataSet.addColor(color);
    }
  } else if (config.color) {
    const color = toUIColor(config.color);
    if (color) dataSet.setColor(color);
  }

  if (config.highlightEnabled !== undefined) dataSet.highlightEnabled = config.highlightEnabled;
  if (config.drawValues !== undefined) dataSet.drawValuesEnabled = config.drawValues;
  if (config.valueTextSize !== undefined) dataSet.valueFont = dataSet.valueFont.fontWithSize(config.valueTextSize);
  if (config.valueTextColor) dataSet.valueTextColor = toUIColor(config.valueTextColor);
  if (config.visible !== undefined) dataSet.visible = config.visible;
  if (config.highlightColor) dataSet.highlightColor = toUIColor(config.highlightColor);

  // Disable normalization to use raw size values as bubble radius
  dataSet.normalizeSizeEnabled = false;
}

export class BubbleChart extends BubbleChartBase {
  private _native: BubbleChartView | null = null;
  private _delegate: BubbleChartViewDelegateImpl | null = null;
  private _retainedChartObjects: Array<any> = [];

  createNativeView(): any {
    nchartsLog('[ncharts] BubbleChart.createNativeView()');
    this._native = BubbleChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] BubbleChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    instance.highlightPerTapEnabled = this.highlightPerTapEnabled;

    // Prevent ghosting during animations
    instance.clipsToBounds = true;
    instance.layer.masksToBounds = true;
    instance.clipValuesToContentEnabled = true;
    instance.clipDataToContentEnabled = true;
    instance.drawGridBackgroundEnabled = true;

    const bg = this.chartBackgroundColor ? toUIColor(this.chartBackgroundColor) : UIColor.blackColor;
    instance.backgroundColor = bg;
    instance.opaque = bg.CGColor.alpha === 1;

    // Disable asynchronous drawing to prevent layer overlap
    instance.layer.drawsAsynchronously = false;
    instance.layer.shouldRasterize = false;

    const gridBg = this.chartGridBackgroundColor ? toUIColor(this.chartGridBackgroundColor) : UIColor.blackColor;
    instance.gridBackgroundColor = gridBg;

    instance.clearsContextBeforeDrawing = true;
    if (this.noDataText) instance.noDataText = this.noDataText;
    applyNoDataTextColorIOS(instance, this.noDataTextColor);

    // Set up selection delegate
    this._delegate = BubbleChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) this._applyYAxis(this.yAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    if (this.data) this.applyData();
  }

  disposeNativeView(): void {
    this._retainedChartObjects.length = 0;
    this._delegate = null;
    this._native = null;
    this._nativeChart = null;
    super.disposeNativeView();
  }

  get nativeChart(): any {
    return this._native;
  }

  applyData(): void {
    if (!this._native || !this.data) return;

    nchartsLog('[ncharts] BubbleChart._applyDataIOS called');
    const instance = this._native;

    // Stop any running animation
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
      instance.chartAnimator.phaseX = 1.0;
      instance.chartAnimator.phaseY = 1.0;
    }

    // Clear highlights
    instance.highlightValues(null);
    instance.layer.contents = null;

    // Build the data sets
    const dataSets: BubbleChartDataSet[] = [];

    for (const ds of this.data!.dataSets) {
      const entries: BubbleChartDataEntry[] = [];

      ds.values.forEach((value: any, index: number) => {
        const x = value.x ?? index;
        const entry = BubbleChartDataEntry.alloc().initWithXYSize(x, value.y, value.size);
        entries.push(entry);
      });

      const dataSet = BubbleChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);

      // Disable normalization to use raw size values as bubble radius in points
      dataSet.normalizeSizeEnabled = false;

      if (ds.config) {
        applyBubbleDataSetConfig(dataSet, ds.config);
      }
      dataSets.push(dataSet);
    }

    const chartData = BubbleChartData.alloc().initWithDataSets(dataSets);
    // Use KVC to bypass readonly constraint from protocol
    instance.setValueForKey(chartData, 'data');
    instance.notifyDataSetChanged();
  }

  protected _applyAnimation(animation: ChartAnimation): void {
    if (!this._native) return;

    const instance = this._native;
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
    }
    instance.layer.contents = null;
    instance.layer.setNeedsDisplay();

    const durationX = (animation.durationX ?? 0) / 1000.0;
    const durationY = (animation.durationY ?? 0) / 1000.0;

    if (durationX > 0 && durationY > 0) {
      const easingX = animation.easingX ? parseEasingIOS(animation.easingX) : 0;
      const easingY = animation.easingY ? parseEasingIOS(animation.easingY) : easingX;
      instance.animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(durationX, durationY, easingX, easingY);
    } else if (durationX > 0) {
      const easingX = animation.easingX ? parseEasingIOS(animation.easingX) : 0;
      instance.animateWithXAxisDurationEasingOption(durationX, easingX);
    } else if (durationY > 0) {
      const easingY = animation.easingY ? parseEasingIOS(animation.easingY) : 0;
      instance.animateWithYAxisDurationEasingOption(durationY, easingY);
    }
  }

  protected _applyHighlights(highlights: Highlight[] | null): void {
    if (!this._native) return;

    if (!highlights || highlights.length === 0) {
      this._native.highlightValues(null);
      return;
    }

    const highlightArray: ChartHighlight[] = [];
    for (const h of highlights) {
      const highlight = ChartHighlight.alloc().initWithXYDataSetIndexDataIndex(h.x, h.y ?? 0, h.dataSetIndex ?? 0, h.dataIndex ?? -1);
      highlightArray.push(highlight);
    }
    this._native.highlightValues(highlightArray);
  }

  protected _invalidateChart(): void {
    this._native?.setNeedsDisplay();
  }

  protected _applyLegend(legend: LegendConfig): void {
    applyLegendIOS(this._native, legend);
  }
  protected _applyXAxis(xAxis: XAxisConfig): void {
    applyXAxisIOS(this._native, xAxis, this._retainedChartObjects);
  }
  protected _applyYAxis(yAxis: YAxisConfigDual): void {
    applyYAxisDualIOS(this._native, yAxis, this._retainedChartObjects);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}

  protected _moveViewToX(xValue: number): void {
    this._native?.moveViewToX(xValue);
  }

  protected _moveViewTo(xValue: number, yValue: number, axisDependency: string): void {
    const axis = axisDependency === 'RIGHT' ? AxisDependency.Right : AxisDependency.Left;
    this._native?.moveViewToXValueYValueAxis(xValue, yValue, axis);
  }

  protected _centerViewTo(xValue: number, yValue: number, axisDependency: string): void {
    const axis = axisDependency === 'RIGHT' ? AxisDependency.Right : AxisDependency.Left;
    this._native?.centerViewToXValueYValueAxis(xValue, yValue, axis);
  }

  protected _zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axisDependency: string): void {
    const axis = axisDependency === 'RIGHT' ? AxisDependency.Right : AxisDependency.Left;
    this._native?.zoomWithScaleXScaleYXValueYValueAxis(scaleX, scaleY, xValue, yValue, axis);
  }

  protected _fitScreen(): void {
    this._native?.fitScreen();
  }

  [extraOffsetsProperty.setNative](value: ViewPortOffset) {
    if (this._native && value) {
      this._native.setExtraOffsetsWithLeftTopRightBottom(value.left, value.top, value.right, value.bottom);
      this._native.notifyDataSetChanged();
      this._native.setNeedsDisplay();
    }
  }
}
