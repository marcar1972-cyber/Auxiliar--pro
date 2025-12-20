import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-slate-900 p-8">
      <div className="max-w-3xl mx-auto">
        {/* CAJA DE PRUEBA: Si ves esto en rojo, el archivo está cargando */}
        <div className="bg-red-500 text-white p-2 mb-4 text-center font-bold">
          DEBUG: EL ARCHIVO PAGE.JS ESTÁ CARGANDO CORRECTAMENTE
        </div>

        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold underline">← Volver</Link>
        </nav>

        <h1 className="text-4xl font-black mb-8 leading-tight">
          ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
        </h1>

        <div className="space-y-6 text-xl leading-relaxed">
          <p className="bg-blue-50 p-4 border-l-4 border-blue-500 italic text-sm">
            Nota: Información basada en proyecciones de mercado 2026.
          </p>

          <p>
            El sueldo de un auxiliar en Chile se compone de un sueldo base (mínimo legal) más comisiones por ventas sugeridas.
          </p>

          <h2 className="text-2xl font-bold mt-12 border-b-2 border-slate-100 pb-2 text-slate-800">
            Sueldos Estimados por Cadena
          </h2>

          <div className="grid gap-4 mt-4">
            <div className="flex justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-bold">Cruz Verde</span>
              <span className="text-green-600 font-black">$650.000 - $880.000</span>
            </div>
            <div className="flex justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-bold">Salcobrand</span>
              <span className="text-green-600 font-black">$630.000 - $820.000</span>
            </div>
            <div className="flex justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-bold">Ahumada</span>
              <span className="text-green-600 font-black">$610.000 - $790.000</span>
            </div>
          </div>

          <p className="mt-8 text-slate-600">
            Para acceder a estos montos, es fundamental contar con la credencial de la SEREMI. 
            Puedes ver los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline">requisitos aquí</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
