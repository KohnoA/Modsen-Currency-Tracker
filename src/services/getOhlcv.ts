import axios from 'axios';
import { COIN_API_BASE, COIN_API_KEY } from '@/constants';
import { OhlcvResponseType } from '@/types';

const OHLCV_PERIOD = '1DAY';
const DATA_LIMIT = '30';

export async function getOhlcv(base: string, target: string, timeStart: string) {
  const endpoint = `${COIN_API_BASE}/BITSTAMP_SPOT_${base}_${target}/history`;

  const { data } = await axios.get<OhlcvResponseType[]>(endpoint, {
    headers: {
      'X-CoinAPI-Key': COIN_API_KEY,
      Accept: 'application/json',
    },
    params: {
      period_id: OHLCV_PERIOD,
      time_start: new Date(timeStart).toISOString(),
      limit: DATA_LIMIT,
    },
  });

  return data;
}
