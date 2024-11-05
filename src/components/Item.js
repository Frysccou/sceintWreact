// src/components/Item.js
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product, onAddToCart }) => {
  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)} className="btn btn-primary">
          Agregar al Carrito
        </button>
        <Link to={`/item/${product.id}`} className="btn btn-link">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;