import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkTheme, setDarkTheme] = useState(getCurrentTheme);
  const ThemeListener = (e) => {
    setDarkTheme(e.matches);
  };
  useEffect(() => {
    const Theme = window.matchMedia("(prefers-color-scheme: dark)");
    Theme.addListener(ThemeListener);
    return () => Theme.removeListener(ThemeListener);
  }, []);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
