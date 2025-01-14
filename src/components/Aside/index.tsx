import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { IoMdCloseCircle } from "react-icons/io";
import Card from "../Card";
import { useCarrinho } from "../../hooks/useCarrinho";
import { IProdutos } from "../../types/IProdutos";

const Aside = () => {
  const { carrinhoAside, updateToggleAside } = useCarrinhoContext();
  const { data: carrinho, error, isLoading } = useCarrinho();
  return isLoading ? (
    "...carregando"
  ) : (
    <aside
      className={`fixed right-0 top-0 bottom-0 bg-black h-full w-96 overflow-auto ease-in duration-300 p-2 ${
        !carrinhoAside && "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2>Carrinho</h2>
        <button onClick={() => updateToggleAside(false)}>
          <IoMdCloseCircle style={{ fontSize: 30 }} />
        </button>
      </div>
      <div>
        {carrinho.map((produto: IProdutos) => (
          <Card {...produto} key={produto.id} inCard />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
