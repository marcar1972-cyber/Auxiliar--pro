// app/data.js
// --- ACTUALIZACIÓN DE RUTA: Apuntando a la carpeta modular ---
import { LEVELS as QUIZ_LEVELS } from './quizData/index'; 
// --- IMPORTACIÓN DE FAQS: Para que el inicio lea los nuevos datos ---
import { FAQS as MODULAR_FAQS } from './faqData/index';

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'requisitos-auxiliar-farmacia-chile-2026',
    title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
    excerpt: 'Guía detallada sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
    date: '15 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026'
  },
  {
    id: 2,
    slug: 'diferencia-auxiliar-tecnico-farmacia',
    title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile',
    excerpt: '¿No sabes si estudiar o rendir el examen SEREMI? Conoce las diferencias de sueldo, formación y responsabilidades.',
    date: '14 Dic 2025',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico'
  },
  {
    id: 3,
    slug: 'examen-competencia-seremi-2025',
    title: 'Examen de Competencia SEREMI 2026: Guía para Preguntas de Alternativas',
    excerpt: 'Descubre los pilares fundamentales para aprobar el examen de Auxiliar ante la SEREMI. Legislación, cadena de frío y cálculos.',
    date: '18 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2026'
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos y requisitos.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466'
  },
  {
    id: 5,
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Análisis detallado de sueldos líquidos, comisiones y bonos en retail y sector clínico.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026'
  }
];

// Exportamos las FAQS desde la nueva base de datos modular para que el inicio las vea
export const FAQS = MODULAR_FAQS;

export const LEVELS = QUIZ_LEVELS;
