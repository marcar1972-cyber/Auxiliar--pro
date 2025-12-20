// app/data.js

// Importación de seguridad de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Transcripción literal + Artículo de Sueldos Extendido)
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
      [cite_start]<p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile[cite: 2]. [cite_start]Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud[cite: 3].</p>
      [cite_start]<p>Aquí te lo explico simple, claro y sin enredos[cite: 4].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 6].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      [cite_start]<p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal[cite: 8]:</p>
      <ul class='list-disc pl-8 my-4'>
        [cite_start]<li>Mínimo 1 año de experiencia laboral comprobable en farmacia[cite: 10].</li>
        [cite_start]<li>Realización de labores como: Bodegaje [cite: 11][cite_start], Reposición de medicamentos [cite: 12][cite_start], Dispensación bajo supervisión [cite: 13] [cite_start]y Manejo de productos farmacéuticos[cite: 14].</li>
      </ul>
      [cite_start]<p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento[cite: 15]. [cite_start]El trámite oficial se realiza únicamente a través del portal SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 16, 17].</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <ol class='list-decimal pl-8 my-4 space-y-4'>
        [cite_start]<li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad[cite: 22, 23].</li>
        [cite_start]<li><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada[cite: 24, 25].</li>
        [cite_start]<li><strong>Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica bajo supervisión de un Químico Farmacéutico[cite: 26, 27].</li>
        [cite_start]<li><strong>Rendir y aprobar el examen:</strong> Evalúa conocimientos en farmacología básica, recetas, cadena de frío, vencimientos, legislación y buenas prácticas[cite: 29, 30, 31, 32, 33, 34, 35, 36].</li>
        [cite_start]<li><strong>Obtener la credencial:</strong> Una vez aprobado, la SEREMI entrega la credencial oficial que te habilita legalmente[cite: 37, 38].</li>
      </ol>
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
      [cite_start]<p class='italic mb-6'>(Explicado Fácil) [cite: 56]</p>
      [cite_start]<p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia?[cite: 57]. [cite_start]Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 58].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿Qué es un Auxiliar de Farmacia?</h2>
      [cite_start]<p>Es la persona que apoya al Químico Farmacéutico en atención de público, dispensación bajo supervisión, reposición, bodegaje, revisión de vencimientos, manejo de stock y orientación al paciente[cite: 61, 64, 65, 66, 68, 69, 71].</p>
      [cite_start]<p>En Chile, el Auxiliar no necesita estudiar en instituto, pero debe tener enseñanza media completa, 1 año de experiencia, rendir el examen SEREMI y obtener su credencial según el Decreto Supremo N° 466[cite: 72, 73, 74, 75, 76].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>¿Qué es un Técnico en Farmacia?</h2>
      [cite_start]<p>Es un profesional que estudia una carrera formal de 2 a 3 años en institutos profesionales o centros de formación técnica con malla académica y título técnico[cite: 77, 78, 79, 80, 81]. [cite_start]Sus funciones incluyen apoyo en preparación de medicamentos, control de bodegas, gestión de inventarios y procesos técnicos más complejos[cite: 82, 84, 85, 87, 88, 91]. [cite_start]El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 92].</p>
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
      [cite_start]<p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), estos son los 3 pilares fundamentales que debes dominar para aprobar[cite: 125, 126].</p>
      
      <h3 class='text-lg font-semibold mt-4 mb-2'>1. Legislación Farmacéutica</h3>
      [cite_start]<p>Dominar la diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), libros de control y los roles exclusivos del Químico Farmacéutico[cite: 131, 132, 133].</p>

      <h3 class='text-lg font-semibold mt-4 mb-2'>2. Almacenamiento y Cadena de Frío</h3>
      [cite_start]<p>Rango de temperatura para insulinas y vacunas (2°C a 8°C), protocolos de quiebre de cadena de frío y el sistema FEFO (First Expired, First Out)[cite: 141, 142, 143].</p>

      <h3 class='text-lg font-semibold mt-4 mb-2'>3. Matemáticas Farmacéuticas</h3>
      [cite_start]<p>Manejo de la Regla de Tres para cálculo de dosis y duración de tratamientos[cite: 144, 145]. [cite_start]Ejemplo: Cálculo de comprimidos necesarios para tratamientos de 7 días con tomas cada 8 horas[cite: 147, 149].</p>
    `
  },
  {
    id: 4,
    slug: 'que-es-el-decreto-466-farmacias-chile',
    title: "¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer",
    excerpt: 'Análisis detallado del Reglamento de Farmacias, Droguerías y Almacenes Farmacéuticos en Chile.',
    date: '19 Dic 2025',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      [cite_start]<p>El Decreto Supremo N° 466 es la normativa fundamental que regula el funcionamiento de los establecimientos farmacéuticos en Chile[cite: 8, 21].</p>
      <h2 class='text-xl font-bold mt-6 mb-4'>Puntos Clave para el Auxiliar</h2>
      [cite_start]<p>Define la farmacia como un centro de salud y establece los requisitos de habilitación profesional bajo el Artículo 71, exigiendo un año de práctica certificado por el Director Técnico[cite: 15, 27]. Puedes profundizar en los requisitos legales en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a>.</p>
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
        <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos o marcas propias. Es el componente que más influye en el total final.</li>
        <li><strong>Bono de Cumplimiento de Sala:</strong> Una gratificación que se activa si la sucursal completa sus metas mensuales de ventas totales.</li>
        <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
      </ul>

      <h2 class='text-xl font-bold mt-10 mb-6 text-slate-900 leading-tight'>COMPARATIVA SALARIAL POR CADENAS (PROYECCIÓN 2026)</h2>
      <p className='mb-6'>Según el análisis de mercado, estos son los rangos de sueldo líquido (dinero en bolsillo) para jornadas de 44/45 horas:</p>
      
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
      <p>No todos los auxiliares ganan lo mismo. Existen tres "aceleradores" de sueldo que puedes aprovechar:</p>
      <ul class='list-disc pl-8 my-6 space-y-4 text-slate-700'>
        <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche, lo cual incrementa el valor de la hora trabajada.</li>
        <li><strong>Especialización y Certificación:</strong> Un conocimiento sólido en farmacología permite cerrar ventas técnicas con mayor facilidad. Revisa los <a href='/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil.</li>
      </ul>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>¿RETAIL O SECTOR CLÍNICO (HOSPITALES)?</h2>
      <p>Muchos profesionales se debaten entre la farmacia comercial y la asistencial. Mientras que el Retail ofrece un techo más alto por comisiones, el Sector Clínico ofrece horarios más estables y menos estrés de venta directa. Entender la <a href='/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</p>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-8 text-blue-100 text-lg'>El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas en las grandes cadenas.</p>
        <a 
          href='/examen-competencia-seremi-2025'
          class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95'
        >
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Actualizadas con datos técnicos del Minsal)
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
    a: 'Certificado de enseñanza media, copia de contrato o antigüedad y certificado de desempeño laboral firmado por el Q.F. (mínimo 1 año).'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Mantenimiento del Simulador)
export const LEVELS = QUIZ_LEVELS;
