import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";

export const useGetProdutos = (id?: string) => {
  return useQuery({
    queryKey: ["produtos", id],
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
      try {
        if (action === "delete") {
          const deletar = confirm(`deseja deletar o produto ${value?.nome}`);
          if (deletar) return http.delete(`produtos/${id}`);
        }
        if (action === "new") {
          http.post("produtos", { ...value });
          alert("Produto Criado!");
        }
        if (action === "edit") {
          http.put(`produtos/${id}`, { ...value });
          alert("Produto Editado!");
        }
      } catch (error) {
        if (action === "new") alert("Erro ao criar");
        if (action === "delete") alert("Erro ao deletar");
        if (action === "edit") alert("Erro ao editar");
        console.error((error as Error).message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos-paginados"] });
    },
  });
};

export default useProdutosMutation;
