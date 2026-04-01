"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import SocialContact from "../components/SocialContact";
import BannerVenta from "../components/BannerVenta";
import { 
  ChevronLeft, ShieldCheck, Trophy, BrainCircuit, Share2, Loader2 
} from "lucide-react"; 
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const isPastLaunch = () => {
  const launchDate = new Date("2026-03-31T23:59:59");
  return new Date() > launchDate;
};

const ADMIN_EMAIL = "marcar1972@gmail.com";

export default function QuizLobbyPage() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleShare = async () => {
    // ... tu código de share normal ...
  };

  // --- CORTAFUEGOS MODO PARANOICO ---
  const handleProAccess = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
       router.push('/login');
       return;
    }

    setIsVerifying(true);
    try {
      // 1. OBTENEMOS DATOS FRESCOS
      const userRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(userRef);
      
      const isAdmin = currentUser.email === ADMIN_EMAIL;
      
      // 2. LÓGICA DE SUSCRIPCIÓN ESTRICTA
      let userIsProFirebase = false;
      let userProDateValid = false;

      if (docSnap.exists()) {
         const data = docSnap.data();
         userIsProFirebase = data.isPro === true;
         
         if (data.proUntil) {
             const proDate = data.proUntil.toDate();
             if (proDate >= new Date()) {
                 userProDateValid = true;
             }
         }
      }

      const hasActiveSub = isAdmin || userIsProFirebase || userProDateValid;

      // 3. DEBUG EXTREMO (Abre la consola F12 de tu navegador)
      console.log("=== DEBUG ACCESO PRO ===");
      console.log("Email:", currentUser.email);
      console.log("Es Admin?", isAdmin);
      console.log("isPro en BD?", userIsProFirebase);
      console.log("Fecha Pro Válida?", userProDateValid);
      console.log("TIENE SUSCRIPCIÓN ACTIVA TOTAL?", hasActiveSub);
      console.log("PASÓ FECHA LANZAMIENTO?", isPastLaunch());

      // 4. LA SENTENCIA
      if (isPastLaunch() && !hasActiveSub) {
         console.log("FALLO: Mandando a /planes");
         // Usamos window.location para forzar la recarga y evitar cachés raros de Next Router
         window.location.href = '/planes'; 
      } else {
         console.log("ÉXITO: Mandando a /quiz/pro");
         router.push('/quiz/pro');
      }

    } catch (error) {
      console.error("Error validando acceso PRO:", error);
      window.location.href = '/planes';
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans relative">
      
      <nav className="bg-white p-6 shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">
            <ChevronLeft size={28} />
          </Link>
          <span className="text-xl font-black text-slate-900 tracking-tighter">Entrenamiento</span>
        </div>
      </nav>

      <section className="p-6 max-w-3xl mx-auto mt-6">
        <header className="mb-10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Simulador de Examen <span className="text-emerald-600">Auxiliar de Farmacia</span> SEREMI
            </h1>
            <button onClick={handleShare} className="shrink-0 flex items-center justify-center p-3 bg-white text-slate-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all border border-slate-200 shadow-sm">
              <Share2 size={24} strokeWidth={2.5} />
            </button>
          </div>
        </header>

        <div className="w-full space-y-6">
          <article>
            <button onClick={() => router.push('/quiz/inicial')} className="w-full group rounded-[2rem] border-2 transition-all p-8 flex flex-col md:flex-row items-center gap-6 bg-white border-emerald-100 shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg">
                <BrainCircuit size={40} />
              </div>
              <div className="flex-1 text-center md:text-left z-10">
                  <h3 className="font-black text-2xl text-slate-800 leading-tight mb-2">Simulador Inicial</h3>
                  <p className="text-sm text-slate-500 mb-4">La ruta de calentamiento definitiva. 7 niveles gratuitos para dominar conceptos básicos.</p>
              </div>
            </button>
          </article>

          <article>
            {/* OJO: El onClick está en el button principal */}
            <button 
              onClick={handleProAccess} 
              disabled={isVerifying}
              className="w-full group rounded-[2rem] border-2 transition-all p-8 flex flex-col md:flex-row items-center gap-6 bg-slate-900 border-slate-800 shadow-xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              {isVerifying && (
                <div className="absolute inset-0 bg-slate-900/80 z-20 flex items-center justify-center rounded-[2rem]">
                  <Loader2 className="animate-spin text-amber-500" size={32} />
                </div>
              )}
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <div className="flex-1 text-center md:text-left z-10">
                  <h3 className="font-black text-2xl text-white leading-tight mb-2">Simulador PRO <span className="text-amber-400">SEREMI</span></h3>
                  <p className="text-sm text-slate-400 mb-4">Modo Fiscalizador. Casos complejos para aprobar a la primera.</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    Nivel Examen de Competencia <Trophy size={12} />
                  </span>
              </div>
            </button>
          </article>
        </div>

        <BannerVenta />
        
        <div className="mt-12 pt-12 border-t border-slate-200">
          <SocialContact />
        </div>
      </section>

      <footer className="p-8 text-center text-[10px] font-mono text-slate-300 uppercase tracking-widest">
        AuxiliarPro v4.0 | &lt; macz.dev /&gt;
      </footer>
    </main>
  );
}