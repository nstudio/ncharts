/**
 * PieChart - Android Implementation
 */
import { PieChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, PieDataSetConfig, nchartsLog, nchartsError, animationProperty, extraOffsetsProperty, ViewPortOffset, rotationEnabledProperty, centerTextProperty, centerTextColorProperty, centerTextSizeProperty, drawHoleProperty, holeRadiusProperty, transparentCircleRadiusProperty, holeColorProperty, ChartColor, transparentCircleColorProperty, drawCenterTextProperty, drawSliceTextProperty, sliceTextSizeProperty, sliceTextColorProperty, usePercentValuesProperty, maxAngleProperty, highlightPerTapEnabledProperty, touchEnabledProperty } from '../common';
import { toAndroidColor } from './utils';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyDescriptionAndroid } from './style-helpers.android';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.android';

function applyPieDataSetConfig(dataSet: com.github.mikephil.charting.data.PieDataSet, config: PieDataSetConfig, retainedDataObjects: Array<any>): void {
  if (!dataSet || !config) return;

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

  const isOutsideSlice = config.xValuePosition === 'OUTSIDE_SLICE' || config.yValuePosition === 'OUTSIDE_SLICE';
  if (config.valueTextColor) {
    const color = toAndroidColor(config.valueTextColor);
    if (color !== undefined) dataSet.setValueTextColor(color);
  } else if (isOutsideSlice) {
    const sliceColors = dataSet.getColors();
    if (sliceColors) {
      dataSet.setValueTextColors(sliceColors);
    }
  } else if (config.color) {
    const color = toAndroidColor(config.color);
    if (color !== undefined) {
      dataSet.setValueTextColor(color);
    }
  }
  if (config.visible !== undefined) dataSet.setVisible(config.visible);
  if (config.sliceSpace !== undefined) dataSet.setSliceSpace(config.sliceSpace);
  if (config.selectionShift !== undefined) dataSet.setSelectionShift(config.selectionShift);
  if (config.xValuePosition) {
    const ValuePosition = com.github.mikephil.charting.data.PieDataSet.ValuePosition;
    dataSet.setXValuePosition(config.xValuePosition === 'OUTSIDE_SLICE' ? ValuePosition.OUTSIDE_SLICE : ValuePosition.INSIDE_SLICE);
  }
  if (config.yValuePosition) {
    const ValuePosition = com.github.mikephil.charting.data.PieDataSet.ValuePosition;
    dataSet.setYValuePosition(config.yValuePosition === 'OUTSIDE_SLICE' ? ValuePosition.OUTSIDE_SLICE : ValuePosition.INSIDE_SLICE);
  }
  if (config.valueLinePart1Length !== undefined) dataSet.setValueLinePart1Length(config.valueLinePart1Length);
  if (config.valueLinePart2Length !== undefined) dataSet.setValueLinePart2Length(config.valueLinePart2Length);
  if (config.valueLineColor) {
    const color = toAndroidColor(config.valueLineColor);
    if (color !== undefined) dataSet.setValueLineColor(color);
  } else {
    dataSet.setUsingSliceColorAsValueLineColor(true);
  }
  if (config.valueLineWidth !== undefined) dataSet.setValueLineWidth(config.valueLineWidth);
  if (config.valueLinePart1OffsetPercentage !== undefined) dataSet.setValueLinePart1OffsetPercentage(config.valueLinePart1OffsetPercentage);
  if (config.valueLineVariableLength !== undefined) dataSet.setValueLineVariableLength(config.valueLineVariableLength);

  if (config.valueFormatter === 'number' || config.valueFormatter === 'suffix' || config.valueFormatter === 'percent') {
    const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
    dataSet.setValueFormatter(vf);
    retainedDataObjects.push(vf);
  }
}

export class PieChart extends PieChartBase {
  private _native: com.github.mikephil.charting.charts.PieChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;
  private _retainedChartObjects: Array<any> = [];
  private _retainedDataObjects: Array<any> = [];

  createNativeView(): any {
    nchartsLog('[ncharts] PieChart.createNativeView()');
    this._native = new com.github.mikephil.charting.charts.PieChart(this._context);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] PieChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;
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
          chart.notify({ eventName: PieChart.selectEvent, object: chart, data });
        }
      },
      onNothingSelected: () => {
        const chart = owner.deref();
        if (chart) {
          chart.notify({ eventName: PieChart.deselectEvent, object: chart });
        }
      },
    });
    instance.setOnChartValueSelectedListener(this._selectionListener);

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    this._applyPieChartConfig();
    if (this.data) this.applyData();
  }

  disposeNativeView(): void {
    this._retainedChartObjects.length = 0;
    this._retainedDataObjects.length = 0;
    this._selectionListener = null;
    this._native = null;
    this._nativeChart = null;
    super.disposeNativeView();
  }

  private _applyPieChartConfig(): void {
    const instance = this._native!;
    instance.setRotationAngle(this.rotationAngle);
  }

  get nativeChart(): any {
    return this._native;
  }

  onRotationAngleChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onRotationAngleChange:', this.rotationAngle);
    this._native.setRotationAngle(this.rotationAngle);
    this._native.invalidate();
  }

  applyData(): void {
    if (!this._native || !this.data) return;

    nchartsLog('[ncharts] PieChart._applyDataAndroid called');
    const instance = this._native;

    // clear any retained data objects / formatters
    this._retainedDataObjects.length = 0;

    // Pie chart typically has one dataset
    for (const ds of this.data!.dataSets) {
      const entries = new java.util.ArrayList<com.github.mikephil.charting.data.PieEntry>();

      ds.values.forEach((value: any, index: number) => {
        let entry: com.github.mikephil.charting.data.PieEntry;
        if (typeof value === 'number') {
          entry = new com.github.mikephil.charting.data.PieEntry(value);
        } else {
          entry = new com.github.mikephil.charting.data.PieEntry(value.value, value.label || '');
        }
        entries.add(entry);
      });

      const dataSet = new com.github.mikephil.charting.data.PieDataSet(entries, ds.label);
      if (ds.config) {
        applyPieDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
      }

      const chartData = new com.github.mikephil.charting.data.PieData(dataSet);
      instance.setData(chartData);
    }

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
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionAndroid(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}

  private updateCenterText(): void {
    if (!this._native) return;
    this._native.setDrawCenterText(this.drawCenterText);
    if (this.centerText) {
      this._native.setCenterText(this.centerText);
      if (this.centerTextColor) {
        const color = toAndroidColor(this.centerTextColor);
        if (color !== undefined) {
          this._native.setCenterTextColor(color);
        }
      }
      if (this.centerTextSize) {
        this._native.setCenterTextSize(this.centerTextSize);
      }
    } else {
      this._native.setCenterText('');
    }
    this._native.invalidate();
  }

  // Property change handlers
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

  [highlightPerTapEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.setHighlightPerTapEnabled(value);
    }
  }

  [drawHoleProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.setDrawHoleEnabled(value);
    this._native.invalidate();
  }

  [holeRadiusProperty.setNative](value: number) {
    if (!this._native) return;
    nchartsLog('[ncharts] onHoleRadiusChange:', this.holeRadius);
    this._native.setHoleRadius(this.holeRadius);
    this._native.invalidate();
  }

  [transparentCircleRadiusProperty.setNative](value: number) {
    if (!this._native) return;
    this._native.setTransparentCircleRadius(this.transparentCircleRadius);
    this._native.invalidate();
  }

  [holeColorProperty.setNative](value: ChartColor) {
    if (!this._native || value == null) return;
    const color = toAndroidColor(this.holeColor);
    if (color !== undefined) {
      this._native.setHoleColor(color);
      this._native.invalidate();
    }
  }

  [transparentCircleColorProperty.setNative](value: ChartColor) {
    if (!this._native || value == null) return;
    const color = toAndroidColor(value);
    if (color !== undefined) {
      this._native.setTransparentCircleColor(color);
      this._native.invalidate();
    }
  }

  [drawCenterTextProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.setDrawCenterText(value);
    this._native.invalidate();
  }

  [centerTextProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [centerTextColorProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [centerTextSizeProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [drawSliceTextProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.setDrawEntryLabels(value);
    this._native.invalidate();
  }

  [sliceTextSizeProperty.setNative](value: number) {
    if (!this._native) return;
    this._native.setEntryLabelTextSize(value);
    this._native.invalidate();
  }

  [sliceTextColorProperty.setNative](value: ChartColor) {
    if (!this._native || value == null) return;
    const color = toAndroidColor(value);
    if (color !== undefined) {
      this._native.setEntryLabelColor(color);
      this._native.invalidate();
    }
  }

  [usePercentValuesProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.setUsePercentValues(value);
    this._native.invalidate();
  }
  [rotationEnabledProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.setRotationEnabled(this.rotationEnabled);
    this._native.invalidate();
  }

  [maxAngleProperty.setNative](value: number) {
    if (!this._native) return;
    this._native.setMaxAngle(value);
    this._native.invalidate();
  }
}
