/* eslint-disable react/prop-types */
import React from "react";
import { ItemsInCartContext } from "../ItemsInCartProvider";

function ItemInCart({ className, product, itemConfirmed }) {
  const { itemsInCart, setItemsInCart } = React.useContext(ItemsInCartContext);

  function handleRemoveItem() {
    let updatedCart = itemsInCart.filter(
      (item) => item.folder != product.folder
    );
    setItemsInCart(updatedCart);
  }

  return (
    <div className={className}>
      {itemConfirmed && (
        <img
          className="item-in-cart-image"
          src={`../assets/images/${product.folder}/image-${product.folder}-mobile.jpg`}
          alt=""
        ></img>
      )}
      <div className="product-info">
        <p className="product-name"> {product.name} </p>
        <div className="product-details">
          <p className="quantity"> {`${product.quantity}x`} </p>
          <p className="price-per-item"> {`@ $${product.price.toFixed(2)}`} </p>
          {!itemConfirmed && (
            <p className="total-price-for-items">{`$${(
              product.price * product.quantity
            ).toFixed(2)}`}</p>
          )}
        </div>
      </div>
      {itemConfirmed && (
        <p className="total-price-for-items-modal">{`$${(
          product.price * product.quantity
        ).toFixed(2)}`}</p>
      )}
      {!itemConfirmed && (
        <button
          className="remove-item-button"
          alt="Remove item from cart"
          onClick={handleRemoveItem}
        >
          <img
            className="remove-item-icon"
            src="../assets/images/icon-remove-item.svg"
          ></img>
        </button>
      )}
    </div>
  );
}

export default ItemInCart;
