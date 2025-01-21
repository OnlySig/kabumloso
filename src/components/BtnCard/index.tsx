import { FaShoppingCart } from "react-icons/fa";

const BtnCard = ({
  onClick,
  secundaria = false,
  text,
  isEsgotado = false,
}: {
  onClick?: () => void;
  secundaria?: boolean;
  text?: string;
  isEsgotado?: boolean;
}) => {
  return (
    <button
      disabled={isEsgotado}
      onClick={onClick}
      className={`${
        secundaria
          ? "flex justify-center gap-2 items-center max-md:w-full max-md:py-2 w-[300px] max-h-14 rounded bg-primarycolor400 font-bold text-2xl text-white"
          : "flex items-center gap-2 rounded bg-accentcolor500 text-primarycolor500 p-2"
      }`}
    >
      <FaShoppingCart
        style={!secundaria ? { color: "#252043" } : { color: "#FFF" }}
      />
      {text ? text : "Comprar"}
    </button>
  );
};

export default BtnCard;
