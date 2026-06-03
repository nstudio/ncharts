/**
 * CombinedChart - iOS Implementation
 */
import { CombinedChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, LineDataSetConfig, BarDataSetConfig, ScatterDataSetConfig, BubbleDataSetConfig, CandleDataSetConfig, CombinedChartData, nchartsLog, nchartsError, DrawOrderCombinedChart, ViewPortOffset, extraOffsetsProperty, animationProperty, touchEnabledProperty, dragEnabledProperty, scaleEnabledProperty, pinchZoomProperty, highlightPerDragEnabledProperty, highlightPerTapEnabledProperty } from '../common';
import { toUIColor, parseEasingIOS, parseLineChartModeIOS, parseScatterShapeIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyYAxisDualIOS, applyDescriptionIOS, applyMarkerIOS } from './style-helpers.ios';
import { NSCustomValueLabelsArrayChartValueFormatter } from './formatters/custom-labels-array-formatter.ios';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.ios';
import { NSCombinedChartRenderer } from './renderers/combined-chart-renderer.ios';
import { ChartPagingDetector } from './chart-paging-detector/chart-paging-detector';

@NativeClass()
class CombinedChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<CombinedChart>;

  static initWithOwner(owner: CombinedChart): CombinedChartViewDelegateImpl {
    const delegate = CombinedChartViewDelegateImpl.new() as CombinedChartViewDelegateImpl;
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
      owner.notify({ eventName: CombinedChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: CombinedChart.deselectEvent, object: owner });
    }
  }

  chartScaledScaleXScaleY(chartView: ChartViewBase, scaleX: number, scaleY: number): void {
    const owner = this._owner?.deref() as any;
    owner?._pageDetector?.handleScaled();
  }
}

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
  if (config.lineWidth !== undefined) dataSet.lineWidth = config.lineWidth;
  if (config.drawCircles !== undefined) dataSet.drawCirclesEnabled = config.drawCircles;
  if (config.circleRadius !== undefined) dataSet.circleRadius = config.circleRadius;
  if (config.circleColor) dataSet.setCircleColor(toUIColor(config.circleColor));
  if (config.circleHoleColor) dataSet.circleHoleColor = toUIColor(config.circleHoleColor);
  if (config.drawCircleHole !== undefined) dataSet.drawCircleHoleEnabled = config.drawCircleHole;
  if (config.drawFilled !== undefined) dataSet.drawFilledEnabled = config.drawFilled;
  if (config.mode !== undefined) dataSet.mode = parseLineChartModeIOS(config.mode);
  if (config.drawCubicIntensity !== undefined) dataSet.cubicIntensity = config.drawCubicIntensity;
  if (config?.valueFormatter === 'number') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.valueFormatter = vf;
    retainedDataObjects.push(vf);
  } else if (Array.isArray(config.valueFormatter)) {
    const vf = NSCustomValueLabelsArrayChartValueFormatter.initWithLabels(config.valueFormatter);
    dataSet.valueFormatter = vf;
    retainedDataObjects.push(vf);
  }
}

function applyBarDataSetConfig(dataSet: BarChartDataSet, config: BarDataSetConfig, retainedDataObjects: NSObject[]): void {
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

  if (config.axisDependency) {
    (dataSet as any).setValueForKey(config.axisDependency === 'RIGHT' ? AxisDependency.Right : AxisDependency.Left, 'axisDependency');
  }
  if (config.highlightEnabled !== undefined) dataSet.highlightEnabled = config.highlightEnabled;
  if (config.drawValues !== undefined) dataSet.drawValuesEnabled = config.drawValues;
  if (config.valueTextSize !== undefined) dataSet.valueFont = dataSet.valueFont.fontWithSize(config.valueTextSize);
  if (config.valueTextColor) dataSet.valueTextColor = toUIColor(config.valueTextColor);
  if (config.visible !== undefined) dataSet.visible = config.visible;
  if (config.highlightColor) dataSet.highlightColor = toUIColor(config.highlightColor);
  if (config.highlightAlpha !== undefined) dataSet.highlightAlpha = config.highlightAlpha / 255.0;
  if (config.barBorderWidth !== undefined) dataSet.barBorderWidth = config.barBorderWidth;
  if (config.barBorderColor) dataSet.barBorderColor = toUIColor(config.barBorderColor);
  if (config.valueFormatter === 'percent' || config.valueFormatter === 'suffix') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.valueFormatter = vf;
    retainedDataObjects.push(vf);
  }
}

function applyScatterDataSetConfig(dataSet: ScatterChartDataSet, config: ScatterDataSetConfig): void {
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
  if (config.scatterShapeSize !== undefined) dataSet.scatterShapeSize = config.scatterShapeSize;
  if (config.scatterShape) {
    const shape = parseScatterShapeIOS(config.scatterShape);
    if (shape !== undefined) dataSet.setScatterShape(shape);
  }
  if (config.scatterShapeHoleRadius !== undefined) dataSet.scatterShapeHoleRadius = config.scatterShapeHoleRadius;
  if (config.scatterShapeHoleColor) dataSet.scatterShapeHoleColor = toUIColor(config.scatterShapeHoleColor);
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
  dataSet.normalizeSizeEnabled = false;
}

function applyCandleDataSetConfig(dataSet: CandleChartDataSet, config: CandleDataSetConfig): void {
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
  if (config.shadowWidth !== undefined) dataSet.shadowWidth = config.shadowWidth;
  if (config.shadowColorSameAsCandle !== undefined) dataSet.shadowColorSameAsCandle = config.shadowColorSameAsCandle;
  if (config.shadowColor) dataSet.shadowColor = toUIColor(config.shadowColor);
  if (config.increasingColor) dataSet.increasingColor = toUIColor(config.increasingColor);
  if (config.decreasingColor) dataSet.decreasingColor = toUIColor(config.decreasingColor);
  if (config.increasingPaintStyle !== undefined) dataSet.increasingFilled = config.increasingPaintStyle === 'FILL' || config.increasingPaintStyle === 'FILL_AND_STROKE';
  if (config.decreasingPaintStyle !== undefined) dataSet.decreasingFilled = config.decreasingPaintStyle === 'FILL' || config.decreasingPaintStyle === 'FILL_AND_STROKE';
  if (config.neutralColor) dataSet.neutralColor = toUIColor(config.neutralColor);
  if (config.barSpace !== undefined) dataSet.barSpace = config.barSpace;
}

export class CombinedChart extends CombinedChartBase {
  private _native: CombinedChartView | null = null;
  private _delegate: CombinedChartViewDelegateImpl | null = null;
  private _pageDetector: ChartPagingDetector | null = null;
  private _retainedChartObjects: Array<any> = [];
  private _retainedDataObjects: NSObject[] = [];
  private _combinedRenderer: NSCombinedChartRenderer | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] CombinedChart.createNativeView()');
    this._native = CombinedChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] CombinedChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;

    // Prevent ghosting during animations
    instance.clipsToBounds = true;
    instance.layer.masksToBounds = true;

    const bg = this.chartBackgroundColor ? toUIColor(this.chartBackgroundColor) : UIColor.blackColor;
    instance.backgroundColor = bg;
    instance.opaque = bg.CGColor.alpha === 1;

    // Disable asynchronous drawing to prevent layer overlap
    instance.layer.drawsAsynchronously = false;
    instance.layer.shouldRasterize = false;

    instance.clearsContextBeforeDrawing = true;
    if (this.noDataText) instance.noDataText = this.noDataText;
    applyNoDataTextColorIOS(instance, this.noDataTextColor);

    // angular directive does not await presence of native chart, hence setup needs to happen here
    if (this.touchEnabled !== undefined) instance.userInteractionEnabled = this.touchEnabled;
    if (this.dragEnabled !== undefined) instance.dragEnabled = this.dragEnabled;
    if (this.scaleEnabled !== undefined) instance.setScaleEnabled(this.scaleEnabled);
    if (this.pinchZoom !== undefined) instance.pinchZoomEnabled = this.pinchZoom;
    if (this.highlightPerDragEnabled !== undefined) instance.highlightPerDragEnabled = this.highlightPerDragEnabled;

    // Set up selection delegate
    this._delegate = CombinedChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    // Set up page change detector
    this._pageDetector = new ChartPagingDetector(
      this,
      async (dir, info) => {
        this.notify({
          eventName: CombinedChart.pageEvent,
          object: this,
          dir,
          info,
        });
      },
      { idleMs: 160, edgeRatio: 0.08, cooldownMs: 500, pagingMaxScaleX: 1, pagingMaxScaleY: 1 },
    );

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if ((this as any).yAxis) this._applyYAxis((this as any).yAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    if (this.data) this.applyData();
  }

  disposeNativeView(): void {
    this._pageDetector?.detach();
    this._pageDetector = null;
    this._retainedChartObjects.length = 0;
    this._retainedDataObjects.length = 0;
    this._combinedRenderer?.detach();
    this._combinedRenderer = null;
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

    nchartsLog('[ncharts] CombinedChart._applyDataIOS called');
    const instance = this._native;

    // reset highlights to prevent crashes from markers to be drawn on removed data
    instance.highlightValues(null);

    // Stop any running animation
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
      instance.chartAnimator.phaseX = 1.0;
      instance.chartAnimator.phaseY = 1.0;
    }

    // Clear highlights
    instance.highlightValues(null);
    instance.layer.contents = null;

    // clear any retained data objects / formatters
    this._retainedDataObjects.length = 0;

    // setup of non-default draw order
    if ((this.data as CombinedChartData).drawOrder) {
      const order: Array<DrawOrderCombinedChart> = this.data.drawOrder;
      const toIOSDrawOrder = (value: DrawOrderCombinedChart): number => {
        switch (value) {
          case 'BAR':
            return 0;
          case 'BUBBLE':
            return 1;
          case 'LINE':
            return 2;
          case 'CANDLE':
            return 3;
          case 'SCATTER':
            return 4;
          default:
            return 0; // fallback: BAR
        }
      };
      instance.drawOrder = order.map(toIOSDrawOrder) as any;
    }

    const combinedData = CombinedChartData.alloc().init();

    // Line data
    if ((this.data as CombinedChartData).lineData) {
      const lineDataSets: LineChartDataSet[] = [];
      for (const ds of (this.data as CombinedChartData).lineData!.dataSets) {
        const entries: ChartDataEntry[] = [];
        ds.values.forEach((value: any, index: number) => {
          let entry: ChartDataEntry;
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
        if (ds.config) applyLineDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
        lineDataSets.push(dataSet);
      }
      const lineData = LineChartData.alloc().initWithDataSets(lineDataSets);
      combinedData.lineData = lineData;
    }

    // Bar data
    if ((this.data as CombinedChartData).barData) {
      const barDataSets: BarChartDataSet[] = [];
      for (const ds of (this.data as CombinedChartData).barData!.dataSets) {
        const entries: BarChartDataEntry[] = [];
        ds.values.forEach((value: any, index: number) => {
          let entry: BarChartDataEntry;
          if (typeof value === 'number') {
            entry = BarChartDataEntry.alloc().initWithXY(index, value);
          } else if (Array.isArray(value.y)) {
            if (!value.marker) {
              entry = BarChartDataEntry.alloc().initWithXYValues(value.x ?? index, value.y);
            } else {
              entry = BarChartDataEntry.alloc().initWithXYValuesData(value.x ?? index, value.y, value.marker);
            }
          } else {
            if (!value.marker) {
              entry = BarChartDataEntry.alloc().initWithXY(value.x ?? index, value.y);
            } else {
              entry = BarChartDataEntry.alloc().initWithXYData(value.x ?? index, value.y, value.marker);
            }
          }
          entries.push(entry);
        });
        const dataSet = BarChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
        if (ds.config) applyBarDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
        barDataSets.push(dataSet);
      }
      const barData = BarChartData.alloc().initWithDataSets(barDataSets);
      if ((this.data as CombinedChartData).barData!.config?.barWidth !== undefined) {
        barData.barWidth = (this.data as CombinedChartData).barData!.config!.barWidth!;
      }
      combinedData.barData = barData;
    }

    // Scatter data
    if ((this.data as CombinedChartData).scatterData) {
      const scatterDataSets: ScatterChartDataSet[] = [];
      for (const ds of (this.data as CombinedChartData).scatterData!.dataSets) {
        const entries: ChartDataEntry[] = [];
        ds.values.forEach((value: any, index: number) => {
          let entry: ChartDataEntry;
          if (typeof value === 'number') {
            entry = ChartDataEntry.alloc().initWithXY(index, value);
          } else {
            entry = ChartDataEntry.alloc().initWithXY(value.x ?? index, value.y);
          }
          entries.push(entry);
        });
        const dataSet = ScatterChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
        if (ds.config) applyScatterDataSetConfig(dataSet, ds.config);
        scatterDataSets.push(dataSet);
      }
      const scatterData = ScatterChartData.alloc().initWithDataSets(scatterDataSets);
      combinedData.scatterData = scatterData;
    }

    // Bubble data
    if ((this.data as CombinedChartData).bubbleData) {
      const bubbleDataSets: BubbleChartDataSet[] = [];
      for (const ds of (this.data as CombinedChartData).bubbleData!.dataSets) {
        const entries: BubbleChartDataEntry[] = [];
        ds.values.forEach((value: any, index: number) => {
          const entry = BubbleChartDataEntry.alloc().initWithXYSize(value.x ?? index, value.y, value.size);
          entries.push(entry);
        });
        const dataSet = BubbleChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
        if (ds.config) applyBubbleDataSetConfig(dataSet, ds.config);
        bubbleDataSets.push(dataSet);
      }
      const bubbleData = BubbleChartData.alloc().initWithDataSets(bubbleDataSets);
      combinedData.bubbleData = bubbleData;
    }

    // Candle data
    if ((this.data as CombinedChartData).candleData) {
      const candleDataSets: CandleChartDataSet[] = [];
      for (const ds of (this.data as CombinedChartData).candleData!.dataSets) {
        const entries: CandleChartDataEntry[] = [];
        ds.values.forEach((value: any, index: number) => {
          const entry = CandleChartDataEntry.alloc().initWithXShadowHShadowLOpenClose(value.x ?? index, value.shadowH, value.shadowL, value.open, value.close);
          entries.push(entry);
        });
        const dataSet = CandleChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
        if (ds.config) applyCandleDataSetConfig(dataSet, ds.config);
        candleDataSets.push(dataSet);
      }
      const candleData = CandleChartData.alloc().initWithDataSets(candleDataSets);
      combinedData.candleData = candleData;
    }

    // install custom renderer if needed
    this._updateCustomRenderer();

    // Use KVC to bypass readonly constraint from protocol
    instance.setValueForKey(combinedData, 'data');
    instance.notifyDataSetChanged();

    // data and animation properties cannot be set in a guranteed order
    // hence after each data update an animation needs to be executed
    if (this.animation) this._applyAnimation(this.animation);
  }

  private _updateCustomRenderer() {
    const barConfigs = this.data?.barData?.dataSets?.map((ds) => ds.config).filter(Boolean) ?? [];
    const plotBandConfigs = this.yAxis?.plotBands;
    const needsCustomRenderer = plotBandConfigs || barConfigs.some((cfg) => cfg?.drawValuesInside);
    if (!needsCustomRenderer) {
      this._combinedRenderer?.detach();
      this._combinedRenderer = null;
    } else if (this._combinedRenderer) {
      if (barConfigs) this._combinedRenderer.updateBarConfigs(barConfigs);
      if (plotBandConfigs) this._combinedRenderer.updatePlotBands(plotBandConfigs);
    } else {
      this._combinedRenderer = NSCombinedChartRenderer.create(this._native, barConfigs, this.yAxis?.plotBands);
    }
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
  protected _applyYAxis(yAxis: any): void {
    applyYAxisDualIOS(this._native, yAxis, this._retainedChartObjects);
    this._updateCustomRenderer();
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {
    applyMarkerIOS(this._native, marker, this._retainedChartObjects);
  }
  protected _moveViewToX(xValue: number): void {}
  protected _moveViewTo(xValue: number, yValue: number, axisDependency: string): void {}
  protected _centerViewTo(xValue: number, yValue: number, axisDependency: string): void {}
  protected _zoom(scaleX: number, scaleY: number, x: number, y: number): void {}
  protected _fitScreen(): void {}

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

  [highlightPerDragEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.highlightPerDragEnabled = value;
    }
  }

  [highlightPerTapEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.highlightPerTapEnabled = value;
    }
  }
}
