import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9gA73MvZYv4VUNOG_feQtosLE9TT6-zQ",
  authDomain: "finbust.firebaseapp.com",
  projectId: "finbust",
  storageBucket: "finbust.firebasestorage.app",
  messagingSenderId: "317428413277",
  appId: "1:317428413277:web:400536248ba0073b2d6eb4",
  measurementId: "G-SJ5DTEH043"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(firebaseApp);

export default db;
