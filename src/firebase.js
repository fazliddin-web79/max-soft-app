import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
