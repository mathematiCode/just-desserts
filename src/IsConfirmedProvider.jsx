/* eslint-disable react/prop-types */
import React from "react";

export const IsConfirmedContext = React.createContext();

function IsConfirmedProvider({ children }) {
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  return (
    <IsConfirmedContext.Provider value={{ isConfirmed, setIsConfirmed }}>
      {children}
    </IsConfirmedContext.Provider>
  );
}

export default IsConfirmedProvider;
