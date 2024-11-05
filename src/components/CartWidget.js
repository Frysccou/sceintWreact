// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <div>
            <FaShoppingCart />
            {totalItems > 0 && <span className="badge bg-secondary">{totalItems}</span>}
        </div>
    );
};

export default CartWidget;