// app/data.js

// 1. ARTÍCULOS DEL BLOG (Contenido literal de PDFs - Sin resúmenes ni citas)
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
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud. Aquí te lo explico simple, claro y sin enredos.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      <p class="mt-4 font-bold italic">☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class="list-disc pl-8 my-4 space-y-1">
        <li>Bodegaje</li>
        <li>Reposición de medicamentos</li>
        <li>• Dispensación bajo supervisión</li>
        <li>• Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea, donde podrás revisar requisitos actualizados, costos y disponibilidad: <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="text-blue-600 underline font-bold">https://seremienlinea.minsal.cl/asdigital/</a></p>

      <h2 class="text-xl font-bold mt-8 mb-4">Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)</h2>
      <ol class="list-decimal pl-8 my-4 space-y-2">
        <li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</li>
        <li><strong>Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</li>
        <li><strong>Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.</li>
        <li><strong>Rendir y aprobar el examen de Auxiliar de Farmacia:</strong> Este examen evalúa conocimientos como: Farmacología básica, Recetas médicas, • Cadena de frío, Fechas de vencimiento, Legislación sanitaria y Buenas prácticas en farmacia.</li>
        <li><strong>Obtener la credencial de Auxiliar de Farmacia:</strong> Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.</li>
      </ol>

      <div class="mt-8 border-t pt-4">
        <h3 class="font-bold">Conclusión clara</h3>
        <p>Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas: ☑ Cuarto medio, Mínimo 1 año de experiencia, ☑ Aprobar el examen y Obtener tu credencial SEREMI. No es imposible, pero sí requiere constancia, práctica real y estudio enfocado.</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    excerpt: "Entiende las distintas funciones, formación y responsabilidades legales.",
    date: "17 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Auxiliar+vs+Tecnico",
    content: `
      <p class="italic mb-6 text-slate-500">(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Apoya al Químico Farmacéutico en: ☑ Atención de público, ☑ Dispensación bajo supervisión, ☑ Reposición y bodegaje, ☑ Revisión de fechas de vencimiento, ☑ Manejo de stock y ☑ Orientación básica. En Chile, el Auxiliar no necesita estudiar en instituto, pero debe tener enseñanza media completa, contar con mínimo 1 año de experiencia y aprobar el examen ante la SEREMI de Salud según el Decreto Supremo N° 466.</p>

      <h2 class="text-xl font-bold mt-6 mb-4">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional que sí estudia una carrera formal (2 a 3 años) en institutos o centros de formación técnica. Sus funciones incluyen preparación de medicamentos, gestión de inventarios y atención clínica básica. El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.</p>

      <div class="mt-8 border-t pt-4 font-medium text-slate-500">
        <h3 class="font-bold text-slate-900 text-lg uppercase tracking-tight">Conclusión Clara</h3>
        <p>✓ El Auxiliar se forma en la práctica + examen. ✔ El Técnico en instituto + título. Ambos son fundamentales para el sistema y pueden desarrollarse profesionalmente.</p>
      </div>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los 3 pilares fundamentales que debes dominar para aprobar el examen de la autoridad sanitaria.",
    date: "18 Dic 2025",
    readTime: "4 min",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Examen+SEREMI+2025",
    content: `
      <p>Si vas a enfrentar el Examen de Competencia ante la SEREMI de Salud, necesitas estrategia. Aquí tienes los 3 pilares fundamentales basados en la normativa oficial (Decretos 466, 404 y 405):</p>

      <h2 class="text-xl font-bold mt-8 mb-4">1. Legislación Farmacéutica (El filtro principal)</h2>
      <p>La autoridad evalúa si conoces la diferencia entre Receta Cheque (D.S. 404) y Receta Retenida (D.S. 405), la vigencia legal de 30 días corridos y los libros de control obligatorios. También los roles exclusivos del Q.F. frente al auxiliar.</p>

      <h2 class="text-xl font-bold mt-8 mb-4">2. Almacenamiento y Cadena de Frío</h2>
      <p>Es crítico dominar el rango de temperatura para insulinas y vacunas (2°C a 8°C), el protocolo de corte de luz (no abrir el refrigerador) y el sistema de rotación FEFO (lo primero que vence es lo primero que se vende).</p>

      <h2 class="text-xl font-bold mt-8 mb-4">3. Matemáticas Farmacéuticas</h2>
      <p>Debes manejar la "Regla de Tres" para calcular dosis y duración de tratamientos. Ejemplo: Si el médico receta Amoxicilina 500mg cada 8 horas por 7 días, debes informar que el paciente necesita 21 comprimidos totales.</p>
    `
  }
];

export const FAQS = [
    { q: "¿Dónde hago el trámite?", a: "En seremienlinea.minsal.cl con tu ClaveÚnica." },
    { q: "¿Requisitos?", a: "18 años, 4to medio y 1 año de experiencia certificada." }
];

// 3. NIVELES DEL QUIZ (RESTAURADOS AL 100% - LAS 90 PREGUNTAS)
export const LEVELS = [
    { 
        id: 1, title: 'Prueba Diagnóstico', desc: 'Conceptos generales.', icon: '💊', qCount: 10, passingScore: 6,
        questions: [
            { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['El Dueño', 'El Auxiliar', 'El Químico Farmacéutico', 'El Gerente'], correctIndex: 2 },
            { id: 102, text: '¿Rango temperatura cadena de frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 },
            { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Retenida', 'Venta directa (Over The Counter)', 'Hospital', 'Controlado'], correctIndex: 1 },
            { id: 104, text: 'Auxiliar trabaja bajo supervisión de:', options: ['Cliente', 'Q.F.', 'Cajero', 'Nadie'], correctIndex: 1 },
            { id: 105, text: '¿Quién fiscaliza?', options: ['ISP/SEREMI', 'Sernac', 'Colegio', 'Carabineros'], correctIndex: 0 },
            { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['Original', 'Mismo efecto terapéutico', 'Copia', 'Natural'], correctIndex: 1 },
            { id: 107, text: '¿Vía Sublingual?', options: ['Bajo lengua', 'Inyectable', 'Piel', 'Rectal'], correctIndex: 0 },
            { id: 108, text: '¿Fecha Vencimiento?', options: ['Fabricación', 'Límite seguro', 'Venta', 'Apertura'], correctIndex: 1 },
            { id: 109, text: '¿Almacenar en casa?', options: ['Baño', 'Cocina', 'Lugar fresco/seco', 'Sol'], correctIndex: 2 },
            { id: 110, text: 'La sigla D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis', 'Dirección', 'Droguería'], correctIndex: 0 }
        ]
    },
    { 
        id: 2, title: 'Legislación (D.S. 466)', desc: 'Normativa general.', icon: '⚖️', qCount: 15, passingScore: 9, 
        questions: [
            { id: 201, text: 'Según D.S. 466, ¿quién asume si falta el Q.F.?', options: ['Auxiliar', 'Nadie (debe cerrar)', 'Dueño', 'Alumno'], correctIndex: 1 },
            { id: 202, text: '¿Temperatura ambiental máxima en sala?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 },
            { id: 203, text: 'Experiencia mínima necesaria:', options: ['6m', '1 año', '2 años', '5 años'], correctIndex: 1 },
            { id: 204, text: '¿Libro obligatorio para el público?', options: ['Control', 'Reclamos y Sugerencias', 'Ventas', 'Asistencia'], correctIndex: 1 },
            { id: 205, text: 'Prohibición de la "Canela":', options: ['Comercio', 'Incentivos venta marcas', 'Especia', 'Importación'], correctIndex: 1 },
            { id: 206, text: '¿Es legal fraccionar medicamentos?', options: ['No', 'Bajo supervisión Q.F.', 'Libremente', 'Solo urgente'], correctIndex: 1 },
            { id: 207, text: 'Cambiar por bioequivalente:', options: ['No se puede', 'Es obligatorio ofrecerlo', 'Solo médico', 'Stock'], correctIndex: 1 },
            { id: 208, text: 'Ubicación de OTC:', options: ['Ocultos', 'Góndolas accesibles', 'Bodega', 'Caja'], correctIndex: 1 },
            { id: 209, text: 'Dirige Almacén Farmacéutico:', options: ['Auxiliar', 'Práctico de Farmacia', 'Enfermera', 'Dueño'], correctIndex: 1 },
            { id: 210, text: '¿Qué debe incluir el envase?', options: ['Foto DT', 'Precio venta', 'Publicidad', 'Horario'], correctIndex: 1 },
            { id: 211, text: '¿Cuánto tiempo debe ejercer el DT?', options: ['2h', '4h', 'Al menos 8h o todo el horario', 'Cuando quiera'], correctIndex: 2 },
            { id: 212, text: 'Botiquín es para:', options: ['Venta pública', 'Uso interno institucional', 'Fabricación', 'Importación'], correctIndex: 1 },
            { id: 213, text: 'Prohibido fraccionar:', options: ['Paracetamol', 'Hormonas', 'Ibuprofeno', 'Vitaminas'], correctIndex: 1 },
            { id: 214, text: 'Ante receta ilegible:', options: ['Despacha', 'Pregunta', 'Deriva al Q.F.', 'Llama otra'], correctIndex: 2 },
            { id: 215, text: 'Los medicamentos deben almacenarse:', options: ['Suelo', 'Estantes o pallets (nunca suelo directo)', 'Al sol', 'Junto a la comida'], correctIndex: 1 }
        ] 
    },
    { 
        id: 3, title: 'Controlados', desc: 'D.S. 404 y 405.', icon: '🔐', qCount: 25, passingScore: 15,
        questions: [
            { id: 301, text: '¿Qué identifica la Estrella Roja?', options: ['Psicotrópico', 'Estupefaciente', 'Veneno', 'Frío'], correctIndex: 1 },
            { id: 302, text: '¿Qué identifica la Estrella Verde?', options: ['Psicotrópico', 'Estupefaciente', 'Natural', 'Reciclable'], correctIndex: 0 },
            { id: 303, text: 'Validez Receta Cheque:', options: ['30 días', '30 días corridos', '15 días', 'Un mes'], correctIndex: 1 },
            { id: 304, text: 'Almacenamiento controlados:', options: ['Abierto', 'Bajo llave', 'Opcional', 'Caja'], correctIndex: 1 },
            { id: 305, text: 'Clonazepam es Lista:', options: ['I', 'II', 'III', 'IV'], correctIndex: 3 },
            { id: 306, text: 'Benzodiazepinas receta:', options: ['Cheque', 'Retenida', 'Simple', 'Sin receta'], correctIndex: 1 },
            { id: 307, text: 'Codeína > 60mg usa:', options: ['Simple', 'Retenida', 'Cheque', 'No vende'], correctIndex: 2 },
            { id: 308, text: 'Anfetaminas receta:', options: ['Retenida', 'Cheque', 'Simple', 'OTC'], correctIndex: 1 },
            { id: 309, text: '¿Quién despacha Receta Cheque?', options: ['Alumno', 'Cajero', 'Director Técnico', 'Bodeguero'], correctIndex: 2 },
            { id: 310, text: '¿Muestras Médicas controladas?', options: ['Sí', 'No (salvo excepciones)', 'A veces', 'Depende'], correctIndex: 1 },
            { id: 311, text: 'Si sospecha receta falsa:', options: ['Vender', 'Retener y denunciar', 'Devolver', 'Ignorar'], correctIndex: 1 },
            { id: 312, text: 'Morfina es un:', options: ['Psicotrópico', 'Estupefaciente', 'OTC', 'Cosmético'], correctIndex: 1 },
            { id: 313, text: 'Color Receta Cheque Farmacia:', options: ['Café', 'Amarillo', 'Rojo', 'Azul'], correctIndex: 1 },
            { id: 314, text: 'Libro de Control:', options: ['Opcional', 'Obligatorio', 'Solo digital', 'No existe'], correctIndex: 1 },
            { id: 315, text: 'Importación autorizada por:', options: ['ISP', 'Aduana', 'Muni', 'SII'], correctIndex: 0 },
            { id: 316, text: 'Lista psicotrópica prohibida:', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV'], correctIndex: 0 },
            { id: 317, text: 'Alprazolam usa estrella:', options: ['Roja', 'Verde', 'Azul', 'Sin símbolo'], correctIndex: 1 },
            { id: 318, text: '¿Dentista receta Lista IV?', options: ['No', 'Sí', 'Solo antibióticos', 'Solo morfina'], correctIndex: 1 },
            { id: 319, text: 'Edad mínima retiro:', options: ['15', '18 (Cédula)', '21', 'Cualquiera'], correctIndex: 1 },
            { id: 320, text: 'Productos por Receta Cheque:', options: ['Uno solo', 'Dos', 'Tres', 'Cuatro'], correctIndex: 0 },
            { id: 321, text: 'Transporte autorizado por:', options: ['Carabineros', 'SEREMI', 'Transportista', 'Pase'], correctIndex: 1 },
            { id: 322, text: '¿Recetas con enmiendas?', options: ['Sí', 'No (deben ser íntegras)', 'Solo fecha', 'Solo firma'], correctIndex: 1 },
            { id: 323, text: 'Receta Retenida después venta:', options: ['Devuelve', 'Bota', 'Custodia farmacia', 'Médico'], correctIndex: 2 },
            { id: 324, text: 'Aprueba cuotas importación:', options: ['ISP', 'Farmacia', 'Lab', 'Hacienda'], correctIndex: 0 },
            { id: 325, text: 'Fenobarbital es Lista:', options: ['I', 'II', 'III', 'IV'], correctIndex: 2 }
        ]
    },
    { 
        id: 4, title: 'Simulacro Final', desc: 'Evaluación profesional de alta exigencia.', icon: '🎓', qCount: 40, passingScore: 24,
        questions: [
            { id: 401, text: '¿Qué es un Lote?', options: ['Grupo', 'Cantidad homogénea definida', 'Recetas', 'Muestra'], correctIndex: 1 },
            { id: 402, text: 'Registro temperatura sala:', options: ['1 vez', '2 veces (AM/PM)', 'Semanal', 'Mensual'], correctIndex: 1 },
            { id: 403, text: '¿Qué es fraccionamiento?', options: ['Venta cajas', 'Entrega dosis exacta receta', 'Regalar', 'Vencer'], correctIndex: 1 },
            { id: 404, text: '¿Quién dirige Almacén Farmacéutico?', options: ['Auxiliar', 'Práctico de Farmacia', 'Enfermera', 'DT'], correctIndex: 1 },
            { id: 405, text: 'Color estrella Psicotrópicos:', options: ['Roja', 'Verde', 'Azul', 'Amarilla'], correctIndex: 1 },
            { id: 406, text: '0.005 kg en mg equivale a:', options: ['5', '50', '500', '5000'], correctIndex: 3 },
            { id: 407, text: '1 gramo en mg equivale a:', options: ['10', '100', '1000', '10000'], correctIndex: 2 },
            { id: 408, text: '1 ml en gotas equivale a:', options: ['10', '20', '30', '40'], correctIndex: 1 },
            { id: 409, text: 'Una cucharadita de té equivale a:', options: ['2ml', '5ml', '10ml', '15ml'], correctIndex: 1 },
            { id: 410, text: 'Una cucharada sopera equivale a:', options: ['10ml', '15ml', '20ml', '25ml'], correctIndex: 1 },
            { id: 411, text: 'Rango temperatura termolábiles:', options: ['0-4°C', '2-8°C', '8-15°C', '15-25°C'], correctIndex: 1 },
            { id: 412, text: 'FEFO significa:', options: ['Entra primero', 'Primero vence primero sale', 'Caro primero', 'Barato primero'], correctIndex: 1 },
            { id: 413, text: 'Vigencia receta controlados:', options: ['15 días', '30 días', '60 días', '90 días'], correctIndex: 1 },
            { id: 414, text: '¿Quién firma certificado experiencia?', options: ['Dueño', 'Director Técnico', 'Cajero', 'Notario'], correctIndex: 1 },
            { id: 415, text: 'Acreditación mínima experiencia:', options: ['6 meses', '1 año', '2 años', '5 años'], correctIndex: 1 },
            { id: 416, text: '¿Cuál es la Ley de Fármacos?', options: ['19.496', '20.724', '21.000', '18.000'], correctIndex: 1 },
            { id: 417, text: '¿Farmacia es Centro Salud?', options: ['No', 'Sí (Ley 20.724)', 'A veces', 'Solo clínicas'], correctIndex: 1 },
            { id: 418, text: 'Bioequivalencia asegura:', options: ['Precio bajo', 'Mismo efecto terapéutico', 'Marca', 'Natural'], correctIndex: 1 },
            { id: 419, text: 'La prohibición de la "Canela" es:', options: ['Comercio', 'Incentivos venta medicamentos', 'Especia', 'Importación'], correctIndex: 1 },
            { id: 420, text: '¿Qué receta usa Estupefacientes?', options: ['Vitaminas', 'Receta Cheque', 'Psicotrópicos IV', 'OTC'], correctIndex: 1 },
            { id: 421, text: 'La Estrella Roja identifica a:', options: ['Psicotrópico', 'Estupefaciente', 'Veneno', 'Frío'], correctIndex: 1 },
            { id: 422, text: 'La Estrella Verde identifica a:', options: ['Psicotrópico', 'Estupefaciente', 'Natural', 'Reciclable'], correctIndex: 0 },
            { id: 423, text: '¿Libro Reclamos obligatorio?', options: ['No', 'Sí (disponible al público)', 'Solo digital', 'Solo inspectores'], correctIndex: 1 },
            { id: 424, text: 'Fraccionamiento supervisado por:', options: ['Dueño', 'Químico Farmacéutico', 'Guardia', 'Auxiliar solo'], correctIndex: 1 },
            { id: 425, text: 'Venta Directa es sinónimo de:', options: ['Simple', 'OTC', 'Retenida', 'Cheque'], correctIndex: 1 },
            { id: 426, text: 'D.S. 466 es el:', options: ['Ley', 'Reglamento Farmacias', 'Código', 'Circular'], correctIndex: 1 },
            { id: 427, text: 'D.S. 404 es el reglamento de:', options: ['Psicotrópicos', 'Estupefacientes', 'Higiene', 'Contratos'], correctIndex: 1 },
            { id: 428, text: 'D.S. 405 es el reglamento de:', options: ['Estupefacientes', 'Psicotrópicos', 'Aguas', 'Alimentos'], correctIndex: 1 },
            { id: 429, text: 'Vigencia receta cheque:', options: ['30 días', '30 días corridos', 'Un mes', '60 días'], correctIndex: 1 },
            { id: 430, text: '¿Quién despacha receta cheque?', options: ['Alumno', 'Cajero', 'Director Técnico', 'Bodeguero'], correctIndex: 2 },
            { id: 431, text: '¿Dentista receta controlados?', options: ['No', 'Sí (Lista IV)', 'Q.F.', 'Solo morfina'], correctIndex: 1 },
            { id: 432, text: '¿Donde van las insulinas?', options: ['Mesón', 'Refrigerador (2-8°C)', 'Bodega', 'Caja'], correctIndex: 1 },
            { id: 433, text: 'Si corta la luz en termolábiles:', options: ['Abrir', 'No abrir y registrar temperatura', 'Botar everything', 'Vender rápido'], correctIndex: 1 },
            { id: 434, text: 'Receta Retenida se:', options: ['Devuelve', 'Archiva y custodia', 'Bota', 'Regala'], correctIndex: 1 },
            { id: 435, text: 'Amoxicilina 500mg c/8h x 7 días:', options: ['14', '21', '28', '35'], correctIndex: 1 },
            { id: 436, text: 'Paracetamol dosis máxima día:', options: ['1g', '4g', '10g', '20g'], correctIndex: 1 },
            { id: 437, text: 'Receta dice 10ml, jarabe 100ml:', options: ['1 frasco para 10 días', '2 frascos', '5 frascos', '0.5 frascos'], correctIndex: 0 },
            { id: 438, text: '¿Auxiliar indica dosis?', options: ['Sí', 'No (es médico/Q.F.)', 'Si paciente pide', 'A veces'], correctIndex: 1 },
            { id: 439, text: 'Controlados bajo llave:', options: ['No', 'Sí (obligatorio)', 'Opcional', 'Solo de noche'], correctIndex: 1 },
            { id: 440, text: '¿Auxiliar recomienda antibióticos?', options: ['Sí', 'No', 'Si hay oferta', 'Si hay dolor'], correctIndex: 1 }
        ] 
    }
];
