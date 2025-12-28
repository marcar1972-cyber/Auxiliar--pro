export const level4 = {
  id: 4,
  title: "Simulacro Final Seremi 2025",
  icon: "GraduationCap",
  passingScore: 30,
  timeLimit: 3600, // 60 minutos en segundos
  questions: [
    // --- LEGISLACIÓN Y RECETAS (DS 466) ---
    {
      text: "¿Cuál es el plazo de vigencia de una receta médica simple desde su emisión?",
      options: ["15 días", "30 días", "60 días", "90 días"],
      correctIndex: 1,
      studyGuide: "Vigencia de recetas según DS 466"
    },
    {
      text: "¿Quién es el responsable técnico de la correcta dispensación en una farmacia?",
      options: ["El Auxiliar de Farmacia", "El Dueño de la Farmacia", "El Químico Farmacéutico", "El Bodeguero"],
      correctIndex: 2,
      studyGuide: "Roles profesionales en farmacia"
    },
    {
      text: "¿Qué documento es obligatorio para la venta de antibióticos?",
      options: ["Receta Simple", "Receta Cheque", "Receta Retenida", "Venta Directa"],
      correctIndex: 2,
      studyGuide: "Normativa de antibióticos en Chile"
    },
    {
      text: "¿Qué información NO puede faltar en una receta para ser válida?",
      options: ["Nombre del paciente y fecha", "Nombre comercial únicamente", "Firma y timbre del profesional únicamente", "Dirección del fabricante"],
      correctIndex: 0,
      studyGuide: "Contenido obligatorio de la receta médica"
    },
    {
      text: "Un establecimiento que solo vende medicamentos de venta directa se denomina:",
      options: ["Farmacia", "Almacén Farmacéutico", "Botiquín", "Droguería"],
      correctIndex: 1,
      studyGuide: "Tipos de establecimientos farmacéuticos"
    },
    {
      text: "¿Cuál es el plazo para responder un reclamo en el libro oficial de la farmacia?",
      options: ["48 horas", "5 días hábiles", "15 días corridos", "30 días hábiles"],
      correctIndex: 1,
      studyGuide: "Manejo del Libro de Reclamaciones"
    },
    {
      text: "¿Qué profesional NO puede prescribir medicamentos en Chile?",
      options: ["Enfermero/a", "Médico Cirujano", "Cirujano Dentista", "Matrona (limitado)"],
      correctIndex: 0,
      studyGuide: "Facultad de prescripción legal"
    },
    {
      text: "¿Qué se entiende por 'Venta Directa'?",
      options: ["Medicamentos que no requieren receta médica", "Medicamentos que solo el DT puede entregar", "Medicamentos de receta retenida", "Medicamentos fraccionados"],
      correctIndex: 0,
      studyGuide: "Categorías de venta de medicamentos"
    },
    {
      text: "El petitorio mínimo farmacéutico es:",
      options: ["El stock de seguridad de la farmacia", "El listado de medicamentos obligatorios", "La lista de precios autorizada", "El registro de psicotrópicos"],
      correctIndex: 1,
      studyGuide: "Cumplimiento del petitorio mínimo"
    },
    {
      text: "La receta electrónica para productos controlados debe ser:",
      options: ["Impresa por el paciente obligatoriamente", "Verificada en el sistema centralizado de salud", "Aceptada solo si es manual", "Validada solo por el dueño"],
      correctIndex: 1,
      studyGuide: "Manejo de receta electrónica 2025"
    },
    {
      text: "¿A qué distancia mínima del muro deben estar los estantes en bodega?",
      options: ["5 cm", "10 cm", "30 cm", "60 cm"],
      correctIndex: 2,
      studyGuide: "Condiciones de almacenamiento en bodega"
    },
    {
      text: "¿Qué significa que un medicamento esté 'registrado'?",
      options: ["Que tiene precio de venta", "Que posee autorización sanitaria del ISP", "Que está en el inventario", "Que es bioequivalente"],
      correctIndex: 1,
      studyGuide: "Rol del ISP y registro sanitario"
    },
    {
      text: "¿Se puede vender una fracción de un envase en cualquier farmacia?",
      options: ["Sí, si el paciente lo pide", "Solo si tiene unidad de fraccionamiento autorizada", "No, está prohibido en todas partes", "Solo en farmacias municipales"],
      correctIndex: 1,
      studyGuide: "Normativa de fraccionamiento"
    },
    {
      text: "¿Cuál es la función del Auxiliar de Farmacia según la ley?",
      options: ["Prescribir medicamentos", "Colaborar bajo supervisión del DT", "Realizar diagnósticos médicos", "Administrar vacunas sin supervisión"],
      correctIndex: 1,
      studyGuide: "Alcance del rol del Auxiliar"
    },
    {
      text: "La publicidad de medicamentos de venta bajo receta está:",
      options: ["Permitida en televisión", "Prohibida al público general", "Permitida solo en farmacias", "Permitida en redes sociales"],
      correctIndex: 1,
      studyGuide: "Regulación de publicidad farmacéutica"
    },

    // --- PRODUCTOS CONTROLADOS (DS 404/405) ---
    {
      text: "¿Qué color tiene la Receta Cheque?",
      options: ["Amarillo", "Rosado", "Blanco", "Celeste"],
      correctIndex: 0,
      studyGuide: "Formatos de recetas controladas"
    },
    {
      text: "¿Por cuánto tiempo se deben archivar las recetas retenidas de controlados?",
      options: ["1 año", "2 años", "3 años", "5 años"],
      correctIndex: 1,
      studyGuide: "Archivo de recetas según DS 404"
    },
    {
      text: "¿Quién debe firmar el Libro de Controlados diariamente?",
      options: ["El Auxiliar de turno", "El Director Técnico", "El inspector del ISP", "El Jefe de Local (no farmacéutico)"],
      correctIndex: 1,
      studyGuide: "Manejo de registros oficiales"
    },
    {
      text: "Un ejemplo de Estupefaciente es:",
      options: ["Diazepam", "Morfina", "Amoxicilina", "Loratadina"],
      correctIndex: 1,
      studyGuide: "Clasificación de sustancias controladas"
    },
    {
      text: "El robo de productos controlados debe ser informado a:",
      options: ["Solo a la policía", "A la policía y a la Seremi de Salud", "Solo al dueño de la farmacia", "Solo al ISP"],
      correctIndex: 1,
      studyGuide: "Protocolo de pérdidas en controlados"
    },
    {
      text: "¿Cuál es la vigencia de una Receta Cheque?",
      options: ["10 días", "30 días", "60 días", "90 días"],
      correctIndex: 1,
      studyGuide: "Vigencia de documentos controlados"
    },
    {
      text: "Los psicotrópicos se encuentran regulados por el:",
      options: ["DS 404", "DS 405", "DS 466", "Código Sanitario únicamente"],
      correctIndex: 1,
      studyGuide: "Marco legal de psicotrópicos"
    },
    {
      text: "¿Se puede entregar un psicotrópico con fotocopia de receta?",
      options: ["Sí, si es legible", "No, debe ser el original", "Solo si está firmada ante notario", "Solo si el paciente es conocido"],
      correctIndex: 1,
      studyGuide: "Validez de documentos de dispensación"
    },

    // --- ALMACENAMIENTO Y LOGÍSTICA ---
    {
      text: "¿Cuál es el rango de temperatura de refrigeración (cadena de frío)?",
      options: ["0°C a 5°C", "2°C a 8°C", "8°C a 15°C", "15°C a 25°C"],
      correctIndex: 1,
      studyGuide: "Gestión de cadena de frío"
    },
    {
      text: "¿Qué significa el sistema FEFO en logística farmacéutica?",
      options: ["Primero en entrar, primero en salir", "Primero en vencer, primero en salir", "Producto más caro primero", "Fármacos Especiales Foráneos Ordenados"],
      correctIndex: 1,
      studyGuide: "Gestión de inventarios"
    },
    {
      text: "La humedad relativa ideal en una farmacia debe ser:",
      options: ["Menor al 20%", "Entre 40% y 70%", "Sobre el 90%", "No se mide la humedad"],
      correctIndex: 1,
      studyGuide: "Control ambiental en farmacia"
    },
    {
      text: "¿Qué se debe hacer ante un quiebre de cadena de frío?",
      options: ["Vender los productos rápido", "Segregar los productos y avisar al DT", "Congelar los productos", "Ignorar si fue por menos de 1 hora"],
      correctIndex: 1,
      studyGuide: "Protocolo de emergencias logísticas"
    },
    {
      text: "Los medicamentos deben almacenarse separados del piso al menos:",
      options: ["5 cm", "10 cm", "20 cm", "50 cm"],
      correctIndex: 1,
      studyGuide: "Normas de almacenamiento físico"
    },
    {
      text: "¿Dónde se deben dejar los medicamentos vencidos?",
      options: ["En la basura común", "En área de rechazados, rotulados", "En el mostrador de ventas", "En la bodega de productos nuevos"],
      correctIndex: 1,
      studyGuide: "Manejo de productos no aptos para venta"
    },
    {
      text: "¿Qué herramienta mide la temperatura y humedad simultáneamente?",
      options: ["Termómetro de mercurio", "Termohigrómetro", "Barómetro", "Tensiómetro"],
      correctIndex: 1,
      studyGuide: "Equipamiento de control ambiental"
    },

    // --- FARMACOLOGÍA Y BIOEQUIVALENCIA ---
    {
      text: "¿Qué indica el sello amarillo de bioequivalencia?",
      options: ["Que es más barato", "Misma eficacia y seguridad que el original", "Que es producto natural", "Que es de fabricación nacional"],
      correctIndex: 1,
      studyGuide: "Concepto de Bioequivalencia 2025"
    },
    {
      text: "La Farmacodinamia estudia:",
      options: ["Lo que el cuerpo le hace al fármaco", "Lo que el fármaco le hace al cuerpo", "La velocidad de absorción", "El costo de producción"],
      correctIndex: 1,
      studyGuide: "Conceptos básicos de farmacología"
    },
    {
      text: "¿Qué es el DCI de un medicamento?",
      options: ["Denominación Común Internacional", "Código de barras", "Nombre del fabricante", "Dosis Crítica Inicial"],
      correctIndex: 0,
      studyGuide: "Nomenclatura farmacéutica internacional"
    },
    {
      text: "La biotransformación de los fármacos ocurre principalmente en:",
      options: ["Los riñones", "El hígado", "El estómago", "Los pulmones"],
      correctIndex: 1,
      studyGuide: "Metabolismo de fármacos"
    },
    {
      text: "Una RAM es:",
      options: ["Receta de alta montaña", "Reacción Adversa a un Medicamento", "Reporte de administración", "Registro de Almacenamiento Mensual"],
      correctIndex: 1,
      studyGuide: "Farmacovigilancia y RAMs"
    },
    {
      text: "¿Cuál es la principal vía de excreción de los fármacos?",
      options: ["Sudor", "Orina (vía renal)", "Saliva", "Lágrimas"],
      correctIndex: 1,
      studyGuide: "Excreción de sustancias"
    },

    // --- CÁLCULOS Y OPERACIONES ---
    {
      text: "Si un jarabe tiene 250mg/5ml, ¿cuántos mg hay en 10ml?",
      options: ["250 mg", "500 mg", "750 mg", "1000 mg"],
      correctIndex: 1,
      studyGuide: "Cálculos básicos de dosificación"
    },
    {
      text: "Un paciente debe tomar 1 tableta cada 8 horas por 7 días. ¿Cuántas tabletas necesita?",
      options: ["14 tabletas", "21 tabletas", "28 tabletas", "42 tabletas"],
      correctIndex: 1,
      studyGuide: "Cálculo de cantidad total de tratamiento"
    },
    {
      text: "¿A cuántos ml equivale aproximadamente una 'cucharadita' de té?",
      options: ["2 ml", "5 ml", "10 ml", "15 ml"],
      correctIndex: 1,
      studyGuide: "Conversiones de medidas caseras"
    },
    {
      text: "Si se indica 1 gramo de Paracetamol y tenemos tabletas de 500mg, el paciente debe tomar:",
      options: ["1 tableta", "2 tabletas", "3 tabletas", "4 tabletas"],
      correctIndex: 1,
      studyGuide: "Conversión de unidades de masa (g a mg)"
    }
  ]
};
