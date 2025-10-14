import FichaProducto from './FichaProducto';

export default function GaleriaProductos({ productos }) {
  return (
    <div className="galeria-productos">
      {productos.map(producto => (
        <FichaProducto key={producto.id} producto={producto}>
          <button>Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}
