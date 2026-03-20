"use client";

import React, { useState } from 'react';

export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 md:p-12 shadow-sm text-center relative overflow-hidden">
        
        {/* Decoración de fondo simple */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 blur-xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4 tracking-tight">
            Asegura tu lugar en la versión PRO
          </h2>
          <p className="text-indigo-700 max-w-2xl mx-auto text-lg mb-8 font-medium">
            Déjanos tu correo para ser el primero en probar el Vademécum, el Asistente IA y los niveles avanzados. Te avisaremos antes que a nadie con un precio especial de lanzamiento.
          </p>

          {enviado ? (
            <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 p-6 rounded-2xl font-bold text-lg animate-fade-in">
              Excelente. Ya estás en la lista. Te escribiremos muy pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 text-left">
              <div>
                <label className="block text-sm font-semibold text-indigo-900 mb-1 ml-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Ej. Camila" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm text-slate-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-indigo-900 mb-1 ml-1">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="tu@correo.com" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm text-slate-800"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-md mt-2 text-lg"
              >
                UNIRME A LA LISTA
              </button>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
}