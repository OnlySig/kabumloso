import { createContext, ReactNode, useState } from "react";
import { ICarrinhoContext } from "../types/ICarrinhoContext";
import { IProdutos } from "../types/IProdutos";
import { http } from "../http";
import { useUpdateCarrinhoMutation } from "../hooks/useUpdateCarrinhoMutation";

type typeCarrinhoContext = {
  initialState: ICarrinhoContext;
  carrinhoAside: boolean;
  updateToggleAside: (value: boolean) => void;
  updateFieldCarrinho: (
    value: IProdutos,
    option?: string,
    onlyDelite?: boolean
  ) => void;
  setCarrinho: React.Dispatch<React.SetStateAction<IProdutos[]>>;
  carrinho: IProdutos[];
};

const initialState = {
  carrinho: [] as IProdutos[],
  toggleCarrinhoAside: false,
};

const CarrinhoContext = createContext<typeCarrinhoContext>({
  initialState,
  carrinhoAside: initialState.toggleCarrinhoAside,
  updateToggleAside: () => null,
  updateFieldCarrinho: () => null,
  setCarrinho: () => null,
  carrinho: [] as IProdutos[],
});

export const CarrinhoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [carrinhoAside, setCarrinhoAside] = useState(
    initialState.toggleCarrinhoAside
  );
  const [carrinho, setCarrinho] = useState(initialState.carrinho);
  const updateToggleAside = (value: boolean) => {
    setCarrinhoAside(value);
  };
  const { mutate: updateCarrinho } = useUpdateCarrinhoMutation();

  const updateFieldCarrinho = async (
    value: IProdutos,
    option?: string,
    onlyDelete?: boolean
  ) => {
    try {
      const { data: carrinhoApiData } = await http.get("carrinho");
      const findProduto = carrinhoApiData.find(
        (produto: IProdutos) => produto.id === value.id
      );
      updateCarrinho({ value, findProduto, option, onlyDelete });
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const context = {
    initialState,
    carrinhoAside,
    updateToggleAside,
    setCarrinho,
    carrinho,
    updateFieldCarrinho,
  };
  return (
    <CarrinhoContext.Provider value={context}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;
