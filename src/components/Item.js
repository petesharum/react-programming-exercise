import React from "react";

function Item({ item, onIncrement, onDecrement, onDelete }) {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += item.quantity === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { quantity } = item;
    return quantity;
  };

  return (
    <div>
      <div className="row">
        <div className="itemName">{item.name}</div>
        <div>
          <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
            {formatCount()}
          </span>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(item)}
            title="Increment"
          >
            <span className="fa" aria-hidden="true">
              +
            </span>
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => onDecrement(item)}
            disabled={item.quantity === 0 ? "disabled" : ""}
            title="Decrement"
          >
            <span className="fa" aria-hidden="true">
              -
            </span>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(item)}
            title="Delete"
          >
            <span className="fa" aria-hidden="true">
              x
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
