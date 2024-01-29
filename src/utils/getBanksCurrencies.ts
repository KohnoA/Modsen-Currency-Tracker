import { BANKS_DATA } from '@/constants';

export function getBanksCurrencies(banksData: typeof BANKS_DATA) {
  const currenciesArr = banksData.map(({ currencies }) => currencies).flat();

  return [...new Set(currenciesArr)];
}
