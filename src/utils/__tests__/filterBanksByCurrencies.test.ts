import { BANKS_DATA } from '@/db/banksData';

import { filterBanksByCurrencies } from '../filterBanksByCurrencies';

describe('Testing filterBanksByCurrencies function', () => {
  it('Should return relevant banks', () => {
    expect(filterBanksByCurrencies('USD', BANKS_DATA)).toEqual([BANKS_DATA[0], BANKS_DATA[2]]);
  });

  it('Should not be case sensitive', () => {
    expect(filterBanksByCurrencies('usd', BANKS_DATA)).toEqual([BANKS_DATA[0], BANKS_DATA[2]]);
  });

  it('If there are no banks for the specified currency, return an empty array', () => {
    expect(filterBanksByCurrencies('kmwfewfnw', BANKS_DATA)).toEqual([]);
  });
});
