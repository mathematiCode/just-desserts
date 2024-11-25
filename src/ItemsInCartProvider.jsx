/* eslint-disable react/prop-types */
import React from "react";

export const ItemsInCartContext = React.createContext(null);

function ItemsInCartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = React.useState([]);

  return (
    <ItemsInCartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </ItemsInCartContext.Provider>
  );
}

export default ItemsInCartProvider;
