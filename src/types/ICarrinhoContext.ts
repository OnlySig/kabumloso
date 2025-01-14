import { IProdutos } from "./IProdutos";

export type ICarrinhoContext = {
  carrinho: IProdutos[];
  toggleCarrinhoAside: boolean;
};
