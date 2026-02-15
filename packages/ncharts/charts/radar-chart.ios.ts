/**
 * RadarChart - iOS Implementation
 */
import { RadarChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, RadarDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toUIColor, parseEasingIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyYAxisIOS, applyDescriptionIOS } from './style-helpers.ios';

@NativeClass()
class RadarChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<RadarChart>;

  static initWithOwner(owner: RadarChart): RadarChartViewDelegateImpl {
    const delegate = RadarChartViewDelegateImpl.new() as RadarChartViewDelegateImpl;
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
      owner.notify({ eventName: RadarChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: RadarChart.deselectEvent, object: owner });
    }
  }
}

function applyRadarDataSetConfig(dataSet: RadarChartDataSet, config: RadarDataSetConfig): void {
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
}

export class RadarChart extends RadarChartBase {
  private _native: RadarChartView | null = null;
  private _delegate: RadarChartViewDelegateImpl | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] RadarChart.createNativeView()');
    this._native = RadarChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] RadarChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    instance.highlightPerTapEnabled = this.highlightPerTapEnabled;

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

    // Set up selection delegate
    this._delegate = RadarChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) applyYAxisIOS(instance.yAxis, this.yAxis as any);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    this._applyRadarChartConfig();
    if (this.data) this.applyData();
  }

  private _applyRadarChartConfig(): void {
    const instance = this._native!;
    instance.webLineWidth = this.webLineWidth;
    instance.innerWebLineWidth = this.webLineWidthInner;
    instance.webAlpha = this.webAlpha / 255.0;
    if (this.webColor) instance.webColor = toUIColor(this.webColor);
    if (this.webColorInner) instance.innerWebColor = toUIColor(this.webColorInner);
    instance.skipWebLineCount = this.skipWebLineCount;
    instance.rotationEnabled = this.rotationEnabled;
    instance.rotationAngle = this.rotationAngle;
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

    nchartsLog('[ncharts] RadarChart._applyDataIOS called');
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
    const dataSets: RadarChartDataSet[] = [];

    for (const ds of this.data!.dataSets) {
      const entries: RadarChartDataEntry[] = [];

      ds.values.forEach((value: any, index: number) => {
        let entry: RadarChartDataEntry;
        if (typeof value === 'number') {
          entry = RadarChartDataEntry.alloc().initWithValue(value);
        } else {
          entry = RadarChartDataEntry.alloc().initWithValue(value.value);
        }
        entries.push(entry);
      });

      const dataSet = RadarChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);
      if (ds.config) {
        applyRadarDataSetConfig(dataSet, ds.config);
      }
      dataSets.push(dataSet);
    }

    const chartData = RadarChartData.alloc().initWithDataSets(dataSets);

    // Apply labels to xAxis if provided
    if (this.data!.labels && this.data!.labels.length > 0) {
      // Set xAxis labels via value formatter
      const xAxis = instance.xAxis;
      if (xAxis) {
        const labels = this.data!.labels;
        // Create a custom value formatter
        const formatter = ChartIndexAxisValueFormatter.alloc().initWithValues(labels as any);
        xAxis.valueFormatter = formatter;
      }
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

  protected _applyLegend(legend: LegendConfig): void {
    applyLegendIOS(this._native, legend);
  }
  protected _applyXAxis(xAxis: XAxisConfig): void {
    applyXAxisIOS(this._native, xAxis);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}
}
