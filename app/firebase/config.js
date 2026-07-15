// app/firebase/config.js (o la ruta exacta de tu archivo de configuración)
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <--- NUEVO: Importar Firestore
import { getStorage } from "firebase/storage"; // <--- NUEVO: Importar Storage para los comprobantes

const firebaseConfig = {
  apiKey: "AIzaSyDNhuSBBhmmQSV0BHC8MOtLKgAUpvtfWfE",
  authDomain: "auxiliar-pro.firebaseapp.com",
  projectId: "auxiliar-pro",
  storageBucket: "auxiliar-pro.appspot.com",
  messagingSenderId: "342196612566",
  appId: "1:342196612566:web:c7f34365c4e10502e60877"
};

// Inicializar Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(firebase_app); // <--- NUEVO: Exportamos la base de datos
export const storage = getStorage(firebase_app); // <--- NUEVO: Exportamos el Storage para subir comprobantes