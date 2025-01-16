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
      />
      {addBtn && (
        <button className="bg-white px-1 rounded-e-lg">{children}</button>
      )}
    </div>
  );
};
export default Input;
