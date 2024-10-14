import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart />
            <span className="badge bg-secondary">0</span>
        </div>
    );
};

export default CartWidget;