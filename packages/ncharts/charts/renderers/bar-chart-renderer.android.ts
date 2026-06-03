import { BarDataSetConfig } from '../../common';
import { Utils } from '@nativescript/core';

@NativeClass()
export class NSBarChartRenderer extends com.github.mikephil.charting.renderer.BarChartRenderer {
  private _configs?: BarDataSetConfig[];
  private _prevRenderer: any;
  private _valuePaint: android.graphics.Paint;
  private _chart: any;

  constructor(chart: any, animator: any, viewPortHandler: any, configs?: BarDataSetConfig[]) {
    super(chart, animator, viewPortHandler);
    this._chart = chart;
    this._configs = configs;

    // Initialize the paint object used for "Inside" labels
    this._valuePaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
    this._valuePaint.setTextAlign(android.graphics.Paint.Align.CENTER);
  }

  /**
   * Factory to initialize the renderer and swap it in the native chart.
   */
  static create(chartView: any, configs?: BarDataSetConfig[]): NSBarChartRenderer {
    const chart = chartView;

    // Ensure library-level coordinate utilities are ready
    const context = chart.getContext() as android.content.Context;
    com.github.mikephil.charting.utils.Utils.init(context);

    const r = new NSBarChartRenderer(chart, chart.getAnimator(), chart.getViewPortHandler(), configs);

    // Store the original renderer to allow clean detachment later
    r._prevRenderer = chart.getRenderer();
    chart.setRenderer(r);
    chart.invalidate();
    return r;
  }

  /**
   * Restores the chart to its original renderer state.
   */
  public detach(): void {
    if (this._chart && this._prevRenderer) {
      this._chart.setRenderer(this._prevRenderer);
      this._prevRenderer = null;
      this._chart.invalidate();
    }
  }

  public drawValues(c: android.graphics.Canvas): void {
    const data = this.mChart.getBarData();
    if (!data) return;

    const dataSets = data.getDataSets();
    const count = dataSets.size();

    const originalStates = new Array(count);
    let hasInsideValues = false;

    // Phase 1: Mute standard labels for datasets that want "Inside" labels
    for (let i = 0; i < count; i++) {
      const set = dataSets.get(i);
      const cfg = this._configs?.[i];

      originalStates[i] = set.isDrawValuesEnabled();

      if (originalStates[i] && cfg?.drawValuesInside) {
        (set as any).setDrawValues(false);
        hasInsideValues = true;
      }
    }

    // Phase 2: Let the base class draw standard labels (for datasets without 'drawValuesInside')
    super.drawValues(c);

    // Phase 3: Restore dataset states immediately after super call
    for (let i = 0; i < count; i++) {
      (dataSets.get(i) as any).setDrawValues(originalStates[i]);
    }

    if (!hasInsideValues) return;

    // Phase 4: Draw the custom labels inside the bars
    for (let i = 0; i < count; i++) {
      const set = dataSets.get(i);
      const cfg = this._configs?.[i];

      if (!cfg?.drawValuesInside || !set.isVisible() || !set.isDrawValuesEnabled()) continue;

      this._applyValueTextStyle(set, cfg);

      // BarBuffer contains the calculated coordinates [left, top, right, bottom, ...]
      const barBuffer = this.mBarBuffers[i];
      const floatArray = barBuffer.buffer;
      let bufferIndex = 0;

      for (let j = 0; j < set.getEntryCount(); j++) {
        const entry = set.getEntryForIndex(j);
        if (!entry) continue;

        const vals = entry.getYVals();

        // Handle Stacked vs Simple Bars
        if (vals !== null && (vals as any).length > 0) {
          for (let k = 0; k < (vals as any).length; k++) {
            this._drawTextInBufferRect(c, floatArray, bufferIndex, set, vals[k], k);
            bufferIndex += 4;
          }
        } else {
          this._drawTextInBufferRect(c, floatArray, bufferIndex, set, entry.getY(), j);
          bufferIndex += 4;
        }
      }
    }
  }

  private _drawTextInBufferRect(c: android.graphics.Canvas, floatArray: any, index: number, set: any, val: number, colorIdx: number): void {
    const left = floatArray[index];
    const top = floatArray[index + 1];
    const right = floatArray[index + 2];
    const bottom = floatArray[index + 3];

    const width = right - left;
    const height = bottom - top;

    const formatter = set.getValueFormatter();
    const text = formatter.getFormattedValue(val, null, 0, this.mViewPortHandler);

    if (!text) return;

    this._valuePaint.setColor(set.getValueTextColor(colorIdx));

    const textBounds = new android.graphics.Rect();
    this._valuePaint.getTextBounds(text, 0, text.length, textBounds);

    // Fit check: Don't draw if text is larger than the bar
    if (width < textBounds.width() || Math.abs(height) < textBounds.height()) return;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Vertical baseline adjustment for center alignment
    const drawY = centerY + textBounds.height() / 2 - textBounds.bottom;

    c.drawText(text, centerX, drawY, this._valuePaint);
  }

  private _applyValueTextStyle(set: any, cfg?: BarDataSetConfig): void {
    const tf = set.getValueTypeface();
    if (tf) this._valuePaint.setTypeface(tf);

    // Determine the font size and handle scaling
    let size: number;

    if (cfg?.valueTextSize) {
      // If provided in config (DP), convert to PX
      size = Utils.layout.toDevicePixels(cfg.valueTextSize);
    } else {
      // Get from Dataset. Note: set.getValueTextSize() returns PX already converted by the library
      const setSize = set.getValueTextSize();
      size = setSize > 0 ? setSize : Utils.layout.toDevicePixels(10);
    }

    this._valuePaint.setTextSize(size);
  }
}
