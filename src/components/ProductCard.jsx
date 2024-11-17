/* eslint-disable react/prop-types */

import AddToCartButton from "./AddToCartButton/AddToCartButton";
import "../productCard.css";

function ProductCard({ product, itemsInCart, setItemsInCart }) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={`../assets/images/${product.folder}/image-${product.folder}-mobile.jpg`}
      ></img>
      <AddToCartButton
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        product={product}
      >
        {" "}
      </AddToCartButton>
      <h2> {product.name} </h2>
    </div>
  );
}

export default ProductCard;
