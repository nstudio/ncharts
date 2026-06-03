import { type ChartColor, type LegendConfig, type XAxisConfig, type YAxisConfig, type YAxisConfigDual, type ChartDescription, type MarkerConfig, NCharts } from '../common';
import { NChartsDefaultMarker } from './default-marker.ios';
import { toUIColor } from './utils';
import { NSDateAxisValueFormatter } from './formatters/date-formatters.ios';
import { NSCustomLabelsArrayAxisValueFormatter } from './formatters/custom-labels-array-formatter.ios';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.ios';

export function applyNoDataTextColorIOS(nativeChart: any, noDataTextColor?: ChartColor): void {
  if (!nativeChart || !noDataTextColor) return;
  const color = toUIColor(noDataTextColor);
  if (color) nativeChart.noDataTextColor = color;
}

export function applyLegendIOS(nativeChart: any, legend: LegendConfig): void {
  if (!nativeChart || !legend) return;

  const nativeLegend = nativeChart.legend;
  if (!nativeLegend) return;

  if (legend.enabled !== undefined) nativeLegend.enabled = legend.enabled;
  if (legend.textColor) {
    const textColor = toUIColor(legend.textColor);
    if (textColor) nativeLegend.textColor = textColor;
  }
  if (legend.textSize !== undefined) nativeLegend.font = nativeLegend.font.fontWithSize(legend.textSize);
  if (legend.wordWrapEnabled !== undefined) nativeLegend.wordWrapEnabled = legend.wordWrapEnabled;
  if (legend.maxSizePercent !== undefined) nativeLegend.maxSizePercent = legend.maxSizePercent;
  if (legend.drawInside !== undefined) nativeLegend.drawInside = legend.drawInside;
  if (legend.formSize !== undefined) nativeLegend.formSize = legend.formSize;
  if (legend.xEntrySpace !== undefined) nativeLegend.xEntrySpace = legend.xEntrySpace;
  if (legend.yEntrySpace !== undefined) nativeLegend.yEntrySpace = legend.yEntrySpace;
  if (legend.formToTextSpace !== undefined) nativeLegend.formToTextSpace = legend.formToTextSpace;

  if (legend.horizontalAlignment) {
    const horizontalMap: Record<string, number> = {
      LEFT: ChartLegendHorizontalAlignment.Left,
      CENTER: ChartLegendHorizontalAlignment.Center,
      RIGHT: ChartLegendHorizontalAlignment.Right,
    };
    nativeLegend.horizontalAlignment = horizontalMap[legend.horizontalAlignment] ?? ChartLegendHorizontalAlignment.Left;
  }

  if (legend.verticalAlignment) {
    const verticalMap: Record<string, number> = {
      TOP: ChartLegendVerticalAlignment.Top,
      CENTER: ChartLegendVerticalAlignment.Center,
      BOTTOM: ChartLegendVerticalAlignment.Bottom,
    };
    nativeLegend.verticalAlignment = verticalMap[legend.verticalAlignment] ?? ChartLegendVerticalAlignment.Bottom;
  }

  if (legend.orientation) {
    const orientationMap: Record<string, number> = {
      HORIZONTAL: ChartLegendOrientation.Horizontal,
      VERTICAL: ChartLegendOrientation.Vertical,
    };
    nativeLegend.orientation = orientationMap[legend.orientation] ?? ChartLegendOrientation.Horizontal;
  }

  if (legend.direction) {
    const directionMap: Record<string, number> = {
      LEFT_TO_RIGHT: ChartLegendDirection.LeftToRight,
      RIGHT_TO_LEFT: ChartLegendDirection.RightToLeft,
    };
    nativeLegend.direction = directionMap[legend.direction] ?? ChartLegendDirection.LeftToRight;
  }

  if (legend.form) {
    const formMap: Record<string, number> = {
      NONE: ChartLegendForm.None,
      EMPTY: ChartLegendForm.Empty,
      DEFAULT: ChartLegendForm.Default,
      SQUARE: ChartLegendForm.Square,
      CIRCLE: ChartLegendForm.Circle,
      LINE: ChartLegendForm.Line,
    };
    nativeLegend.form = formMap[legend.form] ?? ChartLegendForm.Default;
  }

  if (legend.custom) {
    const labels = Array.isArray(legend.custom.labels) ? legend.custom.labels : [];
    const colors = Array.isArray(legend.custom.colors) ? legend.custom.colors : [];
    const count = Math.max(labels.length, colors.length);

    const entries: ChartLegendEntry[] = [];

    for (let i = 0; i < count; i++) {
      const entry = ChartLegendEntry.new();
      entry.label = labels[i] ?? '';

      const color = toUIColor(colors[i]);
      if (color) {
        entry.formColor = color;
      }

      entries.push(entry);
    }
    nativeLegend.setCustomWithEntries(entries);
  }
}

export function applyXAxisIOS(nativeChart: any, xAxis: XAxisConfig, retainedChartObjects: Array<any>): void {
  if (!nativeChart || !xAxis) return;

  const nativeXAxis = nativeChart.xAxis;
  if (!nativeXAxis) return;

  if (xAxis.enabled !== undefined) nativeXAxis.enabled = xAxis.enabled;
  if (xAxis.drawGridLines !== undefined) nativeXAxis.drawGridLinesEnabled = xAxis.drawGridLines;
  if (xAxis.drawAxisLine !== undefined) nativeXAxis.drawAxisLineEnabled = xAxis.drawAxisLine;
  if (xAxis.drawLabels !== undefined) nativeXAxis.drawLabelsEnabled = xAxis.drawLabels;
  if (xAxis.textColor) {
    const textColor = toUIColor(xAxis.textColor);
    if (textColor) nativeXAxis.labelTextColor = textColor;
  }
  if (xAxis.textSize !== undefined) nativeXAxis.labelFont = nativeXAxis.labelFont.fontWithSize(xAxis.textSize);
  if (xAxis.gridColor) {
    const gridColor = toUIColor(xAxis.gridColor);
    if (gridColor) nativeXAxis.gridColor = gridColor;
  }
  if (xAxis.gridLineWidth !== undefined) nativeXAxis.gridLineWidth = xAxis.gridLineWidth;
  if (xAxis.gridDashedLine !== undefined) {
    if (xAxis.gridDashedLine.lineLength && xAxis.gridDashedLine.spaceLength) {
      nativeXAxis.gridLineDashLengths = NSArray.arrayWithArray([xAxis.gridDashedLine.lineLength, xAxis.gridDashedLine.spaceLength]);
    }
    if (xAxis.gridDashedLine.phase) {
      nativeXAxis.gridLineDashPhase = xAxis.gridDashedLine.phase;
    }
  } else {
    // optional: clear dashed style when not configured
    nativeXAxis.gridLineDashLengths = null;
    nativeXAxis.gridLineDashPhase = 0;
  }
  if (xAxis.axisLineColor) {
    const axisLineColor = toUIColor(xAxis.axisLineColor);
    if (axisLineColor) nativeXAxis.axisLineColor = axisLineColor;
  }
  if (xAxis.axisLineWidth !== undefined) nativeXAxis.axisLineWidth = xAxis.axisLineWidth;
  if (xAxis.axisMinimum !== undefined) nativeXAxis.axisMinimum = xAxis.axisMinimum;
  if (xAxis.axisMaximum !== undefined) nativeXAxis.axisMaximum = xAxis.axisMaximum;
  if (xAxis.labelCount !== undefined) nativeXAxis.setLabelCountForce(xAxis.labelCount, xAxis.labelCountForce ?? false);
  if (xAxis.granularity !== undefined) nativeXAxis.granularity = xAxis.granularity;
  if (xAxis.granularityEnabled !== undefined) nativeXAxis.granularityEnabled = xAxis.granularityEnabled;
  if (xAxis.centerAxisLabels !== undefined) nativeXAxis.centerAxisLabelsEnabled = xAxis.centerAxisLabels;
  if (xAxis.labelRotationAngle !== undefined) nativeXAxis.labelRotationAngle = xAxis.labelRotationAngle;
  if (xAxis.avoidFirstLastClipping !== undefined) nativeXAxis.avoidFirstLastClippingEnabled = xAxis.avoidFirstLastClipping;

  if (xAxis.position) {
    const positionMap: Record<string, number> = {
      TOP: XAxisLabelPosition.Top,
      BOTTOM: XAxisLabelPosition.Bottom,
      BOTH_SIDED: XAxisLabelPosition.BothSided,
      TOP_INSIDE: XAxisLabelPosition.TopInside,
      BOTTOM_INSIDE: XAxisLabelPosition.BottomInside,
    };
    nativeXAxis.labelPosition = positionMap[xAxis.position] ?? XAxisLabelPosition.Bottom;
  }

  if (Array.isArray(xAxis.valueFormatter)) {
    const formatter = NSCustomLabelsArrayAxisValueFormatter.initWithLabels(xAxis.valueFormatter);
    nativeXAxis.valueFormatter = formatter;
    retainedChartObjects.push(formatter);
  } else if (xAxis.valueFormatter === 'date') {
    const formatter = NSDateAxisValueFormatter.initWithPattern(xAxis.valueFormatterPattern, xAxis.valueFormatterTransformExpression);
    nativeXAxis.valueFormatter = formatter;
    retainedChartObjects.push(formatter);
  }
}

export function applyYAxisIOS(axis: any, retainedChartObjects: Array<any>, config?: YAxisConfig): void {
  if (!axis || !config) return;

  if (config.enabled !== undefined) axis.enabled = config.enabled;
  if (config.drawGridLines !== undefined) axis.drawGridLinesEnabled = config.drawGridLines;
  if (config.drawAxisLine !== undefined) axis.drawAxisLineEnabled = config.drawAxisLine;
  if (config.drawLabels !== undefined) axis.drawLabelsEnabled = config.drawLabels;
  if (config.textColor) {
    const textColor = toUIColor(config.textColor);
    if (textColor) axis.labelTextColor = textColor;
  }
  if (config.textSize !== undefined) axis.labelFont = axis.labelFont.fontWithSize(config.textSize);
  if (config.gridColor) {
    const gridColor = toUIColor(config.gridColor);
    if (gridColor) axis.gridColor = gridColor;
  }
  if (config.gridLineWidth !== undefined) axis.gridLineWidth = config.gridLineWidth;
  if (config.gridDashedLine !== undefined) {
    if (config.gridDashedLine.lineLength && config.gridDashedLine.spaceLength) {
      axis.gridLineDashLengths = NSArray.arrayWithArray([config.gridDashedLine.lineLength, config.gridDashedLine.spaceLength]);
    }
    if (config.gridDashedLine.phase) {
      axis.gridLineDashPhase = config.gridDashedLine.phase;
    }
  } else {
    axis.gridLineDashLengths = null;
    axis.gridLineDashPhase = 0;
  }
  if (config.axisLineColor) {
    const axisLineColor = toUIColor(config.axisLineColor);
    if (axisLineColor) axis.axisLineColor = axisLineColor;
  }
  if (config.axisLineWidth !== undefined) axis.axisLineWidth = config.axisLineWidth;
  if (config.axisMinimum !== undefined) axis.axisMinimum = config.axisMinimum;
  if (config.axisMaximum !== undefined) axis.axisMaximum = config.axisMaximum;
  if (config.labelCount !== undefined) axis.setLabelCountForce(config.labelCount, config.labelCountForce ?? false);
  if (config.granularity !== undefined) axis.granularity = config.granularity;
  if (config.granularityEnabled !== undefined) axis.granularityEnabled = config.granularityEnabled;
  if (config.centerAxisLabels !== undefined) axis.centerAxisLabelsEnabled = config.centerAxisLabels;
  if (config.inverted !== undefined) axis.inverted = config.inverted;
  if (config.spaceTop !== undefined) axis.spaceTop = config.spaceTop;
  if (config.spaceBottom !== undefined) axis.spaceBottom = config.spaceBottom;

  if (config.position) {
    const positionMap: Record<string, number> = {
      OUTSIDE_CHART: YAxisLabelPosition.OutsideChart,
      INSIDE_CHART: YAxisLabelPosition.InsideChart,
    };
    axis.labelPosition = positionMap[config.position] ?? YAxisLabelPosition.OutsideChart;
  }

  if (config.zeroLine) {
    if (config.zeroLine.enabled !== undefined) axis.drawZeroLineEnabled = config.zeroLine.enabled;
    if (config.zeroLine.lineWidth !== undefined) axis.zeroLineWidth = config.zeroLine.lineWidth;
    if (config.zeroLine.lineColor) {
      const zeroLineColor = toUIColor(config.zeroLine.lineColor);
      if (zeroLineColor) axis.zeroLineColor = zeroLineColor;
    }
  }
  if (config.drawLimitLinesBehindData !== undefined) {
    axis.drawLimitLinesBehindDataEnabled = config.drawLimitLinesBehindData;
  }

  // always clean up before setting new lines
  axis.removeAllLimitLines();

  if (Array.isArray(config.limitLines) && config.limitLines.length) {
    for (const llCfg of config.limitLines) {
      if (llCfg.limit == null) continue;

      const label = llCfg.label ?? '';
      const ll = ChartLimitLine.alloc().initWithLimitLabel(llCfg.limit, label);
      if (llCfg.lineWidth !== undefined) ll.lineWidth = llCfg.lineWidth;

      if (llCfg.lineColor) {
        const c = toUIColor(llCfg.lineColor);
        if (c) ll.lineColor = c;
      }

      // dashed
      if (Array.isArray(llCfg.lineDashLengths) && llCfg.lineDashLengths.length >= 2) {
        ll.lineDashLengths = NSArray.arrayWithArray(llCfg.lineDashLengths);
        if (llCfg.lineDashPhase !== undefined) ll.lineDashPhase = llCfg.lineDashPhase;
      } else {
        ll.lineDashLengths = null;
        ll.lineDashPhase = 0;
      }

      // label text styling
      if (llCfg.valueTextColor) {
        const tc = toUIColor(llCfg.valueTextColor);
        if (tc) ll.valueTextColor = tc;
      }
      if (llCfg.valueTextSize !== undefined) {
        ll.valueFont = UIFont.systemFontOfSize(llCfg.valueTextSize);
      }

      if (llCfg.labelPosition) {
        const posMap: Record<string, number> = {
          RIGHT_TOP: ChartLimitLabelPosition.RightTop,
          RIGHT_BOTTOM: ChartLimitLabelPosition.RightBottom,
          LEFT_TOP: ChartLimitLabelPosition.LeftTop,
          LEFT_BOTTOM: ChartLimitLabelPosition.LeftBottom,
        };
        ll.labelPosition = posMap[llCfg.labelPosition] ?? ChartLimitLabelPosition.RightTop;
      }
      axis.addLimitLine(ll);
    }
  }
  if (config.valueFormatter === 'percent' || config.valueFormatter === 'suffix') {
    const formatter = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern, config.valueFormatterTransformExpression);
    axis.valueFormatter = formatter;
    retainedChartObjects.push(formatter);
  }
}

export function applyYAxisDualIOS(nativeChart: any, yAxis: YAxisConfigDual, retainedChartObjects: Array<any>): void {
  if (!nativeChart || !yAxis) return;
  applyYAxisIOS(nativeChart.leftAxis, retainedChartObjects, yAxis.left);
  applyYAxisIOS(nativeChart.rightAxis, retainedChartObjects, yAxis.right);
}

export function applyDescriptionIOS(nativeChart: any, description: ChartDescription): void {
  if (!nativeChart || !description || !nativeChart.chartDescription) return;

  if (description.enabled !== undefined) nativeChart.chartDescription.enabled = description.enabled;

  const nativeDescription = nativeChart.chartDescription;
  if (description.text !== undefined) nativeDescription.text = description.text;
  if (description.textColor) {
    const textColor = toUIColor(description.textColor);
    if (textColor) nativeDescription.textColor = textColor;
  }
  if (description.textSize !== undefined) nativeDescription.font = nativeDescription.font.fontWithSize(description.textSize);
}

export function applyMarkerIOS(chart: ChartViewBase, cfg: MarkerConfig, retainedChartObjects: Array<any>) {
  if (!chart) return;

  if (cfg.enabled !== true) {
    chart.marker = null;
    return;
  }

  if (cfg.markerId) {
    const markerFactory = NCharts._getMarkerFactory(cfg.markerId);
    if (markerFactory) {
      const marker = markerFactory(chart, cfg);
      chart.marker = marker;
      retainedChartObjects.push(marker);
    }
  } else {
    const marker = NChartsDefaultMarker.create(chart, cfg);
    chart.marker = marker;
    retainedChartObjects.push(marker);
  }
}
