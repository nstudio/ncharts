/**
 * LineChart - Android Implementation
 */
import { LineChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, LineDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisDualAndroid, applyDescriptionAndroid } from './style-helpers.android';

function applyLineDataSetConfig(dataSet: com.github.mikephil.charting.data.LineDataSet, config: LineDataSetConfig): void {
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
  if (config.circleRadius !== undefined) dataSet.setCircleRadius(config.circleRadius);
  if (config.drawCircles !== undefined) dataSet.setDrawCircles(config.drawCircles);
  if (config.mode) {
    const Mode = com.github.mikephil.charting.data.LineDataSet.Mode;
    const modeMap: Record<string, any> = {
      LINEAR: Mode.LINEAR,
      STEPPED: Mode.STEPPED,
      CUBIC_BEZIER: Mode.CUBIC_BEZIER,
      HORIZONTAL_BEZIER: Mode.HORIZONTAL_BEZIER,
    };
    dataSet.setMode(modeMap[config.mode] ?? Mode.LINEAR);
  }
  if (config.circleColor) {
    const color = toAndroidColor(config.circleColor);
    if (color !== undefined) dataSet.setCircleColor(color);
  }
  if (config.circleHoleColor) {
    const color = toAndroidColor(config.circleHoleColor);
    if (color !== undefined) dataSet.setCircleHoleColor(color);
  }
  if (config.drawCircleHole !== undefined) dataSet.setDrawCircleHole(config.drawCircleHole);
}

export class LineChart extends LineChartBase {
  private _native: com.github.mikephil.charting.charts.LineChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] LineChart.createNativeView()');
    const context = this._context;
    this._native = new com.github.mikephil.charting.charts.LineChart(context);
    this._nativeChart = this._native;
    nchartsLog('[ncharts] LineChart created:', this._native);
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] LineChart.initNativeView()');
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
          chart.notify({ eventName: LineChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: LineChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.yAxis) this._applyYAxis(this.yAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    if (this.data) {
      this.applyData();
    }
  }

  disposeNativeView(): void {
    nchartsLog('[ncharts] LineChart.disposeNativeView()');
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

    nchartsLog('[ncharts] _applyDataAndroid called');
    const instance = this._native;

    const dataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>();

    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.Entry>();

      ds.values.forEach((value: any, index: number) => {
        let entry: com.github.mikephil.charting.data.Entry;
        if (typeof value === 'number') {
          entry = new com.github.mikephil.charting.data.Entry(index, value);
        } else {
          const x = value.x ?? index;
          entry = new com.github.mikephil.charting.data.Entry(x, value.y);
        }
        entries.add(entry);
      });

      const dataSet = new com.github.mikephil.charting.data.LineDataSet(entries, ds.label);
      if (ds.config) {
        applyLineDataSetConfig(dataSet, ds.config);
      }
      dataSets.add(dataSet);
    }

    const chartData = new com.github.mikephil.charting.data.LineData(dataSets);
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

  protected _applyMarker(marker: MarkerConfig): void {
    // TODO: implement
  }

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
