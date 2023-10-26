import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 2: Create a state variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 3: Create an event handler to update the selected category state
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Step 4: Filter items based on the selected category
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
