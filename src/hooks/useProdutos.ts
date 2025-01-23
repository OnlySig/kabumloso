import { useQuery } from "@tanstack/react-query";
import { http } from "../http";
import { IProdutos } from "../types/IProdutos";

const getProdutosPaginados = async (): Promise<IProdutos[]> => {
  const { data } = await http.get("produtos?_page=1&_per_page=12"); //? primeiros 10 produtos
  return data.data;
};

const getProdutos = async (
  isFiltered?: boolean,
  filter?: string
): Promise<IProdutos[]> => {
  const { data } = await http.get(isFiltered ? filter! : "produtos");
  return data;
};

const useProdutos = (isFiltrado?: boolean, filtro?: string | undefined) => {
  const { data, isLoading, error } = useQuery<IProdutos[], Error>({
    queryKey: ["produtos-paginados", filtro],
    queryFn: () =>
      isFiltrado ? getProdutos(isFiltrado, filtro) : getProdutosPaginados(),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useProdutosCategorias = () => {
  const onlyNewTags: string[] = [];
  const { data } = useQuery({
    queryKey: ["produtos-categoria"],
    queryFn: () => getProdutos(),
  });
  const categoriasRepetidas = data?.map((produto) => produto.categoria);
  categoriasRepetidas?.forEach((categoria: string) => {
    if (!onlyNewTags.includes(categoria)) onlyNewTags.push(categoria);
  });
  return onlyNewTags;
};

export const useProdutosRandom = () => {
  //! código totalmente criminoso, desculpe pela vista, mas foi oque deu pra fazer sem chatGPT KKKKKKKKKKKKKK :(
  const produtosAleatorios: IProdutos[] = [];
  const numerosAleatorios: number[] = [];
  for (let i = 0; i <= 4; i++) {
    const numero = Math.floor(Math.random() * 21);
    if (!numerosAleatorios.includes(numero)) {
      numerosAleatorios.push(numero);
    } else {
      i--;
    }
  }
  const { data } = useProdutos(true, "produtos");
  if (data && data?.length > 0) {
    numerosAleatorios?.forEach((numero) => {
      produtosAleatorios.push(
        data.find((_, index) => {
          return index === numero;
        })!
      );
    });
  }
  return produtosAleatorios;
};

export default useProdutos;
