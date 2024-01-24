import { DEFAULT_OHLC_PAIRS } from '@/db/defaultOhlcPairs';
import { getDateTwoMonthsAgo } from '@/utils';

export const PAIR_OPTIONS = DEFAULT_OHLC_PAIRS.map((pair) => ({ value: pair, label: pair }));
export const DEFAULT_PAIR = DEFAULT_OHLC_PAIRS[0];
export const DEFAULT_DATE = '';
export const MIN_DATE = '2018-01-01';
export const MAX_DATE = getDateTwoMonthsAgo();
