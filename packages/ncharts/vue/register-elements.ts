/**
 * Register custom NativeScript chart views for Vue
 * This file should be imported in app.ts to register all chart elements
 */
import { registerElement } from 'nativescript-vue';
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
