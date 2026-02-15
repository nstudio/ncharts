import type { ChartColor, LegendConfig, XAxisConfig, YAxisConfig, YAxisConfigDual, ChartDescription } from '../common';
import { toAndroidColor } from './utils';

export function applyNoDataTextColorAndroid(nativeChart: any, noDataTextColor?: ChartColor): void {
  if (!nativeChart || !noDataTextColor) return;
  const color = toAndroidColor(noDataTextColor);
  if (color !== undefined) nativeChart.setNoDataTextColor(color);
}

export function applyLegendAndroid(nativeChart: any, legend: LegendConfig): void {
  if (!nativeChart || !legend) return;

  const nativeLegend = nativeChart.getLegend();
  if (!nativeLegend) return;

  if (legend.enabled !== undefined) nativeLegend.setEnabled(legend.enabled);
  if (legend.textColor) {
    const textColor = toAndroidColor(legend.textColor);
    if (textColor !== undefined) nativeLegend.setTextColor(textColor);
  }
  if (legend.textSize !== undefined) nativeLegend.setTextSize(legend.textSize);
  if (legend.wordWrapEnabled !== undefined) nativeLegend.setWordWrapEnabled(legend.wordWrapEnabled);
  if (legend.maxSizePercent !== undefined) nativeLegend.setMaxSizePercent(legend.maxSizePercent);
  if (legend.drawInside !== undefined) nativeLegend.setDrawInside(legend.drawInside);
  if (legend.formSize !== undefined) nativeLegend.setFormSize(legend.formSize);
  if (legend.xEntrySpace !== undefined) nativeLegend.setXEntrySpace(legend.xEntrySpace);
  if (legend.yEntrySpace !== undefined) nativeLegend.setYEntrySpace(legend.yEntrySpace);
  if (legend.formToTextSpace !== undefined) nativeLegend.setFormToTextSpace(legend.formToTextSpace);

  const Legend = com.github.mikephil.charting.components.Legend;

  if (legend.horizontalAlignment) {
    const horizontalMap: Record<string, any> = {
      LEFT: Legend.LegendHorizontalAlignment.LEFT,
      CENTER: Legend.LegendHorizontalAlignment.CENTER,
      RIGHT: Legend.LegendHorizontalAlignment.RIGHT,
    };
    nativeLegend.setHorizontalAlignment(horizontalMap[legend.horizontalAlignment] ?? Legend.LegendHorizontalAlignment.LEFT);
  }

  if (legend.verticalAlignment) {
    const verticalMap: Record<string, any> = {
      TOP: Legend.LegendVerticalAlignment.TOP,
      CENTER: Legend.LegendVerticalAlignment.CENTER,
      BOTTOM: Legend.LegendVerticalAlignment.BOTTOM,
    };
    nativeLegend.setVerticalAlignment(verticalMap[legend.verticalAlignment] ?? Legend.LegendVerticalAlignment.BOTTOM);
  }

  if (legend.orientation) {
    const orientationMap: Record<string, any> = {
      HORIZONTAL: Legend.LegendOrientation.HORIZONTAL,
      VERTICAL: Legend.LegendOrientation.VERTICAL,
    };
    nativeLegend.setOrientation(orientationMap[legend.orientation] ?? Legend.LegendOrientation.HORIZONTAL);
  }

  if (legend.direction) {
    const directionMap: Record<string, any> = {
      LEFT_TO_RIGHT: Legend.LegendDirection.LEFT_TO_RIGHT,
      RIGHT_TO_LEFT: Legend.LegendDirection.RIGHT_TO_LEFT,
    };
    nativeLegend.setDirection(directionMap[legend.direction] ?? Legend.LegendDirection.LEFT_TO_RIGHT);
  }

  if (legend.form) {
    const formMap: Record<string, any> = {
      NONE: Legend.LegendForm.NONE,
      EMPTY: Legend.LegendForm.EMPTY,
      DEFAULT: Legend.LegendForm.DEFAULT,
      SQUARE: Legend.LegendForm.SQUARE,
      CIRCLE: Legend.LegendForm.CIRCLE,
      LINE: Legend.LegendForm.LINE,
    };
    nativeLegend.setForm(formMap[legend.form] ?? Legend.LegendForm.DEFAULT);
  }
}

export function applyXAxisAndroid(nativeChart: any, xAxis: XAxisConfig): void {
  if (!nativeChart || !xAxis) return;

  const nativeXAxis = nativeChart.getXAxis?.();
  if (!nativeXAxis) return;

  if (xAxis.enabled !== undefined) nativeXAxis.setEnabled(xAxis.enabled);
  if (xAxis.drawGridLines !== undefined) nativeXAxis.setDrawGridLines(xAxis.drawGridLines);
  if (xAxis.drawAxisLine !== undefined) nativeXAxis.setDrawAxisLine(xAxis.drawAxisLine);
  if (xAxis.drawLabels !== undefined) nativeXAxis.setDrawLabels(xAxis.drawLabels);
  if (xAxis.textColor) {
    const textColor = toAndroidColor(xAxis.textColor);
    if (textColor !== undefined) nativeXAxis.setTextColor(textColor);
  }
  if (xAxis.textSize !== undefined) nativeXAxis.setTextSize(xAxis.textSize);
  if (xAxis.gridColor) {
    const gridColor = toAndroidColor(xAxis.gridColor);
    if (gridColor !== undefined) nativeXAxis.setGridColor(gridColor);
  }
  if (xAxis.gridLineWidth !== undefined) nativeXAxis.setGridLineWidth(xAxis.gridLineWidth);
  if (xAxis.axisLineColor) {
    const axisLineColor = toAndroidColor(xAxis.axisLineColor);
    if (axisLineColor !== undefined) nativeXAxis.setAxisLineColor(axisLineColor);
  }
  if (xAxis.axisLineWidth !== undefined) nativeXAxis.setAxisLineWidth(xAxis.axisLineWidth);
  if (xAxis.axisMinimum !== undefined) nativeXAxis.setAxisMinimum(xAxis.axisMinimum);
  if (xAxis.axisMaximum !== undefined) nativeXAxis.setAxisMaximum(xAxis.axisMaximum);
  if (xAxis.labelCount !== undefined) nativeXAxis.setLabelCount(xAxis.labelCount, xAxis.labelCountForce ?? false);
  if (xAxis.granularity !== undefined) nativeXAxis.setGranularity(xAxis.granularity);
  if (xAxis.granularityEnabled !== undefined) nativeXAxis.setGranularityEnabled(xAxis.granularityEnabled);
  if (xAxis.centerAxisLabels !== undefined) nativeXAxis.setCenterAxisLabels(xAxis.centerAxisLabels);
  if (xAxis.labelRotationAngle !== undefined) nativeXAxis.setLabelRotationAngle(xAxis.labelRotationAngle);
  if (xAxis.avoidFirstLastClipping !== undefined) nativeXAxis.setAvoidFirstLastClipping(xAxis.avoidFirstLastClipping);

  if (xAxis.position) {
    const XAxis = com.github.mikephil.charting.components.XAxis;
    const positionMap: Record<string, any> = {
      TOP: XAxis.XAxisPosition.TOP,
      BOTTOM: XAxis.XAxisPosition.BOTTOM,
      BOTH_SIDED: XAxis.XAxisPosition.BOTH_SIDED,
      TOP_INSIDE: XAxis.XAxisPosition.TOP_INSIDE,
      BOTTOM_INSIDE: XAxis.XAxisPosition.BOTTOM_INSIDE,
    };
    nativeXAxis.setPosition(positionMap[xAxis.position] ?? XAxis.XAxisPosition.BOTTOM);
  }
}

export function applyYAxisAndroid(axis: any, config?: YAxisConfig): void {
  if (!axis || !config) return;

  if (config.enabled !== undefined) axis.setEnabled(config.enabled);
  if (config.drawGridLines !== undefined) axis.setDrawGridLines(config.drawGridLines);
  if (config.drawAxisLine !== undefined) axis.setDrawAxisLine(config.drawAxisLine);
  if (config.drawLabels !== undefined) axis.setDrawLabels(config.drawLabels);
  if (config.textColor) {
    const textColor = toAndroidColor(config.textColor);
    if (textColor !== undefined) axis.setTextColor(textColor);
  }
  if (config.textSize !== undefined) axis.setTextSize(config.textSize);
  if (config.gridColor) {
    const gridColor = toAndroidColor(config.gridColor);
    if (gridColor !== undefined) axis.setGridColor(gridColor);
  }
  if (config.gridLineWidth !== undefined) axis.setGridLineWidth(config.gridLineWidth);
  if (config.axisLineColor) {
    const axisLineColor = toAndroidColor(config.axisLineColor);
    if (axisLineColor !== undefined) axis.setAxisLineColor(axisLineColor);
  }
  if (config.axisLineWidth !== undefined) axis.setAxisLineWidth(config.axisLineWidth);
  if (config.axisMinimum !== undefined) axis.setAxisMinimum(config.axisMinimum);
  if (config.axisMaximum !== undefined) axis.setAxisMaximum(config.axisMaximum);
  if (config.labelCount !== undefined) axis.setLabelCount(config.labelCount, config.labelCountForce ?? false);
  if (config.granularity !== undefined) axis.setGranularity(config.granularity);
  if (config.granularityEnabled !== undefined) axis.setGranularityEnabled(config.granularityEnabled);
  if (config.inverted !== undefined) axis.setInverted(config.inverted);
  if (config.spaceTop !== undefined) axis.setSpaceTop(config.spaceTop);
  if (config.spaceBottom !== undefined) axis.setSpaceBottom(config.spaceBottom);

  if (config.position) {
    const YAxis = com.github.mikephil.charting.components.YAxis;
    const positionMap: Record<string, any> = {
      OUTSIDE_CHART: YAxis.YAxisLabelPosition.OUTSIDE_CHART,
      INSIDE_CHART: YAxis.YAxisLabelPosition.INSIDE_CHART,
    };
    axis.setPosition(positionMap[config.position] ?? YAxis.YAxisLabelPosition.OUTSIDE_CHART);
  }

  if (config.zeroLine) {
    if (config.zeroLine.enabled !== undefined) axis.setDrawZeroLine(config.zeroLine.enabled);
    if (config.zeroLine.lineWidth !== undefined) axis.setZeroLineWidth(config.zeroLine.lineWidth);
    if (config.zeroLine.lineColor) {
      const zeroLineColor = toAndroidColor(config.zeroLine.lineColor);
      if (zeroLineColor !== undefined) axis.setZeroLineColor(zeroLineColor);
    }
  }
}

export function applyYAxisDualAndroid(nativeChart: any, yAxis: YAxisConfigDual): void {
  if (!nativeChart || !yAxis) return;
  applyYAxisAndroid(nativeChart.getAxisLeft?.(), yAxis.left);
  applyYAxisAndroid(nativeChart.getAxisRight?.(), yAxis.right);
}

export function applyDescriptionAndroid(nativeChart: any, description: ChartDescription): void {
  if (!nativeChart || !description) return;

  const nativeDescription = nativeChart.getDescription?.();
  if (!nativeDescription) return;

  if (description.text !== undefined) nativeDescription.setText(description.text);
  if (description.textColor) {
    const textColor = toAndroidColor(description.textColor);
    if (textColor !== undefined) nativeDescription.setTextColor(textColor);
  }
  if (description.textSize !== undefined) nativeDescription.setTextSize(description.textSize);
  if (description.positionX !== undefined && description.positionY !== undefined) {
    nativeDescription.setPosition(description.positionX, description.positionY);
  }
}
