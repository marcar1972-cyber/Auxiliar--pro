// app/data.js

// 1. ARTÍCULOS DEL BLOG (Transcripción literal 1:1 de tus PDFs)
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
        <li>Dispensación bajo supervisión</li>
        <li>Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="text-blue-600 underline">https://seremienlinea.minsal.cl/asdigital/</a></p>

      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <ol class="list-decimal pl-8 my-4 space-y-4">
        <li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</li>
        <li><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><strong>Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.</li>
        <li><strong>Rendir y aprobar el examen de Auxiliar de Farmacia:</strong> Este examen evalúa conocimientos como Farmacología básica, Recetas médicas, Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia.</li>
        <li><strong>Obtener la credencial de Auxiliar de Farmacia:</strong> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.</li>
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
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico en atención de público, dispensación, reposición y bodegaje. En Chile, el Auxiliar no necesita estudiar en instituto, pero debe tener enseñanza media completa, 1 año de experiencia y aprobar el examen ante la SEREMI según el Decreto Supremo N° 466.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que estudia una carrera formal de 2 a 3 años en institutos profesionales o centros de formación técnica, con malla académica y título técnico. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>
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
      <p>Basándonos en la normativa oficial (Decretos 466, 404 y 405), estos son los 3 pilares fundamentales que debes dominar para aprobar.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">1. Legislación Farmacéutica</h2>
      <p>Diferencia entre Receta Cheque y Receta Retenida: vigencia de 30 días, libros de control y decretos (404 para estupefacientes y 405 para psicotrópicos).</p>
      <h2 class="text-xl font-bold mt-6 mb-4">2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de Temperatura: Los refrigeradores para insulinas y vacunas deben mantenerse estrictamente entre 2°C y 8°C. Uso del sistema FEFO (First Expired, First Out).</p>
      <h2 class="text-xl font-bold mt-6 mb-4">3. Matemáticas Farmacéuticas</h2>
      <p>Uso de la Regla de Tres para cálculo de dosis y duración de tratamientos.</p>
    `
  },
  {
    id: 4,
    slug: "que-es-el-decreto-466-farmacias-chile",
    title: "¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer",
    excerpt: "En esta columna de investigación, desglosamos el Reglamento de Farmacias, Droguerías y Almacenes Farmacéuticos que rige en Chile.",
    date: "19 Dic 2025",
    readTime: "6 min",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile",
    content: `
      <p>El Decreto Supremo N° 466 establece que las farmacias son centros de salud y define las condiciones mínimas para su funcionamiento. El punto más crítico para nuestra comunidad es la habilitación profesional bajo el <strong>Artículo 71</strong>.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Estándares Técnicos</h2>
      <p>El análisis revela estándares críticos: almacenamiento fuera del suelo en estantes o tarimas, temperatura ambiental máxima de 25°C y cadena de frío obligatoria entre 2°C y 8°C.</p>
      <p class="mt-4">Puedes estudiar el texto completo en nuestra <a href="/biblioteca" class="text-blue-600 underline">biblioteca de recursos</a>.</p>
    `
  }
];

// 2. PREGUNTAS FRECUENTES (Enriquecidas con datos técnicos de tus PDFs)
export const FAQS = [
  {
    q: "¿Dónde hago el trámite del examen?",
    a: "El trámite es 100% digital en <strong>seremienlinea.minsal.cl</strong> ingresando con tu Clave Única. Si no tienes cuenta, debes registrarte con tus datos personales y un email válido para recibir tus credenciales de acceso."
  },
  {
    q: "¿Qué documentos necesito subir a la plataforma?",
    a: "Para la certificación de competencias de Auxiliar de Farmacia, debes adjuntar digitalmente: 1. Certificado de enseñanza media completa. 2. Copia del contrato o certificado del empleador que acredite antigüedad laboral. 3. Certificado de desempeño laboral emitido por el Químico Farmacéutico (mínimo 1 año). 4. Foto tipo carnet."
  },
  {
    q: "¿Cuál es el costo detallado del trámite?",
    a: "El proceso tiene costos diferenciados: a) Derecho a Examen: $19.100. b) Inscripción en el Registro (incluye primer certificado): $47.600. c) Diploma o Carnet: $29.700. El pago solo se habilita si cumples con los requisitos reglamentarios."
  },
  {
    q: "¿Cómo sé si aprobé y qué pasa después?",
    a: "Tras rendir el examen, la SEREMI te notificará. Si apruebas, queda disponible un segundo trámite por la diferencia de arancel para la Resolución de Autorización para el libre ejercicio de la profesión, que incluye tu carnet y certificado oficial."
  }
];

// 3. NIVELES DEL QUIZ (Las 90 preguntas originales restauradas)
export const LEVELS = [
  { 
    id: 1, 
    title: 'Prueba Diagnóstico', 
    desc: 'Conceptos generales para calentar motores.', 
    icon: '💊', 
    qCount: 10, 
    passingScore: 6,
    timeLimit: 0, 
    questions: [
      { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['El Dueño', 'El Auxiliar de más antigüedad', 'El Químico Farmacéutico', 'El Gerente'], correctIndex: 2 }, 
      { id: 102, text: '¿Cuál es el rango de temperatura para cadena de frío?', options: ['0°C a 5°C', '2°C a 8°C', '8°C a 15°C', 'Ambiente'], correctIndex: 1 },
      { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Con receta retenida', 'Venta directa (Over The Counter)', 'Uso hospitalario', 'Controlado'], correctIndex: 1 },
      { id: 104, text: 'El Auxiliar de Farmacia debe trabajar bajo supervisión de:', options: ['El cliente', 'El Químico Farmacéutico', 'El cajero', 'Nadie'], correctIndex: 1 },
      { id: 105, text: '¿Qué organismo fiscaliza a las farmacias en Chile?', options: ['ISP y SEREMI de Salud', 'Sernac', 'Colegio de Farmacéuticos', 'Carabineros'], correctIndex: 0 },
      { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['El original', 'Mismo efecto terapéutico comprobado que el original', 'Copia barata', 'Natural'], correctIndex: 1 },
      { id: 107, text: '¿Cuál es la vía de administración "Sublingual"?', options: ['Debajo de la lengua', 'Inyectable', 'Sobre la piel', 'Rectal'], correctIndex: 0 },
      { id: 108, text: '¿Qué indica la "Fecha de Vencimiento"?', options: ['Fabricación', 'Límite para consumo seguro', 'Fecha de venta', 'Apertura'], correctIndex: 1 },
      { id: 109, text: '¿Dónde almacenar medicamentos en casa?', options: ['Baño', 'Cocina', 'Lugar fresco y seco', 'Al sol'], correctIndex: 2 },
      { id: 110, text: 'La sigla D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis Común', 'Dirección Central', 'Droguería'], correctIndex: 0 }
    ] 
  },
  { 
    id: 2, 
    title: 'Legislación (D.S. 466 y Ley Fármacos)', 
    desc: 'Normativa general y funcionamiento de farmacia.', 
    icon: '⚖️', 
    qCount: 15, 
    passingScore: 9,
    timeLimit: 1200, 
    questions: [
      { id: 201, text: 'Según D.S. 466, ¿quién asume la Dirección Técnica si falta el Q.F.?', options: ['Auxiliar experto', 'Nadie (Farmacia debe cerrar)', 'Dueño', 'Alumno'], correctIndex: 1 },
      { id: 202, text: '¿Temperatura ambiental máxima en sala de ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 },
      { id: 203, text: 'El Auxiliar de Farmacia debe acreditar experiencia de:', options: ['6 meses', '1 año', '2 años', '3 meses'], correctIndex: 1 },
      { id: 204, text: '¿Qué libro es OBLIGATORIO para uso del público?', options: ['Control de Psicotrópicos', 'Reclamos y Sugerencias', 'Ventas', 'Asistencia'], correctIndex: 1 },
      { id: 205, text: 'La prohibición de la "Canela" se refiere a:', options: ['Prohibido vender canela en rama', 'Incentivos económicos por marcas', 'Prohibido genéricos', 'Prohibido descuentos'], correctIndex: 1 },
      { id: 206, text: '¿Es legal fraccionar medicamentos?', options: ['No', 'Sí, bajo supervisión Q.F.', 'Sí, libremente', 'Solo urgente'], correctIndex: 1 },
      { id: 207, text: 'Si un cliente pide cambiar un remedio de marca por un bioequivalente:', options: ['No se puede', 'Es obligatorio ofrecer la alternativa', 'Solo si el médico autoriza', 'Depende del stock'], correctIndex: 1 },
      { id: 208, text: '¿Dónde deben estar los medicamentos de Venta Directa?', options: ['Ocultos', 'En góndolas accesibles', 'En la bodega', 'Solo en caja'], correctIndex: 1 },
      { id: 209, text: '¿Quién puede dirigir un Almacén Farmacéutico?', options: ['Auxiliar', 'Práctico de Farmacia', 'Enfermera', 'Dueño'], correctIndex: 1 },
      { id: 210, text: '¿Qué debe incluir obligatoriamente el envase?', options: ['Foto del dueño', 'El precio de venta', 'Publicidad', 'Horario de la farmacia'], correctIndex: 1 },
      { id: 211, text: '¿Cuánto tiempo debe ejercer el DT su cargo diariamente?', options: ['2 horas', '4 horas', 'Al menos 8 horas', 'Cuando quiera'], correctIndex: 2 },
      { id: 212, text: 'El Botiquín es un recinto destinado a:', options: ['Venta al público', 'Uso interno de instituciones', 'Fabricación', 'Importación'], correctIndex: 1 },
      { id: 213, text: '¿Qué se prohíbe fraccionar?', options: ['Paracetamol', 'Hormonas y oncológicos', 'Ibuprofeno', 'Vitaminas'], correctIndex: 1 },
      { id: 214, text: 'Ante una receta ilegible, ¿qué hace el auxiliar?', options: ['Despacha lo que entiende', 'Pregunta al paciente', 'No despacha y deriva al Q.F.', 'Llama a otra farmacia'], correctIndex: 2 },
      { id: 215, text: 'Los medicamentos deben almacenarse:', options: ['En el suelo', 'En estantes o tarimas', 'Al sol', 'Junto a la comida'], correctIndex: 1 }
    ] 
  },
  { 
    id: 3, 
    title: 'Controlados (D.S. 404 y 405)', 
    desc: 'Estupefacientes, Psicotrópicos y sus reglas de oro.', 
    icon: '🔐', 
    qCount: 25, 
    passingScore: 15, 
    timeLimit: 1800, 
    questions: [
      { id: 301, text: '¿Qué símbolo identifica a los ESTUPEFACIENTES?', options: ['Estrella Verde', 'Estrella Roja (5 puntas)', 'Círculo Rojo', 'Cruz Negra'], correctIndex: 1 },
      { id: 302, text: '¿Qué símbolo identifica a los PSICOTRÓPICOS?', options: ['Estrella Verde (5 puntas)', 'Estrella Roja', 'Triángulo Amarillo', 'Ninguno'], correctIndex: 0 },
      { id: 303, text: '¿Cuál es la validez de una Receta Cheque?', options: ['60 días', '30 días corridos', '15 días', '1 año'], correctIndex: 1 },
      { id: 304, text: '¿Cómo se deben almacenar los Estupefacientes?', options: ['En estantería abierta', 'Bajo llave', 'En el refrigerador', 'En el mesón'], correctIndex: 1 },
      { id: 305, text: 'El Clonazepam y Diazepam pertenecen a la lista:', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 3 },
      { id: 306, text: '¿Con qué receta se venden las Benzodiazepinas?', options: ['Receta Cheque', 'Receta Médica Retenida', 'Receta Simple', 'Sin Receta'], correctIndex: 1 },
      { id: 307, text: 'Si un jarabe de Codeína tiene más de 60mg, ¿qué receta usa?', options: ['Simple', 'Retenida', 'Cheque', 'No se vende'], correctIndex: 2 },
      { id: 308, text: 'Los Psicotrópicos de Lista II (Anfetaminas) se venden con:', options: ['Receta Simple', 'Receta Retenida', 'Receta Cheque', 'Vale vista'], correctIndex: 2 },
      { id: 309, text: '¿Quién debe despachar personalmente las Recetas Cheque?', options: ['Cualquier auxiliar', 'El cajero', 'El Director Técnico', 'El alumno'], correctIndex: 2 },
      { id: 310, text: '¿Muestras médicas de Estupefacientes?', options: ['Sí', 'No (salvo excepciones)', 'Solo a amigos', 'Depende del médico'], correctIndex: 1 },
      { id: 311, text: '¿Qué hacer ante una Receta Cheque falsa?', options: ['Vender igual', 'Retener y denunciar', 'Devolverla', 'Romperla'], correctIndex: 1 },
      { id: 312, text: 'La Morfina es un:', options: ['Psicotrópico Lista IV', 'Estupefaciente', 'Venta Directa', 'Cosmético'], correctIndex: 1 },
      { id: 313, text: '¿Color de la Receta Cheque para uso en Farmacia?', options: ['Café', 'Amarillo', 'Rojo', 'Azul'], correctIndex: 1 },
      { id: 314, text: 'El Libro de Control de Estupefacientes es:', options: ['Opcional', 'Obligatorio', 'Solo digital', 'No existe'], correctIndex: 1 },
      { id: 315, text: 'Importación de estupefacientes requiere autorización de:', options: ['ISP', 'Aduana', 'Municipalidad', 'SII'], correctIndex: 0 },
      { id: 316, text: '¿Lista de psicotrópicos prohibida?', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 0 },
      { id: 317, text: 'El Alprazolam se identifica con:', options: ['Estrella Roja', 'Estrella Verde', 'Sin símbolo', 'Círculo Azul'], correctIndex: 1 },
      { id: 318, text: '¿Puede un Dentista recetar Clonazepam?', options: ['No', 'Sí, con Receta Retenida', 'Sí, con Receta Cheque', 'Solo antibióticos'], correctIndex: 1 },
      { id: 319, text: '¿Edad mínima para retirar un controlado?', options: ['15 años', '18 años (con Cédula)', '21 años', 'Cualquier edad'], correctIndex: 1 },
      { id: 320, text: '¿Productos estupefacientes por Receta Cheque?', options: ['Uno solo', 'Dos', 'Tres', 'Los que quepan'], correctIndex: 0 },
      { id: 321, text: 'Ruta y Transporte de estupefacientes autorizada por:', options: ['Carabineros', 'Servicio de Salud', 'El transportista', 'Nadie'], correctIndex: 1 },
      { id: 322, text: '¿Recetas de controlados con enmiendas?', options: ['Sí', 'No, deben ser íntegras', 'Solo si firma el médico', 'Con corrector'], correctIndex: 1 },
      { id: 323, text: '¿Qué sucede con la Receta Retenida tras la venta?', options: ['Se devuelve', 'Se bota', 'Se archiva en farmacia', 'Se envía al médico'], correctIndex: 2 },
      { id: 324, text: '¿Quién aprueba las cuotas de importación de drogas?', options: ['El ISP', 'La Farmacia', 'El Laboratorio', 'Ministerio Hacienda'], correctIndex: 0 },
      { id: 325, text: 'El Fenobarbital (Barbitúrico) es:', options: ['Lista I', 'Lista II', 'Lista III', 'Venta Directa'], correctIndex: 2 }
    ] 
  },
  { 
    id: 4, 
    title: 'Simulacro Final (Experto)', 
    desc: 'Evaluación final de alta exigencia: Técnica, Normativa y Matemáticas.', 
    icon: '🎓', 
    qCount: 40, 
    passingScore: 24,
    timeLimit: 3600,
    questions: [
      { id: 401, text: 'CÁLCULO DE FRASCOS: 5 ml al día por 60 días. Frasco trae 100 ml. ¿Cuántos necesita?', options: ['1 Frasco', '2 Frascos', '3 Frascos', '4 Frascos'], correctIndex: 2 },
      { id: 402, text: 'FRACCIONAMIENTO: 1/2 comp. mañana y 1 noche por 90 días. Caja trae 20. ¿Cuántas cajas?', options: ['5 cajas', '6 cajas', '7 cajas', '8 cajas'], correctIndex: 2 },
      { id: 403, text: 'PEDIATRÍA: Niño 20 kg. Dosis: 50 mg/kg/día en 4 tomas. ¿Mg por dosis?', options: ['1000 mg', '500 mg', '250 mg', '125 mg'], correctIndex: 2 },
      { id: 404, text: 'CÁLCULO GOTAS: 23 gotas c/12hrs por 90 días. Frasco 25ml (500 gotas). ¿Cuántos necesita?', options: ['5 Frascos', '7 Frascos', '9 Frascos', '12 Frascos'], correctIndex: 2 },
      { id: 405, text: 'INSULINA: 40 UI diarias. El lápiz trae 3 ml (100 UI/ml). ¿Lápices para 30 días?', options: ['2 Lápices', '3 Lápices', '4 Lápices', '5 Lápices'], correctIndex: 2 },
      { id: 406, text: 'CONVERSIÓN: ¿A cuántos mg equivalen 0.005 kg?', options: ['5 mg', '50 mg', '500 mg', '5.000 mg'], correctIndex: 3 },
      { id: 407, text: 'ENFERMERÍA: 500 ml en 4 horas (20 gotas/ml). Velocidad de goteo:', options: ['20 gotas/min', '42 gotas/min', '60 gotas/min', '83 gotas/min'], correctIndex: 1 },
      { id: 408, text: 'DILUCIÓN: 1 gramo en 5 ml de lidocaína. ¿Concentración por ml?', options: ['100 mg/ml', '200 mg/ml', '500 mg/ml', '50 mg/ml'], correctIndex: 1 },
      { id: 409, text: 'MEDIDAS: 1 cucharada de postre equivale a:', options: ['5 ml', '10 ml', '15 ml', '20 ml'], correctIndex: 1 },
      { id: 410, text: 'PORCENTAJE: ¿Qué significa solución al 2%?', options: ['2g en 100ml', '2mg en 100ml', '2g en 1 litro', '20mg en 1ml'], correctIndex: 0 },
      { id: 411, text: 'STOCK: Vendo 5 cajas diarias. Proveedor tarda 4 días. ¿Stock mínimo?', options: ['10 cajas', '15 cajas', '20 cajas', '25 cajas'], correctIndex: 2 },
      { id: 412, text: 'DOSIS MÁXIMA: Paracetamol 4g. Con comprimidos de 1g, ¿máximo?', options: ['2', '4', '6', '8'], correctIndex: 1 },
      { id: 413, text: 'REGLA DE TRES: Dosis 120 mg. Jarabe 200mg/5ml. ¿Volumen?', options: ['2 ml', '3 ml', '4 ml', '5 ml'], correctIndex: 1 },
      { id: 414, text: 'DURACIÓN: Caja 30 comp. Dosis 1 cada 8 horas. ¿Días?', options: ['5 días', '7 días', '10 días', '30 días'], correctIndex: 2 },
      { id: 415, text: 'TEMPERATURA: ¿Frecuencia mínima de registros?', options: ['1 al día', '2 al día', 'Semanal', 'Mensual'], correctIndex: 1 },
      { id: 416, text: 'DEFINICIÓN: ¿Qué es la "Farmacotecnia"?', options: ['Venta', 'Manipulaciones de forma adecuada', 'Precios', 'Anatomía'], correctIndex: 1 },
      { id: 417, text: 'FORMAS: ¿Característica de las "Unidosis"?', options: ['Dosis única por unidad', 'Frascos grandes', 'Líquidas', 'Para una enfermedad'], correctIndex: 0 },
      { id: 418, text: 'VÍAS: ¿Vía de administración "Parenteral"?', options: ['Tragar', 'Inhalar', 'Rompiendo la piel', 'En la piel'], correctIndex: 2 },
      { id: 419, text: 'INTRATECAL: ¿Dónde se deposita?', options: ['Vena', 'Músculo', 'Alrededor médula espinal', 'Lengua'], correctIndex: 2 },
      { id: 420, text: 'PREPARADOS: ¿Diferencia entre Oficinal y Magistral?', options: ['Precio', 'Magistral es específico; Oficinal estándar', 'Receta cheque', 'No hay'], correctIndex: 1 },
      { id: 421, text: 'INYECTABLES: ¿Requisito visual indispensable?', options: ['Colorida', 'Límpida y sin partículas', 'Espuma', 'Opaca'], correctIndex: 1 },
      { id: 422, text: 'PRODUCCIÓN: ¿Qué es un "Lote"?', options: ['Trabajadores', 'Cantidad homogénea definida', 'Recetas', 'Tipo farmacia'], correctIndex: 1 },
      { id: 423, text: 'FARMACOLOGÍA: ¿Efecto de Primer Paso?', options: ['Toma inicial', 'Degradación hepática antes de sangre', 'Absorción', 'Placebo'], correctIndex: 1 },
      { id: 424, text: 'ESTABILIDAD: Los 4 factores que dañan son:', options: ['Calor, Frío, Viento', 'Temp, Humedad, Luz, Tiempo', 'Precio, Marca', 'Ninguna'], correctIndex: 1 },
      { id: 425, text: 'INSULINA: Una vez abierta, ¿cómo almacenar?', options: ['Refrigerado obligatorio', 'Congelador', 'Temperatura ambiente', 'Al sol'], correctIndex: 2 },
      { id: 426, text: 'CONGELACIÓN: Vacuna a 0°C por error:', options: ['Mejor', 'No pasa nada', 'Eliminar (pérdida potencia)', 'Tóxica'], correctIndex: 2 },
      { id: 427, text: 'DEVOLUCIONES: Los vencidos deben ir a:', options: ['Venta', 'Basura común', 'Área de segregación', 'Regalo'], correctIndex: 2 },
      { id: 428, text: 'AUTORIZACIÓN: Duración sanitaria farmacia:', options: ['1 año', '3 años renovables', '5 años', 'Indefinida'], correctIndex: 1 },
      { id: 429, text: 'LENTES: ¿Quién receta lentes y fármacos oculares?', options: ['Enfermera', 'Tecnólogo Oftalmología', 'Auxiliar Óptica', 'Nadie'], correctIndex: 1 },
      { id: 430, text: 'DENTISTAS: ¿Stock psicotrópicos urgencia?', options: ['Ninguno', '50 unidades', '150 unidades', 'Ilimitado'], correctIndex: 2 },
      { id: 431, text: 'LIBROS: ¿Qué Lista permite registro simplificado?', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 3 },
      { id: 432, text: 'IMPORTACIÓN: Validez certificado estupefacientes:', options: ['30 días', '4 meses', '6 meses', '1 año'], correctIndex: 1 },
      { id: 433, text: 'RECETA CHEQUE: ¿Se permiten enmiendas?', options: ['Si firma médico', 'No, debe ser íntegra', 'En fecha', 'Criterio'], correctIndex: 1 },
      { id: 434, text: 'MÓVIL: ¿Qué tiene prohibido vender?', options: ['Paracetamol', 'Psico/Estupe/Magistral', 'Vitaminas', 'Insumos'], correctIndex: 1 },
      { id: 435, text: 'PUBLICIDAD: ¿Qué medicamentos pueden tenerla?', options: ['Todos', 'Solo Venta Directa', 'Antibióticos', 'Bioequivalentes'], correctIndex: 1 },
      { id: 436, text: 'FRACCIONAMIENTO: El envase debe incluir:', options: ['Precio', 'Nombre, vencimiento y lote', 'Teléfono médico', 'Marca'], correctIndex: 1 },
      { id: 437, text: 'DESTRUCCIÓN: ¿Cómo se eliminan estupefacientes?', options: ['Basura', 'Desagüe', 'Empresas autorizadas', 'Quema'], correctIndex: 2 },
      { id: 438, text: 'TRANSPORTE: Droga estupefaciente requiere:', options: ['Carabineros', 'Ruta autorizada por Salud', 'Peaje', 'Nadie'], correctIndex: 1 },
      { id: 439, text: 'DEFINICIÓN: La Ley 20.724 define a la farmacia como:', options: ['Comercio', 'Centro de salud', 'Almacén', 'Empresa'], correctIndex: 1 },
      { id: 440, text: 'SUSPENSIÓN: Se caracteriza porque:', options: ['Disuelta', 'P.A. disperso (agitar)', 'Transparente', 'Gas'], correctIndex: 1 }
    ] 
  }
];
