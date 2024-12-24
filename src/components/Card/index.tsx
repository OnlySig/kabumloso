import { Link } from "react-router-dom";
import { IProdutos } from "../../types/IProdutos";

const Card = ({ imagem, nome, preco, slug }: IProdutos) => {
  return (
    <li className="flex flex-col flex-grow text-center rounded p-2 border items-center">
      <Link to={`/produto/${slug}`}>
        <img src={imagem} alt="" className="w-64 h-64" />
        <h3 className="max-w-32 m-auto">{nome}</h3>
        R$<span>{preco}</span>
      </Link>
      <button>COMPRAR/CARRINHO</button>
    </li>
  );
};

export default Card;
