import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";
import useProdutos from "./useProdutos";

export const useGetProdutos = (id: string) => {
  return useQuery({
    queryKey: ["produto", id],
    queryFn: () => {
      return http.get(`produtos?id=${id}`);
    },
    enabled: !!id,
  });
};

const useProdutosMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      action,
      value,
    }: {
      id?: string;
      action: "delete" | "new" | "edit";
      value: Partial<IProdutos>; //? Permite passar apenas os campos necessários
    }) => {
      if (action === "delete") {
        const deletar = confirm(`deseja deletar o produto ${value?.nome}`);
        if (deletar) return http.delete(`produtos/${id}`);
        return;
      }
      if (action === "new") {
        alert("Produto Criado!");
        return http.post("produtos", { ...value });
      }
      if (action === "edit") {
        alert("Produto Editado!");
        return http.put(`produtos/${id}`, { ...value });
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos-paginados"] });
    },
  });
};

export default useProdutosMutation;
