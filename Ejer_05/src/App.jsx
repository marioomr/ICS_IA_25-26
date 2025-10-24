import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Datos
import { tareas as tareasIniciales } from './datos/tareas';
import { articles as articlesIniciales } from './datos/articles';

// Componentes Tareas
import Filtros from './components/Filtros';
import ListaTareas from './components/ListaTareas';
import ResumenTareas from './components/ResumenTareas';

// Componentes Noticias
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import EmptyState from './components/EmptyState';

function App() {
  // --- DASHBOARD DE TAREAS ---
  const [tareas, setTareas] = useState(tareasIniciales || []);
  const [filtroPrioridad, setFiltroPrioridad] = useState('Todas');

  const toggleCompletada = (id) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasFiltradas = tareas
    ? filtroPrioridad === 'Todas'
      ? tareas
      : tareas.filter(
          (t) => t.prioridad.toLowerCase() === filtroPrioridad.toLowerCase()
        )
    : [];

  // --- FEED DE NOTICIAS ---
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [articles, setArticles] = useState(articlesIniciales || []);

  const togglePin = (id) => {
    setArticles((prev) => {
      const nuevoEstado = prev.map((a) =>
        a.id === id ? { ...a, pinned: !a.pinned } : { ...a, pinned: false }
      );
      
      const fijo = nuevoEstado.find((a) => a.pinned);
      const resto = nuevoEstado.filter((a) => !a.pinned);
      return fijo ? [fijo, ...resto] : [...resto];
    });
  };

  const articlesFiltrados = (articles || []).filter((a) => {
    const cumpleBusqueda = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const cumpleCategoria = categoriaFiltro === 'Todas' || a.category === categoriaFiltro;
    return cumpleBusqueda && cumpleCategoria;
  });

  return (
    <div className="container my-5">
      {/* DASHBOARD DE TAREAS */}
      <h2 className="mb-3">Dashboard de Tareas</h2>
      <Filtros filtro={filtroPrioridad} setFiltro={setFiltroPrioridad} />

      <ListaTareas tareas={tareasFiltradas} toggleCompletada={toggleCompletada} />
      <ResumenTareas tareas={tareasFiltradas} total={tareas.length || 0} />

      <hr className="my-5" />

      {/* FEED DE NOTICIAS */}
      <h2 className="mb-3">Feed de Noticias</h2>
      <div className="mb-3 d-flex gap-2 flex-wrap">
        {['Todas','React','CSS','JavaScript'].map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-primary"
            onClick={() => setCategoriaFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {articlesFiltrados.length === 0 ? (
        <EmptyState mensaje="No se encontraron artículos con los filtros seleccionados." />
      ) : (
        <ArticleList articles={articlesFiltrados} onPin={togglePin} />

      )}
    </div>
  );
}

export default App;
