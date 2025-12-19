// app/data.js

// 1. ARTÍCULOS DEL BLOG (Contenido íntegro de PDFs + Nuevo artículo de Sueldos)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.",
    date: "15 Dic 2025",
    readTime: "5 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026",
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud.</p>
      <p>Aquí te lo explico simple, claro y sin enredos.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      <p class="mt-4">☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class="list-disc pl-8 my-4">
        <li>Bodegaje</li>
        <li>Reposición de medicamentos</li>
        <li>• Dispensación bajo supervisión</li>
        <li>• Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="text-blue-600 underline">https://seremienlinea.minsal.cl/asdigital/</a></p>

      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <ol class="list-decimal pl-8 my-4 space-y-2">
        <li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</li>
        <li><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><strong>Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.</li>
        <li><strong>Rendir y aprobar el examen:</strong> Evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento y Legislación.</li>
      </ol>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    excerpt: "(Explicado Fácil) Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta.",
    date: "14 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico",
    content: `
      <p class="italic mb-6">(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Apoya al Q.F. en atención, dispensación, reposición y stock. En Chile, no necesita estudiar en instituto, pero debe tener 1 año de experiencia y aprobar el examen ante la SEREMI de Salud según el Decreto Supremo N° 466.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que estudia una carrera formal de 2 a 3 años. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), estos son los 3 pilares fundamentales:</p>
      <h2 class="text-xl font-bold mt-6 mb-4">1. Legislación Farmacéutica</h2>
      <p>Diferencia entre Receta Cheque y Receta Retenida (vigencia de 30 días), libros de control y decretos.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: Los refrigeradores para insulinas y vacunas deben mantenerse entre 2°C y 8°C.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">3. Matemáticas Farmacéuticas</h2>
      <p>Uso de la "Regla de Tres" para cálculo de dosis y duración de tratamientos.</p>
    `
  },
  {
    id: 4,
    slug: "cuanto-gana-auxiliar-farmacia-chile-2026",
    title: "¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos 2026)",
    excerpt: "Descubre los rangos salariales, bonos por metas y beneficios que percibe un auxiliar de farmacia en el mercado chileno.",
    date: "19 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Sueldos+Chile+2026",
    content: `
      <p>Una de las preguntas más frecuentes para quienes buscan entrar al rubro es: <strong>¿Cuál es el sueldo de un Auxiliar de Farmacia en Chile?</strong></p>
      <p>El salario no es fijo y depende de si trabajas en una gran cadena o en una farmacia independiente, además de los bonos por cumplimiento de metas.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">Rango Salarial Promedio</h2>
      <p>Para este 2026, los sueldos líquidos promedio (lo que recibes en mano) se mueven en estos rangos:</p>
      <ul class="list-disc pl-8 my-4 space-y-2">
        <li><strong>Nivel Inicial:</strong> Entre $500.000 y $580.000 CLP.</li>
        <li><strong>Con Experiencia (más de 2 años):</strong> Entre $650.000 y $800.000 CLP.</li>
      </ul>

      <h2 class="text-xl font-bold mt-6 mb-4">Componentes del Sueldo</h2>
      <p>1. <strong>Sueldo Base:</strong> Generalmente cercano al ingreso mínimo legal. <br>
      2. <strong>Asignaciones:</strong> Colación y movilización. <br>
      3. <strong>Variables (Metas):</strong> Bonos por inventario, atención al cliente o cumplimiento de ventas mensuales.</p>

      <div class="mt-8 border-t pt-4 bg-slate-50 p-4 rounded-xl">
        <h3 class="font-bold">Dato Clave</h3>
        <p>El sueldo suele incrementarse en farmacias de urgencia o 24 horas debido a las asignaciones por turnos nocturnos y horas extras.</p>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES
export const FAQS = [
    { q: "¿Dónde hago el trámite?", a: "En seremienlinea.minsal.cl con tu ClaveÚnica." },
    { q: "¿Requisitos obligatorios?", a: "Mayor de 18 años, 4to medio y 1 año de experiencia certificada." },
    { q: "¿Cuánto cuesta?", a: "Aprox. $19.100 por examen y $47.600 por credencial." },
    { q: "¿Qué pasa si repruebo?", a: "Debes esperar el plazo legal y volver a pagar el arancel." }
];

// 3. NIVELES DEL QUIZ (CON PREGUNTAS)
export const LEVELS = [
    { id: 1, title: 'Prueba Diagnóstico', desc: 'Conceptos generales.', icon: '💊', qCount: 10, passingScore: 6, questions: [
        { id: 101, text: '¿Quién es el responsable técnico legal?', options: ['Dueño', 'Auxiliar', 'Químico Farmacéutico', 'Gerente'], correctIndex: 2 },
        { id: 102, text: '¿Rango temperatura cadena de frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 }
    ]},
    { id: 2, title: 'Legislación', desc: 'D.S. 466.', icon: '⚖️', qCount: 15, passingScore: 9, questions: [
        { id: 201, text: '¿Si falta el Q.F.?', options: ['Auxiliar', 'Cierra', 'Dueño', 'Alumno'], correctIndex: 1 }
    ]},
    { id: 3, title: 'Controlados', desc: 'D.S. 404/405.', icon: '🔐', qCount: 25, passingScore: 15, questions: [
        { id: 301, text: 'Estrella Roja:', options: ['Psicotrópico', 'Estupefaciente', 'Veneno', 'Frío'], correctIndex: 1 }
    ]},
    { id: 4, title: 'Simulacro Final', desc: 'Experto.', icon: '🎓', qCount: 40, passingScore: 24, questions: [
        { id: 412, text: 'FEFO:', options: ['Entra primero', 'Vence primero', 'Caro primero', 'Barato'], correctIndex: 1 }
    ]}
];
