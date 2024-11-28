import React from "react";
import ItemInCart from "./ItemInCart";
import { ItemsInCartContext } from "../ItemsInCartProvider";
import { useNavigate } from "react-router";
import "../cart.css";

function OrderConfirmed() {
  const navigate = useNavigate();
  const { itemsInCart, setItemsInCart } = React.useContext(ItemsInCartContext);
  let totalCost = 0;
  itemsInCart.forEach((item) => {
    totalCost = totalCost + item.price * item.quantity;
  });
  return (
    <>
      <h1 className="confirmed-header">
        {" "}
        Thank you for ordering with us.
        <br></br>Come back soon!{" "}
      </h1>
      <div className="confirmed-container">
        <div className="modal-container">
          {itemsInCart.map((item) => (
            <ItemInCart
              key={`${item.folder}isConfirmed`}
              className="item-in-modal"
              product={item}
              itemConfirmed={true}
              itemsInCart={itemsInCart}
            ></ItemInCart>
          ))}
        </div>
        <div className="modal-total-container">
          <p className="bold-text">Order Total</p>
          <p className="total-cost">${totalCost.toFixed(2)}</p>
        </div>
        <button
          className="start-new-order-button"
          onClick={() => {
            setItemsInCart([]);
            navigate("/");
          }}
        >
          {" "}
          Start New Order
        </button>
      </div>
    </>
  );
}

export default OrderConfirmed;
