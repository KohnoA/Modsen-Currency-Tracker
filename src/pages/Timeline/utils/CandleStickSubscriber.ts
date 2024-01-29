import { DEFAULT_CHART_DATA } from '@/constants';
import { type CandleStickData } from '@/types';

import { Subscriber } from './observer';

export class CandleStickSubscriber implements Subscriber<CandleStickData> {
  current: CandleStickData;

  constructor() {
    this.current = DEFAULT_CHART_DATA;
  }

  update(data: CandleStickData) {
    this.current = data;
  }
}
