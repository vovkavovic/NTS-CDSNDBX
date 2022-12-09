export function isValid<T>(values: T[]): (value: unknown) => value is T {
  return (value: unknown): value is T => {
    return values.includes(value as T);
  };
}
