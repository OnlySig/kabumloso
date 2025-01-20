import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProdutos } from "../types/IProdutos";
import { http } from "../http";

export const useUpdateCarrinhoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      value,
      findProduto,
      option,
      onlyDelete,
    }: {
      value: IProdutos;
      findProduto: IProdutos;
      option?: string;
      onlyDelete?: boolean;
    }) => {
      if (onlyDelete && value) return http.delete(`carrinho/${value.id}`);
      const opcao = option;
      if (findProduto && opcao) {
        const novaQuantidade =
          opcao === "+"
            ? findProduto.quantidade + 1
            : findProduto.quantidade - 1;
        if (novaQuantidade <= 0) {
          return http.delete(`carrinho/${value.id}`);
        }
        //* atualiza se o elemento/novaQuantidade for maior q zero.
        return http.put(`carrinho/${value.id}`, {
          ...value,
          quantidade: novaQuantidade,
        });
      }
      //* se não tem opção, quer dizer q o cliente está clicando no botão de adicionar ao carrinho, ele adiciona um elemento novo ao carrinho POST ou incrementa a qtd PUT.
      if (findProduto)
        return http.put(`carrinho/${value.id}`, {
          ...value,
          quantidade: findProduto.quantidade + 1,
        });
      else return http.post("carrinho", { ...value, quantidade: 1 });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carrinho"] }); //* atualiza o carrinho a cada interação bem sucedida.
    },
  });
};
