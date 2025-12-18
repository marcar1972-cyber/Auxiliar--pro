// app/data.js

// 1. ARTÍCULOS DEL BLOG
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Guía oficial basada en el Decreto 466: Experiencia, escolaridad y trámite SEREMI paso a paso.",
    date: "15 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Requisitos+2026",
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los <strong>requisitos para ser Auxiliar de Farmacia en Chile</strong>. Esta es una de las búsquedas más comunes, y con razón: es una puerta de entrada real al rubro de la salud.</p>
      
      <h2>¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2>Requisitos para Rendir el Examen (Decreto Supremo N° 466)</h2>
      <p>De acuerdo a la normativa vigente, el requisito principal es contar con <strong>mínimo 1 año de experiencia laboral comprobable en farmacia</strong>, realizando labores como:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>Bodegaje y reposición de medicamentos.</li>
        <li>Dispensación bajo supervisión.</li>
        <li>Manejo de productos farmacéuticos.</li>
      </ul>
      <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
        <p class="text-sm"><strong>Importante:</strong> Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      </div>

      <h2>Requisitos Generales (2026)</h2>
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</li>
        <li><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><strong>Haber trabajado en farmacia:</strong> Acreditar experiencia práctica bajo supervisión.</li>
        <li><strong>Rendir y aprobar el examen:</strong> Evalúa farmacología, legislación, cadena de frío y más.</li>
        <li><strong>Obtener la credencial:</strong> Entregada por la SEREMI de Salud.</li>
      </ol>

      <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500 my-6">
        <p class="font-bold text-blue-800">¿Dónde se realiza el trámite?</p>
        <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud. Revisa disponibilidad y costos aquí: <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="text-blue-600 underline font-semibold">SEREMI en Línea</a>.</p>
      </div>

      <h2>Conclusión</h2>
      <p>Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas cuarto medio, 1 año de experiencia y aprobar el examen para obtener tu credencial. No es imposible, pero sí requiere constancia, práctica real y estudio enfocado.</p>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar y Técnico en Farmacia (Explicado Fácil)",
    excerpt: "¿Estudiar carrera o dar examen? Entiende las diferencias de sueldo, formación y funciones.",
    date: "14 Dic 2025",
    readTime: "3 min",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico",
    content: `
      <p>Una de las dudas más comunes entre quienes quieren trabajar en farmacia es: <strong>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia?</strong> Aunque ambos trabajan en el mismo lugar, tienen distintas funciones, formación y responsabilidades legales.</p>

      <h2>1. El Auxiliar de Farmacia</h2>
      <p>No necesita estudiar en instituto, pero debe cumplir requisitos estrictos. Aprende trabajando.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Formación:</strong> Enseñanza media completa + 1 año de experiencia práctica.</li>
        <li><strong>Validación:</strong> Rinde examen ante la SEREMI de Salud (Decreto 466).</li>
        <li><strong>Funciones:</strong> Atención de público, dispensación bajo supervisión, reposición y manejo de stock.</li>
      </ul>

      <h2>2. El Técnico en Farmacia (Nivel Superior)</h2>
      <p>Es un profesional que sí estudia una carrera formal en un instituto profesional o CFT.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Formación:</strong> Estudia 2 a 3 años con malla académica y título técnico.</li>
        <li><strong>Validación:</strong> No rinde examen SEREMI (su título lo habilita).</li>
        <li><strong>Funciones:</strong> Preparación de medicamentos, control de bodegas, gestión de inventarios y atención clínica básica.</li>
      </ul>

      <h2>Tabla Comparativa Rápida</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-slate-200">
          <thead class="bg-slate-100">
            <tr>
              <th class="p-3 border border-slate-300">Criterio</th>
              <th class="p-3 border border-slate-300">Auxiliar de Farmacia</th>
              <th class="p-3 border border-slate-300">Técnico en Farmacia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-slate-300 font-bold">Estudios</td>
              <td class="p-3 border border-slate-300">Aprende trabajando (No requiere título)</td>
              <td class="p-3 border border-slate-300">2 a 3 años en Instituto</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-300 font-bold">Requisito Legal</td>
              <td class="p-3 border border-slate-300">Aprobar Examen SEREMI</td>
              <td class="p-3 border border-slate-300">Título Profesional</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-300 font-bold">Experiencia</td>
              <td class="p-3 border border-slate-300">Mínimo 1 año obligatorio</td>
              <td class="p-3 border border-slate-300">Prácticas profesionales</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>¿Cuál es mejor?</h2>
      <p>No es que uno sea "mejor" que otro. Si quieres <strong>entrar rápido al rubro</strong>, el camino de Auxiliar de Farmacia es más directo. Si buscas <strong>formación técnica completa académica</strong>, el camino es el Técnico en Farmacia.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los pilares del examen SEREMI: Legislación, Cadena de Frío y Cálculos. Guía basada en Decretos 466, 404 y 405.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <p>Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el <strong>Examen de Competencia ante la SEREMI de Salud</strong>.</p>
      <p>Es normal sentir ansiedad. En internet circulan muchos mitos, pero aquí vamos a analizar, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o sí te van a preguntar.</p>
      <p>No necesitas suerte, necesitas estrategia. Aquí tienes los 3 pilares fundamentales que debes dominar para aprobar.</p>

      <h2>1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>La mayoría de los reprobados caen aquí. La autoridad sanitaria necesita saber si conoces las reglas del juego para no cometer errores legales.</p>
      <h3>Lo que debes dominar:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Diferencia entre Receta Cheque y Receta Retenida:</strong> No basta con saber el color de la estrella. Debes saber la vigencia (30 días), los libros de control donde se registran y qué decretos las regulan (Decreto 404 para estupefacientes y 405 para psicotrópicos).</li>
        <li><strong>Roles en la Farmacia:</strong> ¿Qué puede hacer el auxiliar y qué es exclusivo del Químico Farmacéutico? (Pista: el auxiliar no puede realizar indicaciones terapéuticas ni "recetar").</li>
        <li><strong>Tipos de Establecimientos:</strong> Diferencia legal entre Farmacia, Almacén Farmacéutico y Botiquín.</li>
      </ul>
      <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
        <p><strong>Pregunta típica:</strong> "Si llega una receta de Clonazepam (Lista IV) emitida hace 40 días, ¿la puede despachar?" <br/> 
        <strong>Respuesta correcta:</strong> No. La vigencia legal máxima para recetas de productos controlados es de 30 días corridos.</p>
      </div>

      <h2>2. Almacenamiento y Cadena de Frío</h2>
      <p>Este es un tema técnico crítico. Un error aquí pone en riesgo la salud pública, por lo que los evaluadores son muy estrictos.</p>
      <h3>Datos clave que debes memorizar:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Rango de Temperatura:</strong> Los refrigeradores para insulinas, vacunas y colirios deben mantenerse estrictamente entre <strong>2°C y 8°C</strong>.</li>
        <li><strong>¿Qué hacer si se corta la luz?:</strong> Debes conocer el protocolo de quiebre de cadena de frío (no abrir la puerta del refrigerador, registrar la temperatura máxima alcanzada y consultar al Director Técnico antes de vender nada).</li>
        <li><strong>FEFO (First Expired, First Out):</strong> El sistema de rotación donde lo primero que vence es lo primero que se vende.</li>
      </ul>

      <h2>3. Matemáticas Farmacéuticas (Cálculo de Dosis)</h2>
      <p>No te pedirán cálculo integral, pero sí debes manejar la "Regla de Tres" a la perfección.</p>
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
        <p><strong>Ejemplo práctico:</strong> Si el médico receta "Amoxicilina 500mg cada 8 horas por 7 días", debes ser capaz de calcular rápidamente cuántos comprimidos o frascos necesita el paciente para el tratamiento completo.</p>
        <p><strong>Cálculo:</strong> 3 veces al día x 7 días = 21 comprimidos. Si la caja trae 16, debes informar al paciente que necesitará 2 cajas.</p>
      </div>

      <h2>Consejos Finales para el Día del Examen</h2>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Vocabulario Técnico:</strong> No digas "remedios", di "medicamentos" o "especialidades farmacéuticas". No digas "el doctor de la farmacia", di "Director Técnico".</li>
        <li><strong>Seguridad ante todo:</strong> Ante una pregunta con trampa (ej: "¿Vendería antibióticos sin receta si el paciente tiene mucho dolor?"), la respuesta siempre debe priorizar la normativa legal por sobre la venta comercial.</li>
        <li><strong>Estudia los Decretos:</strong> No te quedes solo con los apuntes de tu curso. Lee directamente el Decreto 466; es la fuente de la verdad.</li>
      </ul>

      <div class="bg-blue-600 p-6 rounded-xl text-white text-center my-8">
        <h3 class="text-xl font-bold mb-2">¿Te estás preparando para el examen?</h3>
        <p class="mb-4 text-blue-100">En AuxiliarPro tenemos simuladores basados en preguntas reales para que practiques antes del día clave.</p>
        <a href="/quiz" class="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">
          Ir al Simulador Gratuito
        </a>
      </div>
    `
  }
];

// 2. PREGUNTAS FRECUENTES
export const FAQS = [
    {
        q: "¿Dónde hago el trámite del examen?",
        a: "Todo se realiza digitalmente en <a href='https://seremienlinea.minsal.cl' target='_blank' class='font-bold text-aux-green hover:underline'>seremienlinea.minsal.cl</a> ingresando con tu ClaveÚnica."
    },
    {
        q: "¿Cuáles son los requisitos obligatorios?",
        a: "Debes ser mayor de 18 años, haber rendido 4to medio y acreditar <strong>1 año de experiencia</strong> trabajando en farmacia (firmado por un Químico Farmacéutico)."
    },
    {
        q: "¿Cuánto cuesta el examen?",
        a: "Aproximadamente <strong>$19.100</strong> por el derecho a examen y $47.600 por la credencial (valores referenciales según la UTM vigente)."
    },
    {
        q: "¿Qué pasa si repruebo?",
        a: "Según el <strong>Artículo 71 del Decreto 466</strong>, si repruebas, la normativa establece que debes esperar un plazo (históricamente 1 año) para rendirlo nuevamente. Además, al ser un nuevo trámite administrativo, deberás <strong>volver a pagar el arancel</strong> de derecho a examen."
    }
];

// 3. NIVELES DEL QUIZ (Se mantienen iguales...)
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
            { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['El Dueño', 'El Auxiliar de más antigüedad', 'El Químico Farmacéutico', 'El Gerente'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' }, 
            { id: 102, text: '¿Cuál es el rango de temperatura para cadena de frío?', options: ['0°C a 5°C', '2°C a 8°C', '8°C a 15°C', 'Ambiente'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Con receta retenida', 'Venta directa (Over The Counter)', 'Uso hospitalario', 'Controlado'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 104, text: 'El Auxiliar de Farmacia debe trabajar bajo supervisión de:', options: ['El cliente', 'El Químico Farmacéutico', 'El cajero', 'Nadie'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 105, text: '¿Qué organismo fiscaliza a las farmacias en Chile?', options: ['ISP y SEREMI de Salud', 'Sernac', 'Colegio de Farmacéuticos', 'Carabineros'], correctIndex: 0, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['El original', 'Mismo efecto terapéutico comprobado que el original', 'Copia barata', 'Natural'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 107, text: '¿Cuál es la vía de administración "Sublingual"?', options: ['Debajo de la lengua', 'Inyectable', 'Sobre la piel', 'Rectal'], correctIndex: 0, studyGuide: 'guia_posologia.pdf' },
            { id: 108, text: '¿Qué indica la "Fecha de Vencimiento"?', options: ['Fabricación', 'Límite para consumo seguro', 'Fecha de venta', 'Apertura'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 109, text: '¿Dónde almacenar medicamentos en casa?', options: ['Baño', 'Cocina', 'Lugar fresco y seco', 'Al sol'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 110, text: 'La sigla D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis Común', 'Dirección Central', 'Droguería'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' }
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
            { id: 201, text: 'Según D.S. 466, ¿quién asume la Dirección Técnica si falta el Q.F.?', options: ['Auxiliar experto', 'Nadie (Farmacia debe cerrar)', 'Dueño', 'Alumno'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 202, text: '¿Temperatura ambiental máxima en sala de ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 203, text: 'El Auxiliar de Farmacia debe acreditar experiencia de:', options: ['6 meses', '1 año', '2 años', '3 meses'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 204, text: '¿Qué libro es OBLIGATORIO para uso del público?', options: ['Control de Psicotrópicos', 'Reclamos y Sugerencias', 'Ventas', 'Asistencia'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 205, text: 'La prohibición de la "Canela" se refiere a:', options: ['Prohibido vender canela en rama', 'Prohibido dar incentivos económicos por vender marcas específicas', 'Prohibido vender genéricos', 'Prohibido descuentos a 3ra edad'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 206, text: '¿Es legal fraccionar medicamentos (venta por blíster)?', options: ['No, nunca', 'Sí, bajo supervisión Q.F. en área exclusiva', 'Sí, en el mesón libremente', 'Solo si es urgente'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 207, text: 'Si un cliente pide cambiar un remedio de marca por un bioequivalente:', options: ['No se puede', 'Es obligatorio ofrecer la alternativa bioequivalente', 'Solo si el médico autoriza', 'Depende del stock'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 208, text: '¿Dónde deben estar los medicamentos de Venta Directa?', options: ['Ocultos', 'En góndolas o estanterías accesibles al público', 'En la bodega', 'Solo en caja'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 209, text: '¿Quién puede dirigir un Almacén Farmacéutico?', options: ['Auxiliar', 'Práctico de Farmacia', 'Enfermera', 'Dueño'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 210, text: '¿Qué debe incluir obligatoriamente el envase de un medicamento?', options: ['Foto del dueño', 'El precio de venta', 'Publicidad', 'Horario de la farmacia'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 211, text: '¿Cuánto tiempo debe ejercer el DT su cargo diariamente?', options: ['2 horas', '4 horas', 'Al menos 8 horas (o todo el horario)', 'Solo cuando quiera'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 212, text: 'El Botiquín es un recinto destinado a:', options: ['Venta al público', 'Uso interno de instituciones (clínicas, barcos)', 'Fabricación', 'Importación'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 213, text: '¿Qué se prohíbe fraccionar?', options: ['Paracetamol', 'Hormonas y oncológicos', 'Ibuprofeno', 'Vitaminas'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 214, text: 'Ante una receta ilegible, ¿qué hace el auxiliar?', options: ['Despacha lo que cree entender', 'Pregunta al paciente', 'No despacha y deriva al Q.F.', 'Llama a otra farmacia'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 215, text: 'Los medicamentos deben almacenarse:', options: ['En el suelo', 'En estantes, tarimas o pallets (nunca suelo directo)', 'Al sol', 'Junto a la comida'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' }
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
            { id: 301, text: '¿Qué símbolo identifica a los ESTUPEFACIENTES?', options: ['Estrella Verde', 'Estrella Roja (5 puntas)', 'Círculo Rojo', 'Cruz Negra'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 302, text: '¿Qué símbolo identifica a los PSICOTRÓPICOS?', options: ['Estrella Verde (5 puntas)', 'Estrella Roja', 'Triángulo Amarillo', 'Ninguno'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 303, text: '¿Cuál es la validez de una Receta Cheque?', options: ['60 días', '30 días corridos', '15 días', '1 año'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 304, text: '¿Cómo se deben almacenar los Estupefacientes y Psicotrópicos?', options: ['En estantería abierta', 'Bajo llave', 'En el refrigerador siempre', 'En el mesón'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 305, text: 'El Clonazepam y Diazepam pertenecen a la lista:', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 3, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 306, text: '¿Con qué receta se venden las Benzodiazepinas (Lista IV)?', options: ['Receta Cheque', 'Receta Médica Retenida', 'Receta Simple', 'Sin Receta'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 307, text: 'Si un jarabe de Codeína tiene más de 60mg por dosis, ¿qué receta usa?', options: ['Simple', 'Retenida', 'Cheque', 'No se vende'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 308, text: 'Los Psicotrópicos de Lista II (Anfetaminas) se venden con:', options: ['Receta Simple', 'Receta Retenida', 'Receta Cheque', 'Vale vista'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 309, text: '¿Quién debe despachar personalmente las Recetas Cheque?', options: ['Cualquier auxiliar', 'El cajero', 'El Director Técnico (Q.F.)', 'El alumno'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 310, text: '¿Está permitido entregar muestras médicas de Estupefacientes?', options: ['Sí', 'No (salvo excepciones ISP)', 'Solo a amigos', 'Depende del médico'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 311, text: '¿Qué debe hacer si sospecha que una Receta Cheque es falsa?', options: ['Vender igual', 'No despachar, retener y denunciar', 'Devolverla al cliente', 'Romperla'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 312, text: 'La Morfina es un:', options: ['Psicotrópico Lista IV', 'Estupefaciente', 'Venta Directa', 'Cosmético'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 313, text: '¿De qué color es la Receta Cheque para uso en Farmacia?', options: ['Café', 'Amarillo', 'Rojo', 'Azul'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 314, text: 'El Libro de Control de Estupefacientes es:', options: ['Opcional', 'Obligatorio', 'Solo digital', 'No existe'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 315, text: 'Para importar estupefacientes se requiere autorización de:', options: ['ISP', 'Aduana solamente', 'Municipalidad', 'SII'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 316, text: '¿Qué lista de psicotrópicos está prohibida (sin uso médico)?', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 317, text: 'El Alprazolam se identifica con:', options: ['Estrella Roja', 'Estrella Verde', 'Sin símbolo', 'Círculo Azul'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 318, text: '¿Puede un Dentista recetar Clonazepam?', options: ['No', 'Sí, con Receta Retenida', 'Sí, con Receta Cheque', 'Solo antibióticos'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 319, text: '¿Edad mínima para retirar un medicamento controlado?', options: ['15 años', '18 años (con Cédula)', '21 años', 'Cualquier edad'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 320, text: '¿Cuántos productos estupefacientes se pueden prescribir por Receta Cheque?', options: ['Uno solo', 'Dos', 'Tres', 'Los que quepan'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 321, text: 'La "Ruta y Transporte" de estupefacientes debe ser autorizada por:', options: ['Carabineros', 'Servicio de Salud (SEREMI)', 'El transportista', 'Nadie'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 322, text: '¿Las recetas de controlados pueden tener enmiendas?', options: ['Sí, si se entienden', 'No, deben ser íntegras', 'Solo si el médico firma al lado', 'Con liquid paper'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 323, text: '¿Qué sucede con la Receta Retenida después de la venta?', options: ['Se devuelve al cliente', 'Se bota', 'Se archiva y custodia en la farmacia', 'Se envía al médico'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 324, text: '¿Quién aprueba las cuotas anuales de importación de drogas?', options: ['El ISP', 'La Farmacia', 'El Laboratorio', 'El Ministerio de Hacienda'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 325, text: 'El Fenobarbital (Barbitúrico) es:', options: ['Lista I', 'Lista II', 'Lista III (Depresor)', 'Venta Directa'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' }
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
            { id: 401, text: 'CÁLCULO DE FRASCOS: Receta dice "Polivitamínico 5 ml al día por 2 meses (60 días)". Frasco trae 100 ml. ¿Cuántos frascos necesita?', options: ['1 Frasco', '2 Frascos', '3 Frascos', '4 Frascos'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 402, text: 'FRACCIONAMIENTO: "Propranolol 40mg: tomar 1/2 comprimido en la mañana y 1 en la noche, por 3 meses (90 días)". Caja trae 20 comprimidos. ¿Cuántas cajas necesita?', options: ['5 cajas', '6 cajas', '7 cajas', '8 cajas'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 403, text: 'PEDIATRÍA (PESO): Niño de 20 kg. Dosis: 50 mg/kg/día repartido en 4 tomas. ¿Cuántos mg administra en CADA dosis?', options: ['1000 mg', '500 mg', '250 mg', '125 mg'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 404, text: 'CÁLCULO GOTAS: Receta "23 gotas c/12hrs por 3 meses (90 días)". Frasco trae 25ml (500 gotas aprox). ¿Cuántos frascos necesita?', options: ['5 Frascos', '7 Frascos', '9 Frascos', '12 Frascos'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 405, text: 'INSULINA (DURACIÓN): Paciente usa 40 UI diarias. El lápiz trae 3 ml (100 UI/ml). ¿Cuántos lápices necesita para 1 mes (30 días)?', options: ['2 Lápices', '3 Lápices', '4 Lápices', '5 Lápices'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 406, text: 'CONVERSIÓN: ¿A cuántos miligramos (mg) equivalen 0.005 kg?', options: ['5 mg', '50 mg', '500 mg', '5.000 mg'], correctIndex: 3, studyGuide: 'guia_posologia.pdf' },
            { id: 407, text: 'ENFERMERÍA: Pasar 500 ml de suero en 4 horas con equipo estándar (20 gotas/ml). Velocidad de goteo:', options: ['20 gotas/min', '42 gotas/min', '60 gotas/min', '83 gotas/min'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            { id: 408, text: 'DILUCIÓN: Si diluyo 1 gramo de antibiótico en 5 ml de lidocaína. ¿Qué concentración final tengo por ml?', options: ['100 mg/ml', '200 mg/ml', '500 mg/ml', '50 mg/ml'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            { id: 409, text: 'MEDIDAS CASERAS: Si la indicación dice "1 cucharada de postre". ¿A qué volumen equivale?', options: ['5 ml', '10 ml', '15 ml', '20 ml'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            { id: 410, text: 'PORCENTAJE: ¿Qué significa que una solución sea al 2%?', options: ['2 gramos en 100 ml', '2 mg en 100 ml', '2 gramos en 1 litro', '20 mg en 1 ml'], correctIndex: 0, studyGuide: 'guia_posologia.pdf' },
            { id: 411, text: 'STOCK DE SEGURIDAD: Vendo 5 cajas diarias de un producto crítico. El proveedor tarda 4 días en reponer. ¿Stock mínimo para no quebrar?', options: ['10 cajas', '15 cajas', '20 cajas', '25 cajas'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 412, text: 'DOSIS MÁXIMA: La dosis máxima diaria de Paracetamol es 4g. Si tengo comprimidos de 1g, ¿cuántos es el máximo?', options: ['2', '4', '6', '8'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            { id: 413, text: 'REGLA DE TRES: Dosis médica 120 mg. Jarabe disponible 200mg/5ml. ¿Qué volumen administra?', options: ['2 ml', '3 ml', '4 ml', '5 ml'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            { id: 414, text: 'DURACIÓN: Una caja trae 30 comprimidos. La dosis es 1 cada 8 horas. ¿Para cuántos días alcanza?', options: ['5 días', '7 días', '10 días', '30 días'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            { id: 415, text: 'NORMA ALMACENAMIENTO: ¿Con qué frecuencia mínima se deben registrar las temperaturas (refrigerador y sala)?', options: ['1 vez al día', '2 veces al día (AM/PM)', 'Semanalmente', 'Mensualmente'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 416, text: 'DEFINICIÓN: ¿Qué es la "Farmacotecnia"?', options: ['Ciencia que estudia la venta de remedios', 'Ciencia que estudia las manipulaciones para dar forma adecuada a los medicamentos', 'Estudio de los precios', 'Estudio de la anatomía'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 417, text: 'FORMAS FARMACÉUTICAS: ¿Qué caracteriza a las formas "Unidosis"?', options: ['Permiten una dosis única por unidad (ej: comprimido)', 'Vienen en frascos grandes', 'Son solo líquidas', 'Son para una sola enfermedad'], correctIndex: 0, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 418, text: 'VÍAS: ¿Qué define a la vía de administración "Parenteral"?', options: ['Se traga', 'Se inhala', 'Se administra rompiendo la barrera de la piel (inyectable)', 'Se aplica en la piel'], correctIndex: 2, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 419, text: 'VÍA INTRATECAL: ¿Dónde se deposita el fármaco?', options: ['En la vena', 'En el músculo', 'Alrededor de la médula espinal (LCR)', 'Bajo la lengua'], correctIndex: 2, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 420, text: 'PREPARADOS: ¿Diferencia clave entre "Oficinal" y "Magistral"?', options: ['El precio', 'Magistral es para un paciente específico; Oficinal es fórmula estándar', 'Oficinal es con receta cheque', 'No hay diferencia'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 421, text: 'INYECTABLES: ¿Qué requisito visual es indispensable en una solución inyectable?', options: ['Debe ser colorida', 'Debe ser límpida y exenta de partículas', 'Debe tener espuma', 'Debe ser opaca'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 422, text: 'PRODUCCIÓN: ¿Qué es un "Lote"?', options: ['Un grupo de trabajadores', 'Una cantidad definida de producto homogénea en su fabricación', 'Un conjunto de recetas', 'Un tipo de farmacia'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 423, text: 'FARMACOLOGÍA: ¿Qué es el "Efecto de Primer Paso"?', options: ['La primera vez que se toma un remedio', 'La degradación del fármaco en el hígado antes de llegar a la sangre', 'La absorción en el estómago', 'El efecto placebo'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 424, text: 'ESTABILIDAD: Los 4 factores principales que dañan los medicamentos son:', options: ['Calor, Frío, Viento, Lluvia', 'Temperatura, Humedad, Luz y Tiempo', 'Precio, Marca, Laboratorio, Envase', 'Ninguna de las anteriores'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 425, text: 'INSULINA EN USO: Una vez abierto el lápiz, ¿cómo se puede almacenar?', options: ['Obligatoriamente refrigerado', 'En el congelador', 'A temperatura ambiente (aprox 4 semanas)', 'Al sol'], correctIndex: 2, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 426, text: 'CONGELACIÓN: ¿Qué sucede si una vacuna se congela por error a 0°C?', options: ['Se conserva mejor', 'No pasa nada si se descongela', 'Pierde su potencia irreversiblemente y debe eliminarse', 'Se vuelve tóxica'], correctIndex: 2, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 427, text: 'DEVOLUCIONES: Los productos devueltos o vencidos deben ir a:', options: ['La estantería de venta', 'La basura común', 'Un área de segregación o cuarentena', 'Se regalan'], correctIndex: 2, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 428, text: 'AUTORIZACIÓN: ¿Cuánto dura la autorización sanitaria de una farmacia?', options: ['1 año', '3 años, renovables automáticamente', '5 años', 'Indefinida'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 429, text: 'PROFESIONALES: ¿Quién puede recetar lentes y fármacos oculares tópicos?', options: ['Enfermera', 'Tecnólogo Médico con mención en Oftalmología', 'Auxiliar de Óptica', 'Nadie'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' },
            { id: 430, text: 'DENTISTAS: ¿Qué stock de psicotrópicos pueden mantener para urgencias?', options: ['Ninguno', '50 unidades', 'Máximo 150 unidades', 'Ilimitado'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 431, text: 'LIBROS: ¿Qué Lista permite un "registro simplificado" (totales diarios)?', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV (Benzodiazepinas)'], correctIndex: 3, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 432, text: 'IMPORTACIÓN: Validez del certificado oficial de importación de estupefacientes:', options: ['30 días', '4 meses', '6 meses', '1 año'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 433, text: 'RECETA CHEQUE: ¿Se permiten enmiendas (correcciones)?', options: ['Sí, si se firma al lado', 'No, debe ser íntegra y manuscrita sin borrones', 'Solo en la fecha', 'Depende del criterio'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 434, text: 'FARMACIA MÓVIL: ¿Qué tiene prohibido vender?', options: ['Paracetamol', 'Psicotrópicos, Estupefacientes y Recetario Magistral', 'Vitaminas', 'Insumos'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 435, text: 'PUBLICIDAD: ¿Qué medicamentos pueden tener publicidad masiva?', options: ['Todos', 'Solo los de Venta Directa (OTC)', 'Los antibióticos', 'Los bioequivalentes'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 436, text: 'FRACCIONAMIENTO: El envase entregado al paciente debe incluir obligatoriamente:', options: ['Precio', 'Nombre paciente, fecha vencimiento y lote original', 'Teléfono del médico', 'Marca del laboratorio'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 437, text: 'DESTRUCCIÓN: ¿Cómo se eliminan los estupefacientes vencidos?', options: ['A la basura', 'Por el desagüe', 'A través de empresas autorizadas por SEREMI', 'Se queman en el patio'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 438, text: 'TRANSPORTE: Droga estupefaciente salida de aduana requiere certificado de:', options: ['Carabineros', 'Ruta y Transporte autorizado por el Servicio de Salud', 'El transportista', 'Peaje'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 439, text: 'DEFINICIÓN LEGAL: La Ley 20.724 define a la farmacia como:', options: ['Un comercio', 'Un centro de salud', 'Un almacén', 'Una empresa'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 440, text: 'SUSPENSIÓN: En farmacotecnia, una suspensión se caracteriza porque:', options: ['Está totalmente disuelta', 'El principio activo no está disuelto, sino disperso (requiere agitar)', 'Es transparente', 'Es un gas'], correctIndex: 1, studyGuide: 'Manual Auxiliar Farmacia Privada_v2_025 (1).pdf' }
        ] 
    }
];
