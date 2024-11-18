/* eslint-disable react/prop-types */
import ItemInCart from "./ItemInCart";
import "./cart.css";

function Cart({ itemsInCart }) {
  return (
    <div className="cart">
      <h2> Your Cart</h2>
      {itemsInCart.map((item) => (
        <ItemInCart key={Math.random()} product={item}></ItemInCart>
      ))}
      <div className="cart-bottom-section">
        <div className="cart-total">
          <p>Total</p>
          <p className="total-price">${50}</p>
        </div>
        <div className="carbon-neutral">This is a carbon-neutral delivery</div>
        <button className="confirm-order-button">Confirm Order</button>{" "}
      </div>
    </div>
  );
}

export default Cart;
