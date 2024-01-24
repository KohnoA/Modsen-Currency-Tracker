import { CurrenciesResponseType } from '@/types';

export const currenciesResponseMock: CurrenciesResponseType = {
  meta: { last_updated_at: '2024-01-16T23:59:59Z' },
  data: {
    ARS: { code: 'ARS', value: 817.9719228383 },
    AUD: { code: 'AUD', value: 1.5172901886 },
    BTC: { code: 'BTC', value: 0.0000231075 },
    CAD: { code: 'CAD', value: 1.3487102064 },
    CNY: { code: 'CNY', value: 7.1884310564 },
    EUR: { code: 'EUR', value: 0.919150171 },
    JPY: { code: 'JPY', value: 147.216900009 },
    USD: { code: 'USD', value: 1 },
  },
};
