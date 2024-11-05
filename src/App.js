import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactForm from './components/ContactForm';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;
