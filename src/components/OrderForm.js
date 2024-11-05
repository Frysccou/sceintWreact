// src/components/OrderForm.js
import React, { useState } from 'react';
import { createOrder } from '../services/productService';
import { useCart } from '../contexts/CartContext';

const OrderForm = () => {
    const { cart } = useCart();
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const orderData = {
            buyer: {
                name: customerName,
                email: customerEmail,
            },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };

        const id = await createOrder(orderData);
        setOrderId(id);
    };

    return (
        <div>
            <h2>Confirmar Orden</h2>
            {orderId ? (
                <h3>Tu orden ha sido confirmada. ID: {orderId}</h3>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                    </div>
                    <button type="submit">Confirmar Orden</button>
                </form>
            )}
        </div>
    );
};

export default OrderForm;