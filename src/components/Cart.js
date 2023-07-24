import React from "react";
import Item from "./Item";

function Cart({ onReset, onIncrement, onDelete, onDecrement, items }) {
  return (
    <div>
      <button className="btn btn-success m-2" onClick={onReset}>
        <span className="fa" aria-hidden="true">
          Reset
        </span>
      </button>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Cart;
