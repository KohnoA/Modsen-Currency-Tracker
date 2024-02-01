import { ApexOptions } from 'apexcharts';

export const options: ApexOptions = {
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
};
