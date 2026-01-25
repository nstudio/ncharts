/**
 * Register custom NativeScript chart views for Svelte
 * This file should be imported in app.ts to register all chart elements
 */
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';
import { LineChart, BarChart, HorizontalBarChart, PieChart, ScatterChart, BubbleChart, CandleStickChart, RadarChart, CombinedChart } from '@nstudio/ncharts';

// Register chart views
export function registerNchartsElements(): void {
  registerNativeViewElement('lineChart', () => LineChart);
  registerNativeViewElement('barChart', () => BarChart);
  registerNativeViewElement('horizontalBarChart', () => HorizontalBarChart);
  registerNativeViewElement('pieChart', () => PieChart);
  registerNativeViewElement('scatterChart', () => ScatterChart);
  registerNativeViewElement('bubbleChart', () => BubbleChart);
  registerNativeViewElement('candleStickChart', () => CandleStickChart);
  registerNativeViewElement('radarChart', () => RadarChart);
  registerNativeViewElement('combinedChart', () => CombinedChart);
}
