import { useQuery } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";

const getProtudos = async (): Promise<IProdutos[]> => {
  const { data } = await http.get("produtos?_page=1&_per_page=10"); //? primeiros 10 produtos
  return data.data;
};

const useProdutos = () => {
  const { data, isLoading, error } = useQuery<IProdutos[], Error>({
    queryKey: ["produtos"],
    queryFn: () => getProtudos(),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export default useProdutos;
