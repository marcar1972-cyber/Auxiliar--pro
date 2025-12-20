// app/data.js

// Importamos los niveles desde el nuevo archivo protegido para evitar duplicidad
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Transcripción literal 1:1 - Enlaces Reparados)
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
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea, donde podrás revisar requisitos actualizados, costos y disponibilidad: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a></p>
      <p class='mt-4 italic text-slate-600'>Este proceso es fundamental para obtener la credencial oficial de Auxiliar de Farmacia en Chile y poder trabajar legalmente en farmacias comunitarias.</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales:</p>
      <ul class='list-none space-y-4 my-4'>
        <li><span class='font-bold'>✅ 1. Ser mayor de 18 años:</span> Debes ser legalmente mayor de edad.</li>
        <li><span class='font-bold'>✅ 2. Enseñanza media completa:</span> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><span class='font-bold'>✅ 3. Haber trabajado en farmacia:</span> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico. <span class='italic font-normal'>👉 Importante: El tiempo exacto y forma de acreditación lo revisa directamente la SEREMI de Salud de tu región.</span></li>
        <li><span class='font-bold'>✅ 4. Rendir y aprobar el examen de Auxiliar de Farmacia:</span> Este examen evalúa conocimientos como:
          <ul class='list-disc pl-8 mt-2 font-normal'>
            <li>● Farmacología básica</li>
            <li>● Recetas médicas</li>
            <li>● Cadena de frío</li>
            <li>● Fechas de vencimiento</li>
            <li>● Legislación sanitaria</li>
            <li>● Buenas prácticas en farmacia</li>
          </ul>
        </li>
        <li><span class='font-bold'>✅ 5. Obtener la credencial de Auxiliar de Farmacia:</span> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.</li>
      </ul>

      <h2 class='text-xl font-bold mt-8 mb-4'>🏥 ¿Dónde se realiza el trámite?</h2>
      <p>Todo el proceso se gestiona a través de la SEREMI de Salud de tu región. Cada región puede variar levemente en exigencias de documentos, pero la base legal es la misma en todo Chile.</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📚 ¿Puedo prepararme sin instituto?</h2>
      <p>Sí. Puedes:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>● Estudiar de forma independiente</li>
        <li>● Usar material online</li>
        <li>● Prepararte con <a href='/biblioteca' class='text-blue-600 underline font-bold'>guías, PDFs, ensayos y contenido práctico</a></li>
      </ul>
      <p>Muchos auxiliares actuales se han preparado así. Lo importante es dominar bien los <a href='/blog/examen-competencia-seremi-preguntas-reales' class='text-blue-600 underline font-bold'>contenidos del examen</a>.</p>

      <h2 class='text-xl font-bold mt-8 mb-4 text-center bg-slate-50 p-4 rounded-xl font-bold'>🎯 Conclusión clara</h2>
      <p class='text-center font-medium'>Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas:</p>
      <ul class='list-none pl-0 my-2 text-center'>
        <li>✔ Cuarto medio</li>
        <li>✔ Mínimo 1 año de experiencia en farmacia</li>
        <li>✔ Aprobar el examen</li>
        <li>✔ Obtener tu credencial SEREMI</li>
      </ul>
      <p class='mt-4 font-bold text-center'>No es imposible, pero sí requiere constancia, práctica real y estudio enfocado.</p>
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
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: 👉 ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en:</p>
      <ul class='list-none pl-0 my-4 space-y-1'>
        <li>✅ Atención de público</li>
        <li>✅ Dispensación de medicamentos bajo supervisión</li>
        <li>✅ Reposición y bodegaje</li>
        <li>✅ Revisión de fechas de vencimiento</li>
        <li>✅ Manejo de stock</li>
        <li>✅ Orientación básica al paciente</li>
      </ul>
      <p>👉 En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>● Tener enseñanza media completa</li>
        <li>● Contar con mínimo 1 año de experiencia en farmacia</li>
        <li>● Rendir y aprobar el examen ante la SEREMI de Salud</li>
        <li>● Obtener su credencial oficial de Auxiliar de Farmacia, según el <a href='/blog/que-es-el-decreto-466-farmacias-chile' class='text-blue-600 underline font-bold'>Decreto Supremo N° 466</a></li>
      </ul>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      <p>El Técnico en Farmacia es un profesional que sí estudia una carrera formal, generalmente:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>● En institutos profesionales o centros de formación técnica</li>
        <li>● Durante 2 a 3 años</li>
        <li>● Con malla académica, prácticas y título técnico</li>
      </ul>
      <p>👉 El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>

      <h2 class='text-xl font-bold mt-8 mb-4 bg-blue-600 text-white p-4 rounded-xl text-center'>🎯 Conclusión Clara</h2>
      <ul class='list-none space-y-1 my-4 flex flex-col items-center font-medium'>
        <li>✔ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI</li>
        <li>✔ El Técnico en Farmacia se forma en instituto + título</li>
        <li>✔ Ambos trabajan bajo supervisión del Químico Farmacéutico</li>
        <li>✔ Ambos pueden desarrollarse profesionalmente en farmacias</li>
      </ul>
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
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud.</p>
      <p>Es normal sentir ansiedad. En internet circulan muchos mitos, pero aquí vamos a analizar, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o sí te van a preguntar. No necesitas suerte, necesitas estrategia. Aquí tienes los 3 pilares fundamentales que debes dominar para aprobar.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>La autoridad sanitaria necesita saber si conoces las reglas del juego para no cometer errores legales. Lo que debes dominar:</p>
      <ul class='list-disc pl-8 my-4 space-y-2 text-slate-700'>
        <li>● <span class='font-bold'>Diferencia entre Receta Cheque y Receta Retenida:</span> No basta con saber el color de la estrella. Debes saber la vigencia (30 días), los libros de control y los decretos correspondientes.</li>
        <li>● <span class='font-bold'>Roles en la Farmacia:</span> ¿Qué puede hacer el auxiliar y qué es exclusivo del Químico Farmacéutico?</li>
      </ul>
      <p class='font-bold bg-amber-50 border-l-4 border-amber-400 p-4 my-6 italic text-slate-800 text-sm'>Pregunta típica: "Si llega una receta de Clonazepam (Lista IV) emitida hace 40 días, ¿la puede despachar?" <br> > Respuesta correcta: No. La vigencia legal máxima para recetas de productos controlados es de 30 días corridos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <ul class='list-disc pl-8 my-4 space-y-2 text-slate-700'>
        <li>● <span class='font-bold'>Rango de Temperatura:</span> Los refrigeradores deben mantenerse estrictamente entre 2°C y 8°C.</li>
        <li>● <span class='font-bold'>¿Qué hacer si se corta la luz?:</span> Debes conocer el protocolo de quiebre de cadena de frío y el sistema FEFO.</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-4 text-slate-900 font-bold'>Consejos Finales para el Día del Examen</h2>
      <ul class='list-decimal pl-8 my-4 space-y-4 text-slate-700 font-medium'>
        <li>1. Vocabulario Técnico: No digas "remedios", di "medicamentos".</li>
        <li>2. Seguridad ante todo: Prioriza siempre la normativa legal por sobre la venta comercial.</li>
        <li>3. Estudia los Decretos: Lee directamente el <a href='/blog/que-es-el-decreto-466-farmacias-chile' class='text-blue-600 underline font-bold'>Decreto 466</a>; es la fuente de la verdad.</li>
      </ul>
      <p class='mt-8 italic text-slate-600 font-medium text-center'>¿Te estás preparando? En AuxiliarPro tenemos <a href='/simulador' class='text-blue-600 underline font-bold'>simuladores basados en preguntas reales</a> para que practiques.</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466-farmacias-chile',
    title: "¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer",
    excerpt: "En esta columna de investigación, desglosamos el Reglamento de Farmacias, Droguerías y Almacenes Farmacéuticos que rige en Chile.",
    date: '19 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <p>Para quienes operamos dentro del sistema de salud chileno, el <strong>Decreto Supremo N° 466</strong> es la columna vertebral de nuestra práctica profesional diaria.</p>

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>¿Qué establece el Decreto 466 sobre la Farmacia como Centro de Salud?</h2>
      <p>El Decreto 466 define que las farmacias son centros de salud y establece las condiciones sanitarias mínimas para su funcionamiento. Entre sus puntos más críticos, destaca la obligación de contar con un Director Técnico presente durante todo el horario de funcionamiento.</p>

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Habilitación del Auxiliar de Farmacia: El Artículo 71</h2>
      <p>Un punto de gran interés es la habilitación profesional. Si aún no tienes claro si este es tu camino, te recomendamos revisar nuestra guía sobre las <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>diferencias entre Auxiliar y Técnico en Farmacia</a>.</p>

      <div class='mt-8 border-t pt-4 bg-slate-50 p-6 rounded-xl text-center font-bold'>
        <p>Puedes descargar y estudiar este decreto en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
      </div>
    `
  },
  {
    id: 5,
    slug: 'cuanto-gana-auxiliar-farmacia-chile',
    title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
    excerpt: 'Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones según datos actuales de mercado.',
    date: '20 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Sueldos+2026',
    content: `
      <p>Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada según datos de mercado. Este rol se ha vuelto más crítico con la nueva normativa sanitaria.</p>
      <h2 class='text-xl font-bold mt-6 mb-4'>Desglose de Remuneraciones</h2>
      <p>El ingreso promedio líquido varía entre \$550.000 y \$850.000 dependiendo de la cadena y las comisiones de venta. Poseer la credencial oficial tras el <a href='/blog/examen-competencia-seremi-preguntas-reales' class='text-blue-600 underline font-bold'>Examen de Competencia SEREMI</a> permite acceder a mejores bonificaciones por responsabilidad.</p>
      <p>Consulta los <a href='/blog/requisitos-auxiliar-farmacia-2026' class='text-blue-600 underline font-bold'>requisitos para ser Auxiliar de Farmacia</a> para iniciar tu camino profesional.</p>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Enriquecidas con datos técnicos de Tramite_minsal.pdf)
export const FAQS = [
  {
    q: "¿Dónde hago el trámite del examen?",
    a: "El trámite se encuentra disponible 100% en línea ingresando con tu <strong>Clave Única</strong> al portal <a href='https://seremienlinea.minsal.cl' target='_blank' class='text-blue-600 underline font-bold'>seremienlinea.minsal.cl</a>."
  },
  {
    q: "¿Qué documentos necesito para el trámite?",
    a: "Para solicitar la certificación, debes adjuntar en formato digital: 1. Certificado de <strong>enseñanza media</strong> completa. 2. Certificado de <strong>desempeño laboral</strong> firmado por un Químico Farmacéutico que acredite al menos 1 año de desempeño efectivo. 3. Foto tipo carnet."
  },
  {
    q: "¿Cuál es el costo del trámite?",
    a: "El costo es diferenciado según la etapa: <strong>Derecho a Examen: \$19.100</strong>. Inscripción en el Registro (incluye primer certificado): \$47.600. Diploma o Carnet físico: \$29.700."
  },
  {
    q: "¿Qué pasa si repruebo?",
    a: "Si el examen es reprobado, la normativa establece que se debe esperar el plazo legal correspondiente para solicitarlo nuevamente, cancelando otra vez el arancel por derecho a examen."
  }
];

// Exportamos LEVELS para no romper el resto de la aplicación
export const LEVELS = QUIZ_LEVELS;
