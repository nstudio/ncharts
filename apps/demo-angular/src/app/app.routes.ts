import { Routes } from '@angular/router';
import { StreamdownDemo, ChatDemo, HomeDemo } from './demos';
import { ChartsHomeDemo, LineChartDemo, BarChartDemo, PieChartDemo, CombinedChartsDemo, ScatterChartDemo, BubbleChartDemo, CandlestickChartDemo, RadarChartDemo } from './charts';

export const routes: Routes = [
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeDemo },
  { path: 'demo', component: StreamdownDemo },
  { path: 'chat', component: ChatDemo },
  // Charts routes
  { path: 'charts', component: ChartsHomeDemo },
  { path: 'charts/line', component: LineChartDemo },
  { path: 'charts/bar', component: BarChartDemo },
  { path: 'charts/pie', component: PieChartDemo },
  { path: 'charts/scatter', component: ScatterChartDemo },
  { path: 'charts/bubble', component: BubbleChartDemo },
  { path: 'charts/candlestick', component: CandlestickChartDemo },
  { path: 'charts/radar', component: RadarChartDemo },
  { path: 'charts/combined', component: CombinedChartsDemo },
];
