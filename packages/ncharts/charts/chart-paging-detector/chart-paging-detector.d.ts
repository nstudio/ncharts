import { EventData } from '@nativescript/core';
import type { LineChart } from '../line-chart';

export type EdgeInfo = Readonly<{
  vmin: number;
  vmax: number;
  dataMin: number;
  dataMax: number;
  nearLeft: boolean;
  nearRight: boolean;
  movingLeft: boolean;
  movingRight: boolean;
  scaleX: number;
  scaleY: number;
}>;

export type PageDirection = 'prev' | 'next';

export type PageHandler = (dir: PageDirection, info: EdgeInfo) => Promise<void> | void;

export type ChartPagingDetectorOptions = Readonly<{
  /**
   * Debounce time (in milliseconds) before evaluating a gesture as “finished”.
   *
   * Why it exists:
   * - Pan/drag events fire many times per second.
   * - We wait until the user stops moving for `idleMs` to avoid triggering paging multiple times.
   *
   * Typical values: 120–250
   * Default (if omitted): 160
   */
  idleMs?: number;

  /**
   * Size of the “edge zone” that is considered close enough to the start/end
   * of the currently loaded data range to allow paging.
   *
   * Meaning:
   * - A value of 0.08 means “8% edge zone”.
   * - The code compares the visible range (vmin/vmax) with the loaded data range (dataMin/dataMax)
   *   and treats the first/last `edgeRatio` portion as “near the edge”.
   *
   * Notes:
   * - Smaller value => user must be closer to the edge (less accidental paging).
   * - Larger value  => paging triggers earlier (more sensitive).
   *
   * Typical values: 0.03–0.12
   * Default (if omitted): 0.08
   */
  edgeRatio?: number;

  /**
   * Minimum time (in milliseconds) between two paging triggers.
   *
   * Why it exists:
   * - When the user keeps dragging at the edge, you may stay “near the edge” for a while.
   * - This prevents firing multiple page loads in quick succession.
   *
   * Typical values: 300–1000
   * Default (if omitted): 500
   */
  cooldownMs?: number;

  /**
   * Maximum allowed horizontal zoom (scaleX) for paging to be allowed.
   *
   * Meaning:
   * - If the chart is zoomed in more than this scale, paging is blocked.
   *
   * Why it exists:
   * - When highly zoomed in, users usually want to pan within the same interval
   *   instead of jumping to the next/previous interval.
   *
   * Typical values: 1.2–2.0
   * Default (if omitted): 3
   */
  pagingMaxScaleX?: number;

  /**
   * Maximum allowed vertical zoom (scaleY) for paging to be allowed.
   *
   * Meaning:
   * - If the chart is zoomed in vertically more than this scale, paging is blocked.
   *
   * Why it exists:
   * - Some charts allow vertical zoom/drag. Without this, vertical interactions can
   *   accidentally be interpreted as paging.
   *
   * Typical values: 1.2–2.0
   * Default (if omitted): 3
   */
  pagingMaxScaleY?: number;
}>;

export interface PageEventData extends EventData {
  object: LineChart;
  dir: PageDirection;
  info: EdgeInfo;
}

export class ChartPagingDetector {
  constructor(chartView: LineChartBase, onPage: PageHandler, opts?: GestureOptions);

  /** Clears internal debounce timer. Call from `unloaded` if desired. */
  detach(): void;
}
