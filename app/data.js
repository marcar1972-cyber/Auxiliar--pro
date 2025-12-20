// app/data.js

// Importación de seguridad de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. METADATOS DEL BLOG (Para renderizar las tarjetas en la lista principal)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'requisitos-auxiliar-farmacia-chile-2026',
    title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
    excerpt: 'Si estás pensando en trabajar en farmacia, conoce los requisitos legales y laborales para este 2026.',
    date: '15 Dic 2025',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026'
  },
  {
    id: 2,
    slug: 'diferencia-auxiliar-tecnico-farmacia',
    title: 'Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile',
    excerpt: '¿Cuál es la diferencia real entre ambos roles? Te lo explicamos de forma fácil y clara.',
    date: '14 Dic 2025',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico'
  },
  {
    id: 3,
    slug: 'examen-competencia-seremi-2025',
    title: 'Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?',
    excerpt: 'Análisis de los pilares fundamentales que debes dominar para aprobar tu certificación sanitaria.',
    date: '18 Dic 2025',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025'
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Explora el reglamento fundamental que rige la instalación y funcionamiento de farmacias en Chile.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile'
  },
  {
    id: 5,
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Guía detallada sobre la realidad salarial, comisiones en retail y el sector clínico para el 2026.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026'
  }
];

// 2. PREGUNTAS FRECUENTES (Contenido Técnico Minsal)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite se realiza 100% en línea en el portal <strong>seremienlinea.minsal.cl</strong> ingresando con tu Clave Única.'
  },
  {
    q: '¿Qué documentos necesito subir?',
    a: 'Debes adjuntar: Certificado de enseñanza media completa, certificado de desempeño laboral (mínimo 1 año) firmado por el Q.F. y foto carnet.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Los valores son: Derecho a Examen \$19.100. Inscripción en el Registro \$47.600. Diploma o Carnet \$29.700.'
  },
  {
    q: '¿Qué pasa si repruebo?',
    a: 'Si el examen es reprobado, debes esperar el plazo legal para solicitarlo nuevamente y cancelar otra vez el arancel de derecho a examen.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Mantenimiento de la integridad del Simulador)
export const LEVELS = QUIZ_LEVELS;
