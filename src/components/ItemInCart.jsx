/* eslint-disable react/prop-types */

function ItemInCart({
  className,
  product,
  itemConfirmed,
  itemsInCart,
  setItemsInCart,
}) {
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
        ></img>
      )}
      <div className="product-info">
        <p className="product-name"> {product.name} </p>
        <div className="product-details">
          <p className="quantity"> {`${product.quantity}x`} </p>
          <p className="price-per-item"> {`@ $${product.price}`} </p>
          <p className="total-price-for-items">{`$${
            product.price * product.quantity
          }`}</p>
        </div>
      </div>
      {!itemConfirmed && (
        <button className="remove-item-button" onClick={handleRemoveItem}>
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
