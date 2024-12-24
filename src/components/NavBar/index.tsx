import { useEffect } from "react";
import useToggleThemeContext from "../../hooks/useToggleThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const propsStyles = {
  fontSize: "30px",
};

const NavBar = () => {
  const { updateTheme, getTheme } = useToggleThemeContext();
  const theme = getTheme();
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <div className="flex justify-between px-5">
      <h1>Kabumloso</h1>
      <button onClick={updateTheme}>
        {theme ? (
          <MdOutlineWbSunny style={propsStyles} />
        ) : (
          <FaMoon style={propsStyles} />
        )}
      </button>
    </div>
  );
};

export default NavBar;
