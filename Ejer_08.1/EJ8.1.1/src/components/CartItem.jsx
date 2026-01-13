import React from "react";

function CartItem({ item, dispatch }) {
  return (
    <div>
      {item.name} ({item.quantity})
      <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>
      <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>Eliminar</button>
    </div>
  );
}

export default React.memo(CartItem);
