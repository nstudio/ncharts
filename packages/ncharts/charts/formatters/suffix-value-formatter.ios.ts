import { compileValueFormatterTransform } from './value-formatter-helpers';

@NativeClass()
export class NSSuffixValueFormatter extends NSObject implements ChartAxisValueFormatter, ChartValueFormatter {
  public static ObjCProtocols = [ChartAxisValueFormatter, ChartValueFormatter];

  private _formatter: NSNumberFormatter;
  private _transform?: (y: number) => number;

  public static initWithPattern(pattern?: string, transformExpression?: string): NSSuffixValueFormatter {
    const formatter = <NSSuffixValueFormatter>NSSuffixValueFormatter.new();
    formatter._formatter = NSSuffixValueFormatter.createFormatter(pattern);
    if (transformExpression) {
      formatter._transform = compileValueFormatterTransform(transformExpression);
    }
    return formatter;
  }

  public stringForValueAxis(value: number, axis: any): string {
    return this.format(value);
  }

  public stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: any, dataSetIndex: number, viewPortHandler: any): string {
    return this.format(value);
  }

  private format(value: number): string {
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

    return this._formatter.stringFromNumber(transformedValue) ?? '';
  }

  private static createFormatter(pattern?: string): NSNumberFormatter {
    const parsed = this.parsePattern(pattern);

    const formatter = NSNumberFormatter.new();
    formatter.numberStyle = NSNumberFormatterStyle.DecimalStyle;
    formatter.usesGroupingSeparator = false;

    formatter.minimumIntegerDigits = parsed.integerDigits;
    formatter.minimumFractionDigits = parsed.fractionDigits;
    formatter.maximumFractionDigits = parsed.fractionDigits;
    formatter.positiveSuffix = parsed.suffix;
    formatter.negativeSuffix = parsed.suffix;

    if (parsed.decimalSeparator) {
      formatter.decimalSeparator = parsed.decimalSeparator;
    }

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
