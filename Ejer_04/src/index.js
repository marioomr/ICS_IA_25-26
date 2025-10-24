import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Importa Bootstrap globalmente
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición opcional de rendimiento
reportWebVitals();
