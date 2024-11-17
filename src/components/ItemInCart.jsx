/* eslint-disable react/prop-types */

function ItemInCart({ product }) {
  let quantity = 4;
  return (
    <div className="item-in-cart">
      <img
        className="item-in-cart-image"
        src={`../public/assets/images/${product.folder}/image-${product.folder}-mobile.jpg`}
      ></img>
      <div className="product-info">
        <p className="product-name"> {product.name} </p>
        <div className="product-details">
          <p className="quantity"> {`${quantity}x`} </p>
          <p className="price-per-item"> {`@ $${product.price}`} </p>
          <p className="total-price-for-items">{`$${
            product.price * quantity
          }`}</p>
        </div>
      </div>
      <img
        className="remove-item-icon"
        src="../public/assets/images/icon-remove-item.svg"
      ></img>
    </div>
  );
}

export default ItemInCart;
