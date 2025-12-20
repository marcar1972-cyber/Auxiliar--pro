// app/data.js

// Importación de seguridad de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Contenido Protegido + Actualización de Decreto 466)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'requisitos-auxiliar-farmacia-chile-2026',
    title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
    excerpt: 'Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.',
    date: '15 Dic 2025',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026',
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud.</p>
      <p>Aquí te lo explico simple, claro y sin enredos.</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 5, 6].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      [cite_start]<p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal[cite: 7, 8]:</p>
      <p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class='list-disc pl-8 my-4'>
        [cite_start]<li>Bodegaje [cite: 11]</li>
        [cite_start]<li>Reposición de medicamentos [cite: 12]</li>
        [cite_start]<li>• Dispensación bajo supervisión [cite: 13]</li>
        [cite_start]<li>• Manejo de productos farmacéuticos [cite: 14]</li>
      </ul>
      [cite_start]<p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento[cite: 15]. [cite_start]El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 16, 17].</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      [cite_start]<p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales[cite: 21]:</p>
      <ul class='list-none space-y-4 my-4'>
        [cite_start]<li><strong>✅ 1. Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad[cite: 22, 23].</li>
        [cite_start]<li><strong>✅ 2. Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada[cite: 24, 25].</li>
        [cite_start]<li><strong>✅ 3. Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico[cite: 26, 27].</li>
        [cite_start]<li><strong>✅ 4. Rendir y aprobar el examen:</strong> Evalúa conocimientos en farmacología, recetas, cadena de frío y legislación [cite: 29-36].</li>
      </ul>
    `
  },
  {
    id: 2,
    slug: 'diferencia-auxiliar-tecnico-farmacia',
    title: 'Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile',
    excerpt: '(Explicado Fácil) Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta.',
    date: '14 Dic 2025',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico',
    content: `
      <p class='italic mb-6'>(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? [cite_start]Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales [cite: 55-58].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>Apoya al Químico Farmacéutico en atención, dispensación, reposición y stock [cite: 60-71]. [cite_start]No necesita estudiar en instituto, pero debe tener enseñanza media, 1 año de experiencia y aprobar el examen SEREMI según el Decreto Supremo N° 466 [cite: 72-76].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      [cite_start]<p>Es un profesional que sí estudia una carrera formal de 2 a 3 años con malla académica y título técnico [cite: 77-81]. [cite_start]Sus funciones incluyen preparación de medicamentos, gestión de inventarios y procesos técnicos más complejos [cite: 82-91]. [cite_start]El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 92].</p>
    `
  },
  {
    id: 3,
    slug: 'examen-competencia-seremi-2025',
    title: 'Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?',
    excerpt: 'Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional.',
    date: '18 Dic 2025',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025',
    content: `
      [cite_start]<p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud[cite: 124].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      [cite_start]<p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), los libros de control y los decretos 404 y 405[cite: 131, 132, 137].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: Los refrigeradores deben mantenerse estrictamente entre 2°C y 8°C. [cite_start]Debes conocer el protocolo de quiebre de cadena de frío y el sistema FEFO [cite: 141-143].</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas</h2>
      [cite_start]<p>Uso de la Regla de Tres para cálculo de dosis y duración de tratamientos [cite: 144-150].</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Descubre por qué el Decreto 466 es la normativa fundamental para las farmacias en Chile. Conoce los tipos de establecimientos, los requisitos para auxiliares y las reglas de expendio.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <div class="blog-content">
        <p>El <strong>Decreto 466</strong> es el reglamento fundamental que establece las condiciones sanitarias para la instalación, funcionamiento y fiscalización de los establecimientos farmacéuticos en Chile. Su propósito es asegurar que la distribución, preparación y venta de medicamentos se realicen bajo estrictos estándares de calidad.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">1. Tipos de Establecimientos Farmacéuticos</h2>
        <p>La normativa clasifica los lugares de expendio según sus funciones y nivel de complejidad:</p>
        <ul class="list-disc ml-6 mb-4 text-slate-700">
          <li><strong>Farmacia:</strong> Es el centro de salud más completo. Realiza venta de productos, preparación de recetas magistrales y fraccionamiento de envases.</li>
          <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico de Farmacia. Puede vender medicamentos de venta directa y un listado específico de medicamentos con receta, pero tiene prohibido realizar fórmulas magistrales.</li>
          <li><strong>Droguería:</strong> Se dedica a la importación y distribución mayorista. No vende directamente al público general.</li>
          <li><strong>Botiquín:</strong> Destinado al uso interno de instituciones como clínicas, campamentos mineros o navíos.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-3">2. El Personal y sus Responsabilidades</h2>
        <p>Todo establecimiento debe funcionar bajo un <strong>Director Técnico (Químico Farmacéutico)</strong>, quien es el responsable legal de la calidad del servicio. Por su parte, para obtener la autorización sanitaria como <strong>Auxiliar de Farmacia</strong>, la ley exige:</p>
        <ul class="list-disc ml-6 mb-4 text-slate-700">
          <li>Haber rendido 4° año de enseñanza media.</li>
          <li>Acreditar al menos 1 año de práctica laboral en farmacia (bodegaje y reposición).</li>
          <li>Rendir y aprobar un examen de competencia ante la SEREMI de Salud.</li>
        </ul>
        <p>Puedes profundizar en estos puntos en nuestra guía de <a href="/requisitos-auxiliar-farmacia-chile-2026" class="text-blue-600 underline font-bold">REQUISITOS LEGALES</a>.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">3. Expendio, Recetas y Bioequivalencia</h2>
        <p>El expendio se rige por la condición de venta aprobada en el registro sanitario (Venta Directa, Receta Simple, Retenida o Receta Cheque). Un punto clave es la <strong>Bioequivalencia</strong>: la farmacia tiene la obligación legal de informar al paciente sobre alternativas bioequivalentes certificadas antes de finalizar la transacción.</p>
        <p>Para entender mejor cómo varían estas funciones en la práctica, revisa la <a href="/diferencia-auxiliar-tecnico-farmacia" class="text-blue-600 underline font-bold">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a>.</p>

        <div class="mt-10 p-8 bg-blue-600 rounded-3xl text-center shadow-xl">
          <h3 class="text-2xl font-bold mb-3 text-white">¿Estás estudiando para tu certificación?</h3>
          <p class="mb-6 text-blue-100 text-lg">Dominar el Decreto 466 es esencial para aprobar tu examen ante la SEREMI.</p>
          <a href="/examen-competencia-seremi-2025" class="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
            Ver GUÍA DEL EXAMEN SEREMI 2025
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'sueldos-2026',
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Guía detallada sobre la realidad salarial de los auxiliares de farmacia en Chile para 2026. Analizamos sueldos base, comisiones y bonos.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026',
    content: `
      <div class='bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl'>
        <p class='text-sm text-blue-800 leading-relaxed italic'>
          <strong>[AVISO DE TRANSPARENCIA]</strong><br>
          Esta información es el resultado de una investigación independiente basada en ofertas laborales vigentes y testimonios de trabajadores. En Chile, el sueldo líquido depende de contratos individuales y cumplimiento de metas.
        </p>
      </div>

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>¿CÓMO SE CONSTRUYE EL SUELDO?</h2>
      <ul class='list-disc pl-8 my-4 space-y-3 text-slate-700'>
        <li><strong>Sueldo Base:</strong> Ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión V.S.:</strong> Incentivo variable por la venta de productos específicos.</li>
        <li><strong>Bono de Cumplimiento:</strong> Gratificación por metas de la sucursal.</li>
      </ul>

      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr><th class='px-6 py-4 font-bold text-slate-900'>Cadena</th><th class='px-6 py-4 font-bold text-slate-900'>Líquido Estimado</th></tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr><td class='px-6 py-4'>Cruz Verde</td><td class='px-6 py-4 font-bold text-green-700'>\$650.000 - \$880.000</td></tr>
            <tr><td class='px-6 py-4'>Salcobrand</td><td class='px-6 py-4 font-bold text-green-700'>\$630.000 - \$820.000</td></tr>
            <tr><td class='px-6 py-4'>Farmacias Ahumada</td><td class='px-6 py-4 font-bold text-green-700'>\$610.000 - \$790.000</td></tr>
          </tbody>
        </table>
      </div>

      <p>Entender la <a href="/diferencia-auxiliar-tecnico-farmacia" class="text-blue-600 underline font-bold">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</p>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Contenido Técnico Minsal)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite se realiza en el portal <strong>seremienlinea.minsal.cl</strong> ingresando con tu Clave Única.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  },
  {
    q: '¿Qué documentos necesito subir?',
    a: 'Debes adjuntar: Certificado de enseñanza media completa, certificado de desempeño laboral (mínimo 1 año) firmado por el Q.F. y foto carnet.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Mantenimiento del Simulador)
export const LEVELS = QUIZ_LEVELS;
