// Ruta: app/blog/materias-examen-seremi/page.js

import Link from "next/link";
import { 
  ChevronLeft, BookOpen, Scale, Thermometer, Lock, 
  Pill, Calculator, AlertTriangle, CheckCircle2, FileText 
} from "lucide-react";

export const metadata = {
  title: "Materias del Examen SEREMI para Auxiliar de Farmacia | AuxiliarPro",
  description: "Guía completa con las 5 áreas clave que entran en el examen de competencias de la SEREMI de Salud para obtener tu certificado de Auxiliar de Farmacia en Chile.",
  keywords: "examen auxiliar de farmacia, materias seremi, decreto 466, decreto 404, decreto 405, certificación auxiliar de farmacia chile",
  openGraph: {
    title: "Materias del Examen SEREMI para Auxiliar de Farmacia",
    description: "Prepárate con la guía definitiva de las materias legales, técnicas y farmacológicas del examen de certificación.",
    type: "article",
  },
};

export default function MateriasExamenSeremiPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navegación Superior */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/blog/como-ser-auxiliar-farmacia" className="text-slate-400 hover:text-[#003366] transition-colors">
            <ChevronLeft size={24} />
          </Link>
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Volver a la Guía Principal</span>
        </div>
      </nav>

      {/* Contenido Principal */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header del Artículo */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#003366] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-blue-100">
            <FileText size={14} />
            Preparación Examen SEREMI
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-4">
            Materias que entran en el Examen de Competencias SEREMI
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            El examen para obtener el certificado de Auxiliar de Farmacia evalúa conocimientos legales, técnicos y farmacológicos fundamentales. Según el <strong>Decreto 38</strong> y el <strong>Decreto 90</strong>, la evaluación consta de un componente teórico y uno práctico.
          </p>
        </header>

        {/* Secciones de Contenido */}
        <div className="space-y-8">
          
          {/* Sección 1 */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-2xl text-[#003366] shrink-0">
                <Scale size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#003366] mb-2">1. Marco Regulatorio y Normativa Farmacéutica</h2>
                <p className="text-slate-600 mb-4">Evalúa el conocimiento de las leyes que rigen el funcionamiento de los establecimientos farmacéuticos en Chile.</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 466:</strong> Reglamento de farmacias, droguerías, almacenes y botiquines. Estructura obligatoria, rol del Director Técnico y responsabilidades del auxiliar.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 3:</strong> Sistema Nacional de Control de Productos Farmacéuticos. Registro sanitario, rotulado, folletos y conceptos como biodisponibilidad.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Ley de Fármacos (Ley 20.724):</strong> Normas sobre bioequivalencia, prohibición de incentivos y publicidad de medicamentos.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 194:</strong> Formulario Nacional de Medicamentos y políticas de uso racional.</>} />
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-700 shrink-0">
                <Thermometer size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#003366] mb-2">2. Almacenamiento y Logística (Cadena de Frío)</h2>
                <p className="text-slate-600 mb-4">Se centra en asegurar que el medicamento mantenga su eficacia y seguridad hasta llegar al paciente.</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Norma Técnica 208:</strong> Protocolos para almacenamiento y transporte, con énfasis en productos termolábiles (2°C a 8°C).</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Factores de estabilidad:</strong> Influencia de la luz, temperatura y humedad en la degradación de fármacos.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Gestión de inventarios:</strong> Manejo de fechas de vencimiento (FEFO), retiro de productos no aptos y organización del bodegaje.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 594:</strong> Condiciones sanitarias y ambientales básicas en los lugares de trabajo.</>} />
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-2xl text-red-700 shrink-0">
                <Lock size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#003366] mb-2">3. Control Legal de Medicamentos</h2>
                <p className="text-slate-600 mb-4">Manejo de sustancias con regulación estricta para evitar el uso indebido y cumplir con la fiscalización.</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 404 (Estupefacientes):</strong> Listas I y II. Regulación de la Receta Cheque y registros en libros oficiales visados.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Decreto 405 (Psicotrópicos):</strong> Listas II, III y IV. Normas para el expendio de benzodiazepinas y anoréxicos (Receta Médica Retenida).</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Libros de Control:</strong> Obligatoriedad de mantener al día los registros de inspección, fraccionamiento, reclamos y control de stock.</>} />
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700 shrink-0">
                <Pill size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#003366] mb-2">4. Farmacología Básica y Uso Racional</h2>
                <p className="text-slate-600 mb-4">El enfoque para auxiliares se centra principalmente en los productos de Venta Directa (VD) y la orientación al usuario.</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Acción Terapéutica:</strong> Conocimiento de analgésicos, AINEs (ibuprofeno, paracetamol), antihistamínicos y productos de venta libre.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Vías de Administración:</strong> Diferencias entre uso oral, sublingual, parenteral, tópico, oftálmico, entre otros.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Terminología Técnica:</strong> Glosario de términos médicos y farmacéuticos (ej: colagogo, biodisponibilidad, bioequivalencia).</>} />
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-amber-100 p-3 rounded-2xl text-amber-700 shrink-0">
                <Calculator size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#003366] mb-2">5. Operaciones Farmacéuticas y Cálculos</h2>
                <p className="text-slate-600 mb-4">El examen incluye una sección práctica o ejercicios de resolución de casos reales de farmacia.</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Cálculo de Dosis y Posología:</strong> Determinación de ml totales para jarabes pediátricos (mg/kg), cálculo de unidades para insulina o gotas oftálmicas.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Fraccionamiento de Envases:</strong> Normas para entregar la cantidad exacta de dosis prescritas y requisitos de rotulación del envase de entrega.</>} />
                  <ListItem icon={<CheckCircle2 size={18} className="text-[#28a745]" />} text={<><strong>Recetario Magistral:</strong> Diferencias entre fórmulas magistrales y preparados galénicos, y la normativa para su elaboración (DS 79).</>} />
                </ul>
              </div>
            </div>
          </section>

          {/* Nota Importante */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-black text-amber-800 text-lg mb-2">Nota Importante sobre Reprobación</h3>
                <p className="text-amber-900 font-medium leading-relaxed">
                  Si repruebas el examen de competencias, puedes repetirlo hasta en <strong>dos oportunidades</strong>, con un lapso mínimo de <strong>un año</strong> entre cada intento. Por eso, una preparación sólida con simuladores como <strong>AuxiliarPro</strong> es tu mejor estrategia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Inferior */}
          <div className="mt-12 text-center">
            <Link 
              href="/quiz" 
              className="inline-flex items-center gap-3 bg-[#003366] hover:bg-[#002244] text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1"
            >
              <BookOpen size={20} />
              Practicar con el Simulador de Examen
              <ChevronLeft className="rotate-180" size={20} />
            </Link>
            <p className="text-slate-500 text-sm mt-4 font-medium">
              Pon a prueba tus conocimientos con preguntas reales del MINSAL.
            </p>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            AuxiliarPro App | Built by &lt;macz.dev/&gt;
          </p>
        </div>
      </footer>
    </main>
  );
}

// Componente auxiliar para listas limpias
function ListItem({ icon, text }) {
  return (
    <li className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed">
      <span className="mt-1 shrink-0">{icon}</span>
      <span>{text}</span>
    </li>
  );
}