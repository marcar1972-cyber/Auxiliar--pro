// app/data.js

// Importamos los niveles desde el archivo protegido
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Transcripción literal 1:1 + Artículo de Sueldos Optimizado)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'requisitos-auxiliar-farmacia-2026',
    title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
    excerpt: 'Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.',
    date: '15 Dic 2025',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026',
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud.</p>
      <p>Aquí te lo explico simple, claro y sin enredos.</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al <a href='/blog/que-es-el-decreto-466-farmacias-chile' class='text-blue-600 underline font-bold'>Decreto Supremo N° 466</a>, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      <p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>● Bodegaje</li>
        <li>● Reposición de medicamentos</li>
        <li>● Dispensación bajo supervisión</li>
        <li>● Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a></p>
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
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Apoya al Químico Farmacéutico en atención de público y dispensación. En Chile, el Auxiliar no necesita estudiar en instituto, pero debe tener enseñanza media, 1 año de experiencia y aprobar el examen ante la SEREMI según el <a href='/blog/que-es-el-decreto-466-farmacias-chile' class='text-blue-600 underline font-bold'>Decreto Supremo N° 466</a>.</p>
    `
  },
  {
    id: 3,
    slug: 'examen-competencia-seremi-preguntas-reales',
    title: 'Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?',
    excerpt: 'Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional.',
    date: '18 Dic 2025',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025',
    content: `
      <p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), estos son los 3 pilares fundamentales para aprobar: Legislación, Almacenamiento y Matemáticas Farmacéuticas.</p>
      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Consejos Finales</h2>
      <p>Estudia directamente el <a href='/blog/que-es-el-decreto-466-farmacias-chile' class='text-blue-600 underline font-bold'>Decreto 466</a> y practica con <a href='/simulador' class='text-blue-600 underline font-bold'>simuladores basados en preguntas reales</a>.</p>
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
      <p>El <strong>Decreto Supremo N° 466</strong> es la columna vertebral de nuestra práctica profesional diaria. Define que las farmacias son centros de salud y establece las condiciones para su funcionamiento bajo un Director Técnico.</p>
      <div class='mt-8 border-t pt-4 bg-slate-50 p-6 rounded-xl text-center font-bold'>
        <p>Puedes descargar este decreto en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
      </div>
    `
  },
  {
    id: 5,
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Guía detallada sobre la realidad salarial de los auxiliares de farmacia en Chile para 2026. Analizamos sueldos base, el sistema de comisiones en retail y sector clínico.',
    date: '20 Dic 2025',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026',
    content: `
      <div class='bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl'>
        <p class='text-sm text-blue-800 leading-relaxed italic'>
          <strong>[AVISO DE TRANSPARENCIA]</strong><br>
          Esta información es el resultado de una investigación independiente basada en ofertas laborales vigentes en portales como Laborum e Indeed, además de testimonios de trabajadores. En Chile, el sueldo en el sector privado no se rige por una tabla única; estas cifras son estimaciones referenciales sujetas a contratos individuales y cumplimiento de metas.
        </p>
      </div>

      <p>Entrar al mundo farmacéutico en Chile genera una duda inmediata: ¿Es rentable ser auxiliar de farmacia? A diferencia de otras profesiones técnicas, aquí el sueldo líquido a fin de mes es el resultado de una estructura de incentivos y bonos que debes conocer para negociar tu contrato.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿CÓMO SE CONSTRUYE EL SUELDO DE UN AUXILIAR?</h2>
      <p>Un error común es fijarse solo en el "sueldo mínimo". En la práctica, un auxiliar en retail (farmacias de cadena) recibe una liquidación compuesta por:</p>
      <ul class='list-disc pl-8 my-4 space-y-2'>
        <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos o marcas propias. Es el componente que más influye en el total final.</li>
        <li><strong>Bono de Cumplimiento de Sala:</strong> Una gratificación que se activa si la sucursal completa sus metas mensuales de ventas totales.</li>
        <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
      </ul>

      <h2 class='text-xl font-bold mt-6 mb-4'>COMPARATIVA SALARIAL POR CADENAS (PROYECCIÓN 2026)</h2>
      <p>Según el análisis de mercado, estos son los rangos de sueldo líquido (dinero en bolsillo) para jornadas de 44/45 horas:</p>
      <ul class='list-disc pl-8 my-4 space-y-2'>
        <li><strong>Cruz Verde:</strong> \$650.000 - \$880.000. Comisiones ligadas a metas comerciales activas.</li>
        <li><strong>Salcobrand:</strong> \$630.000 - \$820.000. Beneficios corporativos y bonos grupales.</li>
        <li><strong>Farmacias Ahumada:</strong> \$610.000 - \$790.000. Estructura equilibrada entre el base y variable.</li>
        <li><strong>Independientes / Simi:</strong> \$550.000 - \$700.000. Sueldos más estables con menor presión por ventas.</li>
      </ul>

      <h2 class='text-xl font-bold mt-6 mb-4'>FACTORES CRÍTICOS QUE AUMENTAN TUS INGRESOS</h2>
      <p>Existen tres "aceleradores" de sueldo que puedes aprovechar:</p>
      <ul class='list-disc pl-8 my-4 space-y-2'>
        <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche.</li>
        <li><strong>Especialización y Certificación:</strong> Revisa los <a href='/blog/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil y cerrar ventas técnicas.</li>
      </ul>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿RETAIL O SECTOR CLÍNICO (HOSPITALES)?</h2>
      <p>El Retail ofrece un techo más alto por comisiones, mientras que el Sector Clínico ofrece horarios estables y menos estrés de venta. Entender la <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir.</p>

      <div class='bg-blue-600 p-8 rounded-3xl text-center shadow-xl my-10'>
        <h2 class='text-2xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-6 text-blue-100'>El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial.</p>
        <a href='/blog/examen-competencia-seremi-2025' class='inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors'>
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Contenido enriquecido)
export const FAQS = [
  {
    q: "¿Dónde hago el trámite del examen?",
    a: "El trámite se encuentra disponible 100% en línea ingresando con tu <strong>Clave Única</strong> al portal <a href='https://seremienlinea.minsal.cl' target='_blank' class='text-blue-600 underline font-bold'>seremienlinea.minsal.cl</a>."
  },
  {
    q: "¿Qué documentos necesito?",
    a: "Debes adjuntar digitalmente: 1. Certificado de enseñanza media. 2. Certificado de desempeño laboral firmado por un Químico Farmacéutico (mínimo 1 año). 3. Foto tipo carnet."
  },
  {
    q: "¿Cuál es el costo del trámite?",
    a: "El costo es diferenciado según la etapa: Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet físico: \$29.700."
  }
];

// Exportación para mantener compatibilidad
export const LEVELS = QUIZ_LEVELS;
