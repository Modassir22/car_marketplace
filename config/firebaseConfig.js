// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-c028b.firebaseapp.com",
  projectId: "car-marketplace-c028b",
  storageBucket: "car-marketplace-c028b.firebasestorage.app",
  messagingSenderId: "120326041812",
  appId: "1:120326041812:web:aec94771e382f5ca6f4b41",
  measurementId: "G-6X22Y5RB0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);