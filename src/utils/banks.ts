import { BANKS_DATA } from '@/constants';

export function filterBanksByCurrencies(targetCurrency: string, banks = BANKS_DATA) {
  return banks.filter(({ currencies }) =>
    currencies.some((currency) => currency.startsWith(targetCurrency.toUpperCase())),
  );
}

export function getBanksCurrencies(banksData: typeof BANKS_DATA) {
  const currenciesArr = banksData.map(({ currencies }) => currencies).flat();

  return [...new Set(currenciesArr)];
}

export function getMarkersOfBanks(banks = BANKS_DATA) {
  return banks.map(({ name, coords, currencies }) => ({
    desc: `${name} ${currencies}`,
    coords,
  }));
}
