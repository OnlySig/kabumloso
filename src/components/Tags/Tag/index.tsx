import { Link } from "react-router-dom";

const Tag = ({ categoria, index }: { categoria: string; index: number }) => {
  return (
    <Link
      className={`${index > 2 && "max-xl:hidden"} w-full`}
      to={`search/tag/${categoria}`}
    >
      <span className="text-white bg-primarycolor300 py-2 px-2 block w-full text-center cursor-pointer">
        {categoria}
      </span>
    </Link>
  );
};

export default Tag;
