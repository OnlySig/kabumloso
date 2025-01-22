import { Link } from "react-router-dom";

const Tag = ({
  categoria,
  setToggleDepartamento,
}: {
  categoria: string;
  setToggleDepartamento: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Link
      onMouseEnter={() => setToggleDepartamento(true)}
      onMouseLeave={() => setToggleDepartamento(false)}
      to={`search/tag/${categoria}`}
    >
      <span className="hover:bg-[#504881] text-left text-white bg-primarycolor300 py-2 px-2 block w-full cursor-pointer">
        {categoria}
      </span>
    </Link>
  );
};

export default Tag;
