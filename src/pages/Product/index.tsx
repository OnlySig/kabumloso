import { useParams } from "react-router-dom";
import useUmProduto from "../../hooks/useUmProduto";
import Aside from "../../components/Aside";
import QtdCard from "../../components/QtdCard";
import Spinner from "../../components/Spinner";

const Product = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useUmProduto(slug ?? "smartphone-xyz");
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="p-5">
      <h2>{data?.nome}</h2>
      <img src={data?.imagem} alt={`imagem do produto ${data?.nome}`} />
      <p>{data?.descricao}</p>
      <QtdCard preco={data?.preco} />
      <Aside />
    </section>
  );
};

export default Product;
