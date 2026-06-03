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
 *
 * For compatibility purposes we also implement this approach on IOS side
 */
@NativeClass()
export class NSDateAxisValueFormatter extends NSObject implements ChartAxisValueFormatter {
  public static ObjCProtocols = [ChartAxisValueFormatter];

  private _formatter!: NSDateFormatter;
  private _transform?: (y: number) => number;

  public static initWithPattern(pattern?: string, valueFormatterTransformExpression?: string): NSDateAxisValueFormatter {
    const obj = <NSDateAxisValueFormatter>NSDateAxisValueFormatter.new();

    const df = NSDateFormatter.new();
    // Use device locale/timezone for UI labels
    df.locale = NSLocale.currentLocale;
    df.timeZone = NSTimeZone.localTimeZone;
    df.dateFormat = obj._normalizeJsLikeDatePatternToApple(pattern);
    obj._formatter = df;

    if (valueFormatterTransformExpression) {
      obj._transform = compileValueFormatterTransform(valueFormatterTransformExpression);
    }
    return obj;
  }

  public stringForValueAxis(value: number, axis: ChartAxisBase): string {
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

    // NSDate expects seconds since Unix epoch
    const dateInSeconds = transformedValue / 1000;

    const date = NSDate.dateWithTimeIntervalSince1970(dateInSeconds);
    if (!date) return '';

    try {
      return this._formatter.stringFromDate(date as any) ?? '';
    } catch (_err) {
      return '';
    }
  }

  private _normalizeJsLikeDatePatternToApple(input?: string): string {
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
