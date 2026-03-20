// app/admin/reset/page.js
'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../firebase/config'; 
import { ShieldAlert, Lock, Zap } from 'lucide-react';

export default function ResetUsersPage() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [status, setStatus] = useState('Esperando llave de acceso...');
  const [isLoading, setIsLoading] = useState(false);
  const [secretKey, setSecretKey] = useState('');

  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const MASTER_KEY = "Macz2026"; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const resetUsers = async () => {
    if (secretKey !== MASTER_KEY) {
      setStatus('❌ Llave incorrecta. Acceso denegado.');
      return;
    }

    setIsLoading(true);
    setStatus('Iniciando barrido masivo...');
    
    try {
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      
      let count = 0;
      for (const document of snapshot.docs) {
        const userDocRef = doc(db, 'users', document.id);
        await updateDoc(userDocRef, { isPro: false });
        count++;
      }
      
      setStatus(`✅ ¡Misión cumplida! ${count} usuarios en modo Freemium.`);
      setSecretKey('');
    } catch (error) {
      console.error(error);
      setStatus('Error crítico de conexión.');
    } finally {
      setIsLoading(false);
    }
  };

  if (checkingAuth) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
    </div>
  );

  // SI NO ES TU EMAIL, BLOQUEO TOTAL
  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-black text-white mb-2">403 - ACCESO RESTRINGIDO</h1>
        <p className="text-slate-500 max-w-sm">
          Esta interfaz es de uso exclusivo para la administración de AuxiliarPro. 
          Tu identidad ha sido registrada.
        </p>
      </div>
    );
  }

  // SI ERES TÚ, SE MUESTRA EL PANEL
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-slate-900 border-2 border-emerald-500/20 p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10">
            <Zap className="w-20 h-20 text-emerald-500" />
        </div>

        <h1 className="text-2xl font-black text-white mb-1">Panel de Control PRO</h1>
        <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            <Lock className="w-3 h-3" /> Sesión Admin: {user.email}
        </p>
        
        <div className="mb-6">
          <label className="block text-slate-500 text-xs font-bold mb-2 uppercase tracking-widest">Confirmación de Seguridad</label>
          <input 
            type="password"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            placeholder="Introduce Master Key..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-emerald-400 focus:outline-none focus:border-emerald-500 transition-all"
          />
        </div>

        <button 
          onClick={resetUsers}
          disabled={isLoading || !secretKey}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-6"
        >
          {isLoading ? 'EJECUTANDO RESET...' : 'EJECUTAR RESET MASIVO'}
        </button>

        <div className="bg-black/50 p-4 rounded-lg border border-slate-800">
          <p className="text-cyan-400 font-mono text-xs text-center">{status}</p>
        </div>
      </div>
      <p className="mt-8 text-slate-600 text-[10px] uppercase tracking-tighter">Powered by macz.dev Security Protocol • 2026</p>
    </div>
  );
}