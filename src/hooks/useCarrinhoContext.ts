import { useContext } from "react";
import CarrinhoContext from "../contexts/CarrinhoContext";

const useCarrinhoContext = () => useContext(CarrinhoContext);

export default useCarrinhoContext;
