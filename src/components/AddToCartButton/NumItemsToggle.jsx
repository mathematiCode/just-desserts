/* eslint-disable react/prop-types */
function NumItemsToggle({ numItems, setNumItems }) {
  function handleDecrement() {
    setNumItems((currentNumItems) => {
      if (currentNumItems > 1) {
        return currentNumItems - 1;
      } else return 0;
    });
  }
  function handleIncrement() {
    setNumItems((currentNumItems) => currentNumItems + 1);
    console.log("adding one more item");
  }

  return (
    <div className="num-items-toggle">
      <button className="toggle" onClick={handleDecrement}>
        <img
          className="icon"
          alt="decrease number of this item"
          src="/assets/images/icon-decrement-quantity.svg"
        ></img>
      </button>
      <p className="current-num-items">{numItems}</p>
      <button className="toggle" onClick={handleIncrement}>
        <img
          className="icon"
          alt="increase number of this item"
          src="/assets/images/icon-increment-quantity.svg"
        ></img>
      </button>
    </div>
  );
}

export default NumItemsToggle;
