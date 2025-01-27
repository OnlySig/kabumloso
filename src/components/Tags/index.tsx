import { useProdutosCategorias } from "../../hooks/useProdutos";
import Tag from "./Tag";

const Tags = ({
  toggleDepartamento,
  setToggleDepartamento,
}: {
  toggleDepartamento: boolean;
  setToggleDepartamento: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tags = useProdutosCategorias();
  return (
    <div
      data-testid="containerList"
      className={!toggleDepartamento ? "hidden" : "max-w-[1490px] relative"}
    >
      <ul className="flex flex-col flex-grow justify-between font-bold uppercase absolute z-10 w-[196px]">
        {tags?.map((tag) => (
          <Tag
            categoria={tag}
            key={tag}
            setToggleDepartamento={setToggleDepartamento}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tags;
