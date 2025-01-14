import { useEffect } from "react";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon, FaShoppingCart } from "react-icons/fa";
import useCarrinhoContext from "../../hooks/useCarrinhoContext";

const propsStyles = {
  fontSize: "30px",
};

const NavBar = () => {
  const { updateTheme, getTheme } = useToggleThemeContext();
  const { updateToggleAside } = useCarrinhoContext();
  const theme = getTheme();
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <div className="flex justify-between px-5 items-baseline">
      <h1>Kabumloso</h1>
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
    </div>
  );
};

export default NavBar;
