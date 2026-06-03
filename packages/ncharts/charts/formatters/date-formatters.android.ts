import { compileValueFormatterTransform } from './value-formatter-helpers';

/**
 * Axis formatter for timestamps.
 *
 * MPAndroidChart uses 32-bit floats internally. Because of this, full
 * millisecond timestamps (double precision) cannot be represented accurately.
 *
 * Recommended approach:
 *   - subtract the first timestamp from all X values
 *   - scale the result to a smaller unit (e.g. minutes instead of milliseconds)
 *
 * Example preprocessing:
 *   x = (timestamp - baseTimestamp) / 60000
 *
 * To reconstruct the original timestamp for formatting, use
 * `valueFormatterTransformExpression`, e.g.:
 *
 *   `(y) => ${baseTimestamp} + y * 60000`
 *
 * This keeps the chart values small while still formatting labels
 * using the correct absolute timestamps.
 */
@NativeClass()
export class NSDateAxisValueFormatter extends com.github.mikephil.charting.formatter.ValueFormatter {
  private _formatter: java.text.SimpleDateFormat;
  private _transform?: (y: number) => number;
  /**
   * @param pattern JS-like pattern (e.g. 'd. MMM HH:mm', 'YYYY-MM-DD HH:mm')
   * @param valueFormatterTransformExpression optional expression to transform axis values to date in ms
   */
  constructor(pattern?: string, valueFormatterTransformExpression?: string) {
    super();

    const locale = java.util.Locale.getDefault();
    const tz = java.util.TimeZone.getDefault();

    const javaPattern = this._normalizeJsLikeDatePatternToJava(pattern);
    this._formatter = new java.text.SimpleDateFormat(javaPattern, locale);
    this._formatter.setTimeZone(tz);

    if (valueFormatterTransformExpression) {
      this._transform = compileValueFormatterTransform(valueFormatterTransformExpression);
    }

    return global.__native(this);
  }

  public static initWithPattern(pattern?: string, valueFormatterTransformExpression?: string): NSDateAxisValueFormatter {
    return new NSDateAxisValueFormatter(pattern, valueFormatterTransformExpression);
  }

  public getAxisLabel(value: number, axis: com.github.mikephil.charting.components.AxisBase): string {
    return this.getFormattedValue(value);
  }

  public getFormattedValue(value: number): string {
    if (value === null || value === undefined || Number.isNaN(value)) return '';

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

    // axis values are floats -> avoid fractional ms
    const millis = Math.round(transformedValue);

    try {
      const date = new java.util.Date(millis);
      return this._formatter ? this._formatter.format(date) : '';
    } catch (_err) {
      return '';
    }
  }

  private _normalizeJsLikeDatePatternToJava(input?: string): string {
    if (!input) return 'MMM dd';

    const m: Record<string, string> = {
      YYYY: 'yyyy',
      YY: 'yy',
      DD: 'dd',
      D: 'd',
      A: 'a',
      a: 'a',
      MMMM: 'MMMM',
      MMM: 'MMM',
      MM: 'MM',
      M: 'M',
      HH: 'HH',
      H: 'H',
      hh: 'hh',
      h: 'h',
      mm: 'mm',
      m: 'm',
      ss: 'ss',
      s: 's',
    };

    return Object.keys(m)
      .sort((a, b) => b.length - a.length)
      .reduce((p, k) => p.split(k).join(m[k]), input);
  }
}
