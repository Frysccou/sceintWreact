// src/components/ItemDetail.js
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} product={product} /> {/* Aca se pasa el producto */}
    </div>
  );
};

export default ItemDetail;