import { TouchGestureEventData } from '@nativescript/core';
import { ChartPagingDetectorOptions, PageHandler } from './chart-paging-detector';
import { ChartPagingDetectorBase } from './chart-paging-detector-base';

export class ChartPagingDetector extends ChartPagingDetectorBase {
  private readonly chartView: any;
  private readonly nativeChart: com.github.mikephil.charting.charts.BarLineChartBase<any>;

  private lastX = 0;
  private lastY = 0;
  private startX = 0;
  private startY = 0;
  private horizontalPagingActive = false;
  private gestureLocked = false;
  private touchSlop = 8;
  private tracking = false;

  private readonly touchHandler: (args: TouchGestureEventData) => void;
  private readonly gestureListener: com.github.mikephil.charting.listener.OnChartGestureListener;

  constructor(chartView: any, onPage: PageHandler, opts?: ChartPagingDetectorOptions) {
    super(onPage, opts);

    this.chartView = chartView;
    this.nativeChart = chartView.android as com.github.mikephil.charting.charts.BarLineChartBase<any>;

    this.touchHandler = (args: TouchGestureEventData) => {
      this._handleTouch(args);
    };

    this.gestureListener = new com.github.mikephil.charting.listener.OnChartGestureListener({
      onChartGestureStart: (me: android.view.MotionEvent, lastPerformedGesture) => {},
      onChartGestureEnd: (me: android.view.MotionEvent, lastPerformedGesture) => {},
      onChartLongPressed: (me: android.view.MotionEvent) => {},
      onChartDoubleTapped: (me: android.view.MotionEvent) => {},
      onChartSingleTapped: (me: android.view.MotionEvent) => {},
      onChartFling: (me1: android.view.MotionEvent, me2: android.view.MotionEvent, velocityX: number, velocityY: number) => {},
      onChartScale: (me: android.view.MotionEvent, scaleX: number, scaleY: number) => {
        this.handleScaled();
      },
      onChartTranslate: (me: android.view.MotionEvent, dX: number, dY: number) => {},
    });

    this.chartView.on('touch', this.touchHandler, this);
    this.nativeChart.setOnChartGestureListener(this.gestureListener);
  }

  private _handleTouch(args: TouchGestureEventData): void {
    const action = args.action;
    const x = args.getX();
    const y = args.getY();

    switch (action) {
      case 'down':
        this.startX = x;
        this.startY = y;
        this.lastX = x;
        this.lastY = y;
        this.tracking = true;
        this.horizontalPagingActive = false;
        this.gestureLocked = false;
        break;

      case 'move':
        // recovery path in case of missing down
        if (!this.tracking) {
          this.startX = x;
          this.startY = y;
          this.lastX = x;
          this.lastY = y;
          this.tracking = true;
          this.horizontalPagingActive = false;
          this.gestureLocked = false;
          break;
        }

        const totalDx = x - this.startX;
        const totalDy = y - this.startY;

        const absTotalX = Math.abs(totalDx);
        const absTotalY = Math.abs(totalDy);

        // decision pending: Tap vs horizontal vs vertikal
        if (!this.gestureLocked) {
          // not enough displacement => Tap/Jitter
          if (absTotalX < this.touchSlop && absTotalY < this.touchSlop) {
            return;
          }

          // Horizontal dominates => activate paging
          if (absTotalX > absTotalY * 1.5) {
            this.gestureLocked = true;
            this.horizontalPagingActive = true;
          } else {
            // not enough horizontal => treat as non-paging
            this.gestureLocked = true;
            this.horizontalPagingActive = false;
            return;
          }
        }

        if (!this.horizontalPagingActive) {
          return;
        }

        // use incremental deltas
        const fingerDx = x - this.lastX;
        this.lastX = x;
        this.lastY = y;

        // ignore jitter
        if (Math.abs(fingerDx) < 1) {
          return;
        }

        super.handleTranslated(fingerDx);
        break;

      case 'up':
      case 'cancel':
        this.tracking = false;

        // only emit end when horizontal paging gesture has finished
        if (this.horizontalPagingActive) {
          super.handleEnd();
        }

        this.horizontalPagingActive = false;
        this.gestureLocked = false;
        break;
    }
  }

  public handleScaled(): void {
    super.handleScaled();
  }

  public override detach(): void {
    super.detach();
    this.chartView.off('touch', this.touchHandler, this);
    this.nativeChart.setOnChartGestureListener(null);
  }

  protected getLowestVisibleX(): number {
    return this.nativeChart.getLowestVisibleX();
  }

  protected getHighestVisibleX(): number {
    return this.nativeChart.getHighestVisibleX();
  }

  protected getScaleX(): number {
    return this.nativeChart.getViewPortHandler().getScaleX();
  }

  protected getScaleY(): number {
    return this.nativeChart.getViewPortHandler().getScaleY();
  }

  protected getDataXBounds(): { dataMin: number; dataMax: number } | null {
    const data = this.nativeChart.getData();
    if (!data) return null;

    return {
      dataMin: data.getXMin(),
      dataMax: data.getXMax(),
    };
  }
}
