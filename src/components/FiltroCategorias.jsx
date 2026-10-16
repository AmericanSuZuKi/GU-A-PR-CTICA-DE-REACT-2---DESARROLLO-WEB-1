import React from 'react';

function FiltroCategorias({ categorias, categoriaActiva, onSeleccionar }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => onSeleccionar(cat)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: categoriaActiva === cat ? '#e50914' : '#333',
            color: '#fff',
            transition: 'background-color 0.2s'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FiltroCategorias;