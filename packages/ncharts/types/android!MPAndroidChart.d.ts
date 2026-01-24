declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export class BuildConfig {
          public static class: java.lang.Class<com.github.mikephil.charting.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static APPLICATION_ID: string = 'com.github.mikephil.charting';
          public static BUILD_TYPE: string = 'release';
          public static FLAVOR: string = '';
          public static VERSION_CODE: number = 3;
          public static VERSION_NAME: string = '3.1.0';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module animation {
          export class ChartAnimator {
            public static class: java.lang.Class<com.github.mikephil.charting.animation.ChartAnimator>;
            public mPhaseY: number;
            public mPhaseX: number;
            public constructor();
            public constructor(listener: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener);
            public animateY(durationMillis: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public animateX(durationMillis: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public getPhaseX(): number;
            public animateY(durationMillis: number): void;
            public setPhaseY(phase: number): void;
            public animateXY(durationMillisX: number, durationMillisY: number): void;
            public animateXY(durationMillisX: number, durationMillisY: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public setPhaseX(phase: number): void;
            public animateXY(durationMillisX: number, durationMillisY: number, easingX: com.github.mikephil.charting.animation.Easing.EasingFunction, easingY: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public getPhaseY(): number;
            public animateX(durationMillis: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module animation {
          export class Easing {
            public static class: java.lang.Class<com.github.mikephil.charting.animation.Easing>;
            public static Linear: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInQuad: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutQuad: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutQuad: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInCubic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutCubic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutCubic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInQuart: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutQuart: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutQuart: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInSine: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutSine: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutSine: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInExpo: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutExpo: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutExpo: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInCirc: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutCirc: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutCirc: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInElastic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutElastic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutElastic: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInBack: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutBack: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutBack: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInBounce: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseOutBounce: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public static EaseInOutBounce: com.github.mikephil.charting.animation.Easing.EasingFunction;
            public constructor();
          }
          export module Easing {
            export class EasingFunction {
              public static class: java.lang.Class<com.github.mikephil.charting.animation.Easing.EasingFunction>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.animation.Easing$EasingFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getInterpolation(param0: number): number });
              public constructor();
              public getInterpolation(param0: number): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module buffer {
          export abstract class AbstractBuffer<T> extends java.lang.Object {
            public static class: java.lang.Class<com.github.mikephil.charting.buffer.AbstractBuffer<any>>;
            public index: number;
            public buffer: androidNative.Array<number>;
            public phaseX: number;
            public phaseY: number;
            public mFrom: number;
            public mTo: number;
            public feed(param0: T): void;
            public constructor(size: number);
            public limitFrom(from: number): void;
            public size(): number;
            public limitTo(to: number): void;
            public reset(): void;
            public setPhases(phaseX: number, phaseY: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module buffer {
          export class BarBuffer extends com.github.mikephil.charting.buffer.AbstractBuffer<com.github.mikephil.charting.interfaces.datasets.IBarDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.buffer.BarBuffer>;
            public mDataSetIndex: number;
            public mDataSetCount: number;
            public mContainsStacks: boolean;
            public mInverted: boolean;
            public mBarWidth: number;
            public setBarWidth(barWidth: number): void;
            public setDataSet(index: number): void;
            public constructor(size: number, dataSetCount: number, containsStacks: boolean);
            public constructor(size: number);
            public addBar(left: number, top: number, right: number, bottom: number): void;
            public setInverted(inverted: boolean): void;
            public feed(param0: any): void;
            public feed(top: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module buffer {
          export class HorizontalBarBuffer extends com.github.mikephil.charting.buffer.BarBuffer {
            public static class: java.lang.Class<com.github.mikephil.charting.buffer.HorizontalBarBuffer>;
            public constructor(size: number, dataSetCount: number, containsStacks: boolean);
            public constructor(size: number);
            public feed(param0: any): void;
            public feed(right: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class BarChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.BarData> implements com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.BarChart>;
            public mHighlightFullBarEnabled: boolean;
            public getXRange(): number;
            public getHighlightByTouchPoint(this_: number, x: number): com.github.mikephil.charting.highlight.Highlight;
            public setDrawBarShadow(enabled: boolean): void;
            public highlightValue(high: com.github.mikephil.charting.highlight.Highlight, callListener: boolean): void;
            public setFitBars(enabled: boolean): void;
            public highlightValue(highlight: com.github.mikephil.charting.highlight.Highlight): void;
            public getBarBounds(e: com.github.mikephil.charting.data.BarEntry): globalAndroid.graphics.RectF;
            public isDrawBarShadowEnabled(): boolean;
            public highlightValue(x: number, dataSetIndex: number, stackIndex: number): void;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public highlightValue(x: number, dataSetIndex: number): void;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public calcMinMax(): void;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getBarData(): com.github.mikephil.charting.data.BarData;
            public groupBars(fromX: number, groupSpace: number, barSpace: number): void;
            public getContentRect(): globalAndroid.graphics.RectF;
            public highlightValue(x: number, y: number, dataSetIndex: number): void;
            public setDrawValueAboveBar(enabled: boolean): void;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public isDrawValueAboveBarEnabled(): boolean;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public highlightValue(x: number, dataSetIndex: number, callListener: boolean): void;
            public getXChartMax(): number;
            public setHighlightFullBarEnabled(enabled: boolean): void;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public highlightValue(x: number, y: number, dataSetIndex: number, callListener: boolean): void;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightFullBarEnabled(): boolean;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getBarBounds(e: com.github.mikephil.charting.data.BarEntry, outputRect: globalAndroid.graphics.RectF): void;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export abstract class BarLineChartBase<T> extends com.github.mikephil.charting.charts.Chart<any> implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.BarLineChartBase<any>>;
            public mMaxVisibleCount: number;
            public mAutoScaleMinMaxEnabled: boolean;
            public mPinchZoomEnabled: boolean;
            public mDoubleTapToZoomEnabled: boolean;
            public mHighlightPerDragEnabled: boolean;
            public mGridBackgroundPaint: globalAndroid.graphics.Paint;
            public mBorderPaint: globalAndroid.graphics.Paint;
            public mDrawGridBackground: boolean;
            public mDrawBorders: boolean;
            public mClipValuesToContent: boolean;
            public mMinOffset: number;
            public mKeepPositionOnRotation: boolean;
            public mDrawListener: com.github.mikephil.charting.listener.OnDrawListener;
            public mAxisLeft: com.github.mikephil.charting.components.YAxis;
            public mAxisRight: com.github.mikephil.charting.components.YAxis;
            public mAxisRendererLeft: com.github.mikephil.charting.renderer.YAxisRenderer;
            public mAxisRendererRight: com.github.mikephil.charting.renderer.YAxisRenderer;
            public mLeftAxisTransformer: com.github.mikephil.charting.utils.Transformer;
            public mRightAxisTransformer: com.github.mikephil.charting.utils.Transformer;
            public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRenderer;
            public mZoomMatrixBuffer: globalAndroid.graphics.Matrix;
            public mFitScreenMatrixBuffer: globalAndroid.graphics.Matrix;
            public mGetPositionBuffer: androidNative.Array<number>;
            public posForGetLowestVisibleX: com.github.mikephil.charting.utils.MPPointD;
            public posForGetHighestVisibleX: com.github.mikephil.charting.utils.MPPointD;
            public mOnSizeChangedBuffer: androidNative.Array<number>;
            public onDraw(average: globalAndroid.graphics.Canvas): void;
            public setHighlightPerDragEnabled(enabled: boolean): void;
            public calculateOffsets(): void;
            public isInverted(axis: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public isPinchZoomEnabled(): boolean;
            public getPosition(e: com.github.mikephil.charting.data.Entry, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
            public getScaleY(): number;
            public getXChartMin(): number;
            public centerViewTo(xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public fitScreen(): void;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public setGridBackgroundColor(color: number): void;
            public getContentRect(): globalAndroid.graphics.RectF;
            public getTransformer(which: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public setClipValuesToContent(enabled: boolean): void;
            public isDragYEnabled(): boolean;
            public setDragOffsetX(offset: number): void;
            public setBorderColor(color: number): void;
            public isDragXEnabled(): boolean;
            public setMinOffset(minOffset: number): void;
            public setDragYEnabled(enabled: boolean): void;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public resetTracking(): void;
            public isKeepPositionOnRotation(): boolean;
            public prepareValuePxMatrix(): void;
            public zoomAndCenterAnimated(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, duration: number): void;
            public getXRange(): number;
            public setDragXEnabled(enabled: boolean): void;
            public setScaleXEnabled(enabled: boolean): void;
            public setXAxisRenderer(xAxisRenderer: com.github.mikephil.charting.renderer.XAxisRenderer): void;
            public getValuesByTouchPoint(x: number, y: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, outputPoint: com.github.mikephil.charting.utils.MPPointD): void;
            public setAutoScaleMinMaxEnabled(enabled: boolean): void;
            public setVisibleXRangeMinimum(minXRange: number): void;
            public getAxis(axis: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
            public prepareOffsetMatrix(): void;
            public init(): void;
            public getYChartMin(): number;
            public calcMinMax(): void;
            public setPinchZoom(enabled: boolean): void;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public isDrawBordersEnabled(): boolean;
            public setBorderWidth(width: number): void;
            public zoom(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getDataSetByTouchPoint(x: number, y: number): com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>;
            public getScaleX(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getMinOffset(): number;
            public setKeepPositionOnRotation(keepPositionOnRotation: boolean): void;
            public setScaleYEnabled(enabled: boolean): void;
            public isFullyZoomedOut(): boolean;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getEntryByTouchPoint(x: number, y: number): com.github.mikephil.charting.data.Entry;
            public zoomIn(): void;
            public getDrawListener(): com.github.mikephil.charting.listener.OnDrawListener;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getVisibleXRange(): number;
            public getPixelForValues(x: number, y: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
            public centerViewToY(yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getRendererLeftYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
            public getAxisRange(axis: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
            public setDrawBorders(enabled: boolean): void;
            public setPaint(p: globalAndroid.graphics.Paint, which: number): void;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public setVisibleYRangeMinimum(minYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isDoubleTapToZoomEnabled(): boolean;
            public drawGridBackground(c: globalAndroid.graphics.Canvas): void;
            public getPaint(which: number): globalAndroid.graphics.Paint;
            public calculateLegendOffsets(offsets: globalAndroid.graphics.RectF): void;
            public autoScale(): void;
            public setVisibleYRange(minYRange: number, maxYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getMaxVisibleCount(): number;
            public getHighestVisibleX(): number;
            public getMaxHighlightDistance(): number;
            public isDragEnabled(): boolean;
            public setDoubleTapToZoomEnabled(enabled: boolean): void;
            public centerViewToAnimated(xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, duration: number): void;
            public getLowestVisibleX(): number;
            public moveViewToAnimated(xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, duration: number): void;
            public resetViewPortOffsets(): void;
            public moveViewTo(xValue: number, yValue: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setScaleEnabled(enabled: boolean): void;
            public setMaxVisibleValueCount(count: number): void;
            public setVisibleXRange(minXRange: number, maxXRange: number): void;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
            public setDrawGridBackground(enabled: boolean): void;
            public getAxisLeft(): com.github.mikephil.charting.components.YAxis;
            public resetZoom(): void;
            public getValuesByTouchPoint(x: number, y: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
            public isAnyAxisInverted(): boolean;
            public setDragOffsetY(offset: number): void;
            public setRendererRightYAxis(rendererRightYAxis: com.github.mikephil.charting.renderer.YAxisRenderer): void;
            public computeScroll(): void;
            public setVisibleYRangeMaximum(maxYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setScaleMinima(scaleX: number, scaleY: number): void;
            public isAutoScaleMinMaxEnabled(): boolean;
            public setOnDrawListener(drawListener: com.github.mikephil.charting.listener.OnDrawListener): void;
            public isScaleYEnabled(): boolean;
            public getAxisRight(): com.github.mikephil.charting.components.YAxis;
            public isScaleXEnabled(): boolean;
            public getRendererXAxis(): com.github.mikephil.charting.renderer.XAxisRenderer;
            public getYChartMax(): number;
            public moveViewToX(xValue: number): void;
            public getRendererRightYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
            public getXChartMax(): number;
            public setVisibleXRangeMaximum(maxXRange: number): void;
            public isHighlightPerDragEnabled(): boolean;
            public zoomToCenter(scaleX: number, scaleY: number): void;
            public setDragEnabled(enabled: boolean): void;
            public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public notifyDataSetChanged(): void;
            public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
            public isClipValuesToContentEnabled(): boolean;
            public setRendererLeftYAxis(rendererLeftYAxis: com.github.mikephil.charting.renderer.YAxisRenderer): void;
            public setViewPortOffsets(left: number, top: number, right: number, bottom: number): void;
            public hasNoDragOffset(): boolean;
            public zoomOut(): void;
            public zoom(scaleX: number, scaleY: number, x: number, y: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class BubbleChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.BubbleData> implements com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.BubbleChart>;
            public getXRange(): number;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getContentRect(): globalAndroid.graphics.RectF;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class CandleStickChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.CandleData> implements com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.CandleStickChart>;
            public getXRange(): number;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getContentRect(): globalAndroid.graphics.RectF;
            public getCandleData(): com.github.mikephil.charting.data.CandleData;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export abstract class Chart<T> extends globalAndroid.view.ViewGroup implements com.github.mikephil.charting.interfaces.dataprovider.ChartInterface {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.Chart<any>>;
            public static LOG_TAG: string = 'MPAndroidChart';
            public mLogEnabled: boolean;
            public mData: any;
            public mHighLightPerTapEnabled: boolean;
            public mDefaultValueFormatter: com.github.mikephil.charting.formatter.DefaultValueFormatter;
            public mDescPaint: globalAndroid.graphics.Paint;
            public mInfoPaint: globalAndroid.graphics.Paint;
            public mXAxis: com.github.mikephil.charting.components.XAxis;
            public mTouchEnabled: boolean;
            public mDescription: com.github.mikephil.charting.components.Description;
            public mLegend: com.github.mikephil.charting.components.Legend;
            public mSelectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener;
            public mChartTouchListener: com.github.mikephil.charting.listener.ChartTouchListener<any>;
            public mLegendRenderer: com.github.mikephil.charting.renderer.LegendRenderer;
            public mRenderer: com.github.mikephil.charting.renderer.DataRenderer;
            public mHighlighter: com.github.mikephil.charting.highlight.IHighlighter;
            public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
            public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
            public mIndicesToHighlight: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>;
            public mMaxHighlightDistance: number;
            public mDrawMarkers: boolean;
            public mMarker: com.github.mikephil.charting.components.IMarker;
            public static PAINT_GRID_BACKGROUND: number = 4;
            public static PAINT_INFO: number = 7;
            public static PAINT_DESCRIPTION: number = 11;
            public static PAINT_HOLE: number = 13;
            public static PAINT_CENTER_TEXT: number = 14;
            public static PAINT_LEGEND_LABEL: number = 18;
            public mJobs: java.util.ArrayList<java.lang.Runnable>;
            public getDescription(): com.github.mikephil.charting.components.Description;
            public getHighlightByTouchPoint(x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getExtraBottomOffset(): number;
            public getOnTouchListener(): com.github.mikephil.charting.listener.ChartTouchListener<any>;
            public highlightValue(high: com.github.mikephil.charting.highlight.Highlight, callListener: boolean): void;
            public getOnChartGestureListener(): com.github.mikephil.charting.listener.OnChartGestureListener;
            public onLayout(this_: boolean, changed: number, left: number, top: number, right: number): void;
            public calculateOffsets(): void;
            public isHighlightPerTapEnabled(): boolean;
            public saveToGallery(fileName: string): boolean;
            public getChartBitmap(): globalAndroid.graphics.Bitmap;
            public setHardwareAccelerationEnabled(enabled: boolean): void;
            public animateXY(durationMillisX: number, durationMillisY: number, easingX: com.github.mikephil.charting.animation.Easing.EasingFunction, easingY: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public getExtraLeftOffset(): number;
            public getXChartMin(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getContentRect(): globalAndroid.graphics.RectF;
            public highlightValue(x: number, y: number, dataSetIndex: number): void;
            public highlightValue(x: number, dataSetIndex: number, callListener: boolean): void;
            public setExtraTopOffset(offset: number): void;
            public isDragDecelerationEnabled(): boolean;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public setNoDataTextTypeface(tf: globalAndroid.graphics.Typeface): void;
            public getLegend(): com.github.mikephil.charting.components.Legend;
            public getXAxis(): com.github.mikephil.charting.components.XAxis;
            public animateY(durationMillis: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public getXRange(): number;
            public setTouchEnabled(enabled: boolean): void;
            public addViewportJob(job: java.lang.Runnable): void;
            public getHighlighter(): com.github.mikephil.charting.highlight.IHighlighter;
            public init(): void;
            /** @deprecated */
            public setMarkerView(v: com.github.mikephil.charting.components.IMarker): void;
            public getYChartMin(): number;
            public highlightValue(x: number, dataSetIndex: number): void;
            public getLegendRenderer(): com.github.mikephil.charting.renderer.LegendRenderer;
            public removeViewportJob(job: java.lang.Runnable): void;
            public isEmpty(): boolean;
            public calcMinMax(): void;
            public drawMarkers(set: globalAndroid.graphics.Canvas): void;
            public isLogEnabled(): boolean;
            public highlightValues(highs: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public getHighlighted(): androidNative.Array<com.github.mikephil.charting.highlight.Highlight>;
            public setNoDataTextColor(color: number): void;
            public clearValues(): void;
            public setExtraOffsets(left: number, top: number, right: number, bottom: number): void;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public setExtraBottomOffset(offset: number): void;
            public animateXY(durationMillisX: number, durationMillisY: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public setDrawMarkers(enabled: boolean): void;
            public setOnChartGestureListener(l: com.github.mikephil.charting.listener.OnChartGestureListener): void;
            public isDrawMarkersEnabled(): boolean;
            public saveToGallery(fileName: string, quality: number): boolean;
            public getExtraTopOffset(): number;
            public setDescription(desc: com.github.mikephil.charting.components.Description): void;
            public clearAllViewportJobs(): void;
            public getData(): any;
            public onSizeChanged(this_: number, w: number, h: number, oldw: number): void;
            public constructor(context: globalAndroid.content.Context);
            public setUnbindEnabled(enabled: boolean): void;
            public getAnimator(): com.github.mikephil.charting.animation.ChartAnimator;
            public setExtraRightOffset(offset: number): void;
            public setMaxHighlightDistance(distDp: number): void;
            public animateX(durationMillis: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public setDragDecelerationEnabled(enabled: boolean): void;
            public getMarker(): com.github.mikephil.charting.components.IMarker;
            public setPaint(p: globalAndroid.graphics.Paint, which: number): void;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            /** @deprecated */
            public setDrawMarkerViews(enabled: boolean): void;
            public animateX(durationMillis: number): void;
            public getYMin(): number;
            public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
            public saveToPath(this_: string, title: string): boolean;
            public getPaint(which: number): globalAndroid.graphics.Paint;
            public getYMax(): number;
            public getExtraRightOffset(): number;
            public setMarker(marker: com.github.mikephil.charting.components.IMarker): void;
            public getMaxVisibleCount(): number;
            public getMaxHighlightDistance(): number;
            public getViewPortHandler(): com.github.mikephil.charting.utils.ViewPortHandler;
            public setupDefaultFormatter(min: number, max: number): void;
            public clear(): void;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
            public drawDescription(y: globalAndroid.graphics.Canvas): void;
            public getMarkerPosition(high: com.github.mikephil.charting.highlight.Highlight): androidNative.Array<number>;
            /** @deprecated */
            public isDrawMarkerViewsEnabled(): boolean;
            public getJobs(): java.util.ArrayList<java.lang.Runnable>;
            /** @deprecated */
            public getMarkerView(): com.github.mikephil.charting.components.IMarker;
            public animateY(durationMillis: number): void;
            public setExtraLeftOffset(offset: number): void;
            public saveToGallery(e: string, this_: string, fileName: string, subFolderPath: globalAndroid.graphics.Bitmap.CompressFormat, fileDescription: number): boolean;
            public setLastHighlighted(highs: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public valuesToHighlight(): boolean;
            public highlightValue(highlight: com.github.mikephil.charting.highlight.Highlight): void;
            public animateXY(durationMillisX: number, durationMillisY: number): void;
            public setRenderer(renderer: com.github.mikephil.charting.renderer.DataRenderer): void;
            public getDragDecelerationFrictionCoef(): number;
            public enableScroll(): void;
            public getRenderer(): com.github.mikephil.charting.renderer.DataRenderer;
            public setLogEnabled(enabled: boolean): void;
            public setOnChartValueSelectedListener(l: com.github.mikephil.charting.listener.OnChartValueSelectedListener): void;
            public setOnTouchListener(l: com.github.mikephil.charting.listener.ChartTouchListener<any>): void;
            public setData(this_: any): void;
            public getCenter(): com.github.mikephil.charting.utils.MPPointF;
            public setHighlightPerTapEnabled(enabled: boolean): void;
            public onDetachedFromWindow(): void;
            public getYChartMax(): number;
            public getXChartMax(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public setHighlighter(highlighter: com.github.mikephil.charting.highlight.ChartHighlighter<any>): void;
            public getWidth(): number;
            public notifyDataSetChanged(): void;
            public highlightValue(x: number, y: number, dataSetIndex: number, callListener: boolean): void;
            public onDraw(hasText: globalAndroid.graphics.Canvas): void;
            public setNoDataText(text: string): void;
            public disableScroll(): void;
            public setDragDecelerationFrictionCoef(newValue: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class CombinedChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.CombinedData> implements com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.CombinedChart>;
            public mHighlightFullBarEnabled: boolean;
            public mDrawOrder: androidNative.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
            public getXRange(): number;
            public getHighlightByTouchPoint(this_: number, x: number): com.github.mikephil.charting.highlight.Highlight;
            public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
            public setDrawBarShadow(enabled: boolean): void;
            public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
            public isDrawBarShadowEnabled(): boolean;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getDrawOrder(): androidNative.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public drawMarkers(set: globalAndroid.graphics.Canvas): void;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getBarData(): com.github.mikephil.charting.data.BarData;
            public getLineData(): com.github.mikephil.charting.data.LineData;
            public getContentRect(): globalAndroid.graphics.RectF;
            public setData(this_: any): void;
            public getCandleData(): com.github.mikephil.charting.data.CandleData;
            public setDrawValueAboveBar(enabled: boolean): void;
            public setDrawOrder(order: androidNative.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>): void;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public isDrawValueAboveBarEnabled(): boolean;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
            public setHighlightFullBarEnabled(enabled: boolean): void;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getScatterData(): com.github.mikephil.charting.data.ScatterData;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightFullBarEnabled(): boolean;
            public getData(): any;
            public setData(data: com.github.mikephil.charting.data.CombinedData): void;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
          export module CombinedChart {
            export class DrawOrder {
              public static class: java.lang.Class<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
              public static BAR: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
              public static BUBBLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
              public static LINE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
              public static CANDLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
              public static SCATTER: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
              public static values(): androidNative.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
              public static valueOf(name: string): com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class HorizontalBarChart extends com.github.mikephil.charting.charts.BarChart {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.HorizontalBarChart>;
            public mGetPositionBuffer: androidNative.Array<number>;
            public getHighlightByTouchPoint(x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getXRange(): number;
            public getMarkerPosition(high: com.github.mikephil.charting.highlight.Highlight): androidNative.Array<number>;
            public calculateOffsets(): void;
            public setVisibleXRangeMinimum(minXRange: number): void;
            public setVisibleYRangeMaximum(maxYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getBarBounds(e: com.github.mikephil.charting.data.BarEntry): globalAndroid.graphics.RectF;
            public isDrawBarShadowEnabled(): boolean;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public getPosition(e: com.github.mikephil.charting.data.Entry, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
            public setVisibleYRangeMinimum(minYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getBarData(): com.github.mikephil.charting.data.BarData;
            public getContentRect(): globalAndroid.graphics.RectF;
            public setVisibleYRange(minYRange: number, maxYRange: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public isDrawValueAboveBarEnabled(): boolean;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public setVisibleXRangeMaximum(maxXRange: number): void;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightFullBarEnabled(): boolean;
            public getData(): any;
            public setVisibleXRange(minXRange: number, maxXRange: number): void;
            public constructor(context: globalAndroid.content.Context);
            public prepareValuePxMatrix(): void;
            public getBarBounds(e: com.github.mikephil.charting.data.BarEntry, outputRect: globalAndroid.graphics.RectF): void;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class LineChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.LineData> implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.LineChart>;
            public getXRange(): number;
            public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getLineData(): com.github.mikephil.charting.data.LineData;
            public getContentRect(): globalAndroid.graphics.RectF;
            public onDetachedFromWindow(): void;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class PieChart extends com.github.mikephil.charting.charts.PieRadarChartBase<com.github.mikephil.charting.data.PieData> {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.PieChart>;
            public mTransparentCircleRadiusPercent: number;
            public mMaxAngle: number;
            public getIndexForAngle(this_: number): number;
            public getHoleRadius(): number;
            public getRadius(): number;
            public calculateOffsets(): void;
            public setHoleColor(color: number): void;
            public setDrawRoundedSlices(enabled: boolean): void;
            public getDataSetIndexForIndex(this_: number): number;
            public setUsePercentValues(enabled: boolean): void;
            public getCenterCircleBox(): com.github.mikephil.charting.utils.MPPointF;
            public getMaxAngle(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isUsePercentValuesEnabled(): boolean;
            public isDrawRoundedSlicesEnabled(): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public setCenterTextOffset(x: number, y: number): void;
            public setTransparentCircleColor(color: number): void;
            public getContentRect(): globalAndroid.graphics.RectF;
            /** @deprecated */
            public setDrawSliceText(enabled: boolean): void;
            public setDrawHoleEnabled(enabled: boolean): void;
            public getMaxVisibleCount(): number;
            public getTransparentCircleRadius(): number;
            public getRequiredBaseOffset(): number;
            public getMaxHighlightDistance(): number;
            public setMinAngleForSlices(minAngle: number): void;
            public setCenterTextSize(sizeDp: number): void;
            public isDrawHoleEnabled(): boolean;
            public isDrawSlicesUnderHoleEnabled(): boolean;
            public getDrawAngles(): androidNative.Array<number>;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public setDrawCenterText(enabled: boolean): void;
            /** @deprecated */
            public getXAxis(): com.github.mikephil.charting.components.XAxis;
            public getCenterText(): string;
            public getCenterTextOffset(): com.github.mikephil.charting.utils.MPPointF;
            public onDraw(canvas: globalAndroid.graphics.Canvas): void;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
            public setCenterTextRadiusPercent(percent: number): void;
            public setMaxAngle(maxangle: number): void;
            public getXRange(): number;
            public getCircleBox(): globalAndroid.graphics.RectF;
            public getCenterTextRadiusPercent(): number;
            public getMarkerPosition(highlight: com.github.mikephil.charting.highlight.Highlight): androidNative.Array<number>;
            public init(): void;
            public getYChartMin(): number;
            public setCenterTextColor(color: number): void;
            public calcMinMax(): void;
            public setDrawSlicesUnderHole(enable: boolean): void;
            public getAbsoluteAngles(): androidNative.Array<number>;
            public setEntryLabelTextSize(size: number): void;
            public setCenterTextTypeface(t: globalAndroid.graphics.Typeface): void;
            public setCenterTextSizePixels(sizePixels: number): void;
            public setHoleRadius(percent: number): void;
            public needsHighlight(this_: number): boolean;
            public onDetachedFromWindow(): void;
            public getYChartMax(): number;
            public setEntryLabelTypeface(tf: globalAndroid.graphics.Typeface): void;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public setEntryLabelColor(color: number): void;
            public getXChartMax(): number;
            public isDrawEntryLabelsEnabled(): boolean;
            public setTransparentCircleRadius(percent: number): void;
            public setCenterText(text: string): void;
            public getRequiredLegendOffset(): number;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public isDrawCenterTextEnabled(): boolean;
            public setTransparentCircleAlpha(alpha: number): void;
            public setDrawEntryLabels(enabled: boolean): void;
            public constructor(context: globalAndroid.content.Context);
            public getMinAngleForSlices(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export abstract class PieRadarChartBase<T> extends com.github.mikephil.charting.charts.Chart<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.PieRadarChartBase<any>>;
            public mRotateEnabled: boolean;
            public mMinOffset: number;
            public getRotationAngle(): number;
            public distanceToCenter(x: number, y: number): number;
            public getIndexForAngle(param0: number): number;
            public getRawRotationAngle(): number;
            public getXRange(): number;
            public getRadius(): number;
            public calculateOffsets(): void;
            public computeScroll(): void;
            public setRotationEnabled(enabled: boolean): void;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getAngleForPoint(x: number, y: number): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public calcMinMax(): void;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getContentRect(): globalAndroid.graphics.RectF;
            public isRotationEnabled(): boolean;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getRequiredBaseOffset(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getPosition(center: com.github.mikephil.charting.utils.MPPointF, dist: number, angle: number, outputPoint: com.github.mikephil.charting.utils.MPPointF): void;
            public getMinOffset(): number;
            public getPosition(center: com.github.mikephil.charting.utils.MPPointF, dist: number, angle: number): com.github.mikephil.charting.utils.MPPointF;
            public setMinOffset(minOffset: number): void;
            public getRequiredLegendOffset(): number;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
            public notifyDataSetChanged(): void;
            public spin(durationmillis: number, fromangle: number, toangle: number, easing: com.github.mikephil.charting.animation.Easing.EasingFunction): void;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getDiameter(): number;
            public setRotationAngle(angle: number): void;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class RadarChart extends com.github.mikephil.charting.charts.PieRadarChartBase<com.github.mikephil.charting.data.RadarData> {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.RadarChart>;
            public mYAxisRenderer: com.github.mikephil.charting.renderer.YAxisRendererRadarChart;
            public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRendererRadarChart;
            public getSliceAngle(): number;
            public getWebAlpha(): number;
            public setWebColorInner(color: number): void;
            public getWebColorInner(): number;
            public getXRange(): number;
            public getRadius(): number;
            public setWebLineWidth(width: number): void;
            public getSkipWebLineCount(): number;
            public setSkipWebLineCount(count: number): void;
            public getIndexForAngle(i: number): number;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public calcMinMax(): void;
            public setWebColor(color: number): void;
            public getWebLineWidth(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public setWebAlpha(alpha: number): void;
            public setDrawWeb(enabled: boolean): void;
            public getContentRect(): globalAndroid.graphics.RectF;
            public getYRange(): number;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public setWebLineWidthInner(width: number): void;
            public getRequiredBaseOffset(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getYAxis(): com.github.mikephil.charting.components.YAxis;
            public getRequiredLegendOffset(): number;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public notifyDataSetChanged(): void;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getWebLineWidthInner(): number;
            public getFactor(): number;
            public onDraw(canvas: globalAndroid.graphics.Canvas): void;
            public constructor(context: globalAndroid.content.Context);
            public getWebColor(): number;
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module charts {
          export class ScatterChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.ScatterData> implements com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider {
            public static class: java.lang.Class<com.github.mikephil.charting.charts.ScatterChart>;
            public getXRange(): number;
            public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
            public init(): void;
            public getYChartMin(): number;
            public getXChartMin(): number;
            public getData(): com.github.mikephil.charting.data.ChartData<any>;
            public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
            public getContentRect(): globalAndroid.graphics.RectF;
            public getMaxVisibleCount(): number;
            public getYChartMax(): number;
            public getHighestVisibleX(): number;
            public getMaxHighlightDistance(): number;
            public getHeight(): number;
            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
            public getXChartMax(): number;
            public getLowestVisibleX(): number;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getWidth(): number;
            public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getScatterData(): com.github.mikephil.charting.data.ScatterData;
            public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
            public getData(): any;
            public constructor(context: globalAndroid.content.Context);
            public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
          }
          export module ScatterChart {
            export class ScatterShape {
              public static class: java.lang.Class<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
              public static SQUARE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static CIRCLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static TRIANGLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static CROSS: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static X: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static CHEVRON_UP: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static CHEVRON_DOWN: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static valueOf(name: string): com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
              public static values(): androidNative.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
              public toString(): string;
              public static getAllDefaultShapes(): androidNative.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export abstract class AxisBase extends com.github.mikephil.charting.components.ComponentBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.AxisBase>;
            public mAxisValueFormatter: com.github.mikephil.charting.formatter.ValueFormatter;
            public mEntries: androidNative.Array<number>;
            public mCenteredEntries: androidNative.Array<number>;
            public mEntryCount: number;
            public mDecimals: number;
            public mGranularity: number;
            public mGranularityEnabled: boolean;
            public mForceLabels: boolean;
            public mDrawGridLines: boolean;
            public mDrawAxisLine: boolean;
            public mDrawLabels: boolean;
            public mCenterAxisLabels: boolean;
            public mLimitLines: java.util.List<com.github.mikephil.charting.components.LimitLine>;
            public mDrawLimitLineBehindData: boolean;
            public mDrawGridLinesBehindData: boolean;
            public mSpaceMin: number;
            public mSpaceMax: number;
            public mCustomAxisMin: boolean;
            public mCustomAxisMax: boolean;
            public mAxisMaximum: number;
            public mAxisMinimum: number;
            public mAxisRange: number;
            public enableGridDashedLine(lineLength: number, spaceLength: number, phase: number): void;
            public setGridDashedLine(effect: globalAndroid.graphics.DashPathEffect): void;
            public enableAxisLineDashedLine(lineLength: number, spaceLength: number, phase: number): void;
            public getGridDashPathEffect(): globalAndroid.graphics.DashPathEffect;
            public setValueFormatter(f: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public getSpaceMax(): number;
            public setLabelCount(count: number): void;
            public isForceLabelsEnabled(): boolean;
            public setDrawGridLines(enabled: boolean): void;
            public setGranularityEnabled(enabled: boolean): void;
            public isGranularityEnabled(): boolean;
            public constructor();
            public setGranularity(granularity: number): void;
            public setGridColor(color: number): void;
            public setAxisLineWidth(width: number): void;
            public isDrawLimitLinesBehindDataEnabled(): boolean;
            public getGranularity(): number;
            public setCenterAxisLabels(enabled: boolean): void;
            public getGridLineWidth(): number;
            public isDrawAxisLineEnabled(): boolean;
            public disableGridDashedLine(): void;
            public setAxisLineColor(color: number): void;
            public setDrawGridLinesBehindData(enabled: boolean): void;
            public resetAxisMaximum(): void;
            public getAxisLineWidth(): number;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public setSpaceMax(mSpaceMax: number): void;
            public isDrawGridLinesEnabled(): boolean;
            public removeLimitLine(l: com.github.mikephil.charting.components.LimitLine): void;
            public setAxisMaximum(max: number): void;
            public getAxisMinimum(): number;
            public getSpaceMin(): number;
            public setSpaceMin(mSpaceMin: number): void;
            public getLimitLines(): java.util.List<com.github.mikephil.charting.components.LimitLine>;
            public isGridDashedLineEnabled(): boolean;
            public calculate(dataMin: number, dataMax: number): void;
            public setAxisMinimum(min: number): void;
            /** @deprecated */
            public setAxisMinValue(min: number): void;
            public setDrawLabels(enabled: boolean): void;
            public isAxisMinCustom(): boolean;
            /** @deprecated */
            public setAxisMaxValue(max: number): void;
            public resetAxisMinimum(): void;
            public setGridLineWidth(width: number): void;
            public removeAllLimitLines(): void;
            public setDrawLimitLinesBehindData(enabled: boolean): void;
            public getLongestLabel(): string;
            public isCenterAxisLabelsEnabled(): boolean;
            public addLimitLine(l: com.github.mikephil.charting.components.LimitLine): void;
            public getLabelCount(): number;
            public isDrawLabelsEnabled(): boolean;
            public getAxisLineDashPathEffect(): globalAndroid.graphics.DashPathEffect;
            public disableAxisLineDashedLine(): void;
            public isDrawGridLinesBehindDataEnabled(): boolean;
            public getGridColor(): number;
            public setLabelCount(count: number, force: boolean): void;
            public getFormattedLabel(index: number): string;
            public getAxisMaximum(): number;
            public isAxisMaxCustom(): boolean;
            public getAxisLineColor(): number;
            public setAxisLineDashedLine(effect: globalAndroid.graphics.DashPathEffect): void;
            public isAxisLineDashedLineEnabled(): boolean;
            public setDrawAxisLine(enabled: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export abstract class ComponentBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.ComponentBase>;
            public mEnabled: boolean;
            public mXOffset: number;
            public mYOffset: number;
            public mTypeface: globalAndroid.graphics.Typeface;
            public mTextSize: number;
            public mTextColor: number;
            public constructor();
            public setTextSize(size: number): void;
            public getTextColor(): number;
            public getYOffset(): number;
            public isEnabled(): boolean;
            public setEnabled(enabled: boolean): void;
            public getTextSize(): number;
            public setTextColor(color: number): void;
            public getTypeface(): globalAndroid.graphics.Typeface;
            public setTypeface(tf: globalAndroid.graphics.Typeface): void;
            public setXOffset(xOffset: number): void;
            public setYOffset(yOffset: number): void;
            public getXOffset(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class Description extends com.github.mikephil.charting.components.ComponentBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.Description>;
            public constructor();
            public setPosition(x: number, y: number): void;
            public setText(text: string): void;
            public getText(): string;
            public getPosition(): com.github.mikephil.charting.utils.MPPointF;
            public setTextAlign(align: globalAndroid.graphics.Paint.Align): void;
            public getTextAlign(): globalAndroid.graphics.Paint.Align;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class IMarker {
            public static class: java.lang.Class<com.github.mikephil.charting.components.IMarker>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.components.IMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getOffset(): com.github.mikephil.charting.utils.MPPointF; getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF; refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void; draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void });
            public constructor();
            public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
            public getOffset(): com.github.mikephil.charting.utils.MPPointF;
            public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
            public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class Legend extends com.github.mikephil.charting.components.ComponentBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.Legend>;
            public mNeededWidth: number;
            public mNeededHeight: number;
            public mTextHeightMax: number;
            public mTextWidthMax: number;
            public getCalculatedLineSizes(): java.util.List<com.github.mikephil.charting.utils.FSize>;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getStackSpace(): number;
            public getMaximumEntryWidth(label: globalAndroid.graphics.Paint): number;
            public setCustom(entries: androidNative.Array<com.github.mikephil.charting.components.LegendEntry>): void;
            public getXEntrySpace(): number;
            public isWordWrapEnabled(): boolean;
            public getCalculatedLabelSizes(): java.util.List<com.github.mikephil.charting.utils.FSize>;
            public getMaximumEntryHeight(length: globalAndroid.graphics.Paint): number;
            public isDrawInsideEnabled(): boolean;
            public getMaxSizePercent(): number;
            public getHorizontalAlignment(): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
            public setOrientation(value: com.github.mikephil.charting.components.Legend.LegendOrientation): void;
            public setYEntrySpace(space: number): void;
            public setCustom(entries: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
            public setFormToTextSpace(space: number): void;
            public setWordWrapEnabled(enabled: boolean): void;
            public setDrawInside(value: boolean): void;
            public calculateDimensions(drawingForm: globalAndroid.graphics.Paint, formSize: com.github.mikephil.charting.utils.ViewPortHandler): void;
            public setEntries(entries: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
            public setMaxSizePercent(maxSize: number): void;
            public getOrientation(): com.github.mikephil.charting.components.Legend.LegendOrientation;
            public setForm(shape: com.github.mikephil.charting.components.Legend.LegendForm): void;
            public setVerticalAlignment(value: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment): void;
            public getEntries(): androidNative.Array<com.github.mikephil.charting.components.LegendEntry>;
            public getYEntrySpace(): number;
            public getVerticalAlignment(): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public constructor();
            public getCalculatedLabelBreakPoints(): java.util.List<java.lang.Boolean>;
            public setExtra(i: androidNative.Array<number>, this_: androidNative.Array<string>): void;
            public constructor(entries: androidNative.Array<com.github.mikephil.charting.components.LegendEntry>);
            public setFormSize(size: number): void;
            public getExtraEntries(): androidNative.Array<com.github.mikephil.charting.components.LegendEntry>;
            public getDirection(): com.github.mikephil.charting.components.Legend.LegendDirection;
            public setFormLineDashEffect(dashPathEffect: globalAndroid.graphics.DashPathEffect): void;
            public getFormSize(): number;
            public getFormToTextSpace(): number;
            public setHorizontalAlignment(value: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment): void;
            public setDirection(pos: com.github.mikephil.charting.components.Legend.LegendDirection): void;
            public setFormLineWidth(size: number): void;
            public setXEntrySpace(space: number): void;
            public resetCustom(): void;
            public setExtra(entries: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
            public setExtra(entries: androidNative.Array<com.github.mikephil.charting.components.LegendEntry>): void;
            public setStackSpace(space: number): void;
            public isLegendCustom(): boolean;
            public getFormLineWidth(): number;
          }
          export module Legend {
            export class LegendDirection {
              public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendDirection>;
              public static LEFT_TO_RIGHT: com.github.mikephil.charting.components.Legend.LegendDirection;
              public static RIGHT_TO_LEFT: com.github.mikephil.charting.components.Legend.LegendDirection;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.Legend.LegendDirection>;
              public static valueOf(name: string): com.github.mikephil.charting.components.Legend.LegendDirection;
            }
            export class LegendForm {
              public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendForm>;
              public static NONE: com.github.mikephil.charting.components.Legend.LegendForm;
              public static EMPTY: com.github.mikephil.charting.components.Legend.LegendForm;
              public static DEFAULT: com.github.mikephil.charting.components.Legend.LegendForm;
              public static SQUARE: com.github.mikephil.charting.components.Legend.LegendForm;
              public static CIRCLE: com.github.mikephil.charting.components.Legend.LegendForm;
              public static LINE: com.github.mikephil.charting.components.Legend.LegendForm;
              public static valueOf(name: string): com.github.mikephil.charting.components.Legend.LegendForm;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.Legend.LegendForm>;
            }
            export class LegendHorizontalAlignment {
              public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment>;
              public static LEFT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
              public static CENTER: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
              public static RIGHT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment>;
              public static valueOf(name: string): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
            }
            export class LegendOrientation {
              public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendOrientation>;
              public static HORIZONTAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
              public static VERTICAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.Legend.LegendOrientation>;
              public static valueOf(name: string): com.github.mikephil.charting.components.Legend.LegendOrientation;
            }
            export class LegendVerticalAlignment {
              public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendVerticalAlignment>;
              public static TOP: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
              public static CENTER: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
              public static BOTTOM: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.Legend.LegendVerticalAlignment>;
              public static valueOf(name: string): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class LegendEntry {
            public static class: java.lang.Class<com.github.mikephil.charting.components.LegendEntry>;
            public label: string;
            public form: com.github.mikephil.charting.components.Legend.LegendForm;
            public formSize: number;
            public formLineWidth: number;
            public formLineDashEffect: globalAndroid.graphics.DashPathEffect;
            public formColor: number;
            public constructor(label: string, form: com.github.mikephil.charting.components.Legend.LegendForm, formSize: number, formLineWidth: number, formLineDashEffect: globalAndroid.graphics.DashPathEffect, formColor: number);
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class LimitLine extends com.github.mikephil.charting.components.ComponentBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.LimitLine>;
            public setLineWidth(width: number): void;
            public constructor();
            public setLabelPosition(pos: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition): void;
            public getTextStyle(): globalAndroid.graphics.Paint.Style;
            public getLabel(): string;
            public getLineColor(): number;
            public setTextStyle(style: globalAndroid.graphics.Paint.Style): void;
            public setLineColor(color: number): void;
            public enableDashedLine(lineLength: number, spaceLength: number, phase: number): void;
            public disableDashedLine(): void;
            public constructor(limit: number);
            public constructor(limit: number, label: string);
            public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
            public getLineWidth(): number;
            public isDashedLineEnabled(): boolean;
            public getLabelPosition(): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
            public getLimit(): number;
            public setLabel(label: string): void;
          }
          export module LimitLine {
            export class LimitLabelPosition {
              public static class: java.lang.Class<com.github.mikephil.charting.components.LimitLine.LimitLabelPosition>;
              public static LEFT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
              public static LEFT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
              public static RIGHT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
              public static RIGHT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
              public static valueOf(name: string): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.LimitLine.LimitLabelPosition>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class MarkerImage extends com.github.mikephil.charting.components.IMarker {
            public static class: java.lang.Class<com.github.mikephil.charting.components.MarkerImage>;
            public setSize(size: com.github.mikephil.charting.utils.FSize): void;
            public getSize(): com.github.mikephil.charting.utils.FSize;
            public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
            public constructor(context: globalAndroid.content.Context, drawableResourceId: number);
            public getOffset(): com.github.mikephil.charting.utils.MPPointF;
            public getOffsetForDrawingAtPoint(posX: number, posY: number): com.github.mikephil.charting.utils.MPPointF;
            public draw(canvas: globalAndroid.graphics.Canvas, posX: number, posY: number): void;
            public setChartView(chart: com.github.mikephil.charting.charts.Chart<any>): void;
            public getChartView(): com.github.mikephil.charting.charts.Chart<any>;
            public refreshContent(e: com.github.mikephil.charting.data.Entry, highlight: com.github.mikephil.charting.highlight.Highlight): void;
            public setOffset(offset: com.github.mikephil.charting.utils.MPPointF): void;
            public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
            public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
            public setOffset(offsetX: number, offsetY: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class MarkerView implements com.github.mikephil.charting.components.IMarker {
            public static class: java.lang.Class<com.github.mikephil.charting.components.MarkerView>;
            public constructor(context: globalAndroid.content.Context, layoutResource: number);
            public getChartView(): com.github.mikephil.charting.charts.Chart<any>;
            public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
            public refreshContent(e: com.github.mikephil.charting.data.Entry, highlight: com.github.mikephil.charting.highlight.Highlight): void;
            public setOffset(offset: com.github.mikephil.charting.utils.MPPointF): void;
            public getOffset(): com.github.mikephil.charting.utils.MPPointF;
            public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
            public getOffsetForDrawingAtPoint(posX: number, posY: number): com.github.mikephil.charting.utils.MPPointF;
            public draw(canvas: globalAndroid.graphics.Canvas, posX: number, posY: number): void;
            public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
            public setChartView(chart: com.github.mikephil.charting.charts.Chart<any>): void;
            public setOffset(offsetX: number, offsetY: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class XAxis extends com.github.mikephil.charting.components.AxisBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.XAxis>;
            public mLabelWidth: number;
            public mLabelHeight: number;
            public mLabelRotatedWidth: number;
            public mLabelRotatedHeight: number;
            public mLabelRotationAngle: number;
            public constructor();
            public setAvoidFirstLastClipping(enabled: boolean): void;
            public getLabelRotationAngle(): number;
            public setLabelRotationAngle(angle: number): void;
            public setPosition(pos: com.github.mikephil.charting.components.XAxis.XAxisPosition): void;
            public isAvoidFirstLastClippingEnabled(): boolean;
            public getPosition(): com.github.mikephil.charting.components.XAxis.XAxisPosition;
          }
          export module XAxis {
            export class XAxisPosition {
              public static class: java.lang.Class<com.github.mikephil.charting.components.XAxis.XAxisPosition>;
              public static TOP: com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static BOTTOM: com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static BOTH_SIDED: com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static TOP_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static BOTTOM_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static valueOf(name: string): com.github.mikephil.charting.components.XAxis.XAxisPosition;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.XAxis.XAxisPosition>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module components {
          export class YAxis extends com.github.mikephil.charting.components.AxisBase {
            public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis>;
            public mInverted: boolean;
            public mDrawZeroLine: boolean;
            public mZeroLineColor: number;
            public mZeroLineWidth: number;
            public mSpacePercentTop: number;
            public mSpacePercentBottom: number;
            public mMinWidth: number;
            public mMaxWidth: number;
            public getZeroLineWidth(): number;
            public isInverted(): boolean;
            public getSpaceTop(): number;
            /** @deprecated */
            public setUseAutoScaleMinRestriction(isEnabled: boolean): void;
            public isDrawTopYLabelEntryEnabled(): boolean;
            public getRequiredHeightSpace(p: globalAndroid.graphics.Paint): number;
            public setMaxWidth(maxWidth: number): void;
            /** @deprecated */
            public isUseAutoScaleMaxRestriction(): boolean;
            public getZeroLineColor(): number;
            /** @deprecated */
            public isUseAutoScaleMinRestriction(): boolean;
            public calculate(dataMin: number, dataMax: number): void;
            public getMaxWidth(): number;
            public getLabelPosition(): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
            /** @deprecated */
            public setStartAtZero(startAtZero: boolean): void;
            public setMinWidth(minWidth: number): void;
            public isDrawBottomYLabelEntryEnabled(): boolean;
            public constructor();
            public setZeroLineWidth(width: number): void;
            public setInverted(enabled: boolean): void;
            public isDrawZeroLineEnabled(): boolean;
            public setPosition(pos: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition): void;
            public getRequiredWidthSpace(p: globalAndroid.graphics.Paint): number;
            public setDrawTopYLabelEntry(enabled: boolean): void;
            public getSpaceBottom(): number;
            public constructor(position: com.github.mikephil.charting.components.YAxis.AxisDependency);
            public setSpaceBottom(percent: number): void;
            public getMinWidth(): number;
            public setSpaceTop(percent: number): void;
            public setDrawZeroLine(mDrawZeroLine: boolean): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public setZeroLineColor(color: number): void;
            public needsOffset(): boolean;
            /** @deprecated */
            public setUseAutoScaleMaxRestriction(isEnabled: boolean): void;
          }
          export module YAxis {
            export class AxisDependency {
              public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis.AxisDependency>;
              public static LEFT: com.github.mikephil.charting.components.YAxis.AxisDependency;
              public static RIGHT: com.github.mikephil.charting.components.YAxis.AxisDependency;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.YAxis.AxisDependency>;
              public static valueOf(name: string): com.github.mikephil.charting.components.YAxis.AxisDependency;
            }
            export class YAxisLabelPosition {
              public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis.YAxisLabelPosition>;
              public static OUTSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
              public static INSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
              public static valueOf(name: string): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
              public static values(): androidNative.Array<com.github.mikephil.charting.components.YAxis.YAxisLabelPosition>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BarData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBarDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BarData>;
            public getGroupWidth(groupSpace: number, barSpace: number): number;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>);
            public constructor(sets: java.util.List<any>);
            public getBarWidth(): number;
            public setBarWidth(mBarWidth: number): void;
            public groupBars(set: number, start: number, end: number): void;
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>);
            public constructor(sets: androidNative.Array<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BarDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BarEntry> implements com.github.mikephil.charting.interfaces.datasets.IBarDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BarDataSet>;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public setBarShadowColor(color: number): void;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public setStackLabels(labels: androidNative.Array<string>): void;
            public getYMax(): number;
            public isStacked(): boolean;
            public constructor(label: string);
            public setHighLightAlpha(alpha: number): void;
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public setBarBorderWidth(width: number): void;
            public getStackLabels(): androidNative.Array<string>;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public calcMinMax(e: com.github.mikephil.charting.data.BarEntry): void;
            public getBarShadowColor(): number;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.BarEntry>;
            public getBarBorderColor(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getStackSize(): number;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getEntryCountStacks(): number;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public copy(barDataSet: com.github.mikephil.charting.data.BarDataSet): void;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public setBarBorderColor(color: number): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public getHighLightAlpha(): number;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.BarEntry>, label: string);
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public setVisible(param0: boolean): void;
            public getBarBorderWidth(): number;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BarEntry extends com.github.mikephil.charting.data.Entry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BarEntry>;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(x: number, vals: androidNative.Array<number>, data: any);
            public constructor(x: number, vals: androidNative.Array<number>, icon: globalAndroid.graphics.drawable.Drawable);
            public setVals(vals: androidNative.Array<number>): void;
            public getRanges(): androidNative.Array<com.github.mikephil.charting.highlight.Range>;
            public constructor(y: number, data: any);
            public getSumBelow(stackIndex: number): number;
            public getNegativeSum(): number;
            public getPositiveSum(): number;
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(y: number);
            public constructor(in_: globalAndroid.os.Parcel);
            public constructor();
            public constructor(x: number, vals: androidNative.Array<number>, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(x: number, y: number, data: any);
            public constructor(x: number, y: number);
            public isStacked(): boolean;
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public copy(): com.github.mikephil.charting.data.BarEntry;
            public constructor(x: number, vals: androidNative.Array<number>);
            public getYVals(): androidNative.Array<number>;
            /** @deprecated */
            public getBelowSum(stackIndex: number): number;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public getY(): number;
            public calcRanges(): void;
            public copy(): com.github.mikephil.charting.data.Entry;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class BarLineScatterCandleBubbleData<T> extends com.github.mikephil.charting.data.ChartData<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public constructor(sets: java.util.List<any>);
            public constructor(sets: androidNative.Array<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class BarLineScatterCandleBubbleDataSet<T> extends com.github.mikephil.charting.data.DataSet<any> implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>>;
            public mHighLightColor: number;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public constructor(yVals: java.util.List<any>, label: string);
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public getYMax(): number;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setHighLightColor(color: number): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(): com.github.mikephil.charting.data.DataSet<any>;
            public setVisible(param0: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class BaseDataSet<T> extends com.github.mikephil.charting.interfaces.datasets.IDataSet<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BaseDataSet<any>>;
            public mColors: java.util.List<java.lang.Integer>;
            public mGradientColor: com.github.mikephil.charting.model.GradientColor;
            public mGradientColors: java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public mValueColors: java.util.List<java.lang.Integer>;
            public mAxisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
            public mHighlightEnabled: boolean;
            public mValueFormatter: com.github.mikephil.charting.formatter.ValueFormatter;
            public mValueTypeface: globalAndroid.graphics.Typeface;
            public mDrawValues: boolean;
            public mDrawIcons: boolean;
            public mIconsOffset: com.github.mikephil.charting.utils.MPPointF;
            public mValueTextSize: number;
            public mVisible: boolean;
            public addColor(color: number): void;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public setValueTypeface(tf: globalAndroid.graphics.Typeface): void;
            public setValueTextColor(color: number): void;
            public setGradientColors(gradientColors: java.util.List<com.github.mikephil.charting.model.GradientColor>): void;
            public setDrawValues(enabled: boolean): void;
            public getXMax(): number;
            public setValueFormatter(f: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public calcMinMaxY(param0: number, param1: number): void;
            public getColor(index: number): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getValueTextColor(index: number): number;
            public getValueTextSize(): number;
            public setValueTextSize(param0: number): void;
            public getYMin(): number;
            public constructor();
            public getYMax(): number;
            public setColor(color: number): void;
            public setColors(colors: androidNative.Array<number>): void;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public setFormLineDashEffect(dashPathEffect: globalAndroid.graphics.DashPathEffect): void;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public setLabel(label: string): void;
            public getFormLineWidth(): number;
            public setValueTextSize(size: number): void;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public contains(this_: any): boolean;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public setIconsOffset(offsetDp: com.github.mikephil.charting.utils.MPPointF): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public setColors(colors: java.util.List<java.lang.Integer>): void;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public setVisible(visible: boolean): void;
            public getIndexInEntries(this_: number): number;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public setFormLineWidth(formLineWidth: number): void;
            public setColors(this_: androidNative.Array<number>, colors: number): void;
            public setForm(form: com.github.mikephil.charting.components.Legend.LegendForm): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public setColor(color: number, alpha: number): void;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getXMin(): number;
            public setGradientColor(startColor: number, endColor: number): void;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setFormSize(formSize: number): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public resetColors(): void;
            public addEntry(param0: any): boolean;
            public setAxisDependency(dependency: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public isDrawIconsEnabled(): boolean;
            public removeEntry(index: number): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getValueColors(): java.util.List<java.lang.Integer>;
            public removeEntryByXValue(xValue: number): boolean;
            public getFormSize(): number;
            public notifyDataSetChanged(): void;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public setHighlightEnabled(enabled: boolean): void;
            public setColors(this_: androidNative.Array<number>, colors: globalAndroid.content.Context): void;
            public setVisible(param0: boolean): void;
            public setDrawIcons(enabled: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTextColors(colors: java.util.List<java.lang.Integer>): void;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class BaseEntry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BaseEntry>;
            public constructor();
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
            public getIcon(): globalAndroid.graphics.drawable.Drawable;
            public constructor(y: number);
            public getY(): number;
            public setData(data: any): void;
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public getData(): any;
            public setY(y: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BubbleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleData>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public constructor(sets: java.util.List<any>);
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>);
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>);
            public setHighlightCircleWidth(this_: number): void;
            public constructor(sets: androidNative.Array<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BubbleDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BubbleEntry> implements com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleDataSet>;
            public mMaxSize: number;
            public mNormalizeSize: boolean;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getHighlightCircleWidth(): number;
            public isNormalizeSizeEnabled(): boolean;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public getYMax(): number;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public setNormalizeSizeEnabled(normalizeSize: boolean): void;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public copy(bubbleDataSet: com.github.mikephil.charting.data.BubbleDataSet): void;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public getMaxSize(): number;
            public setHighlightCircleWidth(param0: number): void;
            public calcMinMax(): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.BubbleEntry>, label: string);
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.BubbleEntry>;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public calcMinMax(e: com.github.mikephil.charting.data.BubbleEntry): void;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public setHighlightCircleWidth(width: number): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public setVisible(param0: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class BubbleEntry extends com.github.mikephil.charting.data.Entry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleEntry>;
            public constructor(in_: globalAndroid.os.Parcel);
            public constructor();
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(x: number, y: number, size: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(x: number, y: number);
            public constructor(x: number, y: number, data: any);
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public setSize(size: number): void;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public getSize(): number;
            public constructor(x: number, y: number, size: number);
            public copy(): com.github.mikephil.charting.data.BubbleEntry;
            public constructor(y: number);
            public constructor(x: number, y: number, size: number, data: any);
            public constructor(x: number, y: number, size: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public copy(): com.github.mikephil.charting.data.Entry;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class CandleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.CandleData>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public constructor(sets: java.util.List<any>);
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>);
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>);
            public constructor(sets: androidNative.Array<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class CandleDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<com.github.mikephil.charting.data.CandleEntry> implements com.github.mikephil.charting.interfaces.datasets.ICandleDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.CandleDataSet>;
            public mIncreasingPaintStyle: globalAndroid.graphics.Paint.Style;
            public mDecreasingPaintStyle: globalAndroid.graphics.Paint.Style;
            public mNeutralColor: number;
            public mIncreasingColor: number;
            public mDecreasingColor: number;
            public mShadowColor: number;
            public getColor(): number;
            public getIndexInEntries(param0: number): number;
            public getXMax(): number;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public setShowCandleBar(showCandleBar: boolean): void;
            public removeEntry(param0: any): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public setShadowColor(shadowColor: number): void;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getShadowColor(): number;
            public constructor();
            public setDecreasingColor(color: number): void;
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public copy(candleDataSet: com.github.mikephil.charting.data.CandleDataSet): void;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public calcMinMaxY(e: any): void;
            public removeFirst(): boolean;
            public setNeutralColor(color: number): void;
            public getColors(): java.util.List<java.lang.Integer>;
            public setIncreasingColor(color: number): void;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public setDecreasingPaintStyle(decreasingPaintStyle: globalAndroid.graphics.Paint.Style): void;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public calcMinMax(): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getHighLightColor(): number;
            public getXMin(): number;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public addEntry(param0: any): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public calcMinMaxY(this_: number, fromX: number): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.CandleEntry>, label: string);
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
            public setShadowColorSameAsCandle(shadowColorSameAsCandle: boolean): void;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public calcMinMaxY(param0: number, param1: number): void;
            public getColor(index: number): number;
            public needsFormatter(): boolean;
            public setBarSpace(space: number): void;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getYMin(): number;
            public getShowCandleBar(): boolean;
            public getYMax(): number;
            public getIncreasingColor(): number;
            public constructor(label: string);
            public getNeutralColor(): number;
            public getColor(param0: number): number;
            public addEntryOrdered(param0: any): void;
            public clear(): void;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public calcMinMaxY(e: com.github.mikephil.charting.data.CandleEntry): void;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
            public getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.CandleEntry>;
            public getValueTextColor(): number;
            public getShadowWidth(): number;
            public getShadowColorSameAsCandle(): boolean;
            public getBarSpace(): number;
            public isVisible(): boolean;
            public getDecreasingColor(): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public setDrawValues(param0: boolean): void;
            public calcMinMax(e: com.github.mikephil.charting.data.CandleEntry): void;
            public setShadowWidth(width: number): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getFormSize(): number;
            public removeLast(): boolean;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public setIncreasingPaintStyle(paintStyle: globalAndroid.graphics.Paint.Style): void;
            public setVisible(param0: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class CandleEntry extends com.github.mikephil.charting.data.Entry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.CandleEntry>;
            public getOpen(): number;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public setLow(mShadowLow: number): void;
            public copy(): com.github.mikephil.charting.data.CandleEntry;
            public getClose(): number;
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(y: number);
            public constructor(in_: globalAndroid.os.Parcel);
            public constructor();
            public constructor(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: globalAndroid.graphics.drawable.Drawable);
            public getLow(): number;
            public getHigh(): number;
            public constructor(x: number, y: number);
            public constructor(x: number, y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public getShadowRange(): number;
            public setHigh(mShadowHigh: number): void;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public getBodyRange(): number;
            public getY(): number;
            public setClose(mClose: number): void;
            public constructor(x: number, shadowH: number, shadowL: number, open: number, close: number, data: any);
            public constructor(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(x: number, shadowH: number, shadowL: number, open: number, close: number);
            public copy(): com.github.mikephil.charting.data.Entry;
            public setOpen(mOpen: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class ChartData<T> extends java.lang.Object {
            public static class: java.lang.Class<com.github.mikephil.charting.data.ChartData<any>>;
            public mYMax: number;
            public mYMin: number;
            public mXMax: number;
            public mXMin: number;
            public mLeftAxisMax: number;
            public mLeftAxisMin: number;
            public mRightAxisMax: number;
            public mRightAxisMin: number;
            public mDataSets: java.util.List<T>;
            public getDataSetIndexByLabel(i: java.util.List<T>, this_: string, dataSets: boolean): number;
            public getDataSetByLabel(label: string, ignorecase: boolean): T;
            public removeEntry(xValue: number, dataSetIndex: number): boolean;
            public addDataSet(d: T): void;
            public getXMax(): number;
            public removeEntry(this_: com.github.mikephil.charting.data.Entry, e: number): boolean;
            public getDataSetByIndex(index: number): T;
            public getIndexOfDataSet(dataSet: T): number;
            public getEntryCount(): number;
            public getMaxEntryCountSet(): T;
            public addEntry(this_: com.github.mikephil.charting.data.Entry, e: number): void;
            public constructor(sets: java.util.List<T>);
            public getDataSetForEntry(set: com.github.mikephil.charting.data.Entry): T;
            public getColors(): androidNative.Array<number>;
            public setValueTypeface(this_: globalAndroid.graphics.Typeface): void;
            public getDataSetCount(): number;
            public getYMax(axis: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
            public getDataSetLabels(): androidNative.Array<string>;
            public setValueTextColors(this_: java.util.List<java.lang.Integer>): void;
            public setValueTextSize(this_: number): void;
            public calcMinMax(): void;
            public removeDataSet(index: number): boolean;
            public setValueFormatter(this_: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public removeDataSet(d: T): boolean;
            public getDataSets(): java.util.List<T>;
            public getYMin(axis: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
            public calcMinMax(d: T): void;
            public isHighlightEnabled(): boolean;
            public constructor(dataSets: androidNative.Array<T>);
            public getYMin(): number;
            public constructor();
            public getXMin(): number;
            public getYMax(): number;
            public clearValues(): void;
            public getEntryForHighlight(highlight: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
            public getFirstRight(this_: java.util.List<T>): T;
            public setDrawValues(this_: boolean): void;
            public setValueTextColor(this_: number): void;
            public contains(this_: T): boolean;
            public calcMinMaxY(this_: number, fromX: number): void;
            public setHighlightEnabled(this_: boolean): void;
            public getFirstLeft(this_: java.util.List<T>): T;
            public calcMinMax(e: com.github.mikephil.charting.data.Entry, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public notifyDataChanged(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class CombinedData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.CombinedData>;
            public getDataSetByHighlight(highlight: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>;
            /** @deprecated */
            public removeDataSet(index: number): boolean;
            /** @deprecated */
            public removeEntry(e: com.github.mikephil.charting.data.Entry, dataSetIndex: number): boolean;
            public removeEntry(xValue: number, dataSetIndex: number): boolean;
            public getEntryForHighlight(this_: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
            public calcMinMax(d: any): void;
            public setData(data: com.github.mikephil.charting.data.BubbleData): void;
            public setData(data: com.github.mikephil.charting.data.CandleData): void;
            public calcMinMax(): void;
            public removeDataSet(index: number): boolean;
            public removeDataSet(d: any): boolean;
            public setData(data: com.github.mikephil.charting.data.ScatterData): void;
            public getDataByIndex(index: number): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public setData(data: com.github.mikephil.charting.data.LineData): void;
            public getBarData(): com.github.mikephil.charting.data.BarData;
            public getLineData(): com.github.mikephil.charting.data.LineData;
            public constructor();
            public getCandleData(): com.github.mikephil.charting.data.CandleData;
            public removeDataSet(this_: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): boolean;
            /** @deprecated */
            public removeEntry(xValue: number, dataSetIndex: number): boolean;
            public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
            public constructor(sets: androidNative.Array<any>);
            public getAllData(): java.util.List<com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor(sets: java.util.List<any>);
            public getScatterData(): com.github.mikephil.charting.data.ScatterData;
            public getDataIndex(data: com.github.mikephil.charting.data.ChartData<any>): number;
            public setData(data: com.github.mikephil.charting.data.BarData): void;
            public calcMinMax(e: com.github.mikephil.charting.data.Entry, axis: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public notifyDataChanged(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class DataSet<T> extends com.github.mikephil.charting.data.BaseDataSet<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.DataSet<any>>;
            public mValues: java.util.List<any>;
            public mYMax: number;
            public mYMin: number;
            public mXMax: number;
            public mXMin: number;
            public getEntriesForXValue(entry: number): java.util.List<any>;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryForIndex(index: number): any;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public addEntryOrdered(this_: any): void;
            public getIndexInEntries(param0: number): number;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public calcMinMaxX(e: any): void;
            public getColor(index: number): number;
            public setLabel(param0: string): void;
            public removeEntry(e: any): boolean;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public addEntry(e: any): boolean;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public getYMax(): number;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public toString(): string;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public getValues(): java.util.List<any>;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getEntryIndex(d1: number, d2: number, ad1: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public constructor(values: java.util.List<any>, label: string);
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public toSimpleString(): string;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public calcMinMaxY(this_: number, fromX: number): void;
            public copy(): com.github.mikephil.charting.data.DataSet<any>;
            public getEntryForXValue(xValue: number, closestToY: number, rounding: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public setVisible(param0: boolean): void;
            public setValues(values: java.util.List<any>): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
          export module DataSet {
            export class Rounding {
              public static class: java.lang.Class<com.github.mikephil.charting.data.DataSet.Rounding>;
              public static UP: com.github.mikephil.charting.data.DataSet.Rounding;
              public static DOWN: com.github.mikephil.charting.data.DataSet.Rounding;
              public static CLOSEST: com.github.mikephil.charting.data.DataSet.Rounding;
              public static values(): androidNative.Array<com.github.mikephil.charting.data.DataSet.Rounding>;
              public static valueOf(name: string): com.github.mikephil.charting.data.DataSet.Rounding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class Entry extends com.github.mikephil.charting.data.BaseEntry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.Entry>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.github.mikephil.charting.data.Entry>;
            public constructor(in_: globalAndroid.os.Parcel);
            public constructor();
            public setX(x: number): void;
            public describeContents(): number;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public getX(): number;
            public equalTo(e: com.github.mikephil.charting.data.Entry): boolean;
            public constructor(x: number, y: number);
            public constructor(x: number, y: number, data: any);
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public toString(): string;
            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(y: number);
            public copy(): com.github.mikephil.charting.data.Entry;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class LineData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.ILineDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.LineData>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public constructor(sets: java.util.List<any>);
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>);
            public constructor(sets: androidNative.Array<any>);
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class LineDataSet extends com.github.mikephil.charting.data.LineRadarDataSet<com.github.mikephil.charting.data.Entry> implements com.github.mikephil.charting.interfaces.datasets.ILineDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.LineDataSet>;
            public getCircleRadius(): number;
            public getColor(): number;
            public getFillColor(): number;
            public getCircleHoleColor(): number;
            public getIndexInEntries(param0: number): number;
            public getXMax(): number;
            public setCircleColors(this_: androidNative.Array<number>, colors: globalAndroid.content.Context): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public setDrawCircles(enabled: boolean): void;
            public isDrawCirclesEnabled(): boolean;
            public setCircleColors(colors: java.util.List<java.lang.Integer>): void;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getValueTextColor(index: number): number;
            public setCircleColors(colors: androidNative.Array<number>): void;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public constructor();
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.Entry>;
            /** @deprecated */
            public setCircleSize(size: number): void;
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public calcMinMaxY(e: any): void;
            public removeFirst(): boolean;
            public copy(lineDataSet: com.github.mikephil.charting.data.LineDataSet): void;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getCircleColor(param0: number): number;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.Entry>, label: string);
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public calcMinMax(): void;
            public getCircleColor(index: number): number;
            public isDrawFilledEnabled(): boolean;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getHighLightColor(): number;
            public getXMin(): number;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public addEntry(param0: any): boolean;
            public enableDashedLine(lineLength: number, spaceLength: number, phase: number): void;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getCircleHoleRadius(): number;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public setMode(mode: com.github.mikephil.charting.data.LineDataSet.Mode): void;
            public getCircleColors(): java.util.List<java.lang.Integer>;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
            public isDrawCircleHoleEnabled(): boolean;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public calcMinMaxY(param0: number, param1: number): void;
            public getColor(index: number): number;
            public disableDashedLine(): void;
            /** @deprecated */
            public isDrawCubicEnabled(): boolean;
            public resetCircleColors(): void;
            public needsFormatter(): boolean;
            public setCircleHoleColor(color: number): void;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getYMin(): number;
            public getYMax(): number;
            public setDrawFilled(param0: boolean): void;
            public constructor(label: string);
            public setCubicIntensity(intensity: number): void;
            public setCircleColor(color: number): void;
            public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
            public getColor(param0: number): number;
            public addEntryOrdered(param0: any): void;
            /** @deprecated */
            public getCircleSize(): number;
            public clear(): void;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public setCircleHoleRadius(holeRadius: number): void;
            public getFillAlpha(): number;
            public getValueTextColor(): number;
            public setDrawCircleHole(enabled: boolean): void;
            public getCircleColorCount(): number;
            public copy(lineRadarDataSet: com.github.mikephil.charting.data.LineRadarDataSet<any>): void;
            public isVisible(): boolean;
            public setFillFormatter(formatter: com.github.mikephil.charting.formatter.IFillFormatter): void;
            public isDashedLineEnabled(): boolean;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            /** @deprecated */
            public isDrawSteppedEnabled(): boolean;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public setDrawValues(param0: boolean): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public setCircleRadius(radius: number): void;
            public getFormSize(): number;
            public removeLast(): boolean;
            public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public getCubicIntensity(): number;
            public getLineWidth(): number;
            public setVisible(param0: boolean): void;
          }
          export module LineDataSet {
            export class Mode {
              public static class: java.lang.Class<com.github.mikephil.charting.data.LineDataSet.Mode>;
              public static LINEAR: com.github.mikephil.charting.data.LineDataSet.Mode;
              public static STEPPED: com.github.mikephil.charting.data.LineDataSet.Mode;
              public static CUBIC_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
              public static HORIZONTAL_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
              public static values(): androidNative.Array<com.github.mikephil.charting.data.LineDataSet.Mode>;
              public static valueOf(name: string): com.github.mikephil.charting.data.LineDataSet.Mode;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class LineRadarDataSet<T> extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any> implements com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.LineRadarDataSet<any>>;
            public mFillDrawable: globalAndroid.graphics.drawable.Drawable;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getFillColor(): number;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public setFillColor(color: number): void;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public constructor(yVals: java.util.List<any>, label: string);
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public setDrawFilled(filled: boolean): void;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public getYMax(): number;
            public setFillDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public setDrawFilled(param0: boolean): void;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public setLineWidth(width: number): void;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getFillAlpha(): number;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public copy(lineRadarDataSet: com.github.mikephil.charting.data.LineRadarDataSet<any>): void;
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public setFillAlpha(alpha: number): void;
            public calcMinMax(): void;
            public isDrawFilledEnabled(): boolean;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public getLineWidth(): number;
            public copy(): com.github.mikephil.charting.data.DataSet<any>;
            public setVisible(param0: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export abstract class LineScatterCandleRadarDataSet<T> extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any> implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>>;
            public mDrawVerticalHighlightIndicator: boolean;
            public mDrawHorizontalHighlightIndicator: boolean;
            public mHighlightLineWidth: number;
            public mHighlightDashPathEffect: globalAndroid.graphics.DashPathEffect;
            public isDashedHighlightLineEnabled(): boolean;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public constructor(yVals: java.util.List<any>, label: string);
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public setDrawHighlightIndicators(enabled: boolean): void;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public enableDashedHighlightLine(lineLength: number, spaceLength: number, phase: number): void;
            public getYMax(): number;
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public disableDashedHighlightLine(): void;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public setDrawVerticalHighlightIndicator(enabled: boolean): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public setDrawHorizontalHighlightIndicator(enabled: boolean): void;
            public setHighlightLineWidth(width: number): void;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public copy(): com.github.mikephil.charting.data.DataSet<any>;
            public setVisible(param0: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class PieData extends com.github.mikephil.charting.data.ChartData<com.github.mikephil.charting.interfaces.datasets.IPieDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.PieData>;
            public constructor(dataSets: androidNative.Array<any>);
            public getDataSetByIndex(index: number): any;
            public constructor();
            public constructor(sets: java.util.List<any>);
            public getDataSetByLabel(label: string, ignorecase: boolean): any;
            public setDataSet(dataSet: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
            public getDataSet(): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
            public getDataSetByLabel(label: string, ignorecase: boolean): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
            public constructor(dataSet: com.github.mikephil.charting.interfaces.datasets.IPieDataSet);
            public getYValueSum(): number;
            public getDataSetByIndex(index: number): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
            public getEntryForHighlight(highlight: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class PieDataSet extends com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.PieEntry> implements com.github.mikephil.charting.interfaces.datasets.IPieDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.PieDataSet>;
            public isValueLineVariableLength(): boolean;
            public getColor(): number;
            public getIndexInEntries(param0: number): number;
            public getXMax(): number;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getSliceSpace(): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getValueTextColor(index: number): number;
            public getSelectionShift(): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public isUsingSliceColorAsValueLineColor(): boolean;
            public constructor();
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getValueLineColor(): number;
            public setValueLineWidth(valueLineWidth: number): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.PieEntry>, label: string);
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public getValueLinePart1Length(): number;
            public calcMinMaxY(e: any): void;
            public removeFirst(): boolean;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public setAutomaticallyDisableSliceSpacing(autoDisable: boolean): void;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public removeEntryByXValue(param0: number): boolean;
            public setValueLineColor(valueLineColor: number): void;
            public calcMinMax(): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public setValueLinePart1OffsetPercentage(valueLinePart1OffsetPercentage: number): void;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public setYValuePosition(yValuePosition: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
            public getValueTextColor(param0: number): number;
            public getXMin(): number;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public addEntry(param0: any): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getValueLineWidth(): number;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
            public calcMinMax(e: com.github.mikephil.charting.data.PieEntry): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public calcMinMaxY(param0: number, param1: number): void;
            public isAutomaticallyDisableSliceSpacingEnabled(): boolean;
            public getColor(index: number): number;
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.PieEntry>;
            public needsFormatter(): boolean;
            public getYMin(): number;
            public getYMax(): number;
            public setSliceSpace(spaceDp: number): void;
            public setUsingSliceColorAsValueLineColor(usingSliceColorAsValueLineColor: boolean): void;
            public constructor(label: string);
            public setSelectionShift(shift: number): void;
            public getColor(param0: number): number;
            public addEntryOrdered(param0: any): void;
            public clear(): void;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public setValueLinePart2Length(valueLinePart2Length: number): void;
            public getValueTextColor(): number;
            public setValueLinePart1Length(valueLinePart1Length: number): void;
            public isVisible(): boolean;
            public getValueLinePart1OffsetPercentage(): number;
            public getValueLinePart2Length(): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public setDrawValues(param0: boolean): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public setXValuePosition(xValuePosition: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueLineVariableLength(valueLineVariableLength: boolean): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
            public copy(pieDataSet: com.github.mikephil.charting.data.PieDataSet): void;
            public setVisible(param0: boolean): void;
          }
          export module PieDataSet {
            export class ValuePosition {
              public static class: java.lang.Class<com.github.mikephil.charting.data.PieDataSet.ValuePosition>;
              public static INSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
              public static OUTSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
              public static values(): androidNative.Array<com.github.mikephil.charting.data.PieDataSet.ValuePosition>;
              public static valueOf(name: string): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class PieEntry extends com.github.mikephil.charting.data.Entry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.PieEntry>;
            public constructor(in_: globalAndroid.os.Parcel);
            public constructor(value: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor();
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(value: number, data: any);
            public constructor(x: number, y: number);
            public constructor(x: number, y: number, data: any);
            public getLabel(): string;
            public constructor(value: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(value: number, label: string, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            /** @deprecated */
            public setX(x: number): void;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            /** @deprecated */
            public getX(): number;
            public constructor(value: number, label: string, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public copy(): com.github.mikephil.charting.data.PieEntry;
            public constructor(value: number, label: string, data: any);
            public constructor(value: number);
            public constructor(value: number, label: string);
            public setLabel(label: string): void;
            public copy(): com.github.mikephil.charting.data.Entry;
            public getValue(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class RadarData extends com.github.mikephil.charting.data.ChartData<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.RadarData>;
            public setLabels(labels: java.util.List<string>): void;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor();
            public setLabels(labels: androidNative.Array<string>): void;
            public constructor(sets: java.util.List<any>);
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>);
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>);
            public getEntryForHighlight(highlight: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
            public getLabels(): java.util.List<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class RadarDataSet extends com.github.mikephil.charting.data.LineRadarDataSet<com.github.mikephil.charting.data.RadarEntry> implements com.github.mikephil.charting.interfaces.datasets.IRadarDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.RadarDataSet>;
            public mDrawHighlightCircleEnabled: boolean;
            public mHighlightCircleFillColor: number;
            public mHighlightCircleStrokeColor: number;
            public mHighlightCircleStrokeAlpha: number;
            public mHighlightCircleInnerRadius: number;
            public mHighlightCircleOuterRadius: number;
            public mHighlightCircleStrokeWidth: number;
            public getColor(): number;
            public getFillColor(): number;
            public getIndexInEntries(param0: number): number;
            public getHighlightCircleStrokeWidth(): number;
            public getXMax(): number;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getHighlightCircleStrokeAlpha(): number;
            public setHighlightCircleStrokeWidth(strokeWidth: number): void;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public constructor();
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public isDrawHighlightCircleEnabled(): boolean;
            public calcMinMaxY(e: any): void;
            public removeFirst(): boolean;
            public getColors(): java.util.List<java.lang.Integer>;
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.RadarEntry>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public setHighlightCircleStrokeAlpha(alpha: number): void;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public getHighlightCircleStrokeColor(): number;
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public calcMinMax(): void;
            public isDrawFilledEnabled(): boolean;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getHighLightColor(): number;
            public getXMin(): number;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public addEntry(param0: any): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public copy(radarDataSet: com.github.mikephil.charting.data.RadarDataSet): void;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public setDrawHighlightCircleEnabled(enabled: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public calcMinMaxY(param0: number, param1: number): void;
            public getColor(index: number): number;
            public needsFormatter(): boolean;
            public setHighlightCircleFillColor(color: number): void;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getYMin(): number;
            public getYMax(): number;
            public getHighlightCircleInnerRadius(): number;
            public setDrawFilled(param0: boolean): void;
            public constructor(label: string);
            public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
            public getColor(param0: number): number;
            public setHighlightCircleOuterRadius(radius: number): void;
            public addEntryOrdered(param0: any): void;
            public clear(): void;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getFillAlpha(): number;
            public getHighlightCircleOuterRadius(): number;
            public getValueTextColor(): number;
            public copy(lineRadarDataSet: com.github.mikephil.charting.data.LineRadarDataSet<any>): void;
            public isVisible(): boolean;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public setHighlightCircleInnerRadius(radius: number): void;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public setDrawValues(param0: boolean): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public setHighlightCircleStrokeColor(color: number): void;
            public setDrawHighlightCircleEnabled(param0: boolean): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.RadarEntry>, label: string);
            public getFormSize(): number;
            public removeLast(): boolean;
            public getHighlightCircleFillColor(): number;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public getLineWidth(): number;
            public setVisible(param0: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class RadarEntry extends com.github.mikephil.charting.data.Entry {
            public static class: java.lang.Class<com.github.mikephil.charting.data.RadarEntry>;
            public constructor(in_: globalAndroid.os.Parcel);
            public copy(): com.github.mikephil.charting.data.RadarEntry;
            public constructor();
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            public constructor(value: number, data: any);
            public constructor(x: number, y: number);
            public constructor(x: number, y: number, data: any);
            public constructor(y: number, data: any);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable);
            /** @deprecated */
            public setX(x: number): void;
            public constructor(x: number, y: number, icon: globalAndroid.graphics.drawable.Drawable);
            public constructor(y: number, icon: globalAndroid.graphics.drawable.Drawable, data: any);
            /** @deprecated */
            public getX(): number;
            public constructor(value: number);
            public copy(): com.github.mikephil.charting.data.Entry;
            public getValue(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class ScatterData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet> {
            public static class: java.lang.Class<com.github.mikephil.charting.data.ScatterData>;
            public constructor(dataSets: androidNative.Array<any>);
            public constructor(dataSets: java.util.List<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>);
            public constructor();
            public constructor(sets: java.util.List<any>);
            public getGreatestShapeSize(): number;
            public constructor(sets: androidNative.Array<any>);
            public constructor(dataSets: androidNative.Array<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export class ScatterDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<com.github.mikephil.charting.data.Entry> implements com.github.mikephil.charting.interfaces.datasets.IScatterDataSet {
            public static class: java.lang.Class<com.github.mikephil.charting.data.ScatterDataSet>;
            public mShapeRenderer: com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
            public getColor(): number;
            public setValueTextColor(param0: number): void;
            public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
            public getIndexInEntries(param0: number): number;
            public getScatterShapeSize(): number;
            public copy(barLineScatterCandleBubbleDataSet: com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>): void;
            public static getRendererForShape(shape: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
            public getEntryForXValue(xValue: number, closestToY: number): any;
            public getXMax(): number;
            public calcMinMaxY(param0: number, param1: number): void;
            public getEntryIndex(e: com.github.mikephil.charting.data.Entry): number;
            public getColor(index: number): number;
            public setLabel(param0: string): void;
            public getEntryIndex(param0: any): number;
            public removeEntry(param0: any): boolean;
            public needsFormatter(): boolean;
            public setDrawIcons(param0: boolean): void;
            public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
            public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
            public isHorizontalHighlightIndicatorEnabled(): boolean;
            public getValueTextColor(index: number): number;
            public setValueTextSize(param0: number): void;
            public getValueTextSize(): number;
            public getYMin(): number;
            public constructor();
            public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.Entry>;
            public getYMax(): number;
            public isVerticalHighlightIndicatorEnabled(): boolean;
            public constructor(label: string);
            public getValueTypeface(): globalAndroid.graphics.Typeface;
            public getColor(param0: number): number;
            public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
            public addEntryOrdered(param0: any): void;
            public calcMinMaxY(e: any): void;
            public clear(): void;
            public removeFirst(): boolean;
            public setHighlightEnabled(param0: boolean): void;
            public getFormLineWidth(): number;
            public getColors(): java.util.List<java.lang.Integer>;
            public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
            public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
            public getEntryForXValue(param0: number, param1: number): any;
            public getLabel(): string;
            public calcMinMax(e: any): void;
            public getEntryCount(): number;
            public getValueTextColor(): number;
            public getEntriesForXValue(param0: number): java.util.List<any>;
            public getHighlightLineWidth(): number;
            public getGradientColor(index: number): com.github.mikephil.charting.model.GradientColor;
            public copy(dataSet: com.github.mikephil.charting.data.DataSet<any>): void;
            public constructor(yVals: java.util.List<com.github.mikephil.charting.data.Entry>, label: string);
            public setShapeRenderer(shapeRenderer: com.github.mikephil.charting.renderer.scatter.IShapeRenderer): void;
            public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
            public removeEntryByXValue(param0: number): boolean;
            public isVisible(): boolean;
            public calcMinMax(): void;
            public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
            public copy(scatterDataSet: com.github.mikephil.charting.data.ScatterDataSet): void;
            public isHighlightEnabled(): boolean;
            public removeEntry(param0: number): boolean;
            public getValueTextColor(param0: number): number;
            public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
            public setScatterShapeHoleRadius(holeRadius: number): void;
            public getScatterShapeHoleColor(): number;
            public getHighLightColor(): number;
            public getXMin(): number;
            public isDrawValuesEnabled(): boolean;
            public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
            public copy(baseDataSet: com.github.mikephil.charting.data.BaseDataSet<any>): void;
            public contains(param0: any): boolean;
            public setDrawValues(param0: boolean): void;
            public getScatterShapeHoleRadius(): number;
            public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
            public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
            public addEntry(param0: any): boolean;
            public removeEntry(index: number): boolean;
            public isDrawIconsEnabled(): boolean;
            public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
            public getFormSize(): number;
            public removeLast(): boolean;
            public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
            public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public copy(lineScatterCandleRadarDataSet: com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>): void;
            public setScatterShapeSize(size: number): void;
            public setScatterShape(shape: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): void;
            public setScatterShapeHoleColor(holeColor: number): void;
            public setVisible(param0: boolean): void;
            public getEntryForIndex(param0: number): any;
            public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module data {
          export module filter {
            export class Approximator {
              public static class: java.lang.Class<com.github.mikephil.charting.data.filter.Approximator>;
              public constructor();
              public reduceWithDouglasPeucker(i: androidNative.Array<number>, reduced1: number): androidNative.Array<number>;
            }
            export module Approximator {
              export class Line {
                public static class: java.lang.Class<com.github.mikephil.charting.data.filter.Approximator.Line>;
                public constructor(x1: com.github.mikephil.charting.data.filter.Approximator, y1: number, x2: number, y2: number, param4: number);
                public distance(x: number, y: number): number;
                public getPoints(): androidNative.Array<number>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module exception {
          export class DrawingDataSetNotCreatedException {
            public static class: java.lang.Class<com.github.mikephil.charting.exception.DrawingDataSetNotCreatedException>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class ColorFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.ColorFormatter>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.formatter.ColorFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): number });
            public constructor();
            public getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class DefaultAxisValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultAxisValueFormatter>;
            public mFormat: java.text.DecimalFormat;
            public digits: number;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor();
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getDecimalDigits(): number;
            public getFormattedValue(value: number): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
            public constructor(this_: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class DefaultFillFormatter extends com.github.mikephil.charting.formatter.IFillFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultFillFormatter>;
            public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
            public constructor();
            public getFillLinePosition(min: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, max: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class DefaultValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultValueFormatter>;
            public mFormat: java.text.DecimalFormat;
            public mDecimalDigits: number;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor();
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getDecimalDigits(): number;
            public getFormattedValue(value: number): string;
            public constructor(digits: number);
            public setup(this_: number): void;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class IAxisValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.IAxisValueFormatter>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.formatter.IAxisValueFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string });
            public constructor();
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class IFillFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.IFillFormatter>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.formatter.IFillFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number });
            public constructor();
            public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class IValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.IValueFormatter>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.formatter.IValueFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string });
            public constructor();
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class IndexAxisValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.IndexAxisValueFormatter>;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor();
            public constructor(values: androidNative.Array<string>);
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public setValues(values: androidNative.Array<string>): void;
            public getFormattedValue(value: number): string;
            public constructor(values: java.util.Collection<string>);
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
            public getValues(): androidNative.Array<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class LargeValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.LargeValueFormatter>;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor();
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public setSuffix(suffix: androidNative.Array<string>): void;
            public getDecimalDigits(): number;
            public getFormattedValue(value: number): string;
            public constructor(appendix: string);
            public setMaxLength(maxLength: number): void;
            public setAppendix(appendix: string): void;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class PercentFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.PercentFormatter>;
            public mFormat: java.text.DecimalFormat;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor();
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getPieLabel(value: number, pieEntry: com.github.mikephil.charting.data.PieEntry): string;
            public getFormattedValue(value: number): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public constructor(pieChart: com.github.mikephil.charting.charts.PieChart);
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export class StackedValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.StackedValueFormatter>;
            public constructor();
            public constructor(this_: boolean, drawWholeStack: string, suffix: number);
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getFormattedValue(value: number): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public getBarStackedLabel(this_: number, value: com.github.mikephil.charting.data.BarEntry): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module formatter {
          export abstract class ValueFormatter implements com.github.mikephil.charting.formatter.IAxisValueFormatter, com.github.mikephil.charting.formatter.IValueFormatter {
            public static class: java.lang.Class<com.github.mikephil.charting.formatter.ValueFormatter>;
            public getBarStackedLabel(value: number, stackedEntry: com.github.mikephil.charting.data.BarEntry): string;
            public constructor();
            public getBarLabel(barEntry: com.github.mikephil.charting.data.BarEntry): string;
            public getPieLabel(value: number, pieEntry: com.github.mikephil.charting.data.PieEntry): string;
            public getFormattedValue(value: number): string;
            public getAxisLabel(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getPointLabel(entry: com.github.mikephil.charting.data.Entry): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
            /** @deprecated */
            public getFormattedValue(value: number, entry: com.github.mikephil.charting.data.Entry, dataSetIndex: number, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler): string;
            public getCandleLabel(candleEntry: com.github.mikephil.charting.data.CandleEntry): string;
            /** @deprecated */
            public getFormattedValue(value: number, axis: com.github.mikephil.charting.components.AxisBase): string;
            public getRadarLabel(radarEntry: com.github.mikephil.charting.data.RadarEntry): string;
            public getBubbleLabel(bubbleEntry: com.github.mikephil.charting.data.BubbleEntry): string;
            /** @deprecated */
            public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class BarHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter<com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider> {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.BarHighlighter>;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
            public getHighlight(x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getClosestStackIndex(this_: androidNative.Array<com.github.mikephil.charting.highlight.Range>, ranges: number): number;
            public getDistance(x1: number, y1: number, x2: number, y2: number): number;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public getStackedHighlight(pixels: com.github.mikephil.charting.highlight.Highlight, stackedHigh: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, ranges: number, this_: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class ChartHighlighter<T> extends com.github.mikephil.charting.highlight.IHighlighter {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.ChartHighlighter<any>>;
            public mChart: any;
            public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
            public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
            public getValsForTouch(x: number, y: number): com.github.mikephil.charting.utils.MPPointD;
            public getHighlight(x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getHighlightForX(xVal: number, x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getDistance(x1: number, y1: number, x2: number, y2: number): number;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public getHighlightPos(h: com.github.mikephil.charting.highlight.Highlight): number;
            public getClosestHighlightByPixel(high: java.util.List<com.github.mikephil.charting.highlight.Highlight>, i: number, this_: number, closestValues: com.github.mikephil.charting.components.YAxis.AxisDependency, x: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
            public getMinimumDistance(high: java.util.List<com.github.mikephil.charting.highlight.Highlight>, i: number, this_: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
            public getHighlightsAtXValue(i: number, dataSetCount: number, this_: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
            public buildHighlights(pixels: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>, e: number, this_: number, set: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class CombinedHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter<com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider> implements com.github.mikephil.charting.highlight.IHighlighter {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.CombinedHighlighter>;
            public barHighlighter: com.github.mikephil.charting.highlight.BarHighlighter;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider, barChart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
            public getHighlightsAtXValue(high: number, dataSet: number, highs: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class Highlight {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.Highlight>;
            public getYPx(): number;
            public getDataIndex(): number;
            public constructor(x: number, y: number, dataSetIndex: number);
            public getX(): number;
            public getXPx(): number;
            public getAxis(): com.github.mikephil.charting.components.YAxis.AxisDependency;
            public getDrawX(): number;
            public equalTo(h: com.github.mikephil.charting.highlight.Highlight): boolean;
            public setDataIndex(mDataIndex: number): void;
            public isStacked(): boolean;
            public setDraw(x: number, y: number): void;
            public constructor(x: number, dataSetIndex: number, stackIndex: number);
            public toString(): string;
            public getDataSetIndex(): number;
            public getStackIndex(): number;
            public constructor(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, stackIndex: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency);
            public getDrawY(): number;
            public getY(): number;
            public constructor(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, axis: com.github.mikephil.charting.components.YAxis.AxisDependency);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class HorizontalBarHighlighter extends com.github.mikephil.charting.highlight.BarHighlighter {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.HorizontalBarHighlighter>;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
            public getHighlight(x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public getDistance(x1: number, y1: number, x2: number, y2: number): number;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
            public buildHighlights(pixels: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>, e: number, this_: number, set: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class IHighlighter {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.IHighlighter>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.highlight.IHighlighter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight });
            public constructor();
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class PieHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter<com.github.mikephil.charting.charts.PieChart> {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.PieHighlighter>;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
            public getClosestHighlight(index: number, x: number, y: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: com.github.mikephil.charting.charts.PieChart);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export abstract class PieRadarHighlighter<T> extends com.github.mikephil.charting.highlight.IHighlighter {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.PieRadarHighlighter<any>>;
            public mChart: any;
            public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
            public getHighlight(index: number, this_: number): com.github.mikephil.charting.highlight.Highlight;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: any);
            public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class RadarHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter<com.github.mikephil.charting.charts.RadarChart> {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.RadarHighlighter>;
            public getHighlightsAtIndex(entry: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
            public getClosestHighlight(cdistance: number, i: number, this_: number): com.github.mikephil.charting.highlight.Highlight;
            public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
            public constructor(chart: com.github.mikephil.charting.charts.RadarChart);
            public constructor(chart: any);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module highlight {
          export class Range {
            public static class: java.lang.Class<com.github.mikephil.charting.highlight.Range>;
            public from: number;
            public to: number;
            public isSmaller(value: number): boolean;
            public constructor(from: number, to: number);
            public isLarger(value: number): boolean;
            public contains(value: number): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class BarDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getBarData(): com.github.mikephil.charting.data.BarData;
                isDrawBarShadowEnabled(): boolean;
                isDrawValueAboveBarEnabled(): boolean;
                isHighlightFullBarEnabled(): boolean;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public isHighlightFullBarEnabled(): boolean;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getBarData(): com.github.mikephil.charting.data.BarData;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public isDrawBarShadowEnabled(): boolean;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
              public isDrawValueAboveBarEnabled(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class BarLineScatterCandleBubbleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.ChartInterface {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class BubbleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getBubbleData(): com.github.mikephil.charting.data.BubbleData;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class CandleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCandleData(): com.github.mikephil.charting.data.CandleData;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
              public getCandleData(): com.github.mikephil.charting.data.CandleData;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class ChartInterface {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.ChartInterface>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ChartInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getXChartMin(): number; getXChartMax(): number; getXRange(): number; getYChartMin(): number; getYChartMax(): number; getMaxHighlightDistance(): number; getWidth(): number; getHeight(): number; getCenterOfView(): com.github.mikephil.charting.utils.MPPointF; getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF; getContentRect(): globalAndroid.graphics.RectF; getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter; getData(): com.github.mikephil.charting.data.ChartData<any>; getMaxVisibleCount(): number });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getXRange(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class CombinedDataProvider implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCombinedData(): com.github.mikephil.charting.data.CombinedData;
                getLineData(): com.github.mikephil.charting.data.LineData;
                getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
                getBarData(): com.github.mikephil.charting.data.BarData;
                isDrawBarShadowEnabled(): boolean;
                isDrawValueAboveBarEnabled(): boolean;
                isHighlightFullBarEnabled(): boolean;
                getBubbleData(): com.github.mikephil.charting.data.BubbleData;
                getCandleData(): com.github.mikephil.charting.data.CandleData;
                getScatterData(): com.github.mikephil.charting.data.ScatterData;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public isHighlightFullBarEnabled(): boolean;
              public getScatterData(): com.github.mikephil.charting.data.ScatterData;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getBarData(): com.github.mikephil.charting.data.BarData;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public isDrawBarShadowEnabled(): boolean;
              public getYChartMax(): number;
              public getCandleData(): com.github.mikephil.charting.data.CandleData;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getLineData(): com.github.mikephil.charting.data.LineData;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
              public isDrawValueAboveBarEnabled(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class LineDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getLineData(): com.github.mikephil.charting.data.LineData;
                getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getLineData(): com.github.mikephil.charting.data.LineData;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module dataprovider {
            export class ScatterDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getScatterData(): com.github.mikephil.charting.data.ScatterData;
                getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
                isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
                getLowestVisibleX(): number;
                getHighestVisibleX(): number;
                getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
                getXChartMin(): number;
                getXChartMax(): number;
                getXRange(): number;
                getYChartMin(): number;
                getYChartMax(): number;
                getMaxHighlightDistance(): number;
                getWidth(): number;
                getHeight(): number;
                getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
                getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
                getContentRect(): globalAndroid.graphics.RectF;
                getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                getData(): com.github.mikephil.charting.data.ChartData<any>;
                getMaxVisibleCount(): number;
              });
              public constructor();
              public getWidth(): number;
              public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
              public getScatterData(): com.github.mikephil.charting.data.ScatterData;
              public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
              public getXChartMin(): number;
              public getContentRect(): globalAndroid.graphics.RectF;
              public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
              public getData(): com.github.mikephil.charting.data.ChartData<any>;
              public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
              public getHeight(): number;
              public getMaxHighlightDistance(): number;
              public getXChartMax(): number;
              public getYChartMin(): number;
              public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
              public getLowestVisibleX(): number;
              public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public getYChartMax(): number;
              public getMaxVisibleCount(): number;
              public getHighestVisibleX(): number;
              public getXRange(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IBarDataSet extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BarEntry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                isStacked(): boolean;
                getStackSize(): number;
                getBarShadowColor(): number;
                getBarBorderWidth(): number;
                getBarBorderColor(): number;
                getHighLightAlpha(): number;
                getStackLabels(): androidNative.Array<string>;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public isStacked(): boolean;
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getBarBorderWidth(): number;
              public getColor(param0: number): number;
              public getStackLabels(): androidNative.Array<string>;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public getHighLightAlpha(): number;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getBarShadowColor(): number;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getBarBorderColor(): number;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getStackSize(): number;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IBarLineScatterCandleBubbleDataSet<T> extends com.github.mikephil.charting.interfaces.datasets.IDataSet<any> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IBubbleDataSet extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BubbleEntry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setHighlightCircleWidth(param0: number): void;
                getMaxSize(): number;
                isNormalizeSizeEnabled(): boolean;
                getHighlightCircleWidth(): number;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public setHighlightCircleWidth(param0: number): void;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public getMaxSize(): number;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getHighlightCircleWidth(): number;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public isNormalizeSizeEnabled(): boolean;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class ICandleDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<com.github.mikephil.charting.data.CandleEntry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ICandleDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getBarSpace(): number;
                getShowCandleBar(): boolean;
                getShadowWidth(): number;
                getShadowColor(): number;
                getNeutralColor(): number;
                getIncreasingColor(): number;
                getDecreasingColor(): number;
                getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
                getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
                getShadowColorSameAsCandle(): boolean;
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public getNeutralColor(): number;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public getShadowWidth(): number;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getShowCandleBar(): boolean;
              public getDecreasingColor(): number;
              public getBarSpace(): number;
              public getShadowColor(): number;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getIncreasingColor(): number;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
              public removeEntry(param0: number): boolean;
              public getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getShadowColorSameAsCandle(): boolean;
              public getIndexInEntries(param0: number): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IDataSet<T> extends java.lang.Object {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IDataSet<any>>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): T;
                getEntryForXValue(param0: number, param1: number): T;
                getEntriesForXValue(param0: number): java.util.List<T>;
                getEntryForIndex(param0: number): T;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: T): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: T): boolean;
                addEntryOrdered(param0: T): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: T): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: T): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getColor(param0: number): number;
              public removeLast(): boolean;
              public addEntry(param0: T): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public getEntryForIndex(param0: number): T;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): T;
              public getEntryForXValue(param0: number, param1: number): T;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public addEntryOrdered(param0: T): void;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public setDrawValues(param0: boolean): void;
              public removeFirst(): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getEntriesForXValue(param0: number): java.util.List<T>;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public removeEntry(param0: T): boolean;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public contains(param0: T): boolean;
              public clear(): void;
              public getColors(): java.util.List<java.lang.Integer>;
              public getEntryIndex(param0: T): number;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class ILineDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<com.github.mikephil.charting.data.Entry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
                getCubicIntensity(): number;
                isDrawCubicEnabled(): boolean;
                isDrawSteppedEnabled(): boolean;
                getCircleRadius(): number;
                getCircleHoleRadius(): number;
                getCircleColor(param0: number): number;
                getCircleColorCount(): number;
                isDrawCirclesEnabled(): boolean;
                getCircleHoleColor(): number;
                isDrawCircleHoleEnabled(): boolean;
                getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
                isDashedLineEnabled(): boolean;
                getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
                getFillColor(): number;
                getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
                getFillAlpha(): number;
                getLineWidth(): number;
                isDrawFilledEnabled(): boolean;
                setDrawFilled(param0: boolean): void;
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getCircleHoleColor(): number;
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              /** @deprecated */
              public isDrawSteppedEnabled(): boolean;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public setDrawFilled(param0: boolean): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public getCircleHoleRadius(): number;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public isDrawFilledEnabled(): boolean;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public getCircleColorCount(): number;
              public isDrawCirclesEnabled(): boolean;
              public addEntry(param0: any): boolean;
              /** @deprecated */
              public isDrawCubicEnabled(): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public getCircleColor(param0: number): number;
              public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getCubicIntensity(): number;
              public isDrawCircleHoleEnabled(): boolean;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public isDashedLineEnabled(): boolean;
              public getLineWidth(): number;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public getFillAlpha(): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public getCircleRadius(): number;
              public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
              public getFillColor(): number;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class ILineRadarDataSet<T> extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any>>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getFillColor(): number;
                getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
                getFillAlpha(): number;
                getLineWidth(): number;
                isDrawFilledEnabled(): boolean;
                setDrawFilled(param0: boolean): void;
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public setDrawFilled(param0: boolean): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public isDrawFilledEnabled(): boolean;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public getLineWidth(): number;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public getFillAlpha(): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public getFillColor(): number;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class ILineScatterCandleRadarDataSet<T> extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any>>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IPieDataSet extends com.github.mikephil.charting.interfaces.datasets.IDataSet<com.github.mikephil.charting.data.PieEntry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IPieDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IPieDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getSliceSpace(): number;
                isAutomaticallyDisableSliceSpacingEnabled(): boolean;
                getSelectionShift(): number;
                getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
                getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
                isUsingSliceColorAsValueLineColor(): boolean;
                getValueLineColor(): number;
                getValueLineWidth(): number;
                getValueLinePart1OffsetPercentage(): number;
                getValueLinePart1Length(): number;
                getValueLinePart2Length(): number;
                isValueLineVariableLength(): boolean;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public isUsingSliceColorAsValueLineColor(): boolean;
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public isAutomaticallyDisableSliceSpacingEnabled(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public getValueLineWidth(): number;
              public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getValueLinePart1OffsetPercentage(): number;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public isValueLineVariableLength(): boolean;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public getValueLinePart1Length(): number;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getSliceSpace(): number;
              public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public getColors(): java.util.List<java.lang.Integer>;
              public getValueLineColor(): number;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getValueLinePart2Length(): number;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public setValueTextSize(param0: number): void;
              public getSelectionShift(): number;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IRadarDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<com.github.mikephil.charting.data.RadarEntry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IRadarDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                isDrawHighlightCircleEnabled(): boolean;
                setDrawHighlightCircleEnabled(param0: boolean): void;
                getHighlightCircleFillColor(): number;
                getHighlightCircleStrokeColor(): number;
                getHighlightCircleStrokeAlpha(): number;
                getHighlightCircleInnerRadius(): number;
                getHighlightCircleOuterRadius(): number;
                getHighlightCircleStrokeWidth(): number;
                getFillColor(): number;
                getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
                getFillAlpha(): number;
                getLineWidth(): number;
                isDrawFilledEnabled(): boolean;
                setDrawFilled(param0: boolean): void;
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public setDrawFilled(param0: boolean): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public setDrawHighlightCircleEnabled(param0: boolean): void;
              public getHighlightCircleStrokeWidth(): number;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public isDrawFilledEnabled(): boolean;
              public isDrawHighlightCircleEnabled(): boolean;
              public getHighlightCircleStrokeAlpha(): number;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighlightCircleInnerRadius(): number;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getHighlightCircleStrokeColor(): number;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getHighlightCircleOuterRadius(): number;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getHighlightCircleFillColor(): number;
              public getFormLineWidth(): number;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public getLineWidth(): number;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public getFillAlpha(): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public getFillColor(): number;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module interfaces {
          export module datasets {
            export class IScatterDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<com.github.mikephil.charting.data.Entry> {
              public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IScatterDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getScatterShapeSize(): number;
                getScatterShapeHoleRadius(): number;
                getScatterShapeHoleColor(): number;
                getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
                isVerticalHighlightIndicatorEnabled(): boolean;
                isHorizontalHighlightIndicatorEnabled(): boolean;
                getHighlightLineWidth(): number;
                getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
                getHighLightColor(): number;
                getYMin(): number;
                getYMax(): number;
                getXMin(): number;
                getXMax(): number;
                getEntryCount(): number;
                calcMinMax(): void;
                calcMinMaxY(param0: number, param1: number): void;
                getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
                getEntryForXValue(param0: number, param1: number): any;
                getEntriesForXValue(param0: number): java.util.List<any>;
                getEntryForIndex(param0: number): any;
                getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
                getEntryIndex(param0: any): number;
                getIndexInEntries(param0: number): number;
                addEntry(param0: any): boolean;
                addEntryOrdered(param0: any): void;
                removeFirst(): boolean;
                removeLast(): boolean;
                removeEntry(param0: any): boolean;
                removeEntryByXValue(param0: number): boolean;
                removeEntry(param0: number): boolean;
                contains(param0: any): boolean;
                clear(): void;
                getLabel(): string;
                setLabel(param0: string): void;
                getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
                setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
                getColors(): java.util.List<java.lang.Integer>;
                getColor(): number;
                getGradientColor(): com.github.mikephil.charting.model.GradientColor;
                getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
                getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
                getColor(param0: number): number;
                isHighlightEnabled(): boolean;
                setHighlightEnabled(param0: boolean): void;
                setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
                getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
                needsFormatter(): boolean;
                setValueTextColor(param0: number): void;
                setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
                setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
                setValueTextSize(param0: number): void;
                getValueTextColor(): number;
                getValueTextColor(param0: number): number;
                getValueTypeface(): globalAndroid.graphics.Typeface;
                getValueTextSize(): number;
                getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
                getFormSize(): number;
                getFormLineWidth(): number;
                getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
                setDrawValues(param0: boolean): void;
                isDrawValuesEnabled(): boolean;
                setDrawIcons(param0: boolean): void;
                isDrawIconsEnabled(): boolean;
                setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
                getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
                setVisible(param0: boolean): void;
                isVisible(): boolean;
              });
              public constructor();
              public getScatterShapeSize(): number;
              public getValueTypeface(): globalAndroid.graphics.Typeface;
              public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
              public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
              public getEntryForIndex(param0: number): any;
              public getColor(): number;
              public getEntryCount(): number;
              public getValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
              public calcMinMaxY(param0: number, param1: number): void;
              public getYMax(): number;
              public getValueTextColor(param0: number): number;
              public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
              public getScatterShapeHoleColor(): number;
              public getColor(param0: number): number;
              public addEntryOrdered(param0: any): void;
              public removeLast(): boolean;
              public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
              public setValueTextColor(param0: number): void;
              public removeEntryByXValue(param0: number): boolean;
              public isVisible(): boolean;
              public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
              public getGradientColor(param0: number): com.github.mikephil.charting.model.GradientColor;
              public setDrawIcons(param0: boolean): void;
              public addEntry(param0: any): boolean;
              public getHighLightColor(): number;
              public isHighlightEnabled(): boolean;
              public setLabel(param0: string): void;
              public getEntryForXValue(param0: number, param1: number): any;
              public setDrawValues(param0: boolean): void;
              public contains(param0: any): boolean;
              public getEntryIndex(param0: any): number;
              public removeFirst(): boolean;
              public removeEntry(param0: any): boolean;
              public getValueTextColor(): number;
              public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
              public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
              public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
              public getLabel(): string;
              public getScatterShapeHoleRadius(): number;
              public getXMin(): number;
              public isDrawValuesEnabled(): boolean;
              public removeEntry(param0: number): boolean;
              public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
              public getGradientColor(): com.github.mikephil.charting.model.GradientColor;
              public getYMin(): number;
              public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
              public isVerticalHighlightIndicatorEnabled(): boolean;
              public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
              public getValueTextSize(): number;
              public calcMinMax(): void;
              public isDrawIconsEnabled(): boolean;
              public setVisible(param0: boolean): void;
              public getFormLineWidth(): number;
              public clear(): void;
              public isHorizontalHighlightIndicatorEnabled(): boolean;
              public getColors(): java.util.List<java.lang.Integer>;
              public getXMax(): number;
              public needsFormatter(): boolean;
              public getGradientColors(): java.util.List<com.github.mikephil.charting.model.GradientColor>;
              public getFormSize(): number;
              public getEntriesForXValue(param0: number): java.util.List<any>;
              public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
              public getIndexInEntries(param0: number): number;
              public getHighlightLineWidth(): number;
              public setValueTextSize(param0: number): void;
              public setValueFormatter(param0: com.github.mikephil.charting.formatter.ValueFormatter): void;
              public setHighlightEnabled(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export class AnimatedMoveViewJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedMoveViewJob>;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View, xOrigin: number, yOrigin: number, duration: number);
            public static getInstance(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View, xOrigin: number, yOrigin: number, duration: number): com.github.mikephil.charting.jobs.AnimatedMoveViewJob;
            public constructor();
            public static recycleInstance(instance: com.github.mikephil.charting.jobs.AnimatedMoveViewJob): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public recycleSelf(): void;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            public onAnimationUpdate(animation: globalAndroid.animation.ValueAnimator): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export abstract class AnimatedViewPortJob extends com.github.mikephil.charting.jobs.ViewPortJob {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedViewPortJob>;
            public animator: globalAndroid.animation.ObjectAnimator;
            public phase: number;
            public xOrigin: number;
            public yOrigin: number;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View, xOrigin: number, yOrigin: number, duration: number);
            public constructor();
            public getPhase(): number;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
            public recycleSelf(): void;
            public getXOrigin(): number;
            public setPhase(phase: number): void;
            public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
            public onAnimationUpdate(animation: globalAndroid.animation.ValueAnimator): void;
            public onAnimationStart(animation: globalAndroid.animation.Animator): void;
            public run(): void;
            public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
            public resetAnimator(): void;
            public getYOrigin(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export class AnimatedZoomJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedZoomJob>;
            public zoomOriginX: number;
            public zoomOriginY: number;
            public zoomCenterX: number;
            public zoomCenterY: number;
            public yAxis: com.github.mikephil.charting.components.YAxis;
            public xAxisRange: number;
            public mOnAnimationUpdateMatrixBuffer: globalAndroid.graphics.Matrix;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View, xOrigin: number, yOrigin: number, duration: number);
            public onAnimationStart(animation: globalAndroid.animation.Animator): void;
            public constructor();
            public static getInstance(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, v: globalAndroid.view.View, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.YAxis, xAxisRange: number, scaleX: number, scaleY: number, xOrigin: number, yOrigin: number, zoomCenterX: number, zoomCenterY: number, zoomOriginX: number, zoomOriginY: number, duration: number): com.github.mikephil.charting.jobs.AnimatedZoomJob;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
            public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
            public recycleSelf(): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, v: globalAndroid.view.View, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.YAxis, xAxisRange: number, scaleX: number, scaleY: number, xOrigin: number, yOrigin: number, zoomCenterX: number, zoomCenterY: number, zoomOriginX: number, zoomOriginY: number, duration: number);
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            public onAnimationUpdate(animation: globalAndroid.animation.ValueAnimator): void;
            public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export class MoveViewJob extends com.github.mikephil.charting.jobs.ViewPortJob {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.MoveViewJob>;
            public static getInstance(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View): com.github.mikephil.charting.jobs.MoveViewJob;
            public constructor();
            public static recycleInstance(instance: com.github.mikephil.charting.jobs.MoveViewJob): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public run(): void;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export abstract class ViewPortJob extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.ViewPortJob>;
            public pts: androidNative.Array<number>;
            public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
            public xValue: number;
            public yValue: number;
            public mTrans: com.github.mikephil.charting.utils.Transformer;
            public view: globalAndroid.view.View;
            public constructor();
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public getYValue(): number;
            public getXValue(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module jobs {
          export class ZoomJob extends com.github.mikephil.charting.jobs.ViewPortJob {
            public static class: java.lang.Class<com.github.mikephil.charting.jobs.ZoomJob>;
            public scaleX: number;
            public scaleY: number;
            public axisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
            public mRunMatrixBuffer: globalAndroid.graphics.Matrix;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, scaleX: number, scaleY: number, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, v: globalAndroid.view.View);
            public static getInstance(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, scaleX: number, scaleY: number, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.YAxis.AxisDependency, v: globalAndroid.view.View): com.github.mikephil.charting.jobs.ZoomJob;
            public constructor();
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xValue: number, yValue: number, trans: com.github.mikephil.charting.utils.Transformer, v: globalAndroid.view.View);
            public run(): void;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            public static recycleInstance(instance: com.github.mikephil.charting.jobs.ZoomJob): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class BarLineChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener<com.github.mikephil.charting.charts.BarLineChartBase<any>> {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.BarLineChartTouchListener>;
            public onTouch(y: globalAndroid.view.View, distanceX: globalAndroid.view.MotionEvent): boolean;
            public onLongPress(e: globalAndroid.view.MotionEvent): void;
            public onFling(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, velocityX: number, velocityY: number): boolean;
            public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
            public constructor(chart: com.github.mikephil.charting.charts.BarLineChartBase<any>, touchMatrix: globalAndroid.graphics.Matrix, dragTriggerDistance: number);
            public getMatrix(): globalAndroid.graphics.Matrix;
            public setDragTriggerDist(dragTriggerDistance: number): void;
            public stopDeceleration(): void;
            public getTrans(x: number, y: number): com.github.mikephil.charting.utils.MPPointF;
            public constructor(chart: any);
            public onDoubleTap(this_: globalAndroid.view.MotionEvent): boolean;
            public computeScroll(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export abstract class ChartTouchListener<T> extends globalAndroid.view.GestureDetector.SimpleOnGestureListener implements globalAndroid.view.View.OnTouchListener {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.ChartTouchListener<any>>;
            public mLastGesture: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
            public static NONE: number = 0;
            public static DRAG: number = 1;
            public static X_ZOOM: number = 2;
            public static Y_ZOOM: number = 3;
            public static PINCH_ZOOM: number = 4;
            public static POST_ZOOM: number = 5;
            public static ROTATE: number = 6;
            public mTouchMode: number;
            public mLastHighlighted: com.github.mikephil.charting.highlight.Highlight;
            public mGestureDetector: globalAndroid.view.GestureDetector;
            public mChart: any;
            public startAction(me: globalAndroid.view.MotionEvent): void;
            public endAction(me: globalAndroid.view.MotionEvent): void;
            public getTouchMode(): number;
            public performHighlight(h: com.github.mikephil.charting.highlight.Highlight, e: globalAndroid.view.MotionEvent): void;
            public static distance(eventX: number, startX: number, eventY: number, startY: number): number;
            public getLastGesture(): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
            public constructor(chart: any);
            public setLastHighlighted(high: com.github.mikephil.charting.highlight.Highlight): void;
          }
          export module ChartTouchListener {
            export class ChartGesture {
              public static class: java.lang.Class<com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture>;
              public static NONE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static DRAG: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static X_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static Y_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static PINCH_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static ROTATE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static SINGLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static DOUBLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static LONG_PRESS: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static FLING: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static valueOf(name: string): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
              public static values(): androidNative.Array<com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class OnChartGestureListener {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.OnChartGestureListener>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onChartGestureStart(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
              onChartGestureEnd(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
              onChartLongPressed(param0: globalAndroid.view.MotionEvent): void;
              onChartDoubleTapped(param0: globalAndroid.view.MotionEvent): void;
              onChartSingleTapped(param0: globalAndroid.view.MotionEvent): void;
              onChartFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): void;
              onChartScale(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
              onChartTranslate(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
            });
            public constructor();
            public onChartSingleTapped(param0: globalAndroid.view.MotionEvent): void;
            public onChartTranslate(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
            public onChartGestureEnd(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
            public onChartFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): void;
            public onChartGestureStart(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
            public onChartLongPressed(param0: globalAndroid.view.MotionEvent): void;
            public onChartScale(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
            public onChartDoubleTapped(param0: globalAndroid.view.MotionEvent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class OnChartValueSelectedListener {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.OnChartValueSelectedListener>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartValueSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void; onNothingSelected(): void });
            public constructor();
            public onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
            public onNothingSelected(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class OnDrawLineChartTouchListener {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.OnDrawLineChartTouchListener>;
            public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class OnDrawListener {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.OnDrawListener>;
            /**
             * Constructs a new instance of the com.github.mikephil.charting.listener.OnDrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void; onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void; onDrawFinished(param0: com.github.mikephil.charting.data.DataSet<any>): void });
            public constructor();
            public onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void;
            public onDrawFinished(param0: com.github.mikephil.charting.data.DataSet<any>): void;
            public onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module listener {
          export class PieRadarChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener<com.github.mikephil.charting.charts.PieRadarChartBase<any>> {
            public static class: java.lang.Class<com.github.mikephil.charting.listener.PieRadarChartTouchListener>;
            public onLongPress(me: globalAndroid.view.MotionEvent): void;
            public onTouch(y: globalAndroid.view.View, this_: globalAndroid.view.MotionEvent): boolean;
            public setGestureStartAngle(x: number, y: number): void;
            public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
            public updateGestureRotation(x: number, y: number): void;
            public stopDeceleration(): void;
            public constructor(chart: any);
            public onSingleTapConfirmed(e: globalAndroid.view.MotionEvent): boolean;
            public constructor(chart: com.github.mikephil.charting.charts.PieRadarChartBase<any>);
            public computeScroll(): void;
          }
          export module PieRadarChartTouchListener {
            export class AngularVelocitySample {
              public static class: java.lang.Class<com.github.mikephil.charting.listener.PieRadarChartTouchListener.AngularVelocitySample>;
              public time: number;
              public angle: number;
              public constructor(time: com.github.mikephil.charting.listener.PieRadarChartTouchListener, angle: number, param2: number);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module matrix {
          export class Vector3 {
            public static class: java.lang.Class<com.github.mikephil.charting.matrix.Vector3>;
            public x: number;
            public y: number;
            public z: number;
            public static ZERO: com.github.mikephil.charting.matrix.Vector3;
            public static UNIT_X: com.github.mikephil.charting.matrix.Vector3;
            public static UNIT_Y: com.github.mikephil.charting.matrix.Vector3;
            public static UNIT_Z: com.github.mikephil.charting.matrix.Vector3;
            public constructor();
            public divide(magnitude: number): void;
            public pointsInSameDirection(other: com.github.mikephil.charting.matrix.Vector3): boolean;
            public length(): number;
            public distance2(other: com.github.mikephil.charting.matrix.Vector3): number;
            public constructor(xValue: number, yValue: number, zValue: number);
            public constructor(other: com.github.mikephil.charting.matrix.Vector3);
            public length2(): number;
            public subtract(other: com.github.mikephil.charting.matrix.Vector3): void;
            public constructor(array: androidNative.Array<number>);
            public set(xValue: number, yValue: number, zValue: number): void;
            public subtractMultiple(other: com.github.mikephil.charting.matrix.Vector3, multiplicator: number): void;
            public dot(other: com.github.mikephil.charting.matrix.Vector3): number;
            public add(other: com.github.mikephil.charting.matrix.Vector3): void;
            public normalize(): number;
            public cross(other: com.github.mikephil.charting.matrix.Vector3): com.github.mikephil.charting.matrix.Vector3;
            public multiply(other: com.github.mikephil.charting.matrix.Vector3): void;
            public zero(): void;
            public multiply(magnitude: number): void;
            public add(otherX: number, otherY: number, otherZ: number): void;
            public set(other: com.github.mikephil.charting.matrix.Vector3): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module model {
          export class GradientColor {
            public static class: java.lang.Class<com.github.mikephil.charting.model.GradientColor>;
            public setEndColor(endColor: number): void;
            public getStartColor(): number;
            public setStartColor(startColor: number): void;
            public constructor(startColor: number, endColor: number);
            public getEndColor(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class AxisRenderer extends com.github.mikephil.charting.renderer.Renderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.AxisRenderer>;
            public mAxis: com.github.mikephil.charting.components.AxisBase;
            public mTrans: com.github.mikephil.charting.utils.Transformer;
            public mGridPaint: globalAndroid.graphics.Paint;
            public mAxisLabelPaint: globalAndroid.graphics.Paint;
            public mAxisLinePaint: globalAndroid.graphics.Paint;
            public mLimitLinePaint: globalAndroid.graphics.Paint;
            public getPaintAxisLabels(): globalAndroid.graphics.Paint;
            public getTransformer(): com.github.mikephil.charting.utils.Transformer;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
            public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
            public renderGridLines(param0: globalAndroid.graphics.Canvas): void;
            public getPaintGrid(): globalAndroid.graphics.Paint;
            public getPaintAxisLine(): globalAndroid.graphics.Paint;
            public computeAxisValues(v: number, f: number): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public computeAxis(p2: number, this_: number, min: boolean): void;
            public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class BarChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarChartRenderer>;
            public mChart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider;
            public mBarRect: globalAndroid.graphics.RectF;
            public mBarBuffers: androidNative.Array<com.github.mikephil.charting.buffer.BarBuffer>;
            public mShadowPaint: globalAndroid.graphics.Paint;
            public mBarBorderPaint: globalAndroid.graphics.Paint;
            public drawData(i: globalAndroid.graphics.Canvas): void;
            public drawValues(px: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public prepareBarHighlight(x: number, y1: number, y2: number, barWidthHalf: number, trans: com.github.mikephil.charting.utils.Transformer): void;
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawDataSet(x: globalAndroid.graphics.Canvas, i: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, count: number): void;
            public drawHighlighted(y2: globalAndroid.graphics.Canvas, range: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public setHighlightDrawPos(high: com.github.mikephil.charting.highlight.Highlight, bar: globalAndroid.graphics.RectF): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class BarLineScatterCandleBubbleRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer>;
            public mXBounds: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public shouldDrawValues(set: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): boolean;
            public isInBoundsX(e: com.github.mikephil.charting.data.Entry, set: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): boolean;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
          export module BarLineScatterCandleBubbleRenderer {
            export class XBounds {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds>;
              public min: number;
              public max: number;
              public range: number;
              public set(chart: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider, dataSet: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): void;
              public constructor(this$0: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class BubbleChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.BubbleChartRenderer>;
            public mChart: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider;
            public drawHighlighted(entry: globalAndroid.graphics.Canvas, trans: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public drawDataSet(shapeHalf: globalAndroid.graphics.Canvas, color: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawValues(valueTextColor: globalAndroid.graphics.Canvas): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public getShapeSize(entrySize: number, maxSize: number, reference: number, normalizeSize: boolean): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class CandleStickChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.CandleStickChartRenderer>;
            public mChart: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider;
            public drawHighlighted(e: globalAndroid.graphics.Canvas, lowValue: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawDataSet(barColor: globalAndroid.graphics.Canvas, barColor: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
            public drawValues(x: globalAndroid.graphics.Canvas): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class CombinedChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.CombinedChartRenderer>;
            public mRenderers: java.util.List<com.github.mikephil.charting.renderer.DataRenderer>;
            public mChart: java.lang.ref.WeakReference<com.github.mikephil.charting.charts.Chart<any>>;
            public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
            public drawHighlighted(data: globalAndroid.graphics.Canvas, dataIndex: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public drawValues(this_: globalAndroid.graphics.Canvas): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawExtras(this_: globalAndroid.graphics.Canvas): void;
            public setSubRenderers(renderers: java.util.List<com.github.mikephil.charting.renderer.DataRenderer>): void;
            public getSubRenderer(index: number): com.github.mikephil.charting.renderer.DataRenderer;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public constructor(chart: com.github.mikephil.charting.charts.CombinedChart, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public createRenderers(): void;
            public initBuffers(): void;
            public getSubRenderers(): java.util.List<com.github.mikephil.charting.renderer.DataRenderer>;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class DataRenderer extends com.github.mikephil.charting.renderer.Renderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.DataRenderer>;
            public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
            public mRenderPaint: globalAndroid.graphics.Paint;
            public mHighlightPaint: globalAndroid.graphics.Paint;
            public mDrawPaint: globalAndroid.graphics.Paint;
            public mValuePaint: globalAndroid.graphics.Paint;
            public getPaintHighlight(): globalAndroid.graphics.Paint;
            public getPaintRender(): globalAndroid.graphics.Paint;
            public applyValueTextStyle(set: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): void;
            public drawExtras(param0: globalAndroid.graphics.Canvas): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValues(param0: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public getPaintValues(): globalAndroid.graphics.Paint;
            public isDrawingValuesAllowed(chart: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
            public initBuffers(): void;
            public drawData(param0: globalAndroid.graphics.Canvas): void;
            public drawValue(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number): void;
            public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class HorizontalBarChartRenderer extends com.github.mikephil.charting.renderer.BarChartRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.HorizontalBarChartRenderer>;
            public drawValues(px: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public prepareBarHighlight(x: number, y1: number, y2: number, barWidthHalf: number, trans: com.github.mikephil.charting.utils.Transformer): void;
            public isDrawingValuesAllowed(chart: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
            public initBuffers(): void;
            public drawDataSet(x: globalAndroid.graphics.Canvas, i: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, count: number): void;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public setHighlightDrawPos(high: com.github.mikephil.charting.highlight.Highlight, bar: globalAndroid.graphics.RectF): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class LegendRenderer extends com.github.mikephil.charting.renderer.Renderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.LegendRenderer>;
            public mLegendLabelPaint: globalAndroid.graphics.Paint;
            public mLegendFormPaint: globalAndroid.graphics.Paint;
            public mLegend: com.github.mikephil.charting.components.Legend;
            public computedEntries: java.util.List<com.github.mikephil.charting.components.LegendEntry>;
            public legendFontMetrics: globalAndroid.graphics.Paint.FontMetrics;
            public getFormPaint(): globalAndroid.graphics.Paint;
            public getLabelPaint(): globalAndroid.graphics.Paint;
            public drawLabel(c: globalAndroid.graphics.Canvas, x: number, y: number, label: string): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, legend: com.github.mikephil.charting.components.Legend);
            public computeLegend(bds: com.github.mikephil.charting.data.ChartData<any>): void;
            public drawForm(formLineDashEffect: globalAndroid.graphics.Canvas, this_: number, c: number, x: com.github.mikephil.charting.components.LegendEntry, y: com.github.mikephil.charting.components.Legend): void;
            public renderLegend(drawingForm: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class LineChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineChartRenderer>;
            public mChart: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider;
            public mCirclePaintInner: globalAndroid.graphics.Paint;
            public mDrawBitmap: java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>;
            public mBitmapCanvas: globalAndroid.graphics.Canvas;
            public mBitmapConfig: globalAndroid.graphics.Bitmap.Config;
            public cubicPath: globalAndroid.graphics.Path;
            public cubicFillPath: globalAndroid.graphics.Path;
            public mGenerateFilledPathBuffer: globalAndroid.graphics.Path;
            public drawCircles(e: globalAndroid.graphics.Canvas): void;
            public setBitmapConfig(config: globalAndroid.graphics.Bitmap.Config): void;
            public drawDataSet(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
            public drawCubicFill(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, spline: globalAndroid.graphics.Path, trans: com.github.mikephil.charting.utils.Transformer, bounds: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
            public releaseBitmap(): void;
            public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawLinearFill(this_: globalAndroid.graphics.Canvas, c: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, dataSet: com.github.mikephil.charting.utils.Transformer, trans: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
            public drawHorizontalBezier(j: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
            public drawLinear(j: globalAndroid.graphics.Canvas, e2: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
            public drawCubicBezier(j: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
            public drawValues(x: globalAndroid.graphics.Canvas): void;
            public drawHighlighted(e: globalAndroid.graphics.Canvas, pix: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
          }
          export module LineChartRenderer {
            export class DataSetImageCache {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineChartRenderer.DataSetImageCache>;
              public fill(circleBitmap: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, canvas: boolean, i: boolean): void;
              public getBitmap(index: number): globalAndroid.graphics.Bitmap;
              public init(set: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class LineRadarRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineRadarRenderer>;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawFilledPath(this_: globalAndroid.graphics.Canvas, c: globalAndroid.graphics.Path, filledPath: globalAndroid.graphics.drawable.Drawable): void;
            public drawFilledPath(previous: globalAndroid.graphics.Canvas, previousColor: globalAndroid.graphics.Path, this_: number, c: number): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class LineScatterCandleRadarRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer>;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawHighlightLines(c: globalAndroid.graphics.Canvas, x: number, y: number, set: com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class PieChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.PieChartRenderer>;
            public mChart: com.github.mikephil.charting.charts.PieChart;
            public mHolePaint: globalAndroid.graphics.Paint;
            public mTransparentCirclePaint: globalAndroid.graphics.Paint;
            public mValueLinePaint: globalAndroid.graphics.Paint;
            public mDrawBitmap: java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>;
            public mBitmapCanvas: globalAndroid.graphics.Canvas;
            public mDrawCenterTextPathBuffer: globalAndroid.graphics.Path;
            public mDrawHighlightedRectF: globalAndroid.graphics.RectF;
            public getPaintHole(): globalAndroid.graphics.Paint;
            public drawValues(line1Radius: globalAndroid.graphics.Canvas): void;
            public drawRoundedSlices(y: globalAndroid.graphics.Canvas): void;
            public releaseBitmap(): void;
            public drawHole(secondHoleRadius: globalAndroid.graphics.Canvas): void;
            public drawDataSet(x: globalAndroid.graphics.Canvas, y: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawCenterText(path: globalAndroid.graphics.Canvas): void;
            public getPaintCenterText(): globalAndroid.text.TextPaint;
            public getSliceSpace(dataSet: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): number;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(chart: com.github.mikephil.charting.charts.PieChart, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawEntryLabel(c: globalAndroid.graphics.Canvas, label: string, x: number, y: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public drawHighlighted(angle: globalAndroid.graphics.Canvas, minSpacedRadius: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public initBuffers(): void;
            public getPaintEntryLabels(): globalAndroid.graphics.Paint;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
            public getPaintTransparentCircle(): globalAndroid.graphics.Paint;
            public calculateMinimumRadiusForSpacedSlice(center: com.github.mikephil.charting.utils.MPPointF, radius: number, angle: number, arcStartPointX: number, arcStartPointY: number, startAngle: number, sweepAngle: number): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class RadarChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.RadarChartRenderer>;
            public mChart: com.github.mikephil.charting.charts.RadarChart;
            public mWebPaint: globalAndroid.graphics.Paint;
            public mHighlightCirclePaint: globalAndroid.graphics.Paint;
            public mDrawDataSetSurfacePathBuffer: globalAndroid.graphics.Path;
            public mDrawHighlightCirclePathBuffer: globalAndroid.graphics.Path;
            public drawWeb(r: globalAndroid.graphics.Canvas): void;
            public drawDataSet(j: globalAndroid.graphics.Canvas, drawable: com.github.mikephil.charting.interfaces.datasets.IRadarDataSet, this_: number): void;
            public getWebPaint(): globalAndroid.graphics.Paint;
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawHighlighted(set: globalAndroid.graphics.Canvas, e: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
            public drawHighlightCircle(this_: globalAndroid.graphics.Canvas, c: com.github.mikephil.charting.utils.MPPointF, point: number, innerRadius: number, outerRadius: number, fillColor: number, strokeColor: number): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(chart: com.github.mikephil.charting.charts.RadarChart, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValues(entry: globalAndroid.graphics.Canvas): void;
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export abstract class Renderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.Renderer>;
            public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class ScatterChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.ScatterChartRenderer>;
            public mChart: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawValues(entry: globalAndroid.graphics.Canvas): void;
            public drawValue(c: globalAndroid.graphics.Canvas, valueText: string, x: number, y: number, color: number): void;
            public drawExtras(c: globalAndroid.graphics.Canvas): void;
            public initBuffers(): void;
            public drawData(this_: globalAndroid.graphics.Canvas): void;
            public drawDataSet(i: globalAndroid.graphics.Canvas, this_: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet): void;
            public constructor(chart: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider, animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(animator: com.github.mikephil.charting.animation.ChartAnimator, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public drawHighlighted(e: globalAndroid.graphics.Canvas, pix: androidNative.Array<com.github.mikephil.charting.highlight.Highlight>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class XAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRenderer>;
            public mXAxis: com.github.mikephil.charting.components.XAxis;
            public mRenderGridLinesPath: globalAndroid.graphics.Path;
            public mRenderGridLinesBuffer: androidNative.Array<number>;
            public mGridClippingRect: globalAndroid.graphics.RectF;
            public mRenderLimitLinesBuffer: androidNative.Array<number>;
            public mLimitLineClippingRect: globalAndroid.graphics.RectF;
            public getGridClippingRect(): globalAndroid.graphics.RectF;
            public renderLimitLines(clipRestoreCount: globalAndroid.graphics.Canvas): void;
            public drawLabel(c: globalAndroid.graphics.Canvas, formattedLabel: string, x: number, y: number, anchor: com.github.mikephil.charting.utils.MPPointF, angleDegrees: number): void;
            public setupGridPaint(): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xAxis: com.github.mikephil.charting.components.XAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public computeAxisValues(min: number, max: number): void;
            public drawGridLine(c: globalAndroid.graphics.Canvas, x: number, y: number, gridLinePath: globalAndroid.graphics.Path): void;
            public renderAxisLine(c: globalAndroid.graphics.Canvas): void;
            public computeSize(): void;
            public drawLabels(width: globalAndroid.graphics.Canvas, width: number, label: com.github.mikephil.charting.utils.MPPointF): void;
            public renderAxisLabels(c: globalAndroid.graphics.Canvas): void;
            public renderGridLines(i: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public renderLimitLineLine(c: globalAndroid.graphics.Canvas, limitLine: com.github.mikephil.charting.components.LimitLine, position: androidNative.Array<number>): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public renderLimitLineLabel(labelLineHeight: globalAndroid.graphics.Canvas, xOffset: com.github.mikephil.charting.components.LimitLine, labelPosition: androidNative.Array<number>, this_: number): void;
            public computeAxis(p2: number, this_: number, min: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class XAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRendererHorizontalBarChart>;
            public mChart: com.github.mikephil.charting.charts.BarChart;
            public mRenderLimitLinesPathBuffer: globalAndroid.graphics.Path;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xAxis: com.github.mikephil.charting.components.XAxis, trans: com.github.mikephil.charting.utils.Transformer, chart: com.github.mikephil.charting.charts.BarChart);
            public getGridClippingRect(): globalAndroid.graphics.RectF;
            public renderAxisLabels(c: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public renderLimitLines(xOffset: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xAxis: com.github.mikephil.charting.components.XAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public drawGridLine(c: globalAndroid.graphics.Canvas, x: number, y: number, gridLinePath: globalAndroid.graphics.Path): void;
            public renderAxisLine(c: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public computeSize(): void;
            public drawLabels(label: globalAndroid.graphics.Canvas, y: number, i: com.github.mikephil.charting.utils.MPPointF): void;
            public computeAxis(p2: number, this_: number, min: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class XAxisRendererRadarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRendererRadarChart>;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xAxis: com.github.mikephil.charting.components.XAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public renderLimitLines(c: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, xAxis: com.github.mikephil.charting.components.XAxis, chart: com.github.mikephil.charting.charts.RadarChart);
            public renderAxisLabels(angle: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class YAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRenderer>;
            public mYAxis: com.github.mikephil.charting.components.YAxis;
            public mZeroLinePaint: globalAndroid.graphics.Paint;
            public mRenderGridLinesPath: globalAndroid.graphics.Path;
            public mGridClippingRect: globalAndroid.graphics.RectF;
            public mGetTransformedPositionsBuffer: androidNative.Array<number>;
            public mDrawZeroLinePath: globalAndroid.graphics.Path;
            public mZeroLineClippingRect: globalAndroid.graphics.RectF;
            public mRenderLimitLines: globalAndroid.graphics.Path;
            public mRenderLimitLinesBuffer: androidNative.Array<number>;
            public mLimitLineClippingRect: globalAndroid.graphics.RectF;
            public getGridClippingRect(): globalAndroid.graphics.RectF;
            public renderAxisLabels(c: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public renderLimitLines(xOffset: globalAndroid.graphics.Canvas): void;
            public linePath(p: globalAndroid.graphics.Path, i: number, positions: androidNative.Array<number>): globalAndroid.graphics.Path;
            public renderAxisLine(c: globalAndroid.graphics.Canvas): void;
            public renderGridLines(clipRestoreCount: globalAndroid.graphics.Canvas): void;
            public getTransformedPositions(): androidNative.Array<number>;
            public drawYLabels(i: globalAndroid.graphics.Canvas, this_: number, c: androidNative.Array<number>, fixedPosition: number): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, yAxis: com.github.mikephil.charting.components.YAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public drawZeroLine(c: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class YAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRendererHorizontalBarChart>;
            public mDrawZeroLinePathBuffer: globalAndroid.graphics.Path;
            public mRenderLimitLinesPathBuffer: globalAndroid.graphics.Path;
            public mRenderLimitLinesBuffer: androidNative.Array<number>;
            public getGridClippingRect(): globalAndroid.graphics.RectF;
            public computeAxis(p2: number, this_: number, yMin: boolean): void;
            public renderAxisLabels(c: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public linePath(p: globalAndroid.graphics.Path, i: number, positions: androidNative.Array<number>): globalAndroid.graphics.Path;
            public renderAxisLine(c: globalAndroid.graphics.Canvas): void;
            public getTransformedPositions(): androidNative.Array<number>;
            public drawYLabels(i: globalAndroid.graphics.Canvas, this_: number, c: androidNative.Array<number>, fixedPosition: number): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, yAxis: com.github.mikephil.charting.components.YAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public renderLimitLines(labelLineHeight: globalAndroid.graphics.Canvas): void;
            public drawZeroLine(c: globalAndroid.graphics.Canvas): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export class YAxisRendererRadarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
            public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRendererRadarChart>;
            public renderLimitLines(l: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public renderAxisLabels(label: globalAndroid.graphics.Canvas): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, trans: com.github.mikephil.charting.utils.Transformer, axis: com.github.mikephil.charting.components.AxisBase);
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, yAxis: com.github.mikephil.charting.components.YAxis, trans: com.github.mikephil.charting.utils.Transformer);
            public computeAxisValues(step: number, v: number): void;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, yAxis: com.github.mikephil.charting.components.YAxis, chart: com.github.mikephil.charting.charts.RadarChart);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class ChevronDownShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.ChevronDownShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class ChevronUpShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.ChevronUpShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class CircleShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.CircleShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class CrossShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.CrossShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.IShapeRenderer>;
              /**
               * Constructs a new instance of the com.github.mikephil.charting.renderer.scatter.IShapeRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void });
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class SquareShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.SquareShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class TriangleShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.TriangleShapeRenderer>;
              public mTrianglePathBuffer: globalAndroid.graphics.Path;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module renderer {
          export module scatter {
            export class XShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
              public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.XShapeRenderer>;
              public constructor();
              public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
              public renderShape(c: globalAndroid.graphics.Canvas, dataSet: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler, posX: number, posY: number, renderPaint: globalAndroid.graphics.Paint): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class ColorTemplate {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.ColorTemplate>;
            public static COLOR_NONE: number = 1122867;
            public static COLOR_SKIP: number = 1122868;
            public static LIBERTY_COLORS: androidNative.Array<number>;
            public static JOYFUL_COLORS: androidNative.Array<number>;
            public static PASTEL_COLORS: androidNative.Array<number>;
            public static COLORFUL_COLORS: androidNative.Array<number>;
            public static VORDIPLOM_COLORS: androidNative.Array<number>;
            public static MATERIAL_COLORS: androidNative.Array<number>;
            public constructor();
            public static rgb(hex: string): number;
            public static getHoloBlue(): number;
            public static createColors(i: globalAndroid.content.res.Resources, r: androidNative.Array<number>): java.util.List<java.lang.Integer>;
            public static createColors(i: androidNative.Array<number>): java.util.List<java.lang.Integer>;
            public static colorWithAlpha(color: number, alpha: number): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class EntryXComparator extends java.util.Comparator<com.github.mikephil.charting.data.Entry> {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.EntryXComparator>;
            public constructor();
            public compare(entry1: com.github.mikephil.charting.data.Entry, entry2: com.github.mikephil.charting.data.Entry): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class FSize extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.FSize>;
            public width: number;
            public height: number;
            public static recycleInstance(instance: com.github.mikephil.charting.utils.FSize): void;
            public constructor();
            public equals(this_: any): boolean;
            public static recycleInstances(instances: java.util.List<com.github.mikephil.charting.utils.FSize>): void;
            public constructor(width: number, height: number);
            public hashCode(): number;
            public static getInstance(width: number, height: number): com.github.mikephil.charting.utils.FSize;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class FileUtils {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.FileUtils>;
            public constructor();
            public static saveToSdCard(e: java.util.List<com.github.mikephil.charting.data.Entry>, e: string): void;
            public static loadEntriesFromAssets(i: globalAndroid.content.res.AssetManager, vals: string): java.util.List<com.github.mikephil.charting.data.Entry>;
            public static loadBarEntriesFromAssets(split: globalAndroid.content.res.AssetManager, line: string): java.util.List<com.github.mikephil.charting.data.BarEntry>;
            public static loadEntriesFromFile(i: string): java.util.List<com.github.mikephil.charting.data.Entry>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class HorizontalViewPortHandler extends com.github.mikephil.charting.utils.ViewPortHandler {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.HorizontalViewPortHandler>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class MPPointD extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.MPPointD>;
            public x: number;
            public y: number;
            public static getInstance(x: number, y: number): com.github.mikephil.charting.utils.MPPointD;
            public static recycleInstance(instance: com.github.mikephil.charting.utils.MPPointD): void;
            public static recycleInstances(instances: java.util.List<com.github.mikephil.charting.utils.MPPointD>): void;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class MPPointF extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.MPPointF>;
            public x: number;
            public y: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.github.mikephil.charting.utils.MPPointF>;
            public static getInstance(copy: com.github.mikephil.charting.utils.MPPointF): com.github.mikephil.charting.utils.MPPointF;
            public my_readFromParcel(in_: globalAndroid.os.Parcel): void;
            public static recycleInstances(instances: java.util.List<com.github.mikephil.charting.utils.MPPointF>): void;
            public constructor();
            public static recycleInstance(instance: com.github.mikephil.charting.utils.MPPointF): void;
            public getX(): number;
            public static getInstance(): com.github.mikephil.charting.utils.MPPointF;
            public constructor(x: number, y: number);
            public getY(): number;
            public static getInstance(x: number, y: number): com.github.mikephil.charting.utils.MPPointF;
            public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class ObjectPool<T> extends java.lang.Object {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.ObjectPool<any>>;
            public static create(withCapacity: number, object: com.github.mikephil.charting.utils.ObjectPool.Poolable): com.github.mikephil.charting.utils.ObjectPool<any>;
            public get(): T;
            public recycle(object: T): void;
            public getPoolId(): number;
            public getReplenishPercentage(): number;
            public recycle(i: java.util.List<T>): void;
            public setReplenishPercentage(percentage: number): void;
            public getPoolCapacity(): number;
            public getPoolCount(): number;
          }
          export module ObjectPool {
            export abstract class Poolable {
              public static class: java.lang.Class<com.github.mikephil.charting.utils.ObjectPool.Poolable>;
              public static NO_OWNER: number;
              public constructor();
              public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class Transformer {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.Transformer>;
            public mMatrixValueToPx: globalAndroid.graphics.Matrix;
            public mMatrixOffset: globalAndroid.graphics.Matrix;
            public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
            public valuePointsForGenerateTransformedValuesScatter: androidNative.Array<number>;
            public valuePointsForGenerateTransformedValuesBubble: androidNative.Array<number>;
            public valuePointsForGenerateTransformedValuesLine: androidNative.Array<number>;
            public valuePointsForGenerateTransformedValuesCandle: androidNative.Array<number>;
            public mPixelToValueMatrixBuffer: globalAndroid.graphics.Matrix;
            public pixelsToValue(pixels: androidNative.Array<number>): void;
            public generateTransformedValuesCandle(j: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet, this_: number, data: number, phaseX: number, phaseY: number): androidNative.Array<number>;
            public rectToPixelPhaseHorizontal(r: globalAndroid.graphics.RectF, phaseY: number): void;
            public rectValueToPixelHorizontal(r: globalAndroid.graphics.RectF): void;
            public getValueMatrix(): globalAndroid.graphics.Matrix;
            public pathValuesToPixel(this_: java.util.List<globalAndroid.graphics.Path>): void;
            public rectValuesToPixel(this_: java.util.List<globalAndroid.graphics.RectF>): void;
            public getValueToPixelMatrix(): globalAndroid.graphics.Matrix;
            public generateTransformedValuesLine(j: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, this_: number, data: number, phaseX: number, phaseY: number): androidNative.Array<number>;
            public getPixelForValues(x: number, y: number): com.github.mikephil.charting.utils.MPPointD;
            public prepareMatrixOffset(inverted: boolean): void;
            public generateTransformedValuesBubble(j: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet, this_: number, data: number, phaseY: number): androidNative.Array<number>;
            public getPixelToValueMatrix(): globalAndroid.graphics.Matrix;
            public rectToPixelPhase(r: globalAndroid.graphics.RectF, phaseY: number): void;
            public getValuesByTouchPoint(x: number, y: number): com.github.mikephil.charting.utils.MPPointD;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public pathValueToPixel(path: globalAndroid.graphics.Path): void;
            public rectValueToPixelHorizontal(r: globalAndroid.graphics.RectF, phaseY: number): void;
            public prepareMatrixValuePx(xChartMin: number, deltaX: number, deltaY: number, yChartMin: number): void;
            public pointValuesToPixel(pts: androidNative.Array<number>): void;
            public getOffsetMatrix(): globalAndroid.graphics.Matrix;
            public getValuesByTouchPoint(x: number, y: number, outputPoint: com.github.mikephil.charting.utils.MPPointD): void;
            public rectValueToPixel(r: globalAndroid.graphics.RectF): void;
            public generateTransformedValuesScatter(j: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, this_: number, data: number, phaseX: number, phaseY: number): androidNative.Array<number>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class TransformerHorizontalBarChart extends com.github.mikephil.charting.utils.Transformer {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.TransformerHorizontalBarChart>;
            public constructor(viewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler);
            public prepareMatrixOffset(inverted: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export abstract class Utils {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.Utils>;
            public static DEG2RAD: number = 0.017453292519943295;
            public static FDEG2RAD: number = 0.017453292;
            public static DOUBLE_EPSILON: number;
            public static FLOAT_EPSILON: number;
            public static roundToNextSignificant(number: number): number;
            public static copyStrings(i: java.util.List<string>, from: androidNative.Array<string>): void;
            public static getMinimumFlingVelocity(): number;
            public static drawImage(canvas: globalAndroid.graphics.Canvas, drawable: globalAndroid.graphics.drawable.Drawable, x: number, y: number, width: number, height: number): void;
            public static convertPixelsToDp(px: number): number;
            public static getLineSpacing(paint: globalAndroid.graphics.Paint): number;
            public static drawMultilineText(c: globalAndroid.graphics.Canvas, text: string, x: number, y: number, paint: globalAndroid.text.TextPaint, constrainedToSize: com.github.mikephil.charting.utils.FSize, anchor: com.github.mikephil.charting.utils.MPPointF, angleDegrees: number): void;
            public static velocityTrackerPointerUpCleanUpIfNecessary(id2: globalAndroid.view.MotionEvent, x: globalAndroid.view.VelocityTracker): void;
            public static getNormalizedAngle(angle: number): number;
            public static getLineHeight(paint: globalAndroid.graphics.Paint): number;
            public static calcTextHeight(paint: globalAndroid.graphics.Paint, demoText: string): number;
            public static getSizeOfRotatedRectangleByRadians(rectangleWidth: number, rectangleHeight: number, radians: number): com.github.mikephil.charting.utils.FSize;
            public static getSizeOfRotatedRectangleByRadians(rectangleSize: com.github.mikephil.charting.utils.FSize, radians: number): com.github.mikephil.charting.utils.FSize;
            public static getLineSpacing(paint: globalAndroid.graphics.Paint, fontMetrics: globalAndroid.graphics.Paint.FontMetrics): number;
            public static nextUp(d: number): number;
            public static getSizeOfRotatedRectangleByDegrees(rectangleSize: com.github.mikephil.charting.utils.FSize, degrees: number): com.github.mikephil.charting.utils.FSize;
            public constructor();
            public static calcTextWidth(paint: globalAndroid.graphics.Paint, demoText: string): number;
            public static convertDpToPixel(dp: number): number;
            public static convertStrings(i: java.util.List<string>): androidNative.Array<string>;
            public static calcTextSize(paint: globalAndroid.graphics.Paint, demoText: string): com.github.mikephil.charting.utils.FSize;
            public static getPosition(center: com.github.mikephil.charting.utils.MPPointF, dist: number, angle: number, outputPoint: com.github.mikephil.charting.utils.MPPointF): void;
            public static getMaximumFlingVelocity(): number;
            public static getSDKInt(): number;
            public static copyIntegers(i: java.util.List<java.lang.Integer>, from: androidNative.Array<number>): void;
            public static convertIntegers(integers: java.util.List<java.lang.Integer>): androidNative.Array<number>;
            public static calcTextSize(paint: globalAndroid.graphics.Paint, demoText: string, outputFSize: com.github.mikephil.charting.utils.FSize): void;
            public static getLineHeight(paint: globalAndroid.graphics.Paint, fontMetrics: globalAndroid.graphics.Paint.FontMetrics): number;
            /** @deprecated */
            public static init(res: globalAndroid.content.res.Resources): void;
            public static drawXAxisValue(rotatedSize: globalAndroid.graphics.Canvas, translateX: string, translateY: number, c: number, text: globalAndroid.graphics.Paint, x: com.github.mikephil.charting.utils.MPPointF, y: number): void;
            public static getDecimals(number: number): number;
            public static getPosition(center: com.github.mikephil.charting.utils.MPPointF, dist: number, angle: number): com.github.mikephil.charting.utils.MPPointF;
            public static postInvalidateOnAnimation(view: globalAndroid.view.View): void;
            public static getDefaultValueFormatter(): com.github.mikephil.charting.formatter.ValueFormatter;
            public static formatNumber(number: number, digitCount: number, separateThousands: boolean): string;
            public static getSizeOfRotatedRectangleByDegrees(rectangleWidth: number, rectangleHeight: number, degrees: number): com.github.mikephil.charting.utils.FSize;
            public static init(viewConfiguration: globalAndroid.content.Context): void;
            public static drawMultilineText(rotatedSize: globalAndroid.graphics.Canvas, translateX: globalAndroid.text.StaticLayout, translateY: number, c: number, textLayout: globalAndroid.text.TextPaint, x: com.github.mikephil.charting.utils.MPPointF, y: number): void;
            public static formatNumber(digit: number, number: number, digitCount: boolean, separateThousands: string): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module mikephil {
      export module charting {
        export module utils {
          export class ViewPortHandler {
            public static class: java.lang.Class<com.github.mikephil.charting.utils.ViewPortHandler>;
            public mMatrixTouch: globalAndroid.graphics.Matrix;
            public mContentRect: globalAndroid.graphics.RectF;
            public mChartWidth: number;
            public mChartHeight: number;
            public valsBufferForFitScreen: androidNative.Array<number>;
            public mCenterViewPortMatrixBuffer: globalAndroid.graphics.Matrix;
            public matrixBuffer: androidNative.Array<number>;
            public getMatrixTouch(): globalAndroid.graphics.Matrix;
            public setMinMaxScaleX(minScaleX: number, maxScaleX: number): void;
            public isInBoundsLeft(x: number): boolean;
            public getMinScaleY(): number;
            public contentTop(): number;
            public restrainViewPort(offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): void;
            public contentRight(): number;
            public isFullyZoomedOutY(): boolean;
            public getScaleY(): number;
            public resetZoom(outputMatrix: globalAndroid.graphics.Matrix): void;
            public zoomOut(x: number, y: number, outputMatrix: globalAndroid.graphics.Matrix): void;
            public setZoom(scaleX: number, scaleY: number): globalAndroid.graphics.Matrix;
            public offsetLeft(): number;
            public zoom(scaleX: number, scaleY: number, x: number, y: number): globalAndroid.graphics.Matrix;
            public contentLeft(): number;
            public zoom(scaleX: number, scaleY: number): globalAndroid.graphics.Matrix;
            public getContentRect(): globalAndroid.graphics.RectF;
            public constructor();
            public translate(transformedPts: androidNative.Array<number>, outputMatrix: globalAndroid.graphics.Matrix): void;
            public translate(transformedPts: androidNative.Array<number>): globalAndroid.graphics.Matrix;
            public refresh(newMatrix: globalAndroid.graphics.Matrix, chart: globalAndroid.view.View, invalidate: boolean): globalAndroid.graphics.Matrix;
            public isInBounds(x: number, y: number): boolean;
            public setDragOffsetX(offset: number): void;
            public zoomOut(x: number, y: number): globalAndroid.graphics.Matrix;
            public isFullyZoomedOutX(): boolean;
            public setMinMaxScaleY(minScaleY: number, maxScaleY: number): void;
            public setZoom(scaleX: number, scaleY: number, x: number, y: number): globalAndroid.graphics.Matrix;
            public getChartWidth(): number;
            public isInBoundsY(y: number): boolean;
            public setMaximumScaleY(yScale: number): void;
            public getContentCenter(): com.github.mikephil.charting.utils.MPPointF;
            public offsetRight(): number;
            public offsetTop(): number;
            public hasChartDimens(): boolean;
            public setMaximumScaleX(xScale: number): void;
            public setChartDimens(width: number, height: number): void;
            public fitScreen(): globalAndroid.graphics.Matrix;
            public getSmallestContentExtension(): number;
            public zoom(scaleX: number, scaleY: number, outputMatrix: globalAndroid.graphics.Matrix): void;
            public setDragOffsetY(offset: number): void;
            public isInBoundsX(x: number): boolean;
            public limitTransAndScale(matrix: globalAndroid.graphics.Matrix, content: globalAndroid.graphics.RectF): void;
            public zoomIn(x: number, y: number): globalAndroid.graphics.Matrix;
            public centerViewPort(transformedPts: androidNative.Array<number>, view: globalAndroid.view.View): void;
            public getMaxScaleY(): number;
            public setMinimumScaleX(xScale: number): void;
            public getTransY(): number;
            public offsetBottom(): number;
            public setMinimumScaleY(yScale: number): void;
            public setZoom(scaleX: number, scaleY: number, outputMatrix: globalAndroid.graphics.Matrix): void;
            public isInBoundsRight(x: number): boolean;
            public getScaleX(): number;
            public contentBottom(): number;
            public getTransX(): number;
            public getMaxScaleX(): number;
            public getChartHeight(): number;
            public isInBoundsBottom(y: number): boolean;
            public fitScreen(this_: globalAndroid.graphics.Matrix): void;
            public isFullyZoomedOut(): boolean;
            public canZoomInMoreY(): boolean;
            public contentWidth(): number;
            public zoomIn(x: number, y: number, outputMatrix: globalAndroid.graphics.Matrix): void;
            public canZoomInMoreX(): boolean;
            public isInBoundsTop(y: number): boolean;
            public hasNoDragOffset(): boolean;
            public contentHeight(): number;
            public zoom(scaleX: number, scaleY: number, x: number, y: number, outputMatrix: globalAndroid.graphics.Matrix): void;
            public canZoomOutMoreY(): boolean;
            public getMinScaleX(): number;
            public canZoomOutMoreX(): boolean;
          }
        }
      }
    }
  }
}

//Generics information:
//com.github.mikephil.charting.buffer.AbstractBuffer:1
//com.github.mikephil.charting.charts.BarLineChartBase:1
//com.github.mikephil.charting.charts.Chart:1
//com.github.mikephil.charting.charts.PieRadarChartBase:1
//com.github.mikephil.charting.data.BarLineScatterCandleBubbleData:1
//com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet:1
//com.github.mikephil.charting.data.BaseDataSet:1
//com.github.mikephil.charting.data.ChartData:1
//com.github.mikephil.charting.data.DataSet:1
//com.github.mikephil.charting.data.LineRadarDataSet:1
//com.github.mikephil.charting.data.LineScatterCandleRadarDataSet:1
//com.github.mikephil.charting.highlight.ChartHighlighter:1
//com.github.mikephil.charting.highlight.PieRadarHighlighter:1
//com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet:1
//com.github.mikephil.charting.interfaces.datasets.IDataSet:1
//com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet:1
//com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet:1
//com.github.mikephil.charting.listener.ChartTouchListener:1
//com.github.mikephil.charting.utils.ObjectPool:1
