import { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { options } from './CandleStick.options';
import { DEFAULT_CHART_DATA } from '@/db/defaultChartData';
import styles from './CandleStick.module.scss';

type CandleStickProps = {
  coords: typeof DEFAULT_CHART_DATA;
};

export default class CandleStick extends PureComponent<CandleStickProps> {
  render() {
    const { coords } = this.props;

    return (
      <ReactApexChart
        className={styles.chart}
        options={options}
        series={coords}
        type="candlestick"
      />
    );
  }
}
