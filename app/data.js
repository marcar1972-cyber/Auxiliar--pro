// app/data.js

export const BLOG_POSTS = [
    {
        id: 'art_req_2026',
        slug: 'requisitos-auxiliar-farmacia-2026',
        date: '09 DIC',
        category: 'Guía',
        title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
        excerpt: 'Si estás pensando en trabajar en farmacia, conoce los requisitos, la experiencia necesaria y el proceso ante la SEREMI.',
        content: `
            <h2>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
            <p>El Auxiliar de Farmacia apoya al Químico Farmacéutico en la atención de público y manejo de medicamentos. Es un rol vital en la cadena de salud.</p>
            <h3>📋 Requisitos Principales (Decreto 466)</h3>
            <ul>
                <li>✅ Ser mayor de 18 años.</li>
                <li>✅ Licencia de Enseñanza Media completa.</li>
                <li>✅ <strong>1 año de experiencia laboral</strong> en farmacia (bodegaje, reposición) certificada por el Q.F.</li>
            </ul>
            <p>El trámite se realiza en <a href="https://seremienlinea.minsal.cl" class="text-aux-green font-bold" target="_blank">SEREMI en Línea</a>.</p>
        `
    },
    {
        id: 'art_dif_tecnico',
        slug: 'diferencia-auxiliar-tecnico',
        date: '09 DIC',
        category: 'Orientación',
        title: 'Diferencia entre Auxiliar y Técnico en Farmacia',
        excerpt: 'Aunque ambos trabajan en farmacias, no son lo mismo. Descubre las diferencias en funciones y sueldos.',
        content: `
            <h2>🎓 Diferencias Clave</h2>
            <p><strong>El Auxiliar:</strong> Aprende trabajando (1 año de experiencia práctica) y rinde un examen de competencia ante la SEREMI para obtener su credencial.</p>
            <p><strong>El Técnico (TENS):</strong> Estudia una carrera formal de 2 años en un instituto (CFT/IP) y obtiene un título técnico de nivel superior.</p>
            <h3>¿Cuál elegir?</h3>
            <p>Si buscas inserción rápida, el camino de Auxiliar es ideal. Si buscas formación académica estructurada, elige Técnico.</p>
        `
    }
];

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

// --- NIVELES DEL QUIZ ---
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
        desc: 'Examen de alta exigencia con letra chica y cálculos complejos.', 
        icon: '🎓', 
        qCount: 40, 
        passingScore: 24, 
        timeLimit: 3600, // 60 Minutos
        questions: [
            // --- PARTE A: NORMATIVA ESPECÍFICA (LETRA CHICA DE LOS DECRETOS) ---
            
            // Del Decreto 404 (Estupefacientes)
            { id: 401, text: '¿Cuál es la validez de un "Certificado Oficial" para importar estupefacientes?', options: ['30 días', '4 meses', '1 año', 'Indefinida'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 402, text: '¿Es legal que una farmacia entregue muestras médicas de estupefacientes?', options: ['Sí, siempre', 'No, está prohibido (salvo excepciones ISP)', 'Solo si el médico lo pide', 'Solo en hospitales'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 403, text: '¿Cuántos productos estupefacientes se pueden prescribir en una sola Receta Cheque?', options: ['Máximo 2', 'Solo 1 producto', 'Hasta 3', 'Sin límite'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 404, text: 'Si llega una Receta Cheque con enmiendas (borrones), ¿qué debe hacer?', options: ['Aceptarla si es legible', 'Rechazarla (debe ser íntegra)', 'Llamar al médico para confirmar', 'Corregirla usted mismo'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            
            // Del Decreto 405 (Psicotrópicos)
            { id: 405, text: 'Un Cirujano Dentista puede mantener en su botiquín de urgencia un máximo de:', options: ['50 ampollas de psicotrópicos', '100 ampollas', '150 ampollas de psicotrópicos', 'No puede tener'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 406, text: '¿Qué lista de psicotrópicos permite un "Registro Simplificado" (totales diarios) en el libro?', options: ['Lista I', 'Lista II', 'Lista III', 'Lista IV (Benzodiazepinas)'], correctIndex: 3, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 407, text: 'Los productos de la Lista I (ej: LSD, Éxtasis) están:', options: ['Disponibles con Receta Cheque', 'Prohibidos (salvo investigación autorizada)', 'Disponibles con Receta Retenida', 'Venta Libre'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            
            // Del Decreto 466 (Farmacias)
            { id: 408, text: '¿Qué actividad tiene ESTRICTAMENTE PROHIBIDA un Almacén Farmacéutico?', options: ['Vender paracetamol', 'Tener Director Técnico', 'Preparar Recetas Magistrales', 'Vender insumos médicos'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 409, text: '¿Qué productos está prohibido fraccionar en farmacia?', options: ['Antibióticos', 'Analgésicos', 'Hormonas, oncológicos y refrigerados', 'Vitaminas'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 410, text: 'La definición legal de "Botiquín" en el D.S. 466 se refiere a:', options: ['La caja de primeros auxilios de una casa', 'Recinto para uso interno exclusivo de instituciones (clínicas, barcos)', 'Una farmacia pequeña', 'Un almacén de barrio'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            
            // De la Ley 20.724 (Fármacos I)
            { id: 411, text: 'Al fraccionar un envase clínico, ¿qué datos críticos del original deben ir en el nuevo rotulado?', options: ['Precio y código de barra', 'Lote y Fecha de Vencimiento', 'Color de la caja', 'Nombre del laboratorio'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 412, text: 'Según la Ley de Fármacos, si un medicamento recetado tiene un bioequivalente certificado:', options: ['Es opcional mencionarlo', 'El farmacéutico debe ofrecerlo obligatoriamente', 'No se puede cambiar', 'Solo se ofrece el más caro'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            
            // --- PARTE B: MATEMÁTICAS AVANZADAS Y CASOS (ALTA DIFICULTAD) ---
            
            // Regla de Tres Compuesta (Pediatría)
            { id: 413, text: 'CASO PEDIÁTRICO: Médico receta Amoxicilina 50 mg por kilo de peso al día, dividido en 3 dosis. El niño pesa 20 Kg. ¿Cuántos mg debe tomar EN CADA DOSIS?', options: ['1000 mg', '500 mg', '333 mg (aprox)', '250 mg'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            // Explicación: 50 * 20 = 1000 mg diarios. Dividido en 3 = 333.3 mg por toma.

            // Gestión de Stock (Cajas)
            { id: 414, text: 'GESTIÓN: Paciente crónico toma Losartán 50mg, 1 comprimido cada 12 horas. Quiere comprar para 3 meses exactos (90 días). La caja trae 30 comprimidos. ¿Cuántas cajas necesita?', options: ['3 cajas', '6 cajas', '9 cajas', '12 cajas'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            // Explicación: 2 comp/día * 90 días = 180 comp totales. 180 / 30 = 6 cajas.

            // Conversión Tramposa + Volumen
            { id: 415, text: 'CÁLCULO: Receta pide 0.5 gramos de Paracetamol. Usted tiene jarabe de 100mg/5ml. ¿Cuántos ml administra?', options: ['5 ml', '12.5 ml', '25 ml', '50 ml'], correctIndex: 2, studyGuide: 'guia_posologia.pdf' },
            // Explicación: 0.5g = 500mg. Regla de tres: (500 * 5) / 100 = 25 ml.

            // Cálculo de Goteo (Suero) - Clásico de Salud
            { id: 416, text: 'ENFERMERÍA: Se debe administrar 500 ml de suero en 4 horas. Usando un equipo estándar (20 gotas/ml), ¿a cuántas gotas por minuto se regula?', options: ['20 gotas/min', '42 gotas/min', '60 gotas/min', '100 gotas/min'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            // Explicación: Volumen Total (ml) x Factor Goteo / Tiempo Total (minutos). (500 * 20) / (4 * 60) = 10000 / 240 = 41.6.

            // UI (Insulina)
            { id: 417, text: 'INSULINA (UI): Frasco dice 100 UI por ml. La receta indica administrar 15 UI. ¿Cuántos ml carga en la jeringa?', options: ['1.5 ml', '0.15 ml', '15 ml', '0.015 ml'], correctIndex: 1, studyGuide: 'guia_posologia.pdf' },
            
            // Casos Éticos/Situacionales
            { id: 418, text: 'CASO: Llega una receta de Clonazepam con fecha de hace 35 días. El paciente ruega que se la vendan. ¿Qué hace?', options: ['La vende por esta vez', 'La vende pero no la retiene', 'Rechaza la venta (receta vencida > 30 días)', 'Llama a Carabineros'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 419, text: 'CASO: Un cliente reclama que las pastillas "sueltas" (fraccionadas) que compró no traen fecha de vencimiento en el sobre. ¿Es válido el reclamo?', options: ['No, porque van sueltas', 'Sí, el rotulado de fraccionamiento DEBE incluir lote y vencimiento', 'Depende de la farmacia', 'Solo si están vencidas'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 420, text: 'DATO DURO: ¿Cuál es la temperatura máxima legal para almacenar medicamentos en estantería (no refrigerados)?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },

            // --- RELLENO CON PREGUNTAS CLAVE ANTERIORES PARA COMPLETAR 40 ---
            { id: 421, text: 'Símbolo Psicotrópicos:', options: ['Estrella Verde', 'Estrella Roja', 'Triángulo', 'Cuadrado'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 422, text: 'Receta de Anfetaminas (Lista II):', options: ['Simple', 'Retenida', 'Cheque', 'Ninguna'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 423, text: '¿Quién fiscaliza estupefacientes a nivel local?', options: ['ISP', 'SEREMI de Salud', 'Municipalidad', 'Aduana'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 424, text: 'Codeína jarabe > 60mg usa receta:', options: ['Simple', 'Retenida', 'Cheque', 'Magistral'], correctIndex: 2, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 425, text: '¿Qué es OTC?', options: ['Venta Directa', 'Controlado', 'Hospitalario', 'Caro'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 426, text: 'Precio en el envase es:', options: ['Opcional', 'Obligatorio', 'Prohibido', 'Solo en oferta'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 427, text: 'Lista I de Psicotrópicos (LSD) es:', options: ['Venta libre', 'Prohibida', 'Receta Cheque', 'Retenida'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 428, text: '¿Qué se anota en el Libro de Control?', options: ['Precios', 'Entradas, Salidas y Saldos', 'Nombres de empleados', 'Horarios'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 429, text: 'Petitorio Mínimo:', options: ['Stock opcional', 'Listado obligatorio de medicamentos', 'Lista de precios', 'Inventario'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 430, text: 'Receta Retenida se guarda por:', options: ['1 mes', '1 año', '5 años', 'Para siempre'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 431, text: '¿Edad para comprar controlados?', options: ['18 con carnet', '16', '21', 'Cualquiera'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 432, text: 'Sublingual es:', options: ['Bajo la lengua', 'Tragada', 'Inyectada', 'Rectal'], correctIndex: 0, studyGuide: 'guia_posologia.pdf' },
            { id: 433, text: 'DCI significa:', options: ['Denominación Común Internacional', 'Dosis Común', 'Droga Central', 'Dato Clínico'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 434, text: '¿Se puede incentivar una marca (Canela)?', options: ['Sí', 'No', 'A veces', 'Si paga bien'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf' },
            { id: 435, text: 'Color Receta Cheque Farmacia:', options: ['Café', 'Amarillo', 'Rojo', 'Verde'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 436, text: 'Auxiliar depende de:', options: ['Q.F.', 'Dueño', 'Nadie', 'Cliente'], correctIndex: 0, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 437, text: 'Lista IV son principalmente:', options: ['Estimulantes', 'Tranquilizantes (Benzos)', 'Alucinógenos', 'Narcóticos'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 438, text: '¿Qué hacer con receta falsa?', options: ['Retener y denunciar', 'Devolver', 'Vender', 'Botar'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 439, text: 'Botiquín es para:', options: ['Venta calle', 'Uso interno institucional', 'Importar', 'Fabricar'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 440, text: 'Moraleja final:', options: ['Estudiar mucho', 'La ética y seguridad del paciente es primero', 'Vender rápido', 'Memorizar todo'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' }
        ] 
    }
];
