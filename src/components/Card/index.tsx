import { Link } from "react-router-dom";
import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { IProdutos } from "../../types/IProdutos";
import { useState } from "react";
import BtnCard from "../BtnCard";
import { ConvertedCurrent } from "../../utils/ConvertedCurrent";
import { HiMiniMinusCircle } from "react-icons/hi2";

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
  const [toggleComprar, setToggleComprar] = useState(false);
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
  const precoFormatado = ConvertedCurrent(preco);
  const precoComQtdFormatado = ConvertedCurrent(preco * quantidade);
  return (
    <li
      className={`${
        inCard
          ? "flex items-center mb-4 bg-white relative"
          : "flex flex-col justify-between text-center rounded border items-center w-auto bg-white transition shadow-lg hover:shadow-2xl mb-5 max-w-56"
      }`}
      onMouseEnter={() => setToggleComprar(true)}
      onMouseLeave={() => setToggleComprar(false)}
    >
      <Link
        to={`/produto/${slug}`}
        className={`${inCard && "items-center gap-1 w-full"}`}
      >
        <img
          src={imagem}
          alt=""
          className={`${inCard ? "w-32 h-32 mr-6" : "w-64 h-64"}`}
        />
      </Link>
      {inCard && (
        <span
          className="absolute -right-2 -top-2"
          onClick={() =>
            updateFieldCarrinho(
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
              "",
              true
            )
          }
        >
          <HiMiniMinusCircle
            style={{ fontSize: "25px", color: "#ca4040", cursor: "pointer" }}
          />
        </span>
      )}
      <div className="w-full h-[150px] bg-[#dfe6eb94] text-left p-3">
        <div className="flex justify-between flex-col w-full h-full">
          <div>
            {!inCard ? (
              <>
                <h3 className="font-bold opacity-90 uppercase">{nome}</h3>
                <p className="font-thin text-primarycolor400">
                  Categoria de{" "}
                  <Link to={`/search/tag/${categoria}`}>
                    <span className="font-semibold">{categoria}</span>
                  </Link>
                </p>
              </>
            ) : (
              <h3>{nome}</h3>
            )}
          </div>
          <span className="font-bold text-primarycolor400">
            {inCard ? (
              precoComQtdFormatado
            ) : (
              <p className={`text-[20px] ${quantidade <= 0 && "text-red-500"}`}>
                {!toggleComprar &&
                  `${quantidade > 0 ? precoFormatado : "ESGOTADO"}`}
              </p>
            )}
            {!inCard && toggleComprar && (
              <BtnCard
                onClick={handleClick}
                text={quantidade <= 0 ? "Esgotado" : "Comprar"}
                isEsgotado={quantidade <= 0}
              />
            )}
          </span>
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
        </div>
      </div>
    </li>
  );
};

export default Card;
