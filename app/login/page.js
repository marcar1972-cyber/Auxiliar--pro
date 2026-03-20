'use client';
import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../firebase/config"; 
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

/**
 * < macz.dev />
 * ARCHIVO: LoginPage - AuxiliarPro v4.1
 * ESTADO: PRODUCCIÓN (Lógica de isPro: false por defecto)
 */

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // 1. Autenticamos con Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 2. Referencia al documento del usuario
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      // 3. LÓGICA DE PRODUCCIÓN:
      // Si el usuario no existe, lo creamos con isPro: false.
      // Si ya existe, NO tocamos el campo isPro para no sobreescribir compras reales.
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          nombre: user.displayName || 'Alumno AuxiliarPro',
          isPro: false, // Inicia siempre en modo gratuito
          unlockedLevels: [1], // Nivel 1 desbloqueado por defecto
          createdAt: serverTimestamp()
        }, { merge: true });
      }

      // 4. Redirección al Home
      router.push('/'); 
    } catch (e) {
      console.error("Error login:", e);
      setError('Hubo un problema al conectar con Google. Revisa tu configuración.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-8 text-center border border-slate-100">
        
        <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
        </div>

        <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">AuxiliarPro</h1>
        <p className="text-slate-500 mb-8 text-sm">Inicia sesión para guardar tu progreso y certificarte.</p>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 font-bold py-4 px-4 rounded-2xl transition-all mb-4 group"
        >
          {loading ? (
            <span className="animate-pulse">Conectando...</span>
          ) : (
            <>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 4.63c1.61 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="uppercase tracking-widest text-xs">Continuar con Google</span>
            </>
          )}
        </button>

        {error && <p className="text-rose-500 text-xs mt-2 font-bold uppercase">{error}</p>}

        <Link href="/" className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-emerald-500 mt-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio
        </Link>
      </div>
      <footer className="mt-8">
        <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">&lt; macz.dev /&gt;</span>
      </footer>
    </div>
  );
}