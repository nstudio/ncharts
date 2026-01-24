/**
 * CandleStickChart - displays financial OHLC data
 */
import { CandleStickChartBase } from '../common';

export declare class CandleStickChart extends CandleStickChartBase {
  get nativeChart(): any;
  applyData(): void;
}
