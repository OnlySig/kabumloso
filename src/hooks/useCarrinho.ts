import { useQuery } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";
import { ConvertedCurrent } from "../utils/ConvertedCurrent";

const getCarrinho = async () => {
  const { data } = await http.get("carrinho");
  return data;
};
export const useCarrinho = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carrinho"],
    queryFn: getCarrinho,
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useCarrinhoPreco = () => {
  const { data } = useCarrinho();
  const preco = data
    ?.map((carrinho: IProdutos) => carrinho.preco * carrinho.quantidade)
    ?.reduce((acc: number, currentValue: number) => {
      return acc + currentValue;
    }, 0);
  return ConvertedCurrent(preco?.toFixed(1));
};
