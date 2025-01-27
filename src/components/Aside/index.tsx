import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { IoMdCloseCircle } from "react-icons/io";
import Card from "../Card";
import { useCarrinho, useCarrinhoPreco } from "../../hooks/useCarrinho";
import { IProdutos } from "../../types/IProdutos";

const Aside = () => {
  const { carrinhoAside, updateToggleAside } = useCarrinhoContext();
  const { data: carrinho, isLoading } = useCarrinho();
  const totalCarrinho = useCarrinhoPreco();
  return isLoading ? (
    "...carregando"
  ) : (
    <aside
      className={`flex flex-col justify-between fixed right-0 top-0 bottom-0 z-10 backdrop-blur-md shadow-2xl h-full w-96 overflow-auto ease-in duration-300 p-2 ${
        !carrinhoAside && "translate-x-full"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold opacity-90 uppercase text-[#c9c7db]">
            Carrinho
          </h2>
          <button onClick={() => updateToggleAside(false)}>
            <IoMdCloseCircle style={{ fontSize: 30, color: "#c9c7db" }} />
          </button>
        </div>
        <ul>
          {carrinho.map((produto: IProdutos) => (
            <Card {...produto} key={produto.id} inCard />
          ))}
        </ul>
      </div>
      <div className="bg-accentcolor500">
        <h3 className="text-primarycolor400 font-bold px-2 py-4 flex justify-between">
          <span>TOTAL:</span>
          {totalCarrinho}
        </h3>
      </div>
    </aside>
  );
};

export default Aside;
