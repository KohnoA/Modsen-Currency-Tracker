import { useEffect, useState } from 'react';

import { DEFAULT_CURRENCIES } from '@/constants';
import { CurrenciesItemType } from '@/types';
import { getCurrenciesRateCached, getTimeFromDate, mergeCurrencies } from '@/utils';

const DEFAULT_CURRENCIES_CODES = DEFAULT_CURRENCIES.map(({ code }) => code);

export function useCurrencies() {
  const [time, setTime] = useState<string>();
  const [quotes, setQuotes] = useState<CurrenciesItemType[]>(DEFAULT_CURRENCIES);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await getCurrenciesRateCached(DEFAULT_CURRENCIES_CODES);

        setTime(getTimeFromDate(response.meta.last_updated_at));
        setQuotes(mergeCurrencies(DEFAULT_CURRENCIES, response));
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      }
    };

    getCurrencies();
  }, []);

  return { time, quotes, error };
}
