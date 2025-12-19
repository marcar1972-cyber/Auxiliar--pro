// app/data.js

// 1. ARTÍCULOS DEL BLOG (Literal de tus PDFs)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "requisitos-auxiliar-farmacia-2026",
    title: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    excerpt: "Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile.",
    date: "18 Dic 2025",
    readTime: "5 min",
    content: `
      <p>Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud. Aquí te lo explico simple, claro y sin enredos.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.</p>

      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile</h2>
      <p>De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:</p>
      <p class="mt-4 font-bold italic">☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:</p>
      <ul class="list-disc pl-8 my-4 space-y-1">
        <li>Bodegaje</li>
        <li>Reposición de medicamentos</li>
        <li>Dispensación bajo supervisión</li>
        <li>Manejo de productos farmacéuticos</li>
      </ul>
      <p>Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.</p>
      <p>El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea: <a href="https://seremienlinea.minsal.cl/asdigital/" target="_blank" class="text-blue-600 underline">https://seremienlinea.minsal.cl/asdigital/</a></p>

      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">Requisitos Generales (2026)</h2>
      <div class="space-y-4 my-4">
        <p><strong>1. Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad.</p>
        <p><strong>2. Enseñanza media completa:</strong> Debes contar con tu licencia de cuarto medio aprobada.</p>
        <p><strong>3. Haber trabajado en farmacia:</strong> Debes acreditar experiencia práctica bajo supervisión profesional.</p>
        <p><strong>4. Rendir y aprobar el examen:</strong> Evalúa conocimientos básicos y normativa.</p>
        <p><strong>5. Obtener la credencial:</strong> Habilita legalmente para trabajar.</p>
      </div>

      <div class="mt-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 class="font-bold text-lg mb-2">Conclusión clara</h3>
        <p>Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas: ☑ Cuarto medio, Mínimo 1 año de experiencia, ☑ Aprobar el examen y Obtener tu credencial SEREMI.</p>
      </div>
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
      <p class="italic mb-6 text-slate-500">(Explicado Fácil)</p>
      <p>¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia? Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">¿Qué es un Auxiliar de Farmacia?</h2>
      <p>Apoya al Químico Farmacéutico en: atención, dispensación, reposición y stock. En Chile, no necesita estudiar en instituto, pero debe tener enseñanza media completa y 1 año de experiencia certificada.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">¿Qué es un Técnico en Farmacia?</h2>
      <p>Es un profesional con formación de 2 a 3 años en institutos. No rinde examen SEREMI porque su título lo habilita directamente.</p>
    `
  },
  {
    id: 3,
    slug: "examen-competencia-seremi-preguntas-reales",
    title: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    excerpt: "Analizamos los pilares fundamentales que debes dominar para aprobar el examen de la autoridad sanitaria.",
    date: "18 Dic 2025",
    readTime: "4 min",
    content: `
      <p>Aquí tienes los 3 pilares fundamentales basados en la normativa oficial (Decretos 466, 404 y 405):</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">1. Legislación Farmacéutica</h2>
      <p>Diferencia entre Receta Cheque y Receta Retenida, vigencia de 30 días y libros de control.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">2. Almacenamiento y Cadena de Frío</h2>
      <p>Rango de 2°C a 8°C para termolábiles y sistema de rotación FEFO.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-900">3. Matemáticas Farmacéuticas</h2>
      <p>Uso de la Regla de Tres para cálculo de dosis y cantidad de frascos.</p>
    `
  }
];

export const FAQS = [
    { q: "¿Dónde hago el trámite?", a: "En seremienlinea.minsal.cl con tu ClaveÚnica." },
    { q: "¿Requisitos?", a: "18 años, 4to medio y 1 año de experiencia certificada." }
];

// 3. NIVELES COMPLETOS (RESTAURADOS AL 100%)
export const LEVELS = [
    { 
        id: 1, title: 'Prueba Diagnóstico', desc: 'Calentamiento.', icon: '💊', qCount: 10, passingScore: 6,
        questions: [
            { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['Dueño', 'Auxiliar', 'Químico Farmacéutico', 'Gerente'], correctIndex: 2 },
            { id: 102, text: '¿Rango temperatura cadena de frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 },
            { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Retenida', 'Venta directa', 'Hospital', 'Controlado'], correctIndex: 1 },
            { id: 104, text: 'Auxiliar trabaja bajo supervisión de:', options: ['Cliente', 'Q.F.', 'Cajero', 'Nadie'], correctIndex: 1 },
            { id: 105, text: '¿Quién fiscaliza?', options: ['ISP/SEREMI', 'Sernac', 'Colegio', 'Carabineros'], correctIndex: 0 },
            { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['Original', 'Mismo efecto terapéutico', 'Copia', 'Natural'], correctIndex: 1 },
            { id: 107, text: '¿Vía Sublingual?', options: ['Bajo lengua', 'Inyectable', 'Piel', 'Rectal'], correctIndex: 0 },
            { id: 108, text: '¿Fecha Vencimiento?', options: ['Fabricación', 'Límite consumo seguro', 'Venta', 'Apertura'], correctIndex: 1 },
            { id: 109, text: '¿Almacenar en casa?', options: ['Baño', 'Cocina', 'Lugar fresco/seco', 'Sol'], correctIndex: 2 },
            { id: 110, text: 'D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis', 'Dirección', 'Droguería'], correctIndex: 0 }
        ]
    },
    { 
        id: 2, title: 'Legislación (D.S. 466)', desc: 'Normativa general.', icon: '⚖️', qCount: 15, passingScore: 9, 
        questions: [
            { id: 201, text: 'Según D.S. 466, ¿quién asume si falta el Q.F.?', options: ['Auxiliar', 'Cierra', 'Dueño', 'Alumno'], correctIndex: 1 },
            { id: 202, text: '¿Temperatura ambiental máxima en sala?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 },
            { id: 203, text: 'Acreditación experiencia mínima:', options: ['6m', '1 año', '2 años', '5 años'], correctIndex: 1 },
            { id: 204, text: '¿Libro obligatorio para el público?', options: ['Control', 'Reclamos', 'Ventas', 'Asistencia'], correctIndex: 1 },
            { id: 205, text: 'Prohibición de la "Canela":', options: ['Comercio', 'Incentivos venta marcas', 'Especia', 'Importación'], correctIndex: 1 },
            { id: 206, text: '¿Fraccionar medicamentos?', options: ['No', 'Supervisión Q.F.', 'Libremente', 'Urgente'], correctIndex: 1 },
            { id: 207, text: 'Cambiar por bioequivalente:', options: ['No se puede', 'Obligatorio ofrecerlo', 'Solo médico', 'Stock'], correctIndex: 1 },
            { id: 208, text: 'Ubicación de OTC:', options: ['Ocultos', 'Góndolas accesibles', 'Bodega', 'Caja'], correctIndex: 1 },
            { id: 209, text: 'Dirige Almacén Farmacéutico:', options: ['Auxiliar', 'Práctico de Farmacia', 'Enfermera', 'Dueño'], correctIndex: 1 },
            { id: 210, text: 'Rotulación envase:', options: ['Foto', 'Precio', 'Publicidad', 'Horario'], correctIndex: 1 },
            { id: 211, text: 'DT debe ejercer:', options: ['2h', '4h', 'Al menos 8h o todo el horario', 'Cuando quiera'], correctIndex: 2 },
            { id: 212, text: 'Botiquín es para:', options: ['Venta pública', 'Uso interno institucional', 'Fabricación', 'Importación'], correctIndex: 1 },
            { id: 213, text: 'Prohibido fraccionar:', options: ['Paracetamol', 'Hormonas', 'Ibuprofeno', 'Vitaminas'], correctIndex: 1 },
            { id: 214, text: 'Receta ilegible:', options: ['Despacha', 'Pregunta', 'Deriva al Q.F.', 'Llama otra'], correctIndex: 2 },
            { id: 215, text: 'Almacenamiento:', options: ['Suelo', 'Estantes/pallets', 'Sol', 'Comida'], correctIndex: 1 }
        ] 
    },
    { 
        id: 3, title: 'Controlados', desc: 'D.S. 404 y 405.', icon: '🔐', qCount: 25, passingScore: 15,
        questions: [
            { id: 301, text: 'Estrella Roja:', options: ['Psicotrópico', 'Estupefaciente', 'Veneno', 'Frío'], correctIndex: 1 },
            { id: 302, text: 'Estrella Verde:', options: ['Psicotrópico', 'Estupefaciente', 'Natural', 'Reciclable'], correctIndex: 0 },
            { id: 303, text: 'Validez Receta Cheque:', options: ['30 días', '30 días corridos', 'Un mes', '60 días'], correctIndex: 1 },
            { id: 304, text: 'Almacenamiento:', options: ['Abierto', 'Bajo llave', 'Opcional', 'Caja'], correctIndex: 1 },
            { id: 305, text: 'Clonazepam es Lista:', options: ['I', 'II', 'III', 'IV'], correctIndex: 3 },
            { id: 306, text: 'Benzodiazepinas receta:', options: ['Cheque', 'Retenida', 'Simple', 'Sin receta'], correctIndex: 1 },
            { id: 307, text: 'Codeína > 60mg:', options: ['Simple', 'Retenida', 'Cheque', 'No vende'], correctIndex: 2 },
            { id: 308, text: 'Anfetaminas receta:', options: ['Retenida', 'Cheque', 'Simple', 'OTC'], correctIndex: 1 },
            { id: 309, text: 'Despacho Receta Cheque:', options: ['Alumno', 'Cajero', 'Director Técnico', 'Bodeguero'], correctIndex: 2 },
            { id: 310, text: 'Muestras Médicas:', options: ['Sí', 'No', 'A veces', 'Depende'], correctIndex: 1 },
            { id: 311, text: 'Receta sospechosa:', options: ['Vender', 'Retener y denunciar', 'Devolver', 'Ignorar'], correctIndex: 1 },
            { id: 312, text: 'Morfina es:', options: ['Psicotrópico', 'Estupefaciente', 'OTC', 'Cosmético'], correctIndex: 1 },
            { id: 313, text: 'Color Receta Cheque:', options: ['Café', 'Amarillo', 'Rojo', 'Azul'], correctIndex: 1 },
            { id: 314, text: 'Libro Control:', options: ['Opcional', 'Obligatorio', 'Digital', 'No existe'], correctIndex: 1 },
            { id: 315, text: 'Importación:', options: ['ISP', 'Aduana', 'Muni', 'SII'], correctIndex: 0 },
            { id: 316, text: 'Lista Prohibida:', options: ['I', 'II', 'III', 'IV'], correctIndex: 0 },
            { id: 317, text: 'Alprazolam estrella:', options: ['Roja', 'Verde', 'Azul', 'Sin símbolo'], correctIndex: 1 },
            { id: 318, text: 'Dentista receta Lista IV:', options: ['No', 'Sí', 'Solo antibióticos', 'Solo morfina'], correctIndex: 1 },
            { id: 319, text: 'Edad retiro:', options: ['15', '18', '21', 'Cualquiera'], correctIndex: 1 },
            { id: 320, text: 'Productos por Receta Cheque:', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], correctIndex: 0 },
            { id: 321, text: 'Transporte:', options: ['Carabineros', 'SEREMI', 'Transportista', 'Pase'], correctIndex: 1 },
            { id: 322, text: 'Enmiendas:', options: ['Sí', 'No', 'Solo fecha', 'Solo firma'], correctIndex: 1 },
            { id: 323, text: 'Receta Retenida:', options: ['Devuelve', 'Archiva y custodia', 'Bota', 'Regala'], correctIndex: 1 },
            { id: 324, text: 'Cuotas importación:', options: ['ISP', 'Farmacia', 'Lab', 'Hacienda'], correctIndex: 0 },
            { id: 325, text: 'Fenobarbital Lista:', options: ['I', 'II', 'III', 'IV'], correctIndex: 2 }
        ]
    },
    { 
        id: 4, title: 'Simulacro Final', desc: 'Alta exigencia.', icon: '🎓', qCount: 40, passingScore: 24,
        questions: [
            { id: 401, text: '¿Qué es un Lote?', options: ['Grupo', 'Cantidad homogénea definida', 'Recetas', 'Muestra'], correctIndex: 1 },
            { id: 402, text: 'Registro temperatura:', options: ['1 vez', '2 veces (AM/PM)', 'Semanal', 'Mensual'], correctIndex: 1 },
            { id: 403, text: 'Fraccionamiento:', options: ['Venta cajas', 'Entrega dosis exacta', 'Regalar', 'Vencer'], correctIndex: 1 },
            { id: 404, text: 'Dirige Almacén:', options: ['Auxiliar', 'Práctico', 'Enfermera', 'DT'], correctIndex: 1 },
            { id: 405, text: 'Psicotrópicos estrella:', options: ['Roja', 'Verde', 'Azul', 'Amarilla'], correctIndex: 1 },
            { id: 406, text: '0.005 kg en mg:', options: ['5', '50', '500', '5000'], correctIndex: 3 },
            { id: 407, text: '1 gramo en mg:', options: ['10', '100', '1000', '10000'], correctIndex: 2 },
            { id: 408, text: '1 ml en gotas:', options: ['10', '20', '30', '40'], correctIndex: 1 },
            { id: 409, text: 'Cucharadita té:', options: ['2ml', '5ml', '10ml', '15ml'], correctIndex: 1 },
            { id: 410, text: 'Cucharada sopera:', options: ['10ml', '15ml', '20ml', '25ml'], correctIndex: 1 },
            { id: 411, text: 'Temperatura termolábiles:', options: ['0-4', '2-8', '8-15', '15-25'], correctIndex: 1 },
            { id: 412, text: 'FEFO:', options: ['Entra primero', 'Vence primero', 'Caro primero', 'Barato primero'], correctIndex: 1 },
            { id: 413, text: 'Vigencia receta controlados:', options: ['15', '30', '60', '90'], correctIndex: 1 },
            { id: 414, text: 'Firma experiencia:', options: ['Dueño', 'DT', 'Cajero', 'Notario'], correctIndex: 1 },
            { id: 415, text: 'Acreditación mínima:', options: ['6m', '1 año', '2 años', '5 años'], correctIndex: 1 },
            { id: 416, text: 'Ley Fármacos:', options: ['19.496', '20.724', '21.000', '18.000'], correctIndex: 1 },
            { id: 417, text: '¿Farmacia es Centro Salud?', options: ['No', 'Sí (Ley 20.724)', 'A veces', 'Clínicas'], correctIndex: 1 },
            { id: 418, text: 'Bioequivalencia:', options: ['Precio bajo', 'Mismo efecto', 'Marca', 'Natural'], correctIndex: 1 },
            { id: 419, text: 'Prohibición "Canela":', options: ['Comercio', 'Incentivos venta', 'Especia', 'Importación'], correctIndex: 1 },
            { id: 420, text: 'Receta Cheque para:', options: ['Vitaminas', 'Estupefacientes', 'Psicotrópicos IV', 'OTC'], correctIndex: 1 },
            { id: 421, text: 'Estrella Roja:', options: ['Psicotrópico', 'Estupefaciente', 'Veneno', 'Frío'], correctIndex: 1 },
            { id: 422, text: 'Estrella Verde:', options: ['Psicotrópico', 'Estupefaciente', 'Natural', 'Reciclable'], correctIndex: 0 },
            { id: 423, text: 'Libro Reclamos:', options: ['No', 'Sí', 'Digital', 'Inspectores'], correctIndex: 1 },
            { id: 424, text: 'Fraccionamiento supervisado:', options: ['Dueño', 'Q.F.', 'Guardia', 'Auxiliar'], correctIndex: 1 },
            { id: 425, text: 'Venta Directa:', options: ['Simple', 'OTC', 'Retenida', 'Cheque'], correctIndex: 1 },
            { id: 426, text: 'D.S. 466:', options: ['Ley', 'Reglamento', 'Código', 'Circular'], correctIndex: 1 },
            { id: 427, text: 'D.S. 404:', options: ['Psicotrópicos', 'Estupefacientes', 'Higiene', 'Contratos'], correctIndex: 1 },
            { id: 428, text: 'D.S. 405:', options: ['Estupefacientes', 'Psicotrópicos', 'Aguas', 'Alimentos'], correctIndex: 1 },
            { id: 429, text: 'Vigencia receta cheque:', options: ['30 días', '30 días corridos', 'Mes', '60 días'], correctIndex: 1 },
            { id: 430, text: 'Despacho receta cheque:', options: ['Alumno', 'Cajero', 'DT', 'Bodeguero'], correctIndex: 2 },
            { id: 431, text: 'Dentista receta controlados:', options: ['No', 'Sí', 'Q.F.', 'Morfina'], correctIndex: 1 },
            { id: 432, text: 'Insulinas van en:', options: ['Mesón', 'Refrigerador (2-8°C)', 'Bodega', 'Caja'], correctIndex: 1 },
            { id: 433, text: 'Corte luz:', options: ['Abrir', 'No abrir y registrar temperatura', 'Botar', 'Vender'], correctIndex: 1 },
            { id: 434, text: 'Receta Retenida:', options: ['Devuelve', 'Archiva y custodia', 'Bota', 'Regala'], correctIndex: 1 },
            { id: 435, text: 'Amoxicilina 500mg c/8h x 7d:', options: ['14', '21', '28', '35'], correctIndex: 1 },
            { id: 436, text: 'Paracetamol dosis max:', options: ['1g', '4g', '10g', '20g'], correctIndex: 1 },
            { id: 437, text: '10ml, jarabe 100ml:', options: ['1 frasco para 10 días', '2 frascos', '5 frascos', '0.5 frascos'], correctIndex: 0 },
            { id: 438, text: 'Auxiliar indica dosis:', options: ['Sí', 'No', 'Si pide', 'A veces'], correctIndex: 1 },
            { id: 439, text: 'Controlados bajo llave:', options: ['No', 'Sí', 'Opcional', 'Solo noche'], correctIndex: 1 },
            { id: 440, text: 'Auxiliar recomienda antibióticos:', options: ['Sí', 'No', 'Oferta', 'Dolor'], correctIndex: 1 }
        ] 
    }
];
