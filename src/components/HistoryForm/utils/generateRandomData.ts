import { getRandomIntInclusive } from '@/utils';

export function generateRandomData(rows: number): number[][] {
  const DEFAULT_MIN_VALUE = 1;
  const DEFAULT_MAX_VALUE = 1000;
  const MAX_POSSIBLE_DEVIATION = 20;
  let lastClose: number;

  return new Array(rows).fill(rows).map(() => {
    const open = lastClose ?? getRandomIntInclusive(DEFAULT_MIN_VALUE, DEFAULT_MAX_VALUE);
    const high = getRandomIntInclusive(
      open,
      Math.min(open + MAX_POSSIBLE_DEVIATION, DEFAULT_MAX_VALUE),
    );
    const close = getRandomIntInclusive(
      Math.max(open - MAX_POSSIBLE_DEVIATION, DEFAULT_MIN_VALUE),
      Math.min(open + MAX_POSSIBLE_DEVIATION, DEFAULT_MAX_VALUE),
    );
    const low = getRandomIntInclusive(
      Math.max(close - MAX_POSSIBLE_DEVIATION, DEFAULT_MIN_VALUE),
      close,
    );

    lastClose = close;

    return [open, high, low, close];
  });
}
