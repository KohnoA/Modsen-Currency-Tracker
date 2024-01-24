import { getDiffHours } from '../getDiffHours';

describe('Testing getDiffHours function', () => {
  it('Should return the correct hour difference', () => {
    expect(getDiffHours(new Date(2020, 1, 1, 10, 12, 0), new Date(2020, 1, 1, 12, 12, 0))).toBe(2);
    expect(getDiffHours(new Date(2020, 1, 1, 1, 12, 0), new Date(2020, 1, 1, 12, 12, 0))).toBe(11);
    expect(getDiffHours(new Date(2020, 1, 1, 23, 12, 0), new Date(2020, 1, 1, 23, 12, 0))).toBe(0);
    expect(getDiffHours(new Date(2020, 1, 2, 2, 12, 0), new Date(2020, 1, 1, 20, 12, 0))).toBe(6);
  });
});
