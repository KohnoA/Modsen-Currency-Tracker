export function getTimeFromDate(date: string | number | Date) {
  return new Date(date).toLocaleTimeString('en-EN', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
}
