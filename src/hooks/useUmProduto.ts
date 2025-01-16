import { http } from "../http";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IProdutos } from "../types/IProdutos";

const fetchUmProduto = async (slug: string) => {
  const { data, status } = await http.get<IProdutos[]>(`produtos?slug=${slug}`);
  if (status !== 200) {
    throw new Error("status code diferente de 200!");
  }
  return data[0];
};

const useUmProduto = (slug: string): UseQueryResult<IProdutos, Error> => {
  return useQuery<IProdutos, Error>({
    queryKey: ["produto", slug],
    queryFn: () => fetchUmProduto(slug),
    enabled: !!slug,
  });
};

export default useUmProduto;
