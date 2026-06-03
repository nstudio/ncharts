import { compileValueFormatterTransform } from './value-formatter-helpers';

@NativeClass()
export class NSSuffixValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
  private _decimalFormat: java.text.DecimalFormat;
  private _transform?: (y: number) => number;

  constructor(pattern?: string, transformExpression?: string) {
    super();

    const parsed = NSSuffixValueFormatter.parsePattern(pattern);
    this._decimalFormat = NSSuffixValueFormatter.createFormatter(parsed);

    if (transformExpression) {
      this._transform = compileValueFormatterTransform(transformExpression);
    }

    return global.__native(this);
  }

  public static initWithPattern(pattern?: string, transformExpression?: string): NSSuffixValueFormatter {
    return new NSSuffixValueFormatter(pattern, transformExpression);
  }

  public getFormattedValue(value: number): string {
    if (!Number.isFinite(value)) return '';

    let transformedValue = value;

    if (this._transform) {
      try {
        transformedValue = this._transform(value);
      } catch (err) {
        console.error('valueFormatterTransformExpression execution failed:', err);
        return '';
      }
    }

    if (!Number.isFinite(transformedValue)) return '';

    return this._decimalFormat.format(transformedValue);
  }

  public getAxisLabel(value: number, axis: com.github.mikephil.charting.components.AxisBase): string {
    return this.getFormattedValue(value);
  }

  public getBarLabel(barEntry: com.github.mikephil.charting.data.BarEntry): string {
    return barEntry ? this.getFormattedValue(barEntry.getY()) : '';
  }

  public getPointLabel(entry: com.github.mikephil.charting.data.Entry): string {
    return entry ? this.getFormattedValue(entry.getY()) : '';
  }

  public getStackedLabel(value: number, stackedEntry: com.github.mikephil.charting.data.BarEntry): string {
    return this.getFormattedValue(value);
  }

  private static createFormatter(parsed: { integerDigits: number; fractionDigits: number; suffix: string; decimalSeparator?: string }): java.text.DecimalFormat {
    const symbolsLocale = parsed.decimalSeparator === ',' ? java.util.Locale.GERMANY : java.util.Locale.US;

    const symbols = new java.text.DecimalFormatSymbols(symbolsLocale);

    // Java DecimalFormat patterns always use '.' internally
    const intPart = '0'.repeat(Math.max(1, parsed.integerDigits));
    const fracPart = parsed.fractionDigits > 0 ? '.' + '0'.repeat(parsed.fractionDigits) : '';
    const numberPattern = intPart + fracPart;

    const formatter = new java.text.DecimalFormat(numberPattern, symbols);

    formatter.setGroupingUsed(false);
    formatter.setPositiveSuffix(parsed.suffix);
    formatter.setNegativeSuffix(parsed.suffix);

    return formatter;
  }

  private static parsePattern(pattern?: string): {
    integerDigits: number;
    fractionDigits: number;
    suffix: string;
    decimalSeparator?: string;
  } {
    const p = (pattern && pattern.length ? pattern : '0').trim();

    const match = /^(\d+)(?:([.,])(\d+))?(.*)$/.exec(p);

    if (!match) {
      return {
        integerDigits: 1,
        fractionDigits: 0,
        suffix: '',
        decimalSeparator: undefined,
      };
    }

    return {
      integerDigits: match[1].length,
      fractionDigits: match[3] ? match[3].length : 0,
      suffix: match[4] || '',
      decimalSeparator: match[2] || undefined,
    };
  }
}
