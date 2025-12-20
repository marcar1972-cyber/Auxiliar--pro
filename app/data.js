// app/data.js

// Importación protegida de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Consolidados para evitar conflictos de arquitectura)
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
      [cite_start]<p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile[cite: 2]. [cite_start]Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud[cite: 3].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 6].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen</h2>
      [cite_start]<p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal: Mínimo 1 año de experiencia laboral comprobable en farmacia[cite: 8, 10].</p>
      <ul class='list-disc pl-8 my-4'>
        [cite_start]<li>Bodegaje [cite: 11]</li>
        [cite_start]<li>Reposición de medicamentos [cite: 12]</li>
        [cite_start]<li>Dispensación bajo supervisión [cite: 13]</li>
        [cite_start]<li>Manejo de productos farmacéuticos [cite: 14]</li>
      </ul>
      [cite_start]<p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico[cite: 15]. [cite_start]El trámite se realiza en SEREMI en Línea[cite: 16].</p>
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
      [cite_start]<p class='italic mb-6'>(Explicado Fácil) [cite: 56]</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? [cite_start]Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 58].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>Apoya al Químico Farmacéutico en atención de público, dispensación, reposición y stock [cite: 61, 64-66, 69]. [cite_start]En Chile, debe tener enseñanza media completa, 1 año de experiencia y aprobar el examen SEREMI según el Decreto Supremo N° 466 [cite: 73-76].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      [cite_start]<p>Es un profesional que estudia una carrera formal de 2 a 3 años en institutos o centros de formación técnica [cite: 77-80]. [cite_start]Su título lo habilita directamente sin rendir examen SEREMI[cite: 92].</p>
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
      [cite_start]<p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), los libros de control y los roles exclusivos del Químico Farmacéutico[cite: 131, 132, 137].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      [cite_start]<p>Los refrigeradores deben mantenerse estrictamente entre 2°C y 8°C[cite: 141]. [cite_start]Debes conocer el protocolo de quiebre de cadena de frío y el sistema FEFO[cite: 142, 143].</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
      [cite_start]<p>Uso de la Regla de Tres para cálculo de dosis y duración de tratamientos[cite: 145, 147].</p>
      [cite_start]<p class='mt-4 font-bold'>Lee directamente el Decreto 466; es la fuente de la verdad[cite: 155, 156].</p>
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
      [cite_start]<p>El Decreto Supremo N° 466 es la normativa fundamental que regula el funcionamiento de las farmacias en Chile[cite: 155].</p>
      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Habilitación profesional</h2>
      [cite_start]<p>Según el Artículo 71, para rendir el examen SEREMI se debe acreditar un año de práctica certificado por el Director Técnico[cite: 15]. Puedes estudiar este decreto en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
    `
  },
  {
    id: 5,
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Guía detallada sobre la realidad salarial de los auxiliares de farmacia en Chile para 2026. Analizamos sueldos base y comisiones.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026',
    content: `
      <div class='bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl'>
        <p class='text-sm text-blue-800 leading-relaxed italic'>
          <strong>[AVISO DE TRANSPARENCIA]</strong><br>
          Esta información es el resultado de una investigación independiente basada en ofertas laborales y testimonios. En Chile, el sueldo depende de contratos individuales y cumplimiento de metas.
        </p>
      </div>

      <p>¿Es rentable ser auxiliar de farmacia? El sueldo líquido es el resultado de una estructura de incentivos que debes conocer.</p>

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>¿CÓMO SE CONSTRUYE EL SUELDO?</h2>
      <ul class='list-disc pl-8 my-4 space-y-3 text-slate-700'>
        <li><strong>Sueldo Base:</strong> Ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión V.S.:</strong> Incentivo variable por la venta de productos específicos.</li>
        <li><strong>Bono de Cumplimiento:</strong> Gratificación por metas de la sucursal.</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-6 text-slate-900'>COMPARATIVA SALARIAL (PROYECCIÓN 2026)</h2>
      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr><th class='px-6 py-4 font-bold text-slate-900'>Cadena</th><th class='px-6 py-4 font-bold text-slate-900'>Rango Líquido</th></tr>
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
        <li><strong>Asignación de Zona:</strong> Bonos por trabajar en regiones extremas.</li>
        <li><strong>Certificación Profesional:</strong> Revisa los <a href='/blog/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para acceder a mejores cargos.</li>
        <li><strong>Retail vs Clínica:</strong> Entender la <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave.</li>
      </ul>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-8 text-blue-100 text-lg'>El primer paso es obtener tu carnet oficial de la SEREMI.</p>
        <a href='/blog/examen-competencia-seremi-2025' class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105'>
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Actualizadas con datos técnicos del Minsal)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    [cite_start]a: 'El trámite se realiza en <strong>seremienlinea.minsal.cl</strong> con tu Clave Única[cite: 17].'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  },
  {
    q: '¿Qué documentos necesito subir?',
    [cite_start]a: 'Certificado de enseñanza media [cite: 24][cite_start], certificado de desempeño laboral (mínimo 1 año) firmado por el Q.F. [cite: 15] y foto carnet.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Mantenimiento del Simulador)
export const LEVELS = QUIZ_LEVELS;
