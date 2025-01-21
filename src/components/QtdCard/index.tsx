import { ConvertedCurrent } from "../../utils/ConvertedCurrent";

const QtdCard = ({ preco }: { preco: number | undefined }) => {
  if (!preco) {
    return <h1>{"Indisponível!"}</h1>;
  }
  const precoDesconto = Number((preco * 0.07).toFixed());
  const precoDescontadoFormatado = ConvertedCurrent(preco - precoDesconto);
  return (
    <div className="flex flex-col ">
      <div>
        <div className="w-52">
          <h2 className="text-4xl font-bold text-primarycolor400">
            {precoDescontadoFormatado}
          </h2>
          <p className="text-sm">
            À vista no PIX com{" "}
            <span className="font-bold opacity-90">7% OFF</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QtdCard;
