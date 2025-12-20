import Link from 'next/link';

export const metadata = {
  title: 'Examen de Competencia SEREMI 2025: Guía de Estudio y Preguntas Reales',
  description: 'Descubre los pilares fundamentales para aprobar el examen de Auxiliar de Farmacia ante la SEREMI. Legislación, cadena de frío y cálculos farmacéuticos.',
};

export default function ExamenGuiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Navegación */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Guía Examen 2025</span>
        </nav>

        <header className="mb-12">
          <p className="text-blue-600 font-bold mb-2 uppercase tracking-widest text-sm">Preparación Técnica</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud.
          </p>
        </header>

        <section className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
          <p>
            Basándonos en la normativa oficial de los Decretos 466, 404 y 405, la evaluación se estructura en tres pilares que todo aspirante debe dominar para obtener su credencial.
          </p>

          

          <h2 className="text-2xl font-bold text-slate-900 mt-10">1. Legislación Farmacéutica (El filtro principal)</h2>
          <p>
            La autoridad sanitaria busca asegurar que conozcas las reglas legales para evitar errores que comprometan la salud pública o incurran en multas.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Condiciones de Venta:</strong> Debes dominar la diferencia entre Receta Simple, Receta Retenida y Receta Cheque.</li>
            <li><strong>Vigencia de Recetas:</strong> Las recetas de productos controlados (Psicotrópicos y Estupefacientes) tienen una vigencia máxima de 30 días corridos.</li>
            <li><strong>Libros de Control:</strong> Conocimiento sobre el registro obligatorio en el libro de estupefacientes y psicotrópicos.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">2. Almacenamiento y Cadena de Frío</h2>
          <p>
            Un error en la temperatura puede inactivar medicamentos críticos como insulinas o vacunas.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Rango Óptimo:</strong> Los productos de cadena de frío deben mantenerse estrictamente entre 2°C y 8°C.</li>
            <li><strong>Gestión de Inventario:</strong> Aplicación del sistema FEFO (First Expired, First Out) para priorizar la salida de productos con vencimiento más próximo.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
          <p>
            La capacidad de calcular cuántas cajas o frascos necesita un paciente para completar su tratamiento es una pregunta fija en la evaluación.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Regla de Tres:</strong> Utilizada para convertir dosis de miligramos a mililitros en jarabes.</li>
            <li><strong>Cálculo de Duración:</strong> Determinar la cantidad total de unidades (comprimidos/gotas) según la frecuencia indicada por el médico.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-2xl my-10">
            <h3 className="text-xl font-bold text-amber-900 mb-2 italic">Pregunta de Examen Real:</h3>
            <p className="text-amber-800">
              "Si llega una receta de Clonazepam emitida hace 35 días, ¿la puede despachar?" <br />
              <strong>Respuesta:</strong> No, la vigencia legal máxima es de 30 días corridos.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">Recursos para tu Preparación</h2>
          <p>
            Para asegurar tu éxito, te recomendamos estudiar directamente el <strong>Decreto 466</strong> y complementar con nuestras guías especializadas:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="p-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Requisitos 2026</h4>
              <p className="text-sm text-slate-500">Asegúrate de tener toda la documentación antes de postular.</p>
            </Link>
            <Link href="/blog/cuanto-gana-auxiliar-farmacia-chile" className="p-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Sueldos y Bonos</h4>
              <p className="text-sm text-slate-500">Conoce el potencial económico una vez certificado.</p>
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <div className="mt-16 bg-slate-900 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">¿Quieres practicar con preguntas reales?</h2>
          <p className="text-slate-400 mb-8 text-lg relative z-10">
            Nuestro simulador gratuito incluye más de 100 preguntas basadas en exámenes SEREMI de años anteriores.
          </p>
          <Link 
            href="/quiz"
            className="relative z-10 inline-block bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40"
          >
            Ir al Simulador Gratuito
          </Link>
        </div>
      </article>
    </main>
  );
}
