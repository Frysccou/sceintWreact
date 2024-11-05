// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { fetchProducts } from '../services/productService';
import ItemList from './ItemList';

const ItemListContainer = ({ welcomeMessage }) => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsFromFirestore = await fetchProducts();
                setProducts(productsFromFirestore);
            } catch (err) {
                setError("Error al obtener productos");
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} agregado al carrito`);
    };

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>{welcomeMessage}</h2>
            <ItemList products={products} onAddToCart={handleAddToCart} />
        </div>
    );
};

export default ItemListContainer;