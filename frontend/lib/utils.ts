export const formatDateString = (dateString: string) =>
  new Date(dateString).toLocaleDateString('pl-PL', { day: '2-digit', month: 'long', year: 'numeric' });

export const formatNumber = (number: number) => number.toLocaleString('pl-PL');
