export function getDateMonthAgo() {
  const date = new Date();

  date.setMonth(date.getMonth() - 1);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
