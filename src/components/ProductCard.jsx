/* eslint-disable react/prop-types */

import AddToCartButton from "./AddToCartButton/AddToCartButton";
import "../productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={`../assets/images/${product.folder}/image-${product.folder}-mobile.jpg`}
        alt=""
      ></img>
      <AddToCartButton product={product}> </AddToCartButton>
      <h2> {product.name} </h2>
      <p className="product-price">{`$${product.price.toFixed(2)}`} </p>
    </div>
  );
}

export default ProductCard;
