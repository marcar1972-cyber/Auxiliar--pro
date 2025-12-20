// app/data.js

// Importación protegida de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Contenido literal + Reparación de Enlaces Localizada)
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
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile[cite: 159]. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud[cite: 160].</p>
      <p>Aquí te lo explico simple, claro y sin enredos[cite: 161].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 163].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal[cite: 165]:</p>
      <p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como[cite: 167]:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>● Bodegaje [cite: 168]</li>
        <li>● Reposición de medicamentos [cite: 169]</li>
        <li>● Dispensación bajo supervisión [cite: 170]</li>
        <li>● Manejo de productos farmacéuticos [cite: 171]</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento[cite: 172]. El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 173, 174].</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales[cite: 178]:</p>
      <ul class='list-none space-y-4 my-4'>
        <li><span class='font-bold'>✅ 1. Ser mayor de 18 años:</span> Debes ser legalmente mayor de edad[cite: 179, 180].</li>
        <li><span class='font-bold'>✅ 2. Enseñanza media completa:</span> Debes contar con tu licencia de cuarto medio aprobada[cite: 181, 182].</li>
        <li><span class='font-bold'>✅ 3. Haber trabajado en farmacia:</span> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico[cite: 183, 184]. <span class='italic font-normal'>👉 Importante: El tiempo exacto y forma de acreditación lo revisa directamente la SEREMI de Salud de tu región[cite: 185].</span></li>
        <li><span class='font-bold'>✅ 4. Rendir y aprobar el examen:</span> Este examen evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia [cite: 186-193].</li>
        <li><span class='font-bold'>✅ 5. Obtener la credencial:</span> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar[cite: 194, 195].</li>
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
      <p class='italic mb-6'>(Explicado Fácil) [cite: 213]</p>
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia?[cite: 214]. Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 215]. Aquí te lo explico claro y sin enredos[cite: 216].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en atención de público, dispensación bajo supervisión, reposición, bodegaje, revisión de vencimientos, manejo de stock y orientación básica [cite: 217-228].</p>
      <p>En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe tener enseñanza media completa, contar con mínimo 1 año de experiencia, rendir el examen ante la SEREMI y obtener su credencial oficial según el Decreto Supremo N° 466 [cite: 229-233].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que sí estudia una carrera formal, generalmente en institutos profesionales o centros de formación técnica durante 2 a 3 años, con malla académica, prácticas y título técnico [cite: 234-238]. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 249].</p>

      <div class='mt-8 border-t pt-4'>
        <h3 class='font-bold text-lg text-center bg-blue-600 text-white p-4 rounded-xl'>🎯 Conclusión Clara</h3>
        <p class='mt-4'>✓ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI[cite: 270].</p>
        <p>✔ El Técnico en Farmacia se forma en instituto + título[cite: 271].</p>
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
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud[cite: 281].</p>
      <p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), aquí tienes los 3 pilares fundamentales que debes dominar para aprobar[cite: 282, 283].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), los libros de control y los roles exclusivos del Químico Farmacéutico [cite: 284-292].</p>
      <p class='font-bold bg-amber-50 border-l-4 border-amber-400 p-4 my-6 italic text-slate-800 text-sm'>Pregunta típica: "Si llega una receta de Clonazepam emitida hace 40 días, ¿la puede despachar?" <br> > Respuesta correcta: No. La vigencia legal máxima es de 30 días corridos[cite: 293, 294].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Los refrigeradores para insulinas, vacunas y colirios deben mantenerse estrictamente entre 2°C y 8°C[cite: 298]. Debes conocer el protocolo de quiebre de cadena de frío y el sistema FEFO[cite: 299, 300].</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
      <p>Uso de la Regla de Tres para cálculo de dosis y duración de tratamientos [cite: 301-307].</p>
      
      <div class='mt-10 border-t pt-4 bg-slate-50 p-6 rounded-xl'>
        <p>Lee directamente el <span class='font-bold'>Decreto 466</span>; es la fuente de la verdad[cite: 312, 313]. Practica con simuladores basados en preguntas reales[cite: 314].</p>
      </div>
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
      <p>El <strong>Decreto Supremo N° 466</strong> es la columna vertebral de nuestra práctica profesional diaria. Define que las farmacias son centros de salud y establece las condiciones sanitarias mínimas para su funcionamiento bajo la responsabilidad de un Director Técnico.</p>
      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Habilitación profesional</h2>
      <p>Según el Artículo 71, los postulantes deben acreditar un año de práctica certificado por el Químico Farmacéutico. Puedes estudiar este texto completo en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
    `
  },
  {
    id: 'sueldos-2026',
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

      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900 leading-tight'>¿CÓMO SE CONSTRUYE EL SUELDO DE UN AUXILIAR?</h2>
      <p>Un error común es fijarse solo en el "sueldo mínimo". En la práctica, un auxiliar en retail (farmacias de cadena) recibe una liquidación compuesta por:</p>
      <ul class='list-disc pl-8 my-4 space-y-3 text-slate-700'>
        <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente (\$500.000+ bruto).</li>
        <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos o marcas propias.</li>
        <li><strong>Bono de Cumplimiento de Sala:</strong> Gratificación por completar metas mensuales de ventas totales.</li>
        <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-6 text-slate-900 leading-tight'>COMPARATIVA SALARIAL POR CADENAS (PROYECCIÓN 2026)</h2>
      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr>
              <th class='px-6 py-4 font-bold text-slate-900 uppercase text-sm tracking-wider'>Cadena / Empresa</th>
              <th class='px-6 py-4 font-bold text-slate-900 uppercase text-sm tracking-wider'>Rango Líquido Estimado</th>
            </tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr class='hover:bg-slate-50 transition-colors'>
              <td class='px-6 py-4 font-semibold'>Cruz Verde</td>
              <td class='px-6 py-4 font-bold text-green-700'>\$650.000 - \$880.000</td>
            </tr>
            <tr class='hover:bg-slate-50 transition-colors'>
              <td class='px-6 py-4 font-semibold'>Salcobrand</td>
              <td class='px-6 py-4 font-bold text-green-700'>\$630.000 - \$820.000</td>
            </tr>
            <tr class='hover:bg-slate-50 transition-colors'>
              <td class='px-6 py-4 font-semibold'>Farmacias Ahumada</td>
              <td class='px-6 py-4 font-bold text-green-700'>\$610.000 - \$790.000</td>
            </tr>
            <tr class='hover:bg-slate-50 transition-colors'>
              <td class='px-6 py-4 font-semibold'>Independientes / Simi</td>
              <td class='px-6 py-4 font-bold text-green-700'>\$550.000 - \$700.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>FACTORES CRÍTICOS QUE AUMENTAN TUS INGRESOS</h2>
      <ul class='list-disc pl-8 my-6 space-y-4 text-slate-700'>
        <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas puede subir el total un 20% o más.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche.</li>
        <li><strong>Especialización y Certificación:</strong> Revisa los <a href='/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil.</li>
      </ul>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>¿RETAIL O SECTOR CLÍNICO (HOSPITALES)?</h2>
      <p>Mientras que el Retail ofrece un techo más alto por comisiones, el Sector Clínico ofrece horarios más estables. Entender la <a href='/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</p>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-8 text-blue-100 text-lg'>El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial.</p>
        <a 
          href='/examen-competencia-seremi-2025'
          class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105'
        >
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Enriquecidas con datos de documentos oficiales)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite es digital en <strong>seremienlinea.minsal.cl</strong> ingresando con tu Clave Única.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'Derecho a Examen: \$19.100. Inscripción en el Registro: \$47.600. Diploma o Carnet: \$29.700.'
  },
  {
    q: '¿Qué documentos necesito subir?',
    a: 'Debes adjuntar: Certificado de enseñanza media completa, certificado de desempeño laboral (mínimo 1 año) firmado por el Q.F. y foto carnet.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Consistencia con el Simulador)
export const LEVELS = QUIZ_LEVELS;
