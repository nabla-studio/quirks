export function assertIsDefined<T>(
  value: T,
  msg = '',
): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error([`[Quirks]: ${value} is not defined.`, msg].join(' '));
  }
}
