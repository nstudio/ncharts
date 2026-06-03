/**
 * CombinedChart - Android Implementation
 */
import { CombinedChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, LineDataSetConfig, BarDataSetConfig, ScatterDataSetConfig, BubbleDataSetConfig, CandleDataSetConfig, CombinedChartData, nchartsLog, nchartsError, DrawOrderCombinedChart, ViewPortOffset, extraOffsetsProperty, animationProperty, touchEnabledProperty, dragEnabledProperty, scaleEnabledProperty, pinchZoomProperty, highlightPerDragEnabledProperty, highlightPerTapEnabledProperty } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisDualAndroid, applyDescriptionAndroid, applyMarkerAndroid } from './style-helpers.android';
import { NSCustomLabelsArrayFormatter } from './formatters/custom-labels-array-formatter.android';
import { NSCombinedChartRenderer } from './renderers/combined-chart-renderer.android';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.android';
import { ChartPagingDetector } from './chart-paging-detector/chart-paging-detector';

function applyLineDataSetConfig(dataSet: com.github.mikephil.charting.data.LineDataSet, config: LineDataSetConfig, retainedDataObjects: com.github.mikephil.charting.formatter.ValueFormatter[]): void {
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
  if (config.lineWidth !== undefined) dataSet.setLineWidth(config.lineWidth);
  if (config.drawCircles !== undefined) dataSet.setDrawCircles(config.drawCircles);
  if (config.circleRadius !== undefined) dataSet.setCircleRadius(config.circleRadius);
  if (config.circleColor) {
    const color = toAndroidColor(config.circleColor);
    if (color !== undefined) dataSet.setCircleColor(color);
  }
  if (config.circleHoleColor) {
    const color = toAndroidColor(config.circleHoleColor);
    if (color !== undefined) dataSet.setCircleHoleColor(color);
  }
  if (config.drawCircleHole !== undefined) dataSet.setDrawCircleHole(config.drawCircleHole);
  if (config.drawFilled !== undefined) dataSet.setDrawFilled(config.drawFilled);
  if (config.mode !== undefined) {
    switch (config.mode) {
      case 'LINEAR':
        dataSet.setMode(com.github.mikephil.charting.data.LineDataSet.Mode.LINEAR);
        break;
      case 'STEPPED':
        dataSet.setMode(com.github.mikephil.charting.data.LineDataSet.Mode.STEPPED);
        break;
      case 'CUBIC_BEZIER':
        dataSet.setMode(com.github.mikephil.charting.data.LineDataSet.Mode.CUBIC_BEZIER);
        break;
      case 'HORIZONTAL_BEZIER':
        dataSet.setMode(com.github.mikephil.charting.data.LineDataSet.Mode.HORIZONTAL_BEZIER);
        break;
    }
  }
  if (config.drawCubicIntensity !== undefined) dataSet.setCubicIntensity(config.drawCubicIntensity);
  if (config.valueFormatter === 'number') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.setValueFormatter(vf);
    retainedDataObjects.push(vf);
  } else if (Array.isArray(config.valueFormatter)) {
    const vf = new NSCustomLabelsArrayFormatter(config.valueFormatter);
    dataSet.setValueFormatter(vf);
    retainedDataObjects.push(vf);
  }
}

function applyBarDataSetConfig(dataSet: com.github.mikephil.charting.data.BarDataSet, config: BarDataSetConfig, retainedDataObjects: com.github.mikephil.charting.formatter.ValueFormatter[]): void {
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
  if (config.axisDependency) {
    dataSet.setAxisDependency(config.axisDependency === 'RIGHT' ? com.github.mikephil.charting.components.YAxis.AxisDependency.RIGHT : com.github.mikephil.charting.components.YAxis.AxisDependency.LEFT);
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
  if (config.barBorderWidth !== undefined) {
    dataSet.setBarBorderWidth(config.barBorderWidth);
  }
  if (config.barBorderColor) {
    const color = toAndroidColor(config.barBorderColor);
    if (color !== undefined) dataSet.setBarBorderColor(color);
  }
  if (config.valueFormatter === 'percent' || config.valueFormatter === 'suffix') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.setValueFormatter(vf);
    retainedDataObjects.push(vf);
  }
}

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
  if (config.scatterShapeSize !== undefined) dataSet.setScatterShapeSize(config.scatterShapeSize);
  if (config.scatterShape) {
    switch (config.scatterShape) {
      case 'SQUARE':
        dataSet.setScatterShape(com.github.mikephil.charting.charts.ScatterChart.ScatterShape.SQUARE);
        break;
      case 'CIRCLE':
        dataSet.setScatterShape(com.github.mikephil.charting.charts.ScatterChart.ScatterShape.CIRCLE);
        break;
      case 'TRIANGLE':
        dataSet.setScatterShape(com.github.mikephil.charting.charts.ScatterChart.ScatterShape.TRIANGLE);
        break;
      case 'CROSS':
        dataSet.setScatterShape(com.github.mikephil.charting.charts.ScatterChart.ScatterShape.CROSS);
        break;
      case 'X':
        dataSet.setScatterShape(com.github.mikephil.charting.charts.ScatterChart.ScatterShape.X);
        break;
    }
  }
  if (config.scatterShapeHoleRadius !== undefined) dataSet.setScatterShapeHoleRadius(config.scatterShapeHoleRadius);
  if (config.scatterShapeHoleColor) {
    const color = toAndroidColor(config.scatterShapeHoleColor);
    if (color !== undefined) dataSet.setScatterShapeHoleColor(color);
  }
}

function applyBubbleDataSetConfig(dataSet: com.github.mikephil.charting.data.BubbleDataSet, config: BubbleDataSetConfig): void {
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
  dataSet.setNormalizeSizeEnabled(false);
}

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
  if (config.shadowWidth !== undefined) dataSet.setShadowWidth(config.shadowWidth);
  if (config.shadowColorSameAsCandle !== undefined) dataSet.setShadowColorSameAsCandle(config.shadowColorSameAsCandle);
  if (config.shadowColor) {
    const color = toAndroidColor(config.shadowColor);
    if (color !== undefined) dataSet.setShadowColor(color);
  }
  if (config.increasingColor) {
    const color = toAndroidColor(config.increasingColor);
    if (color !== undefined) dataSet.setIncreasingColor(color);
  }
  if (config.decreasingColor) {
    const color = toAndroidColor(config.decreasingColor);
    if (color !== undefined) dataSet.setDecreasingColor(color);
  }
  if (config.increasingPaintStyle !== undefined) {
    const style = config.increasingPaintStyle === 'FILL' ? android.graphics.Paint.Style.FILL : config.increasingPaintStyle === 'STROKE' ? android.graphics.Paint.Style.STROKE : android.graphics.Paint.Style.FILL_AND_STROKE;
    dataSet.setIncreasingPaintStyle(style);
  }
  if (config.decreasingPaintStyle !== undefined) {
    const style = config.decreasingPaintStyle === 'FILL' ? android.graphics.Paint.Style.FILL : config.decreasingPaintStyle === 'STROKE' ? android.graphics.Paint.Style.STROKE : android.graphics.Paint.Style.FILL_AND_STROKE;
    dataSet.setDecreasingPaintStyle(style);
  }
  if (config.neutralColor) {
    const color = toAndroidColor(config.neutralColor);
    if (color !== undefined) dataSet.setNeutralColor(color);
  }
  if (config.barSpace !== undefined) dataSet.setBarSpace(config.barSpace);
}

export class CombinedChart extends CombinedChartBase {
  private _native: com.github.mikephil.charting.charts.CombinedChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;
  private _combinedRenderer: NSCombinedChartRenderer | null = null;
  private _pageDetector: ChartPagingDetector | null = null;
  private _retainedChartObjects: Array<any> = [];
  private _retainedDataObjects: com.github.mikephil.charting.formatter.ValueFormatter[] = [];

  createNativeView(): any {
    nchartsLog('[ncharts] CombinedChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.CombinedChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] CombinedChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
    if (this.chartBackgroundColor) {
      const color = toAndroidColor(this.chartBackgroundColor);
      if (color !== undefined) instance.setBackgroundColor(color);
    }
    if (this.noDataText) instance.setNoDataText(this.noDataText);
    applyNoDataTextColorAndroid(instance, this.noDataTextColor);

    // angular directive does not await presence of native chart, hence setup needs to happen here
    if (this.touchEnabled !== undefined) instance.setTouchEnabled(this.touchEnabled);
    if (this.dragEnabled !== undefined) instance.setDragEnabled(this.dragEnabled);
    if (this.scaleEnabled !== undefined) instance.setScaleEnabled(this.scaleEnabled);
    if (this.pinchZoom !== undefined) instance.setPinchZoom(this.pinchZoom);
    if (this.highlightPerDragEnabled !== undefined) instance.setHighlightPerDragEnabled(this.highlightPerDragEnabled);

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
          chart.notify({ eventName: CombinedChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: CombinedChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

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
    this._combinedRenderer?.detach();
    this._combinedRenderer = null;
    this._retainedChartObjects.length = 0;
    this._retainedDataObjects.length = 0;
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

    nchartsLog('[ncharts] CombinedChart._applyDataAndroid called');
    const instance = this._native;

    // remove retained data objects
    this._retainedDataObjects.length = 0;

    // Setup of non-default draw order, order matters (before setting data)
    if ((this.data as CombinedChartData)?.drawOrder) {
      const order: Array<DrawOrderCombinedChart> = this.data.drawOrder;

      const toAndroidDrawOrder = (value: DrawOrderCombinedChart) => com.github.mikephil.charting.charts.CombinedChart.DrawOrder[value];

      const orderArray = java.lang.reflect.Array.newInstance(com.github.mikephil.charting.charts.CombinedChart.DrawOrder.class, order.length) as androidNative.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;

      for (let i = 0; i < order.length; i++) {
        orderArray[i] = toAndroidDrawOrder(order[i]);
      }
      instance.setDrawOrder(orderArray);
    }

    const combinedData = new com.github.mikephil.charting.data.CombinedData();

    // Line data
    if ((this.data as CombinedChartData).lineData) {
      const lineDataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>();
      for (const ds of (this.data as CombinedChartData).lineData!.dataSets) {
        const entries = new java.util.ArrayList<com.github.mikephil.charting.data.Entry>();
        ds.values.forEach((value: any, index: number) => {
          let entry: com.github.mikephil.charting.data.Entry;

          if (typeof value === 'number') {
            entry = new com.github.mikephil.charting.data.Entry(index, value);
          } else {
            const x = value.x ?? index;
            if (!value.marker) {
              entry = new com.github.mikephil.charting.data.Entry(x, value.y);
            } else {
              entry = new com.github.mikephil.charting.data.Entry(x, value.y, value.marker);
            }
          }
          entries.add(entry);
        });
        const dataSet = new com.github.mikephil.charting.data.LineDataSet(entries, ds.label);
        if (ds.config) applyLineDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
        lineDataSets.add(dataSet);
      }
      const lineData = new com.github.mikephil.charting.data.LineData(lineDataSets);
      combinedData.setData(lineData);
    }

    // Bar data
    if ((this.data as CombinedChartData).barData) {
      const barDataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>();
      for (const ds of (this.data as CombinedChartData).barData!.dataSets) {
        const entries = new java.util.ArrayList<com.github.mikephil.charting.data.BarEntry>();
        ds.values.forEach((value: any, index: number) => {
          let entry: com.github.mikephil.charting.data.BarEntry;
          if (typeof value === 'number') {
            entry = new com.github.mikephil.charting.data.BarEntry(index, value);
          } else if (Array.isArray(value.y)) {
            const x = value.x ?? index;
            const stack = Array.create('float', value.y.length);
            for (let i = 0; i < value.y.length; i++) {
              stack[i] = value.y[i];
            }
            if (!value.marker) {
              entry = new com.github.mikephil.charting.data.BarEntry(x, stack);
            } else {
              entry = new com.github.mikephil.charting.data.BarEntry(x, stack, value.marker);
            }
          } else {
            if (!value.marker) {
              entry = new com.github.mikephil.charting.data.BarEntry(value.x ?? index, value.y);
            } else {
              entry = new com.github.mikephil.charting.data.BarEntry(value.x ?? index, value.y, value.marker);
            }
          }
          entries.add(entry);
        });
        const dataSet = new com.github.mikephil.charting.data.BarDataSet(entries, ds.label);
        if (ds.config) applyBarDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
        barDataSets.add(dataSet);
      }
      const barData = new com.github.mikephil.charting.data.BarData(barDataSets);
      if ((this.data as CombinedChartData).barData!.config?.barWidth !== undefined) {
        barData.setBarWidth((this.data as CombinedChartData).barData!.config!.barWidth!);
      }
      combinedData.setData(barData);
    }

    // Scatter data
    if ((this.data as CombinedChartData).scatterData) {
      const scatterDataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>();
      for (const ds of (this.data as CombinedChartData).scatterData!.dataSets) {
        const entries = new java.util.ArrayList<com.github.mikephil.charting.data.Entry>();
        ds.values.forEach((value: any, index: number) => {
          let entry: com.github.mikephil.charting.data.Entry;
          if (typeof value === 'number') {
            entry = new com.github.mikephil.charting.data.Entry(index, value);
          } else {
            entry = new com.github.mikephil.charting.data.Entry(value.x ?? index, value.y);
          }
          entries.add(entry);
        });
        const dataSet = new com.github.mikephil.charting.data.ScatterDataSet(entries, ds.label);
        if (ds.config) applyScatterDataSetConfig(dataSet, ds.config);
        scatterDataSets.add(dataSet);
      }
      const scatterData = new com.github.mikephil.charting.data.ScatterData(scatterDataSets);
      combinedData.setData(scatterData);
    }

    // Bubble data
    if ((this.data as CombinedChartData).bubbleData) {
      const bubbleDataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>();
      for (const ds of (this.data as CombinedChartData).bubbleData!.dataSets) {
        const entries = new java.util.ArrayList<com.github.mikephil.charting.data.BubbleEntry>();
        ds.values.forEach((value: any, index: number) => {
          const entry = new com.github.mikephil.charting.data.BubbleEntry(value.x ?? index, value.y, value.size);
          entries.add(entry);
        });
        const dataSet = new com.github.mikephil.charting.data.BubbleDataSet(entries, ds.label);
        if (ds.config) applyBubbleDataSetConfig(dataSet, ds.config);
        bubbleDataSets.add(dataSet);
      }
      const bubbleData = new com.github.mikephil.charting.data.BubbleData(bubbleDataSets);
      combinedData.setData(bubbleData);
    }

    // Candle data
    if ((this.data as CombinedChartData).candleData) {
      const candleDataSets = new java.util.ArrayList<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>();
      for (const ds of (this.data as CombinedChartData).candleData!.dataSets) {
        const entries = new java.util.ArrayList<com.github.mikephil.charting.data.CandleEntry>();
        ds.values.forEach((value: any, index: number) => {
          const entry = new com.github.mikephil.charting.data.CandleEntry(value.x ?? index, value.shadowH, value.shadowL, value.open, value.close);
          entries.add(entry);
        });
        const dataSet = new com.github.mikephil.charting.data.CandleDataSet(entries, ds.label);
        if (ds.config) applyCandleDataSetConfig(dataSet, ds.config);
        candleDataSets.add(dataSet);
      }
      const candleData = new com.github.mikephil.charting.data.CandleData(candleDataSets);
      combinedData.setData(candleData);
    }

    // install custom renderer if needed
    this._updateCustomRenderer();

    instance.setData(combinedData);
    instance.invalidate();

    // data and animation properties cannot be set in a guranteed order
    // hence after each data update an animation needs to be executed
    if (this.animation) this._applyAnimation(this.animation);
  }

  private _updateCustomRenderer() {
    const barConfigs = this.data?.barData?.dataSets?.map((ds) => ds.config).filter(Boolean) ?? [];
    const needsCustomRenderer = this.yAxis?.plotBands?.length || barConfigs.some((cfg) => cfg?.drawValuesInside);
    if (!needsCustomRenderer) {
      this._combinedRenderer?.detach();
      this._combinedRenderer = null;
    } else {
      this._combinedRenderer?.detach();
      this._combinedRenderer = NSCombinedChartRenderer.create(this._native, barConfigs, this.yAxis?.plotBands);
      this._native.notifyDataSetChanged();
    }
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
  protected _applyYAxis(yAxis: any): void {
    applyYAxisDualAndroid(this._native, yAxis, this._retainedChartObjects);
    this._updateCustomRenderer();
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionAndroid(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {
    applyMarkerAndroid(this._native, marker, this._retainedChartObjects);
  }
  protected _moveViewToX(xValue: number): void {}
  protected _moveViewTo(xValue: number, yValue: number, axisDependency: string): void {}
  protected _centerViewTo(xValue: number, yValue: number, axisDependency: string): void {}
  protected _zoom(scaleX: number, scaleY: number, x: number, y: number): void {}
  protected _fitScreen(): void {}

  [extraOffsetsProperty.setNative](value: ViewPortOffset) {
    if (this._native && value) {
      this._native.setExtraOffsets(value.left, value.top, value.right, value.bottom);
      this._native.invalidate();
    }
  }
  [touchEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setTouchEnabled(value);
    }
  }

  [dragEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setDragEnabled(value);
    }
  }

  [scaleEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setScaleEnabled(value);
    }
  }

  [pinchZoomProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setPinchZoom(value);
    }
  }

  [highlightPerDragEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setHighlightPerDragEnabled(value);
    }
  }

  [highlightPerTapEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setHighlightPerTapEnabled(value);
    }
  }
}
