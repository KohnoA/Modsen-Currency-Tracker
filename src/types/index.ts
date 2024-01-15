import { FC, SVGProps } from 'react';

export type CurrenciesItemType = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  rate: string | number;
};

export type CurrenciesListType = {
  title: string;
  data: {
    Icon: FC<SVGProps<SVGSVGElement>>;
    name: string;
    rate: string | number;
  }[];
};
