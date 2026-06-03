/**
 * PieChart - iOS Implementation
 */
import { PieChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, PieDataSetConfig, nchartsLog, nchartsError, animationProperty, drawHoleProperty, holeRadiusProperty, transparentCircleRadiusProperty, holeColorProperty, ChartColor, transparentCircleColorProperty, drawCenterTextProperty, centerTextProperty, centerTextColorProperty, centerTextSizeProperty, drawSliceTextProperty, sliceTextSizeProperty, sliceTextColorProperty, usePercentValuesProperty, maxAngleProperty, extraOffsetsProperty, ViewPortOffset, rotationEnabledProperty, highlightPerTapEnabledProperty, touchEnabledProperty } from '../common';
import { toUIColor, parseEasingIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyDescriptionIOS } from './style-helpers.ios';
import { NSSuffixValueFormatter } from './formatters/suffix-value-formatter.ios';

@NativeClass()
class PieChartViewDelegateImpl extends NSObject implements ChartViewDelegate {
  static ObjCProtocols = [ChartViewDelegate];
  private _owner: WeakRef<PieChart>;

  static initWithOwner(owner: PieChart): PieChartViewDelegateImpl {
    const delegate = PieChartViewDelegateImpl.new() as PieChartViewDelegateImpl;
    delegate._owner = new WeakRef(owner);
    return delegate;
  }

  chartValueSelectedEntryHighlight(chartView: ChartViewBase, entry: ChartDataEntry, highlight: ChartHighlight): void {
    const owner = this._owner?.deref();
    if (owner) {
      const data = {
        x: entry.x,
        y: entry.y,
        dataSetIndex: highlight.dataSetIndex,
        dataIndex: highlight.dataIndex,
        data: entry.data,
      };
      owner.notify({ eventName: PieChart.selectEvent, object: owner, data });
    }
  }

  chartValueNothingSelected(chartView: ChartViewBase): void {
    const owner = this._owner?.deref();
    if (owner) {
      owner.notify({ eventName: PieChart.deselectEvent, object: owner });
    }
  }
}

function applyPieDataSetConfig(dataSet: PieChartDataSet, config: PieDataSetConfig, retainedDataObjects: NSObject[]): void {
  if (!dataSet || !config) return;
  nchartsLog('[ncharts] applyPieDataSetConfigIOS START');

  try {
    if (config.colors?.length) {
      nchartsLog('[ncharts] Setting colors:', config.colors);
      dataSet.resetColors();
      for (const c of config.colors) {
        const color = toUIColor(c);
        if (color) dataSet.addColor(color);
      }
    } else if (config.color) {
      const color = toUIColor(config.color);
      if (color) dataSet.setColor(color);
    }

    if (config.highlightEnabled !== undefined) {
      nchartsLog('[ncharts] Setting highlightEnabled:', config.highlightEnabled);
      dataSet.highlightEnabled = config.highlightEnabled;
    }
    if (config.drawValues !== undefined) {
      nchartsLog('[ncharts] Setting drawValuesEnabled:', config.drawValues);
      dataSet.drawValuesEnabled = config.drawValues;
    }
    if (config.valueTextSize !== undefined) {
      nchartsLog('[ncharts] Setting valueFont size:', config.valueTextSize);
      dataSet.valueFont = dataSet.valueFont.fontWithSize(config.valueTextSize);
    }
    const isOutsideSlice = config.xValuePosition === 'OUTSIDE_SLICE' || config.yValuePosition === 'OUTSIDE_SLICE';
    if (config.valueTextColor) {
      nchartsLog('[ncharts] Setting valueTextColor:', config.valueTextColor);
      const textColor = toUIColor(config.valueTextColor);
      if (textColor) dataSet.valueTextColor = textColor;
    } else if (isOutsideSlice && config.colors?.length) {
      nchartsLog('[ncharts] Setting valueColors fallback to slice colors:', config.colors);
      const valueColors = NSMutableArray.alloc().init();
      for (const c of config.colors) {
        const color = toUIColor(c);
        if (color) {
          valueColors.addObject(color);
        }
      }
      if (valueColors.count > 0) {
        (dataSet as any).setValueForKey(valueColors, 'valueColors');
      }
    } else if (config.color) {
      const color = toUIColor(config.color);
      if (color) {
        dataSet.valueTextColor = color;
      }
    }
    if (config.visible !== undefined) {
      nchartsLog('[ncharts] Setting visible:', config.visible);
      dataSet.visible = config.visible;
    }
    if (config.sliceSpace !== undefined) {
      nchartsLog('[ncharts] Setting sliceSpace:', config.sliceSpace);
      dataSet.sliceSpace = config.sliceSpace;
    }
    if (config.selectionShift !== undefined) {
      nchartsLog('[ncharts] Setting selectionShift:', config.selectionShift);
      dataSet.selectionShift = config.selectionShift;
    }
    if (config.xValuePosition) {
      nchartsLog('[ncharts] Setting xValuePosition:', config.xValuePosition);
      dataSet.xValuePosition = config.xValuePosition === 'OUTSIDE_SLICE' ? 1 : 0;
    }
    if (config.yValuePosition) {
      nchartsLog('[ncharts] Setting yValuePosition:', config.yValuePosition);
      dataSet.yValuePosition = config.yValuePosition === 'OUTSIDE_SLICE' ? 1 : 0;
    }
    if (config.valueLinePart1Length !== undefined) {
      nchartsLog('[ncharts] Setting valueLinePart1Length:', config.valueLinePart1Length);
      dataSet.valueLinePart1Length = config.valueLinePart1Length;
    }
    if (config.valueLinePart2Length !== undefined) {
      nchartsLog('[ncharts] Setting valueLinePart2Length:', config.valueLinePart2Length);
      dataSet.valueLinePart2Length = config.valueLinePart2Length;
    }
    if (config.valueLineColor) {
      nchartsLog('[ncharts] Setting valueLineColor:', config.valueLineColor);
      dataSet.useValueColorForLine = false;
      const lineColor = toUIColor(config.valueLineColor);
      if (lineColor) dataSet.valueLineColor = lineColor;
    } else {
      dataSet.useValueColorForLine = true;
    }
    if (config.valueLineWidth !== undefined) {
      nchartsLog('[ncharts] Setting valueLineWidth:', config.valueLineWidth);
      dataSet.valueLineWidth = config.valueLineWidth;
    }
    if (config.valueLinePart1OffsetPercentage !== undefined) {
      nchartsLog('[ncharts] Setting valueLinePart1OffsetPercentage:', config.valueLinePart1OffsetPercentage);
      dataSet.valueLinePart1OffsetPercentage = config.valueLinePart1OffsetPercentage;
    }
    if (config.valueLineVariableLength !== undefined) {
      nchartsLog('[ncharts] Setting valueLineVariableLength:', config.valueLineVariableLength);
      dataSet.valueLineVariableLength = config.valueLineVariableLength;
    }
    if (config.valueFormatter === 'number' || config.valueFormatter === 'percent' || config.valueFormatter === 'suffix') {
      const vf = NSSuffixValueFormatter.initWithPattern(config.valueFormatterPattern);
      dataSet.valueFormatter = vf;
      retainedDataObjects.push(vf);
    }
    nchartsLog('[ncharts] applyPieDataSetConfigIOS END');
  } catch (err) {
    nchartsError('[ncharts] applyPieDataSetConfigIOS ERROR:', err);
  }
}

export class PieChart extends PieChartBase {
  private _native: PieChartView | null = null;
  private _delegate: PieChartViewDelegateImpl | null = null;
  private _retainedChartObjects: Array<any> = [];
  private _retainedDataObjects: NSObject[] = [];

  createNativeView(): any {
    nchartsLog('[ncharts] PieChart.createNativeView()');
    this._native = PieChartView.alloc().initWithFrame(CGRectZero);
    this._nativeChart = this._native;
    return this._native;
  }

  initNativeView(): void {
    nchartsLog('[ncharts] PieChart.initNativeView()');
    super.initNativeView();

    const instance = this._native!;

    // Prevent ghosting during animations
    instance.clipsToBounds = true;
    instance.layer.masksToBounds = true;

    const bg = this.chartBackgroundColor ? toUIColor(this.chartBackgroundColor) : UIColor.clearColor;
    instance.backgroundColor = bg;
    instance.opaque = bg.CGColor.alpha === 1;

    // Disable asynchronous drawing to prevent layer overlap
    instance.layer.drawsAsynchronously = false;
    instance.layer.shouldRasterize = false;

    instance.clearsContextBeforeDrawing = true;
    if (this.noDataText) instance.noDataText = this.noDataText;
    applyNoDataTextColorIOS(instance, this.noDataTextColor);

    // Set up selection delegate
    this._delegate = PieChartViewDelegateImpl.initWithOwner(this);
    instance.delegate = this._delegate;

    if (this.legend) this._applyLegend(this.legend);
    if (this.xAxis) this._applyXAxis(this.xAxis);
    if (this.chartDescription) this._applyDescription(this.chartDescription);

    this._applyPieChartConfig();
    if (this.data) this.applyData();
  }

  disposeNativeView(): void {
    this._retainedChartObjects.length = 0;
    this._retainedDataObjects.length = 0;
    this._delegate = null;
    this._native = null;
    this._nativeChart = null;
    super.disposeNativeView();
  }

  private _applyPieChartConfig(): void {
    nchartsLog('[ncharts] PieChart._applyPieChartConfig iOS START');
    const instance = this._native!;
    try {
      nchartsLog('[ncharts] Setting drawSlicesUnderHoleEnabled: false');
      instance.drawSlicesUnderHoleEnabled = false;

      nchartsLog('[ncharts] rotationAngle value:', this.rotationAngle, 'type:', typeof this.rotationAngle);
      if (this.rotationAngle !== undefined && this.rotationAngle !== null) {
        nchartsLog('[ncharts] Setting rotationAngle:', this.rotationAngle);
        instance.rotationAngle = this.rotationAngle;
      }

      nchartsLog('[ncharts] PieChart._applyPieChartConfig iOS END');
    } catch (err) {
      nchartsError('[ncharts] PieChart._applyPieChartConfig iOS ERROR:', err);
    }
  }

  get nativeChart(): any {
    return this._native;
  }

  private updateCenterText(): void {
    if (!this._native) return;

    const instance = this._native;

    if (this.centerText) {
      nchartsLog('[ncharts] Setting centerText:', this.centerText, 'size:', this.centerTextSize, 'color:', this.centerTextColor);

      if (this.centerTextSize || this.centerTextColor) {
        const attributes = NSMutableDictionary.alloc().init();

        if (this.centerTextSize) {
          const font = UIFont.systemFontOfSize(this.centerTextSize);
          attributes.setObjectForKey(font, NSFontAttributeName);
        }

        if (this.centerTextColor) {
          const textColor = toUIColor(this.centerTextColor);
          if (textColor) {
            attributes.setObjectForKey(textColor, NSForegroundColorAttributeName);
          }
        }

        const paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.alignment = NSTextAlignment.Center;
        attributes.setObjectForKey(paragraphStyle, NSParagraphStyleAttributeName);

        const attributedString = NSAttributedString.alloc().initWithStringAttributes(this.centerText, attributes);
        instance.centerAttributedText = attributedString;
      } else {
        instance.centerText = this.centerText;
      }

      instance.setNeedsDisplay();
    }
  }

  // Property change handlers
  [extraOffsetsProperty.setNative](value: ViewPortOffset) {
    if (this._native && value) {
      this._native.setExtraOffsetsWithLeftTopRightBottom(value.left, value.top, value.right, value.bottom);
      this._native.notifyDataSetChanged();
      this._native.setNeedsDisplay();
    }
  }

  [touchEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.userInteractionEnabled = value;
    }
  }

  [highlightPerTapEnabledProperty.setNative](value: boolean) {
    if (this._native) {
      this._native.highlightPerTapEnabled = value;
    }
  }
  [drawHoleProperty.setNative](value: boolean) {
    if (!this._native) return;
    nchartsLog('[ncharts] onDrawHoleChange:', value);
    this._native.drawHoleEnabled = value;
    this._native.setNeedsDisplay();
  }

  [holeRadiusProperty.setNative](value: number) {
    if (!this._native) return;
    nchartsLog('[ncharts] onHoleRadiusChange:', value);
    this._native.holeRadiusPercent = value / 100;
    this._native.setNeedsDisplay();
  }

  [transparentCircleRadiusProperty.setNative](value: number) {
    if (!this._native) return;
    nchartsLog('[ncharts] onTransparentCircleRadius:', value);
    this._native.transparentCircleRadiusPercent = value / 100;
    this._native.setNeedsDisplay();
  }

  [holeColorProperty.setNative](value: ChartColor) {
    if (!this._native) return;
    this._native.holeColor = value == null ? undefined : toUIColor(value);
    this._native.setNeedsDisplay();
  }

  [transparentCircleColorProperty.setNative](value: ChartColor) {
    if (!this._native) return;
    this._native.transparentCircleColor = value == null ? undefined : toUIColor(value);
    this._native.setNeedsDisplay();
  }

  [drawCenterTextProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.drawCenterTextEnabled = value;
    this._native.setNeedsDisplay();
  }

  [centerTextProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [centerTextColorProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [centerTextSizeProperty.setNative](value: any) {
    this.updateCenterText();
  }

  [drawSliceTextProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.drawEntryLabelsEnabled = value;
    this._native.setNeedsDisplay();
  }

  [sliceTextSizeProperty.setNative](value: number) {
    if (!this._native) return;
    this._native.entryLabelFont = UIFont.systemFontOfSize(value);
    this._native.setNeedsDisplay();
  }

  [sliceTextColorProperty.setNative](value: ChartColor) {
    if (!this._native) return;
    this._native.entryLabelColor = value == null ? undefined : toUIColor(value);
    this._native.setNeedsDisplay();
  }

  [usePercentValuesProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.usePercentValuesEnabled = value;
    this._native.setNeedsDisplay();
  }

  [rotationEnabledProperty.setNative](value: boolean) {
    if (!this._native) return;
    this._native.rotationEnabled = value;
    this._native.setNeedsDisplay();
  }

  [maxAngleProperty.setNative](value: number) {
    if (!this._native) return;
    this._native.maxAngle = value;
    this._native.setNeedsDisplay();
  }

  onRotationAngleChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onRotationAngleChange:', this.rotationAngle);
    this._native.rotationAngle = this.rotationAngle;
    this._native.setNeedsDisplay();
  }

  applyData(): void {
    if (!this._native || !this.data) return;

    nchartsLog('[ncharts] PieChart._applyDataIOS START');
    const instance = this._native;

    try {
      // Stop any running animation
      nchartsLog('[ncharts] Checking chartAnimator:', instance.chartAnimator);
      if (instance.chartAnimator) {
        nchartsLog('[ncharts] Stopping animator');
        instance.chartAnimator.stop();
        instance.chartAnimator.phaseX = 1.0;
        instance.chartAnimator.phaseY = 1.0;
      }

      // Clear highlights
      nchartsLog('[ncharts] Clearing highlights');
      instance.highlightValues(null);

      nchartsLog('[ncharts] Clearing layer contents');
      instance.layer.contents = null;

      // clear any retained data objects / formatters
      this._retainedDataObjects.length = 0;

      // Build the data sets (pie chart typically has one dataset)
      nchartsLog('[ncharts] Processing dataSets, count:', this.data!.dataSets.length);
      for (const ds of this.data!.dataSets) {
        nchartsLog('[ncharts] Processing dataSet:', ds.label);
        const entries: PieChartDataEntry[] = [];

        ds.values.forEach((value: any, index: number) => {
          let entry: PieChartDataEntry;
          if (typeof value === 'number') {
            nchartsLog('[ncharts] Creating entry with value:', value);
            entry = PieChartDataEntry.alloc().initWithValue(value);
          } else {
            nchartsLog('[ncharts] Creating entry with value/label:', value.value, value.label);
            entry = PieChartDataEntry.alloc().initWithValueLabel(value.value, value.label || '');
          }
          entries.push(entry);
        });

        nchartsLog('[ncharts] Creating PieChartDataSet with entries:', entries.length);
        const dataSet = PieChartDataSet.alloc().initWithEntriesLabel(entries, ds.label);

        if (ds.config) {
          nchartsLog('[ncharts] Applying dataSet config');
          applyPieDataSetConfig(dataSet, ds.config, this._retainedDataObjects);
        }

        nchartsLog('[ncharts] Creating PieChartData');
        const chartData = PieChartData.alloc().initWithDataSet(dataSet);

        nchartsLog('[ncharts] Assigning data to instance via KVC');
        // Use KVC to bypass readonly constraint from protocol
        instance.setValueForKey(chartData, 'data');
      }

      nchartsLog('[ncharts] Calling notifyDataSetChanged');
      instance.notifyDataSetChanged();
      // data and animation properties cannot be set in a guranteed order
      // hence after each data update an animation needs to be executed
      if (this.animation) this._applyAnimation(this.animation);
      nchartsLog('[ncharts] PieChart._applyDataIOS END');
    } catch (err) {
      nchartsError('[ncharts] PieChart._applyDataIOS ERROR:', err);
    }
  }

  protected _applyAnimation(animation: ChartAnimation): void {
    if (!this._native) return;

    const instance = this._native;
    if (instance.chartAnimator) {
      instance.chartAnimator.stop();
    }
    instance.layer.contents = null;
    instance.layer.setNeedsDisplay();

    const durationX = (animation.durationX ?? 0) / 1000.0;
    const durationY = (animation.durationY ?? 0) / 1000.0;

    if (durationX > 0 && durationY > 0) {
      const easingX = animation.easingX ? parseEasingIOS(animation.easingX) : 0;
      const easingY = animation.easingY ? parseEasingIOS(animation.easingY) : easingX;
      instance.animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(durationX, durationY, easingX, easingY);
    } else if (durationX > 0) {
      const easingX = animation.easingX ? parseEasingIOS(animation.easingX) : 0;
      instance.animateWithXAxisDurationEasingOption(durationX, easingX);
    } else if (durationY > 0) {
      const easingY = animation.easingY ? parseEasingIOS(animation.easingY) : 0;
      instance.animateWithYAxisDurationEasingOption(durationY, easingY);
    }
  }

  protected _applyHighlights(highlights: Highlight[] | null): void {
    if (!this._native) return;

    if (!highlights || highlights.length === 0) {
      this._native.highlightValues(null);
      return;
    }

    const highlightArray: ChartHighlight[] = [];
    for (const h of highlights) {
      const highlight = ChartHighlight.alloc().initWithXYDataSetIndexDataIndex(h.x, h.y ?? 0, h.dataSetIndex ?? 0, h.dataIndex ?? -1);
      highlightArray.push(highlight);
    }
    this._native.highlightValues(highlightArray);
  }

  protected _invalidateChart(): void {
    this._native?.setNeedsDisplay();
  }

  protected _applyLegend(legend: LegendConfig): void {
    applyLegendIOS(this._native, legend);
  }
  protected _applyXAxis(xAxis: XAxisConfig): void {
    applyXAxisIOS(this._native, xAxis, this._retainedChartObjects);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}
}
