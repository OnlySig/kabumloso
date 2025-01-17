import Aside from "../../components/Aside";
import BannerHeader from "../../components/BannerHeader";
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
      <BannerHeader />
      <section className="p-10 2xl:px-0">
        <TitleIcon title="Produtos recomendados">
          <IoMdStar style={iconProps} />
        </TitleIcon>
        <ul className="rounded-lg grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center mt-4">
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
