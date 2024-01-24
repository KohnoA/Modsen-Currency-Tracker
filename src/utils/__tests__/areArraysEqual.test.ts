import { areArraysEqual } from '../areArraysEqual';

describe('Testing areArraysEqual function', () => {
  it('The truth must return', () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(areArraysEqual([true, true, false], [true, true, false])).toBe(true);
    expect(areArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('Should return false', () => {
    expect(areArraysEqual([1, 2, 3, 3], [1, 2, 3])).toBe(false);
    expect(areArraysEqual([true, false, false], [true, true, false])).toBe(false);
    expect(areArraysEqual(['a', 'bye', 'c'], ['a', 'b', 'c'])).toBe(false);
  });
});
