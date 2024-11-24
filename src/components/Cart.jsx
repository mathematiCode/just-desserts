/* eslint-disable react/prop-types */
import ItemInCart from "./ItemInCart";
import "../cart.css";

function Cart({ itemsInCart, setItemsInCart }) {
  let totalCost = 0;
  itemsInCart.forEach((item) => {
    totalCost = totalCost + item.price * item.quantity;
  });
  return (
    <div className="cart">
      <h2> Your Cart</h2>
      {itemsInCart.map((item) => (
        <ItemInCart
          key={item.folder}
          product={item}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        ></ItemInCart>
      ))}
      <div className="cart-bottom-section">
        <div className="cart-total">
          <p>Total</p>
          <p className="total-price">${totalCost}</p>
        </div>
        <div className="carbon-neutral">This is a carbon-neutral delivery</div>
        <button className="confirm-order-button">Confirm Order</button>
      </div>
    </div>
  );
}

export default Cart;
