// src/services/productService.js
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const fetchProducts = async () => {
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productList;
};

export const createOrder = async (orderData) => {
    const ordersCollection = collection(db, 'orders');
    const orderDoc = await addDoc(ordersCollection, orderData);
    return orderDoc.id;
};