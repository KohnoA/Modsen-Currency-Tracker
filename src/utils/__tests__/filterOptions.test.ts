import { filterOptions } from '../filterOptions';

describe('Testing filterOption function', () => {
  it('Must return the match', () => {
    const result = filterOptions(['1option', '2option', '3option'], '1opt');

    expect(result.length).toBe(1);
    expect(result.indexOf('1option')).not.toBe(-1);
  });

  it('Should not be case sensitive', () => {
    const result = filterOptions(['1option', '2option', '3option'], '1OPT');

    expect(result.length).toBe(1);
    expect(result.indexOf('1option')).not.toBe(-1);
  });

  it('If there is no such value, returns an empty array', () => {
    const result = filterOptions(['1option', '2option', '3option'], 'fwebfhwe');

    expect(result.length).toBe(0);
    expect(result.indexOf('fwebfhwe')).toBe(-1);
  });

  it('If the value matches exactly, returns an empty array', () => {
    const result = filterOptions(['1option', '2option', '3option'], '1option');

    expect(result.length).toBe(0);
    expect(result.indexOf('fwebfhwe')).toBe(-1);
  });
});
