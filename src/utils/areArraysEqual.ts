export function areArraysEqual<T>(arr1: T[], arr2: T[]) {
  return arr1.toSorted().toString() === arr2.toSorted().toString();
}
