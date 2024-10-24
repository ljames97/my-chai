// ThemeProvider.jsx

import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { loadThemeFromLocalStorage, saveThemeToLocalStorage } from "../components/global/globalUtils";

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(loadThemeFromLocalStorage());

  const toggleTheme = () => setIsDarkMode(prevTheme => !prevTheme);

  useEffect(() => {
    saveThemeToLocalStorage(isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}