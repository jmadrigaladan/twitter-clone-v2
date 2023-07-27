// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nlix0ATmEF07sHHo8PQGP-3M8kV_IRw",
  authDomain: "twitter-clone-v2-8b57d.firebaseapp.com",
  projectId: "twitter-clone-v2-8b57d",
  storageBucket: "twitter-clone-v2-8b57d.appspot.com",
  messagingSenderId: "36478164970",
  appId: "1:36478164970:web:637a493d044fdd4e49dc93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
