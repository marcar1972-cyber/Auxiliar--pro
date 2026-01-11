import Link from 'next/link';
import { BookOpen, CheckCircle, Download, MonitorPlay, AlertTriangle, FileText, Info } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  title: 'Curso de Auxiliar de Farmacia Gratis en Chile: Guía de Autoaprendizaje 2026',
  description: '¿Buscas un curso gratuito? Ahorra dinero estudiando por tu cuenta para el examen SEREMI. Temario: DS 90 (Auxiliar Paramédico), DS 466 y simulador.',
  keywords: ["curso auxiliar farmacia gratis", "decreto 90 auxiliar farmacia", "estudiar farmacia gratis chile", "temario examen seremi", "auxiliar paramedico de farmacia"],
  authors: [{ name: "AuxiliarPro" }],
  alternates: {
    canonical: './', 
  },
};

export default function CursoGratisPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 flex items-center hover:text-blue-800 transition-colors">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Guía de Estudio
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
            Curso de Auxiliar de Farmacia Gratis en Chile: Guía de Autoaprendizaje
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "No necesitas endeudarte para acreditarte. Con disciplina, los Decretos 90 y 466, y nuestro simulador, puedes preparar tu examen SEREMI a costo cero."
          </p>
        </header>

        <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
          <section>
            <p>
              Una de las búsquedas más frecuentes en Google es <strong>"curso de auxiliar de farmacia gratis en Chile"</strong>. La realidad es que muchos institutos cobran aranceles elevados por enseñar contenidos que son de acceso público. Si tienes experiencia práctica y buscas la certificación, la autoformación es una vía 100% legal y válida para rendir el examen de competencia.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Paso 1: Descarga la Normativa (Tu "Libro" de Estudio)</h2>
          <p>
            El examen de la SEREMI no se basa en libros de texto universitarios, sino en la Ley Chilena. Tu primer paso es obtener los documentos oficiales. No pagues por resúmenes mal hechos; lee la fuente original que regula tu profesión:
          </p>
          
          <div className="grid gap-6 md:grid-cols-1 not-prose my-6">
            {/* DECRETO 90 - DESTACADO */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong className="block text-slate-900 text-xl leading-tight mb-2">Decreto Supremo N° 90</strong>
                  <p className="text-sm text-slate-700 mb-4">
                    <strong>El Reglamento de tu Profesión.</strong> Este es el decreto clave que permite que personas sin título universitario puedan rendir un examen de competencia ante la SEREMI.
                  </p>
                  
                  {/* ACLARACIÓN TÉCNICA PARAMÉDICO */}
                  <div className="bg-white p-4 rounded-xl border border-blue-100 flex gap-3 text-sm text-slate-600 italic">
                    <Info className="text-blue-500 shrink-0" size={20} />
                    <p>
                      <strong>Nota Técnica:</strong> Aunque popularmente nos llamamos "Auxiliares de Farmacia", el Decreto 90 nos clasifica legalmente como <strong>"Auxiliares Paramédicos de Farmacia"</strong>. No porque trabajemos en ambulancias, sino porque somos personal sanitario de apoyo al Químico Farmacéutico, habilitados para ejecutar procedimientos técnicos como la dispensación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                    <FileText className="text-blue-600 shrink-0" />
                    <strong className="block text-slate-900 text-lg leading-tight">Decreto Supremo N° 466</strong>
                </div>
                <p className="text-sm text-slate-600">
                    <strong>Reglamento de Farmacias.</strong> Regula la infraestructura del local, condiciones de almacenamiento (bodega), temperatura y funcionamiento general del establecimiento donde trabajarás.
                </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                    <FileText className="text-blue-600 shrink-0" />
                    <strong className="block text-slate-900 text-lg leading-tight">Decreto Supremo N° 3</strong>
                </div>
                <p className="text-sm text-slate-600">
                    <strong>Control de Productos.</strong> Base legal para entender el Registro Sanitario (ISP), qué es un medicamento genérico y la bioequivalencia.
                </p>
                </div>
            </div>
          </div>

          <p>
            Todos estos textos están disponibles para descarga en nuestra <Link href="/biblioteca" className="text-blue-600 font-bold underline">BIBLIOTECA LEGAL GRATUITA</Link>.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Paso 2: Domina la Farmacología Básica</h2>
          <p>
            No necesitas ser químico para entender lo esencial. Enfoca tu estudio gratuito en estos pilares que siempre preguntan:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Bioequivalencia (Decreto 3):</strong> Diferencia legal entre el innovador, el genérico y el bioequivalente (Franja amarilla).</li>
            <li><strong>Formas Farmacéuticas:</strong> Diferencia entre comprimidos, cápsulas, jarabes y supositorios. Importante para saber qué se puede fraccionar.</li>
            <li><strong>Condición de Venta:</strong> Qué se vende con receta simple, retenida o cheque.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Paso 3: Autoevaluación Constante</h2>
          <p>
            La teoría no sirve de nada si no practicas el formato de selección múltiple. Aquí es donde muchas "escuelas" fallan: te dan teoría pero no práctica real.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl my-8">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <MonitorPlay /> Tu Herramienta Gratuita
            </h3>
            <p className="text-emerald-700 mb-6">
              Hemos desarrollado un simulador que imita las condiciones del examen real. Sin costos ocultos, sin suscripciones. Solo entra y practica.
            </p>
            <Link 
              href="/quiz"
              className="inline-block bg-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition-all shadow-lg"
            >
              IR AL SIMULADOR GRATIS
            </Link>
          </div>

          <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-2xl border border-amber-100 text-amber-900 text-base">
            <AlertTriangle className="shrink-0 mt-1" />
            <div>
              <strong>Advertencia Legal:</strong> Estudiar gratis por tu cuenta es válido para *preparar* el examen. Sin embargo, para inscribirte en la SEREMI necesitarás acreditar tu experiencia laboral o un certificado de práctica. El "estudio" no reemplaza el requisito de "experiencia" o "práctica" exigido por el Decreto 90.
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 mt-12">Conclusión</h2>
          <p>
            Si tienes disciplina, los recursos están ahí. No pagues por lo que puedes leer gratis en el Diario Oficial. Invierte tu tiempo en leer el <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 font-bold underline">DECRETO 466</Link> y practicar en nuestro simulador. ¡El éxito depende de tu esfuerzo, no de tu billetera!
          </p>

        </div>
      </article>
    </main>
  );
}
