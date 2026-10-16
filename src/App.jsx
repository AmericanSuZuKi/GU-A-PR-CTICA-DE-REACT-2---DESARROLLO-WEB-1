import { useState, useEffect } from 'react';
import peliculasData from './data/peliculas.json';
import FiltroCategorias from './components/FiltroCategorias';
import PeliculaCard from './components/PeliculaCard';
import ModalDetalle from './components/ModalDetalle';

const categorias = ["Todas", "Acción", "Ciencia Ficción", "Comedia", "Drama"];

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPeliculas(peliculasData);
      setCargando(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#141414', height: '100vh', paddingTop: '50px' }}>
        <h2>Cargando catálogo de CineApp... 🎬</h2>
      </div>
    );
  }

  const peliculasFiltradas = categoriaSeleccionada === "Todas"
    ? peliculas
    : peliculas.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#141414', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>🎬 CineApp - Catálogo</h1>
      
      <FiltroCategorias
        categorias={categorias}
        categoriaActiva={categoriaSeleccionada}
        onSeleccionar={setCategoriaSeleccionada}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {peliculasFiltradas.map((pelicula) => (
          <PeliculaCard
            key={pelicula.id}
            pelicula={pelicula}
            onVerDetalles={setPeliculaSeleccionada}
          />
        ))}
      </div>

      {/* Punto 4.4: Renderizado condicional del Modal si hay una película seleccionada */}
      {peliculaSeleccionada && (
        <ModalDetalle
          pelicula={peliculaSeleccionada}
          onCerrar={() => setPeliculaSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default App;