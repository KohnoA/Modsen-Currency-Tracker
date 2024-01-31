import axios from 'axios';

import { COIN_API_BASE, COIN_API_KEY } from '@/constants';
import { OhlcvResponseType } from '@/types';

const OHLCV_PERIOD = '1DAY';
const DATA_LIMIT = '60';

export async function getOhlcv(pair: string, timeStart: string) {
  const endpoint = `${COIN_API_BASE}/BINANCE_SPOT_${pair.replace('/', '_')}/history`;

  const { data } = await axios.get<OhlcvResponseType[]>(endpoint, {
    params: {
      period_id: OHLCV_PERIOD,
      time_start: new Date(timeStart).toISOString(),
      limit: DATA_LIMIT,
      apiKey: COIN_API_KEY,
    },
  });

  return data;
}
