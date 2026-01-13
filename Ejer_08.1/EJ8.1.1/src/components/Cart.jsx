import { useReducer, useMemo } from "react";
import { cartReducer } from "../reducer/cartReducer";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

export default function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <>
      <ProductList dispatch={dispatch} />

      <h2>Carrito</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} dispatch={dispatch} />
      ))}

      <h3>Total: {total}€</h3>
    </>
  );
}
