export function Spread<T>(arr: T[] | T): T[] {
  /*
   * Use the typeof operator and the Array.isArray method
   * to determine the type of the input
   */
  if (typeof arr === 'object' && Array.isArray(arr)) {
    // If the input is an array, use the array spread syntax
    return [...arr];
  } else {
    // If the input is an object, use the object spread syntax
    return { ...arr };
  }
}
