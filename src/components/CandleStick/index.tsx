import { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';

import { CandleStickData } from '@/types';

import { options } from './options';

import styles from './styles.module.scss';

type CandleStickProps = {
  data: CandleStickData;
};

export class CandleStick extends PureComponent<CandleStickProps> {
  render() {
    const { data } = this.props;

    return (
      <ReactApexChart
        data-testid="candle-stick"
        className={`chart ${styles.chart}`}
        options={options}
        series={data}
        type="candlestick"
      />
    );
  }
}
