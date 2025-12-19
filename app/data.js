// app/data.js
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
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público...</p>
      <h2>Requisitos para Rendir el Examen (Decreto Supremo N° 466)</h2>
      <p>El requisito principal es contar con <strong>mínimo 1 año de experiencia laboral comprobable</strong>.</p>
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
      <p><strong>¿Cuál es la diferencia entre Auxiliar y Técnico?</strong> Aunque ambos trabajan en el mismo lugar, tienen distintas funciones legales.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los pilares del examen SEREMI: Legislación, Cadena de Frío y Cálculos.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <p>Si vas a enfrentar el <strong>Examen ante la SEREMI de Salud</strong>, aquí te explicamos qué esperar.</p>
      <h2>1. Legislación Farmacéutica</h2>
      <p>Debes dominar los Decretos 404 y 405 sobre recetas controladas.</p>
    `
  }
];

// FAQS y NIVELES se mantienen como estaban en tu respaldo...
export const FAQS = [
    { q: "¿Dónde hago el trámite del examen?", a: "En seremienlinea.minsal.cl con tu ClaveÚnica." },
    { q: "¿Requisitos?", a: "18 años, 4to medio y 1 año de experiencia certificada." }
];

export const LEVELS = [
    { id: 1, title: 'Prueba Diagnóstico', desc: 'Calentamiento.', icon: '💊', qCount: 10, passingScore: 6, questions: [] }
    // (Asegúrate de pegar aquí el resto de tus niveles del ZIP)
];
