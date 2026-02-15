/**
 * BarChart - Android Implementation
 */
import { BarChartBase, HorizontalBarChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, BarDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisDualAndroid, applyDescriptionAndroid } from './style-helpers.android';

function applyBarDataSetConfig(dataSet: com.github.mikephil.charting.data.BarDataSet, config: BarDataSetConfig): void {
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
  if (config.highlightAlpha !== undefined) dataSet.setHighLightAlpha(Math.round(config.highlightAlpha));
  if (config.barShadowColor) {
    const color = toAndroidColor(config.barShadowColor);
    if (color !== undefined) dataSet.setBarShadowColor(color);
  }
  if (config.stackLabels) {
    dataSet.setStackLabels(config.stackLabels);
  }
}

export class BarChart extends BarChartBase {
  protected _native: com.github.mikephil.charting.charts.BarChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] BarChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.BarChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
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
          chart.notify({ eventName: BarChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: BarChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) this._applyYAxis(this.yAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    if (this.data) this.applyData();
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

    nchartsLog('[ncharts] BarChart._applyDataAndroid called');
    const instance = this._native;

    const dataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>();

    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.BarEntry>();

      ds.values.forEach((value: any, index: number) => {
        let entry: com.github.mikephil.charting.data.BarEntry;
        if (typeof value === 'number') {
          entry = new com.github.mikephil.charting.data.BarEntry(index, value);
        } else if (Array.isArray(value)) {
          // Stacked bar values
          const yVals = Array.create('float', value.length);
          value.forEach((v: number, i: number) => {
            yVals[i] = v;
          });
          entry = new com.github.mikephil.charting.data.BarEntry(index, yVals);
        } else {
          const x = value.x ?? index;
          if (Array.isArray(value.y)) {
            // Stacked bar with x
            const yVals = Array.create('float', value.y.length);
            value.y.forEach((v: number, i: number) => {
              yVals[i] = v;
            });
            entry = new com.github.mikephil.charting.data.BarEntry(x, yVals);
          } else {
            entry = new com.github.mikephil.charting.data.BarEntry(x, value.y);
          }
        }
        entries.add(entry);
      });

      const dataSet = new com.github.mikephil.charting.data.BarDataSet(entries, ds.label);
      if (ds.config) {
        applyBarDataSetConfig(dataSet, ds.config);
      }
      dataSets.add(dataSet);
    }

    const chartData = new com.github.mikephil.charting.data.BarData(dataSets);

    // Apply bar width if configured
    if (this.data!.config?.barWidth !== undefined) {
      chartData.setBarWidth(this.data!.config.barWidth);
    }

    // Apply grouping if configured
    if (this.data!.config?.group && dataSets.size() > 1) {
      const group = this.data!.config.group;
      chartData.groupBars(group.fromX, group.groupSpace, group.barSpace);
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
  protected _applyYAxis(yAxis: YAxisConfigDual): void {
    applyYAxisDualAndroid(this._native, yAxis);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionAndroid(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}

  protected _moveViewToX(xValue: number): void {
    this._native?.moveViewToX(xValue);
  }

  protected _moveViewTo(xValue: number, yValue: number, axisDependency: string): void {
    const YAxis = com.github.mikephil.charting.components.YAxis;
    const axis = axisDependency === 'RIGHT' ? YAxis.AxisDependency.RIGHT : YAxis.AxisDependency.LEFT;
    this._native?.moveViewTo(xValue, yValue, axis);
  }

  protected _centerViewTo(xValue: number, yValue: number, axisDependency: string): void {
    const YAxis = com.github.mikephil.charting.components.YAxis;
    const axis = axisDependency === 'RIGHT' ? YAxis.AxisDependency.RIGHT : YAxis.AxisDependency.LEFT;
    this._native?.centerViewTo(xValue, yValue, axis);
  }

  protected _zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axisDependency: string): void {
    const YAxis = com.github.mikephil.charting.components.YAxis;
    const axis = axisDependency === 'RIGHT' ? YAxis.AxisDependency.RIGHT : YAxis.AxisDependency.LEFT;
    this._native?.zoom(scaleX, scaleY, xValue, yValue, axis);
  }

  protected _fitScreen(): void {
    this._native?.fitScreen();
  }
}

export class HorizontalBarChart extends BarChart {
  createNativeView(): any {
    nchartsLog('[ncharts] HorizontalBarChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.HorizontalBarChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }
}
