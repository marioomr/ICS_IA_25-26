// src/components/DetallesProducto.jsx

export default function DetallesProducto({ caracteristicas, children }) {
  return (
    <div className="detalles-producto">
      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}
