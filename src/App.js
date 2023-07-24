import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartState, setCartState] = useState({
    items: [
      { id: 1, name: "Nike Sneakers", quantity: 0 },
      { id: 2, name: "Reebok Shirt", quantity: 0 },
      { id: 3, name: "Adidas Socks", quantity: 0 },
      { id: 4, name: "Black Shoe Laces", quantity: 0 }
    ]
  });

  const handleIncrement = (item) => {
    // Objective #2: increment the quantity for the item
  };

  const handleDecrement = (item) => {
    // Objective #2: decrement the quantity for the item
  };

  const handleDelete = (itemId) => {
    // Objective #2: remove the item from the cart
  };

  const handleReset = () => {
    setCartState({
      items: [
        { id: 1, name: "Nike Sneakers", quantity: 0 },
        { id: 2, name: "Reebok Shirt", quantity: 0 },
        { id: 3, name: "Adidas Socks", quantity: 0 },
        { id: 4, name: "Black Shoe Laces", quantity: 0 }
      ]
    });
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar
        cartCounter={cartState.items.filter((c) => c.quantity > 0).length}
      />
      <main className="container">
        <Cart
          items={cartState.items}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onRestart={handleRestart}
        />
      </main>
    </div>
  );
}

export default App;
