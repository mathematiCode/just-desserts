/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const IsConfirmedContext = createContext(null);

function IsConfirmedProvider({ children }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <IsConfirmedContext.Provider value={{ isConfirmed, setIsConfirmed }}>
      {children}
    </IsConfirmedContext.Provider>
  );
}

export default IsConfirmedProvider;
