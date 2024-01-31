import { getCurrenciesRate } from '@/services';

export async function getCurrencyRateCached(currency: string, base: string) {
  const sessionStorageKey = `${currency}/${base}`;
  const cachedRate = sessionStorage.getItem(sessionStorageKey);

  if (cachedRate) {
    return JSON.parse(cachedRate);
  }

  const response = await getCurrenciesRate(currency, base);
  const rate = response.data[currency].value;

  sessionStorage.setItem(sessionStorageKey, JSON.stringify(rate));

  return rate;
}
