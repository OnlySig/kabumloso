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
  value: string;
  setValue: (e: string) => void;
  onClick: () => void;
  onKeyDown: (e: string) => void;
};

const Input = ({
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
    <div className="flex px-5 w-full max-w-screen-sm mx-auto">
      {isLabel && <label htmlFor={id}>{TxtContentLabel}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="bg-white w-full p-2 rounded-s-lg outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.key)}
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
