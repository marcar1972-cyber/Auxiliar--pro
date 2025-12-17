'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/config';
import Link from 'next/link';
import { User, LogOut } from 'lucide-react';

export default function UserIcon() {
  const [user, setUser] = useState(null);

  // Vigilar si el usuario entra o sale
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Estado usuario:", currentUser?.email); // Para verificar en consola
         setUser(currentUser);
     });
     return () => unsubscribe();
  }, []);

  // Función para cerrar sesión al hacer clic en la foto
  const handleLogout = async () => {
    const confirm = window.confirm("¿Quieres cerrar sesión?");
    if (confirm) {
        await signOut(auth);
        window.location.reload();
    }
  };

  // 1. SI ESTÁ LOGUEADO: Muestra su FOTO de Google
  if (user) {
      return (
          <button 
            onClick={handleLogout}
            className="ml-2 flex items-center gap-2 border-2 border-green-500 rounded-full p-0.5 transition-transform hover:scale-105"
            title={`Hola ${user.displayName || 'Usuario'}. Clic para salir.`}
          >
              {user.photoURL ? (
                  <img src={user.photoURL} alt="Tu Perfil" className="w-8 h-8 rounded-full" />
              ) : (
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {user.displayName ? user.displayName[0] : 'U'}
                  </div>
              )}
          </button>
      );
  }

  // 2. SI NO ESTÁ LOGUEADO: Muestra el HOMBRECITO gris
  return (
      <Link href="/login" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-all" title="Iniciar Sesión">
          <User className="w-5 h-5" />
      </Link>
  );
}
