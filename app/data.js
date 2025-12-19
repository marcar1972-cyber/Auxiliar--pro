// app/data.js

// 1. ARTÍCULOS DEL BLOG (Contenido íntegro de PDFs letra por letra)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.",
    date: "18 Dic 2025",
    readTime: "5 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026",
    content: `
      <div class="mb-8 border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-xl font-medium text-slate-700 italic">
        Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud. Aquí te lo explico simple, claro y sin enredos.
      </div>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">¿Qué es un Auxiliar de Farmacia?</h3>
      <p class="mb-6">El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h3>
      <p class="mb-4">De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
        <p class="font-bold flex items-center gap-2 mb-4 text-blue-700">
           ☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
          <li class="flex items-center gap-2">• Bodegaje</li>
          <li class="flex items-center gap-2">• Reposición de medicamentos</li>
          <li class="flex items-center gap-2">• Dispensación bajo supervisión</li>
          <li class="flex items-center gap-2">• Manejo de productos farmacéuticos</li>
        </ul>
      </div>

      <p class="mb-6">Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      
      <div class="bg-blue-600 text-white p-6 rounded-2xl shadow-lg mb-10">
        <p class="font-bold mb-2">Trámite Oficial:</p>
        <p class="text-blue-50 text-sm mb-4">El proceso se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea:</p>
        <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors inline-block underline">
          ACCEDER A SEREMI EN LÍNEA
        </a>
      </div>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h3>
      <p class="mb-6">Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales:</p>
      
      <div class="space-y-6 mb-10">
        <div class="flex gap-4">
          <div class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">1</div>
          <div><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</div>
        </div>
        <div class="flex gap-4">
          <div class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">2</div>
          <div><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</div>
        </div>
        <div class="flex gap-4">
          <div class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">3</div>
          <div>
            <strong>Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico. 
            <span class="block mt-1 text-slate-500 italic text-sm">Importante: El tiempo exacto y forma de acreditación lo revisa directamente la SEREMI de Salud de tu región.</span>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">4</div>
          <div>
            <strong>Rendir y aprobar el examen de Auxiliar de Farmacia:</strong> Evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia.
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">5</div>
          <div><strong>Obtener la credencial de Auxiliar de Farmacia:</strong> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.</div>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mb-3">¿Puedo prepararme sin instituto?</h3>
      <p class="mb-6">Sí. Puedes estudiar de forma independiente, usar material online y prepararte con guías, PDFs, ensayos y contenido práctico. Muchos auxiliares actuales se han preparado así. Lo importante es dominar bien los contenidos del examen.</p>

      <div class="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl">
        <h4 class="text-emerald-900 font-black mb-4">Conclusión clara</h4>
        <p class="text-emerald-800">Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas: ☑ Cuarto medio, Mínimo 1 año de experiencia en farmacia, ☑ Aprobar el examen y Obtener tu credencial SEREMI. No es imposible, pero sí requiere constancia, práctica real y estudio enfocado.</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    excerpt: "¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo.",
    date: "17 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico",
    content: `
      <div class="mb-10 text-lg text-slate-600 leading-relaxed">
        Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.
      </div>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">¿Qué es un Auxiliar de Farmacia?</h3>
      <p class="mb-4 text-slate-700 italic font-medium">El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en:</p>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <li class="flex items-center gap-2">☑ Atención de público</li>
        <li class="flex items-center gap-2">☑ Dispensación de medicamentos</li>
        <li class="flex items-center gap-2">☑ Reposición y bodegaje</li>
        <li class="flex items-center gap-2">☑ Revisión de vencimientos</li>
        <li class="flex items-center gap-2">☑ Manejo de stock</li>
        <li class="flex items-center gap-2">☑ Orientación básica</li>
      </ul>
      <p class="mb-8">En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe: Tener enseñanza media completa, Contar con mínimo 1 año de experiencia, Rendir y aprobar el examen ante la SEREMI de Salud y Obtener su credencial oficial según el Decreto Supremo N° 466.</p>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">¿Qué es un Técnico en Farmacia?</h3>
      <p class="mb-6">El Técnico en Farmacia es un profesional que sí estudia una carrera formal, generalmente en institutos profesionales o centros de formación técnica durante 2 a 3 años, con malla académica, prácticas y título técnico.</p>
      <ul class="space-y-3 mb-8 pl-4">
        <li class="flex items-center gap-2 font-semibold">☑ Apoyar directamente al Químico Farmacéutico</li>
        <li class="flex items-center gap-2 font-semibold">☑ Preparación de medicamentos</li>
        <li class="flex items-center gap-2 font-semibold">☑ Control de bodegas y gestión de inventarios</li>
        <li class="flex items-center gap-2 font-semibold">☑ Atención clínica básica y apoyo en procesos técnicos complejos</li>
      </ul>
      <p class="mb-10 text-blue-700 font-bold bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>

      <h3 class="text-2xl font-black text-slate-900 mb-6 text-center">Diferencias Claves</h3>
      <div class="overflow-x-auto mb-10 shadow-sm border border-slate-200 rounded-2xl">
        <table class="w-full text-left">
          <thead class="bg-slate-100">
            <tr>
              <th class="p-4 border-b">Criterio</th>
              <th class="p-4 border-b text-blue-600">Auxiliar de Farmacia</th>
              <th class="p-4 border-b text-emerald-600">Técnico en Farmacia</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-4 font-bold">Estudios</td>
              <td class="p-4">No estudia carrera formal</td>
              <td class="p-4">Estudia 2 a 3 años</td>
            </tr>
            <tr class="border-b">
              <td class="p-4 font-bold">Aprendizaje</td>
              <td class="p-4">Aprende trabajando</td>
              <td class="p-4">Formación académica</td>
            </tr>
            <tr class="border-b">
              <td class="p-4 font-bold">Validación</td>
              <td class="p-4">Rinde examen SEREMI</td>
              <td class="p-4">No rinde examen / Tiene título</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Funciones</td>
              <td class="p-4">Básicas y apoyo</td>
              <td class="p-4">Técnicas más avanzadas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-slate-900 text-white p-8 rounded-3xl mb-10">
        <h4 class="text-xl font-bold mb-4">¿Cuál es mejor?</h4>
        <p class="text-slate-300">No es que uno sea "mejor" que otro. Todo depende de tu situación: Si quieres entrar rápido al rubro, el camino de Auxiliar es más directo. Si buscas formación técnica completa, el camino es el Técnico. Ambos son fundamentales para el sistema.</p>
      </div>

      <div class="flex flex-col md:flex-row gap-4 border-t pt-8">
        <div class="flex-1 bg-slate-50 p-4 rounded-xl text-sm font-bold">✓ Formación en práctica + examen</div>
        <div class="flex-1 bg-slate-50 p-4 rounded-xl text-sm font-bold">✔ Formación en instituto + título</div>
      </div>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o si te van a preguntar.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <div class="mb-10 p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
        <p class="text-slate-700 italic">Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud.</p>
      </div>
      
      <p class="mb-8">Es normal sentir ansiedad. En internet circulan muchos mitos, pero aquí vamos a analizar, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o si te van a preguntar. No necesitas suerte, necesitas estrategia. Aquí tienes los 3 pilares fundamentales que debes dominar para aprobar.</p>

      <h3 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">1. Legislación Farmacéutica (El filtro principal)</h3>
      <p class="mb-6">La mayoría de los reprobados caen aquí. La autoridad
