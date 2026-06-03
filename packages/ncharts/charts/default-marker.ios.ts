import type { MarkerConfig } from '../common';
import { toUIColor } from './utils';

@NativeClass()
export class NChartsDefaultMarker extends ChartMarkerView {
  private _cfg: MarkerConfig;

  private _bg: UIColor;
  private _textColor: UIColor;
  private _font: UIFont;

  private _arrowSize: CGSize;
  private _insets: UIEdgeInsets;
  private _minimumSize: CGSize;

  private _text: string;
  private _size: CGSize;

  private _label: UILabel;

  // new border fields
  private _borderWidth: number;
  private _borderColor: UIColor;

  public static create(chart: ChartViewBase, cfg: MarkerConfig): NChartsDefaultMarker {
    const v = NChartsDefaultMarker.new() as NChartsDefaultMarker;
    v.chartView = chart;
    v._cfg = cfg;

    v._bg = toUIColor((cfg as any).markerColor) ?? UIColor.blackColor;
    v._textColor = toUIColor((cfg as any).textColor) ?? UIColor.whiteColor;

    const fs = Number((cfg as any).textSize ?? 12);
    v._font = UIFont.systemFontOfSize(Number.isFinite(fs) ? fs : 12);

    v._arrowSize = { width: 15, height: 11 } as CGSize;
    v._insets = { top: 6, left: 8, bottom: 6, right: 8 } as UIEdgeInsets;
    v._minimumSize = { width: 0, height: 0 } as CGSize;

    v._text = '';
    v._size = { width: 0, height: 0 } as CGSize;

    const label = UILabel.alloc().initWithFrame(CGRectZero);
    label.numberOfLines = 1;
    label.backgroundColor = UIColor.clearColor;
    label.textAlignment = NSTextAlignment.Center;
    label.textColor = v._textColor;
    label.font = v._font;
    v._label = label;

    // border config
    const bw = Number((cfg as any).borderWidth ?? 0);
    v._borderWidth = Number.isFinite(bw) ? Math.max(0, bw) : 0;
    v._borderColor = toUIColor((cfg as any).borderColor) ?? UIColor.clearColor;

    v.bounds = CGRectMake(0, 0, 44, 24);
    v.offset = { x: 0, y: 0 } as CGPoint;

    return v;
  }
  private _formatNumber(value: number, digits: number): string {
    const d = Math.max(0, Math.min(12, digits ?? 2));
    if (!Number.isFinite(value)) return `${value}`;
    return value.toFixed(d);
  }
  private _resolveText(entry: ChartDataEntry): string {
    const data = entry.data;
    if (typeof data === 'string' && data.length) return data;
    return this._formatNumber(entry.y, this._cfg?.digits ?? 2);
  }
  public refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void {
    const nextText = this._resolveText(entry);

    if (nextText === this._text && this._size.width > 0 && this._size.height > 0) return;
    this._text = nextText;

    this._label.text = this._text;
    this._label.sizeToFit();

    const b = this._label.bounds;
    if (!b) return;

    const textW = Math.ceil(b.size.width);
    const textH = Math.ceil(b.size.height);

    let w = textW + this._insets.left + this._insets.right;
    let h = textH + this._insets.top + this._insets.bottom;

    w = Math.max(this._minimumSize.width, w);
    h = Math.max(this._minimumSize.height, h);

    this._size = { width: w, height: h } as CGSize;
    // this.bounds = CGRectMake(0, 0, w, h + this._arrowSize.height);
    const totalH = h + this._arrowSize.height;
    this._size = { width: w, height: h } as CGSize;
    this.bounds = CGRectMake(0, 0, w, totalH);
    this.offset = CGPointMake(-w / 2, -totalH);
  }
  public drawWithContextPoint(context: any, point: CGPoint): void {
    if (!this._text) return;

    const arrowH = this._arrowSize.height;
    const arrowW = this._arrowSize.width;
    const totalH = this._size.height + arrowH;

    // clamped offset from Charts
    const off = super.offsetForDrawingAtPoint(point);

    // IMPORTANT: rect origin is point + off (no extra -width/2)
    const rect = CGRectMake(point.x + off.x, point.y + off.y, this._size.width, totalH);

    // arrow tip x inside rect (local coords)
    const tipX = point.x - rect.origin.x;

    CGContextSaveGState(context);

    // fill
    CGContextSetFillColorWithColor(context, this._bg.CGColor);
    this._addBalloonPath(context, rect, arrowW, arrowH, tipX);
    CGContextFillPath(context);

    // stroke
    if (this._borderWidth > 0) {
      CGContextSetStrokeColorWithColor(context, this._borderColor.CGColor);
      CGContextSetLineWidth(context, this._borderWidth);
      this._addBalloonPath(context, rect, arrowW, arrowH, tipX);
      CGContextStrokePath(context);
    }

    const textRect = CGRectMake(rect.origin.x + this._insets.left, rect.origin.y + this._insets.top, rect.size.width - (this._insets.left + this._insets.right), rect.size.height - arrowH - (this._insets.top + this._insets.bottom));

    UIGraphicsPushContext(context);
    try {
      this._label.text = this._text;
      this._label.drawTextInRect(textRect);
    } finally {
      UIGraphicsPopContext();
    }

    CGContextRestoreGState(context);
  }

  private _addBalloonPath(context: any, rect: CGRect, arrowW: number, arrowH: number, tipX: number): void {
    // clamp tipX so arrow base stays inside the bubble
    const half = arrowW / 2;
    const minTipX = half;
    const maxTipX = rect.size.width - half;
    const tX = Math.max(minTipX, Math.min(tipX, maxTipX));

    CGContextBeginPath(context);

    // top edge
    CGContextMoveToPoint(context, rect.origin.x, rect.origin.y);
    CGContextAddLineToPoint(context, rect.origin.x + rect.size.width, rect.origin.y);

    // right edge down to arrow base
    CGContextAddLineToPoint(context, rect.origin.x + rect.size.width, rect.origin.y + rect.size.height - arrowH);

    // arrow base -> tip -> base (shifted)
    CGContextAddLineToPoint(context, rect.origin.x + tX + half, rect.origin.y + rect.size.height - arrowH);
    CGContextAddLineToPoint(context, rect.origin.x + tX, rect.origin.y + rect.size.height);
    CGContextAddLineToPoint(context, rect.origin.x + tX - half, rect.origin.y + rect.size.height - arrowH);

    // left edge back up
    CGContextAddLineToPoint(context, rect.origin.x, rect.origin.y + rect.size.height - arrowH);
    CGContextAddLineToPoint(context, rect.origin.x, rect.origin.y);

    CGContextClosePath(context);
  }
}
