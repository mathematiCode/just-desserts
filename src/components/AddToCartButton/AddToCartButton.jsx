/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import UnclickedButton from "./UnclickedButton";
import NumItemsToggle from "./NumItemsToggle";
import { ItemsInCartContext } from "../../ItemsInCartProvider";

function AddToCartButton({ product }) {
  const { itemsInCart, setItemsInCart } = React.useContext(ItemsInCartContext);
  const [isSelected, setIsSelected] = React.useState(false);
  const [numItems, setNumItems] = React.useState(0);

  function updateCart(itemsInCart, setItemsInCart, product, numItems) {
    setIsSelected(true);
    let updatedCart = [...itemsInCart];
    const existingItem = updatedCart.find(
      (item) => item.folder === product.folder
    );

    if (existingItem && numItems == 0) {
      updatedCart = itemsInCart.filter((item) => item.folder != product.folder);
      setIsSelected(false);
    } else if (existingItem) {
      existingItem.quantity = numItems;
    } else {
      setNumItems(1);
      updatedCart.push({
        folder: product.folder,
        name: product.name,
        price: product.price,
        quantity: numItems,
      });
    }

    setItemsInCart(updatedCart);
  }

  useEffect(() => {
    if (isSelected) {
      updateCart(itemsInCart, setItemsInCart, product, numItems);
    }
  }, [numItems, isSelected]);

  let isInCart = false;

  itemsInCart.forEach((item) => {
    if (item.folder === product.folder) {
      isInCart = true;
    }
  });

  return (
    <div
      className="add-to-cart-container"
      onClick={() => updateCart(itemsInCart, setItemsInCart, product, numItems)}
    >
      {isSelected && isInCart ? (
        <NumItemsToggle
          numItems={numItems}
          setNumItems={setNumItems}
        ></NumItemsToggle>
      ) : (
        <UnclickedButton></UnclickedButton>
      )}
    </div>
  );
}
export default AddToCartButton;
