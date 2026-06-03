/**
 * @nstudio/ncharts Angular Directives
 *
 * Standalone Angular components/directives for all chart types
 * Uses signal inputs for zoneless compatibility
 */
import { Directive, ElementRef, input, output, effect, OnDestroy, AfterViewInit, untracked } from '@angular/core';
import type { LineChartData, BarChartData, PieChartData, ScatterChartData, BubbleChartData, CandleChartData, RadarChartData, CombinedChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, Highlight, ChartSelectEvent, ChartGestureEvent, ChartColor, ChartSelectData } from '@nstudio/ncharts';

// ============================================================================
// Base Chart Directive
// ============================================================================

@Directive()
export abstract class ChartBaseDirective implements OnDestroy, AfterViewInit {
  // Common signal inputs
  animation = input<ChartAnimation>();
  chartBackgroundColor = input<ChartColor>();
  chartGridBackgroundColor = input<ChartColor>();
  logEnabled = input<boolean>();
  noDataText = input<string>();
  noDataTextColor = input<ChartColor>();
  dragDecelerationEnabled = input<boolean>();
  dragDecelerationFrictionCoef = input<number>();
  highlightPerTapEnabled = input<boolean>();
  chartDescription = input<ChartDescription>();
  legend = input<LegendConfig>();
  xAxis = input<XAxisConfig>();
  marker = input<MarkerConfig>();
  highlights = input<Highlight[]>();

  // Common outputs
  select = output<ChartSelectData>();
  deselect = output<void>();
  gesture = output<ChartGestureEvent>();

  protected chart: any;
  protected initialized = false;

  constructor(protected el: ElementRef) {
    // Set up effects for common properties
    effect(() => {
      const value = this.animation();
      if (this.initialized && value !== undefined) {
        this.chart.animation = value;
      }
    });

    effect(() => {
      const value = this.chartBackgroundColor();
      if (this.initialized && value !== undefined) {
        this.chart.chartBackgroundColor = value;
      }
    });

    effect(() => {
      const value = this.chartGridBackgroundColor();
      if (this.initialized && value !== undefined) {
        this.chart.chartGridBackgroundColor = value;
      }
    });

    effect(() => {
      const value = this.logEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.logEnabled = value;
      }
    });

    effect(() => {
      const value = this.noDataText();
      if (this.initialized && value !== undefined) {
        this.chart.noDataText = value;
      }
    });

    effect(() => {
      const value = this.noDataTextColor();
      if (this.initialized && value !== undefined) {
        this.chart.noDataTextColor = value;
      }
    });

    effect(() => {
      const value = this.dragDecelerationEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.dragDecelerationEnabled = value;
      }
    });

    effect(() => {
      const value = this.dragDecelerationFrictionCoef();
      if (this.initialized && value !== undefined) {
        this.chart.dragDecelerationFrictionCoef = value;
      }
    });

    effect(() => {
      const value = this.chartDescription();
      if (this.initialized && value !== undefined) {
        this.chart.chartDescription = value;
      }
    });

    effect(() => {
      const value = this.legend();
      if (this.initialized && value !== undefined) {
        this.chart.legend = value;
      }
    });

    effect(() => {
      const value = this.xAxis();
      if (this.initialized && value !== undefined) {
        this.chart.xAxis = value;
      }
    });

    effect(() => {
      const value = this.marker();
      if (this.initialized && value !== undefined) {
        this.chart.marker = value;
      }
    });

    effect(() => {
      const value = this.highlights();
      if (this.initialized && value !== undefined) {
        this.chart.highlights = value;
      }
    });
  }

  ngAfterViewInit(): void {
    this.chart = this.el.nativeElement;
    this.initialized = true;
    this.applyInitialProperties();
    // this.setupEventListeners();
  }

  ngOnDestroy(): void {
    // this.removeEventListeners();
    this.chart = null;
    this.initialized = false;
  }

  // private setupEventListeners(): void {
  //   if (!this.chart) return;
  //   this.chart.on('select', this.onChartSelect, this);
  //   this.chart.on('deselect', this.onChartDeselect, this);
  //   this.chart.on('gesture', this.onChartGesture, this);
  // }

  // private removeEventListeners(): void {
  //   if (!this.chart) return;
  //   this.chart.off('select', this.onChartSelect, this);
  //   this.chart.off('deselect', this.onChartDeselect, this);
  //   this.chart.off('gesture', this.onChartGesture, this);
  // }

  // private onChartSelect = (args: any): void => {
  //   this.select.emit({
  //     x: args.x,
  //     y: args.y,
  //     dataSetIndex: args.dataSetIndex,
  //     dataIndex: args.dataIndex,
  //     data: args.data,
  //   });
  // };

  // private onChartDeselect = (): void => {
  //   this.deselect.emit();
  // };

  // private onChartGesture = (args: any): void => {
  //   this.gesture.emit(args);
  // };

  protected applyInitialProperties(): void {
    if (!this.chart) return;

    // Apply all current signal values
    const animation = this.animation();
    if (animation) this.chart.animation = animation;

    const chartBackgroundColor = this.chartBackgroundColor();
    if (chartBackgroundColor) this.chart.chartBackgroundColor = chartBackgroundColor;

    const chartGridBackgroundColor = this.chartGridBackgroundColor();
    if (chartGridBackgroundColor) this.chart.chartGridBackgroundColor = chartGridBackgroundColor;

    const logEnabled = this.logEnabled();
    if (logEnabled !== undefined) this.chart.logEnabled = logEnabled;

    const noDataText = this.noDataText();
    if (noDataText) this.chart.noDataText = noDataText;

    const noDataTextColor = this.noDataTextColor();
    if (noDataTextColor) this.chart.noDataTextColor = noDataTextColor;

    const dragDecelerationEnabled = this.dragDecelerationEnabled();
    if (dragDecelerationEnabled !== undefined) this.chart.dragDecelerationEnabled = dragDecelerationEnabled;

    const dragDecelerationFrictionCoef = this.dragDecelerationFrictionCoef();
    if (dragDecelerationFrictionCoef !== undefined) this.chart.dragDecelerationFrictionCoef = dragDecelerationFrictionCoef;

    const chartDescription = this.chartDescription();
    if (chartDescription) this.chart.chartDescription = chartDescription;

    const legend = this.legend();
    if (legend) this.chart.legend = legend;

    const xAxis = this.xAxis();
    if (xAxis) this.chart.xAxis = xAxis;

    const marker = this.marker();
    if (marker) this.chart.marker = marker;

    const highlights = this.highlights();
    if (highlights) this.chart.highlights = highlights;
  }

  // Public methods
  public animate(animation?: ChartAnimation): void {
    this.chart?.animate(animation);
  }

  public highlightValues(highlights: Highlight[] | null): void {
    this.chart?.highlightValues(highlights);
  }

  public clearHighlights(): void {
    this.chart?.clearHighlights();
  }

  public invalidate(): void {
    this.chart?.invalidate();
  }
}

// ============================================================================
// BarLine Chart Base Directive
// ============================================================================

@Directive()
export abstract class BarLineChartBaseDirective extends ChartBaseDirective {
  maxHighlightDistance = input<number>();
  drawGridBackground = input<boolean>();
  gridBackgroundColor = input<ChartColor>();
  drawBorders = input<boolean>();
  borderColor = input<ChartColor>();
  borderWidth = input<number>();
  minOffset = input<number>();
  maxVisibleValueCount = input<number>();
  autoScaleMinMaxEnabled = input<boolean>();
  keepPositionOnRotation = input<boolean>();
  scaleXEnabled = input<boolean>();
  scaleYEnabled = input<boolean>();
  doubleTapToZoomEnabled = input<boolean>();
  yAxis = input<YAxisConfigDual>();

  constructor(el: ElementRef) {
    super(el);

    // Set up effects for BarLine-specific properties
    effect(() => {
      const value = this.maxHighlightDistance();
      if (this.initialized && value !== undefined) {
        this.chart.maxHighlightDistance = value;
      }
    });

    effect(() => {
      const value = this.drawGridBackground();
      if (this.initialized && value !== undefined) {
        this.chart.drawGridBackground = value;
      }
    });

    effect(() => {
      const value = this.gridBackgroundColor();
      if (this.initialized && value !== undefined) {
        this.chart.gridBackgroundColor = value;
      }
    });

    effect(() => {
      const value = this.drawBorders();
      if (this.initialized && value !== undefined) {
        this.chart.drawBorders = value;
      }
    });

    effect(() => {
      const value = this.borderColor();
      if (this.initialized && value !== undefined) {
        this.chart.borderColor = value;
      }
    });

    effect(() => {
      const value = this.borderWidth();
      if (this.initialized && value !== undefined) {
        this.chart.borderWidth = value;
      }
    });

    effect(() => {
      const value = this.minOffset();
      if (this.initialized && value !== undefined) {
        this.chart.minOffset = value;
      }
    });

    effect(() => {
      const value = this.maxVisibleValueCount();
      if (this.initialized && value !== undefined) {
        this.chart.maxVisibleValueCount = value;
      }
    });

    effect(() => {
      const value = this.autoScaleMinMaxEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.autoScaleMinMaxEnabled = value;
      }
    });

    effect(() => {
      const value = this.keepPositionOnRotation();
      if (this.initialized && value !== undefined) {
        this.chart.keepPositionOnRotation = value;
      }
    });

    effect(() => {
      const value = this.scaleXEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.scaleXEnabled = value;
      }
    });

    effect(() => {
      const value = this.scaleYEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.scaleYEnabled = value;
      }
    });

    effect(() => {
      const value = this.doubleTapToZoomEnabled();
      if (this.initialized && value !== undefined) {
        this.chart.doubleTapToZoomEnabled = value;
      }
    });

    effect(() => {
      const value = this.yAxis();
      if (this.initialized && value !== undefined) {
        this.chart.yAxis = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    if (!this.chart) return;

    const maxHighlightDistance = this.maxHighlightDistance();
    if (maxHighlightDistance !== undefined) this.chart.maxHighlightDistance = maxHighlightDistance;

    const drawGridBackground = this.drawGridBackground();
    if (drawGridBackground !== undefined) this.chart.drawGridBackground = drawGridBackground;

    const gridBackgroundColor = this.gridBackgroundColor();
    if (gridBackgroundColor) this.chart.gridBackgroundColor = gridBackgroundColor;

    const drawBorders = this.drawBorders();
    if (drawBorders !== undefined) this.chart.drawBorders = drawBorders;

    const borderColor = this.borderColor();
    if (borderColor) this.chart.borderColor = borderColor;

    const borderWidth = this.borderWidth();
    if (borderWidth !== undefined) this.chart.borderWidth = borderWidth;

    const minOffset = this.minOffset();
    if (minOffset !== undefined) this.chart.minOffset = minOffset;

    const maxVisibleValueCount = this.maxVisibleValueCount();
    if (maxVisibleValueCount !== undefined) this.chart.maxVisibleValueCount = maxVisibleValueCount;

    const autoScaleMinMaxEnabled = this.autoScaleMinMaxEnabled();
    if (autoScaleMinMaxEnabled !== undefined) this.chart.autoScaleMinMaxEnabled = autoScaleMinMaxEnabled;

    const keepPositionOnRotation = this.keepPositionOnRotation();
    if (keepPositionOnRotation !== undefined) this.chart.keepPositionOnRotation = keepPositionOnRotation;

    const scaleXEnabled = this.scaleXEnabled();
    if (scaleXEnabled !== undefined) this.chart.scaleXEnabled = scaleXEnabled;

    const scaleYEnabled = this.scaleYEnabled();
    if (scaleYEnabled !== undefined) this.chart.scaleYEnabled = scaleYEnabled;

    const doubleTapToZoomEnabled = this.doubleTapToZoomEnabled();
    if (doubleTapToZoomEnabled !== undefined) this.chart.doubleTapToZoomEnabled = doubleTapToZoomEnabled;

    const yAxis = this.yAxis();
    if (yAxis) this.chart.yAxis = yAxis;
  }

  // Public methods specific to BarLine charts
  public moveViewToX(xValue: number): void {
    this.chart?.moveViewToX(xValue);
  }

  public moveViewTo(xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    this.chart?.moveViewTo(xValue, yValue, axisDependency);
  }

  public centerViewTo(xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    this.chart?.centerViewTo(xValue, yValue, axisDependency);
  }

  public zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axisDependency: 'LEFT' | 'RIGHT' = 'LEFT'): void {
    this.chart?.zoom(scaleX, scaleY, xValue, yValue, axisDependency);
  }

  public fitScreen(): void {
    this.chart?.fitScreen();
  }
}

// ============================================================================
// PieRadar Chart Base Directive
// ============================================================================

@Directive()
export abstract class PieRadarChartBaseDirective extends ChartBaseDirective {
  rotationAngle = input<number>();
  minOffset = input<number>();

  constructor(el: ElementRef) {
    super(el);

    effect(() => {
      const value = this.rotationAngle();
      if (this.initialized && value !== undefined) {
        this.chart.rotationAngle = value;
      }
    });

    effect(() => {
      const value = this.minOffset();
      if (this.initialized && value !== undefined) {
        this.chart.minOffset = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    if (!this.chart) return;

    const rotationAngle = this.rotationAngle();
    if (rotationAngle !== undefined) this.chart.rotationAngle = rotationAngle;

    const minOffset = this.minOffset();
    if (minOffset !== undefined) this.chart.minOffset = minOffset;
  }
}

// ============================================================================
// Line Chart Directive
// ============================================================================

@Directive({
  selector: 'LineChart',
  standalone: true,
})
export class LineChartDirective extends BarLineChartBaseDirective {
  constructor(elRef: ElementRef) {
    super(elRef);
  }
}

// ============================================================================
// Bar Chart Directive
// ============================================================================

@Directive({
  selector: 'BarChart',
  standalone: true,
})
export class BarChartDirective extends BarLineChartBaseDirective {
  constructor(elRef: ElementRef) {
    super(elRef);
  }
}

// ============================================================================
// Horizontal Bar Chart Directive
// ============================================================================

@Directive({
  selector: 'HorizontalBarChart',
  standalone: true,
})
export class HorizontalBarChartDirective extends BarLineChartBaseDirective {
  data = input<BarChartData>();

  constructor(elRef: ElementRef) {
    super(elRef);

    effect(() => {
      const value = this.data();
      if (this.initialized && value !== undefined) {
        this.chart.data = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    const data = this.data();
    if (data && this.chart) {
      this.chart.data = data;
    }
  }
}

// ============================================================================
// Pie Chart Directive
// ============================================================================

@Directive({
  selector: 'PieChart',
  standalone: true,
})
export class PieChartDirective extends PieRadarChartBaseDirective {
  constructor(elRef: ElementRef) {
    super(elRef);
  }
}

// ============================================================================
// Scatter Chart Directive
// ============================================================================

@Directive({
  selector: 'ScatterChart',
  standalone: true,
})
export class ScatterChartDirective extends BarLineChartBaseDirective {
  data = input<ScatterChartData>();

  constructor(elRef: ElementRef) {
    super(elRef);

    effect(() => {
      const value = this.data();
      if (this.initialized && value !== undefined) {
        this.chart.data = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    const data = this.data();
    if (data && this.chart) {
      this.chart.data = data;
    }
  }
}

// ============================================================================
// Bubble Chart Directive
// ============================================================================

@Directive({
  selector: 'BubbleChart',
  standalone: true,
})
export class BubbleChartDirective extends BarLineChartBaseDirective {
  data = input<BubbleChartData>();

  constructor(elRef: ElementRef) {
    super(elRef);

    effect(() => {
      const value = this.data();
      if (this.initialized && value !== undefined) {
        this.chart.data = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    const data = this.data();
    if (data && this.chart) {
      this.chart.data = data;
    }
  }
}

// ============================================================================
// CandleStick Chart Directive
// ============================================================================

@Directive({
  selector: 'CandleStickChart',
  standalone: true,
})
export class CandleStickChartDirective extends BarLineChartBaseDirective {
  data = input<CandleChartData>();

  constructor(elRef: ElementRef) {
    super(elRef);

    effect(() => {
      const value = this.data();
      if (this.initialized && value !== undefined) {
        this.chart.data = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    const data = this.data();
    if (data && this.chart) {
      this.chart.data = data;
    }
  }
}

// ============================================================================
// Radar Chart Directive
// ============================================================================

@Directive({
  selector: 'RadarChart',
  standalone: true,
})
export class RadarChartDirective extends PieRadarChartBaseDirective {
  data = input<RadarChartData>();
  yAxis = input<YAxisConfig>();
  drawWeb = input<boolean>();
  webLineWidth = input<number>();
  webLineWidthInner = input<number>();
  webAlpha = input<number>();
  webColor = input<ChartColor>();
  webColorInner = input<ChartColor>();
  skipWebLineCount = input<number>();

  constructor(elRef: ElementRef) {
    super(elRef);

    effect(() => {
      const value = this.data();
      if (this.initialized && value !== undefined) {
        this.chart.data = value;
      }
    });

    effect(() => {
      const value = this.yAxis();
      if (this.initialized && value !== undefined) {
        this.chart.yAxis = value;
      }
    });

    effect(() => {
      const value = this.drawWeb();
      if (this.initialized && value !== undefined) {
        this.chart.drawWeb = value;
      }
    });

    effect(() => {
      const value = this.webLineWidth();
      if (this.initialized && value !== undefined) {
        this.chart.webLineWidth = value;
      }
    });

    effect(() => {
      const value = this.webLineWidthInner();
      if (this.initialized && value !== undefined) {
        this.chart.webLineWidthInner = value;
      }
    });

    effect(() => {
      const value = this.webAlpha();
      if (this.initialized && value !== undefined) {
        this.chart.webAlpha = value;
      }
    });

    effect(() => {
      const value = this.webColor();
      if (this.initialized && value !== undefined) {
        this.chart.webColor = value;
      }
    });

    effect(() => {
      const value = this.webColorInner();
      if (this.initialized && value !== undefined) {
        this.chart.webColorInner = value;
      }
    });

    effect(() => {
      const value = this.skipWebLineCount();
      if (this.initialized && value !== undefined) {
        this.chart.skipWebLineCount = value;
      }
    });
  }

  protected override applyInitialProperties(): void {
    super.applyInitialProperties();
    if (!this.chart) return;

    const data = this.data();
    if (data) this.chart.data = data;

    const yAxis = this.yAxis();
    if (yAxis) this.chart.yAxis = yAxis;

    const drawWeb = this.drawWeb();
    if (drawWeb !== undefined) this.chart.drawWeb = drawWeb;

    const webLineWidth = this.webLineWidth();
    if (webLineWidth !== undefined) this.chart.webLineWidth = webLineWidth;

    const webLineWidthInner = this.webLineWidthInner();
    if (webLineWidthInner !== undefined) this.chart.webLineWidthInner = webLineWidthInner;

    const webAlpha = this.webAlpha();
    if (webAlpha !== undefined) this.chart.webAlpha = webAlpha;

    const webColor = this.webColor();
    if (webColor) this.chart.webColor = webColor;

    const webColorInner = this.webColorInner();
    if (webColorInner) this.chart.webColorInner = webColorInner;

    const skipWebLineCount = this.skipWebLineCount();
    if (skipWebLineCount !== undefined) this.chart.skipWebLineCount = skipWebLineCount;
  }
}

// ============================================================================
// Combined Chart Directive
// ============================================================================

@Directive({
  selector: 'CombinedChart',
  standalone: true,
})
export class CombinedChartDirective extends BarLineChartBaseDirective {
  constructor(elRef: ElementRef) {
    super(elRef);
  }
}
