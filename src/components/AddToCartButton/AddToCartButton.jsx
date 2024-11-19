/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import UnclickedButton from "./UnclickedButton";
import NumItemsToggle from "./NumItemsToggle";

function AddToCartButton({ itemsInCart, setItemsInCart, product }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [numItems, setNumItems] = React.useState(0);

  function updateCart(itemsInCart, setItemsInCart, product, numItems) {
    setIsClicked(true);
    let updatedCart = [...itemsInCart];
    const existingItem = updatedCart.find(
      (item) => item.folder === product.folder
    );

    if (existingItem && numItems == 0) {
      updatedCart = itemsInCart.filter((item) => item.folder != product.folder);
      setIsClicked(false);
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
    if (isClicked) {
      updateCart(itemsInCart, setItemsInCart, product, numItems);
    }
  }, [numItems, isClicked]);
  return (
    <div
      className="add-to-cart-container"
      onClick={() => updateCart(itemsInCart, setItemsInCart, product, numItems)}
    >
      {isClicked ? (
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
