import Card from "../../components/Card";
import useProdutos from "../../hooks/useProdutos";

const Home = () => {
  const { data: produtos, isLoading } = useProdutos();
  return isLoading ? (
    "carregando..."
  ) : (
    <section className="bg-slate-500 p-10 mt-5">
      <h2 className="text-2xl mb-2">Produtos em destaque!</h2>
      <ul className="bg-[#242424] rounded-lg p-2 flex flex-wrap gap-2 ">
        {produtos?.map((produto, index) => (
          <Card {...produto} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
