// quizData/proLevel7.js

/**
 * < macz.dev />
 * ARCHIVO: Nivel 7 PRO - EXAMEN GLOBAL INTEGRADO
 * TEMA: Miscelánea Técnica, Glosario, Cálculos y Normativa (Dto 3, 466, 404, 405, 90, 594)
 */

export const proLevel7 = {
  id: 7,
  title: "Nivel 7 PRO: Examen Global Diamante",
  description: "El reto final. 40 preguntas que integran terminología técnica, cálculos críticos y toda la normativa chilena vigente.",
  duracionMins: 60,
  questions: [
    {
      question: "Respecto a la terminología médica, indique cuál de las siguientes alternativas describe correctamente que una sustancia tenga un efecto COLAGOGO:",
      options: [
        "Es la propiedad de una sustancia de aumentar la secreción y producción de bilis por el hígado.",
        "Se refiere a la capacidad de facilitar la expulsión de la bilis desde la vesícula biliar hacia el duodeno.",
        "Es un trastorno del metabolismo que impide la absorción de pigmentos biliares en el intestino.",
        "Es la inflamación del conducto colédoco por obstrucción de un cálculo."
      ],
      correctAnswer: 1,
      explanation: "El efecto colagogo facilita la salida de bilis almacenada en la vesícula. No confundir con colerético, que es el que aumenta la producción en el hígado."
    },
    {
      question: "(CÁLCULO) Un niño de 12 kg requiere un antibiótico (250 mg / 5 ml). La dosis es 50 mg/kg/día, fraccionada cada 8 h, por 7 días. Si el frasco trae 100 ml, señale la afirmación CORRECTA:",
      options: [
        "El niño requiere 600 mg diarios; con un solo frasco es suficiente para el tratamiento.",
        "El niño requiere 600 mg diarios (4 ml por dosis); el tratamiento total suma 84 ml, por lo que se dispensa 1 frasco.",
        "El tratamiento total requiere 150 ml de suspensión, por lo que deben dispensarse 2 frascos cerrados.",
        "El auxiliar debe abrir el frasco y entregar exactamente 84 ml en una jeringa dosificadora."
      ],
      correctAnswer: 1,
      explanation: "Cálculo: 12kg x 50mg/kg = 600mg diarios. 600mg / 50mg/ml = 12ml diarios. 12ml x 7 días = 84ml totales. Con un frasco de 100ml basta para el tratamiento completo."
    },
    {
      question: "Sobre el Registro Sanitario de productos farmacéuticos (Decreto 3), indique la afirmación CORRECTA:",
      options: [
        "Es un proceso de evaluación técnica que habilita la distribución y uso de un medicamento en el país.",
        "Los productos biológicos y homeopáticos están exentos de registro si se fabrican en Chile.",
        "La autorización de registro es otorgada por la SEREMI de Salud de cada región.",
        "Una vez otorgado, el registro sanitario es indefinido y no puede ser cancelado."
      ],
      correctAnswer: 0,
      explanation: "El Registro Sanitario es la autorización técnica otorgada por el ISP que permite la fabricación, importación y venta de un producto tras evaluar su seguridad y eficacia."
    },
    {
      question: "En relación con el glosario de términos, señale la afirmación CORRECTA respecto a la 'Coluria':",
      options: [
        "Es la orina de color café debido a la presencia de bilirrubina conjugada.",
        "Corresponde a la presencia de deposiciones de color blanco por ausencia de pigmento biliar.",
        "Se define como la micción involuntaria durante el sueño en niños.",
        "Es el aumento exagerado del apetito o hambre insaciable."
      ],
      correctAnswer: 0,
      explanation: "La coluria es la presencia de bilirrubina en la orina, dándole un color oscuro característico (como té cargado), signo común en patologías hepáticas."
    },
    {
      question: "(CÁLCULO) Un paciente aplica Insulina Glargina: '30 UI am y 10 UI pm por 30 días'. Cada lápiz (pen) trae 3 ml (100 UI/ml). Indique la alternativa CORRECTA:",
      options: [
        "La dosis mensual es de 1.500 UI; se deben dispensar 5 lápices.",
        "La dosis diaria es de 40 UI; el paciente requiere 1 lápiz para todo el mes.",
        "Se deben dispensar 15 lápices porque la insulina vence a los 2 días de abierta.",
        "El tratamiento requiere 1.200 UI totales, por lo que bastan 4 lápices."
      ],
      correctAnswer: 3,
      explanation: "Cálculo: 30+10 = 40 UI diarias. 40 UI x 30 días = 1.200 UI totales. Cada lápiz tiene 300 UI (3ml x 100UI). 1.200 / 300 = 4 lápices."
    },
    {
      question: "Respecto a la intercambiabilidad de bioequivalentes, señale la alternativa INCORRECTA:",
      options: [
        "El farmacéutico debe ofrecer la alternativa bioequivalente si la receta indica DCI.",
        "El médico puede oponerse escribiendo de puño y letra 'No autorizo intercambio'.",
        "En el expendio electrónico, el sitio debe ofrecer el bioequivalente antes de finalizar la compra.",
        "El auxiliar puede sustituir por cualquier genérico, aunque no haya demostrado bioequivalencia."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. La ley de fármacos solo permite el intercambio por productos que cuenten con el registro de bioequivalencia vigente (sello amarillo)."
    },
    {
      question: "De acuerdo con el Decreto 405, los psicotrópicos de la Lista IV (Benzodiazepinas) deben llevar en su envase:",
      options: [
        "Una estrella de cinco puntas de color rojo.",
        "Una estrella de cinco puntas de color verde.",
        "Una estrella de seis puntas de color azul.",
        "La leyenda 'Venta bajo Receta Cheque' en letras rojas."
      ],
      correctAnswer: 1,
      explanation: "Los psicotrópicos se identifican con la estrella verde de 5 puntas. La roja es exclusiva para estupefacientes (Dto. 404)."
    },
    {
      question: "Respecto a la terminología médica, ¿qué efecto tiene un fármaco clasificado como EMENAGOGO?",
      options: [
        "Estimula la producción de glóbulos rojos.",
        "Favorece o estimula el flujo menstrual.",
        "Reduce la inflamación de los ganglios linfáticos.",
        "Corta la diarrea en pacientes pediátricos."
      ],
      correctAnswer: 1,
      explanation: "Un emenagogo es una sustancia que estimula el flujo sanguíneo en el área de la pelvis y el útero, fomentando la menstruación."
    },
    {
      question: "(CÁLCULO) Respecto a los umbrales de dosis para la Codeína asociada (Decreto 404), señale la afirmación INCORRECTA:",
      options: [
        "Si el producto contiene 8 mg de codeína por unidad, su venta es receta médica simple.",
        "Si el producto contiene 30 mg de codeína por unidad, su venta es receta retenida.",
        "Si el producto contiene 60 mg de codeína por unidad, su venta es receta cheque.",
        "Cualquier dosis superior a 10 mg de codeína asociada convierte al producto en Receta Cheque."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. Para ser Receta Cheque debe contener 60 mg o más por unidad. Entre 10 y 59 mg es Receta Retenida."
    },
    {
      question: "Sobre el manejo de estupefacientes (Decreto 404), identifique la alternativa INCORRECTA:",
      options: [
        "'Posesión' es la tenencia de la sustancia para uso personal y lícito.",
        "'Tenencia' es la mantención de la mercancía para uso de terceros (ej. farmacia).",
        "El expendio de productos de la Lista I exige obligatoriamente Receta Cheque.",
        "Las farmacias pueden donar sus excedentes de estupefacientes a personas naturales."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. Los estupefacientes están bajo control estricto; cualquier transferencia o destrucción debe ser autorizada por la autoridad sanitaria (ISP/SEREMI)."
    },
    {
      question: "Respecto a la Norma Técnica 208 (Cadena de Frío), señale la afirmación CORRECTA:",
      options: [
        "Los sensores de temperatura deben tener una exactitud de ± 0,5 °C o mejor.",
        "Los registros de temperatura deben hacerse manualmente una vez a la semana.",
        "El personal puede abrir el refrigerador tantas veces quiera sin afectar la estabilidad.",
        "Las alarmas visuales son opcionales si el local tiene guardia nocturno."
      ],
      correctAnswer: 0,
      explanation: "La norma técnica exige sensores de alta precisión (± 0,5 °C) para asegurar que los productos (vacunas, insulinas) se mantengan entre 2°C y 8°C."
    },
    {
      question: "En relación con el término CARMINATIVO, ¿cuál es su función principal?",
      options: [
        "Aumentar el tono muscular del esfínter esofágico.",
        "Facilitar la expulsión de gases y disminuir la hinchazón abdominal.",
        "Prevenir la formación de cálculos renales.",
        "Estimular el apetito en pacientes con anorexia."
      ],
      correctAnswer: 1,
      explanation: "Los carminativos (como la simeticona o el hinojo) ayudan a eliminar los gases del tracto digestivo."
    },
    {
      question: "(CÁLCULO) Un paciente presenta receta de 'Zolpidem': '1 comp. cada noche por 45 días'. La caja trae 30 unidades. ¿Cuál es la acción técnica CORRECTA?",
      options: [
        "Entregar 1 caja y recortar 15 comprimidos de otra para completar.",
        "Dispensar 2 cajas completas (60 unidades) y retener la receta.",
        "Rechazar la receta porque los psicotrópicos no pueden exceder los 30 días.",
        "Entregar solo 1 caja e indicar que vuelva con una nueva receta para el resto."
      ],
      correctAnswer: 1,
      explanation: "En controlados, no se permite el fraccionamiento en el mostrador. Se deben vender las cajas originales necesarias para cubrir el tratamiento y retener la receta que justifica la cantidad."
    },
    {
      question: "Sobre el expendio de medicamentos online, identifique la alternativa INCORRECTA:",
      options: [
        "El sitio debe contener infografías que promuevan el uso racional.",
        "Está estrictamente prohibido el expendio electrónico de 'Receta Cheque'.",
        "El despacho debe garantizar que no se altere la calidad o cadena de frío.",
        "La farmacia se exime de responsabilidad si el paquete se daña en el transporte externo."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. La farmacia (y su Director Técnico) es responsable de la calidad del producto hasta que llega a manos del paciente, aunque use un transporte externo."
    },
    {
      question: "Según el Decreto 90, los Auxiliares Paramédicos de Farmacia están habilitados para:",
      options: [
        "Diagnosticar síntomas y prescribir antibióticos.",
        "Ejecutar técnicas y labores de apoyo bajo la supervisión del Q.F.",
        "Dirigir técnicamente una farmacia por 30 días en ausencia del Q.F.",
        "Autorizar el cambio de condición de venta de un medicamento."
      ],
      correctAnswer: 1,
      explanation: "El rol del auxiliar es de colaboración técnica y apoyo, actuando siempre bajo la supervisión, control y dependencia del Químico Farmacéutico."
    },
    {
      question: "Respecto a la diferencia entre MUCOLÍTICO y EXPECTORANTE, señale la afirmación CORRECTA:",
      options: [
        "Son sinónimos exactos.",
        "El mucolítico disuelve el moco y el expectorante facilita su expulsión.",
        "El expectorante corta la tos y el mucolítico la provoca.",
        "El mucolítico solo se usa en niños y el expectorante en adultos."
      ],
      correctAnswer: 1,
      explanation: "El mucolítico actúa sobre la estructura química del moco para hacerlo menos espeso, mientras que el expectorante estimula los mecanismos para botarlo."
    },
    {
      question: "(CÁLCULO) Receta de 'Ácido Valproico Gotas' por 60 días: 'Tomar 20 gotas cada 12 h'. Si 20 gotas = 1 ml y el frasco trae 20 ml, señale la afirmación CORRECTA:",
      options: [
        "El paciente requiere 120 ml totales (6 frascos).",
        "La dosis diaria es de 2 ml; en 60 días requiere 120 ml (6 frascos).",
        "El paciente requiere 2.400 gotas; cada frasco trae 400 gotas (6 frascos).",
        "Todas las anteriores son correctas."
      ],
      correctAnswer: 3,
      explanation: "Cálculo: 40 gotas diarias x 60 días = 2.400 gotas. 20 ml x 20 gotas/ml = 400 gotas por frasco. 2.400 / 400 = 6 frascos."
    },
    {
      question: "En relación con las 'Muestras Médicas' (Decreto 3), indique la afirmación CORRECTA:",
      options: [
        "Deben llevar la mención 'MUESTRA MÉDICA PROHIBIDA SU VENTA' de forma clara.",
        "Las farmacias pueden usarlas para completar tratamientos de pacientes sin dinero.",
        "Su rotulación gráfica puede ser distinta a la de la especialidad comercial.",
        "Está permitido entregar muestras de estupefacientes en la vía pública."
      ],
      correctAnswer: 0,
      explanation: "Las muestras médicas deben estar rotuladas exactamente como la especialidad comercial, incluyendo la advertencia legal de prohibición de venta."
    },
    {
      question: "Sobre el 'Libro de Reclamos' de la farmacia (Decreto 466), identifique la alternativa INCORRECTA:",
      options: [
        "Debe estar foliado y autorizado por la SEREMI de Salud o ISP.",
        "Las denuncias sobre calidad deben ser contestadas en un máximo de 2 días hábiles.",
        "Debe estar permanentemente a disposición del público.",
        "El auxiliar puede negarse a facilitarlo si el cliente es agresivo."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. El Libro de Reclamos es un derecho del consumidor y una obligación sanitaria; el personal no puede negar su acceso bajo ninguna circunstancia."
    },
    {
      question: "Respecto al término ANTIPIRÉTICO, ¿cuál es su función?",
      options: [
        "Reducir la presión arterial.",
        "Disminuir la temperatura corporal en casos de fiebre.",
        "Combatir infecciones bacterianas en la piel.",
        "Evitar la formación de coágulos sanguíneos."
      ],
      correctAnswer: 1,
      explanation: "Los antipiréticos (como el paracetamol) actúan sobre el hipotálamo para regular y bajar la temperatura corporal durante estados febriles."
    },
    {
      question: "Sobre los Almacenes Farmacéuticos, identifique la alternativa INCORRECTA:",
      options: [
        "Venden medicamentos de venta directa y del petitorio mínimo.",
        "Pueden ser dirigidos técnicamente por un Práctico de Farmacia.",
        "Están autorizados legalmente para vender psicotrópicos con receta retenida.",
        "Deben mantener en existencia permanente los productos de su petitorio."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Los Almacenes Farmacéuticos tienen prohibido por ley el expendio de cualquier medicamento sujeto a control (estupefacientes o psicotrópicos)."
    },
    {
      question: "Según el Decreto 594 sobre higiene en lugares de trabajo, indique la afirmación CORRECTA:",
      options: [
        "En faenas a campo abierto, no se requieren servicios higiénicos.",
        "Todo lugar de trabajo debe disponer, como mínimo, de excusado y lavatorio.",
        "El papel higiénico es de responsabilidad del trabajador.",
        "Los baños pueden ser compartidos si hay menos de 5 empleados."
      ],
      correctAnswer: 1,
      explanation: "La normativa exige que todo establecimiento tenga infraestructura básica de higiene (WC y lavamanos) independiente de la cantidad de trabajadores."
    },
    {
      question: "Sobre las fórmulas magistrales de anorexígenos (Decreto 405), identifique la alternativa INCORRECTA:",
      options: [
        "La Fentermina tiene un límite de dosis de 8 mg por unidad posológica.",
        "Está prohibido asociar anorexígenos con hormona tiroidea o diuréticos.",
        "El farmacéutico puede preparar la receta para un tratamiento de 90 días.",
        "Solo se puede incluir UN principio activo anorexígeno por unidad."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Los preparados magistrales de anorexígenos están limitados a tratamientos de máximo 30 días, no 90."
    },
    {
      question: "¿Qué significa que un medicamento tenga un efecto PROFILÁCTICO?",
      options: [
        "Que se usa para tratar el dolor crónico.",
        "Que se administra para prevenir una enfermedad.",
        "Que acelera la recuperación post-quirúrgica.",
        "Que bloquea la absorción de grasas."
      ],
      correctAnswer: 1,
      explanation: "La profilaxis es el uso de un fármaco o medida para evitar que ocurra una infección o enfermedad (ej. vacunas o antibióticos pre-operatorios)."
    },
    {
      question: "Sobre la publicidad de medicamentos (Ley 20724), señale la afirmación CORRECTA:",
      options: [
        "Se permite publicitar en radio medicamentos de Receta Simple.",
        "Están prohibidas las leyendas publicitarias en el rotulado de los envases.",
        "Las farmacias pueden regalar puntos por la compra de antibióticos.",
        "El ISP autoriza comerciales de TV para medicamentos de control legal."
      ],
      correctAnswer: 1,
      explanation: "La ley prohíbe cualquier tipo de publicidad o incentivo al consumo en los envases o mediante beneficios por compra de medicamentos éticos (con receta)."
    },
    {
      question: "Respecto a la 'Fecha de Expiración' (Decreto 3), indique la afirmación CORRECTA:",
      options: [
        "Es la fecha tras la cual no se garantiza la estabilidad del producto.",
        "Se establece en base a la fecha de fabricación en el local.",
        "Se pueden vender hasta 3 meses después de vencidos si se guardaron bien.",
        "No es obligatorio indicarla en el blíster (envase primario)."
      ],
      correctAnswer: 0,
      explanation: "La fecha de expiración o vencimiento es el límite de garantía de potencia y seguridad del fármaco establecido por estudios de estabilidad."
    },
    {
      question: "Sobre los establecimientos de Óptica, identifique la alternativa INCORRECTA:",
      options: [
        "Requieren autorización sanitaria previa de la SEREMI.",
        "El tecnólogo médico con mención en oftalmología puede prescribir lentes.",
        "Las ópticas pueden funcionar sin un profesional responsable.",
        "Están sujetos a fiscalización por parte de la autoridad sanitaria."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Toda óptica debe contar obligatoriamente con un profesional responsable (Óptico o Tecnólogo Médico) para funcionar."
    },
    {
      question: "¿Qué efecto produce una sustancia COLERÉTICA?",
      options: [
        "Expulsa la bilis de la vesícula.",
        "Aumenta la producción de bilis en el hígado.",
        "Disminuye la inflamación de los riñones.",
        "Provoca la contracción del colon para evacuar."
      ],
      correctAnswer: 1,
      explanation: "A diferencia del colagogo, el colerético actúa directamente en las células del hígado para fabricar más bilis."
    },
    {
      question: "Sobre el 'Formulario Nacional de Medicamentos' (Decreto 264), identifique la alternativa INCORRECTA:",
      options: [
        "Contiene la nómina de productos indispensables para la terapéutica del país.",
        "Su actualización general debe realizarse cada 10 años.",
        "Los productos incluidos deben llevar la leyenda 'FORMULARIO NACIONAL' en sus rótulos.",
        "La selección se basa en evidencia y realidad epidemiológica."
      ],
      correctAnswer: 1,
      explanation: "Es INCORRECTA. El Formulario Nacional de Medicamentos (FNM) debe actualizarse periódicamente (cada 2 años aproximadamente) para reflejar los avances en salud."
    },
    {
      question: "Respecto a la 'Cadena de Custodia' en fiscalización, señale la afirmación CORRECTA:",
      options: [
        "Son las condiciones que aseguran la integridad de una muestra tomada.",
        "Es el registro de llaves de la farmacia.",
        "Se refiere al transporte de valores al banco.",
        "Es el proceso de entrega de recetas cheque desde CENABAST."
      ],
      correctAnswer: 0,
      explanation: "En fiscalización, la cadena de custodia garantiza que una muestra de medicamento tomada para análisis no sea alterada ni reemplazada durante su traslado al laboratorio."
    },
    {
      question: "Sobre los productos homeopáticos (Decreto 466), identifique la alternativa INCORRECTA:",
      options: [
        "Se rigen por farmacopeas oficiales (Alemana, Francesa, etc.).",
        "Solo pueden ser expendidos en farmacias autorizadas.",
        "Sus etiquetas deben llevar obligatoriamente una estrella roja.",
        "Pueden ser elaborados según fórmulas magistrales."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Los productos homeopáticos no llevan estrella roja (esa es de estupefacientes). Su control es distinto y se basa en la dilución de cepas."
    },
    {
      question: "Según el Decreto 594, respecto a los extintores de incendio, indique la afirmación CORRECTA:",
      options: [
        "El empleador debe instruir al personal sobre su uso.",
        "Son opcionales si hay rociadores automáticos.",
        "Deben estar ocultos para no asustar al público.",
        "El de agua presurizada es ideal para fuegos eléctricos (Clase C)."
      ],
      correctAnswer: 0,
      explanation: "La ley exige que todo el personal sea capacitado en el manejo de extintores y que estos estén señalizados y visibles."
    },
    {
      question: "Respecto a la 'Dosificación' de un medicamento (Decreto 3), señale la afirmación CORRECTA:",
      options: [
        "Corresponde al intervalo de administración y período de tratamiento.",
        "Es el acto de cobrar el copago de una receta.",
        "Es la cantidad total de mg que trae la caja.",
        "Es sinónimo de 'Unidad de Venta'."
      ],
      correctAnswer: 0,
      explanation: "La dosificación es la pauta exacta (cuánto y cada cuánto) y por cuánto tiempo se debe administrar el fármaco para que sea efectivo."
    },
    {
      question: "¿A qué sistema del cuerpo afecta principalmente un fármaco ANTIEMÉTICO?",
      options: [
        "Sistema Muscular.",
        "Sistema Nervioso y Digestivo (previene el vómito).",
        "Sistema Inmune.",
        "Sistema Urinario."
      ],
      correctAnswer: 1,
      explanation: "Los antieméticos actúan bloqueando los receptores que desencadenan el reflejo del vómito en el centro emético del cerebro y en el tracto digestivo."
    },
    {
      question: "Sobre el expendio de antimicrobianos, identifique la alternativa INCORRECTA:",
      options: [
        "Su condición de venta es Receta Médica Retenida.",
        "Las farmacias deben archivar estas recetas.",
        "Se pueden vender sin receta si hay síntomas claros de infección.",
        "Se debe registrar el número de serie de cada envase."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. La venta de antibióticos sin receta es una de las faltas más graves y sancionadas por la SEREMI, debido al riesgo de resistencia bacteriana."
    },
    {
      question: "Respecto a los dispositivos médicos (Decreto 825), señale la afirmación CORRECTA:",
      options: [
        "La Clase IV incluye los dispositivos de más alto riesgo.",
        "Su acción principal es farmacológica.",
        "Los preservativos están exentos de control de calidad.",
        "Requieren firma de médico veterinario para ser importados."
      ],
      correctAnswer: 0,
      explanation: "Los dispositivos médicos se clasifican por riesgo del I al IV, siendo el IV el nivel más crítico (ej. implantes cardíacos)."
    },
    {
      question: "Sobre el examen de auxiliar (Decreto 90), identifique la alternativa INCORRECTA:",
      options: [
        "Consta de un componente teórico y uno práctico.",
        "Puede ser rendido por estudiantes de Q.F. de 6to semestre.",
        "En caso de reprobar, se puede repetir hasta dos veces.",
        "El arancel se paga después de aprobar la teoría."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. El arancel de 'derecho a examen' se paga al inicio del trámite administrativo, antes de rendir cualquier evaluación."
    },
    {
      question: "En relación con las Droguerías (Decreto 466), indique la afirmación CORRECTA:",
      options: [
        "Están destinadas a la importación y distribución al por mayor.",
        "Pueden realizar ventas al detalle al público.",
        "Pueden ser dirigidas por un enfermero.",
        "Están exentas de las Buenas Prácticas de Almacenamiento."
      ],
      correctAnswer: 0,
      explanation: "Las droguerías son el eslabón mayorista de la cadena; compran grandes volúmenes para abastecer a farmacias y hospitales, pero no venden al paciente final."
    },
    {
      question: "Sobre los Laboratorios Acondicionadores, identifique la alternativa INCORRECTA:",
      options: [
        "Realizan etapas de envase, empaque y etiquetado.",
        "El proceso debe ser aprobado por el profesional de calidad.",
        "No requieren sistema de aseguramiento de calidad si importan.",
        "Deben mantener registros de fabricación y análisis de cada lote."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Todo laboratorio, sea de fabricación o acondicionamiento, DEBE tener un sistema de gestión de calidad robusto por normativa."
    },
    {
      question: "Identifique la afirmación FINAL sobre la labor del auxiliar de farmacia:",
      options: [
        "Debe priorizar la venta del producto con más margen.",
        "Es fundamental para garantizar el uso racional de medicamentos.",
        "Puede omitir el vencimiento si el cliente tiene prisa.",
        "Está facultado para modificar la vía de administración si se lo piden."
      ],
      correctAnswer: 1,
      explanation: "El rol ético y legal del auxiliar es ser la mano derecha del farmacéutico en la educación del paciente y la seguridad de la dispensación."
    }
  ]
};