import React from 'react';
import BannerVenta from '../components/BannerVenta';

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Contenido Principal del Blog (Los Artículos o el Index) */}
      <div className="w-full">
        {children}
      </div>

      {/* 2. Sección Global de Conversión (Aparece en todas las páginas de /blog) */}
      <section className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 tracking-tight">
              ¿Listo para dar el siguiente paso en tu carrera?
            </h2>
            <p className="text-slate-600 text-lg">
              Únete a los futuros profesionales que ya se están preparando con nuestras herramientas avanzadas.
            </p>
          </div>
          
          {/* Inserción del componente de ventas */}
          <BannerVenta colorTheme="indigo" />
        </div>
      </section>
      
    </div>
  );
}