const CurrencyMoney = (money: number) => {
  return `$${money.toLocaleString("es-AR", { minimumFractionDigits: 0 })}`;
};

export { CurrencyMoney };
