import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProdutos } from "../types/IProdutos";
import { http } from "../http";

export const useUpdateCarrinhoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      value,
      findProduto,
    }: {
      value: IProdutos;
      findProduto: IProdutos;
    }) => {
      if (findProduto)
        return await http.put(`carrinho/${value.id}`, {
          ...value,
          quantidade: findProduto.quantidade + 1,
        });
      else return await http.post("carrinho", { ...value, quantidade: 1 });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["carrinho"]);
    },
  });
};
