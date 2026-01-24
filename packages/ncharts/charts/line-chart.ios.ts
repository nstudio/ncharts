/**
 * LineChart - iOS Implementation
 */
import { LineChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, LineDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toUIColor, parseEasingIOS, parseLineChartModeIOS } from './utils';

function applyLineDataSetConfig(dataSet: LineChartDataSet, config: LineDataSetConfig): void {
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
  if (config.drawVerticalHighlightIndicator !== undefined) dataSet.drawVerticalHighlightIndicatorEnabled = config.drawVerticalHighlightIndicator;
  if (config.drawHorizontalHighlightIndicator !== undefined) dataSet.drawHorizontalHighlightIndicatorEnabled = config.drawHorizontalHighlightIndicator;
  if (config.highlightLineWidth !== undefined) dataSet.highlightLineWidth = config.highlightLineWidth;
  if (config.fillColor) dataSet.fillColor = toUIColor(config.fillColor);
  if (config.fillAlpha !== undefined) dataSet.fillAlpha = config.fillAlpha / 255.0;
  if (config.drawFilled !== undefined) dataSet.drawFilledEnabled = config.drawFilled;
  if (config.lineWidth !== undefined) dataSet.lineWidth = config.lineWidth;
  if (config.circleRadius !== undefined) dataSet.circleRadius = config.circleRadius;
  if (config.drawCircles !== undefined) dataSet.drawCirclesEnabled = config.drawCircles;
  if (config.mode) dataSet.mode = parseLineChartModeIOS(config.mode);
  if (config.drawCubicIntensity !== undefined) dataSet.cubicIntensity = config.drawCubicIntensity;
  if (config.circleColor) {
    const color = toUIColor(config.circleColor);
    if (color) dataSet.setCircleColor(color);
  }
  if (config.circleHoleColor) dataSet.circleHoleColor = toUIColor(config.circleHoleColor);
  if (config.drawCircleHole !== undefined) dataSet.drawCircleHoleEnabled = config.drawCircleHole;
}

@NativeClass()
class ChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<LineChart>;

  static initWithOwner(owner: LineChart): ChartViewDelegateImpl {
    const delegate = ChartViewDelegateImpl.new() as ChartViewDelegateImpl;
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
      owner.notify({ eventName: LineChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: LineChart.deselectEvent, object: owner });
    }
  }
}

export class LineChart extends LineChartBase {
  private _native: LineChartView | null = null;
  private _delegate: ChartViewDelegateImpl | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] LineChart.createNativeView()');
    this._native = LineChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    nchartsLog('[ncharts] LineChart created:', this._native);
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] LineChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    instance.highlightPerTapEnabled = this.highlightPerTapEnabled;

    instance.clipsToBounds = true;
    instance.layer.masksToBounds = true;
    instance.clipValuesToContentEnabled = true;
    instance.clipDataToContentEnabled = true;
    instance.drawGridBackgroundEnabled = true;
    const bg = this.chartBackgroundColor ? toUIColor(this.chartBackgroundColor) : UIColor.blackColor;
    instance.backgroundColor = bg;
    instance.opaque = bg.CGColor.alpha === 1;

    instance.layer.drawsAsynchronously = false;
    instance.layer.shouldRasterize = false;

    const gridBg = this.chartGridBackgroundColor ? toUIColor(this.chartGridBackgroundColor) : UIColor.blackColor;
    instance.gridBackgroundColor = gridBg;

    instance.clearsContextBeforeDrawing = true;
    if (this.noDataText) instance.noDataText = this.noDataText;

    // Set up selection delegate
    this._delegate = ChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    if (this.data) {
      this.applyData();
    }
  }

  disposeNativeView(): void {
    nchartsLog('[ncharts] LineChart.disposeNativeView()');
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

    nchartsLog('[ncharts] _applyDataIOS called');
    const instance = this._native;
    // Stop any running animation
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
      instance.chartAnimator.phaseX = 1.0;
      instance.chartAnimator.phaseY = 1.0;
    }

    // Clear highlights
    instance.highlightValues(null);

    // Clear the layer's cached bitmap content to prevent ghosting
    instance.layer.contents = null;

    // Build the new data sets
    const dataSets: LineChartDataSet[] = [];

    for (const ds of this.data!.dataSets) {
      const entries: ChartDataEntry[] = [];

      ds.values.forEach((value: any, index: number) => {
        let entry: any;
        if (typeof value === 'number') {
          entry = ChartDataEntry.alloc().initWithXY(index, value);
        } else {
          const x = value.x ?? index;
          entry = ChartDataEntry.alloc().initWithXY(x, value.y);
        }
        entries.push(entry);
      });

      const dataSet = LineChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
      if (ds.config) {
        applyLineDataSetConfig(dataSet, ds.config);
      }
      dataSets.push(dataSet);
    }

    const chartData = LineChartData.alloc().initWithDataSets(dataSets);
    // Use KVC to bypass readonly constraint from protocol
    instance.setValueForKey(chartData, 'data');
  }

  protected _applyAnimation(animation: ChartAnimation): void {
    if (!this._native) return;

    const instance = this._native;
    // Stop any existing animation
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
    }

    // Clear layer contents to prevent ghosting during animation
    const sublayers = instance.layer?.sublayers;
    if (sublayers?.count > 0) {
      for (let i = 0; i < sublayers.count; i++) {
        const sublayer = sublayers.objectAtIndex(i) as CALayer;
        sublayer.removeFromSuperlayer();
      }
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
    // TODO: implement
  }

  protected _applyXAxis(xAxis: XAxisConfig): void {
    // TODO: implement
  }

  protected _applyYAxis(yAxis: YAxisConfigDual): void {
    // TODO: implement
  }

  protected _applyDescription(description: ChartDescription): void {
    // TODO: implement
  }

  protected _applyMarker(marker: MarkerConfig): void {
    // TODO: implement
  }

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
