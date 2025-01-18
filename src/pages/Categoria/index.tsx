import { useParams } from "react-router-dom";
import useProdutos from "../../hooks/useProdutos";
import Aside from "../../components/Aside";
import Card from "../../components/Card";

const Categoria = () => {
  const { categoria } = useParams();
  const { data } = useProdutos(true, `produtos?categoria=${categoria}`);
  console.log(data);
  return (
    <section className="px-10 py-4 2xl:px-0">
      <div className="flex items-center text-primarycolor500 font-bold">
        <h2>Kabumloso</h2>
        <span className="text-2xl mr-2 ml-2">&gt;</span>
        <h2>{categoria}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center mt-4">
        {data?.map((produto) => (
          <Card {...produto} />
        ))}
        <Aside />
      </div>
    </section>
  );
};

export default Categoria;
