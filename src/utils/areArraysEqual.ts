export function areArraysEqual<T>(arr1: T[], arr2: T[]) {
  const arr1Sorted = [...arr1].sort();
  const arr2Sorted = [...arr2].sort();

  return arr1Sorted.toString() === arr2Sorted.toString();
}
