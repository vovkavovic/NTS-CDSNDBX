export function isValid<T>(values: T[]): (value: unknown) => value is T {
  return (value: unknown): value is T => {
    return values.some((val) => {
      return Object.is(val, value);
    });
  };
}
