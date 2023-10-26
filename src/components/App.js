import React, { useState } from "react"; // Step 1
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 2: Create a state variable to track dark mode state
  const [isDarkMode, setDarkMode] = useState(false);

  // Step 3: Event handler to toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Step 4: Update the className of the div based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> {/* Step 3: Add onClick event */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
