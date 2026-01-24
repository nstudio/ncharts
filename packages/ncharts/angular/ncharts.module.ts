/**
 * @nstudio/ncharts Angular Module
 *
 * Provides NgModule for registering chart elements and utilities
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LineChartDirective, BarChartDirective, HorizontalBarChartDirective, PieChartDirective, ScatterChartDirective, BubbleChartDirective, CandleStickChartDirective, RadarChartDirective, CombinedChartDirective } from './ncharts.directives';

// Re-export the register function
export { registerNchartsElements } from './register-elements';

// All chart directives for easy importing
export const NCHARTS_DIRECTIVES = [LineChartDirective, BarChartDirective, HorizontalBarChartDirective, PieChartDirective, ScatterChartDirective, BubbleChartDirective, CandleStickChartDirective, RadarChartDirective, CombinedChartDirective] as const;

/**
 * NativeScript NCharts Module (optional - directives are standalone)
 */
@NgModule({
  imports: [...NCHARTS_DIRECTIVES],
  exports: [...NCHARTS_DIRECTIVES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptNchartsModule {}
