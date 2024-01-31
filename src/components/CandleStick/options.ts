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
