import React, { useState, useEffect } from "react";

export const CountDownContext = React.createContext(null);

export const CountDownContextProvider = ({ children }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const calculateTimeLeft = () => {
    const difference = +new Date(`01/06/2022`) - +new Date();
    if (difference > 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <CountDownContext.Provider value={{ days, hours, minutes, seconds }}>
      {children}
    </CountDownContext.Provider>
  );
};
