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
