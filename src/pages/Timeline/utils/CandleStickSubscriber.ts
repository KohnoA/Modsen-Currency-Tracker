import { Subscriber } from './observer';
import { DEFAULT_CHART_DATA } from '@/db/defaultChartData';
import { type CandleStickData } from '@/types';

export class CandleStickSubscriber implements Subscriber<CandleStickData> {
  current: CandleStickData;

  constructor() {
    this.current = DEFAULT_CHART_DATA;
  }

  update(data: CandleStickData) {
    this.current = data;
  }
}
