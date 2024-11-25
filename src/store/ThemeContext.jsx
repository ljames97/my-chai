// ThemeContext.js

import { createContext, useContext } from "react"

const ThemeContext = createContext();

/**
 *  Theme management.
 * 
 * - Toggles between light and dark modes.
 * - Persists the theme preference to local storage.
 * - Loads the theme preference from local storage on initial render.
 * 
 * @returns {JSX.Element} isDarkMode, toggleTheme
 */
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
