/**
 * Register custom NativeScript chart views for Angular
 * This file should be imported in main.ts to register all custom elements
 */
import { registerElement } from '@nativescript/angular';
import { LineChart, BarChart, HorizontalBarChart, PieChart, ScatterChart, BubbleChart, CandleStickChart, RadarChart, CombinedChart } from '@nstudio/ncharts';

// Register chart views
export function registerNchartsElements(): void {
  registerElement('LineChart', () => LineChart);
  registerElement('BarChart', () => BarChart);
  registerElement('HorizontalBarChart', () => HorizontalBarChart);
  registerElement('PieChart', () => PieChart);
  registerElement('ScatterChart', () => ScatterChart);
  registerElement('BubbleChart', () => BubbleChart);
  registerElement('CandleStickChart', () => CandleStickChart);
  registerElement('RadarChart', () => RadarChart);
  registerElement('CombinedChart', () => CombinedChart);
}
