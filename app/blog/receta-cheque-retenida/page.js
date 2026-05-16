import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Receta Cheque vs Retenida: Diferencias para el Examen SEREMI 2026",
  description: "Guía técnica definitiva sobre los Decretos 404 y 405. Aprende vigencias, registros obligatorios y normativas de control en Chile.",
};

export default function RecetaChequeRetenidaPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 bg-white text-slate-800 font-sans">
      {/* Navegación de regreso al Pilar */}
      <Link href="/preguntas-examen-seremi-farmacologia" className="text-blue-600 hover:underline text-sm font-bold flex items-center mb-8">
        ← Volver a Guía Examen SEREMI
      </Link>

      <header className="mb-12 border-b border-slate-100 pb-8">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-4">
          Control de Recetas: Decretos 404 y 405
        </h1>
        <p className="text-xl text-slate-500 italic">
          "La ley no se interpreta en el mesón, se cumple". Guía de cumplimiento técnico para Auxiliares.
        </p>
      </header>

      <section className="space-y-12">
        {/* Bloque Decreto 404: Estupefacientes */}
        <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-emerald-500 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            Decreto 404: Reglamento de Estupefacientes
          </h2>
          <p className="mb-4 text-slate-600">Regula sustancias de las Listas I y II (producen dependencia grave). Ejemplo: Morfina, Codeína, Fentanilo.</p>
          <ul className="list-disc pl-6 space-y-3 text-slate-700">
            <li><strong>Receta Cheque:</strong> Obligatoria para Lista I. Formulario oficial, foliado y en triplicado.</li>
            <li><strong>Vigencia de Despacho:</strong> Hasta 30 días corridos desde la fecha de su extensión.</li>
            <li><strong>Cantidad Máxima:</strong> No puede exceder la dosis necesaria para 30 días de tratamiento.</li>
            <li><strong>Registro:</strong> Ingreso inmediato en el Libro de Control de Estupefacientes.</li>
          </ul>
        </div>

        {/* Bloque Decreto 405: Psicotrópicos */}
        <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-blue-500 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            Decreto 405: Reglamento de Psicotrópicos
          </h2>
          <p className="mb-4 text-slate-600">Regula sustancias que actúan sobre el SNC (Listas II, III y IV). Ejemplo: Alprazolam, Diazepam, Fenobarbital.</p>
          <ul className="list-disc pl-6 space-y-3 text-slate-700">
            <li><strong>Condición de Venta:</strong> Lista II y III requieren Receta Cheque. Lista IV requiere Receta Retenida con control de stock.</li>
            <li><strong>Vigencia:</strong> 30 días corridos desde su extensión.</li>
            <li><strong>Almacenamiento:</strong> Deben guardarse en un área especial (mueble o caja fuerte) bajo llave, bajo responsabilidad del Q.F.</li>
            <li><strong>Registro:</strong> Control obligatorio en el Libro de Productos Psicotrópicos.</li>
          </ul>
        </div>

        {/* Importante: Nota sobre Antibióticos (Corregida) */}
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
          <h3 className="text-amber-800 font-bold flex items-center gap-2 mb-2">
            ⚠️ Manejo de Antibióticos en el Mesón
          </h3>
          <p className="text-sm text-amber-900 leading-relaxed">
            Es un error común creer que todos los antibióticos se retienen. En la práctica, la mayoría son de <strong>Receta Simple</strong> (se despachan y se devuelven). Sin embargo, ciertos grupos (como los de la Res. 1333/87) exigen <strong>Receta Retenida</strong>. Como auxiliar, tu regla de oro es <strong>verificar siempre la leyenda en la caja del medicamento</strong> para informar correctamente al paciente.
          </p>
        </div>

        {/* Tabla Comparativa de Auditoría Examen */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-6 text-center text-slate-900 uppercase tracking-widest">Matriz de Cumplimiento Técnico</h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-widest font-mono">
                <tr>
                  <th className="p-4 border-r border-slate-700">Variable</th>
                  <th className="p-4 border-r border-slate-700">Receta Cheque</th>
                  <th className="p-4 font-bold">Receta Retenida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-sm">
                <tr>
                  <td className="p-4 font-bold text-slate-500 bg-slate-50">Control Legal</td>
                  <td className="p-4">Estupefacientes (L-I) y Psicotrópicos (L-II y III)</td>
                  <td className="p-4">Psicotrópicos (L-IV) y Antibióticos seleccionados</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-500 bg-slate-50">Resguardo en Farmacia</td>
                  <td className="p-4">Se retiene original y copia</td>
                  <td className="p-4">Se retiene original (archivo x 1 año mínimo)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-500 bg-slate-50">Identificación Paciente</td>
                  <td className="p-4">Nombre, RUT, Domicilio y Edad (Obligatorio)</td>
                  <td className="p-4">Nombre, RUT y Domicilio (Obligatorio)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Estratégico AuxiliarPro - LINK CORREGIDO A /quiz */}
      <footer className="mt-20 p-10 bg-blue-600 rounded-[2.5rem] text-center text-white shadow-2xl shadow-blue-200">
        <h3 className="text-3xl font-black mb-4 italic">¿Dudas con la Ley de Fármacos?</h3>
        <p className="mb-8 text-blue-100 text-lg">
          No dejes tu examen al azar. Entrena con el banco de preguntas auditado según los Decretos 466, 404 y 405.
        </p>
        <Link 
          href="/quiz" 
          className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all inline-block shadow-lg"
        >
          Acceder al Simulador SEREMI
        </Link>
        <p className="mt-8 text-[10px] opacity-50 font-mono tracking-widest">
          ESTRATEGIA MACZDEV // <span className="font-bold">&lt; macz.dev /&gt;</span>
        </p>
      </footer>
    </article>
  );
}