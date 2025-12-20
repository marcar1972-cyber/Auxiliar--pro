// app/data.js

// Importación protegida de los niveles del simulador
import { LEVELS as QUIZ_LEVELS } from './quizData';

// 1. ARTÍCULOS DEL BLOG (Transcripción literal 1:1 + Artículo de Sueldos Extendido)
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
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud[cite: 2, 3].</p>
      <p>Aquí te lo explico simple, claro y sin enredos[cite: 4].</p>
      
      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional[cite: 6].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>📋 Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal[cite: 8]:</p>
      <p class='mt-4 font-bold'>✅ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como[cite: 10]:</p>
      <ul class='list-disc pl-8 my-4'>
        <li>Bodegaje [cite: 11]</li>
        <li>Reposición de medicamentos [cite: 12]</li>
        <li>• Dispensación bajo supervisión [cite: 13]</li>
        <li>• Manejo de productos farmacéuticos [cite: 14]</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento[cite: 15]. El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href='https://seremienlinea.minsal.cl/asdigital/' target='_blank' class='text-blue-600 underline font-bold'>https://seremienlinea.minsal.cl/asdigital/</a>[cite: 16, 17].</p>

      <h2 class='text-xl font-bold mt-8 mb-4'>📋 Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <p>Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales[cite: 21]:</p>
      <ul class='list-none space-y-4 my-4'>
        <li><strong>✅ 1. Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad[cite: 22, 23].</li>
        <li><strong>✅ 2. Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada[cite: 24, 25].</li>
        <li><strong>✅ 3. Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico[cite: 26, 27].</li>
        <li><strong>✅ 4. Rendir y aprobar el examen:</strong> Este examen evalúa conocimientos como: Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia[cite: 29, 30, 31, 32, 33, 34, 35, 36].</li>
        <li><strong>✅ 5. Obtener la credencial:</strong> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar[cite: 37, 38].</li>
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
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia?[cite: 57]. Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales[cite: 58].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en atención de público, dispensación bajo supervisión, reposición, bodegaje, revisión de vencimientos, manejo de stock y orientación básica[cite: 61, 64, 65, 66, 68, 69, 71].</p>
      <p>En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe tener enseñanza media completa, contar con mínimo 1 año de experiencia, rendir el examen ante la SEREMI de Salud y obtener su credencial oficial según el Decreto Supremo N° 466[cite: 72, 73, 74, 75, 76].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>🎓 ¿Qué es un Técnico en Farmacia?</h2>
      <p>El Técnico en Farmacia es un profesional que sí estudia una carrera formal, generalmente en institutos profesionales o centros de formación técnica durante 2 a 3 años, con malla académica, prácticas y título técnico[cite: 78, 79, 80, 81]. Sus funciones incluyen apoyar directamente al Químico Farmacéutico en preparación de medicamentos, control de bodegas, gestión de inventarios y atención clínica básica[cite: 82, 84, 85, 87, 88, 89]. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente[cite: 92].</p>

      <div class='mt-8 border-t pt-4'>
        <h3 class='font-bold text-lg'>🎯 Conclusión Clara</h3>
        <p>✓ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI[cite: 113].</p>
        <p>✔ El Técnico en Farmacia se forma en instituto + título[cite: 114].</p>
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
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud[cite: 124]. Basándonos en la normativa oficial (Decretos 466, 404 y 405), aquí tienes los 3 pilares fundamentales que debes dominar para aprobar[cite: 125, 126].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>Debes dominar la diferencia entre Receta Cheque y Receta Retenida: vigencia (30 días), los libros de control y los decretos que las regulan (Decreto 404 para estupefacientes y 405 para psicotrópicos)[cite: 131, 132]. También los roles en la farmacia y la diferencia legal entre Farmacia, Almacén Farmacéutico y Botiquín[cite: 133, 135].</p>
      <p class='font-bold bg-amber-50 border-l-4 border-amber-400 p-4 my-6 italic text-slate-800 text-sm'>Pregunta típica: "Si llega una receta de Clonazepam (Lista IV) emitida hace 40 días, ¿la puede despachar?" <br> > Respuesta correcta: No. La vigencia legal máxima para recetas de productos controlados es de 30 días corridos[cite: 136, 137].</p>

      <h2 class='text-xl font-bold mt-6 mb-4'>2. Almacenamiento y Cadena de Frío</h2>
      <p>Datos clave que debes memorizar: Rango de Temperatura entre \$2^{\\circ}C\$ y \$8^{\\circ}C\$ para insulinas y vacunas[cite: 140, 141]. Protocolo de quiebre de cadena de frío y el sistema FEFO (First Expired, First Out)[cite: 142, 143].</p>

      <h2 class='text-xl font-bold mt-10 mb-4'>3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
      <p>Debes manejar la "Regla de Tres" a la perfección[cite: 145]. Ejemplo: Si el médico receta "Amoxicilina 500mg cada 8 horas por 7 días", necesitas calcular que son 21 comprimidos; si la caja trae 16, el paciente necesitará 2 cajas[cite: 147, 149, 150].</p>
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
      <p>El <strong>Decreto Supremo N° 466</strong> es la normativa fundamental que regula el funcionamiento de las farmacias en Chile. Define que las farmacias son centros de salud y establece las condiciones para su funcionamiento bajo la responsabilidad de un Químico Farmacéutico Director Técnico[cite: 155].</p>
      <h2 class='text-xl font-bold mt-6 mb-4 text-slate-900'>Habilitación profesional</h2>
      <p>Según el Artículo 71, para rendir el examen SEREMI se debe acreditar un año de práctica certificado por el Director Técnico. Puedes profundizar en los requisitos legales en nuestra <a href='/biblioteca' class='text-blue-600 underline font-bold'>biblioteca de recursos</a> o revisar la <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline'>diferencia entre Auxiliar y Técnico</a>.</p>
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
        <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
        <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche, lo cual incrementa el valor de la hora trabajada.</li>
        <li><strong>Especialización y Certificación:</strong> Un conocimiento sólido en farmacología permite cerrar ventas técnicas con mayor facilidad. Revisa los <a href='/blog/requisitos-auxiliar-farmacia-chile-2026' class='text-blue-600 underline font-bold'>REQUISITOS LEGALES</a> para profesionalizar tu perfil.</li>
      </ul>

      <h2 class='text-xl font-bold mt-12 mb-4 text-slate-900'>¿RETAIL O SECTOR CLÍNICO (HOSPITALES)?</h2>
      <p>Muchos profesionales se debaten entre la farmacia comercial y la asistencial. Mientras que el Retail ofrece un techo más alto por comisiones, el Sector Clínico ofrece horarios más estables y menos estrés de venta directa. Entender la <a href='/blog/diferencia-auxiliar-tecnico-farmacia' class='text-blue-600 underline font-bold'>DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a> es clave para elegir el camino correcto.</p>

      <div class='bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16'>
        <h2 class='text-3xl font-bold mb-4 text-white'>¿QUIERES ACCEDER A LOS MEJORES SUELDOS?</h2>
        <p class='mb-8 text-blue-100 text-lg'>El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas en las grandes cadenas.</p>
        <a 
          href='/blog/examen-competencia-seremi-2025'
          class='inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95'
        >
          Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Contenido enriquecido de documentos oficiales)
export const FAQS = [
  {
    q: '¿Dónde hago el trámite del examen?',
    a: 'El trámite se encuentra disponible 100% en línea ingresando con tu <strong>Clave Única</strong> al portal <a href="https://seremienlinea.minsal.cl" target="_blank" class="text-blue-600 underline font-bold">seremienlinea.minsal.cl</a>[cite: 16].'
  },
  {
    q: '¿Qué documentos necesito para el trámite?',
    a: 'Para solicitar la certificación, debes adjuntar en formato digital: 1. Certificado de <strong>enseñanza media</strong> completa. 2. Copia del contrato de trabajo o certificado del empleador que acredite antigüedad laboral. 3. Certificado de desempeño laboral firmado por un Químico Farmacéutico que acredite al menos 1 año de desempeño efectivo. 4. Foto tipo carnet.'
  },
  {
    q: '¿Cuál es el costo del trámite?',
    a: 'El costo es diferenciado según la etapa: Derecho a Examen: \$19.100. Inscripción en el Registro (incluye primer certificado): \$47.600. Diploma o Carnet físico: \$29.700.'
  },
  {
    q: '¿Qué pasa si repruebo?',
    a: 'Si el examen es reprobado, la normativa establece que se debe esperar el plazo legal correspondiente para solicitarlo nuevamente. Al ser una nueva solicitud, se deberá <strong>cancelar nuevamente el arancel</strong> por derecho a examen.'
  }
];

// 3. EXPORTACIÓN DE NIVELES (Para compatibilidad con el Simulador)
export const LEVELS = QUIZ_LEVELS;
