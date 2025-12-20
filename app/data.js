// app/data.js

// Importación de los niveles del simulador desde el archivo independiente
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Contenido íntegro, enlaces corregidos y sintaxis validada)
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
      [cite_start]<p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 240].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      [cite_start]<p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal[cite: 242]:</p>
      [cite_start]<p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como[cite: 244]:</p>
      <ul class='list-disc pl-8 my-4'>
        [cite_start]<li>Bodegaje [cite: 245]</li>
        [cite_start]<li>Reposición de medicamentos [cite: 246]</li>
        [cite_start]<li>Dispensación bajo supervisión [cite: 247]</li>
        [cite_start]<li>Manejo de productos farmacéuticos [cite: 248]</li>
      </ul>
      [cite_start]<p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento[cite: 249].</p>
      [cite_start]<p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 251].</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      [cite_start]<p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales[cite: 255]:</p>
      <ul class='list-none space-y-4 my-4'>
        [cite_start]<li><strong>✅ 1. Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad[cite: 256, 257].</li>
        [cite_start]<li><strong>✅ 2. Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada[cite: 258, 259].</li>
        [cite_start]<li><strong>✅ 3. Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico[cite: 260, 261].</li>
        [cite_start]<li><strong>✅ 4. Rendir y aprobar el examen:</strong> Este examen evalúa conocimientos en farmacología básica, recetas, cadena de frío y legislación [cite: 263-270].</li>
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
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? [cite_start]Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 291, 292].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>Apoya al Químico Farmacéutico en atención, dispensación, reposición y stock [cite: 295, 298-305]. [cite_start]No necesita estudiar en instituto, pero debe acreditar 1 año de experiencia y aprobar el examen SEREMI [cite: 306-310].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      [cite_start]<p>Es un profesional que estudia una carrera formal de 2 a 3 años en institutos o centros de formación técnica [cite: 311-315]. [cite_start]El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 326].</p>

      <div class='mt-8 border-t pt-4'>
        <h3 class='font-bold text-lg'>🎯 Conclusión Clara</h3>
        [cite_start]<p>✓ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI[cite: 347].</p>
        [cite_start]<p>✔ El Técnico en Farmacia se forma en instituto + título[cite: 348].</p>
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
      [cite_start]<p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud[cite: 358].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      [cite_start]<p>Debes conocer la diferencia entre Receta Cheque y Receta Retenida, vigencias de 30 días, libros de control y los roles exclusivos del Químico Farmacéutico [cite: 361-369].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Los refrigeradores deben mantenerse estrictamente entre 2°C y 8°C. [cite_start]Debes conocer el protocolo de quiebre de cadena de frío y el sistema FEFO [cite: 372-377].</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas</h2>
      [cite_start]<p>Uso de la Regla de Tres para cálculo de dosis y duración de tratamientos [cite: 378-384].</p>
      
      <div class='mt-8 border-t pt-4 bg-slate-50 p-6 rounded-xl'>
        [cite_start]<p>Lee directamente el <strong>Decreto 466</strong>; es la fuente de la verdad[cite: 389, 390].</p>
      </div>
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
      <p>El <strong>Decreto Supremo N° 466</strong> define que las farmacias son centros de salud y establece las condiciones sanitarias para su funcionamiento.</p>
      <h2 class='text-xl font-bold mt-6 mb-4'>Habilitación profesional</h2>
      <p>Según el Artículo 71, para rendir el examen SEREMI se debe acreditar ser mayor de 18 años, tener enseñanza media completa y un año de práctica en farmacia certificado por el Director Técnico.</p>
      <div class='mt-8 border-t pt-4 bg-slate-50 p-6 rounded-xl text-center'>
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
      <div class='overflow-x-auto my-8 border border-slate-200 rounded-2xl'>
        <table class='w-full text-left border-collapse'>
          <thead class='bg-slate-50 border-b border-slate-200'>
            <tr>
              <th class='px-6 py-4 font-bold text-slate-900'>Cadena / Empresa</th>
              <th class='px-6 py-4 font-bold text-slate-900'>Rango Líquido Estimado</th>
            </tr>
          </thead>
          <tbody class='divide-y divide-slate-200 text-slate-700'>
            <tr><td class='px-6 py-4'>Cruz Verde</td><td class='px-6 py-4 font-bold'>\$650.000 - \$880.000</td></tr>
            <tr><td class='px-6 py-4'>Salcobrand</td><td class='px-6 py-4 font-bold'>\$630.000 - \$820.000</td></tr>
            <tr><td class='px-6 py-4'>Farmacias Ahumada</td><td class='px-6 py-4 font-bold'>\$610.000 - \$790.000</td></tr>
            <tr><td class='px-6 py-4'>Independientes / Simi</td><td class='px-6 py-4 font-bold'>\$550.000 - \$700.000</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class='text-xl font-bold mt-6 mb-4'>FACTORES CRÍTICOS QUE AUMENTAN TUS INGRESOS</h2>
      <p>Existen tres "aceleradores" de sueldo que puedes aprovechar:</p>
      <ul class='list-disc pl-8 my-4 space-y-2'>
        <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche.</li>
        <li><strong>Especialización y Certificación:</strong> Revisa los <a href='/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil y cerrar ventas técnicas.</li>
      </ul>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿RETAIL O SECTOR CLÍNICO (HOSPITALES)?</h2>
      <p>El Retail ofrece un techo más alto por comisiones, mientras que el Sector Clínico ofrece horarios estables y menos estrés de venta directa. Entender la <a href='/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</p>

      <div class='bg-blue-600 p-8 rounded-3xl text-center shadow-xl my-10'>
        <h2 class='text-2xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-6 text-blue-100'>El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial.</p>
        <a href='/examen-competencia-seremi-2025' class='inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors'>
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Contenido enriquecido de documentos oficiales)
export const FAQS = [
  {
    q: "¿Dónde hago el trámite del examen?",
    [cite_start]a: "El trámite se encuentra disponible 100% en línea ingresando con tu <strong>Clave Única</strong> al portal <a href='https://seremienlinea.minsal.cl' target='_blank' class='text-blue-600 underline font-bold'>seremienlinea.minsal.cl</a>[cite: 5, 42]."
  },
  {
    q: "¿Qué documentos necesito para el trámite?",
    a: "Debes adjuntar digitalmente: 1. Certificado de <strong>enseñanza media</strong>. 2. Copia de contrato o certificado de antigüedad. 3. Certificado de desempeño laboral firmado por un Químico Farmacéutico (mínimo 1 año). 4. [cite_start]Foto tipo carnet [cite: 11-16, 194, 195]."
  },
  {
    q: "¿Cuál es el costo del trámite?",
    [cite_start]a: "El costo es diferenciado: Derecho a Examen \$19.100[cite: 19]. [cite_start]Inscripción en el Registro (incluye primer certificado) \$47.600[cite: 20]. [cite_start]Diploma o Carnet físico \$29.700[cite: 21]."
  },
  {
    q: "¿Qué pasa si repruebo?",
    [cite_start]a: "Si el examen es reprobado, la normativa establece que se debe esperar el plazo legal para solicitarlo nuevamente y cancelar otra vez el arancel de derecho a examen[cite: 232]."
  }
];

// 3. EXPORTACIÓN DE NIVELES (Para compatibilidad con el Simulador)
export const LEVELS = QUIZ_LEVELS;
