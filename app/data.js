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

// --- NIVELES DEL QUIZ CON ENLACES A PDF ---
// Nota: studyGuide debe coincidir con el nombre de tu archivo en la carpeta public
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
            { id: 101, text: '¿Quién es el responsable técnico legal de una farmacia?', options: ['El Dueño', 'El Auxiliar de más antigüedad', 'El Químico Farmacéutico', 'El Gerente'], correctIndex: 2, studyGuide: 'decreto_466.pdf' }, 
            { id: 102, text: '¿Cuál es el rango de temperatura para cadena de frío?', options: ['0°C a 5°C', '2°C a 8°C', '8°C a 15°C', 'Ambiente'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 103, text: '¿Qué significa que un medicamento sea OTC?', options: ['Con receta retenida', 'Venta directa (Over The Counter)', 'Uso hospitalario', 'Controlado'], correctIndex: 1, studyGuide: 'ley_20724.pdf' },
            { id: 104, text: 'El Auxiliar de Farmacia debe trabajar bajo supervisión de:', options: ['El cliente', 'El Químico Farmacéutico', 'El cajero', 'Nadie'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 105, text: '¿Qué organismo fiscaliza a las farmacias en Chile?', options: ['ISP y SEREMI de Salud', 'Sernac', 'Colegio de Farmacéuticos', 'Carabineros'], correctIndex: 0, studyGuide: 'decreto_466.pdf' },
            { id: 106, text: '¿Qué es un medicamento Bioequivalente?', options: ['El original', 'Mismo efecto terapéutico comprobado que el original', 'Copia barata', 'Natural'], correctIndex: 1, studyGuide: 'ley_20724.pdf' },
            { id: 107, text: '¿Cuál es la vía de administración "Sublingual"?', options: ['Debajo de la lengua', 'Inyectable', 'Sobre la piel', 'Rectal'], correctIndex: 0, studyGuide: 'guia_posologia.pdf' },
            { id: 108, text: '¿Qué indica la "Fecha de Vencimiento"?', options: ['Fabricación', 'Límite para consumo seguro', 'Fecha de venta', 'Apertura'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 109, text: '¿Dónde almacenar medicamentos en casa?', options: ['Baño', 'Cocina', 'Lugar fresco y seco', 'Al sol'], correctIndex: 2, studyGuide: 'decreto_466.pdf' },
            { id: 110, text: 'La sigla D.C.I. significa:', options: ['Denominación Común Internacional', 'Dosis Común', 'Dirección Central', 'Droguería'], correctIndex: 0, studyGuide: 'ley_20724.pdf' }
        ] 
    },
    { 
        id: 2, 
        title: 'Legislación (D.S. 466)', 
        desc: 'Normativa sanitaria: Recetas, libros y condiciones.', 
        icon: '⚖️', 
        qCount: 15, 
        passingScore: 9,
        timeLimit: 90, 
        questions: [
            { id: 201, text: 'Según D.S. 466, ¿quién asume la Dirección Técnica si falta el Q.F.?', options: ['Auxiliar experto', 'Nadie (Farmacia debe cerrar)', 'Dueño', 'Alumno'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 202, text: '¿Temperatura ambiental máxima en sala de ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 203, text: '¿Qué receta usan los Estupefacientes (Lista I)?', options: ['Simple', 'Retenida', 'Cheque', 'Magistral'], correctIndex: 2, studyGuide: 'decreto_404.pdf' },
            { id: 204, text: 'Medicamentos con "Estrella Verde" son:', options: ['Venta Directa', 'Psicotrópicos', 'Estupefacientes', 'Bioequivalentes'], correctIndex: 1, studyGuide: 'decreto_405.pdf' },
            { id: 205, text: '¿Validez de una Receta Cheque?', options: ['60 días', '30 días', '1 año', 'Indefinida'], correctIndex: 1, studyGuide: 'decreto_404.pdf' },
            { id: 206, text: '¿Es legal fraccionar medicamentos?', options: ['No', 'Sí, bajo normas y supervisión Q.F.', 'Cualquiera puede', 'Solo antibióticos'], correctIndex: 1, studyGuide: 'ley_20724.pdf' },
            { id: 207, text: '¿Qué libro es OBLIGATORIO para el público?', options: ['Novedades', 'Reclamos y Sugerencias', 'Ventas', 'Asistencia'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 208, text: '¿Está permitida la "Canela" (Incentivos)?', options: ['Sí', 'No, prohibido por Ley de Fármacos', 'A veces', 'Depende'], correctIndex: 1, studyGuide: 'ley_20724.pdf' },
            { id: 209, text: 'Ante una receta ilegible, usted:', options: ['Adivina', 'Pregunta al paciente', 'No despacha y consulta al Q.F.', 'Vende similar'], correctIndex: 2, studyGuide: 'decreto_466.pdf' },
            { id: 210, text: '¿Tiempo de custodia de Receta Retenida en farmacia?', options: ['1 mes', '6 meses', '1 año', '5 años'], correctIndex: 2, studyGuide: 'decreto_466.pdf' },
            { id: 211, text: '¿Quién autoriza el funcionamiento de la farmacia?', options: ['Municipalidad', 'ISP', 'SEREMI de Salud', 'SII'], correctIndex: 2, studyGuide: 'decreto_466.pdf' },
            { id: 212, text: '¿Venta de medicamentos por internet?', options: ['Prohibido', 'Permitido con autorización sanitaria', 'Por WhatsApp', 'Solo vitaminas'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 213, text: 'El "Petitorio Farmacéutico" es:', options: ['Lista de deseos', 'Listado mínimo obligatorio de medicamentos', 'Stock bodega', 'Ofertas'], correctIndex: 1, studyGuide: 'decreto_466.pdf' },
            { id: 214, text: 'Ante reacción adversa grave:', options: ['Nada', 'Recomendar otro', 'Notificar al Q.F. (Farmacovigilancia)', 'Devolver dinero'], correctIndex: 2, studyGuide: 'decreto_466.pdf' },
            { id: 215, text: 'El auxiliar de farmacia está facultado para:', options: ['Recetar', 'Cambiar receta', 'Dispensar bajo supervisión', 'Diagnosticar'], correctIndex: 2, studyGuide: 'decreto_466.pdf' }
        ] 
    }
];
