import { useEffect, useState } from 'react';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import { CurrenciesItemType } from '@/types';
import { getCurrenciesRateCached, getTimeFromDate, mergeQuotes } from '@/utils';

const DEFAULT_QUOTES_CODES = DEFAULT_QUOTES.map(({ code }) => code);

export function useQuotes() {
  const [time, setTime] = useState<string>();
  const [quotes, setQuotes] = useState<CurrenciesItemType[]>(DEFAULT_QUOTES);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await getCurrenciesRateCached(DEFAULT_QUOTES_CODES);

        setTime(getTimeFromDate(response.meta.last_updated_at));
        setQuotes(mergeQuotes(DEFAULT_QUOTES, response));
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
