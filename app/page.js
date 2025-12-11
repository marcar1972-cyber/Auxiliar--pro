import { Wrench, HardHat } from "lucide-react"; // Iconos de construcción

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-aux-light text-center relative overflow-hidden">
      
      {/* Fondo Decorativo sutil */}
      <div className="absolute inset-0 watermark-bg opacity-20 pointer-events-none"></div>

      <div className="z-10 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full">
        
        {/* Ícono animado */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-full animate-bounce">
            <Wrench className="w-12 h-12 text-aux-green" />
          </div>
        </div>

        {/* Marca */}
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">
          AuxiliarPro Chile
        </h2>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-4xl font-black text-aux-dark mb-4 leading-tight">
          Estamos mejorando <br/>
          <span className="text-aux-green">tu plataforma</span>
        </h1>

        {/* Mensaje Explicativo */}
        <p className="text-slate-600 mb-8 text-lg">
          Estamos actualizando nuestros servidores y contenidos para el <strong>Proceso de Certificación 2026</strong>.
        </p>

        {/* Caja de Estado */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </div>
            <span className="font-mono text-sm font-medium text-slate-700">Estado: Actualizando...</span>
        </div>

        <p className="text-xs text-slate-400 mt-8">
          Volvemos en breve. Gracias por tu paciencia, colega.
        </p>

      </div>
    </main>
  );
}
