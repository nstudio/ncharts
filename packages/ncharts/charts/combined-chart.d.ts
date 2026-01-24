/**
 * CombinedChart - displays combined data (line, bar, scatter, bubble, candle)
 */
import { CombinedChartBase } from '../common';

export declare class CombinedChart extends CombinedChartBase {
  get nativeChart(): any;
  applyData(): void;
}
