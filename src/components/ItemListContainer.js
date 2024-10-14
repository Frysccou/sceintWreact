import React from 'react';
import { useCart } from '../contexts/CartContext';

const ItemListContainer = ({ welcomeMessage }) => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Perfume A', price: 20 },
        { id: 2, name: 'Perfume B', price: 25 },
        { id: 3, name: 'Perfume C', price: 30 },
        { id: 4, name: 'Perfume D', price: 35 },
        { id: 5, name: 'Perfume E', price: 40 },
        { id: 6, name: 'Perfume F', price: 45 },
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} agregado al carrito`);
    };

    return (
        <div>
            <h2>{welcomeMessage}</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;