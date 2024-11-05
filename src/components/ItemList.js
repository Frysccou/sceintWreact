// src/components/ItemList.js
import React from 'react';

const ItemList = ({ products, onAddToCart }) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4" key={product.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                            <button onClick={() => onAddToCart(product)} className="btn btn-primary">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;