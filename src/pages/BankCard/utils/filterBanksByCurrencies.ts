import { BANKS_DATA } from '@/constants';

export function filterBanksByCurrencies(targetCurrency: string, banks = BANKS_DATA) {
  return banks.filter(({ currencies }) =>
    currencies.some((currency) => currency.startsWith(targetCurrency.toUpperCase())),
  );
}
