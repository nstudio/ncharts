import { ChartPagingDetectorBase } from './chart-paging-detector-base';
import { ChartPagingDetectorOptions, PageHandler } from './chart-paging-detector';
import { LineChartBase } from '../../common';

@NativeClass()
export class PanActionTarget extends NSObject implements UIGestureRecognizerDelegate {
  static ObjCProtocols = [UIGestureRecognizerDelegate];

  public static ObjCExposedMethods = {
    'handlePan:': {
      returns: interop.types.void,
      params: [interop.types.id],
    },
  };
  private owner: any;

  static initWithOwner(owner: any): PanActionTarget {
    const instance = PanActionTarget.alloc().init() as PanActionTarget;
    instance.owner = owner;
    return instance;
  }
  public 'handlePan:'(recognizer: any): void {
    if (this.owner && this.owner._handlePan) {
      this.owner._handlePan(recognizer);
    }
  }

  public gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean {
    return true;
  }
}

export class ChartPagingDetector extends ChartPagingDetectorBase {
  private readonly nativeChart: BarLineChartViewBase;
  private readonly panTarget: PanActionTarget;
  private readonly pan: UIPanGestureRecognizer;

  constructor(chartView: LineChartBase, onPage: PageHandler, opts?: ChartPagingDetectorOptions) {
    super(onPage, opts);

    this.nativeChart = chartView.ios as BarLineChartViewBase;

    // pan via custom recognizer as it should also work in case we are zoomed out
    this.panTarget = PanActionTarget.initWithOwner(this);
    this.pan = UIPanGestureRecognizer.alloc().initWithTargetAction(this.panTarget, 'handlePan:');
    this.pan.cancelsTouchesInView = false;
    this.pan.delegate = this.panTarget;

    // deactivate pinzoom for custom gesture recognizer
    this.pan.minimumNumberOfTouches = 1;
    this.pan.maximumNumberOfTouches = 1;

    this.nativeChart.addGestureRecognizer(this.pan);
  }

  public _handlePan(recognizer: UIPanGestureRecognizer): void {
    const tr = recognizer.translationInView(this.nativeChart);
    const dx = tr.x;
    const dy = tr.y;

    // Reset translation early so we always work with deltas
    recognizer.setTranslationInView(CGPointZero, this.nativeChart);

    // Gate: ignore if gesture is primarily vertical (or too small)
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    // 1) minimum horizontal movement (avoid jitter)
    if (absX < 3) return;

    // 2) horizontal dominance (tune factor 1.2..2.0)
    if (absX < absY * 1.5) return;

    // Only now treat as horizontal paging intent
    this.handleTranslated(dx);

    const s = recognizer.state;
    if (s === UIGestureRecognizerState.Ended || s === UIGestureRecognizerState.Cancelled) {
      this.handleEnd();
    }
  }
  public handleScaled(): void {
    super.handleScaled();
  }

  protected getLowestVisibleX(): number {
    return this.nativeChart.lowestVisibleX;
  }

  protected getHighestVisibleX(): number {
    return this.nativeChart.highestVisibleX;
  }

  protected getScaleX(): number {
    return this.nativeChart.scaleX;
  }
  protected getScaleY(): number {
    return this.nativeChart.scaleY;
  }

  protected getDataXBounds(): { dataMin: number; dataMax: number } | null {
    const data = this.nativeChart.data;
    if (!data) return null;
    return { dataMin: this.nativeChart.chartXMin, dataMax: this.nativeChart.chartXMax };
  }
}
