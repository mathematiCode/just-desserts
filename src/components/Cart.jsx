/* eslint-disable react/prop-types */
import React from "react";
import ItemInCart from "./ItemInCart";
import ConfirmOrderModal from "./ConfirmOrderModal";
import "../cart.css";
import { IsConfirmedContext } from "../IsConfirmedProvider";

function Cart({ itemsInCart, setItemsInCart }) {
  const { isConfirmed, setIsConfirmed } = React.useContext(IsConfirmedContext);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  let totalCost = 0;
  let numProductsInCart = 0;
  itemsInCart.forEach((item) => {
    totalCost = totalCost + item.price * item.quantity;
    numProductsInCart = numProductsInCart + item.quantity;
  });

  function handleConfirm() {
    setIsConfirmed(true);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="cart">
        <h2 className="cart-header"> Your Cart {`(${numProductsInCart})`}</h2>
        {numProductsInCart <= 0 && (
          <>
            <img
              src="../assets/images/illustration-empty-cart.svg"
              alt=""
            ></img>
            <p> Your items will appear here</p>
          </>
        )}
        {numProductsInCart > 0 &&
          itemsInCart.map((item) => (
            <ItemInCart
              key={item.folder}
              className="item-in-cart"
              product={item}
              itemConfirmed={false}
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            ></ItemInCart>
          ))}
        {numProductsInCart > 0 && (
          <div className="cart-bottom-section">
            <div className="cart-total">
              <p className="bold-text">Total</p>
              <p className="total-cost">${totalCost}</p>
            </div>
            <div className="carbon-neutral">
              <img src="../assets/images/icon-carbon-neutral.svg"></img>
              This is a carbon-neutral delivery
            </div>
            <button className="confirm-order-button" onClick={handleConfirm}>
              Confirm Order
            </button>
          </div>
        )}
      </div>
      {isConfirmed && (
        <ConfirmOrderModal
          itemsInCart={itemsInCart}
          totalCost={totalCost}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></ConfirmOrderModal>
      )}
    </>
  );
}

export default Cart;
