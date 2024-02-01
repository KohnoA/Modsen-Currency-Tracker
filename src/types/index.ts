import { FC, SVGProps } from 'react';

export type CurrenciesItemType = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  rate: number;
  code: string;
};

export type CurrenciesResponseType = {
  meta: {
    last_updated_at: string;
  };
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
};

export type OhlcvResponseType = {
  time_close: string;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
};

export type CandleStickData = {
  data: number[][];
};

export type BankDataType = {
  name: string;
  coord: [number, number];
  currencies: string[];
};
