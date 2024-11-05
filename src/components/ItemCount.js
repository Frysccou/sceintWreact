// src/components/ItemCount.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useCart();

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > initial) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, count);
    alert(`${count} unidades de ${product.name} agregadas al carrito`);
  };

  return (
    <div className="item-count">
      <button onClick={decrement} disabled={count === initial}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={count === stock}>+</button>
      <button onClick={handleAddToCart} className="btn btn-primary">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;