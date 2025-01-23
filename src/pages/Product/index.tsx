import { useParams } from "react-router-dom";
import useUmProduto from "../../hooks/useUmProduto";
import Aside from "../../components/Aside";
import QtdCard from "../../components/QtdCard";
import Spinner from "../../components/Spinner";
import TitleIcon from "../../components/TitleWithIcon";
import { TbTargetArrow } from "react-icons/tb";
import { MdDescription } from "react-icons/md";
import { useProdutosRandom } from "../../hooks/useProdutos";
import Card from "../../components/Card";
import BtnCard from "../../components/BtnCard";
import { ConvertedCurrent } from "../../utils/ConvertedCurrent";

const iconProps = {
  fontSize: "30px",
  color: "#252043",
};

const Product = () => {
  const { slug } = useParams();
  const { data, isLoading } = useUmProduto(slug ?? "smartphone-xyz");
  const produtosAleatorios = useProdutosRandom();
  if (!data) return "deu ruim";
  const precoTotal = ConvertedCurrent(data.preco);
  const precoParcela10x = ConvertedCurrent(data.preco / 10);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="p-10 max-sm:px-0 2xl:px-0">
      <div className="flex mb-10 max-md:flex-col max-md:items-center bg-white p-5 rounded-2xl">
        <div className="flex-grow md:w-1/2">
          <h2 className="font-bold mb-4">{data.nome}</h2>
          <img
            className="w-[412px] mx-auto"
            src={data.imagem}
            alt={`imagem do produto ${data.nome}`}
          />
        </div>
        <div className="flex-grow md:w-1/2">
          <p className="mb-2">
            Vendido e entregue por:{" "}
            <span className="font-bold">kabumloso!</span> |{" "}
            {data.quantidade > 0 ? (
              <span className="text-green-600 font-bold">Em estoque</span>
            ) : (
              <span className="text-red-600 font-bold">Esgotado</span>
            )}
          </p>
          <div className="flex flex-col justify-between h-5/6">
            <div>
              <div className="flex gap-3 justify-between max-md:flex-col">
                <QtdCard preco={data.preco} />
                <BtnCard
                  secundaria
                  text={data.quantidade <= 0 ? "Esgotado!" : "Comprar"}
                  isEsgotado={data.quantidade <= 0}
                />
              </div>
              <div className="mt-5">
                <span className="font-bold opacity-90 text-sm">
                  {precoTotal}
                </span>
                <p className="text-sm">
                  Em até 10x de{" "}
                  <span className="font-bold opacity-90">
                    {precoParcela10x}
                  </span>{" "}
                  sem juros no cartão
                </p>
                <p className="text-sm">
                  Ou em 1x no cartão com{" "}
                  <span className="font-bold opacity-90">7% OFF</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <TitleIcon title="Descrição do produto">
                <MdDescription style={iconProps} />
              </TitleIcon>
              <p className="ml-1">{data.descricao}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TitleIcon title="Outras opções">
          <TbTargetArrow style={iconProps} />
        </TitleIcon>
        <div className="flex flex-wrap justify-between max-sm:justify-center mt-4">
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
