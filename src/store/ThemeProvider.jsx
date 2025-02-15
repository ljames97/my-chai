// ThemeProvider.jsx

import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { loadThemeFromLocalStorage, saveThemeToLocalStorage } from "../components/global/globalUtils";

/**
 * Provider for theme management.
 * 
 * - Toggles between light and dark modes.
 * - Persists the theme preference to local storage.
 * - Loads the theme preference from local storage on initial render.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element} isDarkMode, toggleTheme
 */
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