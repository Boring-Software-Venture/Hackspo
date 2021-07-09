import React, { useState } from "react";

export const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};