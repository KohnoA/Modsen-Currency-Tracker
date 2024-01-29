import { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';

import { CandleStickData } from '@/types';

import { options } from './CandleStick.options';

import styles from './CandleStick.module.scss';

type CandleStickProps = {
  data: CandleStickData;
};

export default class CandleStick extends PureComponent<CandleStickProps> {
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
