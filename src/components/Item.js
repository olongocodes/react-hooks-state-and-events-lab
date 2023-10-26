import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Create an event handler to toggle the inCart state
  const toggleInCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={`add ${inCart ? "remove" : ""}`} onClick={toggleInCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
