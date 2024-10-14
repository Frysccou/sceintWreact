import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const products = [
    { id: 1, name: 'Perfume A', price: 20, description: 'Descripción del Perfume A' },
    { id: 2, name: 'Perfume B', price: 25, description: 'Descripción del Perfume B' },
    { id: 3, name: 'Perfume C', price: 30, description: 'Descripción del Perfume C' },
    { id: 4, name: 'Perfume D', price: 35, description: 'Descripción del Perfume D' },
    { id: 5, name: 'Perfume E', price: 40, description: 'Descripción del Perfume E' },
    { id: 6, name: 'Perfume F', price: 45, description: 'Descripción del Perfume F' },
  ];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(item => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <div>
      {product ? (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
            <button onClick={handleAddToCart} className="btn btn-primary">Agregar al Carrito</button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;