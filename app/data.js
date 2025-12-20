// app/data.js

// Importación de seguridad para el simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Transcripción literal + Enlaces reparados para ruta /blog/)
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
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud[cite: 2, 3].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 6].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen</h2>
      <p>De acuerdo al Decreto Supremo N° 466, debes cumplir con el requisito principal: Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores de bodegaje, reposición y dispensación bajo supervisión[cite: 8, 10, 13].</p>
      <p>El trámite oficial se realiza en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 16].</p>
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
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 57, 58].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Es la persona que apoya al Químico Farmacéutico en atención de público, dispensación, reposición y bodegaje[cite: 61, 64, 66]. En Chile, debe tener enseñanza media completa, 1 año de experiencia y aprobar el examen SEREMI según el Decreto Supremo N° 466[cite: 73, 74, 76].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que estudia una carrera formal de 2 a 3 años en institutos o centros de formación técnica[cite: 78, 80]. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 92].</p>
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
      <p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), estos son los 3 pilares fundamentales: Legislación Farmacéutica, Almacenamiento y Matemáticas Farmacéuticas[cite: 125, 126].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica</h2>
      <p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días) y los roles exclusivos del Químico Farmacéutico[cite: 132, 133].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: Los refrigeradores deben mantenerse estrictamente entre $2^{\circ}C$ y $8^{\circ}C$[cite: 141].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>3. Matemáticas Farmacéuticas</h2>
      <p>Debes manejar la "Regla de Tres" a la perfección para cálculos de dosis y duración de tratamientos[cite: 145].</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466-farmacias-chile',
    title: "¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer",
    excerpt: "En esta columna de investigación, desglosamos el Reglamento de Farmacias que rige en Chile.",
    date: '19 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <p>El Decreto Supremo N° 466 define que las farmacias son centros de salud y establece las condiciones para su funcionamiento[cite: 155].</p>
      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Habilitación profesional</h2>
      <p>Según el Artículo 71, para rendir el examen SEREMI se debe acreditar ser mayor de 18 años, tener enseñanza media y un año de práctica[cite: 22, 24, 27].</p>
      <div class='mt-8 border-t pt-4 bg-slate-50 p-6 rounded-xl text-center'>
        <p>Puedes descargar este decreto en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
      </div>
    `
  },
  {
    id: 'sueldos-2026',
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Guía detallada sobre la realidad salarial de los auxiliares de farmacia en Chile para 2026. Analizamos sueldos base y bonos por cadena.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026',
    content: `
      <div class='bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl'>
        <p class='text-sm text-blue-800 leading-relaxed italic'>
          <strong>[AVISO DE TRANSPARENCIA]</strong><br>
          Esta información es referencial basada en ofertas laborales y testimonios. En Chile, el sueldo líquido depende de contratos individuales y cumplimiento de metas.
        </p>
      </div>

      <p>Entrar al mundo farmacéutico genera una duda inmediata: ¿Es rentable ser auxiliar de farmacia? El sueldo líquido es el resultado de sueldo base, comisiones y bonos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900 leading-tight'>¿CÓMO SE CONSTRUYE EL SUELDO?</h2>
      <ul class='list-disc pl-8 my-4 space-y-3 text-slate-700'>
        <li><strong>Sueldo Base:</strong> Ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión V.S.:</strong> Incentivo variable por venta de productos sugeridos.</li>
        <li><strong>Bono de Cumplimiento:</strong> Gratificación por completar metas de la sucursal.</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-6 text-slate-900 leading-tight'>COMPARATIVA SALARIAL (LÍQUIDO ESTIMADO)</h2>
      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr><th class='px-6 py-4 font-bold text-slate-900'>Cadena</th><th class='px-6 py-4 font-bold text-slate-900'>Rango Estimado</th></tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr><td class='px-6 py-4'>Cruz Verde</td><td class='px-6 py-4 font-bold text-green-700'>\$650.000 - \$880.000</td></tr>
            <tr><td class='px-6 py-4'>Salcobrand</td><td class='px-6 py-4 font-bold text-green-700'>\$630.000 - \$820.000</td></tr>
            <tr><td class='px-6 py-4'>Farmacias Ahumada</td><td class='px-6 py-4 font-bold text-green-700'>\$610.000 - \$790.000</td></tr>
            <tr><td class='px-6 py-4'>Independientes</td><td class='px-6 py-4 font-bold text-green-700'>\$550.000 - \$700.000</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>FACTORES QUE AUMENTAN TUS INGRESOS</h2>
      <ul class='list-disc pl-8 my-6 space-y-4 text-slate-700'>
        <li><strong>Asignación de Zona:</strong> Bonos por trabajar en zonas extremas.</li>
        <li><strong>Certificación:</strong> Revisa los <a href='/blog/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil.</li>
        <li><strong>Retail vs Clínica:</strong> Entender la <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</li>
      </ul>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-8 text-blue-100 text-lg'>El primer paso es aprobar tu examen ante la autoridad sanitaria.</p>
        <a 
          href='/blog/examen-competencia-seremi-2025'
          class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105'
        >
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Enriquecidas con datos técnicos)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite es digital en <strong>seremienlinea.minsal.cl</strong>[cite: 16].'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Para el Simulador)
export const LEVELS = QUIZ_LEVELS;
