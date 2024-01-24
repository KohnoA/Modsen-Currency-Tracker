import { truncateNumber } from '../truncateNumber';

describe('Testing truncateNumber function', () => {
  it('Should handle numbers greater than 0.01 correctly', () => {
    expect(truncateNumber(123.98898989)).toBe('123.99');
    expect(truncateNumber(3.12312)).toBe('3.12');
    expect(truncateNumber(514123.2131321)).toBe('514123.21');
  });

  it('Should handle numbers less than 0.01 correctly', () => {
    expect(truncateNumber(0.0000023)).toBe('0.0000023');
    expect(truncateNumber(0.01)).toBe('0.01');
    expect(truncateNumber(0.0001233)).toBe('0.00012');
  });

  it('Should work with very small values', () => {
    expect(truncateNumber(0.000000000023)).toBe('0.000000000023');
    expect(truncateNumber(0.00000000002321313)).toBe('0.000000000023');
  });
});
