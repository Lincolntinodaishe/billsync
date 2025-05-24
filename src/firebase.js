// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYECDeK9AJ_4x7XBQNfsppcZagT5MqOnA",
  authDomain: "billsync-bbc8a.firebaseapp.com",
  projectId: "billsync-bbc8a",
  storageBucket: "billsync-bbc8a.appspot.com",
  messagingSenderId: "302933302654",
  appId: "1:302933302654:web:6392dee9dddc58e32b672f",
  measurementId: "G-NFYJ3YLRL1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
