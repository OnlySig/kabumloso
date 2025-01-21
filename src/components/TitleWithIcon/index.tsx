import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  title: string;
};
const TitleIcon = ({ children, title }: TitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <span>{children}</span>
      <h2 className="font-bold text-primarycolor500">{title}</h2>
    </div>
  );
};

export default TitleIcon;
