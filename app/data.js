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
        timeLimit: 90, 
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
        timeLimit: 90, 
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
        title: 'Simulacro Final (Teoría + Ejercicios)', 
        desc: 'Examen completo con preguntas legales y cálculo de dosis.', 
        icon: '🎓', 
        qCount: 40, 
        passingScore: 24, 
        timeLimit: 60, 
        questions: [
            // --- SECCIÓN 1: LEGISLACIÓN Y CONTROLADOS (25 PREGUNTAS) ---
            { id: 401, text: '¿Quién es el responsable técnico de la farmacia?', options: ['Auxiliar', 'Dueño', 'Químico Farmacéutico', 'Gerente'], correctIndex: 2, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 402, text: 'Rango T° refrigerador:', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1, studyGuide: 'Guía de Estudio_Decreto 466.pdf' },
            { id: 403, text: 'Símbolo Estupefacientes:', options: ['Estrella Verde', 'Estrella Roja', 'Cruz', 'Círculo'], correctIndex: 1, studyGuide: 'Guía de Estudio_ Decreto 404.pdf' },
            { id: 404, text: 'Símbolo Psicotrópicos:', options: ['Estrella Verde', 'Estrella Roja', 'Triángulo', 'Cuadrado'], correctIndex: 0, studyGuide: 'Guía de Estudio_ Decreto 405.pdf' },
            { id: 405, text: 'Validez Receta Cheque:', options: ['30 días', '60 días', '10 días', '
