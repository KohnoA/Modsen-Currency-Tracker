import { getCurrenciesRate } from '@/services';

export async function getCurrencyRateCached(currency: string, base: string) {
  const sessionStorageKey = `${currency}/${base}`;

  if (sessionStorage.getItem(sessionStorageKey)) {
    const cacheRate = JSON.parse(sessionStorage.getItem(sessionStorageKey)!);

    return cacheRate;
  }

  const response = await getCurrenciesRate(currency, base);
  const rate = response.data[currency].value;

  sessionStorage.setItem(sessionStorageKey, JSON.stringify(rate));

  return rate;
}
