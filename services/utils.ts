export const generateTransactionId = (prefix: string = '10000'): string => {
  const randomPart = Math.floor(Math.random() * 1000000000000000).toString().padStart(15, '0');
  return `${prefix}${randomPart}`;
};

export const formatMoney = (amount: string): string => {
  const num = parseFloat(amount);
  if (isNaN(num)) return '0.00';
  return num.toFixed(2);
};

export const getCurrentTime = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatDateTime = (dateStr?: string): string => {
  const date = dateStr ? new Date(dateStr) : new Date();
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const h = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const s = date.getSeconds().toString().padStart(2, '0');
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
};