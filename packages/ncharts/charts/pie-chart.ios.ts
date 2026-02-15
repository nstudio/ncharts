/**
 * PieChart - iOS Implementation
 */
import { PieChartBase, ChartAnimation, LegendConfig, XAxisConfig, ChartDescription, MarkerConfig, Highlight, PieDataSetConfig, nchartsLog, nchartsError } from '../common';
import { toUIColor, parseEasingIOS } from './utils';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyDescriptionIOS } from './style-helpers.ios';

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

function applyPieDataSetConfig(dataSet: PieChartDataSet, config: PieDataSetConfig): void {
  if (!dataSet || !config) return;
  nchartsLog('[ncharts] applyPieDataSetConfigIOS START');

  try {
    if (config.colors) {
      nchartsLog('[ncharts] Setting colors:', config.colors);
      const colors: UIColor[] = [];
      config.colors.forEach((c: any) => {
        const color = toUIColor(c);
        if (color) colors.push(color);
      });
      for (const c of colors) {
        dataSet.addColor(c);
      }
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
    if (config.valueTextColor) {
      nchartsLog('[ncharts] Setting valueTextColor:', config.valueTextColor);
      const textColor = toUIColor(config.valueTextColor);
      if (textColor) dataSet.valueTextColor = textColor;
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
      const lineColor = toUIColor(config.valueLineColor);
      if (lineColor) dataSet.valueLineColor = lineColor;
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
    nchartsLog('[ncharts] applyPieDataSetConfigIOS END');
  } catch (err) {
    nchartsError('[ncharts] applyPieDataSetConfigIOS ERROR:', err);
  }
}

export class PieChart extends PieChartBase {
  private _native: PieChartView | null = null;
  private _delegate: PieChartViewDelegateImpl | null = null;

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
    instance.highlightPerTapEnabled = this.highlightPerTapEnabled;

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

  private _applyPieChartConfig(): void {
    nchartsLog('[ncharts] PieChart._applyPieChartConfig iOS START');
    const instance = this._native!;
    try {
      nchartsLog('[ncharts] Setting drawHoleEnabled:', this.drawHole);
      instance.drawHoleEnabled = this.drawHole;

      nchartsLog('[ncharts] Setting holeRadiusPercent:', this.holeRadius / 100.0);
      instance.holeRadiusPercent = this.holeRadius / 100.0;

      nchartsLog('[ncharts] Setting transparentCircleRadiusPercent:', this.transparentCircleRadius / 100.0);
      instance.transparentCircleRadiusPercent = this.transparentCircleRadius / 100.0;

      nchartsLog('[ncharts] Setting holeColor, value:', this.holeColor);
      const holeUIColor = toUIColor(this.holeColor);
      nchartsLog('[ncharts] holeUIColor result:', holeUIColor);
      if (holeUIColor) instance.holeColor = holeUIColor;

      nchartsLog('[ncharts] Setting drawCenterTextEnabled:', this.drawCenterText);
      instance.drawCenterTextEnabled = this.drawCenterText;

      // Set center text with optional styling (size, color)
      if (this.centerText) {
        nchartsLog('[ncharts] Setting centerText:', this.centerText, 'size:', this.centerTextSize, 'color:', this.centerTextColor);
        if (this.centerTextSize || this.centerTextColor) {
          // Use NSAttributedString for styled text
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

          // Add paragraph style for center alignment
          const paragraphStyle = NSMutableParagraphStyle.alloc().init();
          paragraphStyle.alignment = NSTextAlignment.Center;
          attributes.setObjectForKey(paragraphStyle, NSParagraphStyleAttributeName);

          const attributedString = NSAttributedString.alloc().initWithStringAttributes(this.centerText, attributes);
          instance.centerAttributedText = attributedString;
        } else {
          instance.centerText = this.centerText;
        }
      }

      nchartsLog('[ncharts] Setting drawSlicesUnderHoleEnabled: false');
      instance.drawSlicesUnderHoleEnabled = false;

      // Set entry label (slice text) properties
      nchartsLog('[ncharts] Setting drawEntryLabelsEnabled:', this.drawSliceText);
      instance.drawEntryLabelsEnabled = this.drawSliceText;

      if (this.sliceTextSize) {
        nchartsLog('[ncharts] Setting entryLabelFont size:', this.sliceTextSize);
        instance.entryLabelFont = UIFont.systemFontOfSize(this.sliceTextSize);
      }

      if (this.sliceTextColor) {
        nchartsLog('[ncharts] Setting entryLabelColor:', this.sliceTextColor);
        const labelColor = toUIColor(this.sliceTextColor);
        if (labelColor) instance.entryLabelColor = labelColor;
      }

      nchartsLog('[ncharts] Setting usePercentValuesEnabled:', this.usePercentValues);
      instance.usePercentValuesEnabled = this.usePercentValues;

      nchartsLog('[ncharts] rotationEnabled value:', this.rotationEnabled, 'type:', typeof this.rotationEnabled);
      if (this.rotationEnabled !== undefined && this.rotationEnabled !== null) {
        nchartsLog('[ncharts] Setting rotationEnabled:', this.rotationEnabled);
        instance.rotationEnabled = this.rotationEnabled;
      }

      nchartsLog('[ncharts] rotationAngle value:', this.rotationAngle, 'type:', typeof this.rotationAngle);
      if (this.rotationAngle !== undefined && this.rotationAngle !== null) {
        nchartsLog('[ncharts] Setting rotationAngle:', this.rotationAngle);
        instance.rotationAngle = this.rotationAngle;
      }

      nchartsLog('[ncharts] maxAngle value:', this.maxAngle, 'type:', typeof this.maxAngle);
      if (this.maxAngle !== undefined && this.maxAngle !== null) {
        nchartsLog('[ncharts] Setting maxAngle:', this.maxAngle);
        instance.maxAngle = this.maxAngle;
      }

      nchartsLog('[ncharts] PieChart._applyPieChartConfig iOS END');
    } catch (err) {
      nchartsError('[ncharts] PieChart._applyPieChartConfig iOS ERROR:', err);
    }
  }

  disposeNativeView(): void {
    this._delegate = null;
    this._native = null;
    this._nativeChart = null;
    super.disposeNativeView();
  }

  get nativeChart(): any {
    return this._native;
  }

  // Property change handlers
  onDrawHoleChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onDrawHoleChange:', this.drawHole);
    this._native.drawHoleEnabled = this.drawHole;
    this._native.setNeedsDisplay();
  }

  onHoleRadiusChange(): void {
    if (!this._native) return;
    nchartsLog('[ncharts] onHoleRadiusChange:', this.holeRadius);
    this._native.holeRadiusPercent = this.holeRadius / 100.0;
    this._native.transparentCircleRadiusPercent = this.transparentCircleRadius / 100.0;
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
          applyPieDataSetConfig(dataSet, ds.config);
        }

        nchartsLog('[ncharts] Creating PieChartData');
        const chartData = PieChartData.alloc().initWithDataSet(dataSet);

        nchartsLog('[ncharts] Assigning data to instance via KVC');
        // Use KVC to bypass readonly constraint from protocol
        instance.setValueForKey(chartData, 'data');
      }

      nchartsLog('[ncharts] Calling notifyDataSetChanged');
      instance.notifyDataSetChanged();
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
    applyXAxisIOS(this._native, xAxis);
  }
  protected _applyDescription(description: ChartDescription): void {
    applyDescriptionIOS(this._native, description);
  }
  protected _applyMarker(marker: MarkerConfig): void {}
}
