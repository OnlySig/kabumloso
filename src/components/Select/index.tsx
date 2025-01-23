import { useState } from "react";

type IProps = {
  label: string;
  arry: string[];
  selecionado: string;
  setSelecionado: (e: string) => void;
};

const Select = ({ label, arry, selecionado, setSelecionado }: IProps) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (categoria: string) => {
    setSelecionado(categoria);
    setToggle(false);
  };
  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={label} className="text-sm text-zinc-800">
        {label}
      </label>
      <button
        className="border-[2px] p-1 hover:border-[#98D8EF] z-10"
        id={label}
        type="button"
        onClick={() => setToggle(!toggle)}
      >
        {selecionado ? selecionado : "Selecionar"}
      </button>
      {toggle && (
        <ul className="absolute bg-white w-full top-[56px]">
          {arry.map((categoria: string, index: number) => (
            <li
              className="cursor-pointer text-center hover:bg-slate-200 border-b border-x text-[#535252]"
              onClick={() => handleClick(categoria)}
              key={index}
            >
              <span>{categoria}</span>
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        className="absolute z-0 top-6 right-1 opacity-0"
        required
        value={selecionado}
        onChange={(e) => e}
      />
    </div>
  );
};

export default Select;
