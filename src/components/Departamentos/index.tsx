import { RxHamburgerMenu } from "react-icons/rx";

const iconProps = {
  marginRight: "6px",
  fontSize: "20px",
  color: "#fcc71a",
};

const Departamentos = ({
  setToggleDepartamento,
}: {
  setToggleDepartamento: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onMouseEnter={() => setToggleDepartamento(true)}
      onMouseLeave={() => setToggleDepartamento(false)}
      className="bg-primarycolor300 hover:bg-[#504881] w-fit h-10 flex justify-start items-center text-white font-bold cursor-pointer"
    >
      <RxHamburgerMenu style={iconProps} />
      <span data-testid="departamentoTitle">VER DEPARTAMENTOS</span>
    </div>
  );
};

export default Departamentos;
