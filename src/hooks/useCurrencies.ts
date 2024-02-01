import { useEffect, useState } from 'react';

import { DEFAULT_CURRENCIES } from '@/constants';
import { CurrenciesItemType } from '@/types';
import { getCurrenciesRateCached, getTimeFromDate } from '@/utils';

const DEFAULT_CURRENCIES_CODES = DEFAULT_CURRENCIES.map(({ code }) => code);

export function useCurrencies() {
  const [time, setTime] = useState<string>();
  const [quotes, setCurrencies] = useState<CurrenciesItemType[]>(DEFAULT_CURRENCIES);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await getCurrenciesRateCached(DEFAULT_CURRENCIES_CODES);
        const currencies = DEFAULT_CURRENCIES.map((currency) => {
          const rate = response.data[currency.code].value;

          return { ...currency, rate };
        });

        setTime(getTimeFromDate(response.meta.last_updated_at));
        setCurrencies(currencies);
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
