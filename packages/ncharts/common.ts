import { View, Property, Color, CSSType } from '@nativescript/core';
import type { ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, YAxisConfig, ChartDescription, MarkerConfig, Highlight, LineChartData, BarChartData, PieChartData, ScatterChartData, BubbleChartData, CandleChartData, RadarChartData, CombinedChartData, ChartColor } from './types';

export * from './types';

/**
 * Global configuration for @nstudio/ncharts
 */
export class NCharts {
  /**
   * Enable debug logging for the ncharts plugin.
   * Set to true to see detailed console logs.
   * @default false
   */
  static debug: boolean = false;
}

/**
 * Internal logging helper - only logs when NCharts.debug is true
 */
export function nchartsLog(...args: any[]): void {
  if (NCharts.debug) {
    console.log(...args);
  }
}

/**
 * Internal error logging helper - only logs when NCharts.debug is true
 */
export function nchartsError(...args: any[]): void {
  if (NCharts.debug) {
    console.error(...args);
  }
}

/**
 * Convert ChartColor to native Color
 */
export function parseColor(color: ChartColor | undefined): Color | undefined {
  if (color === undefined || color === null) return undefined;
  if (typeof color === 'string') {
    return new Color(color);
  }
  // Number is ARGB format
  return new Color(color);
}

/**
 * Convert ChartColor to platform-specific format
 * Android: ARGB integer
 * iOS: UIColor (handled by Color class)
 */
export function toPlatformColor(color: ChartColor | undefined): any {
  if (color === undefined || color === null) return undefined;
  const c = parseColor(color);
  return c ? c.ios || c.android : undefined;
}

/**
 * Base class for all chart views
 * Provides common functionality shared across all chart types
 */
@CSSType('ChartViewBase')
export abstract class ChartViewBase extends View {
  // Native chart instance
  protected _nativeChart: any;

  /** Animation configuration */
  public animation: ChartAnimation | undefined;

  /** Chart background color */
  public chartBackgroundColor: ChartColor | undefined;

  /** Chart grid background color */
  public chartGridBackgroundColor: ChartColor | undefined;

  /** Enable logging */
  public logEnabled: boolean = false;

  /** Text displayed when no data */
  public noDataText: string = 'No chart data available';

  /** Color of no data text */
  public noDataTextColor: ChartColor | undefined;

  /** Enable touch gestures */
  public touchEnabled: boolean = true;

  /** Enable drag deceleration */
  public dragDecelerationEnabled: boolean = true;

  /** Drag deceleration friction (0-1) */
  public dragDecelerationFrictionCoef: number = 0.9;

  /** Enable highlight on tap */
  public highlightPerTapEnabled: boolean = true;

  /** Chart description */
  public chartDescription: ChartDescription | undefined;

  /** Legend configuration */
  public legend: LegendConfig | undefined;

  /** X-axis configuration */
  public xAxis: XAxisConfig | undefined;

  /** Marker configuration */
  public marker: MarkerConfig | undefined;

  /** Highlighted values */
  public highlights: Highlight[] | undefined;

  /** Select event name */
  public static selectEvent = 'select';

  /** Deselect event name */
  public static deselectEvent = 'deselect';

  /** Gesture event name */
  public static gestureEvent = 'gesture';

  /**
   * Get the native chart instance
   */
  abstract get nativeChart(): any;

  /**
   * Apply data to the chart
   */
  abstract applyData(): void;

  /**
   * Animate chart
   */
  // @ts-ignore
  public animate(animation?: ChartAnimation) {
    if (!this.nativeChart) return;
    const anim = animation || this.animation;
    if (!anim) return;
    this._applyAnimation(anim);
  }

  /**
   * Highlight values programmatically
   */
  public highlightValues(highlights: Highlight[] | null): void {
    if (!this.nativeChart) return;
    this._applyHighlights(highlights);
  }

  /**
   * Clear all highlights
   */
  public clearHighlights(): void {
    this.highlightValues(null);
  }

  /**
   * Invalidate and redraw chart
   */
  public invalidate(): void {
    if (!this.nativeChart) return;
    this._invalidateChart();
  }

  protected abstract _applyAnimation(animation: ChartAnimation): void;
  protected abstract _applyHighlights(highlights: Highlight[] | null): void;
  protected abstract _invalidateChart(): void;
  protected abstract _applyLegend(legend: LegendConfig): void;
  protected abstract _applyXAxis(xAxis: XAxisConfig): void;
  protected abstract _applyDescription(description: ChartDescription): void;
  protected abstract _applyMarker(marker: MarkerConfig): void;

  protected onAnimationChange(): void {
    if (this.animation) {
      this.animate(this.animation);
    }
  }

  protected onLegendChange(): void {
    if (this.legend && this.nativeChart) {
      this._applyLegend(this.legend);
    }
  }

  protected onXAxisChange(): void {
    if (this.xAxis && this.nativeChart) {
      this._applyXAxis(this.xAxis);
    }
  }

  protected onDescriptionChange(): void {
    if (this.chartDescription && this.nativeChart) {
      this._applyDescription(this.chartDescription);
    }
  }

  protected onMarkerChange(): void {
    if (this.marker && this.nativeChart) {
      this._applyMarker(this.marker);
    }
  }

  protected onHighlightsChange(): void {
    if (this.nativeChart) {
      this._applyHighlights(this.highlights || null);
    }
  }
}

/**
 * Base class for Line, Bar, Scatter, Bubble, Candlestick, Combined charts
 */
@CSSType('BarLineChartViewBase')
export abstract class BarLineChartViewBase extends ChartViewBase {
  /** Maximum highlight distance */
  public maxHighlightDistance: number = 500;

  /** Draw grid background */
  public drawGridBackground: boolean = false;

  /** Grid background color */
  public gridBackgroundColor: ChartColor | undefined;

  /** Draw chart borders */
  public drawBorders: boolean = false;

  /** Border color */
  // @ts-ignore
  public borderColor: ChartColor | undefined;

  /** Border width */
  public borderWidth: number = 1;

  /** Minimum offset from edges */
  public minOffset: number = 10;

  /** Maximum visible value count */
  public maxVisibleValueCount: number = 100;

  /** Auto scale min/max */
  public autoScaleMinMaxEnabled: boolean = false;

  /** Keep position on rotation */
  public keepPositionOnRotation: boolean = false;

  /** Enable highlight on drag */
  public highlightPerDragEnabled: boolean = true;

  /** Enable scaling */
  public scaleEnabled: boolean = true;

  /** Enable X-axis scaling */
  public scaleXEnabled: boolean = true;

  /** Enable Y-axis scaling */
  public scaleYEnabled: boolean = true;

  /** Enable dragging */
  public dragEnabled: boolean = true;

  /** Enable pinch zoom */
  public pinchZoom: boolean = true;

  /** Enable double tap zoom */
  public doubleTapToZoomEnabled: boolean = true;

  /** Y-axis configuration */
  public yAxis: YAxisConfigDual | undefined;

  protected abstract _applyYAxis(yAxis: YAxisConfigDual): void;

  protected onYAxisChange(): void {
    if (this.yAxis && this.nativeChart) {
      this._applyYAxis(this.yAxis);
    }
  }

  /**
   * Move view to specific X value
   */
  public moveViewToX(xValue: number): void {
    if (!this.nativeChart) return;
    this._moveViewToX(xValue);
  }

  /**
   * Move view to specific X,Y value
   */
  public moveViewTo(xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    if (!this.nativeChart) return;
    this._moveViewTo(xValue, yValue, axisDependency);
  }

  /**
   * Center view on specific X,Y value
   */
  public centerViewTo(xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    if (!this.nativeChart) return;
    this._centerViewTo(xValue, yValue, axisDependency);
  }

  /**
   * Zoom to specific scale and position
   */
  public zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    if (!this.nativeChart) return;
    this._zoom(scaleX, scaleY, xValue, yValue, axisDependency);
  }

  /**
   * Reset zoom to original
   */
  public fitScreen(): void {
    if (!this.nativeChart) return;
    this._fitScreen();
  }

  protected abstract _moveViewToX(xValue: number): void;
  protected abstract _moveViewTo(xValue: number, yValue: number, axisDependency: string): void;
  protected abstract _centerViewTo(xValue: number, yValue: number, axisDependency: string): void;
  protected abstract _zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axisDependency: string): void;
  protected abstract _fitScreen(): void;
}

/**
 * Base class for Pie and Radar charts
 */
@CSSType('PieRadarChartViewBase')
export abstract class PieRadarChartViewBase extends ChartViewBase {
  /** Rotation angle */
  public rotationAngle: number = 270;

  /** Enable rotation */
  public rotationEnabled: boolean = true;

  /** Minimum offset */
  public minOffset: number = 0;
}

/**
 * Line Chart
 */
@CSSType('LineChart')
export abstract class LineChartBase extends BarLineChartViewBase {
  public data: LineChartData | undefined;
}

/**
 * Bar Chart
 */
@CSSType('BarChart')
export abstract class BarChartBase extends BarLineChartViewBase {
  public data: BarChartData | undefined;
}

/**
 * Horizontal Bar Chart
 */
@CSSType('HorizontalBarChart')
export abstract class HorizontalBarChartBase extends BarLineChartViewBase {
  public data: BarChartData | undefined;
}

/**
 * Pie Chart
 */
@CSSType('PieChart')
export abstract class PieChartBase extends PieRadarChartViewBase {
  public data: PieChartData | undefined;

  /** Draw hole in center */
  public drawHole: boolean = true;

  /** Hole radius as percentage */
  public holeRadius: number = 50;

  /** Transparent circle radius */
  public transparentCircleRadius: number = 55;

  /** Hole color */
  public holeColor: ChartColor | undefined;

  /** Transparent circle color */
  public transparentCircleColor: ChartColor | undefined;

  /** Draw center text */
  public drawCenterText: boolean = false;

  /** Center text */
  public centerText: string = '';

  /** Center text color */
  public centerTextColor: ChartColor | undefined;

  /** Center text size */
  public centerTextSize: number = 12;

  /** Draw slice labels */
  public drawSliceText: boolean = true;

  /** Slice label text size */
  public sliceTextSize: number = 13;

  /** Slice label text color */
  public sliceTextColor: ChartColor | undefined;

  /** Use percentage values */
  public usePercentValues: boolean = false;

  /** Maximum angle */
  public maxAngle: number = 360;
}

/**
 * Scatter Chart
 */
@CSSType('ScatterChart')
export abstract class ScatterChartBase extends BarLineChartViewBase {
  public data: ScatterChartData | undefined;
}

/**
 * Bubble Chart
 */
@CSSType('BubbleChart')
export abstract class BubbleChartBase extends BarLineChartViewBase {
  public data: BubbleChartData | undefined;
}

/**
 * Candlestick Chart
 */
@CSSType('CandleStickChart')
export abstract class CandleStickChartBase extends BarLineChartViewBase {
  public data: CandleChartData | undefined;
}

/**
 * Radar Chart
 */
@CSSType('RadarChart')
export abstract class RadarChartBase extends PieRadarChartViewBase {
  public data: RadarChartData | undefined;

  /** Y-axis configuration */
  public yAxis: YAxisConfig | undefined;

  /** Draw web lines */
  public drawWeb: boolean = true;

  /** Web line width */
  public webLineWidth: number = 1;

  /** Web line width inner */
  public webLineWidthInner: number = 1;

  /** Web alpha (0-255) */
  public webAlpha: number = 150;

  /** Web color */
  public webColor: ChartColor | undefined;

  /** Web color inner */
  public webColorInner: ChartColor | undefined;

  /** Skip web line count */
  public skipWebLineCount: number = 0;
}

/**
 * Combined Chart
 */
@CSSType('CombinedChart')
export abstract class CombinedChartBase extends BarLineChartViewBase {
  public data: CombinedChartData | undefined;
}

// Data property for all chart types
export const dataProperty = new Property<ChartViewBase, any>({
  name: 'data',
  valueChanged(target, oldValue, newValue) {
    if (target.nativeChart) {
      target.applyData();
    }
  },
});
dataProperty.register(ChartViewBase);

// Animation property
export const animationProperty = new Property<ChartViewBase, ChartAnimation>({
  name: 'animation',
  valueChanged(target, oldValue, newValue) {
    (target as any).onAnimationChange();
  },
});
animationProperty.register(ChartViewBase);

// Legend property
export const legendProperty = new Property<ChartViewBase, LegendConfig>({
  name: 'legend',
  valueChanged(target, oldValue, newValue) {
    (target as any).onLegendChange();
  },
});
legendProperty.register(ChartViewBase);

// XAxis property
export const xAxisProperty = new Property<ChartViewBase, XAxisConfig>({
  name: 'xAxis',
  valueChanged(target, oldValue, newValue) {
    (target as any).onXAxisChange();
  },
});
xAxisProperty.register(ChartViewBase);

// YAxis property for BarLine charts
export const yAxisProperty = new Property<BarLineChartViewBase, YAxisConfigDual>({
  name: 'yAxis',
  valueChanged(target, oldValue, newValue) {
    (target as any).onYAxisChange();
  },
});
yAxisProperty.register(BarLineChartViewBase);

// Description property
export const chartDescriptionProperty = new Property<ChartViewBase, ChartDescription>({
  name: 'chartDescription',
  valueChanged(target, oldValue, newValue) {
    (target as any).onDescriptionChange();
  },
});
chartDescriptionProperty.register(ChartViewBase);

// Marker property
export const markerProperty = new Property<ChartViewBase, MarkerConfig>({
  name: 'marker',
  valueChanged(target, oldValue, newValue) {
    (target as any).onMarkerChange();
  },
});
markerProperty.register(ChartViewBase);

// Highlights property
export const highlightsProperty = new Property<ChartViewBase, Highlight[]>({
  name: 'highlights',
  valueChanged(target, oldValue, newValue) {
    (target as any).onHighlightsChange();
  },
});
highlightsProperty.register(ChartViewBase);

// Pie Chart specific properties
export const drawHoleProperty = new Property<PieChartBase, boolean>({
  name: 'drawHole',
  defaultValue: true,
  valueConverter: (v) => String(v) === 'true',
  valueChanged(target, oldValue, newValue) {
    (target as any).onDrawHoleChange?.();
  },
});
drawHoleProperty.register(PieChartBase);

export const holeRadiusProperty = new Property<PieChartBase, number>({
  name: 'holeRadius',
  defaultValue: 50,
  valueConverter: (v) => parseFloat(v),
  valueChanged(target, oldValue, newValue) {
    (target as any).onHoleRadiusChange?.();
  },
});
holeRadiusProperty.register(PieChartBase);

export const rotationAngleProperty = new Property<PieRadarChartViewBase, number>({
  name: 'rotationAngle',
  defaultValue: 270,
  valueConverter: (v) => parseFloat(v),
  valueChanged(target, oldValue, newValue) {
    (target as any).onRotationAngleChange?.();
  },
});
rotationAngleProperty.register(PieRadarChartViewBase);
