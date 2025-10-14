import { productos } from './datos/Productos';
import GaleriaProductos from './components/GaleriaProductos';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Galería de Productos</h1>
      <GaleriaProductos productos={productos} />
    </div>
  );
}

export default App;
