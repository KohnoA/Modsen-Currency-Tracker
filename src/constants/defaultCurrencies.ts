import { ICONS } from './icons';

const {
  AustralianDollarIcon,
  BitcoinIcon,
  CanadianDollarIcon,
  DollarIcon,
  EuroIcon,
  PesoIcon,
  YenIcon,
  YuanIcon,
} = ICONS;

export const DEFAULT_CURRENCIES = [
  {
    Icon: DollarIcon,
    name: 'Commercial Dollar',
    code: 'USD',
    rate: 1,
  },
  {
    Icon: PesoIcon,
    name: 'Argentine Peso',
    code: 'ARS',
    rate: 1,
  },
  {
    Icon: CanadianDollarIcon,
    name: 'Canadian Dollar',
    code: 'CAD',
    rate: 1,
  },
  {
    Icon: YenIcon,
    name: 'Yen',
    code: 'JPY',
    rate: 1,
  },
  {
    Icon: YuanIcon,
    name: 'Yuan',
    code: 'CNY',
    rate: 1,
  },
  {
    Icon: AustralianDollarIcon,
    name: 'Australlian Dollar',
    code: 'AUD',
    rate: 1,
  },
  {
    Icon: EuroIcon,
    name: 'Euro',
    code: 'EUR',
    rate: 1,
  },
  {
    Icon: BitcoinIcon,
    name: 'Bitcoin',
    code: 'BTC',
    rate: 1,
  },
];
