///////////////////////////////////////////////////////
// chart value formatter to configure decimal number format
@NativeClass()
export class DecimalValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
  private _df: java.text.DecimalFormat;

  constructor(decimals: number = 0) {
    super();

    const d = Math.max(0, Math.floor(decimals));
    const pattern = d > 0 ? `0.${'0'.repeat(d)}` : '0';

    const symbols = new java.text.DecimalFormatSymbols(java.util.Locale.getDefault());
    this._df = new java.text.DecimalFormat(pattern, symbols);
    this._df.setGroupingUsed(false);

    return global.__native(this);
  }

  private _format(value: number): string {
    if (value === null || value === undefined || isNaN(value)) return '';
    try {
      const out = this._df?.format(value);
      return typeof out === 'string' ? out : '';
    } catch {
      return '';
    }
  }
  public getAxisLabel(value: number, axis: com.github.mikephil.charting.components.AxisBase): string {
    return this._format(value);
  }

  public getBarLabel(barEntry: com.github.mikephil.charting.data.BarEntry): string {
    if (!barEntry) return '';
    return this._format(barEntry.getY());
  }

  public getBarStackedLabel(value: number, stackedEntry: com.github.mikephil.charting.data.BarEntry): string {
    return this._format(value);
  }

  public getPointLabel(entry: com.github.mikephil.charting.data.Entry): string {
    if (!entry) return '';
    return this._format(entry.getY());
  }

  public getPieLabel(value: number, pieEntry: com.github.mikephil.charting.data.PieEntry): string {
    return this._format(value);
  }

  public getBubbleLabel(bubbleEntry: com.github.mikephil.charting.data.BubbleEntry): string {
    if (!bubbleEntry) return '';
    return this._format(bubbleEntry.getY());
  }

  public getCandleLabel(candleEntry: com.github.mikephil.charting.data.CandleEntry): string {
    if (!candleEntry) return '';
    return this._format(candleEntry.getHigh()); // oder close/open je nach Wunsch
  }

  public getRadarLabel(radarEntry: com.github.mikephil.charting.data.RadarEntry): string {
    if (!radarEntry) return '';
    return this._format(radarEntry.getY());
  }
}
