import { ReactNode } from "react";

type InputProps<T> = {
  type?: string;
  required: boolean;
  isLabel?: boolean;
  TxtContentLabel?: string;
  placeholder: string;
  id?: string;
  addBtn?: boolean;
  children?: ReactNode;
  isSearch?: boolean;
  value: T;
  setValue: (e: T) => void;
  onClick?: () => void;
  onKeyDown?: (e: string) => void;
};

const Input = <T extends string | number>({
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
}: InputProps<T>) => {
  return (
    <div
      className={`${
        isSearch
          ? "flex px-5 w-full max-w-screen-sm mx-auto"
          : "flex flex-col w-full"
      }`}
    >
      {isLabel && (
        <label htmlFor={id} className="text-sm text-zinc-800 mb-1">
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
            : "outline-none border-[2px] hover:border-[#98D8EF] focus:border-[#98D8EF] rounded-sm mb-2 p-1 text-[#535252]"
        }`}
        value={value}
        onChange={(e) => {
          const inputValue =
            type === "number"
              ? (parseFloat(e.target.value) as T)
              : (e.target.value as T);
          setValue(inputValue);
        }}
        onKeyDown={(e) => {
          if (onKeyDown) {
            onKeyDown(e.key);
          }
        }}
        min={0}
        step={id === "preco" ? "0.01" : "0"}
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
