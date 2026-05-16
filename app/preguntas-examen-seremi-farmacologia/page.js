"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function FarmacologiaHub() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 text-[#003366] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen size={32} />
        </div>
        <h1 className="text-2xl font-black text-[#003366] mb-4">
          Hub de Farmacología en Construcción
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Estamos preparando el mejor material sobre farmacología para tu examen SEREMI. Muy pronto estará disponible.
        </p>
        <Link href="/campus" className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#002244] transition-colors">
          <ArrowLeft size={18} /> Volver al Campus
        </Link>
      </div>
    </main>
  );
}