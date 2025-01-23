import { Link } from "react-router-dom";
import imgNotfound from "../../assets/not-foundImg.webp";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-5 bg-[#ffffff59] rounded-full text-primarycolor300 font-bold">
        <img src={imgNotfound} alt="imagem not-found 404" />
        <Link to={"/"}>Volte para Página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
