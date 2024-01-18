export function getDiffHours(date1: Date, date2: Date) {
  const diffInMs = Math.abs(date1.getTime() - date2.getTime());
  const diffInHours = diffInMs / (1000 * 60 * 60);

  return Number(diffInHours.toFixed());
}
