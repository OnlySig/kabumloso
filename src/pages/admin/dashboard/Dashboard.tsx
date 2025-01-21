import ListItem from "../../../components/ListItem";
import useProdutos from "../../../hooks/useProdutos";

const Dashboard = () => {
  const { data } = useProdutos(true, "produtos");
  return (
    <>
      <div className="max-w-[700px] mx-auto bg-white rounded-xl">
        <div className="flex justify-between my-3">
          <h2 className="text-[#69a4fd] text-center font-bold mb-3">
            Lista de Produtos
          </h2>
          <button className="bg-[#69a4fd] text-white rounded-xl px-2">
            Adicionar Produto
          </button>
        </div>
        <div className="flex justify-start">
          <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">Nome</p>
          <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">
            Quantidade
          </p>
          <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">Preço</p>
          <p className="font-bold w-1/4 border pl-2 text-[#4891ff]">Actions</p>
        </div>
        <ul>
          {data?.map((produto) => (
            <ListItem
              nome={produto.nome}
              preco={produto.preco}
              quantidade={produto.quantidade}
              id={produto.id}
              key={produto.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
