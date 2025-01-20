import { useParams } from "react-router-dom";
import useUmProduto from "../../hooks/useUmProduto";
import Aside from "../../components/Aside";
import QtdCard from "../../components/QtdCard";
import Spinner from "../../components/Spinner";
import TitleIcon from "../../components/TitleWithIcon";
import { TbTargetArrow } from "react-icons/tb";
import { useProdutosRandom } from "../../hooks/useProdutos";
import Card from "../../components/Card";

const iconProps = {
  fontSize: "30px",
  color: "#252043",
};

const Product = () => {
  const { slug } = useParams();
  const { data, isLoading } = useUmProduto(slug ?? "smartphone-xyz");
  const produtosAleatorios = useProdutosRandom();
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="p-5">
      <h2>{data?.nome}</h2>
      <img src={data?.imagem} alt={`imagem do produto ${data?.nome}`} />
      <p>{data?.descricao}</p>
      <QtdCard preco={data?.preco} />
      <div>
        <TitleIcon title="Outras opções">
          <TbTargetArrow style={iconProps} />
        </TitleIcon>
        <div className="flex justify-between gap-3">
          {produtosAleatorios.map((produto, index) => (
            <Card {...produto} key={index} />
          ))}
        </div>
      </div>
      <Aside />
    </div>
  );
};

export default Product;
