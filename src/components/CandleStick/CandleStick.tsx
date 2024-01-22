import { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { options } from './CandleStick.options';
import styles from './CandleStick.module.scss';
import { CandleStickData } from '@/types';

type CandleStickProps = {
  data: CandleStickData;
};

export default class CandleStick extends PureComponent<CandleStickProps> {
  render() {
    const { data } = this.props;

    return (
      <ReactApexChart className={styles.chart} options={options} series={data} type="candlestick" />
    );
  }
}
