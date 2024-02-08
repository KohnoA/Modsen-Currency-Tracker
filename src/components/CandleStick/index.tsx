import { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';

import { CANDLESTICK_OPTIONS } from '@/constants';
import { CandleStickData } from '@/types';

import styles from './styles.module.scss';

type CandleStickProps = CandleStickData;

export class CandleStick extends PureComponent<CandleStickProps> {
  render() {
    const { data } = this.props;
    const series = new Array({ data });

    return (
      <ReactApexChart
        data-testid="candle-stick"
        className={`chart ${styles.chart}`}
        options={CANDLESTICK_OPTIONS}
        series={series}
        type="candlestick"
      />
    );
  }
}
