export const ConvertedCurrent = (current: number) => {
  if (typeof current === "number")
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(current);
  throw new Error("Tipo inválido, converta para number");
};
