import { createContext, ReactNode, useState } from "react";

type ThemeContext = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  updateTheme: () => void;
  getTheme: () => string | boolean;
};

const initialValue = true;

const ToggleThemeContext = createContext<ThemeContext>({
  theme: initialValue,
  setTheme: () => null,
  updateTheme: () => null,
  getTheme: () => "",
});

export const ToggleThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(initialValue);

  const getTheme = () => {
    const theme = localStorage.getItem("tema");
    if (theme) return JSON.parse(theme);
    return false;
  };

  const updateTheme = () => {
    setTheme(!theme);
    localStorage.setItem("tema", JSON.stringify(theme));
  };

  const context = {
    theme,
    setTheme,
    updateTheme,
    getTheme,
  };
  return (
    <ToggleThemeContext.Provider value={context}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeContext;
