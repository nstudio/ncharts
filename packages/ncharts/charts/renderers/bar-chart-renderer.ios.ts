import { BarDataSetConfig } from '../../common';

@NativeClass()
export class NSBarChartRenderer extends BarChartRenderer {
  private _configs?: BarDataSetConfig[];
  private _prevRenderer: any;

  public dataProvider: any;

  /**
   * Static helper for standalone BarChart usage.
   * Replaces the renderer of a BarChartView directly.
   */
  static create(chartView: any, configs?: BarDataSetConfig[]): NSBarChartRenderer {
    const chart = chartView?.ios ?? chartView?.nativeView?.ios ?? chartView;
    const r = NSBarChartRenderer.createRenderer(chart, configs);

    // Store current renderer for later restoration during detach
    r._prevRenderer = chart.renderer;

    chart.renderer = r;
    chart.setNeedsDisplay();

    return r;
  }

  /**
   * Creates a renderer instance.
   * Used by CombinedChartRenderer or the static .create() method.
   */
  static createRenderer(chartView: any, configs?: BarDataSetConfig[]): NSBarChartRenderer {
    const chart = chartView?.ios ?? chartView?.nativeView?.ios ?? chartView;
    const r = NSBarChartRenderer.alloc().initWithDataProviderAnimatorViewPortHandler(chart, chart.chartAnimator, chart.viewPortHandler) as NSBarChartRenderer;

    r._configs = configs;
    return r;
  }

  /**
   * Restores the previous renderer.
   */
  public detach(): void {
    const chart = this.dataProvider;
    if (chart && this._prevRenderer) {
      chart.renderer = this._prevRenderer;
      this._prevRenderer = null;
      chart.setNeedsDisplay();
    }
  }

  /**
   * Main entry point for drawing values.
   */
  drawValuesWithContext(ctx: any): void {
    const data = this.dataProvider?.barData;
    if (!data) return super.drawValuesWithContext(ctx);

    const dataSetCount = data.dataSetCount;
    const originalStates = new Array(dataSetCount);
    let hasInsideValues = false;

    /**
     * Step 1: Temporarily disable standard value labels for data sets
     * configured to draw "inside" to let the super class handle only regular labels.
     */
    for (let i = 0; i < dataSetCount; i++) {
      const set = data.dataSets.objectAtIndex(i);
      const cfg = this._configs?.[i];
      originalStates[i] = set.drawValuesEnabled;

      if (set.drawValuesEnabled && cfg?.drawValuesInside) {
        set.drawValuesEnabled = false;
        hasInsideValues = true;
      }
    }

    // Draw regular labels using the native base implementation
    super.drawValuesWithContext(ctx);

    /**
     * Step 2: Restore original draw states.
     */
    for (let i = 0; i < dataSetCount; i++) {
      data.dataSets.objectAtIndex(i).drawValuesEnabled = originalStates[i];
    }

    if (!hasInsideValues) return;

    /**
     * Step 3: Draw custom "Inside" labels.
     */
    const contentRect = this.viewPortHandler.contentRect;
    const halfWidth = data.barWidth / 2;
    const phaseY = this.animator.phaseY;

    const attrs = NSMutableDictionary.new();
    for (let dataSetIndex = 0; dataSetIndex < dataSetCount; dataSetIndex++) {
      const set = data.dataSets.objectAtIndex(dataSetIndex);
      const cfg = this._configs?.[dataSetIndex];

      if (!cfg?.drawValuesInside || !set.isVisible || !set.isDrawValuesEnabled) continue;

      const trans = this.dataProvider.getTransformerForAxis(set.axisDependency);
      const padX = cfg.drawValuesInsidePaddingX ?? 2;
      const padY = cfg.drawValuesInsidePaddingY ?? 2;

      attrs.setObjectForKey(set.valueFont, NSFontAttributeName);

      for (let i = 0; i < set.entryCount; i++) {
        const e = set.entryForIndex(i);
        if (!e) continue;

        const vals = e.yValues;

        if (vals && vals.count > 0) {
          // Logic for Stacked Bars
          let posY = 0;
          let negY = -this._negativeSum(e, vals);

          for (let j = 0; j < vals.count; j++) {
            const value = vals.objectAtIndex(j);
            let fromY: number, toY: number;

            if (value >= 0) {
              fromY = posY;
              posY += value;
              toY = posY;
            } else {
              fromY = negY;
              negY += Math.abs(value);
              toY = negY;
            }

            this._drawInSegment(ctx, trans, e, fromY, toY, phaseY, halfWidth, contentRect, set, value, j, dataSetIndex, attrs, padX, padY);
          }
        } else {
          // Logic for Single (non-stacked) Bars
          this._drawInSegment(ctx, trans, e, 0, e.y, phaseY, halfWidth, contentRect, set, e.y, i, dataSetIndex, attrs, padX, padY);
        }
      }
    }
  }

  /**
   * Helper to draw a text label inside a specific bar segment.
   */
  private _drawInSegment(ctx: any, trans: any, e: any, y0: number, y1: number, phaseY: number, half: number, contentRect: any, set: any, val: number, colorIdx: number, dsIdx: number, attrs: NSMutableDictionary<string, any>, px: number, py: number): void {
    const seg = this._segmentRect(trans, e.x, half, y0, y1, phaseY);
    if (!CGRectIntersectsRect(contentRect, seg)) return;

    const text = this._formattedValue(set, val, e, dsIdx);
    if (!text) return;

    // Apply color for specific stack/index
    attrs.setObjectForKey(this._valueColor(set, colorIdx), NSForegroundColorAttributeName);
    this._drawTextCenteredIfFits(seg, text, attrs, px, py);
  }

  /**
   * Calculates the native CGRect for a bar segment in pixel coordinates.
   */
  private _segmentRect(trans: any, x: number, half: number, y0: number, y1: number, phaseY: number): CGRect {
    const p1 = trans.pixelForValuesWithXY(x - half, y0 * phaseY);
    const p2 = trans.pixelForValuesWithXY(x + half, y1 * phaseY);

    const left = Math.min(p1.x, p2.x);
    const right = Math.max(p1.x, p2.x);
    const top = Math.min(p1.y, p2.y);
    const bottom = Math.max(p1.y, p2.y);

    return CGRectMake(left, top, right - left, bottom - top);
  }

  /**
   * Uses the native formatter to generate the label string.
   */
  private _formattedValue(set: any, value: number, entry: any, dataSetIndex: number): string {
    const f = set.valueFormatter;
    if (f?.stringForValueEntryDataSetIndexViewPortHandler) {
      return f.stringForValueEntryDataSetIndexViewPortHandler(value, entry, dataSetIndex, this.viewPortHandler) ?? '';
    }
    return `${value}`;
  }

  /**
   * Resolves the text color for a specific index.
   */
  private _valueColor(set: any, index: number): UIColor {
    if (set?.valueTextColorAtIndex) return set.valueTextColorAtIndex(index);
    return set?.valueTextColor ?? UIColor.blackColor;
  }

  /**
   * Calculates the sum of negative values for proper stacked bar positioning.
   */
  private _negativeSum(entry: any, vals: NSArray<number>): number {
    if (entry.negativeSum && typeof entry.negativeSum === 'number') return entry.negativeSum;
    let sum = 0;
    for (let i = 0; i < vals.count; i++) {
      const v = vals.objectAtIndex(i);
      if (v < 0) sum += Math.abs(v);
    }
    return sum;
  }

  /**
   * Performs the actual native drawing if the text fits within the segment.
   */
  private _drawTextCenteredIfFits(rect: CGRect, text: string, attrs: NSDictionary<string, any>, padX: number, padY: number): void {
    const s = NSString.stringWithString(text);
    const m = s.boundingRectWithSizeOptionsAttributesContext({ width: 1e4, height: 1e4 }, NSStringDrawingOptions.UsesLineFragmentOrigin, attrs, null);

    // Only draw if label + padding fits within the bar segment
    if (rect.size.width < m.size.width + padX * 2) return;
    if (rect.size.height < m.size.height + padY * 2) return;

    s.drawAtPointWithAttributes(CGPointMake(rect.origin.x + (rect.size.width - m.size.width) / 2, rect.origin.y + (rect.size.height - m.size.height) / 2), attrs);
  }
}
