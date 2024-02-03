export function getDiffHours(date1: Date, date2: Date) {
  const NumberOfMillisecondsInSecond = 1000;
  const NumberOfSecondsInMinute = 60;
  const NumberOfMinutesInHour = 60;

  const diffInMs = Math.abs(date1.getTime() - date2.getTime());
  const diffInHours =
    diffInMs / (NumberOfMillisecondsInSecond * NumberOfSecondsInMinute * NumberOfMinutesInHour);

  return Number(diffInHours.toFixed());
}
