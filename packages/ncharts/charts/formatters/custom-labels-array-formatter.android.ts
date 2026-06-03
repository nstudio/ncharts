///////////////////////////////////////////////////////
// axis formatter for custom labels provided as array
@NativeClass()
export class NSCustomLabelsArrayFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
  private _labels: string[];

  constructor(labels: string[]) {
    super();
    this._labels = labels ?? [];
    return global.__native(this);
  }

  public getFormattedValue(value: number): string {
    const index = Math.round(value);
    if (!this._labels || index < 0 || index >= this._labels.length) {
      return '';
    }
    return this._labels[index] || '';
  }

  public getAxisLabel(value: number, axis: com.github.mikephil.charting.components.AxisBase): string {
    return this.getFormattedValue(value);
  }

  public getPointLabel(entry: com.github.mikephil.charting.data.Entry): string {
    if (!entry) return '';
    return this.getFormattedValue(entry.getX());
  }
}
