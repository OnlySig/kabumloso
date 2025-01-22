import { ReactNode } from "react";

type InputProps = {
  type?: string;
  required: boolean;
  isLabel?: boolean;
  TxtContentLabel?: string;
  placeholder: string;
  id?: string;
  addBtn?: boolean;
  children?: ReactNode;
  isSearch?: boolean;
  value: string;
  setValue: (e: string) => void;
  onClick?: () => void;
  onKeyDown?: (e: string) => void;
};

const Input = ({
  isSearch = false,
  placeholder,
  required,
  type = "text",
  id,
  isLabel = false,
  TxtContentLabel,
  addBtn,
  children,
  value,
  setValue,
  onClick,
  onKeyDown,
}: InputProps) => {
  return (
    <div
      className={`${
        isSearch ? "flex px-5 w-full max-w-screen-sm mx-auto" : "flex flex-col"
      }`}
    >
      {isLabel && (
        <label htmlFor={id} className="text-sm text-zinc-800">
          {TxtContentLabel}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className={`${
          isSearch
            ? "bg-white w-full p-2 rounded-l-lg outline-none"
            : "outline-none border hover:border-[#98D8EF] hover:border-[2px] focus:border-[#98D8EF] focus:border-[2px] rounded-sm mb-2 p-1 text-[#535252]"
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (onKeyDown) {
            onKeyDown(e.key);
          }
        }}
      />
      {addBtn && (
        <button onClick={onClick} className="bg-white px-1 rounded-e-lg">
          {children}
        </button>
      )}
    </div>
  );
};
export default Input;
