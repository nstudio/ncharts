/**
 * Register custom NativeScript chart views for Solid
 * This file should be imported in app.js to register all chart elements
 */
import { registerElement } from 'dominative';
import { LineChart, BarChart, HorizontalBarChart, PieChart, ScatterChart, BubbleChart, CandleStickChart, RadarChart, CombinedChart } from '@nstudio/ncharts';

// Register chart views with lowercase names (JSX/HTML lowercases element names)
export function registerNchartsElements(): void {
  registerElement('linechart', LineChart);
  registerElement('barchart', BarChart);
  registerElement('horizontalbarchart', HorizontalBarChart);
  registerElement('piechart', PieChart);
  registerElement('scatterchart', ScatterChart);
  registerElement('bubblechart', BubbleChart);
  registerElement('candlestickchart', CandleStickChart);
  registerElement('radarchart', RadarChart);
  registerElement('combinedchart', CombinedChart);
}
