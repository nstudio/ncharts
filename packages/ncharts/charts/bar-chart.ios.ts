/**
 * BarChart - iOS Implementation
 */
import { BarChartBase, HorizontalBarChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, BarDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toUIColor, parseEasingIOS } from './utils';

@NativeClass()
class BarChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<BarChart>;

  static initWithOwner(owner: BarChart): BarChartViewDelegateImpl {
    const delegate = BarChartViewDelegateImpl.new() as BarChartViewDelegateImpl;
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
      owner.notify({ eventName: BarChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: BarChart.deselectEvent, object: owner });
    }
  }
}

function applyBarDataSetConfig(dataSet: BarChartDataSet, config: BarDataSetConfig): void {
  if (!dataSet || !config) return;

  if (config.color) {
    const color = toUIColor(config.color);
    if (color) dataSet.setColor(color);
  }
  if (config.colors) {
    const colors: UIColor[] = [];
    config.colors.forEach((c: any) => {
      const color = toUIColor(c);
      if (color) colors.push(color);
    });
    for (const c of colors) {
      dataSet.addColor(c);
    }
  }
  if (config.highlightEnabled !== undefined) dataSet.highlightEnabled = config.highlightEnabled;
  if (config.drawValues !== undefined) dataSet.drawValuesEnabled = config.drawValues;
  if (config.valueTextSize !== undefined) dataSet.valueFont = dataSet.valueFont.fontWithSize(config.valueTextSize);
  if (config.valueTextColor) dataSet.valueTextColor = toUIColor(config.valueTextColor);
  if (config.visible !== undefined) dataSet.visible = config.visible;
  if (config.highlightColor) dataSet.highlightColor = toUIColor(config.highlightColor);
  if (config.highlightAlpha !== undefined) dataSet.highlightAlpha = config.highlightAlpha / 255.0;
  if (config.barShadowColor) dataSet.barShadowColor = toUIColor(config.barShadowColor);
  if (config.stackLabels) {
    dataSet.stackLabels = config.stackLabels as any;
  }
}

export class BarChart extends BarChartBase {
  protected _native: BarChartView | null = null;
  private _delegate: BarChartViewDelegateImpl | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] BarChart.createNativeView()');
    this._native = BarChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    super.initNativeView();

    const instance = this._native!;

    if (this.highlightPerTapEnabled === true) {
      instance.highlightPerTapEnabled = this.highlightPerTapEnabled;
    }

    // Prevent ghosting during animations
    instance.clipsToBounds = true;
    instance.layer.masksToBounds = true;
    instance.clipValuesToContentEnabled = true;
    instance.clipDataToContentEnabled = true;
    instance.drawGridBackgroundEnabled = true;

    const bg = toUIColor(this.chartBackgroundColor) ?? UIColor.blackColor;
    instance.backgroundColor = bg;
    instance.opaque = bg.CGColor.alpha === 1;

    // Disable asynchronous drawing to prevent layer overlap
    instance.layer.drawsAsynchronously = false;
    instance.layer.shouldRasterize = false;

    const gridBg = toUIColor(this.chartGridBackgroundColor) ?? UIColor.blackColor;
    instance.gridBackgroundColor = gridBg;

    instance.clearsContextBeforeDrawing = true;
    if (this.noDataText) instance.noDataText = this.noDataText;

    // Set up selection delegate
    this._delegate = BarChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    if (this.data) this.applyData();
  }

  disposeNativeView(): void {
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

    nchartsLog('[ncharts] BarChart._applyDataIOS called');
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
    const dataSets: BarChartDataSet[] = [];

    for (const ds of this.data!.dataSets) {
      const entries: BarChartDataEntry[] = [];

      ds.values.forEach((value: any, index: number) => {
        let entry: BarChartDataEntry;
        if (typeof value === 'number') {
          entry = BarChartDataEntry.alloc().initWithXY(index, value);
        } else if (Array.isArray(value)) {
          // Stacked bar values
          const yVals = value as number[];
          entry = BarChartDataEntry.alloc().initWithXYValues(index, yVals as any);
        } else {
          const x = value.x ?? index;
          if (Array.isArray(value.y)) {
            // Stacked bar with x
            entry = BarChartDataEntry.alloc().initWithXYValues(x, value.y as any);
          } else {
            entry = BarChartDataEntry.alloc().initWithXY(x, value.y);
          }
        }
        entries.push(entry);
      });

      const dataSet = BarChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
      if (ds.config) {
        applyBarDataSetConfig(dataSet, ds.config);
      }
      dataSets.push(dataSet);
    }

    const chartData = BarChartData.alloc().initWithDataSets(dataSets);

    // Apply bar width if configured
    if (this.data!.config?.barWidth !== undefined) {
      chartData.barWidth = this.data!.config.barWidth;
    }

    // Apply grouping if configured
    if (this.data!.config?.group && dataSets.length > 1) {
      const group = this.data!.config.group;
      chartData.groupBarsFromXGroupSpaceBarSpace(group.fromX, group.groupSpace, group.barSpace);
    }

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

  protected _applyLegend(legend: LegendConfig): void {}
  protected _applyXAxis(xAxis: XAxisConfig): void {}
  protected _applyYAxis(yAxis: YAxisConfigDual): void {}
  protected _applyDescription(description: ChartDescription): void {}
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
}

export class HorizontalBarChart extends BarChart {
  createNativeView(): any {
    nchartsLog('[ncharts] HorizontalBarChart.createNativeView()');
    this._native = HorizontalBarChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }
}
