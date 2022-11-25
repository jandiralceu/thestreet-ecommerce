export const toMoney = (amount: number) => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
