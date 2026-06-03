import { Color } from '@nativescript/core';
import { PlotBandConfig } from '../../common';

type HAlign = 'LEFT' | 'CENTER' | 'RIGHT';
type VAlign = 'TOP' | 'MIDDLE' | 'BOTTOM';

type PreparedText = {
  text: string;
  color: any;
  font: any;
  angle: number;
  h: HAlign;
  v: VAlign;
  dx: number;
  dy: number;
  aboveData: boolean;
};

type PreparedBand = {
  from: number;
  to: number;
  bandColor: any;
  axis: any;
  text?: PreparedText;
};

export class PlotBandDrawer {
  private _chart: any;
  private _plotBands?: PlotBandConfig[];
  private _preparedBands: PreparedBand[] = [];

  constructor(chart: any, plotBands?: PlotBandConfig[]) {
    this._chart = chart;
    this._plotBands = plotBands;
    this._cachePlotBands();
  }

  public update(plotBands?: PlotBandConfig[]): void {
    this._plotBands = plotBands;
    this._cachePlotBands();
  }

  public drawFillsAndTextBelowData(ctx: any): void {
    const rect = this._chart?.viewPortHandler?.contentRect;
    if (!rect) return;

    CGContextSaveGState(ctx);
    CGContextClipToRect(ctx, rect);

    for (const b of this._preparedBands) {
      const transformer = this._chart.getTransformerForAxis(b.axis);
      const p1 = transformer.pixelForValuesWithXY(0, b.from);
      const p2 = transformer.pixelForValuesWithXY(0, b.to);

      const top = Math.min(p1.y, p2.y);
      const bottom = Math.max(p1.y, p2.y);
      const height = bottom - top;

      if (height <= 0) continue;

      CGContextSetFillColorWithColor(ctx, b.bandColor.CGColor);
      CGContextFillRect(ctx, CGRectMake(rect.origin.x, top, rect.size.width, height));

      if (b.text && !b.text.aboveData) {
        this._drawText(ctx, rect, top, height, b.text);
      }
    }

    CGContextRestoreGState(ctx);
  }

  public drawTextAboveData(ctx: any): void {
    const rect = this._chart?.viewPortHandler?.contentRect;
    if (!rect) return;

    CGContextSaveGState(ctx);
    CGContextClipToRect(ctx, rect);

    for (const b of this._preparedBands) {
      if (!b.text?.aboveData) continue;

      const transformer = this._chart.getTransformerForAxis(b.axis);
      const p1 = transformer.pixelForValuesWithXY(0, b.from);
      const p2 = transformer.pixelForValuesWithXY(0, b.to);

      const top = Math.min(p1.y, p2.y);
      const bottom = Math.max(p1.y, p2.y);
      const height = bottom - top;

      if (height <= 0) continue;

      this._drawText(ctx, rect, top, height, b.text);
    }

    CGContextRestoreGState(ctx);
  }

  private _cachePlotBands(): void {
    this._preparedBands = (this._plotBands ?? []).map((pb) => {
      const base = new Color(pb.fillColor).ios;
      const alpha = (pb.fillAlpha ?? 255) / 255.0;
      const bandColor = base.colorWithAlphaComponent(alpha);

      const axis = pb.axis === 'RIGHT' ? AxisDependency.Right : AxisDependency.Left;

      const t = pb.text;
      if (!t?.text) {
        return {
          from: pb.from,
          to: pb.to,
          bandColor,
          axis,
        } as PreparedBand;
      }

      const textColor = t.textColor ? new Color(t.textColor).ios : UIColor.whiteColor;
      const font = this._fontOf(t.textSize ?? 12, t.textFont);

      const o = t.textOffsets ?? {};
      const dx = (o.left ?? 0) - (o.right ?? 0);
      const dy = (o.top ?? 0) - (o.bottom ?? 0);

      const text: PreparedText = {
        text: t.text,
        color: textColor,
        font,
        angle: t.textRotationAngle ?? 0,
        h: t.align?.horizontal ?? 'LEFT',
        v: t.align?.vertical ?? 'TOP',
        dx,
        dy,
        aboveData: t.textAboveData ?? false,
      };

      return {
        from: pb.from,
        to: pb.to,
        bandColor,
        axis,
        text,
      } as PreparedBand;
    });
  }

  private _drawText(ctx: any, rect: any, top: number, h: number, t: PreparedText): void {
    const attrs = NSMutableDictionary.new();
    attrs.setObjectForKey(t.font, NSFontAttributeName);
    attrs.setObjectForKey(t.color, NSForegroundColorAttributeName);

    const s = NSString.stringWithString(t.text);
    const m = this._measure(s, attrs);

    let dx = t.dx;
    let dy = t.dy;

    const ang = t.angle ?? 0;
    if (!ang) {
      let x = rect.origin.x;
      if (t.h === 'CENTER') x += (rect.size.width - m.w) / 2;
      else if (t.h === 'RIGHT') x += rect.size.width - m.w;

      let y = top;
      if (t.v === 'MIDDLE') y += (h - m.h) / 2;
      else if (t.v === 'BOTTOM') y += h - m.h;

      s.drawAtPointWithAttributes({ x: x + dx, y: y + dy }, attrs);
      return;
    }

    const rad = (-ang * Math.PI) / 180;
    const ax = m.w / 2;
    const ay = m.h / 2;

    const bb = this._rotatedBBox(m.w, m.h, ax, ay, rad);
    const rw = bb.maxX - bb.minX;
    const rh = bb.maxY - bb.minY;

    let bx = rect.origin.x;
    if (t.h === 'CENTER') bx += (rect.size.width - rw) / 2;
    else if (t.h === 'RIGHT') bx += rect.size.width - rw;

    let by = top;
    if (t.v === 'MIDDLE') by += (h - rh) / 2;
    else if (t.v === 'BOTTOM') by += h - rh;

    bx += dx;
    by += dy;

    const anchorX = bx - bb.minX;
    const anchorY = by - bb.minY;

    CGContextSaveGState(ctx);
    CGContextTranslateCTM(ctx, anchorX, anchorY);
    CGContextRotateCTM(ctx, rad);
    s.drawAtPointWithAttributes({ x: -ax, y: -ay }, attrs);
    CGContextRestoreGState(ctx);
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

  private _measure(s: any, attrs: any): { w: number; h: number } {
    const r = s.boundingRectWithSizeOptionsAttributesContext({ width: 1e4, height: 1e4 }, 0, attrs, null);
    return { w: r.size.width, h: r.size.height };
  }

  private _fontOf(size: number, name?: string): any {
    return name ? UIFont.fontWithNameSize(name, size) || UIFont.systemFontOfSize(size) : UIFont.systemFontOfSize(size);
  }
}
