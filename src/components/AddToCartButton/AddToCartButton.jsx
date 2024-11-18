/* eslint-disable react/prop-types */
import React from "react";
import UnclickedButton from "./UnclickedButton";
import NumItemsToggle from "./NumItemsToggle";

function AddToCartButton({ itemsInCart, setItemsInCart, product }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [numItems, setNumItems] = React.useState(0);

  function updateArrayOfItems(itemsInCart, setItemsInCart, product) {
    // Create a copy of the current cart items to avoid direct state mutation
    const updatedCart = [...itemsInCart];

    // Check if the item already exists in the cart
    const existingItem = updatedCart.find(
      (item) => item.folder === product.folder
    );

    if (existingItem) {
      existingItem.quantity += 1;
      setNumItems(existingItem.quantity);
    } else {
      updatedCart.push({
        folder: product.folder,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
      setNumItems(1);
    }

    console.log(updatedCart);
    setItemsInCart(updatedCart);
  }

  function addItemToCart(product) {
    setIsClicked(true);

    console.log(product);
    updateArrayOfItems(itemsInCart, setItemsInCart, product, numItems);
  }

  return (
    <div
      className="add-to-cart-container"
      onClick={() => addItemToCart(product)}
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
