import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBelh_LjUbXAtW4h-_5Ma89rWyn5owwgnE",
  authDomain: "clone-5c8c7.firebaseapp.com",
  projectId: "clone-5c8c7",
  storageBucket: "clone-5c8c7.appspot.com",
  messagingSenderId: "84177441134",
  appId: "1:84177441134:web:6551ce307dc3ba9eaf317f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
