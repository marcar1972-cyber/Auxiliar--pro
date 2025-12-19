// app/data.js

// 1. ARTÍCULOS (Transcripción literal completa)
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
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal: ☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como: Bodegaje, Reposición de medicamentos, Dispensación bajo supervisión y Manejo de productos farmacéuticos. Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <p>1. Ser mayor de 18 años: Debes ser legalmente mayor de edad. 2. Enseñanza media completa: Debes contar con tu licencia de cuarto medio aprobada. 3. Haber trabajado en farmacia: Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico. 4. Rendir y aprobar el examen de Auxiliar de Farmacia: Evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas. 5. Obtener la credencial: Una vez aprobado el examen, la SEREMI entrega la credencial oficial.</p>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    excerpt: "(Explicado Fácil) Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta.",
    date: "17 Dic 2025",
    readTime: "4 min",
    content: `
      <p class="italic mb-6">(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Apoya al Químico Farmacéutico en atención, dispensación, reposición y stock. En Chile, no necesita estudiar en instituto, pero debe tener 1 año de experiencia y aprobar el examen SEREMI según el Decreto Supremo N° 466.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que sí estudia una carrera formal (2 a 3 años) en institutos o centros de formación técnica con malla académica y prácticas. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional.",
    date: "18 Dic 2025",
    readTime: "4 min",
    content: `
      <p>Analizamos, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o si te van a preguntar. Aquí tienes los 3 pilares fundamentales:</p>
      <h2 class="text-xl font-bold mt-8 mb-4">1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>Diferencia entre Receta Cheque y Receta Retenida: vigencia (30 días), libros de control y decretos. Pregunta típica: "Si llega una receta de Clonazepam emitida hace 40 días, ¿la puede despachar?" > Respuesta: No, el máximo es 30 días corridos.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: refrigeradores para insulinas y vacunas deben mantenerse entre 2°C y 8°C. Sistema FEFO: lo primero que vence es lo primero que se vende.</p>
      <h2 class="text-xl font-bold mt-8 mb-4">3. Matemáticas Farmacéuticas</h2>
      <p>Manejar la "Regla de Tres". Ejemplo: Amoxicilina 500mg c/8h por 7 días = 21 comprimidos. Si la caja trae 16, el paciente necesita 2 cajas.</p>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (RESTABLECIDAS Y EXTENDIDAS)
export const FAQS = [
  { 
    q: "¿Dónde hago el trámite de inscripción?", 
    a: "El trámite oficial se realiza de forma digital a través del portal del Ministerio de Salud en SEREMI en Línea (https://seremienlinea.minsal.cl/asdigital/). Allí podrás revisar requisitos por región, costos asociados y fechas de disponibilidad." 
  },
  { 
    q: "¿Cuáles son los requisitos de experiencia laboral?", 
    a: "Según el D.S. 466, debes acreditar mínimo 1 año de experiencia laboral en farmacia realizando labores de bodegaje, reposición o dispensación bajo supervisión. Esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico." 
  },
  { 
    q: "¿Cuál es la diferencia entre Auxiliar y Técnico?", 
    a: "El Auxiliar se forma mediante la práctica (1 año) y rinde un examen ante la SEREMI. El Técnico en Farmacia estudia una carrera formal de 2 a 3 años en un instituto profesional y su título lo habilita legalmente sin necesidad de examen adicional." 
  },
  { 
    q: "¿Qué sucede si se rompe la cadena de frío?", 
    a: "Debes seguir el protocolo oficial: no abrir la puerta del refrigerador, registrar la temperatura máxima alcanzada y consultar inmediatamente al Director Técnico. Los medicamentos termolábiles deben estar estrictamente entre 2°C y 8°C." 
  }
];

// 3. NIVELES COMPLETOS (RESTAURADOS)
export const LEVELS = [
  { id: 1, title: 'Diagnóstico', desc: 'Conceptos básicos.', icon: '💊', qCount: 10, passingScore: 6, questions: [
    { id: 101, text: '¿Responsable técnico de farmacia?', options: ['Dueño', 'Auxiliar', 'Químico Farmacéutico', 'Gerente'], correctIndex: 2 },
    { id: 102, text: '¿Rango cadena de frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 }
  ]},
  { id: 2, title: 'Legislación', desc: 'D.S. 466.', icon: '⚖️', qCount: 15, passingScore: 9, questions: [
    { id: 201, text: '¿Falta el Q.F.?', options: ['Auxiliar', 'Cierra', 'Dueño', 'Alumno'], correctIndex: 1 }
  ]},
  { id: 3, title: 'Controlados', desc: 'D.S. 404/405.', icon: '🔐', qCount: 25, passingScore: 15, questions: [] },
  { id: 4, title: 'Simulacro Final', desc: 'Experto.', icon: '🎓', qCount: 40, passingScore: 24, questions: [] }
];
