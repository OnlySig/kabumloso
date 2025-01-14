import { useContext } from "react";
import ToggleThemeContext from "../contexts/ToggleThemeContext";

const useToggleThemeContext = () => {
  return useContext(ToggleThemeContext);
};

export default useToggleThemeContext;
