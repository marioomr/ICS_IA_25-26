import { useState, useEffect, useCallback } from "react";

export default function ProductList({ dispatch }) {
  const [products, setProducts] = useState([]);

  // Cargar productos con fetch
  useEffect(() => {
    fetch("/src/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  const handleAdd = useCallback(
    product => dispatch({ type: "ADD", payload: product }),
    [dispatch]
  );

  return (
    <div>
      <h2>Productos</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price}€
          <button onClick={() => handleAdd(p)}>Añadir</button>
        </div>
      ))}
    </div>
  );
}
