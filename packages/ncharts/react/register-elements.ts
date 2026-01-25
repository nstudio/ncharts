/**
 * Register custom NativeScript chart views for React
 * This file should be imported in app.ts to register all chart elements
 */
import { registerElement } from 'react-nativescript';
import { LineChart, BarChart, HorizontalBarChart, PieChart, ScatterChart, BubbleChart, CandleStickChart, RadarChart, CombinedChart } from '@nstudio/ncharts';

// Register chart views
export function registerNchartsElements(): void {
  registerElement('lineChart', () => LineChart as any);
  registerElement('barChart', () => BarChart as any);
  registerElement('horizontalBarChart', () => HorizontalBarChart as any);
  registerElement('pieChart', () => PieChart as any);
  registerElement('scatterChart', () => ScatterChart as any);
  registerElement('bubbleChart', () => BubbleChart as any);
  registerElement('candleStickChart', () => CandleStickChart as any);
  registerElement('radarChart', () => RadarChart as any);
  registerElement('combinedChart', () => CombinedChart as any);
}
