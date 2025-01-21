import { ConvertedCurrent } from "../../utils/ConvertedCurrent";
import { GrAscend } from "react-icons/gr";
import { ImSortAmountAsc } from "react-icons/im";
import { MdDelete, MdEdit } from "react-icons/md";
import useProdutosMutation from "../../hooks/useProdutosMutation";

const ListItem = ({
  nome,
  quantidade,
  preco,
  id,
}: {
  nome: string;
  quantidade: number;
  id: string;
  preco: number;
}) => {
  const { mutate: updateProduto } = useProdutosMutation();
  const precoFormatado = ConvertedCurrent(preco);
  const handleClick = async () => {
    try {
      updateProduto({ id, action: "delete" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className="flex justify-between text-left">
      <div className="w-1/4 border pl-2">
        <span className="text-sm">{nome}</span>
      </div>
      <div className="w-1/4 border pl-2">
        <span className="text-sm">{quantidade}</span>
      </div>
      <div className="w-1/4 border pl-2">
        <span className="text-sm">{precoFormatado}</span>
      </div>
      <div className="w-1/4 border pl-2">
        <span className="flex gap-2">
          <MdDelete
            style={{ color: "#db5656", fontSize: "30px", cursor: "pointer" }}
            onClick={() => handleClick()}
          />
          <MdEdit
            style={{ color: "#fcc71a", fontSize: "30px", cursor: "pointer" }}
          />
        </span>
      </div>
    </li>
  );
};

export default ListItem;
