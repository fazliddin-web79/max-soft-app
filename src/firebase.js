import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6SqjntYDOOKcUVFzZPOttOevw7OOdrLU",
  authDomain: "max-soft.firebaseapp.com",
  projectId: "max-soft",
  storageBucket: "max-soft.appspot.com",
  messagingSenderId: "975808012193",
  appId: "1:975808012193:web:1b61c1fc329a2ee4c235e0",
  measurementId: "G-5Z31XWM09Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
