import { useEffect } from "react";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";
import { MdOutlineWbSunny, MdOutlineSearch } from "react-icons/md";
import { FaMoon, FaShoppingCart } from "react-icons/fa";
import useCarrinhoContext from "../../hooks/useCarrinhoContext";
import { Link } from "react-router-dom";
import Input from "../Input";

const propsStyles = {
  fontSize: "30px",
  color: "#FFF",
};

const NavBar = () => {
  const { updateTheme, getTheme } = useToggleThemeContext();
  const { updateToggleAside } = useCarrinhoContext();
  const theme = getTheme();
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <nav className="flex items-center justify-between px-10 2xl:px-0 bg-primarycolor500 py-8 max-w-[1490px] mx-auto mb-10">
      <Link to={"/"}>
        <h1 className="text-white">Kabumloso</h1>
      </Link>
      <Input placeholder="Buscar produto" required addBtn>
        <MdOutlineSearch style={{ color: "#42464da4", fontSize: "30px" }} />
      </Input>
      <div className="flex gap-4">
        <button onClick={() => updateToggleAside(true)}>
          <FaShoppingCart style={propsStyles} />
        </button>
        <button onClick={updateTheme}>
          {theme ? (
            <MdOutlineWbSunny style={propsStyles} />
          ) : (
            <FaMoon style={propsStyles} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
