/**
 * CandleStickChart - Android Implementation
 */
import { CandleStickChartBase, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, CandleDataSetConfig, nchartsLog, nchartsError, animationProperty, ViewPortOffset, extraOffsetsProperty } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisDualAndroid, applyDescriptionAndroid } from './style-helpers.android';

function applyCandleDataSetConfig(dataSet: com.github.mikephil.charting.data.CandleDataSet, config: CandleDataSetConfig): void {
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
  if (config.barSpace !== undefined) dataSet.setBarSpace(config.barSpace);
  if (config.shadowWidth !== undefined) dataSet.setShadowWidth(config.shadowWidth);
  if (config.shadowColor) {
    const color = toAndroidColor(config.shadowColor);
    if (color !== undefined) dataSet.setShadowColor(color);
  }
  if (config.shadowColorSameAsCandle !== undefined) dataSet.setShadowColorSameAsCandle(config.shadowColorSameAsCandle);
  if (config.neutralColor) {
    const color = toAndroidColor(config.neutralColor);
    if (color !== undefined) dataSet.setNeutralColor(color);
  }
  if (config.decreasingColor) {
    const color = toAndroidColor(config.decreasingColor);
    if (color !== undefined) dataSet.setDecreasingColor(color);
  }
  if (config.decreasingPaintStyle !== undefined) {
    const Paint = android.graphics.Paint;
    const styleMap: Record<string, any> = {
      FILL: Paint.Style.FILL,
      STROKE: Paint.Style.STROKE,
      FILL_AND_STROKE: Paint.Style.FILL_AND_STROKE,
    };
    dataSet.setDecreasingPaintStyle(styleMap[config.decreasingPaintStyle] ?? Paint.Style.FILL);
  }
  if (config.increasingColor) {
    const color = toAndroidColor(config.increasingColor);
    if (color !== undefined) dataSet.setIncreasingColor(color);
  }
  if (config.increasingPaintStyle !== undefined) {
    const Paint = android.graphics.Paint;
    const styleMap: Record<string, any> = {
      FILL: Paint.Style.FILL,
      STROKE: Paint.Style.STROKE,
      FILL_AND_STROKE: Paint.Style.FILL_AND_STROKE,
    };
    dataSet.setIncreasingPaintStyle(styleMap[config.increasingPaintStyle] ?? Paint.Style.STROKE);
  }
}

export class CandleStickChart extends CandleStickChartBase {
  private _native: com.github.mikephil.charting.charts.CandleStickChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;
  private _retainedChartObjects: Array<any> = [];

  createNativeView(): any {
    nchartsLog('[ncharts] CandleStickChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.CandleStickChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] CandleStickChart.initNativeView()');
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
          chart.notify({ eventName: CandleStickChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: CandleStickChart.deselectEvent, object: chart });
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
    this._retainedChartObjects.length = 0;
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

    nchartsLog('[ncharts] CandleStickChart._applyDataAndroid called');
    const instance = this._native;

    const dataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>();

    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.CandleEntry>();

      ds.values.forEach((value: any, index: number) => {
        const x = value.x ?? index;
        // CandleEntry: x, shadowH (high), shadowL (low), open, close
        const entry = new com.github.mikephil.charting.data.CandleEntry(x, value.shadowH, value.shadowL, value.open, value.close);
        entries.add(entry);
      });

      const dataSet = new com.github.mikephil.charting.data.CandleDataSet(entries, ds.label);
      if (ds.config) {
        applyCandleDataSetConfig(dataSet, ds.config);
      }
      dataSets.add(dataSet);
    }

    const chartData = new com.github.mikephil.charting.data.CandleData(dataSets);
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
    applyXAxisAndroid(this._native, xAxis, this._retainedChartObjects);
  }
  protected _applyYAxis(yAxis: YAxisConfigDual): void {
    applyYAxisDualAndroid(this._native, yAxis, this._retainedChartObjects);
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

  [extraOffsetsProperty.setNative](value: ViewPortOffset) {
    if (this._native && value) {
      this._native.setExtraOffsets(value.left, value.top, value.right, value.bottom);
      this._native.invalidate();
    }
  }
}
