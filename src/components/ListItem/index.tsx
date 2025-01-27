import { ConvertedCurrent } from "../../utils/ConvertedCurrent";
//import { GrAscend } from "react-icons/gr";
//import { ImSortAmountAsc } from "react-icons/im";
import { MdDelete, MdEdit } from "react-icons/md";
import useProdutosMutation from "../../hooks/useProdutosMutation";
import { Link } from "react-router-dom";

const ListItem = ({
  nome,
  categoria,
  quantidade,
  preco,
  id,
}: {
  nome: string;
  categoria: string;
  quantidade: number;
  id: string;
  preco: number;
}) => {
  const { mutate: updateProduto } = useProdutosMutation();
  const precoFormatado = ConvertedCurrent(Number(preco));
  const handleClick = async () => {
    try {
      updateProduto({ id, action: "delete", value: { nome } });
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  return (
    <li className="flex justify-between text-left">
      <div className="w-1/5 border pl-2">
        <span className="text-sm">{nome}</span>
      </div>
      <div
        className={`${
          categoria ? "w-1/5 border pl-2" : "w-1/5 border pl-2 bg-red-500"
        }`}
      >
        <span className="text-sm">{categoria}</span>
      </div>
      <div
        className={`${
          quantidade <= 0 ? "w-1/5 border pl-2 bg-red-500" : "w-1/5 border pl-2"
        }`}
      >
        <span className={"text-sm"}>{quantidade}</span>
      </div>
      <div className="w-1/5 border pl-2">
        <span className="text-sm">{precoFormatado}</span>
      </div>
      <div className="w-1/5 border pl-2">
        <span className="flex gap-2">
          <MdDelete
            style={{ color: "#db5656", fontSize: "30px", cursor: "pointer" }}
            onClick={() => handleClick()}
          />
          <Link to={`/admin/upsert/${id}`}>
            <MdEdit
              style={{ color: "#fcc71a", fontSize: "30px", cursor: "pointer" }}
            />
          </Link>
        </span>
      </div>
    </li>
  );
};

export default ListItem;
