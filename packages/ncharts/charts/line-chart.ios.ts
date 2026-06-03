/**
 * LineChart - iOS Implementation
 */
import { LineChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, LineDataSetConfig, nchartsLog, nchartsError, animationProperty, ViewPortOffset, extraOffsetsProperty, touchEnabledProperty, dragEnabledProperty, scaleEnabledProperty, pinchZoomProperty, highlightPerDragEnabledProperty, highlightPerTapEnabledProperty } from '../common';
import { toUIColor, parseEasingIOS, parseLineChartModeIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyYAxisDualIOS, applyDescriptionIOS, applyMarkerIOS } from './style-helpers.ios';
import { LineChartPlotBandsRenderer } from './renderers/line-chart-plotbands-renderer.ios';
import { ChartPagingDetector } from './chart-paging-detector/chart-paging-detector';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.ios';

function applyLineDataSetConfig(dataSet: LineChartDataSet, config: LineDataSetConfig, retainedDataObjects: NSObject[]): void {
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
  if (config.drawVerticalHighlightIndicator !== undefined) dataSet.drawVerticalHighlightIndicatorEnabled = config.drawVerticalHighlightIndicator;
  if (config.drawHorizontalHighlightIndicator !== undefined) dataSet.drawHorizontalHighlightIndicatorEnabled = config.drawHorizontalHighlightIndicator;
  if (config.highlightLineWidth !== undefined) dataSet.highlightLineWidth = config.highlightLineWidth;
  if (config.fillColor) dataSet.fillColor = toUIColor(config.fillColor);
  if (config.fillAlpha !== undefined) dataSet.fillAlpha = config.fillAlpha / 255.0;
  if (config.drawFilled !== undefined) dataSet.drawFilledEnabled = config.drawFilled;
  if (config.fillFormatter?.min !== undefined && config.fillFormatter?.min !== null) {
    const min = config.fillFormatter.min;
    const ff = ChartDefaultFillFormatter.withBlock((_ds, _provider) => min);
    dataSet.fillFormatter = ff;
    retainedDataObjects.push(ff);
  } else {
    dataSet.fillFormatter = null;
  }
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
  if (config.valueFormatter === 'number' || config.valueFormatter === 'suffix' || config.valueFormatter === 'percent') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.valueFormatter = vf;
    retainedDataObjects.push(vf);
  }
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

  chartScaledScaleXScaleY(chartView: ChartViewBase, scaleX: number, scaleY: number): void {
    const owner = this._owner?.deref() as any;
    owner?._pageDetector?.handleScaled();
  }
}

export class LineChart extends LineChartBase {
  private _native: LineChartView | null = null;
  private _delegate: ChartViewDelegateImpl | null = null;
  private _pageDetector: ChartPagingDetector | null = null;
  private _plotBandsRenderer: LineChartPlotBandsRenderer | null = null;
  private _retainedChartObjects: Array<any> = [];
  private _retainedDataObjects: NSObject[] = [];

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
    applyNoDataTextColorIOS(instance, this.noDataTextColor);

    // Set up selection delegate
    this._delegate = ChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    // Set up page change detector
    this._pageDetector = new ChartPagingDetector(
      this,
      async (dir, info) => {
        this.notify({
          eventName: LineChart.pageEvent,
          object: this,
          dir,
          info,
        });
      },
      { idleMs: 160, edgeRatio: 0.08, cooldownMs: 500, pagingMaxScaleX: 1, pagingMaxScaleY: 1 },
    );

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) this._applyYAxis(this.yAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);
    if (this.marker) this._applyMarker(this.marker);
    if (this.data) {
      this.applyData();
    }
  }

  disposeNativeView(): void {
    nchartsLog('[ncharts] LineChart.disposeNativeView()');
    this._pageDetector?.detach();
    this._pageDetector = null;
    this._plotBandsRenderer?.detach();
    this._plotBandsRenderer = null;
    this._retainedChartObjects.length = 0;
    this._retainedDataObjects.length = 0;
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

    // Clear any retained data objects / formatters
    this._retainedDataObjects.length = 0;

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
          if (!value.marker) {
            entry = ChartDataEntry.alloc().initWithXY(x, value.y);
          } else {
            entry = ChartDataEntry.alloc().initWithXYData(x, value.y, value.marker);
          }
        }
        entries.push(entry);
      });

      const dataSet = LineChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
      if (ds.config) {
        applyLineDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
      }
      dataSets.push(dataSet);
    }

    const chartData = LineChartData.alloc().initWithDataSets(dataSets);
    // Use KVC to bypass readonly constraint from protocol
    instance.setValueForKey(chartData, 'data');

    // data and animation properties cannot be set in a guranteed order
    // hence after each data update an animation needs to be executed
    if (this.animation) this._applyAnimation(this.animation);
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
    applyLegendIOS(this._native, legend);
  }

  protected _applyXAxis(xAxis: XAxisConfig): void {
    applyXAxisIOS(this._native, xAxis, this._retainedChartObjects);
  }

  protected _applyYAxis(yAxis: YAxisConfigDual): void {
    applyYAxisDualIOS(this._native, yAxis, this._retainedChartObjects);

    if (yAxis.plotBands?.length) {
      if (this._plotBandsRenderer) {
        this._plotBandsRenderer.update(yAxis.plotBands);
      } else {
        this._plotBandsRenderer = LineChartPlotBandsRenderer.create(this._native, yAxis.plotBands);
      }
    } else {
      this._plotBandsRenderer?.detach();
      this._plotBandsRenderer = null;
    }
  }

  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }

  protected _applyMarker(marker: MarkerConfig): void {
    applyMarkerIOS(this._native, marker, this._retainedChartObjects);
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

  [extraOffsetsProperty.setNative](value: ViewPortOffset) {
    if (this._native && value) {
      this._native.setExtraOffsetsWithLeftTopRightBottom(value.left, value.top, value.right, value.bottom);
      this._native.notifyDataSetChanged();
      this._native.setNeedsDisplay();
    }
  }
  [touchEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.userInteractionEnabled = value;
    }
  }

  [highlightPerTapEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.highlightPerTapEnabled = value;
    }
  }

  [highlightPerDragEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.highlightPerDragEnabled = value;
    }
  }

  [dragEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.dragEnabled = value;
    }
  }

  [scaleEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setScaleEnabled(value);
    }
  }

  [pinchZoomProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.pinchZoomEnabled = value;
    }
  }
}
