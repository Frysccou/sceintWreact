import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Perfumería</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {totalItems > 0 && <span className="badge bg-secondary ms-1">{totalItems}</span>} {/* Muestra el total de articulos */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;