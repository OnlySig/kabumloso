import Aside from "../../components/Aside";
import Card from "../../components/Card";
import TitleIcon from "../../components/TitleWithIcon";
import useProdutos from "../../hooks/useProdutos";
import { IoMdStar } from "react-icons/io";

const iconProps = {
  fontSize: "30px",
  color: "#252043",
};

const Home = () => {
  const { data: produtos, isLoading } = useProdutos();
  return isLoading ? (
    "carregando..."
  ) : (
    <>
      <section className="p-10 mt-5">
        <TitleIcon title="Produtos recomendados">
          <IoMdStar style={iconProps} />
        </TitleIcon>
        <ul className="rounded-lg p-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 justify-items-center">
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
