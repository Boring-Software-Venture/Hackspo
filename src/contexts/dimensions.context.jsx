import React, { useState, useEffect } from "react";

export const DimensionContext = React.createContext(null);

export const DimensionContextProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DimensionContext.Provider value={{ windowDimensions }}>
      {children}
    </DimensionContext.Provider>
  );
};
