import { useQuery } from "@tanstack/react-query";
import { http } from "../http";

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
