import { FC, SVGProps } from 'react';

export type CurrenciesItemType = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  rate: string | number;
  code: string;
};

export type CurrenciesListType = {
  title: string;
  data: CurrenciesItemType[];
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
