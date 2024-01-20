import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { options } from './CandleStick.options';
import { DEFAULT_CHART_DATA } from '@/db/defaultChartData';
import styles from './CandleStick.module.scss';

export default class CandleStick extends Component {
  render() {
    return (
      <ReactApexChart
        className={styles.chart}
        options={options}
        series={DEFAULT_CHART_DATA}
        type="candlestick"
        height={600}
      />
    );
  }
}
