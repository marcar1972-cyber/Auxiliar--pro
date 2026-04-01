// quizData/proLevel5.js

/**
 * < macz.dev />
 * ARCHIVO: Nivel 5 PRO
 * TEMA: Posología Normativa y Cálculos Sanitarios
 */

export const proLevel5 = {
  id: 5,
  title: "Nivel 5 PRO: Posología y Cálculos",
  description: "Evaluación avanzada de cálculos de dosis, dispensación exacta, normativas de fraccionamiento y reglas posológicas del SEREMI.",
  questions: [
    {
      question: "Respecto a la condición de venta de la Codeína asociada a otros ingredientes (Decreto 404), indique la afirmación CORRECTA:",
      options: [
        "Si la dosis es superior a 10 mg e inferior a 60 mg por unidad de administración, la venta es bajo receta médica simple.",
        "Si la dosis es exactamente de 10 mg por unidad de administración, la venta es bajo receta médica simple.",
        "Si la dosis es igual o superior a 60 mg por unidad de administración, la venta es bajo receta médica retenida.",
        "Cualquier producto con codeína, independiente de su dosis, se vende con receta cheque."
      ],
      correctAnswer: 1,
      explanation: "La normativa establece que hasta 10 mg de codeína asociada es Receta Simple; entre 10 mg y < 60 mg es Retenida, y >= 60 mg es Receta Cheque."
    },
    {
      question: "Para calcular la dosis diaria de un medicamento basado en el peso corporal (mg/kg/día), señale la alternativa CORRECTA sobre el procedimiento técnico:",
      options: [
        "Se debe dividir el peso del paciente por la dosis recomendada.",
        "Se debe sumar el peso del paciente a la dosis estándar de adulto.",
        "Se debe multiplicar la dosis recomendada en mg/kg por el peso del paciente.",
        "El peso no influye en el cálculo de dosis si el paciente es mayor de 12 años."
      ],
      correctAnswer: 2,
      explanation: "El cálculo estándar de dosificación se basa en una proporcionalidad directa: se multiplica la dosis recomendada por el peso del paciente."
    },
    {
      question: "Un médico prescribe un jarabe polivitamínico: 'Tomar 5 ml al día por 2 meses (60 días)'. El frasco comercial es de 100 ml. Indique la afirmación CORRECTA respecto al despacho:",
      options: [
        "El paciente requiere 300 ml en total, por lo que se deben dispensar exactamente 3 frascos.",
        "El paciente requiere 150 ml en total, por lo que con 2 frascos es suficiente.",
        "Al ser un tratamiento de 2 meses, la farmacia está obligada a vender un solo frasco de 500 ml aunque no sea la presentación oficial.",
        "Se debe abrir el segundo frasco y extraer 50 ml para vender la cantidad exacta de 150 ml."
      ],
      correctAnswer: 0,
      explanation: "5 ml x 1 vez/día x 60 días = 300 ml. Como cada frasco trae 100 ml, se requieren 3 frascos exactos."
    },
    {
      question: "Sobre la equivalencia de medidas en la farmacia, indique la afirmación INCORRECTA:",
      options: [
        "1 gramo (g) equivale exactamente a 1.000 miligramos (mg).",
        "5 miligramos (mg) equivalen a 0,005 gramos (g).",
        "Para convertir gramos a miligramos se debe multiplicar el valor por 1.000.",
        "100 miligramos (mg) equivalen a 1 gramo (g)."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA porque 100 mg equivalen a 0,1 gramos, no a 1 gramo. 1.000 mg equivalen a 1 g."
    },
    {
      question: "En la preparación de fórmulas magistrales de anorexígenos (Decreto 405), señale la alternativa que indica un límite de dosis CORRECTO:",
      options: [
        "La Fentermina puede recetarse hasta 20 mg por unidad posológica.",
        "El Mazindol puede recetarse hasta 1 mg por unidad posológica y un máximo de 3 unidades en 24 horas.",
        "La Sibutramina permite hasta 3 unidades de 15 mg en 24 horas.",
        "La Anfepramona permite hasta 75 mg por unidad posológica."
      ],
      correctAnswer: 1,
      explanation: "Según la lista de psicotrópicos, el Mazindol tiene este límite estricto para preparaciones magistrales."
    },
    {
      question: "Respecto a las restricciones en preparados magistrales de controlados (Decreto 405), indique la afirmación CORRECTA:",
      options: [
        "Se pueden asociar anorexígenos con diuréticos en la misma cápsula si el médico lo justifica.",
        "Está permitido incluir hormona tiroidea en fórmulas magistrales para bajar de peso.",
        "Las anfetaminas y metanfetaminas no podrán prescribirse como anorexígenos en formulaciones magistrales.",
        "Cada unidad posológica puede contener hasta tres principios activos psicotrópicos distintos."
      ],
      correctAnswer: 2,
      explanation: "El Decreto 405 prohíbe taxativamente el uso de anfetaminas o metanfetaminas en fórmulas para bajar de peso."
    },
    {
      question: "Un paciente requiere Insulina NPH: 'Aplicar 20 UI en la mañana y 10 UI en la noche por 30 días'. El lápiz (pen) trae 3 ml con una concentración de 100 UI/ml. Indique la afirmación CORRECTA:",
      options: [
        "El paciente requiere 900 UI al mes y cada lápiz aporta 300 UI, por lo que se deben dispensar 3 lápices.",
        "El paciente requiere 30 UI al mes, por lo que 1 lápiz sobra.",
        "Se deben dispensar 9 lápices para cubrir las dosis de mañana y noche por separado.",
        "La dosis diaria es de 30 UI, por lo que en 30 días necesita 1.200 UI."
      ],
      correctAnswer: 0,
      explanation: "20 + 10 = 30 UI diarias x 30 días = 900 UI al mes. Cada lápiz de 3 ml al 100 UI/ml trae 300 UI. 900 / 300 = 3 lápices."
    },
    {
      question: "En relación con el fraccionamiento de comprimidos, si un médico indica '1/2 comprimido en la mañana y 1 comprimido en la noche por 90 días', indique la afirmación CORRECTA:",
      options: [
        "La dosis diaria es de 1,5 comprimidos, requiriendo un total de 135 comprimidos para el tratamiento completo.",
        "La farmacia debe entregar 45 comprimidos, asumiendo que el '1/2' es solo una sugerencia.",
        "Si la caja trae 20 unidades, se deben dispensar exactamente 6,75 cajas.",
        "Se deben dispensar 7 cajas completas para asegurar la indemnidad del producto y el cumplimiento del tratamiento."
      ],
      correctAnswer: 3,
      explanation: "1,5 comprimidos x 90 días = 135 comprimidos. 135 / 20 por caja = 6,75 cajas. Se aproxima al entero superior (7 cajas) para asegurar el tratamiento y no abrir el blíster primario si no hay fraccionamiento autorizado."
    },
    {
      question: "Sobre los límites de contenido en envases de estupefacientes (Decreto 404), indique la alternativa INCORRECTA:",
      options: [
        "Los envases de venta al público no podrán contener más de 12 unidades posológicas.",
        "Los productos de estupefacientes no deberán ser fraccionados en su expendio.",
        "Los envases clínicos para establecimientos asistenciales pueden contener más de 12 unidades posológicas.",
        "Todo envase de estupefaciente debe llevar una estrella verde de cinco puntas."
      ],
      correctAnswer: 3,
      explanation: "Es INCORRECTA. Los estupefacientes llevan estrella roja. La verde es para psicotrópicos."
    },
    {
      question: "Respecto a los envases de psicotrópicos (Decreto 405), señale la afirmación CORRECTA:",
      options: [
        "No podrán tener una cantidad superior a 30 unidades posológicas, salvo envases clínicos.",
        "Deben llevar una estrella roja en la sexta parte de la cara principal.",
        "El límite máximo de unidades para venta directa al público es de 50 comprimidos.",
        "La estrella verde debe cubrir el 50% de la cara principal del envase."
      ],
      correctAnswer: 0,
      explanation: "La ley limita los envases de psicotrópicos a 30 unidades para el público, exceptuando los envases clínicos para hospitales."
    },
    {
      question: "Un médico prescribe 'Ácido Valproico Gotas: 23 gotas cada 12 horas por 3 meses (90 días)'. Si 20 gotas equivalen a 1 ml y el frasco trae 25 ml, indique la afirmación CORRECTA:",
      options: [
        "El paciente requiere 4.140 gotas en total, lo que equivale a 8,28 frascos, debiendo dispensarse 9 frascos.",
        "El paciente necesita 2 frascos, ya que las gotas no se cuentan de forma tan estricta.",
        "Cada frasco contiene exactamente 1.000 gotas.",
        "La dosis diaria es de 23 gotas, sumando 2.070 gotas en los 3 meses."
      ],
      correctAnswer: 0,
      explanation: "23 gotas x 2 veces/día x 90 días = 4.140 gotas. Cada frasco de 25 ml trae 500 gotas (25 x 20). 4.140 / 500 = 8,28. Se dispensan 9 frascos."
    },
    {
      question: "En la evaluación del uso de antimicrobianos (Res. 2170), el indicador estándar de 'Densidad de Uso' se mide mediante:",
      options: [
        "Miligramos totales vendidos por mes en la farmacia comunitaria.",
        "Dosis Diarias Definidas (DDD) por cada 100 días-cama-ocupada.",
        "Cantidad de recetas retenidas dividida por el número de médicos.",
        "Porcentaje de pacientes que terminan su tratamiento de 7 días."
      ],
      correctAnswer: 1,
      explanation: "La Resolución 2170 define la Densidad de Uso mediante las DDD por cada 100 días-cama-ocupada."
    },
    {
      question: "Sobre el cumplimiento de la pauta posológica, indique la afirmación INCORRECTA de acuerdo con el Manual de Auxiliar:",
      options: [
        "La posología indica la cantidad y frecuencia de administración de un medicamento.",
        "La duración del tratamiento es un factor secundario que no influye en la cantidad de envases a dispensar.",
        "Es importante asegurar que el paciente reciba el total del tratamiento indicado por el médico.",
        "El auxiliar debe saber interpretar las indicaciones para evitar dispensaciones incompletas."
      ],
      correctAnswer: 1,
      explanation: "Es INCORRECTA. La duración es fundamental para calcular el número total de envases y asegurar el tratamiento completo."
    },
    {
      question: "Si un paciente debe tomar Metformina 850 mg: '1 comprimido con el desayuno y otro con la cena', ¿cuántos comprimidos tomará en total en una semana?",
      options: [
        "7 comprimidos.",
        "14 comprimidos.",
        "10 comprimidos.",
        "21 comprimidos."
      ],
      correctAnswer: 1,
      explanation: "2 comprimidos diarios x 7 días = 14 comprimidos."
    },
    {
      question: "Un colirio antibiótico indica: 'Aplicar 1 gota en cada ojo cada 8 horas por 7 días'. Indique la afirmación CORRECTA sobre el total de gotas:",
      options: [
        "Usará 21 gotas en total (3 gotas al día por 7 días).",
        "Usará 42 gotas en total (2 gotas por dosis, 3 veces al día, por 7 días).",
        "Usará 14 gotas en total (2 gotas diarias por 7 días).",
        "El cálculo de gotas no es necesario si el frasco es de 5 ml."
      ],
      correctAnswer: 1,
      explanation: "1 gota en cada ojo (2 gotas) x 3 veces/día (6 gotas) x 7 días = 42 gotas en total."
    },
    {
      question: "Respecto a las fórmulas magistrales psicotrópicas de la Lista IV (Benzodiazepinas), indique la condición de venta CORRECTA:",
      options: [
        "Receta Médica Simple.",
        "Receta Médica Retenida.",
        "Receta Cheque.",
        "Venta Directa."
      ],
      correctAnswer: 1,
      explanation: "Toda receta magistral que contenga psicotrópicos sujetos a control de Lista IV se vende bajo Receta Retenida."
    },
    {
      question: "Identifique la alternativa CORRECTA sobre la dosificación de la Anfepramona en recetario magistral:",
      options: [
        "Máximo 75 mg por unidad posológica.",
        "Máximo 10 mg por unidad y hasta 1 unidad al día.",
        "Máximo 25 mg por unidad y hasta 3 unidades al día.",
        "Está prohibida su preparación magistral desde el año 2010."
      ],
      correctAnswer: 0,
      explanation: "La Anfepramona (Dietilpropión) tiene un límite de 75 mg por unidad posológica en preparación magistral."
    },
    {
      question: "Sobre la rotulación de precios en medicamentos de Venta Directa (OTC) en estanterías, indique la obligación CORRECTA de la farmacia:",
      options: [
        "Solo se debe informar el precio total de la caja.",
        "Se debe informar el precio total y el valor por unidad de medida (ej. precio por comprimido).",
        "El precio debe ir escrito solo en una lista impresa en el mostrador.",
        "No hay obligación de informar precios de productos OTC hasta que el cliente llegue a la caja."
      ],
      correctAnswer: 1,
      explanation: "La Ley de Fármacos exige informar el precio total y el valor por unidad de medida (comprimido, ml, etc.) en productos de acceso directo."
    },
    {
      question: "Un médico prescribe 150 mg de un fármaco cada 12 horas. La farmacia solo tiene comprimidos de 300 mg. Indique la acción CORRECTA:",
      options: [
        "Entregar los de 300 mg e indicar al paciente que tome uno al día.",
        "El paciente debe tomar medio comprimido de 300 mg cada 12 horas para cumplir la dosis de 150 mg.",
        "Rechazar la receta por no existir la dosis exacta de fábrica.",
        "Entregar comprimidos de 50 mg para que tome tres juntos cada 12 horas."
      ],
      correctAnswer: 1,
      explanation: "Ante la falta de la dosis exacta, se recurre al fraccionamiento de la unidad posológica (medio comprimido) para cumplir la pauta, siempre que el comprimido sea ranurado y permita el corte."
    },
    {
      question: "En relación con el manejo de productos devueltos (Manual de Auxiliar), señale la afirmación INCORRECTA:",
      options: [
        "Los productos devueltos deben ser puestos en cuarentena en un lugar claramente designado.",
        "El Director Técnico debe aprobar que un producto devuelto regrese al inventario de venta tras una reevaluación.",
        "Los medicamentos que requieren cadena de frío pueden devolverse libremente si el cliente no abrió la caja.",
        "Se deben mantener registros de todos los productos retirados o devueltos."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. No se pueden realizar devoluciones de productos de cadena de frío (refrigerados), salvo daño comprobable de origen o error de despacho en el mesón."
    },
    {
      question: "Para el cálculo de la fecha de vencimiento de un producto fraccionado, indique la norma CORRECTA:",
      options: [
        "Se le asigna automáticamente una vigencia de 1 año desde el día del fraccionamiento.",
        "Debe respetar el período de eficacia autorizado en el respectivo registro sanitario.",
        "No requiere fecha de vencimiento por ser una unidad suelta entregada en bolsa.",
        "Se utiliza siempre la fecha de vencimiento de la caja más antigua disponible en la farmacia."
      ],
      correctAnswer: 1,
      explanation: "El período de eficacia es un lapso autorizado por el ISP en el registro sanitario para mantener la estabilidad del producto, el cual debe respetarse y consignarse en el envase de fraccionamiento."
    },
    {
      question: "Sobre el Petitorio Mínimo Farmacéutico, indique la afirmación CORRECTA:",
      options: [
        "Las farmacias pueden elegir discrecionalmente qué medicamentos del petitorio tener.",
        "Es la nómina de medicamentos que los establecimientos están obligados a mantener en existencia permanente y disponible para el público.",
        "Solo se aplica a las farmacias que venden estupefacientes.",
        "El petitorio solo incluye productos de marca comercial."
      ],
      correctAnswer: 1,
      explanation: "El Petitorio Mínimo es la existencia obligatoria y permanente de medicamentos esenciales para garantizar el acceso continuo de la población a los tratamientos básicos."
    },
    {
      question: "Identifique la afirmación INCORRECTA sobre la Receta Médica:",
      options: [
        "Es un instrumento privado, gráfico o electrónico.",
        "Es una orden suscrita por un profesional habilitado para que una cantidad de medicamentos sea dispensada y administrada.",
        "Es un instrumento público mediante el cual se prescribe un tratamiento.",
        "Debe incluir la Denominación Común Internacional (D.C.I.) del fármaco."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. La receta médica es legalmente un instrumento privado, no público."
    },
    {
      question: "Si un establecimiento farmacéutico online ofrece un producto bioequivalente, ¿cuándo debe hacerlo según la ley?",
      options: [
        "Después de que el cliente haya realizado el pago.",
        "Mediante un correo electrónico publicitario enviado 24 horas después.",
        "Antes de que finalice la compra del producto originalmente solicitado.",
        "Solo si el cliente marca expresamente la casilla de 'buscar ofertas'."
      ],
      correctAnswer: 2,
      explanation: "El ofrecimiento de la alternativa bioequivalente en sitios web de farmacias debe ocurrir obligatoriamente antes de que finalice la compra (en el proceso de checkout)."
    },
    {
      question: "Respecto a la unidad de venta autorizada, indique la definición CORRECTA de acuerdo al Decreto 3:",
      options: [
        "Es cualquier cantidad fraccionada que el auxiliar decida vender al cliente.",
        "Es la presentación autorizada de venta para ser dispensada y expendida.",
        "Es siempre el blíster individual de 10 unidades.",
        "Corresponde al precio por cada miligramo de principio activo contenido en el envase secundario."
      ],
      correctAnswer: 1,
      explanation: "Se define como la presentación autorizada de venta (caja, frasco, tubo, etc.) para ser dispensada y expendida, la cual fue validada por el ISP en su registro sanitario."
    }
  ]
};