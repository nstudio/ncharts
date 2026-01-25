/**
 * ScatterChart - Android Implementation
 */
import { ScatterChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, ScatterDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toAndroidColor } from './utils';

function applyScatterDataSetConfig(dataSet: com.github.mikephil.charting.data.ScatterDataSet, config: ScatterDataSetConfig): void {
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
  if (config.scatterShapeSize !== undefined) dataSet.setScatterShapeSize(config.scatterShapeSize);
  if (config.scatterShape) {
    const ScatterShape = com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
    const shapeMap: Record<string, any> = {
      SQUARE: ScatterShape.SQUARE,
      CIRCLE: ScatterShape.CIRCLE,
      TRIANGLE: ScatterShape.TRIANGLE,
      CROSS: ScatterShape.CROSS,
      X: ScatterShape.X,
    };
    dataSet.setScatterShape(shapeMap[config.scatterShape] ?? ScatterShape.CIRCLE);
  }
  if (config.scatterShapeHoleColor) {
    const color = toAndroidColor(config.scatterShapeHoleColor);
    if (color !== undefined) dataSet.setScatterShapeHoleColor(color);
  }
  if (config.scatterShapeHoleRadius !== undefined) dataSet.setScatterShapeHoleRadius(config.scatterShapeHoleRadius);
}

export class ScatterChart extends ScatterChartBase {
  private _native: com.github.mikephil.charting.charts.ScatterChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;

  createNativeView(): any {
    nchartsLog('[ncharts] ScatterChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.ScatterChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] ScatterChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    instance.setHighlightPerTapEnabled(this.highlightPerTapEnabled);
    if (this.chartBackgroundColor) {
      const color = toAndroidColor(this.chartBackgroundColor);
      if (color !== undefined) instance.setBackgroundColor(color);
    }
    if (this.noDataText) instance.setNoDataText(this.noDataText);

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
          chart.notify({ eventName: ScatterChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: ScatterChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

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

    nchartsLog('[ncharts] ScatterChart._applyDataAndroid called');
    const instance = this._native;

    const dataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>();

    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.Entry>();

      // sort before adding into entries
      // before hitting the Transformer bug
      const sort = ds.values
        .map((value: any, index: number) => {
          if (typeof value === 'number') {
            return { x: index, y: value };
          }
          return { x: value.x ?? index, y: value.y };
        })
        .sort((a, b) => a.x - b.x);

      for (const value of sort) {
        entries.add(new com.github.mikephil.charting.data.Entry(value.x, value.y));
      }

      const dataSet = new com.github.mikephil.charting.data.ScatterDataSet(entries, ds.label);
      if (ds.config) {
        applyScatterDataSetConfig(dataSet, ds.config);
      }
      dataSets.add(dataSet);
    }

    const chartData = new com.github.mikephil.charting.data.ScatterData(dataSets);
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

    const highlightArray = Array.create('com.github.mikephil.charting.highlight.Highlight', highlights.length);
    for (let i = 0; i < highlights.length; i++) {
      const h = highlights[i];
      const highlight = new com.github.mikephil.charting.highlight.Highlight(h.x, h.y ?? 0, h.dataSetIndex ?? 0);
      highlightArray[i] = highlight;
    }
    this._native.highlightValues(highlightArray);
  }

  protected _invalidateChart(): void {
    this._native?.invalidate();
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
