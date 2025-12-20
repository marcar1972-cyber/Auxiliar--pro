// app/data.js

// Importación de seguridad para el simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Consolidados y con Enlaces Reparados)
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
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal: Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores de bodegaje, reposición y dispensación bajo supervisión.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea.</p>
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
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Es la persona que trabaja en farmacia apoyando al Químico Farmacéutico en atención de público, dispensación bajo supervisión y manejo de stock. En Chile, debe tener enseñanza media completa, contar con mínimo 1 año de experiencia y aprobar el examen ante la SEREMI.</p>
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
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud. Basándonos en la normativa oficial (Decretos 466, 404 y 405), aquí tienes los pilares fundamentales para aprobar.</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica</h2>
      <p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), los libros de control y los roles en la Farmacia.</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos y requisitos para el personal.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <div class="blog-content">
        <p>El <strong>Decreto 466</strong> es el reglamento sanitario que rige a todos los establecimientos farmacéuticos en Chile. Establece las normas de instalación y fiscalización necesarias para garantizar que la venta de medicamentos sea segura.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">1. Clasificación de Establecimientos</h2>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Farmacia:</strong> Venta, fraccionamiento y preparación de recetas magistrales.</li>
          <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico; venta directa y listado limitado con receta.</li>
          <li><strong>Botiquín:</strong> Recintos para uso interno en clínicas o naves.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-3">2. Requisitos para el Personal Auxiliar</h2>
        <p>Para trabajar legalmente, el Decreto 466 exige requisitos que puedes revisar en <a href="/blog/requisitos-auxiliar-farmacia-chile-2026" class="text-blue-600 font-bold underline">REQUISITOS LEGALES</a>. Se requiere cuarto medio, un año de práctica y aprobar el examen.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">3. El Expendio</h2>
        <p>La normativa regula el despacho mediante Receta Simple, Retenida o Cheque. Consulta la <a href="/blog/diferencia-auxiliar-tecnico-farmacia" class="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> para más detalles.</p>

        <div class="mt-10 p-8 bg-blue-700 rounded-xl text-center text-white shadow-lg">
          <h3 class="text-2xl font-bold mb-4">¿Preparado para tu examen?</h3>
          <a href="/blog/examen-competencia-seremi-2025" class="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full">
            Estudiar con la GUÍA DEL EXAMEN SEREMI 2025
          </a>
        </div>
      </div>
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
          Esta información es referencial basada en ofertas laborales y testimonios. El sueldo líquido depende de contratos individuales y cumplimiento de metas.
        </p>
      </div>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿CÓMO SE CONSTRUYE EL SUELDO?</h2>
      <ul class='list-disc pl-8 my-4 space-y-3'>
        <li><strong>Sueldo Base:</strong> Ajustado al mínimo legal (\$500.000+ bruto).</li>
        <li><strong>Comisión V.S.:</strong> Incentivo variable por venta de productos sugeridos.</li>
      </ul>

      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50'>
            <tr><th class='px-6 py-4 font-bold text-slate-900'>Cadena</th><th class='px-6 py-4 font-bold text-slate-900'>Líquido Estimado</th></tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr><td class='px-6 py-4'>Cruz Verde</td><td class='px-6 py-4 font-bold text-green-700'>\$650.000 - \$880.000</td></tr>
            <tr><td class='px-6 py-4'>Salcobrand</td><td class='px-6 py-4 font-bold text-green-700'>\$630.000 - \$820.000</td></tr>
            <tr><td class='px-6 py-4'>Farmacias Ahumada</td><td class='px-6 py-4 font-bold text-green-700'>\$610.000 - \$790.000</td></tr>
            <tr><td class='px-6 py-4'>Independientes</td><td class='px-6 py-4 font-bold text-green-700'>\$550.000 - \$700.000</td></tr>
          </tbody>
        </table>
      </div>

      <p>Revisa los <a href='/blog/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil y acceder a mejores rentas.</p>
    `
  }
];

export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite se realiza en <strong>seremienlinea.minsal.cl</strong> con tu Clave Única.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  }
];

export const LEVELS = QUIZ_LEVELS;
