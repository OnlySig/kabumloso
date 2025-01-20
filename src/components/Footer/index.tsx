import { useState } from "react";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const iconsProps = {
  color: "#FFF",
  fontSize: "36px",
  cursor: "pointer",
};

const Footer = () => {
  const [discMsg, setDiscMsg] = useState("");
  const copyPaste = async () => {
    try {
      await navigator.clipboard.writeText("gabrielpereira01");
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const handleClickDiscordIcon = () => {
    copyPaste();
    setDiscMsg("Copiado!");
  };
  return (
    <footer className="flex flex-col justify-center bg-primarycolor500">
      <div className="text-center bg-primarycolor300 p-6">
        <h2 className="text-white font-bold">SIGA-ME</h2>
        <div className="flex justify-center gap-5 mt-6">
          <a href="https://www.instagram.com/gacastropereira/" target="_blank">
            <FaInstagram style={iconsProps} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-castro-pereira21/"
            target="_blank"
          >
            <FaLinkedin style={iconsProps} />
          </a>
          <div className="flex flex-col relative">
            <FaDiscord
              style={iconsProps}
              onClick={handleClickDiscordIcon}
              onMouseEnter={() => setDiscMsg("Copiar meu id")}
              onMouseLeave={() => setDiscMsg("")}
            />
            <span className="absolute bottom-10 -right-10 whitespace-nowrap text-white bg-slate-500 rounded-2xl px-2">
              {discMsg}
            </span>
          </div>
        </div>
      </div>
      <p className="text-white text-center p-8">
        Projeto feito por{" "}
        <a
          className="font-bold"
          href="https://github.com/OnlySig"
          target="_blank"
        >
          Gabriel Pereira
        </a>
        , kabumloso tem o intuito apenas para estudos, sem fins lucratívos.
      </p>
    </footer>
  );
};

export default Footer;
