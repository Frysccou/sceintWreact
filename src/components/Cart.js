import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div>
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price} x {product.quantity} 
                                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;