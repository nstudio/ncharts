/**
 * @nstudio/ncharts/angular
 *
 * Angular integration for NativeScript Charts
 * Provides standalone Angular components for all chart types
 */

export { NativeScriptNchartsModule, registerNchartsElements, NCHARTS_DIRECTIVES } from './ncharts.module';

// Export all chart directives
export { LineChartDirective, BarChartDirective, HorizontalBarChartDirective, PieChartDirective, ScatterChartDirective, BubbleChartDirective, CandleStickChartDirective, RadarChartDirective, CombinedChartDirective, ChartBaseDirective, BarLineChartBaseDirective, PieRadarChartBaseDirective } from './ncharts.directives';

// Re-export core utilities from main package
export { parseColor } from '@nstudio/ncharts';

// Re-export types for convenience
export type { ChartColor, ChartAnimation, EasingFunction, LegendHorizontalAlignment, LegendVerticalAlignment, LegendOrientation, LegendDirection, LegendForm, LegendConfig, XAxisPosition, YAxisPosition, XAxisConfig, YAxisConfig, YAxisConfigDual, ChartDescription, MarkerConfig, LineChartData, BarChartData, PieChartData, ScatterChartData, BubbleChartData, CandleChartData, RadarChartData, CombinedChartData, Highlight, ChartSelectEvent, ChartGestureEvent } from '@nstudio/ncharts';
