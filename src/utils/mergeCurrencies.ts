import { CurrenciesItemType, CurrenciesResponseType } from '@/types';

export function mergeCurrencies(
  currencies: CurrenciesItemType[],
  rateData: CurrenciesResponseType,
) {
  return currencies.map((currency) => {
    const rate = rateData.data[currency.code].value;

    return { ...currency, rate };
  });
}
