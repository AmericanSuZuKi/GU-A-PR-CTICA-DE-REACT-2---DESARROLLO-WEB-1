import React from 'react';

export default function PeliculaCard({ pelicula, onVerDetalles }) {
  return (
    <div style={styles.card}>
      <img src={pelicula.posterUrl} alt={pelicula.titulo} style={styles.image} />
      
      <div style={styles.content}>
        <span style={styles.badge}>{pelicula.categoria}</span>
        
        <h3 style={styles.title}>
          {pelicula.titulo} ({pelicula.anio})
        </h3>
        
        <button 
          onClick={() => onVerDetalles(pelicula)}
          style={styles.button}
        >
          Ver trailer y detalles
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flexGrow: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e50914',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  title: {
    margin: '0',
    fontSize: '18px',
    color: '#fff',
  },
  button: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};