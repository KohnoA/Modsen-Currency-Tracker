export function getTimeFromDate(date: string | Date) {
  return new Date(date).toLocaleTimeString('en-EN', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
}
