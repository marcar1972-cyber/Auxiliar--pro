// app/data.js

// Importación de seguridad de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Contenido íntegro, sin citas y enlaces reparados)
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
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      <p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>Bodegaje</li>
        <li>Reposición de medicamentos</li>
        <li>• Dispensación bajo supervisión</li>
        <li>• Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento. El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>.</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales:</p>
      <ul class='list-none space-y-4 my-4'>
        <li><strong>✅ 1. Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</li>
        <li><strong>✅ 2. Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><strong>✅ 3. Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.</li>
        <li><strong>✅ 4. Rendir y aprobar el examen:</strong> Este examen evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia.</li>
        <li><strong>✅ 5. Obtener la credencial:</strong> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.</li>
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
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en atención de público, dispensación bajo supervisión, reposición, bodegaje, revisión de vencimientos, manejo de stock y orientación básica al paciente.</p>
      <p>En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe tener enseñanza media completa, contar con mínimo 1 año de experiencia en farmacia, rendir y aprobar el examen ante la SEREMI de Salud y obtener su credencial oficial según el Decreto Supremo N° 466.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      <p>El Técnico en Farmacia es un profesional que sí estudia una carrera formal, generalmente en institutos profesionales o centros de formación técnica durante 2 a 3 años, con malla académica, prácticas y título técnico. Sus funciones incluyen apoyar directamente al Químico Farmacéutico en preparación de medicamentos, control de bodegas, gestión de inventarios y atención clínica básica. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>

      <div class='mt-8 border-t pt-4 text-center'>
        <h3 class='font-bold text-lg'>🎯 Conclusión Clara</h3>
        <p class='mt-2'>✓ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI</p>
        <p>✔ El Técnico en Farmacia se forma en instituto + título</p>
      </div>
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
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud.</p>
      <p>Es normal sentir ansiedad. En internet circulan muchos mitos, pero aquí vamos a analizar, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o sí te van a preguntar. No necesitas suerte, necesitas estrategia. Aquí tienes los 3 pilares fundamentales que debes dominar para aprobar.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), los libros de control donde se registran y qué decretos las regulan. También los roles en la Farmacia y los tipos de establecimientos.</p>
      <p class='font-bold bg-amber-50 border-l-4 border-amber-400 p-4 my-6 italic text-slate-800 text-sm'>Pregunta típica: "Si llega una receta de Clonazepam emitida hace 40 días, ¿la puede despachar?" <br> > Respuesta correcta: No. La vigencia legal máxima para recetas de productos controlados es de 30 días corridos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Este es un tema técnico crítico. Un error aquí pone en riesgo la salud pública. Datos clave: Rango de Temperatura estrictamente entre 2°C y 8°C para insulinas y vacunas, protocolo de quiebre de cadena de frío y el sistema FEFO (First Expired, First Out).</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
      <p>Debes manejar la "Regla de Tres" a la perfección. Ejemplo: Si el médico receta Amoxicilina 500mg cada 8 horas por 7 días, debes calcular rápidamente que el paciente necesita 21 comprimidos totales.</p>
      
      <p class='mt-8 font-medium'>Estudia los Decretos: No te quedes solo con apuntes. Lee directamente el Decreto 466; es la fuente de la verdad.</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos, requisitos para el personal y normas de expendio según el Decreto 466.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <div class="blog-content">
        <p>El <strong>Decreto 466</strong> es el reglamento sanitario que rige a todos los establecimientos farmacéuticos en Chile. Establece las normas de instalación y fiscalización necesarias para garantizar que la venta de medicamentos sea segura para la población.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">1. Clasificación de Establecimientos</h2>
        <p>El reglamento organiza los lugares de expendio según su complejidad técnica:</p>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Farmacia:</strong> El establecimiento más completo, facultado para la venta, fraccionamiento y preparación de recetas magistrales bajo un Director Técnico.</li>
          <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico de Farmacia; vende medicamentos de venta directa y un listado limitado de fármacos con receta.</li>
          <li><strong>Droguería:</strong> Destinada a la importación y distribución mayorista, sin venta directa al público.</li>
          <li><strong>Botiquín:</strong> Recintos para uso interno en clínicas, campamentos o naves.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-3">2. Requisitos para el Personal Auxiliar</h2>
        <p>Para trabajar legalmente y optar a la autorización sanitaria, el Decreto 466 exige requisitos claros que puedes revisar en nuestra sección de <a href="/requisitos-auxiliar-farmacia-chile-2026" class="text-blue-600 font-bold underline">REQUISITOS LEGALES</a>. En resumen, se requiere enseñanza media completa, un año de práctica certificada por un Químico Farmacéutico y aprobar el examen de competencia.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">3. El Expendio y la Bioequivalencia</h2>
        <p>La normativa regula el despacho de medicamentos mediante Receta Simple, Retenida o Cheque. Además, establece la obligación de informar sobre alternativas <strong>bioequivalentes</strong>. Es vital comprender cómo estas reglas aplican según tu cargo; consulta la <a href="/diferencia-auxiliar-tecnico-farmacia" class="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> para más detalles.</p>

        <div class="mt-10 p-8 bg-blue-700 rounded-xl text-center text-white shadow-lg">
          <h3 class="text-2xl font-bold mb-4">¿Preparado para tu examen?</h3>
          <p class="mb-6 text-lg">El Decreto 466 es la base de la evaluación de la autoridad sanitaria.</p>
          <a href="/examen-competencia-seremi-2025" class="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
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
    excerpt: 'Guía detallada sobre la realidad salarial de los auxiliares de farmacia en Chile para 2026. Analizamos sueldos base, el sistema de comisiones y bonos.',
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

      <p>Entrar al mundo farmacéutico en Chile genera una duda inmediata: ¿Es rentable ser auxiliar de farmacia? A diferencia de otras profesiones técnicas, aquí el sueldo líquido a fin de mes es el resultado de una estructura de incentivos y bonos.</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿CÓMO SE CONSTRUYE EL SUELDO?</h2>
      <ul class='list-disc pl-8 my-4 space-y-3 text-slate-700'>
        <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos.</li>
        <li><strong>Bono de Cumplimiento de Sala:</strong> Gratificación por metas mensuales de ventas totales.</li>
        <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-6 text-slate-900'>COMPARATIVA SALARIAL POR CADENAS (PROYECCIÓN 2026)</h2>
      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr><th class='px-6 py-4 font-bold text-slate-900'>Cadena</th><th class='px-6 py-4 font-bold text-slate-900'>Líquido Estimado</th></tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr><td class='px-6 py-4'>Cruz Verde</td><td class='px-6 py-4 font-bold text-green-700'>\$650.000 - \$880.000</td></tr>
            <tr><td class='px-6 py-4'>Salcobrand</td><td class='px-6 py-4 font-bold text-green-700'>\$630.000 - \$820.000</td></tr>
            <tr><td class='px-6 py-4'>Farmacias Ahumada</td><td class='px-6 py-4 font-bold text-green-700'>\$610.000 - \$790.000</td></tr>
            <tr><td class='px-6 py-4'>Independientes / Simi</td><td class='px-6 py-4 font-bold text-green-700'>\$550.000 - \$700.000</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>FACTORES CRÍTICOS QUE AUMENTAN TUS INGRESOS</h2>
      <ul class='list-disc pl-8 my-6 space-y-4 text-slate-700'>
        <li><strong>Asignación de Zona:</strong> Bonos territoriales por trabajar en zonas extremas.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Pagos adicionales por turnos de noche en farmacias 24 horas.</li>
        <li><strong>Especialización:</strong> Revisa los <a href='/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil.</li>
      </ul>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>¿RETAIL O SECTOR CLÍNICO?</h2>
      <p>Entender la <a href='/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir entre estabilidad asistencial o comisiones comerciales.</p>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <a href='/examen-competencia-seremi-2025' class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all'>
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
    a: 'El trámite se realiza en el portal <strong>seremienlinea.minsal.cl</strong> ingresando con tu Clave Única.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  },
  {
    q: '¿Qué documentos necesito subir?',
    a: 'Certificado de enseñanza media completa, certificado de desempeño laboral (mínimo 1 año) firmado por el Q.F. y foto carnet.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Mantenimiento del Simulador)
export const LEVELS = QUIZ_LEVELS;
