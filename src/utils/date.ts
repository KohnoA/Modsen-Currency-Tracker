export function getDiffHours(date1: Date, date2: Date) {
  const NumberOfMillisecondsInSecond = 1000;
  const NumberOfSecondsInMinute = 60;
  const NumberOfMinutesInHour = 60;

  const diffInMs = Math.abs(date1.getTime() - date2.getTime());
  const diffInHours =
    diffInMs / (NumberOfMillisecondsInSecond * NumberOfSecondsInMinute * NumberOfMinutesInHour);

  return Number(diffInHours.toFixed());
}

export function getTimeFromDate(date: string | number | Date) {
  return new Date(date).toLocaleTimeString('en-EN', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
}
