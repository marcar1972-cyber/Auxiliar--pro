// app/data.js

// 1. ARTÍCULOS DEL BLOG (Contenido Real y SEO)
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

// 2. PREGUNTAS FRECUENTES (FAQs completas y blindadas legalmente)
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

// 3. NIVELES DEL QUIZ (EXPANSIÓN FASE 2)
export const LEVELS = [
    { 
        id: 1, 
        title: 'Prueba Diagnóstico', 
        desc: 'Conceptos generales para calentar motores.', 
        icon: '💊', 
        qCount: 10, 
        passingScore: 6, // 60% de aprobación
        timeLimit: 0, // Sin tiempo para aprender
        questions: [
            { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['El Dueño', 'El Auxiliar de más antigüedad', 'El Químico Farmacéutico', 'El Gerente de Local'], correctIndex: 2 }, 
            { id: 102, text: '¿Cuál es el rango de temperatura para medicamentos de cadena de frío?', options: ['0°C a 5°C', '2°C a 8°C', '8°C a 15°C', 'Temperatura ambiente'], correctIndex: 1 },
            { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Venta bajo receta retenida', 'Venta directa (Over The Counter)', 'Uso hospitalario exclusivo', 'Medicamento controlado'], correctIndex: 1 },
            { id: 104, text: 'El Auxiliar de Farmacia debe trabajar siempre bajo la supervisión de:', options: ['El cliente', 'El Químico Farmacéutico', 'El cajero', 'Nadie, es autónomo'], correctIndex: 1 },
            { id: 105, text: '¿Qué organismo fiscaliza a las farmacias en Chile?', options: ['ISP y SEREMI de Salud', 'Sernac', 'Colegio de Farmacéuticos', 'Carabineros'], correctIndex: 0 },
            { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['El original de marca', 'Uno que tiene el mismo efecto terapéutico comprobado que el original', 'Cualquier copia barata', 'Un remedio natural'], correctIndex: 1 },
            { id: 107, text: '¿Cuál es la vía de administración "Sublingual"?', options: ['Debajo de la lengua', 'Inyectable', 'Sobre la piel', 'Rectal'], correctIndex: 0 },
            { id: 108, text: '¿Qué indica la "Fecha de Vencimiento"?', options: ['La fecha de fabricación', 'La fecha límite para su consumo seguro y eficaz', 'La fecha de venta', 'La fecha de apertura'], correctIndex: 1 },
            { id: 109, text: '¿Dónde se deben almacenar los medicamentos en casa generalmente?', options: ['En el baño (humedad)', 'En la cocina (calor)', 'En un lugar fresco y seco, lejos de niños', 'Al sol directo'], correctIndex: 2 },
            { id: 110, text: 'La sigla D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis Común Inyectable', 'Dirección Central de Insumos', 'Droguería Central Internacional'], correctIndex: 0 }
        ] 
    },
    { 
        id: 2, 
        title: 'Legislación (D.S. 466)', 
        desc: 'Normativa sanitaria: Recetas, libros y condiciones.', 
        icon: '⚖️', 
        qCount: 15, 
        passingScore: 9, // 60% de aprobación
        timeLimit: 90, // 90 segundos por pregunta
        questions: [
            { id: 201, text: 'Según el D.S. 466, ¿quién asume la Dirección Técnica en ausencia del Q.F. titular?', options: ['El Auxiliar con más experiencia', 'Nadie, la farmacia debe cerrar o tener otro Q.F.', 'El dueño del local', 'Un alumno en práctica'], correctIndex: 1 },
            { id: 202, text: '¿Cuál es la temperatura ambiental máxima permitida en la sala de ventas?', options: ['20°C', '25°C (salvo excepciones)', '30°C', '18°C'], correctIndex: 1 },
            { id: 203, text: '¿Qué tipo de receta se usa para estupefacientes y psicotrópicos peligrosos?', options: ['Receta Simple', 'Receta Retenida', 'Receta Cheque', 'Receta Magistral'], correctIndex: 2 },
            { id: 204, text: 'Los medicamentos con "Estrella Verde" en el envase corresponden a:', options: ['Venta Directa', 'Psicotrópicos (Lista III o IV)', 'Estupefacientes', 'Bioequivalentes'], correctIndex: 1 },
            { id: 205, text: '¿Cuál es la validez de una Receta Cheque?', options: ['60 días', '30 días corridos', '1 año', 'Indefinida'], correctIndex: 1 },
            { id: 206, text: '¿Es legal fraccionar medicamentos (vender por blíster)?', options: ['No, nunca', 'Sí, en farmacias habilitadas y bajo supervisión del Q.F.', 'Sí, cualquier auxiliar puede hacerlo', 'Solo antibióticos'], correctIndex: 1 },
            { id: 207, text: '¿Qué libro es OBLIGATORIO tener en papel o digital para reclamos?', options: ['Libro de Novedades', 'Libro de Reclamos y Sugerencias', 'Libro de Ventas', 'Libro de Asistencia'], correctIndex: 1 },
            { id: 208, text: '¿Está permitido incentivar la venta de un laboratorio específico (Canela)?', options: ['Sí, es parte del negocio', 'No, está prohibido por la Ley de Fármacos', 'Solo si el cliente acepta', 'Depende de la farmacia'], correctIndex: 1 },
            { id: 209, text: '¿Qué debe hacer si llega una receta ilegible?', options: ['Adivinar el medicamento', 'Preguntar al paciente qué toma', 'No despachar y derivar al Q.F. para consultar al médico', 'Vender lo más parecido'], correctIndex: 2 },
            { id: 210, text: 'La "Receta Retenida" debe archivarse y custodiarse por:', options: ['1 mes', '6 meses', '1 año', '5 años'], correctIndex: 2 }, // Nota: Para controlados es 1 año generalmente en local
            { id: 211, text: '¿Quién autoriza el funcionamiento de una farmacia?', options: ['La Municipalidad', 'El ISP', 'La SEREMI de Salud', 'El Servicio de Impuestos Internos'], correctIndex: 2 },
            { id: 212, text: '¿Pueden las farmacias vender medicamentos por internet?', options: ['No, está prohibido', 'Sí, cumpliendo la normativa y con autorización sanitaria', 'Sí, por WhatsApp informal', 'Solo vitaminas'], correctIndex: 1 },
            { id: 213, text: 'El "Petitorio Farmacéutico" es:', options: ['Una lista de deseos de los empleados', 'El listado mínimo de medicamentos que debe tener la farmacia', 'El stock de bodega', 'Las ofertas del mes'], correctIndex: 1 },
            { id: 214, text: 'Si un paciente presenta una reacción adversa grave, ¿qué se debe hacer?', options: ['Nada', 'Recomendar otro remedio', 'Notificar al Q.F. para reporte de Farmacovigilancia', 'Devolver el dinero'], correctIndex: 2 },
            { id: 215, text: 'El auxiliar de farmacia está facultado para:', options: ['Recetar medicamentos', 'Cambiar la receta del médico', 'Dispensar e informar bajo supervisión', 'Realizar diagnósticos clínicos'], correctIndex: 2 }
        ] 
    },
    // Niveles 3 y 4 vendrán en la próxima expansión
    { 
        id: 3, 
        title: 'Gestión y Farmacología', 
        desc: 'Nivel Avanzado (En construcción).', 
        icon: '📊', 
        qCount: 0, 
        passingScore: 100, 
        timeLimit: 90, 
        questions: [] 
    },
    { 
        id: 4, 
        title: 'Simulacro Final', 
        desc: 'Examen completo (En construcción).', 
        icon: '🎓', 
        qCount: 0, 
        passingScore: 100, 
        timeLimit: 60, 
        questions: [] 
    }
];
