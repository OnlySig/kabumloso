import Aside from "../../components/Aside";
import Card from "../../components/Card";
import useProdutos from "../../hooks/useProdutos";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";

const Home = () => {
  const { data: produtos, isLoading } = useProdutos();
  const { theme } = useToggleThemeContext();
  console.log(theme);
  return isLoading ? (
    "carregando..."
  ) : (
    <>
      <section className="p-10 mt-5">
        <h2 className="text-2xl mb-2">Produtos em destaque!</h2>
        <ul className="rounded-lg p-2 flex flex-wrap gap-2 ">
          {produtos?.map((produto, index) => (
            <Card {...produto} key={index} />
          ))}
        </ul>
      </section>
      <Aside />
    </>
  );
};

export default Home;
