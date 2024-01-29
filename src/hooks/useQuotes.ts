import { useEffect, useState } from 'react';

import { DEFAULT_CURRENCIES } from '@/constants';
import { CurrenciesItemType } from '@/types';
import { getCurrenciesRateCached, getTimeFromDate, mergeQuotes } from '@/utils';

const DEFAULT_CURRENCIES_CODES = DEFAULT_CURRENCIES.map(({ code }) => code);

export function useQuotes() {
  const [time, setTime] = useState<string>();
  const [quotes, setQuotes] = useState<CurrenciesItemType[]>(DEFAULT_CURRENCIES);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await getCurrenciesRateCached(DEFAULT_CURRENCIES_CODES);

        setTime(getTimeFromDate(response.meta.last_updated_at));
        setQuotes(mergeQuotes(DEFAULT_CURRENCIES, response));
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      }
    };

    getQuotes();
  }, []);

  return { time, quotes, error };
}
