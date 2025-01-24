import { useEffect, useState } from "react";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";
import {
  MdOutlineWbSunny,
  MdOutlineSearch,
  MdAdminPanelSettings,
} from "react-icons/md";
import { FaMoon, FaShoppingCart } from "react-icons/fa";
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
  const handleInputContent = () => {
    navegar(`/search/q/${searchProduto}`);
  };
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <nav className="flex flex-col relative ">
      <div className="bg-primarycolor500">
        <div className="w-full flex items-center justify-between px-10 max-sm:px-0 2xl:px-0 py-8 max-w-[1490px] mx-auto mb-5">
          <Link to={"/"}>
            <h1 className="text-white uppercase">Kabumloso</h1>
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
          <div className="flex gap-4">
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
