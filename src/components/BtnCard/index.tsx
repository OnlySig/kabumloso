import { FaShoppingCart } from "react-icons/fa";

const BtnCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded bg-accentcolor500 text-primarycolor500 p-2"
    >
      <FaShoppingCart style={{ color: "#252043" }} />
      Comprar
    </button>
  );
};

export default BtnCard;
