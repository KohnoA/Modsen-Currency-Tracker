export function truncateNumber(num: number) {
  if (num < 0.000001) {
    const countNulls = Number(num.toString().split('e-')[1]);

    return num.toFixed(countNulls + 1);
  }

  if (num < 0.01) {
    const firstNonNullValue = num
      .toString()
      .replace(/[.]/, '')
      .split('')
      .findIndex((item) => +item > 0);

    return num.toString().slice(0, firstNonNullValue + 3);
  }

  return num.toFixed(2);
}
