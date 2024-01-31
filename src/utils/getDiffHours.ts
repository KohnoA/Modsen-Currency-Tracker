export function getDiffHours(date1: Date, date2: Date) {
  const NumberOfMsecInSec = 1000;
  const NumberOfSecInMin = 60;
  const NumberOfMinInHour = 60;

  const diffInMs = Math.abs(date1.getTime() - date2.getTime());
  const diffInHours = diffInMs / (NumberOfMsecInSec * NumberOfSecInMin * NumberOfMinInHour);

  return Number(diffInHours.toFixed());
}
