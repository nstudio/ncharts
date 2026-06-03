///////////////////////////////////////////////////////
// axis formatter for custom labels provided as array
@NativeClass()
export class NSCustomLabelsArrayAxisValueFormatter extends NSObject implements ChartAxisValueFormatter {
  public static ObjCProtocols = [ChartAxisValueFormatter];

  private _labels: string[];

  public static initWithLabels(labels: string[]): NSCustomLabelsArrayAxisValueFormatter {
    const formatter = <NSCustomLabelsArrayAxisValueFormatter>NSCustomLabelsArrayAxisValueFormatter.new();
    formatter._labels = labels ?? [];
    return formatter;
  }
  public stringForValueAxis(value: number, axis: any): string {
    if (!this._labels || this._labels.length === 0) {
      return '';
    }
    const index = Math.round(value);
    if (index < 0 || index >= this._labels.length) {
      return '';
    }
    return this._labels[index] ?? '';
  }
}

///////////////////////////////////////////////////////
// chart value formatter maps x-values to customs values provided in array
@NativeClass()
export class NSCustomValueLabelsArrayChartValueFormatter extends NSObject implements ChartValueFormatter {
  public static ObjCProtocols = [ChartValueFormatter];

  private _labels: string[] = [];

  public static initWithLabels(labels: string[]): NSCustomValueLabelsArrayChartValueFormatter {
    const formatter = NSCustomValueLabelsArrayChartValueFormatter.new() as NSCustomValueLabelsArrayChartValueFormatter;
    formatter._labels = labels ?? [];
    return formatter;
  }

  public stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: any, dataSetIndex: number, viewPortHandler: any): string {
    if (!this._labels || this._labels.length === 0) {
      return '';
    }

    const x = entry?.x ?? 0;
    const idx = Math.round(x);

    if (idx < 0 || idx >= this._labels.length) return '';
    return this._labels[idx] ?? '';
  }
}
