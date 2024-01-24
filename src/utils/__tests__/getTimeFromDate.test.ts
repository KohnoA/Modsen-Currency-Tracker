import { getTimeFromDate } from '../getTimeFromDate';

describe('Testing getTimeFromDate function', () => {
  it('', () => {
    expect(getTimeFromDate(new Date(2020, 1, 1, 13, 20, 0))).toBe('01:20 PM');
    expect(getTimeFromDate(new Date(2020, 1, 1, 1, 30, 0))).toBe('01:30 AM');
    expect(getTimeFromDate(new Date(2020, 1, 1, 20, 50, 0))).toBe('08:50 PM');
  });
});
