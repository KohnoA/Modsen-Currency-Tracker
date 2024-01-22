import { OhlcvResponseType } from '@/types';

export function ohlcvResponseToChartData(data: OhlcvResponseType[]) {
  return data.map(({ time_close, ...price }) => ({
    x: new Date(time_close),
    y: [price.price_open, price.price_high, price.price_low, price.price_close],
  }));
}
