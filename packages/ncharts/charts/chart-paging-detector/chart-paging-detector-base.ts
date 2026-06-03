import { EdgeInfo, ChartPagingDetectorOptions, PageHandler } from './chart-paging-detector';

export abstract class ChartPagingDetectorBase {
  private readonly idleMs: number;
  private readonly edgeRatio: number;
  private readonly cooldownMs: number;
  private readonly pagingMaxScaleX: number;
  private readonly pagingMaxScaleY: number;

  private t: ReturnType<typeof setTimeout> | null = null;
  private lastFire = 0;
  private loading = false;

  private movingLeft = false;
  private movingRight = false;
  private lastWasScale = false;

  protected constructor(
    private readonly onPage: PageHandler,
    opts?: ChartPagingDetectorOptions,
  ) {
    this.idleMs = opts?.idleMs ?? 160;
    this.edgeRatio = opts?.edgeRatio ?? 0.08;
    this.cooldownMs = opts?.cooldownMs ?? 500;
    this.pagingMaxScaleX = opts?.pagingMaxScaleX ?? 3;
    this.pagingMaxScaleY = opts?.pagingMaxScaleY ?? 3;
  }

  // Platform provides dx sign (pixel). dx>0 => movingLeft, dx<0 => movingRight
  protected handleTranslated(dx: number): void {
    this.lastWasScale = false;
    this.movingLeft = dx > 0;
    this.movingRight = dx < 0;
    this.schedule();
  }

  // Platform calls during pinch-zoom
  protected handleScaled(): void {
    this.lastWasScale = true;
    this.schedule();
  }

  // Platform calls at gesture end
  protected handleEnd(): void {
    this.schedule();
  }

  public detach(): void {
    if (this.t) clearTimeout(this.t);
    this.t = null;
  }

  private schedule(): void {
    if (this.t) clearTimeout(this.t);
    this.t = setTimeout(() => {
      this.check();
    }, this.idleMs);
  }
  private async check(): Promise<void> {
    const scaleX = this.getScaleX();
    if (scaleX > this.pagingMaxScaleX) {
      return;
    }

    const scaleY = this.getScaleY();
    if (scaleY > this.pagingMaxScaleY) {
      return;
    }

    if (this.lastWasScale) {
      this.lastWasScale = false;
      return;
    }

    const bounds = this.getDataXBounds();
    if (!bounds) {
      return;
    }

    const rawVmin = this.getLowestVisibleX();
    const rawVmax = this.getHighestVisibleX();
    const { dataMin, dataMax } = bounds;

    if (!Number.isFinite(rawVmin) || !Number.isFinite(rawVmax)) {
      return;
    }

    // clamp into valid range
    const vmin = Math.max(dataMin, Math.min(rawVmin, dataMax));
    const vmax = Math.max(dataMin, Math.min(rawVmax, dataMax));

    const dataSpan = Math.max(1e-9, dataMax - dataMin);
    const threshold = dataSpan * this.edgeRatio;

    const nearLeftRaw = vmin <= dataMin + threshold;
    const nearRightRaw = vmax >= dataMax - threshold;

    const movingLeft = this.movingLeft;
    const movingRight = this.movingRight;

    const nearLeft = movingLeft && nearLeftRaw;
    const nearRight = movingRight && nearRightRaw;

    const wantPrev = movingLeft && nearLeftRaw;
    const wantNext = movingRight && nearRightRaw;

    if (!wantPrev && !wantNext) {
      return;
    }

    const now = Date.now();
    if (now - this.lastFire < this.cooldownMs) {
      return;
    }
    this.lastFire = now;

    if (this.loading) {
      return;
    }
    this.loading = true;

    const info: EdgeInfo = {
      vmin,
      vmax,
      dataMin,
      dataMax,
      nearLeft,
      nearRight,
      movingLeft,
      movingRight,
      scaleX,
      scaleY,
    };

    try {
      await this.onPage(wantPrev ? 'prev' : 'next', info);
    } finally {
      this.movingLeft = false;
      this.movingRight = false;
      this.lastWasScale = false;
      this.loading = false;
    }
  }
  // platform-specific getters
  protected abstract getLowestVisibleX(): number;
  protected abstract getHighestVisibleX(): number;
  protected abstract getScaleX(): number;
  protected abstract getScaleY(): number;
  protected abstract getDataXBounds(): { dataMin: number; dataMax: number } | null;
}
