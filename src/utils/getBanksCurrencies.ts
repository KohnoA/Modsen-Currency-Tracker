import { BANKS_DATA } from '@/db/banksData';

export function getBanksCurrencies(banksData: typeof BANKS_DATA) {
  const currenciesArr = banksData.map(({ currencies }) => currencies).flat();

  return [...new Set(currenciesArr)];
}
