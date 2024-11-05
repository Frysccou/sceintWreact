// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingItem = cart.find(product => product.id === item.id);
        if (existingItem) {
            setCart(cart.map(product => 
                product.id === item.id ? { ...existingItem, quantity: existingItem.quantity + quantity } : product
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};