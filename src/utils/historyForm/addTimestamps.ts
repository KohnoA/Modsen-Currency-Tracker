export function addTimestamps(data: number[][], startDate?: string) {
  const DEFAULT_DATE = '2020-01-01';
  const date = new Date(startDate ?? DEFAULT_DATE);

  return data.map((item, index) => {
    item.unshift(date.setDate(index + 1));

    return item;
  });
}
