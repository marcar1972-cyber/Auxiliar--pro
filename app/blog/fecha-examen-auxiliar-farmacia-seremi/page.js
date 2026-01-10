import Link from "next/link";
import { Calendar, Clock, AlertCircle, BookOpen, CheckCircle } from "lucide-react";

// 🟢 1. METADATA OPTIMIZADA (Solución Reporte SEO)
export const metadata = {
  // Define la URL base para que el canonical se construya correctamente
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  title: "¿Cuándo es el Examen de Auxiliar de Farmacia? Fechas y Proceso SEREMI",
  description: "No existe un calendario fijo. Descubre cómo obtener tu fecha de examen tras subir tus documentos a SEREMI en Línea y qué requisitos necesitas.",
  keywords: ["fecha examen auxiliar farmacia", "seremi en linea", "calendario seremi salud", "tramite auxiliar farmacia"],
  authors: [{ name: "AuxiliarPro" }],
  
  // Canonical individual para evitar contenido duplicado
  alternates: {
    canonical: './',
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 text-slate-700">
      
      {/* HEADER DEL ARTÍCULO */}
      <header className="mb-10 text-center">
        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Trámites y Legal
        </span>
        {/* H1 Coincidente con Title (Crucial para SEO) */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-4 leading-tight">
          ¿Cuándo es el Examen de Auxiliar de Farmacia? Fechas y Proceso SEREMI
        </h1>
        <p className="text-slate-500 text-sm">
          Lectura de 4 minutos • Actualizado 2026
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="prose prose-slate prose-lg mx-auto">
        <p className="lead text-xl text-slate-600 mb-8">
          Una de las preguntas que más recibimos en la comunidad de <strong>AuxiliarPro</strong> es: <em>"¿Cuándo es el próximo examen?"</em>. La respuesta corta es que <strong>no existe un calendario nacional fijo</strong>. Aquí te explicamos cómo funciona realmente.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2">
          <Calendar className="text-emerald-500" size={24} />
          1. El examen se activa con tu postulación
        </h2>
        <p>
          No puedes "ver" una fecha antes de iniciar el trámite. El proceso es individual y regional. Debes realizarlo a través del portal oficial de <a href="https://seremienlinea.minsal.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">SEREMI en Línea</a> siguiendo este orden:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Recopilación:</strong> Antecedentes laborales y certificado de estudios.</li>
          <li><strong>Carga de Documentos:</strong> Subir los archivos al portal del MINSAL.</li>
          <li><strong>Pago:</strong> Cancelar el arancel del trámite.</li>
          <li><strong>Asignación:</strong> Solo tras la validación, recibes la citación por correo.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2">
          <Clock className="text-emerald-500" size={24} />
          2. ¿Cuánto tarda la SEREMI en dar fecha?
        </h2>
        <p>
          Depende de la carga de trabajo de tu región. Según usuarios de nuestro <Link href="/simulador" className="text-blue-600 font-bold hover:underline">Simulador de Examen</Link>:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-emerald-600">Rápido:</span> 
              Postulas el fin de semana y te citan el lunes siguiente.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-slate-600">Promedio:</span> 
              Entre 2 a 4 semanas de espera.
            </li>
          </ul>
        </div>
        <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800 border border-yellow-100">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <p><strong>Consejo Pro:</strong> Revisa siempre tu carpeta de SPAM. Perder el correo de citación implica perder el dinero del arancel.</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          3. Requisitos indispensables
        </h2>
        <p>
          La autoridad sanitaria verificará que cumplas con el <a href="https://www.bcn.cl/leychile/navegar?idNorma=8356" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Decreto Supremo 466</a>, incluyendo:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Experiencia acreditable en farmacia.</li>
          <li>Certificado de aptitud firmado por un <strong>Químico Farmacéutico (QF)</strong>.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          ¿Qué estudiar mientras esperas?
        </h2>
        <p className="mb-4">
          La fecha puede llegar con solo una semana de aviso. Domina estos temas disponibles en nuestra <Link href="/biblioteca" className="text-blue-600 font-bold hover:underline">Biblioteca Legal</Link>:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          <li className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
            <strong>❄️ Cadena de Frío:</strong> Rangos de 2°C a 8°C.
          </li>
          <li className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
            <strong>💊 Recetas:</strong> Diferencia entre Cheque y Retenida.
          </li>
        </ul>

        {/* CONCLUSIÓN / CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-4">¿Quieres asegurar tu aprobación?</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            El camino lógico para el éxito es: estudia primero en nuestra Biblioteca y luego ponte a prueba.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/biblioteca" 
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition-all"
            >
              <BookOpen size={20} />
              Ir a Biblioteca
            </Link>
            <Link 
              href="/simulador" 
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1"
            >
              <CheckCircle size={20} />
              Ir al Simulador
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
