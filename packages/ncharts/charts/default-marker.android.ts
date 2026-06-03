import type { MarkerConfig } from '../common';
import { Color } from '@nativescript/core';

const IMarker = com.github.mikephil.charting.components.IMarker;

@NativeClass()
@Interfaces([IMarker])
export class NChartsDefaultMarker extends java.lang.Object implements com.github.mikephil.charting.components.IMarker {
  private _offset: com.github.mikephil.charting.utils.MPPointF;
  private _chart: com.github.mikephil.charting.charts.Chart<any>;

  private _textPaint: android.graphics.Paint;
  private _fillPaint: android.graphics.Paint;
  private _strokePaint: android.graphics.Paint;

  private _bounds: android.graphics.Rect;
  private _path: android.graphics.Path;

  private _digits: number;
  private _text: string;

  private _padX: number; // px
  private _padY: number; // px

  private _arrowW: number; // px
  private _arrowH: number; // px

  private _borderW: number; // px

  private _textW: number;
  private _textH: number;

  // bubble dimensions (WITHOUT arrow)
  private _w: number;
  private _h: number;

  constructor() {
    super();
    return global.__native(this);
  }

  public static create(chart: com.github.mikephil.charting.charts.Chart<any>, cfg: MarkerConfig): NChartsDefaultMarker {
    const self = new NChartsDefaultMarker();
    self._chart = chart;
    self._offset = new com.github.mikephil.charting.utils.MPPointF(0, 0);
    self._bounds = new android.graphics.Rect();
    self._path = new android.graphics.Path();

    const density = chart.getContext().getResources().getDisplayMetrics().density;
    const dp = (v: number) => v * density;

    self._digits = Math.max(0, Math.min(12, cfg?.digits ?? 2));
    self._text = '';

    self._padX = dp(8);
    self._padY = dp(6);

    self._arrowW = dp(15);
    self._arrowH = dp(11);

    const markerColor = typeof cfg.markerColor === 'number' ? new Color(cfg.markerColor) : new Color(String(cfg.markerColor ?? '#000000'));
    const textColor = typeof cfg.textColor === 'number' ? new Color(cfg.textColor) : new Color(String(cfg.textColor ?? '#FFFFFF'));
    const borderColor = typeof (cfg as any).borderColor === 'number' ? new Color((cfg as any).borderColor) : new Color(String((cfg as any).borderColor ?? '#00000000')); // transparent default

    // text paint
    self._textPaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
    self._textPaint.setStyle(android.graphics.Paint.Style.FILL);
    self._textPaint.setColor(textColor.android);

    const ts = Number(cfg.textSize ?? 12);
    self._textPaint.setTextSize(dp(Number.isFinite(ts) ? ts : 12));

    // fill paint
    self._fillPaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
    self._fillPaint.setStyle(android.graphics.Paint.Style.FILL);
    self._fillPaint.setColor(markerColor.android);

    // border (Step 9)
    const bw = Number((cfg as any).borderWidth ?? 0);
    self._borderW = Number.isFinite(bw) ? dp(Math.max(0, bw)) : 0;

    self._strokePaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
    self._strokePaint.setStyle(android.graphics.Paint.Style.STROKE);
    self._strokePaint.setStrokeWidth(self._borderW);
    self._strokePaint.setColor(borderColor.android);

    // sizes
    self._textW = 0;
    self._textH = 0;
    self._w = 0;
    self._h = 0;

    return self;
  }

  private _resolveText(e: com.github.mikephil.charting.data.Entry): string {
    const d = e.getData?.();
    const txt = typeof d === 'string' && d.length ? d : null;
    return txt ?? Number(e.getY()).toFixed(this._digits);
  }

  refreshContent(e: com.github.mikephil.charting.data.Entry, h: com.github.mikephil.charting.highlight.Highlight): void {
    const nextText = this._resolveText(e);

    // Step 10: skip if unchanged
    if (nextText === this._text && this._w > 0 && this._h > 0) return;

    this._text = nextText;

    // measure
    this._textPaint.getTextBounds(this._text, 0, this._text.length, this._bounds);
    this._textW = this._bounds.width();
    this._textH = this._bounds.height();

    // bubble size WITHOUT arrow
    this._w = this._textW + this._padX * 2;
    this._h = this._textH + this._padY * 2;
  }

  private _buildBalloonPath(left: number, top: number, arrowTipX: number): void {
    const right = left + this._w;
    const bottom = top + this._h + this._arrowH;

    const arrowH = this._arrowH;
    const halfArrowW = this._arrowW / 2;

    // clamp arrowTipX so the base fits inside the bubble width
    const tipX = Math.max(left + halfArrowW, Math.min(arrowTipX, right - halfArrowW));

    this._path.reset();

    this._path.moveTo(left, top);
    this._path.lineTo(right, top);
    this._path.lineTo(right, bottom - arrowH);

    // arrow base -> tip -> base
    this._path.lineTo(tipX + halfArrowW, bottom - arrowH);
    this._path.lineTo(tipX, bottom);
    this._path.lineTo(tipX - halfArrowW, bottom - arrowH);

    this._path.lineTo(left, bottom - arrowH);
    this._path.close();
  }

  draw(canvas: android.graphics.Canvas, posX: number, posY: number): void {
    if (!this._text) return;

    // get cached offset point (Step 6–7)
    const off = this.getOffsetForDrawingAtPoint(posX, posY);

    const left = posX + off.x;
    const top = posY + off.y;

    // balloon background + arrow
    this._buildBalloonPath(left, top, posX);
    canvas.drawPath(this._path, this._fillPaint);

    // border
    if (this._borderW > 0) {
      canvas.drawPath(this._path, this._strokePaint);
    }

    // text rect excludes arrow
    const textLeft = left + this._padX;
    const textTop = top + this._padY;
    const textRight = left + this._w - this._padX;
    const textBottom = top + this._h - this._padY;

    // baseline center vertically
    const fm = this._textPaint.getFontMetrics();
    const areaH = textBottom - textTop;
    const baseline = textTop + (areaH - (fm.bottom - fm.top)) / 2 - fm.top;

    // center horizontally using measured width
    const x = textLeft + (textRight - textLeft - this._textW) / 2;

    canvas.drawText(this._text, x, baseline, this._textPaint);
  }

  getOffset(): com.github.mikephil.charting.utils.MPPointF {
    return this._offset;
  }

  getOffsetForDrawingAtPoint(x: number, y: number): com.github.mikephil.charting.utils.MPPointF {
    // total height includes arrow
    const totalH = this._h + this._arrowH;

    // base: centered above
    let ox = -this._w / 2;
    let oy = -totalH;

    const chart = this._chart;
    if (chart) {
      const cw = chart.getWidth();
      const ch = chart.getHeight();

      // clamp horizontally
      if (x + ox < 0) ox = -x;
      else if (x + ox + this._w > cw) ox = cw - x - this._w;

      // clamp vertically (using total height)
      if (y + oy < 0) oy = -y;
      else if (y + oy + totalH > ch) oy = ch - y - totalH;
    }

    this._offset.x = ox;
    this._offset.y = oy;

    return this._offset;
  }
}
