import { Color } from '@nativescript/core';
import { PlotBandConfig } from '../../common';

declare const com: any;
declare const android: any;

export type PreparedText = {
  text: string;
  paint: any;
  angle: number;
  h: 'LEFT' | 'CENTER' | 'RIGHT';
  v: 'TOP' | 'MIDDLE' | 'BOTTOM';
  dx: number;
  dy: number;
  aboveData: boolean;
};

export type PreparedBand = {
  from: number;
  to: number;
  fillPaint: any;
  axis: any;
  text?: PreparedText;
};

export class PlotBandDrawer {
  private _chart: any;
  private _cfg: PlotBandConfig[] = [];
  private _bands: PreparedBand[] = [];

  constructor(chart: any, cfg?: PlotBandConfig[]) {
    this._chart = chart;
    this.update(cfg);
  }

  update(cfg?: PlotBandConfig[]): void {
    this._cfg = cfg ?? [];
    this._cache();
  }

  hasBands(): boolean {
    return this._bands.length > 0;
  }

  drawFillsAndTextBelowData(c: any): void {
    this._withClip(c, () => {
      for (const b of this._bands) {
        const g = this._geometryForBand(b);
        if (!g) continue;

        c.drawRect(g.left, g.top, g.right, g.bottom, b.fillPaint);

        if (b.text && !b.text.aboveData) {
          this._drawText(c, g.left, g.right, g.top, g.height, b.text);
        }
      }
    });
  }

  drawTextAboveData(c: any): void {
    this._withClip(c, () => {
      for (const b of this._bands) {
        if (!b.text?.aboveData) continue;

        const g = this._geometryForBand(b);
        if (!g) continue;

        this._drawText(c, g.left, g.right, g.top, g.height, b.text);
      }
    });
  }

  private _withClip(c: any, fn: () => void): void {
    const vp = this._chart.getViewPortHandler();
    c.save();
    c.clipRect(vp.contentLeft(), vp.contentTop(), vp.contentRight(), vp.contentBottom());
    try {
      fn();
    } finally {
      c.restore();
    }
  }

  private _geometryForBand(b: PreparedBand) {
    const vp = this._chart.getViewPortHandler();
    const trans = this._chart.getTransformer(b.axis);
    const pts = Array.create('float', 4);

    pts[0] = 0;
    pts[1] = b.from;
    pts[2] = 0;
    pts[3] = b.to;
    trans.pointValuesToPixel(pts);

    const y1 = pts[1];
    const y2 = pts[3];
    const top = Math.min(y1, y2);
    const bottom = Math.max(y1, y2);
    const height = bottom - top;

    if (height <= 0) return null;

    return {
      left: vp.contentLeft(),
      right: vp.contentRight(),
      top,
      bottom,
      height,
    };
  }

  private _cache(): void {
    const metrics = this._chart.getContext().getResources().getDisplayMetrics();

    this._bands = this._cfg.map((pb) => {
      const fillPaint = new android.graphics.Paint();
      fillPaint.setStyle(android.graphics.Paint.Style.FILL);

      const col = new Color(pb.fillColor);
      const a = pb.fillAlpha ?? 255;
      fillPaint.setColor(android.graphics.Color.argb(a, col.r, col.g, col.b));

      const axis = pb.axis === 'RIGHT' ? com.github.mikephil.charting.components.YAxis.AxisDependency.RIGHT : com.github.mikephil.charting.components.YAxis.AxisDependency.LEFT;

      const t = pb.text;
      if (!t?.text) {
        return { from: pb.from, to: pb.to, fillPaint, axis } as PreparedBand;
      }

      const tp = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
      tp.setStyle(android.graphics.Paint.Style.FILL);

      const tc = new Color(t.textColor ?? '#ffffff');
      tp.setColor(android.graphics.Color.argb(255, tc.r, tc.g, tc.b));

      const sp = t.textSize ?? 12;
      tp.setTextSize(android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_SP, sp, metrics));

      if (t.textFont) {
        const tf = android.graphics.Typeface.create(t.textFont, android.graphics.Typeface.NORMAL);
        if (tf) tp.setTypeface(tf);
      }

      const o = t.textOffsets ?? {};
      const dx = (o.left ?? 0) - (o.right ?? 0);
      const dy = (o.top ?? 0) - (o.bottom ?? 0);

      const text: PreparedText = {
        text: t.text,
        paint: tp,
        angle: t.textRotationAngle ?? 0,
        h: t.align?.horizontal ?? 'LEFT',
        v: t.align?.vertical ?? 'TOP',
        dx,
        dy,
        aboveData: t.textAboveData ?? false,
      };

      return { from: pb.from, to: pb.to, fillPaint, axis, text } as PreparedBand;
    });
  }

  private _drawText(c: any, left: number, right: number, bandTop: number, bandH: number, t: PreparedText): void {
    const p = t.paint;

    const textW = p.measureText(t.text);
    const fm = p.getFontMetrics();
    const textH = fm.bottom - fm.top;
    const ang = t.angle ?? 0;

    if (!ang) {
      const plotW = right - left;

      let x = left;
      if (t.h === 'CENTER') x += (plotW - textW) / 2;
      else if (t.h === 'RIGHT') x += plotW - textW;

      let yTop = bandTop;
      if (t.v === 'MIDDLE') yTop += (bandH - textH) / 2;
      else if (t.v === 'BOTTOM') yTop += bandH - textH;

      x += t.dx;
      yTop += t.dy;

      const baseline = yTop - fm.top;
      c.drawText(t.text, x, baseline, p);
      return;
    }

    const rad = (-ang * Math.PI) / 180;
    const ax = textW / 2;
    const ay = textH / 2;

    const bb = this._rotatedBBox(textW, textH, ax, ay, rad);
    const rw = bb.maxX - bb.minX;
    const rh = bb.maxY - bb.minY;
    const plotW = right - left;

    let bx = left;
    if (t.h === 'CENTER') bx += (plotW - rw) / 2;
    else if (t.h === 'RIGHT') bx += plotW - rw;

    let by = bandTop;
    if (t.v === 'MIDDLE') by += (bandH - rh) / 2;
    else if (t.v === 'BOTTOM') by += bandH - rh;

    bx += t.dx;
    by += t.dy;

    const anchorX = bx - bb.minX;
    const anchorY = by - bb.minY;

    c.save();
    c.translate(anchorX, anchorY);
    c.rotate(-ang);

    const x = -ax;
    const yTop = -ay;
    const baseline = yTop - fm.top;

    c.drawText(t.text, x, baseline, p);
    c.restore();
  }

  private _rotatedBBox(w: number, h: number, ax: number, ay: number, rad: number) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);

    const pts = [
      { x: 0, y: 0 },
      { x: w, y: 0 },
      { x: 0, y: h },
      { x: w, y: h },
    ];

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (const p of pts) {
      const dx = p.x - ax;
      const dy = p.y - ay;
      const rx = dx * c - dy * s;
      const ry = dx * s + dy * c;

      if (rx < minX) minX = rx;
      if (ry < minY) minY = ry;
      if (rx > maxX) maxX = rx;
      if (ry > maxY) maxY = ry;
    }

    return { minX, minY, maxX, maxY };
  }
}
