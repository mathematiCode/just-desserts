/* eslint-disable react/prop-types */
import React from "react";
import ItemInCart from "./ItemInCart";
import ConfirmOrderModal from "./ConfirmOrderModal";
import "../cart.css";

function Cart({ itemsInCart, setItemsInCart }) {
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  let totalCost = 0;
  itemsInCart.forEach((item) => {
    totalCost = totalCost + item.price * item.quantity;
  });

  function handleConfirm() {
    setIsConfirmed(true);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="cart">
        <h2> Your Cart</h2>
        {itemsInCart.map((item) => (
          <ItemInCart
            key={item.folder}
            className="item-in-cart"
            product={item}
            itemConfirmed={false}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
          ></ItemInCart>
        ))}
        <div className="cart-bottom-section">
          <div className="cart-total">
            <p>Total</p>
            <p className="total-price">${totalCost}</p>
          </div>
          <div className="carbon-neutral">
            This is a carbon-neutral delivery
          </div>
          <button className="confirm-order-button" onClick={handleConfirm}>
            Confirm Order
          </button>
        </div>
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
