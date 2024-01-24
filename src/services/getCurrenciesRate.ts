import axios from 'axios';
import { CURRENCY_API_BASE, CURRENCY_API_KEY } from '@/constants';
import { CurrenciesResponseType } from '@/types';

const DEFAULT_BASE = 'USD';

export async function getCurrenciesRate(currencies: string | string[], base?: string) {
  const { data } = await axios.get<CurrenciesResponseType>(`${CURRENCY_API_BASE}/latest`, {
    params: {
      base_currency: base ?? DEFAULT_BASE,
      currencies: currencies.toString(),
      apikey: CURRENCY_API_KEY,
    },
  });

  return data;
}
