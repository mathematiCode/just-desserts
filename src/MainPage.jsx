import "./index.css";
import data from "./data.json";
import React from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function MainPage() {
  const [itemsInCart, setItemsInCart] = React.useState([]);
  return (
    <div className="two-column-layout">
      <div className="product-grid">
        {data.map((product) => (
          <ProductCard
            key={product.folder}
            product={product}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
          ></ProductCard>
        ))}
      </div>
      <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}></Cart>
    </div>
  );
}

export default MainPage;
