import { Link } from "react-router-dom";
import ListItem from "../../../components/ListItem";
import useProdutos from "../../../hooks/useProdutos";

const Dashboard = () => {
  const { data } = useProdutos(true, "produtos");
  return (
    <>
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center">
        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-between my-3 max-sm:flex-col">
            <div className="flex gap-3 items-baseline">
              <h2 className="text-[#69a4fd] text-center font-bold">
                Lista de Produtos
              </h2>
              <Link className="text-[#69a4fd]" to={"/"}>
                Home
              </Link>
            </div>
            <Link
              to={"/admin/upsert"}
              className="bg-[#69a4fd] text-white flex items-center rounded-xl px-2"
            >
              Adicionar Produto
            </Link>
          </div>
          <div className="flex justify-start">
            <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">Nome</p>
            <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">
              Categoria
            </p>
            <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">
              Quantidade
            </p>
            <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">Preço</p>
            <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">
              Actions
            </p>
          </div>
          <ul>
            {data?.map((produto) => (
              <ListItem
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
                quantidade={produto.quantidade}
                id={produto.id}
                key={produto.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
