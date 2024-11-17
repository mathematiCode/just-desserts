/* eslint-disable react/prop-types */
import React from "react";
import UnclickedButton from "./UnclickedButton";
import NumItemsToggle from "./NumItemsToggle";

function AddToCartButton({ itemsInCart, setItemsInCart, product }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [numItems, setNumItems] = React.useState(0);

  function updateArrayOfItems(
    itemsInCart,
    setItemsInCart,
    folder,
    productName,
    quantity
  ) {
    console.log("Adding an item to cart with function");
    console.log(product);
    // Create a copy of the current cart items to avoid direct state mutation
    const updatedCart = [...itemsInCart];

    // Check if the item already exists in the cart
    const existingItem = updatedCart.find((item) => item.folder === folder);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ folder, productName, quantity: 1 });
    }

    setItemsInCart(updatedCart);
  }

  function addItemToCart(product) {
    setIsClicked(true);
    console.log(product);
    updateArrayOfItems(
      itemsInCart,
      setItemsInCart,
      product.folder,
      product.name,
      numItems
    );
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
