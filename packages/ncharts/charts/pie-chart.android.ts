/**
 * PieChart - Android Implementation
 */
import { PieChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, PieDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toAndroidColor } from './utils';

function applyPieDataSetConfig(dataSet: com.github.mikephil.charting.data.PieDataSet, config: PieDataSetConfig): void {
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
  if (config.valueTextColor) {
    const color = toAndroidColor(config.valueTextColor);
    if (color !== undefined) dataSet.setValueTextColor(color);
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
  }
  if (config.valueLineWidth !== undefined) dataSet.setValueLineWidth(config.valueLineWidth);
  if (config.valueLinePart1OffsetPercentage !== undefined) dataSet.setValueLinePart1OffsetPercentage(config.valueLinePart1OffsetPercentage);
  if (config.valueLineVariableLength !== undefined) dataSet.setUsingSliceColorAsValueLineColor(config.valueLineVariableLength);
}

export class PieChart extends PieChartBase {
  private _native: com.github.mikephil.charting.charts.PieChart | null = null;
  private _selectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener | null = null;

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

    this._applyPieChartConfig();
    if (this.data) this.applyData();
  }

  private _applyPieChartConfig(): void {
    const instance = this._native!;
    instance.setDrawHoleEnabled(this.drawHole);
    instance.setHoleRadius(this.holeRadius);
    instance.setTransparentCircleRadius(this.transparentCircleRadius);
    if (this.holeColor) {
      const color = toAndroidColor(this.holeColor);
      if (color !== undefined) instance.setHoleColor(color);
    }
    instance.setDrawCenterText(this.drawCenterText);
    if (this.centerText) instance.setCenterText(this.centerText);
    if (this.centerTextColor) {
      const color = toAndroidColor(this.centerTextColor);
      if (color !== undefined) instance.setCenterTextColor(color);
    }
    if (this.centerTextSize) instance.setCenterTextSize(this.centerTextSize);
    instance.setUsePercentValues(this.usePercentValues);
    instance.setDrawEntryLabels(this.drawSliceText);
    if (this.sliceTextSize) instance.setEntryLabelTextSize(this.sliceTextSize);
    if (this.sliceTextColor) {
      const color = toAndroidColor(this.sliceTextColor);
      if (color !== undefined) instance.setEntryLabelColor(color);
    }
    instance.setRotationEnabled(this.rotationEnabled);
    instance.setRotationAngle(this.rotationAngle);
    instance.setMaxAngle(this.maxAngle);
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

  // Property change handlers
  onDrawHoleChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onDrawHoleChange:', this.drawHole);
    this._native.setDrawHoleEnabled(this.drawHole);
    this._native.invalidate();
  }

  onHoleRadiusChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onHoleRadiusChange:', this.holeRadius);
    this._native.setHoleRadius(this.holeRadius);
    this._native.setTransparentCircleRadius(this.transparentCircleRadius);
    this._native.invalidate();
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
        applyPieDataSetConfig(dataSet, ds.config);
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

  protected _applyLegend(legend: LegendConfig): void {}
  protected _applyXAxis(xAxis: XAxisConfig): void {}
  protected _applyDescription(description: ChartDescription): void {}
  protected _applyMarker(marker: MarkerConfig): void {}
}
