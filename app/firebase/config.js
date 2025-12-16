import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNhuSBBhmmQSV0BHC8MOtLKgAUpvtfWfE", // <-- Sacado de tu foto
  authDomain: "auxiliar-pro.firebaseapp.com",
  projectId: "auxiliar-pro",
  storageBucket: "auxiliar-pro.appspot.com",
  messagingSenderId: "342196612566", 
  appId: "1:342196612566:web:c7f34365c4e10502e60877" // <-- Sacado de tu foto (ID de la app)
};

// Inicialización segura para Next.js
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const googleProvider = new GoogleAuthProvider();
