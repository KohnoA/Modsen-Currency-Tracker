import { CurrenciesItemType, CurrenciesResponseType } from '@/types';

export function mergeQuotes(quotes: CurrenciesItemType[], rateData: CurrenciesResponseType) {
  return quotes.map((quote) => {
    const rate = rateData.data[quote.code].value;

    return { ...quote, rate };
  });
}
