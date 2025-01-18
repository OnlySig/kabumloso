import { useProdutosCategorias } from "../../hooks/useProdutos";
import Tag from "./Tag";

const Tags = () => {
  const tags = useProdutosCategorias();
  return (
    <ul className="flex flex-grow justify-between font-bold uppercase bg-primarycolor500">
      {tags?.map((tag, index) => (
        <Tag categoria={tag} index={index} key={tag} />
      ))}
    </ul>
  );
};

export default Tags;
