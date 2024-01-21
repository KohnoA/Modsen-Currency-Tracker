import { BANKS_DATA } from '@/db/banksData';

export function filterBanksByCurrencies(target: string, banks = BANKS_DATA) {
  return banks.filter(({ currencies }) => {
    return currencies.some((currency) => currency.startsWith(target.toUpperCase()));
  });
}
