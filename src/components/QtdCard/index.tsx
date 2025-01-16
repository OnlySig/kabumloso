import { useState } from "react";

const QtdCard = ({ preco }: { preco: number | undefined }) => {
  const [qtd, setQtd] = useState(1);
  if (!preco) {
    return <h1>{"Indisponível!"}</h1>;
  }
  const precoReal = (preco * qtd).toFixed(1);
  return (
    <>
      <button
        className=""
        onClick={() => setQtd((prevQtd) => prevQtd - 1)}
        disabled={qtd < 2}
      >
        -
      </button>

      {qtd}
      <button className="" onClick={() => setQtd((prevQtd) => prevQtd + 1)}>
        +
      </button>
      <div className="">{`R$${precoReal}`}</div>
    </>
  );
};

export default QtdCard;
