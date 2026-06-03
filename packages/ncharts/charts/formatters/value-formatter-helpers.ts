export function compileValueFormatterTransform(src?: string): ((y: number) => number) | undefined {
  if (!src?.trim()) return undefined;

  let fn: unknown;
  try {
    fn = eval(`(${src})`);
  } catch (err) {
    console.error('Invalid valueFormatterTransformExpression:', src, err);
    return undefined;
  }

  if (typeof fn !== 'function') {
    console.error('valueFormatterTransformExpression is not a function:', src);
    return undefined;
  }

  try {
    const test = (fn as (y: number) => number)(1);
    if (typeof test !== 'number' || !Number.isFinite(test)) {
      console.error('valueFormatterTransformExpression must map number -> finite number:', src);
      return undefined;
    }
  } catch (err) {
    console.error('valueFormatterTransformExpression test call failed:', src, err);
    return undefined;
  }

  return fn as (y: number) => number;
}
