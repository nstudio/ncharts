/**
 * BarChart - displays data as vertical bars
 */
import { BarChartBase, HorizontalBarChartBase } from '../common';

export declare class BarChart extends BarChartBase {
  get nativeChart(): any;
  applyData(): void;
}

export declare class HorizontalBarChart extends HorizontalBarChartBase {
  get nativeChart(): any;
  applyData(): void;
}
