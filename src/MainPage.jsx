import "./index.css";
import data from "./data.json";
import React from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { ItemsInCartContext } from "./ItemsInCartProvider";

function MainPage() {
  const { itemsInCart, setItemsInCart } = React.useContext(ItemsInCartContext);

  return (
    <>
      <div className="two-column-layout">
        <div>
          <h1 className="main-title"> Desserts </h1>
          <div className="product-grid">
            {data.map((product) => (
              <ProductCard key={product.folder} product={product}></ProductCard>
            ))}
          </div>
        </div>
        <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}></Cart>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/mathematiCode">Julianna Messineo</a>.
      </div>
    </>
  );
}

export default MainPage;
