// src/components/PieFicha.jsx

export default function PieFicha({ precio, enStock }) {
  if (!enStock) {
    return <div className="pie-ficha no-stock">No disponible</div>;
  }

  return (
    <div className="pie-ficha">
      <strong>
        {precio.moneda} {precio.valor.toFixed(2)}{' '}
      </strong>
      {precio.enOferta && <span className="oferta">¡OFERTA!</span>}
    </div>
  );
}
