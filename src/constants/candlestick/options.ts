import { ApexOptions } from 'apexcharts';

export const CANDLESTICK_OPTIONS: ApexOptions = {
  chart: {
    toolbar: {
      show: true,
      tools: {
        pan: false,
        download: false,
      },
    },
  },
  noData: {
    text: 'No data yet',
    style: {
      fontSize: '24px',
      fontFamily: 'Poppins',
    },
  },
  tooltip: {
    theme: 'dark',
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 425,
      options: {
        yaxis: {
          show: false,
        },
      },
    },
  ],
};
