// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoOpShtxP9g5TdY_PkRJuReE8SLiaeBtY",
    authDomain: "coderreact-5f4ac.firebaseapp.com",
    projectId: "coderreact-5f4ac",
    storageBucket: "coderreact-5f4ac.firebasestorage.app",
    messagingSenderId: "432534458684",
    appId: "1:432534458684:web:2dd52263f829cb99234e39",
    measurementId: "G-S452T8WMG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };