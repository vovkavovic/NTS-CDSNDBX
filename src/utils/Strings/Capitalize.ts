export function Capitalize<T>(string: T): string {
  const dataStr = String(string);

  return dataStr.charAt(0).toUpperCase() + dataStr.slice(1);
}
