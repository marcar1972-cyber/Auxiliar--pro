// app/data.js

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-chile-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.",
    date: "18 Dic 2025",
    readTime: "5 min",
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud. Aquí te lo explico simple, claro y sin enredos.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal: ☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como: Bodegaje, Reposición de medicamentos, • Dispensación bajo supervisión, • Manejo de productos farmacéuticos. Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: https://seremienlinea.minsal.cl/asdigital/</p>
      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <div class="space-y-4">
        <p><strong>1. Ser mayor de 18 años</strong>: Debes ser legalmente mayor de edad.</p>
        <p><strong>2. Enseñanza media completa</strong>: Debes contar con tu licencia de cuarto medio aprobada.</p>
        <p><strong>3. Haber trabajado en farmacia</strong>: Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.</p>
        <p><strong>4. Rendir y aprobar el examen de Auxiliar de Farmacia</strong>: Evalúa conocimientos como Farmacología básica, Recetas médicas, • Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia.</p>
        <p><strong>5. Obtener la credencial de Auxiliar de Farmacia</strong>: Una vez aprobado el examen, la SEREMI entrega la credencial oficial.</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia-chile",
    title: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    excerpt: "(Explicado Fácil) Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta.",
    date: "17 Dic 2025",
    readTime: "4 min",
    content: `
      <p class="italic mb-6">(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>La persona que apoya al Q.F. en atención, dispensación, reposición, bodegaje, revisión de vencimientos y stock. No necesita estudiar en instituto, pero debe tener 1 año de experiencia y aprobar el examen ante la SEREMI de Salud según el Decreto Supremo N° 466.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que estudia una carrera formal de 2 a 3 años con malla académica, prácticas y título técnico. Sus funciones incluyen preparación de medicamentos y procesos técnicos complejos. El Técnico no rinde examen en la SEREMI.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-2025",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los 3 pilares fundamentales que debes dominar para aprobar el examen ante la SEREMI de Salud.",
    date: "18 Dic 2025",
    readTime: "4 min",
    content: `
      <p>Aquí tienes los 3 pilares fundamentales basados en la normativa oficial (Decretos 466, 404 y 405):</p>
      <h2 class="text-xl font-bold mt-8 mb-4">1. Legislación Farmacéutica</h2>
      <p>Diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), libros de control y decretos. Pregunta típica: ¿Puede despachar una receta de Clonazepam emitida hace 40 días? Respuesta: No, el máximo es 30 días corridos.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: refrigeradores para insulinas y vacunas deben estar entre $2^{\circ}C$ y $8^{\circ}C$. Sistema FEFO: lo primero que vence es lo primero que se vende.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">3. Matemáticas Farmacéuticas</h2>
      <p>Manejar la "Regla de Tres". Ejemplo: Amoxicilina 500mg cada 8 horas por 7 días = 21 comprimidos. Si la caja trae 16, necesitas 2 cajas.</p>
    `
  }
];

export const FAQS = [
  { 
    q: "¿Dónde hago el trámite de inscripción para el examen?", 
    a: "El trámite es digital a través del portal SEREMI en Línea (https://seremienlinea.minsal.cl/asdigital/). Debes ingresar con tu ClaveÚnica y cargar la documentación: licencia de 4to medio y certificado de experiencia de 1 año firmado por el Director Técnico."
  },
  { 
    q: "¿Cuáles son los requisitos de experiencia?", 
    a: "Según el D.S. 466, debes acreditar mínimo 1 año de experiencia laboral en farmacia realizando tareas de bodegaje, reposición o dispensación bajo supervisión directa. Esta experiencia debe ser certificada por el Químico Farmacéutico del establecimiento."
  },
  { 
    q: "¿Diferencia entre Auxiliar y Técnico?", 
    a: "El Auxiliar se forma con la práctica (1 año) y rinde un examen de competencia ante la SEREMI. El Técnico en Farmacia estudia una carrera formal de 2 a 3 años en un instituto profesional y su título lo habilita legalmente sin rendir examen adicional."
  }
];

export const LEVELS = [
  { id: 1, title: 'Prueba Diagnóstico', desc: 'Conceptos generales.', icon: '💊', qCount: 10, passingScore: 6, questions: [
    { id: 101, text: '¿Quién es el responsable técnico legal?', options: ['Dueño', 'Auxiliar', 'Químico Farmacéutico', 'Gerente'], correctIndex: 2 },
    { id: 102, text: '¿Rango temperatura cadena de frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 }
  ]},
  { id: 2, title: 'Legislación', desc: 'D.S. 466.', icon: '⚖️', qCount: 15, passingScore: 9, questions: [
    { id: 201, text: '¿Si falta el Q.F.?', options: ['Auxiliar', 'Cierra', 'Dueño', 'Alumno'], correctIndex: 1 }
  ]},
  { id: 3, title: 'Controlados', desc: 'D.S. 404/405.', icon: '🔐', qCount: 25, passingScore: 15, questions: [] },
  { id: 4, title: 'Simulacro Final', desc: 'Experto.', icon: '🎓', qCount: 40, passingScore: 24, questions: [] }
];
