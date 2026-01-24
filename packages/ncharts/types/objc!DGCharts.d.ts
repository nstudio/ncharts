declare class AnimatedMoveViewJob extends AnimatedViewPortJob {
  static alloc(): AnimatedMoveViewJob; // inherited from NSObject

  static new(): AnimatedMoveViewJob; // inherited from NSObject
}

declare class AnimatedViewPortJob extends ChartViewPortJob {
  static alloc(): AnimatedViewPortJob; // inherited from NSObject

  static new(): AnimatedViewPortJob; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; xValue: number; yValue: number; transformer: ChartTransformer; view: ChartViewBase; xOrigin: number; yOrigin: number; duration: number; easing: (p1: number, p2: number) => number });

  initWithViewPortHandlerXValueYValueTransformerViewXOriginYOriginDurationEasing(viewPortHandler: ChartViewPortHandler, xValue: number, yValue: number, transformer: ChartTransformer, view: ChartViewBase, xOrigin: number, yOrigin: number, duration: number, easing: (p1: number, p2: number) => number): this;

  start(): void;

  stopWithFinish(finish: boolean): void;
}

declare class AnimatedZoomViewJob extends AnimatedViewPortJob {
  static alloc(): AnimatedZoomViewJob; // inherited from NSObject

  static new(): AnimatedZoomViewJob; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; transformer: ChartTransformer; view: ChartViewBase; yAxis: ChartYAxis; xAxisRange: number; scaleX: number; scaleY: number; xOrigin: number; yOrigin: number; zoomCenterX: number; zoomCenterY: number; zoomOriginX: number; zoomOriginY: number; duration: number; easing: (p1: number, p2: number) => number });

  initWithViewPortHandlerTransformerViewYAxisXAxisRangeScaleXScaleYXOriginYOriginZoomCenterXZoomCenterYZoomOriginXZoomOriginYDurationEasing(viewPortHandler: ChartViewPortHandler, transformer: ChartTransformer, view: ChartViewBase, yAxis: ChartYAxis, xAxisRange: number, scaleX: number, scaleY: number, xOrigin: number, yOrigin: number, zoomCenterX: number, zoomCenterY: number, zoomOriginX: number, zoomOriginY: number, duration: number, easing: (p1: number, p2: number) => number): this;
}

declare const enum AxisDependency {
  Left = 0,

  Right = 1,
}

declare class BarChartData extends BarLineScatterCandleBubbleChartData {
  static alloc(): BarChartData; // inherited from NSObject

  static new(): BarChartData; // inherited from NSObject

  barWidth: number;

  groupBarsFromXGroupSpaceBarSpace(fromX: number, groupSpace: number, barSpace: number): void;

  groupWidthWithGroupSpaceBarSpace(groupSpace: number, barSpace: number): number;
}

declare class BarChartDataEntry extends ChartDataEntry {
  static alloc(): BarChartDataEntry; // inherited from NSObject

  static new(): BarChartDataEntry; // inherited from NSObject

  readonly isStacked: boolean;

  readonly negativeSum: number;

  readonly positiveSum: number;

  readonly ranges: NSArray<ChartRange>;

  yValues: NSArray<number>;

  constructor(o: { x: number; yValues: NSArray<number> | number[] });

  constructor(o: { x: number; yValues: NSArray<number> | number[]; data: any });

  constructor(o: { x: number; yValues: NSArray<number> | number[]; icon: UIImage });

  constructor(o: { x: number; yValues: NSArray<number> | number[]; icon: UIImage; data: any });

  calcPosNegSum(): void;

  calcRanges(): void;

  initWithXYValues(x: number, yValues: NSArray<number> | number[]): this;

  initWithXYValuesData(x: number, yValues: NSArray<number> | number[], data: any): this;

  initWithXYValuesIcon(x: number, yValues: NSArray<number> | number[], icon: UIImage): this;

  initWithXYValuesIconData(x: number, yValues: NSArray<number> | number[], icon: UIImage, data: any): this;

  sumBelowStackIndex(stackIndex: number): number;
}

interface BarChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {
  barData: BarChartData;

  isDrawBarShadowEnabled: boolean;

  isDrawValueAboveBarEnabled: boolean;

  isHighlightFullBarEnabled: boolean;
}
declare var BarChartDataProvider: {
  prototype: BarChartDataProvider;
};

declare class BarChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements BarChartDataSetProtocol {
  static alloc(): BarChartDataSet; // inherited from NSObject

  static new(): BarChartDataSet; // inherited from NSObject

  readonly entryCountStacks: number;

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  barBorderColor: UIColor; // inherited from BarChartDataSetProtocol

  barBorderWidth: number; // inherited from BarChartDataSetProtocol

  barShadowColor: UIColor; // inherited from BarChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightAlpha: number; // inherited from BarChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isStacked: boolean; // inherited from BarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  stackLabels: NSArray<string>; // inherited from BarChartDataSetProtocol

  readonly stackSize: number; // inherited from BarChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  valueTextColorAt(index: number): UIColor;
}

interface BarChartDataSetProtocol extends BarLineScatterCandleBubbleChartDataSetProtocol {
  barBorderColor: UIColor;

  barBorderWidth: number;

  barShadowColor: UIColor;

  highlightAlpha: number;

  isStacked: boolean;

  stackLabels: NSArray<string>;

  stackSize: number;
}
declare var BarChartDataSetProtocol: {
  prototype: BarChartDataSetProtocol;
};

declare class BarChartHighlighter extends ChartHighlighter {
  static alloc(): BarChartHighlighter; // inherited from NSObject

  static new(): BarChartHighlighter; // inherited from NSObject

  getClosestStackIndexWithRangesValue(ranges: NSArray<ChartRange> | ChartRange[], value: number): number;

  getStackedHighlightWithHighSetXValueYValue(high: ChartHighlight, set: BarChartDataSetProtocol, xValue: number, yValue: number): ChartHighlight;
}

declare class BarChartRenderer extends BarLineScatterCandleBubbleChartRenderer {
  static alloc(): BarChartRenderer; // inherited from NSObject

  static new(): BarChartRenderer; // inherited from NSObject

  dataProvider: BarChartDataProvider;

  constructor(o: { dataProvider: BarChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawDataSetWithContextDataSetIndex(context: any, dataSet: BarChartDataSetProtocol, index: number): void;

  drawValueWithContextValueXPosYPosFontAlignColorAnchorAngleRadians(context: any, value: string, xPos: number, yPos: number, font: UIFont, align: NSTextAlignment, color: UIColor, anchor: CGPoint, angleRadians: number): void;

  initWithDataProviderAnimatorViewPortHandler(dataProvider: BarChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class BarChartView extends BarLineChartViewBase implements BarChartDataProvider {
  static alloc(): BarChartView; // inherited from NSObject

  static appearance(): BarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): BarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BarChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BarChartView; // inherited from UIAppearance

  static new(): BarChartView; // inherited from NSObject

  drawBarShadowEnabled: boolean;

  drawValueAboveBarEnabled: boolean;

  fitBars: boolean;

  highlightFullBarEnabled: boolean;

  readonly barData: BarChartData; // inherited from BarChartDataProvider

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly isDrawBarShadowEnabled: boolean; // inherited from BarChartDataProvider

  readonly isDrawValueAboveBarEnabled: boolean; // inherited from BarChartDataProvider

  readonly isHighlightFullBarEnabled: boolean; // inherited from BarChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getBarBoundsWithEntry(e: BarChartDataEntry): CGRect;

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  groupBarsFromXGroupSpaceBarSpace(fromX: number, groupSpace: number, barSpace: number): void;

  highlightValueWithXDataSetIndexStackIndex(x: number, dataSetIndex: number, stackIndex: number): void;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class BarLineChartViewBase extends ChartViewBase implements BarLineScatterCandleBubbleChartDataProvider, UIGestureRecognizerDelegate {
  static alloc(): BarLineChartViewBase; // inherited from NSObject

  static appearance(): BarLineChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): BarLineChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BarLineChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BarLineChartViewBase; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BarLineChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BarLineChartViewBase; // inherited from UIAppearance

  static new(): BarLineChartViewBase; // inherited from NSObject

  autoScaleMinMaxEnabled: boolean;

  borderColor: UIColor;

  borderLineWidth: number;

  clipDataToContentEnabled: boolean;

  clipValuesToContentEnabled: boolean;

  doubleTapToZoomEnabled: boolean;

  dragEnabled: boolean;

  dragXEnabled: boolean;

  dragYEnabled: boolean;

  drawBordersEnabled: boolean;

  drawGridBackgroundEnabled: boolean;

  gridBackgroundColor: UIColor;

  readonly hasNoDragOffset: boolean;

  highlightPerDragEnabled: boolean;

  readonly isAnyAxisInverted: boolean;

  readonly isAutoScaleMinMaxEnabled: boolean;

  readonly isDoubleTapToZoomEnabled: boolean;

  readonly isDragEnabled: boolean;

  readonly isDrawBordersEnabled: boolean;

  readonly isDrawGridBackgroundEnabled: boolean;

  readonly isFullyZoomedOut: boolean;

  readonly isHighlightPerDragEnabled: boolean;

  readonly isPinchZoomEnabled: boolean;

  readonly isScaleXEnabled: boolean;

  readonly isScaleYEnabled: boolean;

  keepPositionOnRotation: boolean;

  readonly leftAxis: ChartYAxis;

  leftYAxisRenderer: ChartYAxisRenderer;

  maxVisibleCount: number;

  minOffset: number;

  pinchZoomEnabled: boolean;

  readonly rightAxis: ChartYAxis;

  rightYAxisRenderer: ChartYAxisRenderer;

  readonly scaleX: number;

  scaleXEnabled: boolean;

  readonly scaleY: number;

  scaleYEnabled: boolean;

  readonly visibleXRange: number;

  xAxisRenderer: ChartXAxisRenderer;

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly xRange: number; // inherited from ChartDataProvider

  readonly; // inherited from NSObjectProtocol

  centerViewToAnimatedWithXValueYValueAxisDuration(xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

  centerViewToAnimatedWithXValueYValueAxisDurationEasing(xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

  centerViewToAnimatedWithXValueYValueAxisDurationEasingOption(xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

  centerViewToXValueYValueAxis(xValue: number, yValue: number, axis: AxisDependency): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  fitScreen(): void;

  /**
   * @since 7.0
   */
  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

  /**
   * @since 13.4
   */
  gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

  gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

  gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  /**
   * @since 7.0
   */
  gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  getAxis(axis: AxisDependency): ChartYAxis;

  getAxisRangeWithAxis(axis: AxisDependency): number;

  getDataSetByTouchPointWithPoint(pt: CGPoint): BarLineScatterCandleBubbleChartDataSetProtocol;

  getEntryByTouchPointWithPoint(pt: CGPoint): ChartDataEntry;

  getPositionWithEntryAxis(e: ChartDataEntry, axis: AxisDependency): CGPoint;

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  getYAxisMaxWidth(axis: AxisDependency): number;

  getYAxisMinWidth(axis: AxisDependency): number;

  getYAxisWidth(axis: AxisDependency): number;

  isEqual(object: any): boolean;

  isInvertedWithAxis(axis: AxisDependency): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  moveViewToAnimatedWithXValueYValueAxisDuration(xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

  moveViewToAnimatedWithXValueYValueAxisDurationEasing(xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

  moveViewToAnimatedWithXValueYValueAxisDurationEasingOption(xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

  moveViewToX(xValue: number): void;

  moveViewToXValueYValueAxis(xValue: number, yValue: number, axis: AxisDependency): void;

  moveViewToYAxis(yValue: number, axis: AxisDependency): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  pixelForValuesWithXYAxis(x: number, y: number, axis: AxisDependency): CGPoint;

  resetViewPortOffsets(): void;

  resetZoom(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setDragOffsetX(offset: number): void;

  setDragOffsetY(offset: number): void;

  setScaleEnabled(enabled: boolean): void;

  setScaleMinimaScaleY(scaleX: number, scaleY: number): void;

  setViewPortOffsetsWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): void;

  setVisibleXRangeMaximum(maxXRange: number): void;

  setVisibleXRangeMinimum(minXRange: number): void;

  setVisibleXRangeWithMinXRangeMaxXRange(minXRange: number, maxXRange: number): void;

  setVisibleYRangeMaximumAxis(maxYRange: number, axis: AxisDependency): void;

  setVisibleYRangeMinimumAxis(minYRange: number, axis: AxisDependency): void;

  setVisibleYRangeWithMinYRangeMaxYRangeAxis(minYRange: number, maxYRange: number, axis: AxisDependency): void;

  setYAxisMaxWidthWidth(axis: AxisDependency, width: number): void;

  setYAxisMinWidthWidth(axis: AxisDependency, width: number): void;

  stopDeceleration(): void;

  valueForTouchPointWithPointAxis(pt: CGPoint, axis: AxisDependency): CGPoint;

  zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDuration(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

  zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDurationEasing(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

  zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDurationEasingOption(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

  zoomIn(): void;

  zoomOut(): void;

  zoomToCenterWithScaleXScaleY(scaleX: number, scaleY: number): void;

  zoomWithScaleXScaleYXValueYValueAxis(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency): void;

  zoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): void;
}

declare class BarLineScatterCandleBubbleChartData extends ChartData {
  static alloc(): BarLineScatterCandleBubbleChartData; // inherited from NSObject

  static new(): BarLineScatterCandleBubbleChartData; // inherited from NSObject
}

interface BarLineScatterCandleBubbleChartDataProvider extends ChartDataProvider {
  highestVisibleX: number;

  lowestVisibleX: number;

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}
declare var BarLineScatterCandleBubbleChartDataProvider: {
  prototype: BarLineScatterCandleBubbleChartDataProvider;
};

declare class BarLineScatterCandleBubbleChartDataSet extends ChartDataSet implements BarLineScatterCandleBubbleChartDataSetProtocol {
  static alloc(): BarLineScatterCandleBubbleChartDataSet; // inherited from NSObject

  static new(): BarLineScatterCandleBubbleChartDataSet; // inherited from NSObject

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  valueTextColorAt(index: number): UIColor;
}

interface BarLineScatterCandleBubbleChartDataSetProtocol extends ChartDataSetProtocol {
  highlightColor: UIColor;

  highlightLineDashLengths: NSArray<number>;

  highlightLineDashPhase: number;

  highlightLineWidth: number;
}
declare var BarLineScatterCandleBubbleChartDataSetProtocol: {
  prototype: BarLineScatterCandleBubbleChartDataSetProtocol;
};

declare class BarLineScatterCandleBubbleChartRenderer extends NSObject implements ChartDataRenderer {
  static alloc(): BarLineScatterCandleBubbleChartRenderer; // inherited from NSObject

  static new(): BarLineScatterCandleBubbleChartRenderer; // inherited from NSObject

  accessibleChartElements: NSArray<NSUIAccessibilityElement>;

  readonly animator: ChartAnimator; // inherited from ChartDataRenderer

  readonly viewPortHandler: ChartViewPortHandler; // inherited from ChartRenderer

  createAccessibleHeaderUsingChartAndDataWithDefaultDescription(chart: ChartViewBase, data: ChartData, defaultDescription: string): NSUIAccessibilityElement;

  drawDataWithContext(context: any): void;

  drawExtrasWithContext(context: any): void;

  drawHighlightedWithContextIndices(context: any, indices: NSArray<ChartHighlight> | ChartHighlight[]): void;

  drawValuesWithContext(context: any): void;

  initBuffers(): void;

  isDrawingValuesAllowedWithDataProvider(dataProvider: ChartDataProvider): boolean;
}

declare class BubbleChartData extends BarLineScatterCandleBubbleChartData {
  static alloc(): BubbleChartData; // inherited from NSObject

  static new(): BubbleChartData; // inherited from NSObject

  setHighlightCircleWidth(width: number): void;
}

declare class BubbleChartDataEntry extends ChartDataEntry {
  static alloc(): BubbleChartDataEntry; // inherited from NSObject

  static new(): BubbleChartDataEntry; // inherited from NSObject

  size: number;

  constructor(o: { x: number; y: number; size: number });

  constructor(o: { x: number; y: number; size: number; data: any });

  constructor(o: { x: number; y: number; size: number; icon: UIImage });

  constructor(o: { x: number; y: number; size: number; icon: UIImage; data: any });

  initWithXYSize(x: number, y: number, size: number): this;

  initWithXYSizeData(x: number, y: number, size: number, data: any): this;

  initWithXYSizeIcon(x: number, y: number, size: number, icon: UIImage): this;

  initWithXYSizeIconData(x: number, y: number, size: number, icon: UIImage, data: any): this;
}

interface BubbleChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {
  bubbleData: BubbleChartData;
}
declare var BubbleChartDataProvider: {
  prototype: BubbleChartDataProvider;
};

declare class BubbleChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements BubbleChartDataSetProtocol {
  static alloc(): BubbleChartDataSet; // inherited from NSObject

  static new(): BubbleChartDataSet; // inherited from NSObject

  normalizeSizeEnabled: boolean;

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightCircleWidth: number; // inherited from BubbleChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isNormalizeSizeEnabled: boolean; // inherited from BubbleChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  readonly maxSize: number; // inherited from BubbleChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  valueTextColorAt(index: number): UIColor;
}

interface BubbleChartDataSetProtocol extends BarLineScatterCandleBubbleChartDataSetProtocol {
  highlightCircleWidth: number;

  isNormalizeSizeEnabled: boolean;

  maxSize: number;
}
declare var BubbleChartDataSetProtocol: {
  prototype: BubbleChartDataSetProtocol;
};

declare class BubbleChartRenderer extends BarLineScatterCandleBubbleChartRenderer {
  static alloc(): BubbleChartRenderer; // inherited from NSObject

  static new(): BubbleChartRenderer; // inherited from NSObject

  dataProvider: BubbleChartDataProvider;

  constructor(o: { dataProvider: BubbleChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawDataSetWithContextDataSetDataSetIndex(context: any, dataSet: BubbleChartDataSetProtocol, dataSetIndex: number): void;

  initWithDataProviderAnimatorViewPortHandler(dataProvider: BubbleChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class BubbleChartView extends BarLineChartViewBase implements BubbleChartDataProvider {
  static alloc(): BubbleChartView; // inherited from NSObject

  static appearance(): BubbleChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): BubbleChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BubbleChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BubbleChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BubbleChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): BubbleChartView; // inherited from UIAppearance

  static new(): BubbleChartView; // inherited from NSObject

  readonly bubbleData: BubbleChartData; // inherited from BubbleChartDataProvider

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class CandleChartData extends BarLineScatterCandleBubbleChartData {
  static alloc(): CandleChartData; // inherited from NSObject

  static new(): CandleChartData; // inherited from NSObject
}

declare class CandleChartDataEntry extends ChartDataEntry {
  static alloc(): CandleChartDataEntry; // inherited from NSObject

  static new(): CandleChartDataEntry; // inherited from NSObject

  readonly bodyRange: number;

  close: number;

  high: number;

  low: number;

  open: number;

  readonly shadowRange: number;

  constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number });

  constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; data: any });

  constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; icon: UIImage });

  constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; icon: UIImage; data: any });

  initWithXShadowHShadowLOpenClose(x: number, shadowH: number, shadowL: number, open: number, close: number): this;

  initWithXShadowHShadowLOpenCloseData(x: number, shadowH: number, shadowL: number, open: number, close: number, data: any): this;

  initWithXShadowHShadowLOpenCloseIcon(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: UIImage): this;

  initWithXShadowHShadowLOpenCloseIconData(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: UIImage, data: any): this;
}

interface CandleChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {
  candleData: CandleChartData;
}
declare var CandleChartDataProvider: {
  prototype: CandleChartDataProvider;
};

declare class CandleChartDataSet extends LineScatterCandleRadarChartDataSet implements CandleChartDataSetProtocol {
  static alloc(): CandleChartDataSet; // inherited from NSObject

  static new(): CandleChartDataSet; // inherited from NSObject

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  barSpace: number; // inherited from CandleChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  decreasingColor: UIColor; // inherited from CandleChartDataSetProtocol

  decreasingFilled: boolean; // inherited from CandleChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  increasingColor: UIColor; // inherited from CandleChartDataSetProtocol

  increasingFilled: boolean; // inherited from CandleChartDataSetProtocol

  readonly isDecreasingFilled: boolean; // inherited from CandleChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isIncreasingFilled: boolean; // inherited from CandleChartDataSetProtocol

  readonly isShadowColorSameAsCandle: boolean; // inherited from CandleChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  neutralColor: UIColor; // inherited from CandleChartDataSetProtocol

  shadowColor: UIColor; // inherited from CandleChartDataSetProtocol

  shadowColorSameAsCandle: boolean; // inherited from CandleChartDataSetProtocol

  shadowWidth: number; // inherited from CandleChartDataSetProtocol

  showCandleBar: boolean; // inherited from CandleChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  valueTextColorAt(index: number): UIColor;
}

interface CandleChartDataSetProtocol extends LineScatterCandleRadarChartDataSetProtocol {
  barSpace: number;

  decreasingColor: UIColor;

  decreasingFilled: boolean;

  increasingColor: UIColor;

  increasingFilled: boolean;

  isDecreasingFilled: boolean;

  isIncreasingFilled: boolean;

  isShadowColorSameAsCandle: boolean;

  neutralColor: UIColor;

  shadowColor: UIColor;

  shadowColorSameAsCandle: boolean;

  shadowWidth: number;

  showCandleBar: boolean;
}
declare var CandleChartDataSetProtocol: {
  prototype: CandleChartDataSetProtocol;
};

declare class CandleStickChartRenderer extends LineScatterCandleRadarChartRenderer {
  static alloc(): CandleStickChartRenderer; // inherited from NSObject

  static new(): CandleStickChartRenderer; // inherited from NSObject

  dataProvider: CandleChartDataProvider;

  constructor(o: { dataProvider: CandleChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawDataSetWithContextDataSet(context: any, dataSet: CandleChartDataSetProtocol): void;

  initWithDataProviderAnimatorViewPortHandler(dataProvider: CandleChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class CandleStickChartView extends BarLineChartViewBase implements CandleChartDataProvider {
  static alloc(): CandleStickChartView; // inherited from NSObject

  static appearance(): CandleStickChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): CandleStickChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CandleStickChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CandleStickChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CandleStickChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CandleStickChartView; // inherited from UIAppearance

  static new(): CandleStickChartView; // inherited from NSObject

  readonly candleData: CandleChartData; // inherited from CandleChartDataProvider

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class ChartAnimator extends NSObject {
  static alloc(): ChartAnimator; // inherited from NSObject

  static new(): ChartAnimator; // inherited from NSObject

  delegate: ChartAnimatorDelegate;

  phaseX: number;

  phaseY: number;

  stopBlock: () => void;

  updateBlock: () => void;

  animateWithXAxisDurationEasing(xAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithXAxisDurationEasingOption(xAxisDuration: number, easingOption: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDurationEasing(xAxisDuration: number, yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithXAxisDurationYAxisDurationEasingOption(xAxisDuration: number, yAxisDuration: number, easingOption: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(xAxisDuration: number, yAxisDuration: number, easingOptionX: ChartEasingOption, easingOptionY: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDurationEasingXEasingY(xAxisDuration: number, yAxisDuration: number, easingX: (p1: number, p2: number) => number, easingY: (p1: number, p2: number) => number): void;

  animateWithYAxisDurationEasing(yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithYAxisDurationEasingOption(yAxisDuration: number, easingOption: ChartEasingOption): void;

  stop(): void;
}

interface ChartAnimatorDelegate {
  animatorStopped(animator: ChartAnimator): void;

  animatorUpdated(animator: ChartAnimator): void;
}
declare var ChartAnimatorDelegate: {
  prototype: ChartAnimatorDelegate;
};

declare class ChartAxisBase extends ChartComponentBase {
  static alloc(): ChartAxisBase; // inherited from NSObject

  static new(): ChartAxisBase; // inherited from NSObject

  axisLineColor: UIColor;

  axisLineDashLengths: NSArray<number>;

  axisLineDashPhase: number;

  axisLineWidth: number;

  axisMaxLabels: number;

  axisMaximum: number;

  axisMinLabels: number;

  axisMinimum: number;

  axisRange: number;

  centerAxisLabelsEnabled: boolean;

  centeredEntries: NSArray<number>;

  decimals: number;

  drawAxisLineEnabled: boolean;

  drawGridLinesBehindDataEnabled: boolean;

  drawGridLinesEnabled: boolean;

  drawLabelsEnabled: boolean;

  drawLimitLinesBehindDataEnabled: boolean;

  entries: NSArray<number>;

  readonly entryCount: number;

  forceLabelsEnabled: boolean;

  granularity: number;

  granularityEnabled: boolean;

  gridAntialiasEnabled: boolean;

  gridColor: UIColor;

  gridLineCap: CGLineCap;

  gridLineDashLengths: NSArray<number>;

  gridLineDashPhase: number;

  gridLineWidth: number;

  readonly isAxisMaxCustom: boolean;

  readonly isAxisMinCustom: boolean;

  readonly isCenterAxisLabelsEnabled: boolean;

  readonly isDrawAxisLineEnabled: boolean;

  readonly isDrawGridLinesBehindDataEnabled: boolean;

  readonly isDrawGridLinesEnabled: boolean;

  readonly isDrawLabelsEnabled: boolean;

  readonly isDrawLimitLinesBehindDataEnabled: boolean;

  readonly isForceLabelsEnabled: boolean;

  readonly isGranularityEnabled: boolean;

  labelCount: number;

  labelFont: UIFont;

  labelTextColor: UIColor;

  readonly limitLines: NSArray<ChartLimitLine>;

  spaceMax: number;

  spaceMin: number;

  valueFormatter: ChartAxisValueFormatter;

  addLimitLine(line: ChartLimitLine): void;

  calculateWithMinMax(dataMin: number, dataMax: number): void;

  getFormattedLabel(index: number): string;

  getLongestLabel(): string;

  removeAllLimitLines(): void;

  removeLimitLine(line: ChartLimitLine): void;

  resetCustomAxisMax(): void;

  resetCustomAxisMin(): void;

  setLabelCountForce(count: number, force: boolean): void;
}

interface ChartAxisValueFormatter {
  stringForValueAxis(value: number, axis: ChartAxisBase): string;
}
declare var ChartAxisValueFormatter: {
  prototype: ChartAxisValueFormatter;
};

declare class ChartBaseDataSet extends NSObject implements ChartDataSetProtocol, NSCopying {
  static alloc(): ChartBaseDataSet; // inherited from NSObject

  static new(): ChartBaseDataSet; // inherited from NSObject

  axisDependency: AxisDependency;

  colors: NSArray<UIColor>;

  form: ChartLegendForm;

  formLineDashLengths: NSArray<number>;

  formLineDashPhase: number;

  formLineWidth: number;

  formSize: number;

  label: string;

  valueColors: NSArray<UIColor>;

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  constructor(o: { label: string });

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  initWithLabel(label: string): this;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setColorAlpha(color: UIColor, alpha: number): void;

  setColorsAlpha(colors: NSArray<UIColor> | UIColor[], alpha: number): void;

  valueTextColorAt(index: number): UIColor;
}

declare class ChartColorFill extends NSObject implements ChartFill {
  static alloc(): ChartColorFill; // inherited from NSObject

  static new(): ChartColorFill; // inherited from NSObject

  readonly color: any;

  constructor(o: { cgColor: any });

  constructor(o: { color: UIColor });

  fillPathWithContextRect(context: any, rect: CGRect): void;

  initWithCgColor(cgColor: any): this;

  initWithColor(color: UIColor): this;
}

declare class ChartColorTemplates extends NSObject {
  static alloc(): ChartColorTemplates; // inherited from NSObject

  static colorFromString(colorString: string): UIColor;

  static colorful(): NSArray<UIColor>;

  static joyful(): NSArray<UIColor>;

  static liberty(): NSArray<UIColor>;

  static material(): NSArray<UIColor>;

  static new(): ChartColorTemplates; // inherited from NSObject

  static pastel(): NSArray<UIColor>;

  static vordiplom(): NSArray<UIColor>;
}

declare class ChartComponentBase extends NSObject {
  static alloc(): ChartComponentBase; // inherited from NSObject

  static new(): ChartComponentBase; // inherited from NSObject

  enabled: boolean;

  readonly isEnabled: boolean;

  xOffset: number;

  yOffset: number;
}

declare class ChartData extends NSObject {
  static alloc(): ChartData; // inherited from NSObject

  static new(): ChartData; // inherited from NSObject

  accessibilityEntryLabelPrefix: string;

  accessibilityEntryLabelSuffix: string;

  accessibilityEntryLabelSuffixIsCount: boolean;

  readonly colors: NSArray<UIColor>;

  readonly dataSetCount: number;

  dataSets: NSArray<ChartDataSetProtocol>;

  readonly entryCount: number;

  isHighlightEnabled: boolean;

  readonly maxEntryCountSet: ChartDataSetProtocol;

  readonly xMax: number;

  readonly xMin: number;

  readonly yMax: number;

  readonly yMin: number;

  constructor(o: { dataSet: ChartDataSetProtocol });

  constructor(o: { dataSets: NSArray<ChartDataSetProtocol> | ChartDataSetProtocol[] });

  addDataSet(newElement: ChartDataSetProtocol): void;

  addEntryDataSetIndex(e: ChartDataEntry, dataSetIndex: number): void;

  calcMinMax(): void;

  calcMinMaxWithDataSet(d: ChartDataSetProtocol): void;

  calcMinMaxWithEntryAxis(e: ChartDataEntry, axis: AxisDependency): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clearValues(): void;

  containsWithDataSet(dataSet: ChartDataSetProtocol): boolean;

  dataSetAtIndex(index: number): ChartDataSetProtocol;

  dataSetForLabelIgnorecase(label: string, ignorecase: boolean): ChartDataSetProtocol;

  entryFor(highlight: ChartHighlight): ChartDataEntry;

  getDataSetForEntry(e: ChartDataEntry): ChartDataSetProtocol;

  getFirstLeftWithDataSets(dataSets: NSArray<ChartDataSetProtocol> | ChartDataSetProtocol[]): ChartDataSetProtocol;

  getFirstRightWithDataSets(dataSets: NSArray<ChartDataSetProtocol> | ChartDataSetProtocol[]): ChartDataSetProtocol;

  getYMaxWithAxis(axis: AxisDependency): number;

  getYMinWithAxis(axis: AxisDependency): number;

  indexOf(dataSet: ChartDataSetProtocol): number;

  initWithDataSet(dataSet: ChartDataSetProtocol): this;

  initWithDataSets(dataSets: NSArray<ChartDataSetProtocol> | ChartDataSetProtocol[]): this;

  notifyDataChanged(): void;

  removeDataSet(dataSet: ChartDataSetProtocol): ChartDataSetProtocol;

  removeDataSetByIndex(position: number): ChartDataSetProtocol;

  removeEntryDataSetIndex(entry: ChartDataEntry, dataSetIndex: number): boolean;

  removeEntryWithXValueDataSetIndex(xValue: number, dataSetIndex: number): boolean;

  setDrawValues(enabled: boolean): void;

  setValueFont(font: UIFont): void;

  setValueFormatter(formatter: ChartValueFormatter): void;

  setValueTextColor(color: UIColor): void;
}

declare class ChartDataApproximator extends NSObject {
  static alloc(): ChartDataApproximator; // inherited from NSObject

  static new(): ChartDataApproximator; // inherited from NSObject

  static reduceWithDouglasPeukerNResultCount(points: NSArray<NSValue> | NSValue[], resultCount: number): NSArray<NSValue>;

  static reduceWithDouglasPeukerTolerance(points: NSArray<NSValue> | NSValue[], tolerance: number): NSArray<NSValue>;
}

declare class ChartDataEntry extends ChartDataEntryBase implements NSCopying {
  static alloc(): ChartDataEntry; // inherited from NSObject

  static new(): ChartDataEntry; // inherited from NSObject

  x: number;

  constructor(o: { x: number; y: number });

  constructor(o: { x: number; y: number; data: any });

  constructor(o: { x: number; y: number; icon: UIImage });

  constructor(o: { x: number; y: number; icon: UIImage; data: any });

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  initWithXY(x: number, y: number): this;

  initWithXYData(x: number, y: number, data: any): this;

  initWithXYIcon(x: number, y: number, icon: UIImage): this;

  initWithXYIconData(x: number, y: number, icon: UIImage, data: any): this;
}

declare class ChartDataEntryBase extends NSObject {
  static alloc(): ChartDataEntryBase; // inherited from NSObject

  static new(): ChartDataEntryBase; // inherited from NSObject

  data: any;

  icon: UIImage;

  y: number;

  constructor(o: { y: number });

  constructor(o: { y: number; data: any });

  constructor(o: { y: number; icon: UIImage });

  constructor(o: { y: number; icon: UIImage; data: any });

  initWithY(y: number): this;

  initWithYData(y: number, data: any): this;

  initWithYIcon(y: number, icon: UIImage): this;

  initWithYIconData(y: number, icon: UIImage, data: any): this;
}

interface ChartDataProvider {
  centerOffsets: CGPoint;

  chartXMax: number;

  chartXMin: number;

  chartYMax: number;

  chartYMin: number;

  data: ChartData;

  maxHighlightDistance: number;

  maxVisibleCount: number;

  xRange: number;
}
declare var ChartDataProvider: {
  prototype: ChartDataProvider;
};

interface ChartDataRenderer extends ChartRenderer {
  accessibleChartElements: NSArray<NSUIAccessibilityElement>;

  animator: ChartAnimator;

  createAccessibleHeaderUsingChartAndDataWithDefaultDescription(chart: ChartViewBase, data: ChartData, defaultDescription: string): NSUIAccessibilityElement;

  drawDataWithContext(context: any): void;

  drawExtrasWithContext(context: any): void;

  drawHighlightedWithContextIndices(context: any, indices: NSArray<ChartHighlight> | ChartHighlight[]): void;

  drawValuesWithContext(context: any): void;

  initBuffers(): void;

  isDrawingValuesAllowedWithDataProvider(dataProvider: ChartDataProvider): boolean;
}
declare var ChartDataRenderer: {
  prototype: ChartDataRenderer;
};

declare class ChartDataSet extends ChartBaseDataSet {
  static alloc(): ChartDataSet; // inherited from NSObject

  static new(): ChartDataSet; // inherited from NSObject

  readonly entries: NSArray<ChartDataEntry>;
  [index: number]: ChartDataEntry;

  constructor(o: { entries: NSArray<ChartDataEntry> | ChartDataEntry[] });

  constructor(o: { entries: NSArray<ChartDataEntry> | ChartDataEntry[]; label: string });

  calcMinMaxXWithEntry(e: ChartDataEntry): void;

  calcMinMaxYWithEntry(e: ChartDataEntry): void;

  initWithEntries(entries: NSArray<ChartDataEntry> | ChartDataEntry[]): this;

  initWithEntriesLabel(entries: NSArray<ChartDataEntry> | ChartDataEntry[], label: string): this;

  objectAtIndexedSubscript(position: number): ChartDataEntry;

  removeAllWithKeepingCapacity(keepCapacity: boolean): void;

  replaceEntries(entries: NSArray<ChartDataEntry> | ChartDataEntry[]): void;

  setObjectAtIndexedSubscript(newValue: ChartDataEntry, position: number): void;
}

interface ChartDataSetProtocol {
  axisDependency: AxisDependency;

  colors: NSArray<UIColor>;

  drawIconsEnabled: boolean;

  drawValuesEnabled: boolean;

  entryCount: number;

  form: ChartLegendForm;

  formLineDashLengths: NSArray<number>;

  formLineDashPhase: number;

  formLineWidth: number;

  formSize: number;

  highlightEnabled: boolean;

  iconsOffset: CGPoint;

  isDrawIconsEnabled: boolean;

  isDrawValuesEnabled: boolean;

  isHighlightEnabled: boolean;

  isVisible: boolean;

  label: string;

  valueColors: NSArray<UIColor>;

  valueFont: UIFont;

  valueFormatter: ChartValueFormatter;

  valueLabelAngle: number;

  valueTextColor: UIColor;

  visible: boolean;

  xMax: number;

  xMin: number;

  yMax: number;

  yMin: number;

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  valueTextColorAt(index: number): UIColor;
}
declare var ChartDataSetProtocol: {
  prototype: ChartDataSetProtocol;
};

declare const enum ChartDataSetRounding {
  Up = 0,

  Down = 1,

  Closest = 2,
}

declare class ChartDefaultAxisValueFormatter extends NSObject implements ChartAxisValueFormatter {
  static alloc(): ChartDefaultAxisValueFormatter; // inherited from NSObject

  static new(): ChartDefaultAxisValueFormatter; // inherited from NSObject

  static withBlock(block: (p1: number, p2: ChartAxisBase) => string): ChartDefaultAxisValueFormatter;

  block: (p1: number, p2: ChartAxisBase) => string;

  formatter: NSNumberFormatter;

  hasAutoDecimals: boolean;

  constructor(o: { block: (p1: number, p2: ChartAxisBase) => string });

  constructor(o: { decimals: number });

  constructor(o: { formatter: NSNumberFormatter });

  initWithBlock(block: (p1: number, p2: ChartAxisBase) => string): this;

  initWithDecimals(decimals: number): this;

  initWithFormatter(formatter: NSNumberFormatter): this;

  stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class ChartDefaultFillFormatter extends NSObject implements ChartFillFormatter {
  static alloc(): ChartDefaultFillFormatter; // inherited from NSObject

  static new(): ChartDefaultFillFormatter; // inherited from NSObject

  static withBlock(block: (p1: LineChartDataSetProtocol, p2: LineChartDataProvider) => number): ChartDefaultFillFormatter;

  block: (p1: LineChartDataSetProtocol, p2: LineChartDataProvider) => number;

  constructor(o: { block: (p1: LineChartDataSetProtocol, p2: LineChartDataProvider) => number });

  getFillLinePositionWithDataSetDataProvider(dataSet: LineChartDataSetProtocol, dataProvider: LineChartDataProvider): number;

  initWithBlock(block: (p1: LineChartDataSetProtocol, p2: LineChartDataProvider) => number): this;
}

declare class ChartDefaultValueFormatter extends NSObject implements ChartValueFormatter {
  static alloc(): ChartDefaultValueFormatter; // inherited from NSObject

  static new(): ChartDefaultValueFormatter; // inherited from NSObject

  static withBlock(block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string): ChartDefaultValueFormatter;

  block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string;

  formatter: NSNumberFormatter;

  hasAutoDecimals: boolean;

  constructor(o: { block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string });

  constructor(o: { decimals: number });

  constructor(o: { formatter: NSNumberFormatter });

  initWithBlock(block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string): this;

  initWithDecimals(decimals: number): this;

  initWithFormatter(formatter: NSNumberFormatter): this;

  stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: ChartDataEntry, dataSetIndex: number, viewPortHandler: ChartViewPortHandler): string;
}

declare class ChartDescription extends ChartComponentBase {
  static alloc(): ChartDescription; // inherited from NSObject

  static new(): ChartDescription; // inherited from NSObject

  font: UIFont;

  text: string;

  textAlign: NSTextAlignment;

  textColor: UIColor;
}

declare const enum ChartEasingOption {
  Linear = 0,

  EaseInQuad = 1,

  EaseOutQuad = 2,

  EaseInOutQuad = 3,

  EaseInCubic = 4,

  EaseOutCubic = 5,

  EaseInOutCubic = 6,

  EaseInQuart = 7,

  EaseOutQuart = 8,

  EaseInOutQuart = 9,

  EaseInQuint = 10,

  EaseOutQuint = 11,

  EaseInOutQuint = 12,

  EaseInSine = 13,

  EaseOutSine = 14,

  EaseInOutSine = 15,

  EaseInExpo = 16,

  EaseOutExpo = 17,

  EaseInOutExpo = 18,

  EaseInCirc = 19,

  EaseOutCirc = 20,

  EaseInOutCirc = 21,

  EaseInElastic = 22,

  EaseOutElastic = 23,

  EaseInOutElastic = 24,

  EaseInBack = 25,

  EaseOutBack = 26,

  EaseInOutBack = 27,

  EaseInBounce = 28,

  EaseOutBounce = 29,

  EaseInOutBounce = 30,
}

declare class ChartEmptyFill extends NSObject implements ChartFill {
  static alloc(): ChartEmptyFill; // inherited from NSObject

  static new(): ChartEmptyFill; // inherited from NSObject

  fillPathWithContextRect(context: any, rect: CGRect): void;
}

interface ChartFill {
  fillPathWithContextRect(context: any, rect: CGRect): void;
}
declare var ChartFill: {
  prototype: ChartFill;
};

interface ChartFillFormatter {
  getFillLinePositionWithDataSetDataProvider(dataSet: LineChartDataSetProtocol, dataProvider: LineChartDataProvider): number;
}
declare var ChartFillFormatter: {
  prototype: ChartFillFormatter;
};

declare class ChartHighlight extends NSObject {
  static alloc(): ChartHighlight; // inherited from NSObject

  static new(): ChartHighlight; // inherited from NSObject

  readonly axis: AxisDependency;

  dataIndex: number;

  readonly dataSetIndex: number;

  drawX: number;

  drawY: number;

  readonly isStacked: boolean;

  readonly stackIndex: number;

  readonly x: number;

  readonly xPx: number;

  readonly y: number;

  readonly yPx: number;

  constructor(o: { x: number; dataSetIndex: number; stackIndex: number });

  constructor(o: { x: number; y: number; dataSetIndex: number; dataIndex: number });

  constructor(o: { x: number; y: number; xPx: number; yPx: number; dataIndex: number; dataSetIndex: number; stackIndex: number; axis: AxisDependency });

  constructor(o: { x: number; y: number; xPx: number; yPx: number; dataSetIndex: number; axis: AxisDependency });

  constructor(o: { x: number; y: number; xPx: number; yPx: number; dataSetIndex: number; stackIndex: number; axis: AxisDependency });

  initWithXDataSetIndexStackIndex(x: number, dataSetIndex: number, stackIndex: number): this;

  initWithXYDataSetIndexDataIndex(x: number, y: number, dataSetIndex: number, dataIndex: number): this;

  initWithXYXPxYPxDataIndexDataSetIndexStackIndexAxis(x: number, y: number, xPx: number, yPx: number, dataIndex: number, dataSetIndex: number, stackIndex: number, axis: AxisDependency): this;

  initWithXYXPxYPxDataSetIndexAxis(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, axis: AxisDependency): this;

  initWithXYXPxYPxDataSetIndexStackIndexAxis(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, stackIndex: number, axis: AxisDependency): this;

  setDrawWithPt(pt: CGPoint): void;

  setDrawWithXY(x: number, y: number): void;
}

declare class ChartHighlighter extends NSObject implements ChartHighlighterProtocol {
  static alloc(): ChartHighlighter; // inherited from NSObject

  static new(): ChartHighlighter; // inherited from NSObject

  chart: ChartDataProvider;

  constructor(o: { chart: ChartDataProvider });

  getHighlightWithXValueXY(xVal: number, x: number, y: number): ChartHighlight;

  getHighlightWithXY(x: number, y: number): ChartHighlight;

  getHighlightsWithXValueXY(xValue: number, x: number, y: number): NSArray<ChartHighlight>;

  getValsForTouchWithXY(x: number, y: number): CGPoint;

  initWithChart(chart: ChartDataProvider): this;
}

interface ChartHighlighterProtocol {
  getHighlightWithXY(x: number, y: number): ChartHighlight;
}
declare var ChartHighlighterProtocol: {
  prototype: ChartHighlighterProtocol;
};

declare class ChartImageFill extends NSObject implements ChartFill {
  static alloc(): ChartImageFill; // inherited from NSObject

  static new(): ChartImageFill; // inherited from NSObject

  readonly image: any;

  readonly isTiled: boolean;

  constructor(o: { cgImage: any; isTiled: boolean });

  constructor(o: { image: UIImage; isTiled: boolean });

  fillPathWithContextRect(context: any, rect: CGRect): void;

  initWithCgImageIsTiled(cgImage: any, isTiled: boolean): this;

  initWithImageIsTiled(image: UIImage, isTiled: boolean): this;
}

declare class ChartIndexAxisValueFormatter extends NSObject implements ChartAxisValueFormatter {
  static alloc(): ChartIndexAxisValueFormatter; // inherited from NSObject

  static new(): ChartIndexAxisValueFormatter; // inherited from NSObject

  static withValues(values: NSArray<string> | string[]): ChartIndexAxisValueFormatter;

  values: NSArray<string>;

  constructor(o: { values: NSArray<string> | string[] });

  initWithValues(values: NSArray<string> | string[]): this;

  stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class ChartLayerFill extends NSObject implements ChartFill {
  static alloc(): ChartLayerFill; // inherited from NSObject

  static new(): ChartLayerFill; // inherited from NSObject

  readonly layer: any;

  constructor(o: { layer: any });

  fillPathWithContextRect(context: any, rect: CGRect): void;

  initWithLayer(layer: any): this;
}

declare class ChartLegend extends ChartComponentBase {
  static alloc(): ChartLegend; // inherited from NSObject

  static new(): ChartLegend; // inherited from NSObject

  calculatedLabelBreakPoints: NSArray<number>;

  calculatedLabelSizes: NSArray<NSValue>;

  calculatedLineSizes: NSArray<NSValue>;

  direction: ChartLegendDirection;

  drawInside: boolean;

  entries: NSArray<ChartLegendEntry>;

  extraEntries: NSArray<ChartLegendEntry>;

  font: UIFont;

  form: ChartLegendForm;

  formLineDashLengths: NSArray<number>;

  formLineDashPhase: number;

  formLineWidth: number;

  formSize: number;

  formToTextSpace: number;

  horizontalAlignment: ChartLegendHorizontalAlignment;

  readonly isDrawInsideEnabled: boolean;

  readonly isLegendCustom: boolean;

  readonly isWordWrapEnabled: boolean;

  maxSizePercent: number;

  neededHeight: number;

  neededWidth: number;

  orientation: ChartLegendOrientation;

  stackSpace: number;

  textColor: UIColor;

  textHeightMax: number;

  textWidthMax: number;

  verticalAlignment: ChartLegendVerticalAlignment;

  wordWrapEnabled: boolean;

  xEntrySpace: number;

  yEntrySpace: number;

  constructor(o: { entries: NSArray<ChartLegendEntry> | ChartLegendEntry[] });

  calculateDimensionsWithLabelFontViewPortHandler(labelFont: UIFont, viewPortHandler: ChartViewPortHandler): void;

  getMaximumEntrySizeWithFont(font: UIFont): CGSize;

  initWithEntries(entries: NSArray<ChartLegendEntry> | ChartLegendEntry[]): this;

  resetCustom(): void;

  setCustomWithEntries(entries: NSArray<ChartLegendEntry> | ChartLegendEntry[]): void;
}

declare const enum ChartLegendDirection {
  LeftToRight = 0,

  RightToLeft = 1,
}

declare class ChartLegendEntry extends NSObject {
  static alloc(): ChartLegendEntry; // inherited from NSObject

  static new(): ChartLegendEntry; // inherited from NSObject

  form: ChartLegendForm;

  formColor: UIColor;

  formLineDashLengths: NSArray<number>;

  formLineDashPhase: number;

  formLineWidth: number;

  formSize: number;

  label: string;

  labelColor: UIColor;

  constructor(o: { label: string });

  initWithLabel(label: string): this;
}

declare const enum ChartLegendForm {
  None = 0,

  Empty = 1,

  Default = 2,

  Square = 3,

  Circle = 4,

  Line = 5,
}

declare const enum ChartLegendHorizontalAlignment {
  Left = 0,

  Center = 1,

  Right = 2,
}

declare const enum ChartLegendOrientation {
  Horizontal = 0,

  Vertical = 1,
}

declare class ChartLegendRenderer extends NSObject implements ChartRenderer {
  static alloc(): ChartLegendRenderer; // inherited from NSObject

  static new(): ChartLegendRenderer; // inherited from NSObject

  legend: ChartLegend;

  readonly viewPortHandler: ChartViewPortHandler; // inherited from ChartRenderer

  constructor(o: { viewPortHandler: ChartViewPortHandler; legend: ChartLegend });

  computeLegendWithData(data: ChartData): void;

  drawFormWithContextXYEntryLegend(context: any, x: number, y: number, entry: ChartLegendEntry, legend: ChartLegend): void;

  drawLabelWithContextXYLabelFontTextColor(context: any, x: number, y: number, label: string, font: UIFont, textColor: UIColor): void;

  initWithViewPortHandlerLegend(viewPortHandler: ChartViewPortHandler, legend: ChartLegend): this;

  renderLegendWithContext(context: any): void;
}

declare const enum ChartLegendVerticalAlignment {
  Top = 0,

  Center = 1,

  Bottom = 2,
}

declare const enum ChartLimitLabelPosition {
  LeftTop = 0,

  LeftBottom = 1,

  RightTop = 2,

  RightBottom = 3,
}

declare class ChartLimitLine extends ChartComponentBase {
  static alloc(): ChartLimitLine; // inherited from NSObject

  static new(): ChartLimitLine; // inherited from NSObject

  drawLabelEnabled: boolean;

  label: string;

  labelPosition: ChartLimitLabelPosition;

  labelRotationAngle: number;

  limit: number;

  lineColor: UIColor;

  lineDashLengths: NSArray<number>;

  lineDashPhase: number;

  lineWidth: number;

  valueFont: UIFont;

  valueTextColor: UIColor;

  constructor(o: { limit: number });

  constructor(o: { limit: number; label: string });

  initWithLimit(limit: number): this;

  initWithLimitLabel(limit: number, label: string): this;
}

declare class ChartLinearGradientFill extends NSObject implements ChartFill {
  static alloc(): ChartLinearGradientFill; // inherited from NSObject

  static new(): ChartLinearGradientFill; // inherited from NSObject

  readonly angle: number;

  readonly gradient: any;

  constructor(o: { gradient: any; angle: number });

  fillPathWithContextRect(context: any, rect: CGRect): void;

  initWithGradientAngle(gradient: any, angle: number): this;
}

interface ChartMarker {
  offset: CGPoint;

  drawWithContextPoint(context: any, point: CGPoint): void;

  offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

  refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}
declare var ChartMarker: {
  prototype: ChartMarker;
};

declare class ChartMarkerImage extends NSObject implements ChartMarker {
  static alloc(): ChartMarkerImage; // inherited from NSObject

  static new(): ChartMarkerImage; // inherited from NSObject

  chartView: ChartViewBase;

  image: UIImage;

  offset: CGPoint;

  size: CGSize;

  drawWithContextPoint(context: any, point: CGPoint): void;

  offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

  refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}

declare class ChartMarkerView extends NSUIView implements ChartMarker {
  static alloc(): ChartMarkerView; // inherited from NSObject

  static appearance(): ChartMarkerView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): ChartMarkerView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ChartMarkerView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ChartMarkerView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ChartMarkerView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ChartMarkerView; // inherited from UIAppearance

  static new(): ChartMarkerView; // inherited from NSObject

  static viewFromXibIn(bundle: NSBundle): ChartMarkerView;

  chartView: ChartViewBase;

  offset: CGPoint;

  drawWithContextPoint(context: any, point: CGPoint): void;

  offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

  refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}

declare class ChartRadialGradientFill extends NSObject implements ChartFill {
  static alloc(): ChartRadialGradientFill; // inherited from NSObject

  static new(): ChartRadialGradientFill; // inherited from NSObject

  readonly endOffsetPercent: CGPoint;

  readonly endRadiusPercent: number;

  readonly gradient: any;

  readonly startOffsetPercent: CGPoint;

  readonly startRadiusPercent: number;

  constructor(o: { gradient: any });

  constructor(o: { gradient: any; startOffsetPercent: CGPoint; endOffsetPercent: CGPoint; startRadiusPercent: number; endRadiusPercent: number });

  fillPathWithContextRect(context: any, rect: CGRect): void;

  initWithGradient(gradient: any): this;

  initWithGradientStartOffsetPercentEndOffsetPercentStartRadiusPercentEndRadiusPercent(gradient: any, startOffsetPercent: CGPoint, endOffsetPercent: CGPoint, startRadiusPercent: number, endRadiusPercent: number): this;
}

declare class ChartRange extends NSObject {
  static alloc(): ChartRange; // inherited from NSObject

  static new(): ChartRange; // inherited from NSObject

  from: number;

  to: number;

  constructor(o: { from: number; to: number });

  contains(value: number): boolean;

  initFromTo(from: number, to: number): this;

  isLarger(value: number): boolean;

  isSmaller(value: number): boolean;
}

interface ChartRenderer {
  viewPortHandler: ChartViewPortHandler;
}
declare var ChartRenderer: {
  prototype: ChartRenderer;
};

declare class ChartTransformer extends NSObject {
  static alloc(): ChartTransformer; // inherited from NSObject

  static new(): ChartTransformer; // inherited from NSObject

  readonly pixelToValueMatrix: CGAffineTransform;

  readonly valueToPixelMatrix: CGAffineTransform;

  constructor(o: { viewPortHandler: ChartViewPortHandler });

  initWithViewPortHandler(viewPortHandler: ChartViewPortHandler): this;

  pixelForValuesWithXY(x: number, y: number): CGPoint;

  prepareMatrixOffsetWithInverted(inverted: boolean): void;

  prepareMatrixValuePxWithChartXMinDeltaXDeltaYChartYMin(chartXMin: number, deltaX: number, deltaY: number, chartYMin: number): void;

  valueForTouchPoint(point: CGPoint): CGPoint;

  valueForTouchPointWithXY(x: number, y: number): CGPoint;
}

declare class ChartTransformerHorizontalBarChart extends ChartTransformer {
  static alloc(): ChartTransformerHorizontalBarChart; // inherited from NSObject

  static new(): ChartTransformerHorizontalBarChart; // inherited from NSObject
}

interface ChartValueFormatter {
  stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: ChartDataEntry, dataSetIndex: number, viewPortHandler: ChartViewPortHandler): string;
}
declare var ChartValueFormatter: {
  prototype: ChartValueFormatter;
};

declare class ChartViewBase extends NSUIView implements ChartAnimatorDelegate, ChartDataProvider {
  static alloc(): ChartViewBase; // inherited from NSObject

  static appearance(): ChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): ChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ChartViewBase; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ChartViewBase; // inherited from UIAppearance

  static new(): ChartViewBase; // inherited from NSObject

  readonly chartAnimator: ChartAnimator;

  chartDescription: ChartDescription;

  readonly contentRect: CGRect;

  data: ChartData;

  delegate: ChartViewDelegate;

  dragDecelerationEnabled: boolean;

  dragDecelerationFrictionCoef: number;

  drawMarkers: boolean;

  extraBottomOffset: number;

  extraLeftOffset: number;

  extraRightOffset: number;

  extraTopOffset: number;

  highlightPerTapEnabled: boolean;

  readonly highlighted: NSArray<ChartHighlight>;

  highlighter: ChartHighlighterProtocol;

  readonly isDragDecelerationEnabled: boolean;

  readonly isDrawMarkersEnabled: boolean;

  readonly isHighLightPerTapEnabled: boolean;

  lastHighlighted: ChartHighlight;

  readonly legend: ChartLegend;

  legendRenderer: ChartLegendRenderer;

  marker: ChartMarker;

  maxHighlightDistance: number;

  readonly midPoint: CGPoint;

  noDataFont: UIFont;

  noDataText: string;

  noDataTextAlignment: NSTextAlignment;

  noDataTextColor: UIColor;

  renderer: ChartDataRenderer;

  readonly viewPortHandler: ChartViewPortHandler;

  readonly xAxis: ChartXAxis;

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  addViewportJob(job: ChartViewPortJob): void;

  animateWithXAxisDuration(xAxisDuration: number): void;

  animateWithXAxisDurationEasing(xAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithXAxisDurationEasingOption(xAxisDuration: number, easingOption: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDuration(xAxisDuration: number, yAxisDuration: number): void;

  animateWithXAxisDurationYAxisDurationEasing(xAxisDuration: number, yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithXAxisDurationYAxisDurationEasingOption(xAxisDuration: number, yAxisDuration: number, easingOption: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(xAxisDuration: number, yAxisDuration: number, easingOptionX: ChartEasingOption, easingOptionY: ChartEasingOption): void;

  animateWithXAxisDurationYAxisDurationEasingXEasingY(xAxisDuration: number, yAxisDuration: number, easingX: (p1: number, p2: number) => number, easingY: (p1: number, p2: number) => number): void;

  animateWithYAxisDuration(yAxisDuration: number): void;

  animateWithYAxisDurationEasing(yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

  animateWithYAxisDurationEasingOption(yAxisDuration: number, easingOption: ChartEasingOption): void;

  animatorStopped(animator: ChartAnimator): void;

  animatorUpdated(animator: ChartAnimator): void;

  clear(): void;

  clearAllViewportJobs(): void;

  clearValues(): void;

  getChartImageWithTransparent(transparent: boolean): UIImage;

  getHighlightByTouchPoint(pt: CGPoint): ChartHighlight;

  getMarkerPositionWithHighlight(highlight: ChartHighlight): CGPoint;

  highlightValue(highlight: ChartHighlight): void;

  highlightValueCallDelegate(highlight: ChartHighlight, callDelegate: boolean): void;

  highlightValueWithXDataSetIndexDataIndex(x: number, dataSetIndex: number, dataIndex: number): void;

  highlightValueWithXDataSetIndexDataIndexCallDelegate(x: number, dataSetIndex: number, dataIndex: number, callDelegate: boolean): void;

  highlightValueWithXYDataSetIndexDataIndex(x: number, y: number, dataSetIndex: number, dataIndex: number): void;

  highlightValueWithXYDataSetIndexDataIndexCallDelegate(x: number, y: number, dataSetIndex: number, dataIndex: number, callDelegate: boolean): void;

  highlightValues(highs: NSArray<ChartHighlight> | ChartHighlight[]): void;

  isEmpty(): boolean;

  notifyDataSetChanged(): void;

  removeViewportJob(job: ChartViewPortJob): void;

  setExtraOffsetsWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): void;

  valuesToHighlight(): boolean;
}

interface ChartViewDelegate {
  chartScaledScaleXScaleY?(chartView: ChartViewBase, scaleX: number, scaleY: number): void;

  chartTranslatedDXDY?(chartView: ChartViewBase, dX: number, dY: number): void;

  chartValueNothingSelected?(chartView: ChartViewBase): void;

  chartValueSelectedEntryHighlight?(chartView: ChartViewBase, entry: ChartDataEntry, highlight: ChartHighlight): void;

  chartViewAnimatorDidStop?(chartView: ChartViewBase, animator: ChartAnimator): void;

  chartViewDidEndPanning?(chartView: ChartViewBase): void;
}
declare var ChartViewDelegate: {
  prototype: ChartViewDelegate;
};

declare class ChartViewPortHandler extends NSObject {
  static alloc(): ChartViewPortHandler; // inherited from NSObject

  static new(): ChartViewPortHandler; // inherited from NSObject

  readonly canZoomInMoreX: boolean;

  readonly canZoomInMoreY: boolean;

  readonly canZoomOutMoreX: boolean;

  readonly canZoomOutMoreY: boolean;

  readonly chartHeight: number;

  readonly chartWidth: number;

  readonly contentBottom: number;

  readonly contentCenter: CGPoint;

  readonly contentHeight: number;

  readonly contentLeft: number;

  readonly contentRect: CGRect;

  readonly contentRight: number;

  readonly contentTop: number;

  readonly contentWidth: number;

  readonly hasChartDimens: boolean;

  readonly hasNoDragOffset: boolean;

  readonly isFullyZoomedOut: boolean;

  readonly isFullyZoomedOutX: boolean;

  readonly isFullyZoomedOutY: boolean;

  readonly maxScaleX: number;

  readonly maxScaleY: number;

  readonly minScaleX: number;

  readonly minScaleY: number;

  readonly offsetBottom: number;

  readonly offsetLeft: number;

  readonly offsetRight: number;

  readonly offsetTop: number;

  readonly scaleX: number;

  readonly scaleY: number;

  readonly touchMatrix: CGAffineTransform;

  readonly transX: number;

  readonly transY: number;

  constructor(o: { width: number; height: number });

  centerViewPortWithPtChart(pt: CGPoint, chart: ChartViewBase): void;

  fitScreen(): CGAffineTransform;

  initWithWidthHeight(width: number, height: number): this;

  isInBoundsBottom(y: number): boolean;

  isInBoundsLeft(x: number): boolean;

  isInBoundsRight(x: number): boolean;

  isInBoundsTop(y: number): boolean;

  isInBoundsWithPoint(point: CGPoint): boolean;

  isInBoundsWithXY(x: number, y: number): boolean;

  isInBoundsX(x: number): boolean;

  isInBoundsY(y: number): boolean;

  isIntersectingLineFromTo(startPoint: CGPoint, endPoint: CGPoint): boolean;

  refreshWithNewMatrixChartInvalidate(newMatrix: CGAffineTransform, chart: ChartViewBase, invalidate: boolean): CGAffineTransform;

  resetZoom(): CGAffineTransform;

  restrainViewPortWithOffsetLeftOffsetTopOffsetRightOffsetBottom(offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): void;

  setChartDimensWithWidthHeight(width: number, height: number): void;

  setDragOffsetX(offset: number): void;

  setDragOffsetY(offset: number): void;

  setMaximumScaleX(xScale: number): void;

  setMaximumScaleY(yScale: number): void;

  setMinMaxScaleXWithMinScaleXMaxScaleX(minScaleX: number, maxScaleX: number): void;

  setMinMaxScaleYWithMinScaleYMaxScaleY(minScaleY: number, maxScaleY: number): void;

  setMinimumScaleX(xScale: number): void;

  setMinimumScaleY(yScale: number): void;

  setZoomWithScaleXScaleY(scaleX: number, scaleY: number): CGAffineTransform;

  setZoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): CGAffineTransform;

  translateWithPt(pt: CGPoint): CGAffineTransform;

  zoomInXY(x: number, y: number): CGAffineTransform;

  zoomOutWithXY(x: number, y: number): CGAffineTransform;

  zoomWithScaleXScaleY(scaleX: number, scaleY: number): CGAffineTransform;

  zoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): CGAffineTransform;
}

declare class ChartViewPortJob extends NSObject {
  static alloc(): ChartViewPortJob; // inherited from NSObject

  static new(): ChartViewPortJob; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; xValue: number; yValue: number; transformer: ChartTransformer; view: ChartViewBase });

  doJob(): void;

  initWithViewPortHandlerXValueYValueTransformerView(viewPortHandler: ChartViewPortHandler, xValue: number, yValue: number, transformer: ChartTransformer, view: ChartViewBase): this;
}

declare class ChartXAxis extends ChartAxisBase {
  static alloc(): ChartXAxis; // inherited from NSObject

  static new(): ChartXAxis; // inherited from NSObject

  avoidFirstLastClippingEnabled: boolean;

  readonly isAvoidFirstLastClippingEnabled: boolean;

  readonly isWordWrapEnabled: boolean;

  labelHeight: number;

  labelPosition: XAxisLabelPosition;

  labelRotatedHeight: number;

  labelRotatedWidth: number;

  labelRotationAngle: number;

  labelWidth: number;

  wordWrapEnabled: boolean;

  wordWrapWidthPercent: number;
}

declare class ChartXAxisRenderer extends NSObject {
  static alloc(): ChartXAxisRenderer; // inherited from NSObject

  static new(): ChartXAxisRenderer; // inherited from NSObject

  readonly axis: ChartXAxis;

  readonly gridClippingRect: CGRect;

  readonly transformer: ChartTransformer;

  readonly viewPortHandler: ChartViewPortHandler;

  constructor(o: { viewPortHandler: ChartViewPortHandler; axis: ChartXAxis; transformer: ChartTransformer });

  computeSize(): void;

  drawGridLineWithContextXY(context: any, x: number, y: number): void;

  drawLabelWithContextFormattedLabelXYAttributesConstrainedToAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, size: CGSize, anchor: CGPoint, angleRadians: number): void;

  drawLabelsWithContextPosAnchor(context: any, pos: number, anchor: CGPoint): void;

  initWithViewPortHandlerAxisTransformer(viewPortHandler: ChartViewPortHandler, axis: ChartXAxis, transformer: ChartTransformer): this;

  renderLimitLineLabelWithContextLimitLinePositionYOffset(context: any, limitLine: ChartLimitLine, position: CGPoint, yOffset: number): void;

  renderLimitLineLineWithContextLimitLinePosition(context: any, limitLine: ChartLimitLine, position: CGPoint): void;
}

declare class ChartYAxis extends ChartAxisBase {
  static alloc(): ChartYAxis; // inherited from NSObject

  static new(): ChartYAxis; // inherited from NSObject

  readonly axisDependency: AxisDependency;

  drawBottomYLabelEntryEnabled: boolean;

  drawTopYLabelEntryEnabled: boolean;

  drawZeroLineEnabled: boolean;

  inverted: boolean;

  readonly isDrawBottomYLabelEntryEnabled: boolean;

  readonly isDrawTopYLabelEntryEnabled: boolean;

  readonly isInverted: boolean;

  labelAlignment: NSTextAlignment;

  labelPosition: YAxisLabelPosition;

  labelXOffset: number;

  maxWidth: number;

  minWidth: number;

  readonly needsOffset: boolean;

  spaceBottom: number;

  spaceTop: number;

  zeroLineColor: UIColor;

  zeroLineDashLengths: NSArray<number>;

  zeroLineDashPhase: number;

  zeroLineWidth: number;

  constructor(o: { position: AxisDependency });

  getRequiredHeightSpace(): number;

  initWithPosition(position: AxisDependency): this;

  requiredSize(): CGSize;
}

declare class ChartYAxisRenderer extends NSObject {
  static alloc(): ChartYAxisRenderer; // inherited from NSObject

  static new(): ChartYAxisRenderer; // inherited from NSObject

  readonly axis: ChartYAxis;

  readonly gridClippingRect: CGRect;

  readonly transformer: ChartTransformer;

  readonly viewPortHandler: ChartViewPortHandler;

  constructor(o: { viewPortHandler: ChartViewPortHandler; axis: ChartYAxis; transformer: ChartTransformer });

  computeAxisValuesWithMinMax(min: number, max: number): void;

  computeAxisWithMinMaxInverted(min: number, max: number, inverted: boolean): void;

  drawGridLineWithContextPosition(context: any, position: CGPoint): void;

  drawZeroLineWithContext(context: any): void;

  initWithViewPortHandlerAxisTransformer(viewPortHandler: ChartViewPortHandler, axis: ChartYAxis, transformer: ChartTransformer): this;

  transformedPositions(): NSArray<NSValue>;
}

declare class ChevronDownShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): ChevronDownShapeRenderer; // inherited from NSObject

  static new(): ChevronDownShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class ChevronUpShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): ChevronUpShapeRenderer; // inherited from NSObject

  static new(): ChevronUpShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class CircleShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): CircleShapeRenderer; // inherited from NSObject

  static new(): CircleShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class CombinedChartData extends BarLineScatterCandleBubbleChartData {
  static alloc(): CombinedChartData; // inherited from NSObject

  static new(): CombinedChartData; // inherited from NSObject

  readonly allData: NSArray<ChartData>;

  barData: BarChartData;

  bubbleData: BubbleChartData;

  candleData: CandleChartData;

  lineData: LineChartData;

  scatterData: ScatterChartData;

  dataByIndex(index: number): ChartData;

  getDataSetByHighlight(highlight: ChartHighlight): ChartDataSetProtocol;
}

interface CombinedChartDataProvider extends BarChartDataProvider, BubbleChartDataProvider, CandleChartDataProvider, LineChartDataProvider, ScatterChartDataProvider {
  combinedData: CombinedChartData;
}
declare var CombinedChartDataProvider: {
  prototype: CombinedChartDataProvider;
};

declare const enum CombinedChartDrawOrder {
  Bar = 0,

  Bubble = 1,

  Line = 2,

  Candle = 3,

  Scatter = 4,
}

declare class CombinedChartHighlighter extends ChartHighlighter {
  static alloc(): CombinedChartHighlighter; // inherited from NSObject

  static new(): CombinedChartHighlighter; // inherited from NSObject

  constructor(o: { chart: CombinedChartDataProvider; barDataProvider: BarChartDataProvider });

  initWithChartBarDataProvider(chart: CombinedChartDataProvider, barDataProvider: BarChartDataProvider): this;
}

declare class CombinedChartRenderer extends NSObject implements ChartDataRenderer {
  static alloc(): CombinedChartRenderer; // inherited from NSObject

  static new(): CombinedChartRenderer; // inherited from NSObject

  accessibleChartElements: NSArray<NSUIAccessibilityElement>;

  chart: CombinedChartView;

  drawBarShadowEnabled: boolean;

  drawValueAboveBarEnabled: boolean;

  readonly isDrawBarShadowEnabled: boolean;

  readonly isDrawValueAboveBarEnabled: boolean;

  subRenderers: NSArray<ChartDataRenderer>;

  readonly animator: ChartAnimator; // inherited from ChartDataRenderer

  readonly viewPortHandler: ChartViewPortHandler; // inherited from ChartRenderer

  constructor(o: { chart: CombinedChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  createAccessibleHeaderUsingChartAndDataWithDefaultDescription(chart: ChartViewBase, data: ChartData, defaultDescription: string): NSUIAccessibilityElement;

  drawDataWithContext(context: any): void;

  drawExtrasWithContext(context: any): void;

  drawHighlightedWithContextIndices(context: any, indices: NSArray<ChartHighlight> | ChartHighlight[]): void;

  drawValuesWithContext(context: any): void;

  initBuffers(): void;

  initWithChartAnimatorViewPortHandler(chart: CombinedChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;

  isDrawingValuesAllowedWithDataProvider(dataProvider: ChartDataProvider): boolean;
}

declare class CombinedChartView extends BarLineChartViewBase implements CombinedChartDataProvider {
  static alloc(): CombinedChartView; // inherited from NSObject

  static appearance(): CombinedChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): CombinedChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CombinedChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CombinedChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CombinedChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CombinedChartView; // inherited from UIAppearance

  static new(): CombinedChartView; // inherited from NSObject

  drawBarShadowEnabled: boolean;

  drawOrder: NSArray<number>;

  drawValueAboveBarEnabled: boolean;

  fillFormatter: ChartFillFormatter;

  highlightFullBarEnabled: boolean;

  readonly barData: BarChartData; // inherited from BarChartDataProvider

  readonly bubbleData: BubbleChartData; // inherited from BubbleChartDataProvider

  readonly candleData: CandleChartData; // inherited from CandleChartDataProvider

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly combinedData: CombinedChartData; // inherited from CombinedChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly isDrawBarShadowEnabled: boolean; // inherited from BarChartDataProvider

  readonly isDrawValueAboveBarEnabled: boolean; // inherited from BarChartDataProvider

  readonly isHighlightFullBarEnabled: boolean; // inherited from BarChartDataProvider

  readonly lineData: LineChartData; // inherited from LineChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly scatterData: ScatterChartData; // inherited from ScatterChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getAxis(axis: AxisDependency): ChartYAxis;

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class CrossShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): CrossShapeRenderer; // inherited from NSObject

  static new(): CrossShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class HorizontalBarChartHighlighter extends BarChartHighlighter {
  static alloc(): HorizontalBarChartHighlighter; // inherited from NSObject

  static new(): HorizontalBarChartHighlighter; // inherited from NSObject
}

declare class HorizontalBarChartRenderer extends BarChartRenderer {
  static alloc(): HorizontalBarChartRenderer; // inherited from NSObject

  static new(): HorizontalBarChartRenderer; // inherited from NSObject
}

declare class HorizontalBarChartView extends BarChartView {
  static alloc(): HorizontalBarChartView; // inherited from NSObject

  static appearance(): HorizontalBarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): HorizontalBarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HorizontalBarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): HorizontalBarChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HorizontalBarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): HorizontalBarChartView; // inherited from UIAppearance

  static new(): HorizontalBarChartView; // inherited from NSObject
}

declare class LineChartData extends ChartData {
  static alloc(): LineChartData; // inherited from NSObject

  static new(): LineChartData; // inherited from NSObject
}

interface LineChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {
  lineData: LineChartData;

  getAxis(axis: AxisDependency): ChartYAxis;
}
declare var LineChartDataProvider: {
  prototype: LineChartDataProvider;
};

declare class LineChartDataSet extends LineRadarChartDataSet implements LineChartDataSetProtocol {
  static alloc(): LineChartDataSet; // inherited from NSObject

  static new(): LineChartDataSet; // inherited from NSObject

  lineDashPhase: number;

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  circleColors: NSArray<UIColor>; // inherited from LineChartDataSetProtocol

  circleHoleColor: UIColor; // inherited from LineChartDataSetProtocol

  circleHoleRadius: number; // inherited from LineChartDataSetProtocol

  circleRadius: number; // inherited from LineChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  cubicIntensity: number; // inherited from LineChartDataSetProtocol

  drawCircleHoleEnabled: boolean; // inherited from LineChartDataSetProtocol

  drawCirclesEnabled: boolean; // inherited from LineChartDataSetProtocol

  drawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  fill: ChartFill; // inherited from LineRadarChartDataSetProtocol

  fillAlpha: number; // inherited from LineRadarChartDataSetProtocol

  fillColor: UIColor; // inherited from LineRadarChartDataSetProtocol

  fillFormatter: ChartFillFormatter; // inherited from LineChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  gradientPositions: NSArray<number>; // inherited from LineChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawCircleHoleEnabled: boolean; // inherited from LineChartDataSetProtocol

  readonly isDrawCirclesEnabled: boolean; // inherited from LineChartDataSetProtocol

  readonly isDrawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  isDrawLineWithGradientEnabled: boolean; // inherited from LineChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  lineCapType: CGLineCap; // inherited from LineChartDataSetProtocol

  lineDashLengths: NSArray<number>; // inherited from LineChartDataSetProtocol

  lineWidth: number; // inherited from LineRadarChartDataSetProtocol

  mode: LineChartMode; // inherited from LineChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  getCircleColorAtIndex(atIndex: number): UIColor;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetCircleColors(index: number): void;

  resetColors(): void;

  setCircleColor(color: UIColor): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  valueTextColorAt(index: number): UIColor;
}

interface LineChartDataSetProtocol extends LineRadarChartDataSetProtocol {
  circleColors: NSArray<UIColor>;

  circleHoleColor: UIColor;

  circleHoleRadius: number;

  circleRadius: number;

  cubicIntensity: number;

  drawCircleHoleEnabled: boolean;

  drawCirclesEnabled: boolean;

  fillFormatter: ChartFillFormatter;

  gradientPositions: NSArray<number>;

  isDrawCircleHoleEnabled: boolean;

  isDrawCirclesEnabled: boolean;

  isDrawLineWithGradientEnabled: boolean;

  lineCapType: CGLineCap;

  lineDashLengths: NSArray<number>;

  lineDashPhase: number;

  mode: LineChartMode;

  getCircleColorAtIndex(atIndex: number): UIColor;

  resetCircleColors(index: number): void;

  setCircleColor(color: UIColor): void;
}
declare var LineChartDataSetProtocol: {
  prototype: LineChartDataSetProtocol;
};

declare const enum LineChartMode {
  Linear = 0,

  Stepped = 1,

  CubicBezier = 2,

  HorizontalBezier = 3,
}

declare class LineChartRenderer extends LineRadarChartRenderer {
  static alloc(): LineChartRenderer; // inherited from NSObject

  static new(): LineChartRenderer; // inherited from NSObject

  dataProvider: LineChartDataProvider;

  constructor(o: { dataProvider: LineChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawCubicBezierWithContextDataSet(context: any, dataSet: LineChartDataSetProtocol): void;

  drawDataSetWithContextDataSet(context: any, dataSet: LineChartDataSetProtocol): void;

  drawHorizontalBezierWithContextDataSet(context: any, dataSet: LineChartDataSetProtocol): void;

  drawLinearWithContextDataSet(context: any, dataSet: LineChartDataSetProtocol): void;

  initWithDataProviderAnimatorViewPortHandler(dataProvider: LineChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class LineChartView extends BarLineChartViewBase implements LineChartDataProvider {
  static alloc(): LineChartView; // inherited from NSObject

  static appearance(): LineChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): LineChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LineChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): LineChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LineChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): LineChartView; // inherited from UIAppearance

  static new(): LineChartView; // inherited from NSObject

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly lineData: LineChartData; // inherited from LineChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getAxis(axis: AxisDependency): ChartYAxis;

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class LineRadarChartDataSet extends LineScatterCandleRadarChartDataSet implements LineRadarChartDataSetProtocol {
  static alloc(): LineRadarChartDataSet; // inherited from NSObject

  static new(): LineRadarChartDataSet; // inherited from NSObject

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  fill: ChartFill; // inherited from LineRadarChartDataSetProtocol

  fillAlpha: number; // inherited from LineRadarChartDataSetProtocol

  fillColor: UIColor; // inherited from LineRadarChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  lineWidth: number; // inherited from LineRadarChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  valueTextColorAt(index: number): UIColor;
}

interface LineRadarChartDataSetProtocol extends LineScatterCandleRadarChartDataSetProtocol {
  drawFilledEnabled: boolean;

  fill: ChartFill;

  fillAlpha: number;

  fillColor: UIColor;

  isDrawFilledEnabled: boolean;

  lineWidth: number;
}
declare var LineRadarChartDataSetProtocol: {
  prototype: LineRadarChartDataSetProtocol;
};

declare class LineRadarChartRenderer extends LineScatterCandleRadarChartRenderer {
  static alloc(): LineRadarChartRenderer; // inherited from NSObject

  static new(): LineRadarChartRenderer; // inherited from NSObject

  drawFilledPathWithContextPathFillColorFillAlpha(context: any, path: any, fillColor: UIColor, fillAlpha: number): void;

  drawFilledPathWithContextPathFillFillAlpha(context: any, path: any, fill: ChartFill, fillAlpha: number): void;
}

declare class LineScatterCandleRadarChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements LineScatterCandleRadarChartDataSetProtocol {
  static alloc(): LineScatterCandleRadarChartDataSet; // inherited from NSObject

  static new(): LineScatterCandleRadarChartDataSet; // inherited from NSObject

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  valueTextColorAt(index: number): UIColor;
}

interface LineScatterCandleRadarChartDataSetProtocol extends BarLineScatterCandleBubbleChartDataSetProtocol {
  drawHorizontalHighlightIndicatorEnabled: boolean;

  drawVerticalHighlightIndicatorEnabled: boolean;

  isHorizontalHighlightIndicatorEnabled: boolean;

  isVerticalHighlightIndicatorEnabled: boolean;

  setDrawHighlightIndicators(enabled: boolean): void;
}
declare var LineScatterCandleRadarChartDataSetProtocol: {
  prototype: LineScatterCandleRadarChartDataSetProtocol;
};

declare class LineScatterCandleRadarChartRenderer extends BarLineScatterCandleBubbleChartRenderer {
  static alloc(): LineScatterCandleRadarChartRenderer; // inherited from NSObject

  static new(): LineScatterCandleRadarChartRenderer; // inherited from NSObject

  drawHighlightLinesWithContextPointSet(context: any, point: CGPoint, set: LineScatterCandleRadarChartDataSetProtocol): void;
}

declare class MoveChartViewJob extends ChartViewPortJob {
  static alloc(): MoveChartViewJob; // inherited from NSObject

  static new(): MoveChartViewJob; // inherited from NSObject
}

declare class NSUIAccessibilityElement extends UIAccessibilityElement {
  static alloc(): NSUIAccessibilityElement; // inherited from NSObject

  static new(): NSUIAccessibilityElement; // inherited from NSObject
}

declare class NSUIView extends UIView {
  static alloc(): NSUIView; // inherited from NSObject

  static appearance(): NSUIView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): NSUIView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSUIView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSUIView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSUIView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSUIView; // inherited from UIAppearance

  static new(): NSUIView; // inherited from NSObject

  accessibilityChildren(): NSArray<any>;

  nsuiTouchesBeganWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

  nsuiTouchesCancelledWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

  nsuiTouchesEndedWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

  nsuiTouchesMovedWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;
}

declare class PieChartData extends ChartData {
  static alloc(): PieChartData; // inherited from NSObject

  static new(): PieChartData; // inherited from NSObject

  dataSet: PieChartDataSetProtocol;

  readonly yValueSum: number;
}

declare class PieChartDataEntry extends ChartDataEntry {
  static alloc(): PieChartDataEntry; // inherited from NSObject

  static new(): PieChartDataEntry; // inherited from NSObject

  label: string;

  value: number;

  constructor(o: { value: number });

  constructor(o: { value: number; data: any });

  constructor(o: { value: number; icon: UIImage });

  constructor(o: { value: number; icon: UIImage; data: any });

  constructor(o: { value: number; label: string });

  constructor(o: { value: number; label: string; data: any });

  constructor(o: { value: number; label: string; icon: UIImage });

  constructor(o: { value: number; label: string; icon: UIImage; data: any });

  initWithValue(value: number): this;

  initWithValueData(value: number, data: any): this;

  initWithValueIcon(value: number, icon: UIImage): this;

  initWithValueIconData(value: number, icon: UIImage, data: any): this;

  initWithValueLabel(value: number, label: string): this;

  initWithValueLabelData(value: number, label: string, data: any): this;

  initWithValueLabelIcon(value: number, label: string, icon: UIImage): this;

  initWithValueLabelIconData(value: number, label: string, icon: UIImage, data: any): this;
}

declare class PieChartDataSet extends ChartDataSet implements PieChartDataSetProtocol {
  static alloc(): PieChartDataSet; // inherited from NSObject

  static new(): PieChartDataSet; // inherited from NSObject

  automaticallyDisableSliceSpacing: boolean; // inherited from PieChartDataSetProtocol

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  entryLabelColor: UIColor; // inherited from PieChartDataSetProtocol

  entryLabelFont: UIFont; // inherited from PieChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from PieChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  selectionShift: number; // inherited from PieChartDataSetProtocol

  sliceSpace: number; // inherited from PieChartDataSetProtocol

  useValueColorForLine: boolean; // inherited from PieChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueLineColor: UIColor; // inherited from PieChartDataSetProtocol

  valueLinePart1Length: number; // inherited from PieChartDataSetProtocol

  valueLinePart1OffsetPercentage: number; // inherited from PieChartDataSetProtocol

  valueLinePart2Length: number; // inherited from PieChartDataSetProtocol

  valueLineVariableLength: boolean; // inherited from PieChartDataSetProtocol

  valueLineWidth: number; // inherited from PieChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  xValuePosition: PieChartValuePosition; // inherited from PieChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  yValuePosition: PieChartValuePosition; // inherited from PieChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  valueTextColorAt(index: number): UIColor;
}

interface PieChartDataSetProtocol extends ChartDataSetProtocol {
  automaticallyDisableSliceSpacing: boolean;

  entryLabelColor: UIColor;

  entryLabelFont: UIFont;

  highlightColor: UIColor;

  selectionShift: number;

  sliceSpace: number;

  useValueColorForLine: boolean;

  valueLineColor: UIColor;

  valueLinePart1Length: number;

  valueLinePart1OffsetPercentage: number;

  valueLinePart2Length: number;

  valueLineVariableLength: boolean;

  valueLineWidth: number;

  xValuePosition: PieChartValuePosition;

  yValuePosition: PieChartValuePosition;
}
declare var PieChartDataSetProtocol: {
  prototype: PieChartDataSetProtocol;
};

declare class PieChartHighlighter extends PieRadarChartHighlighter {
  static alloc(): PieChartHighlighter; // inherited from NSObject

  static new(): PieChartHighlighter; // inherited from NSObject
}

declare class PieChartRenderer extends NSObject implements ChartDataRenderer {
  static alloc(): PieChartRenderer; // inherited from NSObject

  static new(): PieChartRenderer; // inherited from NSObject

  accessibleChartElements: NSArray<NSUIAccessibilityElement>;

  chart: PieChartView;

  readonly animator: ChartAnimator; // inherited from ChartDataRenderer

  readonly viewPortHandler: ChartViewPortHandler; // inherited from ChartRenderer

  constructor(o: { chart: PieChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  calculateMinimumRadiusForSpacedSliceWithCenterRadiusAngleArcStartPointXArcStartPointYStartAngleSweepAngle(center: CGPoint, radius: number, angle: number, arcStartPointX: number, arcStartPointY: number, startAngle: number, sweepAngle: number): number;

  createAccessibleHeaderUsingChartAndDataWithDefaultDescription(chart: ChartViewBase, data: ChartData, defaultDescription: string): NSUIAccessibilityElement;

  drawDataSetWithContextDataSet(context: any, dataSet: PieChartDataSetProtocol): void;

  drawDataWithContext(context: any): void;

  drawExtrasWithContext(context: any): void;

  drawHighlightedWithContextIndices(context: any, indices: NSArray<ChartHighlight> | ChartHighlight[]): void;

  drawValuesWithContext(context: any): void;

  getSliceSpaceWithDataSet(dataSet: PieChartDataSetProtocol): number;

  initBuffers(): void;

  initWithChartAnimatorViewPortHandler(chart: PieChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;

  isDrawingValuesAllowedWithDataProvider(dataProvider: ChartDataProvider): boolean;
}

declare const enum PieChartValuePosition {
  InsideSlice = 0,

  OutsideSlice = 1,
}

declare class PieChartView extends PieRadarChartViewBase {
  static alloc(): PieChartView; // inherited from NSObject

  static appearance(): PieChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): PieChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PieChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PieChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PieChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PieChartView; // inherited from UIAppearance

  static new(): PieChartView; // inherited from NSObject

  readonly absoluteAngles: NSArray<number>;

  centerAttributedText: NSAttributedString;

  readonly centerCircleBox: CGPoint;

  centerText: string;

  centerTextOffset: CGPoint;

  centerTextRadiusPercent: number;

  readonly circleBox: CGRect;

  readonly drawAngles: NSArray<number>;

  drawCenterTextEnabled: boolean;

  drawEntryLabelsEnabled: boolean;

  drawHoleEnabled: boolean;

  drawSlicesUnderHoleEnabled: boolean;

  entryLabelColor: UIColor;

  entryLabelFont: UIFont;

  holeColor: UIColor;

  holeRadiusPercent: number;

  readonly isDrawCenterTextEnabled: boolean;

  readonly isDrawEntryLabelsEnabled: boolean;

  readonly isDrawHoleEnabled: boolean;

  readonly isDrawSlicesUnderHoleEnabled: boolean;

  readonly isUsePercentValuesEnabled: boolean;

  maxAngle: number;

  sliceTextDrawingThreshold: number;

  transparentCircleColor: UIColor;

  transparentCircleRadiusPercent: number;

  usePercentValuesEnabled: boolean;

  xAxis: ChartXAxis;

  dataSetIndexForIndex(xValue: number): number;

  needsHighlightWithIndex(index: number): boolean;
}

declare class PieRadarChartHighlighter extends ChartHighlighter {
  static alloc(): PieRadarChartHighlighter; // inherited from NSObject

  static new(): PieRadarChartHighlighter; // inherited from NSObject

  closestHighlightWithIndexXY(index: number, x: number, y: number): ChartHighlight;
}

declare class PieRadarChartViewBase extends ChartViewBase {
  static alloc(): PieRadarChartViewBase; // inherited from NSObject

  static appearance(): PieRadarChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): PieRadarChartViewBase; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PieRadarChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PieRadarChartViewBase; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PieRadarChartViewBase; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PieRadarChartViewBase; // inherited from UIAppearance

  static new(): PieRadarChartViewBase; // inherited from NSObject

  readonly diameter: number;

  readonly isRotationEnabled: boolean;

  readonly isRotationWithTwoFingers: boolean;

  minOffset: number;

  readonly radius: number;

  readonly rawRotationAngle: number;

  rotationAngle: number;

  rotationEnabled: boolean;

  rotationWithTwoFingers: boolean;

  angleForPointWithXY(x: number, y: number): number;

  distanceToCenterWithXY(x: number, y: number): number;

  getPositionWithCenterDistAngle(center: CGPoint, dist: number, angle: number): CGPoint;

  indexForAngle(angle: number): number;

  spinWithDurationFromAngleToAngle(duration: number, fromAngle: number, toAngle: number): void;

  spinWithDurationFromAngleToAngleEasing(duration: number, fromAngle: number, toAngle: number, easing: (p1: number, p2: number) => number): void;

  spinWithDurationFromAngleToAngleEasingOption(duration: number, fromAngle: number, toAngle: number, easingOption: ChartEasingOption): void;

  stopDeceleration(): void;

  stopSpinAnimation(): void;
}

declare class RadarChartData extends ChartData {
  static alloc(): RadarChartData; // inherited from NSObject

  static new(): RadarChartData; // inherited from NSObject

  highlightColor: UIColor;

  highlightLineDashLengths: NSArray<number>;

  highlightLineDashPhase: number;

  highlightLineWidth: number;

  labels: NSArray<string>;
}

declare class RadarChartDataEntry extends ChartDataEntry {
  static alloc(): RadarChartDataEntry; // inherited from NSObject

  static new(): RadarChartDataEntry; // inherited from NSObject

  value: number;

  constructor(o: { value: number });

  constructor(o: { value: number; data: any });

  initWithValue(value: number): this;

  initWithValueData(value: number, data: any): this;
}

declare class RadarChartDataSet extends LineRadarChartDataSet implements RadarChartDataSetProtocol {
  static alloc(): RadarChartDataSet; // inherited from NSObject

  static new(): RadarChartDataSet; // inherited from NSObject

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  drawHighlightCircleEnabled: boolean; // inherited from RadarChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  fill: ChartFill; // inherited from LineRadarChartDataSetProtocol

  fillAlpha: number; // inherited from LineRadarChartDataSetProtocol

  fillColor: UIColor; // inherited from LineRadarChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightCircleFillColor: UIColor; // inherited from RadarChartDataSetProtocol

  highlightCircleInnerRadius: number; // inherited from RadarChartDataSetProtocol

  highlightCircleOuterRadius: number; // inherited from RadarChartDataSetProtocol

  highlightCircleStrokeAlpha: number; // inherited from RadarChartDataSetProtocol

  highlightCircleStrokeColor: UIColor; // inherited from RadarChartDataSetProtocol

  highlightCircleStrokeWidth: number; // inherited from RadarChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawFilledEnabled: boolean; // inherited from LineRadarChartDataSetProtocol

  readonly isDrawHighlightCircleEnabled: boolean; // inherited from RadarChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  lineWidth: number; // inherited from LineRadarChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  valueTextColorAt(index: number): UIColor;
}

interface RadarChartDataSetProtocol extends LineRadarChartDataSetProtocol {
  drawHighlightCircleEnabled: boolean;

  highlightCircleFillColor: UIColor;

  highlightCircleInnerRadius: number;

  highlightCircleOuterRadius: number;

  highlightCircleStrokeAlpha: number;

  highlightCircleStrokeColor: UIColor;

  highlightCircleStrokeWidth: number;

  isDrawHighlightCircleEnabled: boolean;
}
declare var RadarChartDataSetProtocol: {
  prototype: RadarChartDataSetProtocol;
};

declare class RadarChartHighlighter extends PieRadarChartHighlighter {
  static alloc(): RadarChartHighlighter; // inherited from NSObject

  static new(): RadarChartHighlighter; // inherited from NSObject
}

declare class RadarChartRenderer extends LineRadarChartRenderer {
  static alloc(): RadarChartRenderer; // inherited from NSObject

  static new(): RadarChartRenderer; // inherited from NSObject

  chart: RadarChartView;

  constructor(o: { chart: RadarChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawWebWithContext(context: any): void;

  initWithChartAnimatorViewPortHandler(chart: RadarChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class RadarChartView extends PieRadarChartViewBase {
  static alloc(): RadarChartView; // inherited from NSObject

  static appearance(): RadarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): RadarChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RadarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): RadarChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RadarChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): RadarChartView; // inherited from UIAppearance

  static new(): RadarChartView; // inherited from NSObject

  drawWeb: boolean;

  readonly factor: number;

  innerWebColor: UIColor;

  innerWebLineWidth: number;

  skipWebLineCount: number;

  readonly sliceAngle: number;

  webAlpha: number;

  webColor: UIColor;

  webLineWidth: number;

  readonly yAxis: ChartYAxis;

  readonly yRange: number;
}

declare class ScatterChartData extends BarLineScatterCandleBubbleChartData {
  static alloc(): ScatterChartData; // inherited from NSObject

  static new(): ScatterChartData; // inherited from NSObject

  getGreatestShapeSize(): number;
}

interface ScatterChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {
  scatterData: ScatterChartData;
}
declare var ScatterChartDataProvider: {
  prototype: ScatterChartDataProvider;
};

declare class ScatterChartDataSet extends LineScatterCandleRadarChartDataSet implements ScatterChartDataSetProtocol {
  static alloc(): ScatterChartDataSet; // inherited from NSObject

  static new(): ScatterChartDataSet; // inherited from NSObject

  static rendererForShape(shape: ScatterShape): ShapeRenderer;

  scatterShapeHoleColor: UIColor;

  scatterShapeHoleRadius: number;

  scatterShapeSize: number;

  shapeRenderer: ShapeRenderer;

  readonly axisDependency: AxisDependency; // inherited from ChartDataSetProtocol

  readonly colors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  drawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  drawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  drawVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly entryCount: number; // inherited from ChartDataSetProtocol

  readonly form: ChartLegendForm; // inherited from ChartDataSetProtocol

  readonly formLineDashLengths: NSArray<number>; // inherited from ChartDataSetProtocol

  readonly formLineDashPhase: number; // inherited from ChartDataSetProtocol

  readonly formLineWidth: number; // inherited from ChartDataSetProtocol

  readonly formSize: number; // inherited from ChartDataSetProtocol

  highlightColor: UIColor; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightEnabled: boolean; // inherited from ChartDataSetProtocol

  highlightLineDashLengths: NSArray<number>; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineDashPhase: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  highlightLineWidth: number; // inherited from BarLineScatterCandleBubbleChartDataSetProtocol

  iconsOffset: CGPoint; // inherited from ChartDataSetProtocol

  readonly isDrawIconsEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isDrawValuesEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHighlightEnabled: boolean; // inherited from ChartDataSetProtocol

  readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from LineScatterCandleRadarChartDataSetProtocol

  readonly isVisible: boolean; // inherited from ChartDataSetProtocol

  readonly label: string; // inherited from ChartDataSetProtocol

  readonly valueColors: NSArray<UIColor>; // inherited from ChartDataSetProtocol

  valueFont: UIFont; // inherited from ChartDataSetProtocol

  valueFormatter: ChartValueFormatter; // inherited from ChartDataSetProtocol

  valueLabelAngle: number; // inherited from ChartDataSetProtocol

  valueTextColor: UIColor; // inherited from ChartDataSetProtocol

  visible: boolean; // inherited from ChartDataSetProtocol

  readonly xMax: number; // inherited from ChartDataSetProtocol

  readonly xMin: number; // inherited from ChartDataSetProtocol

  readonly yMax: number; // inherited from ChartDataSetProtocol

  readonly yMin: number; // inherited from ChartDataSetProtocol

  addColor(color: UIColor): void;

  addEntry(e: ChartDataEntry): boolean;

  addEntryOrdered(e: ChartDataEntry): boolean;

  calcMinMax(): void;

  calcMinMaxYFromXToX(fromX: number, toX: number): void;

  clear(): void;

  colorAtIndex(atIndex: number): UIColor;

  contains(e: ChartDataEntry): boolean;

  entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

  entryForIndex(i: number): ChartDataEntry;

  entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

  entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

  entryIndexWithEntry(e: ChartDataEntry): number;

  entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

  notifyDataSetChanged(): void;

  removeEntry(entry: ChartDataEntry): boolean;

  removeEntryWithIndex(index: number): boolean;

  removeEntryWithX(x: number): boolean;

  removeFirst(): boolean;

  removeLast(): boolean;

  resetColors(): void;

  setColor(color: UIColor): void;

  setDrawHighlightIndicators(enabled: boolean): void;

  setScatterShape(shape: ScatterShape): void;

  valueTextColorAt(index: number): UIColor;
}

interface ScatterChartDataSetProtocol extends LineScatterCandleRadarChartDataSetProtocol {
  scatterShapeHoleColor: UIColor;

  scatterShapeHoleRadius: number;

  scatterShapeSize: number;

  shapeRenderer: ShapeRenderer;
}
declare var ScatterChartDataSetProtocol: {
  prototype: ScatterChartDataSetProtocol;
};

declare class ScatterChartRenderer extends LineScatterCandleRadarChartRenderer {
  static alloc(): ScatterChartRenderer; // inherited from NSObject

  static new(): ScatterChartRenderer; // inherited from NSObject

  dataProvider: ScatterChartDataProvider;

  constructor(o: { dataProvider: ScatterChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler });

  drawDataSetWithContextDataSet(context: any, dataSet: ScatterChartDataSetProtocol): void;

  initWithDataProviderAnimatorViewPortHandler(dataProvider: ScatterChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class ScatterChartView extends BarLineChartViewBase implements ScatterChartDataProvider {
  static alloc(): ScatterChartView; // inherited from NSObject

  static appearance(): ScatterChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   */
  static appearanceForTraitCollection(trait: UITraitCollection): ScatterChartView; // inherited from UIAppearance

  /**
   * @since 8.0
   * @deprecated 9.0
   */
  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ScatterChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ScatterChartView; // inherited from UIAppearance

  /**
   * @since 5.0
   * @deprecated 9.0
   */
  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ScatterChartView; // inherited from UIAppearance

  /**
   * @since 9.0
   */
  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ScatterChartView; // inherited from UIAppearance

  static new(): ScatterChartView; // inherited from NSObject

  readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

  readonly chartXMax: number; // inherited from ChartDataProvider

  readonly chartXMin: number; // inherited from ChartDataProvider

  readonly chartYMax: number; // inherited from ChartDataProvider

  readonly chartYMin: number; // inherited from ChartDataProvider

  readonly data: ChartData; // inherited from ChartDataProvider

  readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

  readonly maxHighlightDistance: number; // inherited from ChartDataProvider

  readonly maxVisibleCount: number; // inherited from ChartDataProvider

  readonly scatterData: ScatterChartData; // inherited from ScatterChartDataProvider

  readonly xRange: number; // inherited from ChartDataProvider

  getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

  isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare const enum ScatterShape {
  Square = 0,

  Circle = 1,

  Triangle = 2,

  Cross = 3,

  X = 4,

  ChevronUp = 5,

  ChevronDown = 6,
}

interface ShapeRenderer {
  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}
declare var ShapeRenderer: {
  prototype: ShapeRenderer;
};

declare class SquareShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): SquareShapeRenderer; // inherited from NSObject

  static new(): SquareShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class TriangleShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): TriangleShapeRenderer; // inherited from NSObject

  static new(): TriangleShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare const enum XAxisLabelPosition {
  Top = 0,

  Bottom = 1,

  BothSided = 2,

  TopInside = 3,

  BottomInside = 4,
}

declare class XAxisRendererHorizontalBarChart extends ChartXAxisRenderer {
  static alloc(): XAxisRendererHorizontalBarChart; // inherited from NSObject

  static new(): XAxisRendererHorizontalBarChart; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; axis: ChartXAxis; transformer: ChartTransformer; chart: BarChartView });

  drawLabelWithContextFormattedLabelXYAttributesAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, anchor: CGPoint, angleRadians: number): void;

  initWithViewPortHandlerAxisTransformerChart(viewPortHandler: ChartViewPortHandler, axis: ChartXAxis, transformer: ChartTransformer, chart: BarChartView): this;
}

declare class XAxisRendererRadarChart extends ChartXAxisRenderer {
  static alloc(): XAxisRendererRadarChart; // inherited from NSObject

  static new(): XAxisRendererRadarChart; // inherited from NSObject

  chart: RadarChartView;

  constructor(o: { viewPortHandler: ChartViewPortHandler; axis: ChartXAxis; chart: RadarChartView });

  drawLabelWithContextFormattedLabelXYAttributesAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, anchor: CGPoint, angleRadians: number): void;

  initWithViewPortHandlerAxisChart(viewPortHandler: ChartViewPortHandler, axis: ChartXAxis, chart: RadarChartView): this;
}

declare class XShapeRenderer extends NSObject implements ShapeRenderer {
  static alloc(): XShapeRenderer; // inherited from NSObject

  static new(): XShapeRenderer; // inherited from NSObject

  renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: ScatterChartDataSetProtocol, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare const enum YAxisLabelPosition {
  OutsideChart = 0,

  InsideChart = 1,
}

declare class YAxisRendererHorizontalBarChart extends ChartYAxisRenderer {
  static alloc(): YAxisRendererHorizontalBarChart; // inherited from NSObject

  static new(): YAxisRendererHorizontalBarChart; // inherited from NSObject

  drawYLabelsWithContextFixedPositionPositionsOffset(context: any, fixedPosition: number, positions: NSArray<NSValue> | NSValue[], offset: number): void;
}

declare class YAxisRendererRadarChart extends ChartYAxisRenderer {
  static alloc(): YAxisRendererRadarChart; // inherited from NSObject

  static new(): YAxisRendererRadarChart; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; axis: ChartYAxis; chart: RadarChartView });

  initWithViewPortHandlerAxisChart(viewPortHandler: ChartViewPortHandler, axis: ChartYAxis, chart: RadarChartView): this;
}

declare class ZoomChartViewJob extends ChartViewPortJob {
  static alloc(): ZoomChartViewJob; // inherited from NSObject

  static new(): ZoomChartViewJob; // inherited from NSObject

  constructor(o: { viewPortHandler: ChartViewPortHandler; scaleX: number; scaleY: number; xValue: number; yValue: number; transformer: ChartTransformer; axis: AxisDependency; view: ChartViewBase });

  initWithViewPortHandlerScaleXScaleYXValueYValueTransformerAxisView(viewPortHandler: ChartViewPortHandler, scaleX: number, scaleY: number, xValue: number, yValue: number, transformer: ChartTransformer, axis: AxisDependency, view: ChartViewBase): this;
}
