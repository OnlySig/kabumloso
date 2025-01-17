export const ConvertedCurrent = (current: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(current);
};
