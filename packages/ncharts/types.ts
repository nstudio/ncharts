/**
 * @nstudio/ncharts - TypeScript Type Definitions
 *
 * Comprehensive type definitions for native charting with DGCharts (iOS) and MPAndroidChart (Android)
 */

import { EventData } from '@nativescript/core';

// ============================================================================
// Color Types
// ============================================================================

/**
 * Color representation - accepts hex string, number, or Color instance
 * Hex format: '#RRGGBB' or '#AARRGGBB'
 * Number format: ARGB integer (Android convention: 0-255 alpha)
 */
export type ChartColor = string | number;

// ============================================================================
// Animation Types
// ============================================================================

export type EasingFunction = 'Linear' | 'EaseInQuad' | 'EaseOutQuad' | 'EaseInOutQuad' | 'EaseInCubic' | 'EaseOutCubic' | 'EaseInOutCubic' | 'EaseInQuart' | 'EaseOutQuart' | 'EaseInOutQuart' | 'EaseInSine' | 'EaseOutSine' | 'EaseInOutSine' | 'EaseInExpo' | 'EaseOutExpo' | 'EaseInOutExpo' | 'EaseInCirc' | 'EaseOutCirc' | 'EaseInOutCirc' | 'EaseInElastic' | 'EaseOutElastic' | 'EaseInOutElastic' | 'EaseInBack' | 'EaseOutBack' | 'EaseInOutBack' | 'EaseInBounce' | 'EaseOutBounce' | 'EaseInOutBounce';

export interface ChartAnimation {
  /** Duration for X-axis animation in milliseconds */
  durationX?: number;
  /** Duration for Y-axis animation in milliseconds */
  durationY?: number;
  /** Easing function for X-axis animation */
  easingX?: EasingFunction;
  /** Easing function for Y-axis animation */
  easingY?: EasingFunction;
}

// ============================================================================
// Legend Types
// ============================================================================

export type LegendHorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
export type LegendVerticalAlignment = 'TOP' | 'CENTER' | 'BOTTOM';
export type LegendOrientation = 'HORIZONTAL' | 'VERTICAL';
export type LegendDirection = 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';
export type LegendForm = 'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE';

export interface LegendCustomEntry {
  colors: ChartColor[];
  labels: string[];
}

export interface LegendConfig {
  /** Enable/disable legend */
  enabled?: boolean;
  /** Text color */
  textColor?: ChartColor;
  /** Text size in dp/pt */
  textSize?: number;
  /** Font family name */
  fontFamily?: string;
  /** Font style (0 = normal, 1 = bold, 2 = italic) */
  fontStyle?: number;
  /** Font weight */
  fontWeight?: number;
  /** Enable word wrapping */
  wordWrapEnabled?: boolean;
  /** Maximum size of legend as percentage of chart */
  maxSizePercent?: number;
  /** Horizontal alignment */
  horizontalAlignment?: LegendHorizontalAlignment;
  /** Vertical alignment */
  verticalAlignment?: LegendVerticalAlignment;
  /** Orientation */
  orientation?: LegendOrientation;
  /** Draw legend inside chart */
  drawInside?: boolean;
  /** Text direction */
  direction?: LegendDirection;
  /** Legend form shape */
  form?: LegendForm;
  /** Size of legend form */
  formSize?: number;
  /** Horizontal space between entries */
  xEntrySpace?: number;
  /** Vertical space between entries */
  yEntrySpace?: number;
  /** Space between form and text */
  formToTextSpace?: number;
  /** Custom legend entries */
  custom?: LegendCustomEntry;
}

// ============================================================================
// Description Types
// ============================================================================

export interface ChartDescription {
  /** Enable ChartDescription */
  enabled?: boolean;
  /** Description text */
  text?: string;
  /** Text color */
  textColor?: ChartColor;
  /** Text size in dp/pt */
  textSize?: number;
  /** X position */
  positionX?: number;
  /** Y position */
  positionY?: number;
}

// ============================================================================
// Marker Types
// ============================================================================

export interface MarkerConfig {
  /** Enable markers */
  enabled?: boolean;
  /** Decimal digits for values */
  digits?: number;
  /** Background color */
  markerColor?: ChartColor;
  /** Text color */
  textColor?: ChartColor;
  /** Text size in dp/pt */
  textSize?: number;
  /** border width of the marker */
  borderWidth?: number;
  /** border color of the marker */
  borderColor?: ChartColor;
  /** the markerId can be used to register and configure custom markers via the marker factory */
  markerId?: string;
  /** payload forwarded to custom markers via the marker factory */
  markerCustomData?: unknown;
}

// ============================================================================
// Highlight Types
// ============================================================================

export interface Highlight {
  /** X value to highlight */
  x: number;
  /** Optional Y value */
  y?: number;
  /** Data set index */
  dataSetIndex?: number;
  /** Data index for combined charts */
  dataIndex?: number;
  /** Stack index for stacked bar charts */
  stackIndex?: number;
}

// ============================================================================
// Axis Types
// ============================================================================

export type AxisDependency = 'LEFT' | 'RIGHT';
export type XAxisPosition = 'TOP' | 'BOTTOM' | 'BOTH_SIDED' | 'TOP_INSIDE' | 'BOTTOM_INSIDE';
export type YAxisPosition = 'OUTSIDE_CHART' | 'INSIDE_CHART';
export type LimitLineLabelPosition = 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';

export interface LimitLine {
  /** Limit value on axis */
  limit: number;
  /** Label text */
  label?: string;
  /** Line color */
  lineColor?: ChartColor;
  /** Line width */
  lineWidth?: number;
  /** Value text color */
  valueTextColor?: ChartColor;
  /** Value text size */
  valueTextSize?: number;
  /** Font family */
  fontFamily?: string;
  /** Label position */
  labelPosition?: LimitLineLabelPosition;
  /** Dashed line lengths */
  lineDashLengths?: number[];
  /** Dashed line phase */
  lineDashPhase?: number;
}

export interface AxisBase {
  /** Enable axis */
  enabled?: boolean;
  /** Draw grid lines */
  drawGridLines?: boolean;
  /** Draw axis line */
  drawAxisLine?: boolean;
  /** Draw labels */
  drawLabels?: boolean;
  /** Text color */
  textColor?: ChartColor;
  /** Text size */
  textSize?: number;
  /** Font family */
  fontFamily?: string;
  /** Font style */
  fontStyle?: number;
  /** Font weight */
  fontWeight?: number;
  /** Grid color */
  gridColor?: ChartColor;
  /** Grid line width */
  gridLineWidth?: number;
  /** Axis line color */
  axisLineColor?: ChartColor;
  /** Axis line width */
  axisLineWidth?: number;
  /** Grid dashed line lengths */
  gridDashedLine?: {
    lineLength: number;
    spaceLength: number;
    phase?: number;
  };
  /** Limit lines */
  limitLines?: LimitLine[];
  /** Draw limit line behind data */
  drawLimitLinesBehindData?: boolean;
  /** Minimum value */
  axisMinimum?: number;
  /** Maximum value */
  axisMaximum?: number;
  /** Invert axis */
  inverted?: boolean;
  /** Space at top as percentage */
  spaceTop?: number;
  /** Space at bottom as percentage */
  spaceBottom?: number;
  /** Label count */
  labelCount?: number;
  /** Force label count */
  labelCountForce?: boolean;
  /** Granularity */
  granularity?: number;
  /** Enable granularity */
  granularityEnabled?: boolean;
  /** Centered axis labels */
  centerAxisLabels?: boolean;
  /** Value formatter type */
  valueFormatter?: 'largeValue' | 'percent' | 'suffix' | 'date' | 'labelByXValue' | string | string[];
  /** Value formatter pattern (for date) */
  valueFormatterPattern?: string;
  /** Optional JS function expression (y:number) => number applied before value formatting */
  valueFormatterTransformExpression?: string;
  /** Label rotation angle in degrees */
  labelRotationAngle?: number;
  /** Avoid first label clipping */
  avoidFirstLastClipping?: boolean;
}

export interface XAxisConfig extends AxisBase {
  /** X axis position */
  position?: XAxisPosition;
  /** Y offset */
  yOffset?: number;
}

export interface YAxisConfig extends AxisBase {
  /** Y axis position */
  position?: YAxisPosition;
  /** Draw zero line */
  zeroLine?: {
    enabled?: boolean;
    lineWidth?: number;
    lineColor?: ChartColor;
  };
}

export interface YAxisConfigDual {
  left?: YAxisConfig;
  right?: YAxisConfig;
  plotBands?: PlotBandConfig[];
}

// ============================================================================
// Viewport & Interaction Types
// ============================================================================

export interface ViewPortOffset {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export interface VisibleRange {
  x?: { min?: number; max?: number };
  y?: {
    left?: { min?: number; max?: number };
    right?: { min?: number; max?: number };
  };
}

export interface ZoomConfig {
  scaleX: number;
  scaleY: number;
  xValue: number;
  yValue: number;
  axisDependency?: AxisDependency;
}

// ============================================================================
// Data Set Config Types
// ============================================================================

export interface DataSetConfigCommon {
  /** Single color for dataset */
  color?: ChartColor;
  /** Multiple colors (one per entry or cycled) */
  colors?: ChartColor[];
  /** Enable highlighting */
  highlightEnabled?: boolean;
  /** Draw values on data points */
  drawValues?: boolean;
  /** Value text size */
  valueTextSize?: number;
  /** Value text color */
  valueTextColor?: ChartColor;
  /** Visibility */
  visible?: boolean;
  /** Value formatter */
  valueFormatter?: 'largeValue' | 'percent' | 'date' | 'number' | 'labelByXValue' | string | string[];
  /** Value formatter pattern */
  valueFormatterPattern?: string;
  /** Labels for x values */
  valueFormatterLabels?: Array<{ x: number; label: string }>;
  /** Y-axis dependency */
  axisDependency?: AxisDependency;
}

export interface DataSetConfigBarLineScatterCandleBubble extends DataSetConfigCommon {
  /** Highlight color */
  highlightColor?: ChartColor;
}

export interface DataSetConfigLineScatterCandleRadar extends DataSetConfigBarLineScatterCandleBubble {
  /** Draw vertical highlight indicator */
  drawVerticalHighlightIndicator?: boolean;
  /** Draw horizontal highlight indicator */
  drawHorizontalHighlightIndicator?: boolean;
  /** Highlight line width */
  highlightLineWidth?: number;
}

export interface DataSetConfigLineRadar extends DataSetConfigLineScatterCandleRadar {
  /** Fill gradient configuration */
  fillGradient?: {
    colors: ChartColor[];
    /** iOS: gradient positions (0-1), Android: orientation */
    positions?: number[];
    /** iOS: gradient angle in degrees */
    angle?: number;
    /** Android: gradient orientation */
    orientation?: 'TOP_BOTTOM' | 'TR_BL' | 'RIGHT_LEFT' | 'BR_TL' | 'BOTTOM_TOP' | 'BL_TR' | 'LEFT_RIGHT' | 'TL_BR';
  };
  /** Fill color (solid) */
  fillColor?: ChartColor;
  /** Fill alpha (0-255) */
  fillAlpha?: number;
  /** Enable fill */
  drawFilled?: boolean;
  /** Line width (0.2 - 10) */
  lineWidth?: number;
}

// ============================================================================
// Line Chart Types
// ============================================================================

export type LineChartMode = 'LINEAR' | 'STEPPED' | 'CUBIC_BEZIER' | 'HORIZONTAL_BEZIER';
export type PlotBandHorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
export type PlotBandVerticalAlignment = 'TOP' | 'MIDDLE' | 'BOTTOM';

export interface PlotBandTextConfig {
  /** Text drawn inside the plot band */
  text?: string;
  /** Text color */
  textColor?: string;
  /** Text size */
  textSize?: number;
  /** Font family / font name */
  textFont?: string;
  /** Text rotation angle in degrees (clockwise) */
  textRotationAngle?: number;
  /** Text alignment within the band */
  align?: {
    /** Horizontal text alignment (default LEFT) */
    horizontal?: PlotBandHorizontalAlignment;
    /** Vertical text alignment (default TOP) */
    vertical?: PlotBandVerticalAlignment;
  };
  /** Text offsets applied after alignment */
  textOffsets?: Partial<ViewPortOffset>;
  /** Whether the text should be drawn above chart data. Default: false */
  textAboveData?: boolean;
}

export interface PlotBandConfig {
  /** Lower bound (axis value) */
  from?: number;
  /** Upper bound (axis value) */
  to?: number;
  /** Band fill color */
  fillColor?: string;
  /** Band alpha (0..255) */
  fillAlpha?: number;
  /** reference axis */
  axis?: 'LEFT' | 'RIGHT';
  /** Optional text drawn inside the band */
  text?: PlotBandTextConfig;
}

export interface LineDataSetConfig extends DataSetConfigLineRadar {
  /** Circle radius at data points */
  circleRadius?: number;
  /** Draw circles at data points */
  drawCircles?: boolean;
  /** Line mode */
  mode?: LineChartMode;
  /** Cubic bezier intensity (0-1) */
  drawCubicIntensity?: number;
  /** Single circle color */
  circleColor?: ChartColor;
  /** Multiple circle colors */
  circleColors?: ChartColor[];
  /** Circle hole color */
  circleHoleColor?: ChartColor;
  /** Draw circle hole */
  drawCircleHole?: boolean;
  /** Dashed line configuration */
  dashedLine?: {
    lineLength: number;
    spaceLength: number;
    phase?: number;
  };
  /** Fill formatter for custom fill area */
  fillFormatter?: {
    min: number;
  };
}

export interface LineDataEntry {
  x?: number;
  y: number;
  marker?: string;
  icon?: {
    bundle: object;
    width?: number;
    height?: number;
  };
}

export interface LineDataSet {
  values: Array<LineDataEntry | number>;
  label: string;
  config?: LineDataSetConfig;
}

export interface LineChartData {
  dataSets: LineDataSet[];
}

// ============================================================================
// Bar Chart Types
// ============================================================================

export interface BarDataSetConfig extends DataSetConfigBarLineScatterCandleBubble {
  /** Bar shadow color */
  barShadowColor?: ChartColor;
  /** Highlight alpha (0-255) */
  highlightAlpha?: number;
  /** Labels for stacked bars */
  stackLabels?: string[];
  /** force labels to be drawn inside of the bar or not at all if no space */
  drawValuesInside?: boolean;
  /** left/right padding */
  drawValuesInsidePaddingX?: number;
  /** top/bottom padding */
  drawValuesInsidePaddingY?: number;
  /** width of the bar border */
  barBorderWidth?: number;
  /** color of the bar border */
  barBorderColor?: ChartColor;
}

export interface BarDataEntry {
  x?: number;
  y: number | number[];
  marker?: string | string[];
}

export interface BarDataSet {
  values: Array<BarDataEntry | number | number[]>;
  label: string;
  config?: BarDataSetConfig;
}

export interface BarChartDataConfig {
  barWidth?: number;
  group?: {
    fromX: number;
    groupSpace: number;
    barSpace: number;
  };
}

export interface BarChartData {
  dataSets: BarDataSet[];
  config?: BarChartDataConfig;
}

// ============================================================================
// Pie Chart Types
// ============================================================================

export type ValuePosition = 'INSIDE_SLICE' | 'OUTSIDE_SLICE';

export interface PieDataSetConfig extends DataSetConfigCommon {
  /** Space between slices */
  sliceSpace?: number;
  /** Selection shift amount */
  selectionShift?: number;
  /** X value label position */
  xValuePosition?: ValuePosition;
  /** Y value label position */
  yValuePosition?: ValuePosition;
  /** Value line part 1 length */
  valueLinePart1Length?: number;
  /** Value line part 2 length */
  valueLinePart2Length?: number;
  /** Value line color */
  valueLineColor?: ChartColor;
  /** Value line width */
  valueLineWidth?: number;
  /** Value line part 1 offset percentage */
  valueLinePart1OffsetPercentage?: number;
  /** Value line variable length */
  valueLineVariableLength?: boolean;
}

export interface PieDataEntry {
  value: number;
  label?: string;
}

export interface PieDataSet {
  values: Array<PieDataEntry | number>;
  label: string;
  config?: PieDataSetConfig;
}

export interface PieChartData {
  dataSets: PieDataSet[];
}

// ============================================================================
// Scatter Chart Types
// ============================================================================

export type ScatterShape = 'SQUARE' | 'CIRCLE' | 'TRIANGLE' | 'CROSS' | 'X';

export interface ScatterDataSetConfig extends DataSetConfigLineScatterCandleRadar {
  /** Scatter shape size */
  scatterShapeSize?: number;
  /** Scatter shape type */
  scatterShape?: ScatterShape;
  /** Shape hole color */
  scatterShapeHoleColor?: ChartColor;
  /** Shape hole radius */
  scatterShapeHoleRadius?: number;
}

export interface ScatterDataEntry {
  x?: number;
  y: number;
  marker?: string;
}

export interface ScatterDataSet {
  values: Array<ScatterDataEntry | number>;
  label: string;
  config?: ScatterDataSetConfig;
}

export interface ScatterChartData {
  dataSets: ScatterDataSet[];
}

// ============================================================================
// Bubble Chart Types
// ============================================================================

export interface BubbleDataSetConfig extends DataSetConfigBarLineScatterCandleBubble {}

export interface BubbleDataEntry {
  x?: number;
  y: number;
  size: number;
  marker?: string;
}

export interface BubbleDataSet {
  values: BubbleDataEntry[];
  label: string;
  config?: BubbleDataSetConfig;
}

export interface BubbleChartData {
  dataSets: BubbleDataSet[];
}

// ============================================================================
// Candlestick Chart Types
// ============================================================================

export type PaintStyle = 'FILL' | 'STROKE' | 'FILL_AND_STROKE';

export interface CandleDataSetConfig extends DataSetConfigLineScatterCandleRadar {
  /** Space between candles */
  barSpace?: number;
  /** Shadow width */
  shadowWidth?: number;
  /** Shadow color */
  shadowColor?: ChartColor;
  /** Use same color as candle for shadow */
  shadowColorSameAsCandle?: boolean;
  /** Neutral color (open == close) */
  neutralColor?: ChartColor;
  /** Decreasing candle color */
  decreasingColor?: ChartColor;
  /** Decreasing candle paint style */
  decreasingPaintStyle?: PaintStyle;
  /** Increasing candle color */
  increasingColor?: ChartColor;
  /** Increasing candle paint style */
  increasingPaintStyle?: PaintStyle;
}

export interface CandleDataEntry {
  x?: number;
  shadowH: number;
  shadowL: number;
  open: number;
  close: number;
  marker?: string;
}

export interface CandleDataSet {
  values: CandleDataEntry[];
  label: string;
  config?: CandleDataSetConfig;
}

export interface CandleChartData {
  dataSets: CandleDataSet[];
}

// ============================================================================
// Radar Chart Types
// ============================================================================

export interface RadarDataSetConfig extends DataSetConfigLineRadar {}

export interface RadarDataEntry {
  value: number;
}

export interface RadarDataSet {
  values: Array<RadarDataEntry | number>;
  label: string;
  config?: RadarDataSetConfig;
}

export interface RadarChartData {
  dataSets: RadarDataSet[];
  labels?: string[];
}

// ============================================================================
// Combined Chart Types
// ============================================================================

export type DrawOrderCombinedChart = 'BAR' | 'BUBBLE' | 'LINE' | 'CANDLE' | 'SCATTER';

export interface CombinedChartData {
  lineData?: LineChartData;
  barData?: BarChartData;
  scatterData?: ScatterChartData;
  candleData?: CandleChartData;
  bubbleData?: BubbleChartData;
  drawOrder?: DrawOrderCombinedChart[];
}

// ============================================================================
// Chart Event Types
// ============================================================================

export interface ChartSelectData {
  x: number;
  y: number;
  dataSetIndex: number;
  dataIndex: number;
  data?: any;
}
export interface ChartSelectEvent extends EventData {
  data: ChartSelectData;
}

export interface ChartGestureEvent {
  type: 'pan' | 'scale' | 'rotate' | 'single-tap' | 'double-tap' | 'long-press';
  state: 'began' | 'changed' | 'ended' | 'cancelled';
  scaleX?: number;
  scaleY?: number;
  centerX?: number;
  centerY?: number;
}

export interface YAxisMinMaxChangeEvent {
  left?: { min: number; max: number };
  right?: { min: number; max: number };
}

// ============================================================================
// Base Chart Config Types
// ============================================================================

export interface ChartBaseConfig {
  /** Animation configuration */
  animation?: ChartAnimation;
  /** Chart background color */
  chartBackgroundColor?: ChartColor;
  /** Enable logging */
  logEnabled?: boolean;
  /** Text displayed when no data */
  noDataText?: string;
  /** Color of no data text */
  noDataTextColor?: ChartColor;
  /** Enable touch gestures */
  touchEnabled?: boolean;
  /** Enable drag deceleration */
  dragDecelerationEnabled?: boolean;
  /** Drag deceleration friction (0-1) */
  dragDecelerationFrictionCoef?: number;
  /** Enable highlight on tap */
  highlightPerTapEnabled?: boolean;
  /** Chart description */
  chartDescription?: ChartDescription;
  /** Legend configuration */
  legend?: LegendConfig;
  /** X-axis configuration */
  xAxis?: XAxisConfig;
  /** Marker configuration */
  marker?: MarkerConfig;
  /** Highlighted values */
  highlights?: Highlight[];
}

export interface BarLineChartBaseConfig extends ChartBaseConfig {
  /** Maximum highlight distance */
  maxHighlightDistance?: number;
  /** Draw grid background */
  drawGridBackground?: boolean;
  /** Grid background color */
  gridBackgroundColor?: ChartColor;
  /** Draw chart borders */
  drawBorders?: boolean;
  /** Border color */
  borderColor?: ChartColor;
  /** Border width */
  borderWidth?: number;
  /** Minimum offset from edges */
  minOffset?: number;
  /** Maximum visible value count */
  maxVisibleValueCount?: number;
  /** Visible range configuration */
  visibleRange?: VisibleRange;
  /** Auto scale min/max */
  autoScaleMinMaxEnabled?: boolean;
  /** Keep position on rotation */
  keepPositionOnRotation?: boolean;
  /** Enable highlight on drag */
  highlightPerDragEnabled?: boolean;
  /** Enable scaling */
  scaleEnabled?: boolean;
  /** Enable X-axis scaling */
  scaleXEnabled?: boolean;
  /** Enable Y-axis scaling */
  scaleYEnabled?: boolean;
  /** Enable dragging */
  dragEnabled?: boolean;
  /** Enable pinch zoom */
  pinchZoom?: boolean;
  /** Enable double tap zoom */
  doubleTapToZoomEnabled?: boolean;
  /** Y-axis configuration */
  yAxis?: YAxisConfigDual;
  /** Zoom configuration */
  zoom?: ZoomConfig;
  /** View port offsets */
  viewPortOffsets?: ViewPortOffset;
  /** Extra offsets */
  extraViewportOffsets?: ViewPortOffset;
  /** Group identifier for synced charts */
  group?: string;
  /** Chart identifier within group */
  identifier?: string;
  /** Sync X-axis across group */
  syncX?: boolean;
  /** Sync Y-axis across group */
  syncY?: boolean;
}

export interface PieRadarChartBaseConfig extends ChartBaseConfig {
  /** Rotation angle */
  rotationAngle?: number;
  /** Enable rotation */
  rotationEnabled?: boolean;
  /** Minimum offset */
  minOffset?: number;
}

export interface PieChartConfig extends PieRadarChartBaseConfig {
  /** Draw hole in center */
  drawHole?: boolean;
  /** Hole radius as percentage */
  holeRadius?: number;
  /** Transparent circle radius */
  transparentCircleRadius?: number;
  /** Hole color */
  holeColor?: ChartColor;
  /** Transparent circle color */
  transparentCircleColor?: ChartColor;
  /** Draw center text */
  drawCenterText?: boolean;
  /** Center text */
  centerText?: string;
  /** Center text color */
  centerTextColor?: ChartColor;
  /** Center text size */
  centerTextSize?: number;
  /** Draw slice labels */
  drawSliceText?: boolean;
  /** Use percentage values */
  usePercentValues?: boolean;
  /** Maximum angle for highlighting */
  maxAngle?: number;
  /** Entry label text color */
  entryLabelColor?: ChartColor;
  /** Entry label text size */
  entryLabelTextSize?: number;
}

export interface RadarChartConfig extends PieRadarChartBaseConfig {
  /** Y-axis configuration */
  yAxis?: YAxisConfig;
  /** Draw web lines */
  drawWeb?: boolean;
  /** Web line width */
  webLineWidth?: number;
  /** Web line width inner */
  webLineWidthInner?: number;
  /** Web alpha (0-255) */
  webAlpha?: number;
  /** Web color */
  webColor?: ChartColor;
  /** Web color inner */
  webColorInner?: ChartColor;
  /** Skip web line count */
  skipWebLineCount?: number;
}

// ============================================================================
// Chart Component Props
// ============================================================================

export interface LineChartProps extends BarLineChartBaseConfig {
  data: LineChartData;
}

export interface BarChartProps extends BarLineChartBaseConfig {
  data: BarChartData;
}

export interface HorizontalBarChartProps extends BarLineChartBaseConfig {
  data: BarChartData;
}

export interface PieChartProps extends PieChartConfig {
  data: PieChartData;
}

export interface ScatterChartProps extends BarLineChartBaseConfig {
  data: ScatterChartData;
}

export interface BubbleChartProps extends BarLineChartBaseConfig {
  data: BubbleChartData;
}

export interface CandleStickChartProps extends BarLineChartBaseConfig {
  data: CandleChartData;
}

export interface RadarChartProps extends RadarChartConfig {
  data: RadarChartData;
}

export interface CombinedChartProps extends BarLineChartBaseConfig {
  data: CombinedChartData;
}
