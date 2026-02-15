/**
 * RadarChart - Android Implementation
 */
import { RadarChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, RadarDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisAndroid, applyDescriptionAndroid } from './style-helpers.android';

function applyRadarDataSetConfig(dataSet: com.github.mikephil.charting.data.RadarDataSet, config: RadarDataSetConfig): void {
  if (!dataSet || !config) return;

  if (config.color) {
    const color = toAndroidColor(config.color);
    if (color !== undefined) dataSet.setColor(color);
  }
  if (config.colors) {
    const colors = new java.util.ArrayList<java.lang.Integer>();
    config.colors.forEach((c: any) => {
      const color = toAndroidColor(c);
      if (color !== undefined) colors.add(java.lang.Integer.valueOf(color));
    });
    dataSet.setColors(colors);
  }
  if (config.highlightEnabled !== undefined) dataSet.setHighlightEnabled(config.highlightEnabled);
  if (config.drawValues !== undefined) dataSet.setDrawValues(config.drawValues);
  if (config.valueTextSize !== undefined) dataSet.setValueTextSize(config.valueTextSize);
  if (config.valueTextColor) {
    const color = toAndroidColor(config.valueTextColor);
    if (color !== undefined) dataSet.setValueTextColor(color);
  }
  if (config.visible !== undefined) dataSet.setVisible(config.visible);
  if (config.highlightColor) {
    const color = toAndroidColor(config.highlightColor);
    if (color !== undefined) dataSet.setHighLightColor(color);
  }
  if (config.drawVerticalHighlightIndicator !== undefined) dataSet.setDrawVerticalHighlightIndicator(config.drawVerticalHighlightIndicator);
  if (config.drawHorizontalHighlightIndicator !== undefined) dataSet.setDrawHorizontalHighlightIndicator(config.drawHorizontalHighlightIndicator);
  if (config.highlightLineWidth !== undefined) dataSet.setHighlightLineWidth(config.highlightLineWidth);
  if (config.fillColor) {
    const color = toAndroidColor(config.fillColor);
    if (color !== undefined) dataSet.setFillColor(color);
  }
  if (config.fillAlpha !== undefined) dataSet.setFillAlpha(Math.round(config.fillAlpha));
  if (config.drawFilled !== undefined) dataSet.setDrawFilled(config.drawFilled);
  if (config.lineWidth !== undefined) dataSet.setLineWidth(config.lineWidth);
}

export class RadarChart extends RadarChartBase {
  private _native: com.github.mikephil.charting.charts.RadarChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] RadarChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.RadarChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] RadarChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    instance.setHighlightPerTapEnabled(this.highlightPerTapEnabled);
    if (this.chartBackgroundColor) {
      const color = toAndroidColor(this.chartBackgroundColor);
      if (color !== undefined) instance.setBackgroundColor(color);
    }
    if (this.noDataText) instance.setNoDataText(this.noDataText);
    applyNoDataTextColorAndroid(instance, this.noDataTextColor);

    // Set up selection listener
    const owner = new WeakRef(this);
    this._selectionListener = new com.github.mikephil.charting.listener.OnChartValueSelectedListener({
      onValueSelected: (entry: com.github.mikephil.charting.data.Entry, highlight: com.github.mikephil.charting.highlight.Highlight) => {
        const chart = owner.deref();
        if (chart) {
          const data = {
            x: entry.getX(),
            y: entry.getY(),
            dataSetIndex: highlight.getDataSetIndex(),
            dataIndex: highlight.getDataIndex(),
            data: entry.getData(),
          };
          chart.notify({ eventName: RadarChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: RadarChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) applyYAxisAndroid(instance.getYAxis(), this.yAxis as any);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    this._applyRadarChartConfig();
    if (this.data) this.applyData();
  }

  private _applyRadarChartConfig(): void {
    const instance = this._native!;
    instance.setWebLineWidth(this.webLineWidth);
    instance.setWebLineWidthInner(this.webLineWidthInner);
    instance.setWebAlpha(this.webAlpha);
    if (this.webColor) {
      const color = toAndroidColor(this.webColor);
      if (color !== undefined) instance.setWebColor(color);
    }
    if (this.webColorInner) {
      const color = toAndroidColor(this.webColorInner);
      if (color !== undefined) instance.setWebColorInner(color);
    }
    instance.setSkipWebLineCount(this.skipWebLineCount);
    instance.setRotationEnabled(this.rotationEnabled);
    instance.setRotationAngle(this.rotationAngle);
  }

  disposeNativeView(): void {
    this._selectionListener = null;
    this._native = null;
    this._nativeChart = null;
    super.disposeNativeView();
  }

  get nativeChart(): any {
    return this._native;
  }

  applyData(): void {
    if (!this._native || !this.data) return;

    nchartsLog('[ncharts] RadarChart._applyDataAndroid called');
    const instance = this._native;

    const dataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>();

    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.RadarEntry>();

      ds.values.forEach((value: any, index: number) => {
        let entry: com.github.mikephil.charting.data.RadarEntry;
        if (typeof value === 'number') {
          entry = new com.github.mikephil.charting.data.RadarEntry(value);
        } else {
          entry = new com.github.mikephil.charting.data.RadarEntry(value.value);
        }
        entries.add(entry);
      });

      const dataSet = new com.github.mikephil.charting.data.RadarDataSet(entries, ds.label);
      if (ds.config) {
        applyRadarDataSetConfig(dataSet, ds.config);
      }
      dataSets.add(dataSet);
    }

    const chartData = new com.github.mikephil.charting.data.RadarData(dataSets);

    // Apply labels to xAxis if provided
    if (this.data!.labels && this.data!.labels.length > 0) {
      const xAxis = instance.getXAxis();
      if (xAxis) {
        const labels = Array.create('java.lang.String', this.data!.labels.length);
        for (let i = 0; i < this.data!.labels.length; i++) {
          labels[i] = this.data!.labels[i];
        }
        const formatter = new com.github.mikephil.charting.formatter.IndexAxisValueFormatter(labels);
        xAxis.setValueFormatter(formatter);
      }
    }

    instance.setData(chartData);
    instance.invalidate();
  }

  protected _applyAnimation(animation: ChartAnimation): void {
    if (!this._native) return;

    const instance = this._native;
    const durationX = animation.durationX ?? 0;
    const durationY = animation.durationY ?? 0;
    if (durationX > 0 && durationY > 0) {
      instance.animateXY(durationX, durationY);
    } else if (durationX > 0) {
      instance.animateX(durationX);
    } else if (durationY > 0) {
      instance.animateY(durationY);
    }
  }

  protected _applyHighlights(highlights: Highlight[] | null): void {
    if (!this._native) return;

    if (!highlights || highlights.length === 0) {
      this._native.highlightValues(null);
      return;
    }

    const highlightArray: com.github.mikephil.charting.highlight.Highlight[] = [];
    for (const h of highlights) {
      const highlight = new com.github.mikephil.charting.highlight.Highlight(h.x, h.y ?? 0, h.dataSetIndex ?? 0);
      highlightArray.push(highlight);
    }
    this._native.highlightValues(highlightArray);
  }

  protected _invalidateChart(): void {
    this._native?.invalidate();
  }

  protected _applyLegend(legend: LegendConfig): void {
    applyLegendAndroid(this._native, legend);
  }
  protected _applyXAxis(xAxis: XAxisConfig): void {
    applyXAxisAndroid(this._native, xAxis);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionAndroid(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}
}
