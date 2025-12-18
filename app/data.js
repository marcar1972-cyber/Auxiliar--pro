// app/data.js

// 1. ARTÍCULOS DEL BLOG
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Guía oficial basada en el Decreto 466: Experiencia, escolaridad y trámite SEREMI paso a paso.",
    date: "15 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026",
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los <strong>requisitos para ser Auxiliar de Farmacia en Chile</strong>.</p>
      <h2>¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Es la persona que apoya al Químico Farmacéutico en la atención y manejo de medicamentos...</p>
      <h2>Requisitos para Rendir el Examen (Decreto Supremo N° 466)</h2>
      <p>El requisito principal es contar con <strong>mínimo 1 año de experiencia laboral comprobable</strong>.</p>
      <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
        <p class="text-sm"><strong>Importante:</strong> La experiencia debe estar certificada por el Director Técnico.</p>
      </div>
      <h2>Conclusión</h2>
      <p>Requiere constancia, práctica real y estudio enfocado.</p>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar y Técnico en Farmacia (Explicado Fácil)",
    excerpt: "¿Estudiar carrera o dar examen? Entiende las diferencias de sueldo, formación y funciones.",
    date: "14 Dic 2025",
    readTime: "3 min",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico",
    content: `
      <p><strong>¿Cuál es la diferencia entre Auxiliar y Técnico?</strong> Aunque trabajan juntos, tienen distintas responsabilidades legales.</p>
      <h2>1. El Auxiliar de Farmacia</h2>
      <p>Aprende trabajando y rinde examen ante la SEREMI (Decreto 466).</p>
      <h2>2. El Técnico en Farmacia</h2>
      <p>Estudia 2 a 3 años en un instituto y su título lo habilita directamente.</p>
      <h2>¿Cuál es mejor?</h2>
      <p>Si quieres <strong>entrar rápido al rubro</strong>, el camino de Auxiliar es más directo.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los pilares del examen SEREMI: Legislación, Cadena de Frío y Cálculos. Guía basada en Decretos 466, 404 y 405.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <p>Si vas a enfrentar el <strong>Examen ante la SEREMI de Salud</strong>, no necesitas suerte, necesitas estrategia.</p>
      <h2>1. Legislación Farmacéutica</h2>
      <p>Domina la diferencia entre Receta Cheque y Retenida (Decretos 404 y 405).</p>
      <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
        <p><strong>Pregunta típica:</strong> "¿Puede despachar una receta de controlados de hace 40 días?" <br/> 
        <strong>Respuesta:</strong> No, la vigencia es de 30 días.</p>
      </div>
      <h2>2. Cadena de Frío</h2>
      <p>Rango crítico: <strong>2°C a 8°C</strong>. Conoce el protocolo de corte de luz.</p>
      <h2>3. Matemáticas Farmacéuticas</h2>
      <p>Usa la regla de tres para calcular cuántas cajas necesita un paciente para su tratamiento completo.</p>
      <div class="bg-blue-600 p-6 rounded-xl text-white text-center my-8">
        <h3 class="text-xl font-bold mb-2">¿Quieres practicar?</h3>
        <a href="/quiz" class="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold">Ir al Simulador Gratuito</a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Se mantienen tus FAQS...)
export const FAQS = [ ... ];

// 3. NIVELES DEL QUIZ (Se mantienen tus LEVELS...)
export const LEVELS = [ ... ];
