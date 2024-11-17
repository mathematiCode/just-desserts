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
    </div>
  );
}

export default Cart;
