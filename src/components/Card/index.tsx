import { Link } from "react-router-dom";
import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { IProdutos } from "../../types/IProdutos";

type IProps = {
  imagem: string;
  nome: string;
  preco: number;
  slug: string;
  categoria: string;
  descricao: string;
  quantidade: number;
  id: string;
  inCard?: boolean;
};

const Card = ({
  imagem,
  nome,
  preco,
  slug,
  categoria,
  descricao,
  quantidade,
  id,
  inCard = false,
}: IProps) => {
  const { updateToggleAside, updateFieldCarrinho } = useCarrinhoContext();
  const handleClick = () => {
    updateToggleAside(true);
    updateFieldCarrinho({
      imagem,
      nome,
      preco,
      slug,
      categoria,
      descricao,
      quantidade,
      id,
    });
  };
  const handleQtdClick = (
    value: IProdutos,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const opcao = (e.target as HTMLInputElement).textContent ?? "";
    updateFieldCarrinho(value, opcao);
  };
  return (
    <li
      className={`${
        inCard
          ? "flex items-center mb-4 bg-white"
          : "flex flex-col text-center rounded p-2 border items-center w-[220px] bg-white shadow-2xl mb-5"
      }`}
    >
      <Link
        to={`/produto/${slug}`}
        className={`${inCard && "items-center gap-1 w-full"}`}
      >
        <div className={`${inCard && "flex items-center  w-full "}`}>
          <img
            src={imagem}
            alt=""
            className={`${inCard ? "w-32 h-32 mr-6" : "w-64 h-64"}`}
          />
          <div className={`${inCard && "flex flex-col"}`}>
            <div>
              <h3 className="max-w-32 m-auto">{nome}</h3>
              R$
              <span>
                {inCard ? (preco * quantidade).toFixed(1) : preco.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      {inCard && (
        <div className="text-xl flex gap-3">
          <span
            className="text-[30px] cursor-pointer"
            onClick={(e) =>
              handleQtdClick(
                {
                  imagem,
                  nome,
                  preco,
                  slug,
                  categoria,
                  descricao,
                  quantidade,
                  id,
                },
                e
              )
            }
          >
            -
          </span>
          <span>{quantidade}</span>
          <span
            className="cursor-pointer"
            onClick={(e) =>
              handleQtdClick(
                {
                  imagem,
                  nome,
                  preco,
                  slug,
                  categoria,
                  descricao,
                  quantidade,
                  id,
                },
                e
              )
            }
          >
            +
          </span>
        </div>
      )}
      {!inCard && <button onClick={handleClick}>COMPRAR/CARRINHO</button>}
    </li>
  );
};

export default Card;
