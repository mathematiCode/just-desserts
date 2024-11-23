import React from "react";

function UnclickedButton() {
  const [hovered, setHovered] = React.useState(false);
  function handleHover() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }
  return (
    <button
      className="add-to-cart-button"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        data-hovered={hovered}
        className="cart-icon"
        src="/assets/images/icon-add-to-cart.svg"
      ></img>
      Add to Cart
    </button>
  );
}

export default UnclickedButton;
