import React, { createContext, useState } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = (props) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 980);
  const updateDesktop = () => {
    window.innerWidth > 980 ? setIsDesktop(true) : setIsDesktop(false);
  };
  return (
    <DeviceContext.Provider value={{ isDesktop, updateDesktop }}>
      {props.children}
    </DeviceContext.Provider>
  );
};
