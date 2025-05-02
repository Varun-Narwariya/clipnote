// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPrPeEPrQ_SQOcAPW-mSp7T9ERtFCTFLA",
  authDomain: "clipnote-f55c8.firebaseapp.com",
  projectId: "clipnote-f55c8",
  storageBucket: "clipnote-f55c8.firebasestorage.app",
  messagingSenderId: "925853923428",
  appId: "1:925853923428:web:c6cc1605492bfe311b0771",
  measurementId: "G-FNRGG4W4BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export the Firebase services
export { auth, db, provider, createUserWithEmailAndPassword };
