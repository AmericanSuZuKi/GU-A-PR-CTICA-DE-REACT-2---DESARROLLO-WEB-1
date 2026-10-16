import React, { useEffect } from 'react';

export default function ModalDetalle({ pelicula, onCerrar }) {
  useEffect(() => {
    document.title = "Viendo: " + pelicula.titulo;

    return () => {
      document.title = "CineApp - Catálogo";
    };
  }, [pelicula]);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{pelicula.titulo} ({pelicula.anio})</h2>
        <p><strong>Categoría:</strong> {pelicula.categoria}</p>
        <p>{pelicula.sinopsis}</p>

        {/* Reproductor embebido de YouTube indicado en la guía */}
        <div style={{ margin: '15px 0' }}>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${pelicula.youtubeId}`}
            title={pelicula.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none', borderRadius: '8px' }}
          ></iframe>
        </div>

        <button onClick={onCerrar} style={styles.button}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#1f1f1f',
    padding: '25px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px',
    color: '#fff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e50914',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};