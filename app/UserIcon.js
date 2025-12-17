'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/config';
import Link from 'next/link';
import { User, LogOut } from 'lucide-react';

export default function UserIcon() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la ventanita

  // Vigilar si el usuario entra o sale
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
     });
     return () => unsubscribe();
  }, []);

  // Función para abrir la ventanita
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Función para cerrar la sesión de verdad
  const handleConfirmLogout = async () => {
    await signOut(auth);
    window.location.reload(); // Recarga la página para limpiar todo
  };

  // 1. SI ESTÁ LOGUEADO:
  if (user) {
      return (
          <>
            {/* BOTÓN DE PERFIL (FOTO) */}
            <button 
                onClick={handleOpenModal}
                className="ml-2 flex items-center gap-2 border-2 border-green-500 rounded-full p-0.5 transition-transform hover:scale-105 active:scale-95"
                title="Ver opciones de perfil"
            >
                {user.photoURL ? (
                    <img src={user.photoURL} alt="Tu Perfil" className="w-8 h-8 rounded-full" />
                ) : (
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {user.displayName ? user.displayName[0] : 'U'}
                    </div>
                )}
            </button>

            {/* LA VENTANA MODAL PERSONALIZADA (POPUP) */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    {/* Cajita Blanca */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-slate-100 transform scale-100">
                        
                        <div className="text-center mb-6">
                            {/* Foto grande */}
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-green-50 overflow-hidden shadow-sm">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="Perfil" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                                        {user.displayName ? user.displayName[0] : 'U'}
                                    </div>
                                )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-900">Hola, {user.displayName?.split(' ')[0]}</h3>
                            <p className="text-sm text-slate-500">¿Qué deseas hacer?</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {/* Botón Salir */}
                            <button 
                                onClick={handleConfirmLogout}
                                className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold py-3 rounded-xl hover:bg-red-100 transition-colors"
                            >
                                <LogOut size={18} />
                                Cerrar Sesión
                            </button>

                            {/* Botón Cancelar */}
                            <button 
                                onClick={() => setShowModal(false)}
                                className="w-full text-slate-500 font-medium py-3 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                Permanecer aquí
                            </button>
                        </div>
                    </div>
                </div>
            )}
          </>
      );
  }

  // 2. SI NO ESTÁ LOGUEADO:
  return (
      <Link href="/login" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-all" title="Iniciar Sesión">
          <User className="w-5 h-5" />
      </Link>
  );
}
