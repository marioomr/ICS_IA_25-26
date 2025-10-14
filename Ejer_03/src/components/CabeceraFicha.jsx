// src/components/CabeceraFicha.jsx

export default function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div className="cabecera-ficha">
      <h2>{nombre}</h2>
      <p>
        Vendedor: {vendedor.nombre} - Rating: {vendedor.rating} ⭐
      </p>
    </div>
  );
}
