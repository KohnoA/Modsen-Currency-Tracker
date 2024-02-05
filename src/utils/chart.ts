import { getRandomIntInclusive } from './numbers';

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

export function addOrTrimTableData(tableData: number[][], amount: number) {
  const INITIAL_VALUE = 0;

  return tableData.length > amount
    ? tableData.filter((_, index) => index + 1 <= amount)
    : [
        ...tableData,
        ...new Array(amount - tableData.length)
          .fill(amount)
          .map(() => [INITIAL_VALUE, INITIAL_VALUE, INITIAL_VALUE, INITIAL_VALUE]),
      ];
}

export function addTimestamps(data: number[][], startDate?: string) {
  const DEFAULT_DATE = '2020-01-01';
  const date = new Date(startDate ?? DEFAULT_DATE);

  return data.map((item, index) => {
    item.unshift(date.setDate(index + 1));

    return item;
  });
}
