import { useMutation, useQueryClient } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";

const useProdutosMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      action,
      value,
    }: {
      id: string;
      action: string;
      value?: IProdutos;
    }) => {
      console.log(id);
      if (action === "delete") {
        console.log("oie");
        return http.delete(`produtos/${id}`);
      }
      if (action === "new") {
        return http.post(`produtos/${id}`, { ...value });
      }
      if (action === "edit") {
        return http.put(`produtos/${id}`, { ...value });
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos"] });
    },
  });
};

export default useProdutosMutation;
