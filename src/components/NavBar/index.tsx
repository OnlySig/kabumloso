import { useEffect, useState } from "react";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdOutlineWbSunny,
  MdOutlineSearch,
  MdAdminPanelSettings,
} from "react-icons/md";
import { FaMoon, FaShoppingCart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import Tags from "../Tags";
import Departamentos from "../Departamentos";

const propsStyles = {
  fontSize: "30px",
  color: "#FFF",
};

const NavBar = () => {
  const navegar = useNavigate();
  const { updateTheme, getTheme } = useToggleThemeContext();
  const { updateToggleAside } = useCarrinhoContext();
  const theme = getTheme();
  const [searchProduto, setSearchProduto] = useState("");
  const [toggleDepartamento, setToggleDepartamento] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const handleInputContent = () => {
    navegar(`/search/q/${searchProduto}`);
  };
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <nav className="flex flex-col relative">
      <div className="bg-primarycolor500">
        <div className="w-full flex items-center justify-between px-10 max-sm:px-0 2xl:px-0 py-8 max-w-[1490px] mx-auto mb-5">
          <Link to={"/"}>
            <h1 className="text-white sm:uppercase">Kabumloso</h1>
          </Link>
          <Input
            isSearch
            placeholder="Buscar produto"
            required
            addBtn
            value={searchProduto}
            setValue={setSearchProduto}
            onClick={handleInputContent}
            onKeyDown={(e) => {
              if (e === "Enter") return handleInputContent();
            }}
          >
            <MdOutlineSearch style={{ color: "#42464da4", fontSize: "30px" }} />
          </Input>
          <div className={"flex gap-4 max-sm:hidden"}>
            <button onClick={() => updateToggleAside(true)}>
              <FaShoppingCart style={propsStyles} />
            </button>
            <button onClick={() => navegar("/admin/dashboard")}>
              <MdAdminPanelSettings style={propsStyles} />
            </button>
            <button onClick={updateTheme}>
              {theme ? (
                <MdOutlineWbSunny style={propsStyles} />
              ) : (
                <FaMoon style={propsStyles} />
              )}
            </button>
          </div>
          <button className="sm:hidden z-10">
            {!toggleMobile ? (
              <RxHamburgerMenu
                style={propsStyles}
                onClick={() => setToggleMobile(!toggleMobile)}
              />
            ) : (
              <IoCloseOutline
                style={propsStyles}
                onClick={() => setToggleMobile(!toggleMobile)}
              />
            )}
          </button>
          <div
            className={` flex flex-col justify-center items-center gap-5 absolute w-full z-[1] bg-primarycolor300 sm:hidden transition delay-150 duration-300 ease-in-out ${
              toggleMobile ? "translate-y-6" : "-translate-y-32"
            }`}
          >
            <button
              className="flex items-center gap-4 bg-primarycolor500 px-3 py-1 rounded"
              onClick={() => updateToggleAside(true)}
            >
              <>
                <FaShoppingCart style={propsStyles} />
                <span className="text-white">Carrinho</span>
              </>
            </button>
            <button
              className="flex items-center gap-4 bg-primarycolor500 px-3 py-1 rounded"
              onClick={() => navegar("/admin/dashboard")}
            >
              <>
                <MdAdminPanelSettings style={propsStyles} />
                <span className="text-white">Administração</span>
              </>
            </button>
            <button
              className="flex items-center gap-4 bg-primarycolor500 px-3 py-1 rounded"
              onClick={updateTheme}
            >
              {theme ? (
                <>
                  <MdOutlineWbSunny style={propsStyles} />
                  <span className="text-white">Ir para claro</span>
                </>
              ) : (
                <>
                  <FaMoon style={propsStyles} />
                  <span className="text-white">Ir para escuro</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primarycolor300">
        <div className="max-w-[1490px] px-10 2xl:px-0 mx-auto">
          <Departamentos setToggleDepartamento={setToggleDepartamento} />
          <Tags
            toggleDepartamento={toggleDepartamento}
            setToggleDepartamento={setToggleDepartamento}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
