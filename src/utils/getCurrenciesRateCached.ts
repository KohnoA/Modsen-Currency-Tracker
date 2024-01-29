import { getCurrenciesRate } from '@/services';
import { CurrenciesResponseType } from '@/types';

import { areArraysEqual } from './areArraysEqual';
import { getDiffHours } from './getDiffHours';

const LOCAL_STORAGE_CURRENCIES_RATE_KEY = 'currencies-rate';
const CACHE_TIME_IN_HOURS = 12;

export async function getCurrenciesRateCached(currencies: string[]) {
  const getAndSaveCurrenciesRate = async () => {
    const newData = await getCurrenciesRate(currencies);

    localStorage.setItem(LOCAL_STORAGE_CURRENCIES_RATE_KEY, JSON.stringify(newData));

    return newData;
  };

  if (localStorage.getItem(LOCAL_STORAGE_CURRENCIES_RATE_KEY)) {
    const cacheData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CURRENCIES_RATE_KEY)!,
    ) as CurrenciesResponseType;

    const dateNow = new Date(Date.now());
    const dateCache = new Date(cacheData.meta.last_updated_at);
    const isValidDate = getDiffHours(dateCache, dateNow) > CACHE_TIME_IN_HOURS;
    const isOldCurrencies = areArraysEqual(Object.keys(cacheData.data), currencies);

    if (!isValidDate) {
      localStorage.removeItem(LOCAL_STORAGE_CURRENCIES_RATE_KEY);
    }

    return isValidDate && isOldCurrencies ? cacheData : getAndSaveCurrenciesRate();
  }

  return getAndSaveCurrenciesRate();
}
