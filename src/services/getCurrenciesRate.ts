import axios from 'axios';
import { CURRENCY_API_BASE, CURRENCY_API_KEY } from '@/constants';
import { CurrenciesResponseType } from '@/types';

export async function getCurrenciesRate(currencies: string[]) {
  const { data } = await axios.get<CurrenciesResponseType>(`${CURRENCY_API_BASE}/latest`, {
    params: {
      currencies: currencies.toString(),
    },
    headers: {
      apiKey: CURRENCY_API_KEY,
    },
  });

  return data;
}
