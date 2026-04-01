// quizData/proLevel3.js

/**
 * < macz.dev />
 * ARCHIVO: Nivel 3 PRO
 * TEMA: Instalación, Autorizaciones y Registros de Farmacias
 */

export const proLevel3 = {
  id: 3,
  title: "Nivel 3 PRO: Instalación, Autorizaciones y Registros",
  description: "Evaluación exhaustiva sobre instalación, autorizaciones, registros y funcionamiento de farmacias y otros establecimientos.",
  questions: [
    {
      question: "De acuerdo con el Reglamento de Farmacias (Decreto 466), respecto a los plazos y vigencias de la autorización sanitaria de instalación y funcionamiento, indique la afirmación CORRECTA:",
      options: [
        "La solicitud debe ser resuelta por la SEREMI de Salud en un plazo máximo de 30 días hábiles y su vigencia es indefinida.",
        "La autorización es válida por un plazo inicial de 3 años, debiendo el propietario solicitar su renovación manual 60 días antes de su vencimiento.",
        "La solicitud debe ser resuelta en un plazo de 15 días hábiles, la autorización es válida por 3 años y se entiende renovada automática y sucesivamente por periodos iguales, a menos que la autoridad resuelva lo contrario.",
        "La SEREMI tiene un plazo de 15 días hábiles para otorgar la autorización, la cual tendrá una validez de 5 años improrrogables."
      ],
      correctAnswer: 2,
      explanation: "Según el Dto. 466 (Art. 3 y 5), la resolución demora máximo 15 días hábiles. La validez es de 3 años, pero se entiende renovada automática y sucesivamente (no requiere renovación manual ni es improrrogable)."
    },
    {
      question: "En relación con las Farmacias Itinerantes autorizadas por la normativa sanitaria, señale la alternativa INCORRECTA:",
      options: [
        "El vehículo debe contar con equipamiento que asegure el almacenamiento, control de temperatura y conservación adecuada de los medicamentos.",
        "La farmacia itinerante debe poseer señalética apropiada que permita su inequívoca identificación como establecimiento de expendio farmacéutico.",
        "Las farmacias itinerantes pueden elaborar productos farmacéuticos de carácter oficinal si cuentan con un área limpia autorizada.",
        "Requieren de una autorización de instalación y funcionamiento otorgada por la SEREMI de Salud correspondiente a su ubicación."
      ],
      correctAnswer: 2,
      explanation: "El Dto. 466 es tajante: las farmacias itinerantes, si bien deben tener condiciones de frío e identificación, no pueden elaborar recetas magistrales/oficinales ni realizar fraccionamiento, y tienen prohibición sobre controlados."
    },
    {
      question: "Sobre las obligaciones de información de precios establecidas en la Ley de Fármacos (Ley 20724 / Código Sanitario), indique la afirmación CORRECTA:",
      options: [
        "Todo producto farmacéutico que se expenda al público debe indicar obligatoriamente en su envase físico su precio de venta.",
        "Es suficiente con mantener un catálogo digital disponible al público en el local, eximiéndose a la farmacia de rotular el precio en el envase físico del medicamento.",
        "La lista de precios debe ser manejada exclusivamente por el Químico Farmacéutico, quien la entregará al paciente solo si este lo solicita formalmente.",
        "Los medicamentos de Venta Directa ubicados en estanterías de acceso al público no requieren rotulación de precio por unidad de medida, bastando el precio total de la caja."
      ],
      correctAnswer: 0,
      explanation: "El Código Sanitario modificado por la Ley 20724 (Art. 3) exige expresamente que 'Todo producto farmacéutico que se expenda al público deberá indicar en su envase su precio de venta'. Un catálogo digital es complementario, no excluyente del rotulado físico."
    },
    {
      question: "Respecto a las Droguerías y sus facultades comerciales según el Decreto 466, identifique la alternativa INCORRECTA:",
      options: [
        "Son establecimientos destinados a la importación, fraccionamiento, distribución y venta de drogas a granel, y sustancias químicas.",
        "Deben funcionar obligatoriamente bajo la dirección técnica de un profesional químico farmacéutico.",
        "Están facultadas para realizar ventas directas al público general si el paciente presenta una receta médica retenida o receta cheque debidamente visada.",
        "La distribución de sus productos farmacéuticos solo puede hacerse a farmacias, almacenes farmacéuticos, depósitos veterinarios o dentales y botiquines autorizados."
      ],
      correctAnswer: 2,
      explanation: "Las Droguerías tienen estrictamente prohibida la venta directa al público usuario (paciente final), incluso con recetas. Su rol mayorista solo permite la distribución a otras farmacias, almacenes, depósitos dentales/veterinarios y botiquines (Dto. 466, Art. 46)."
    },
    {
      question: "Según el Decreto 466 sobre el cargo de 'Práctico de Farmacia', indique la afirmación CORRECTA:",
      options: [
        "Es el estudiante de la carrera de Química y Farmacia que se encuentra realizando su práctica profesional o internado en un establecimiento asistencial.",
        "Es el auxiliar de farmacia autorizado que, habiendo ejercido como tal al menos durante 3 años, rinde un examen de competencia ante el Instituto de Salud Pública (ISP).",
        "Quienes cuenten con un título de Técnico de Farmacia de Nivel Superior, conferido por un establecimiento reconocido por el Estado, pueden desempeñarse como Práctico de Farmacia sin requerir rendir el examen especial de la SEREMI.",
        "El Práctico de Farmacia tiene las mismas facultades legales que el Director Técnico en ausencia de este último."
      ],
      correctAnswer: 2,
      explanation: "Según el Dto. 466 (Art. 66), quien tenga el título de Técnico en Farmacia de Nivel Superior (TENS Farmacia) accede a la figura de 'Práctico de Farmacia' automáticamente, sin necesidad de rendir el examen de la SEREMI exigido para el auxiliar regular con 5 años de experiencia."
    },
    {
      question: "En materia de publicidad y prevención toxicológica exigida a las farmacias (Ley 20724), señale la alternativa INCORRECTA:",
      options: [
        "Las farmacias deben instalar infografías en espacios visibles al público con advertencias sobre el uso adecuado de medicamentos de venta directa.",
        "Quedan estrictamente prohibidas las leyendas publicitarias o de promoción en el rotulado de los envases secundarios de los medicamentos.",
        "Se debe mantener en un lugar visible al público los números telefónicos de líneas gratuitas que provean información toxicológica (públicas o privadas).",
        "El texto y formato de las infografías de advertencia de uso de medicamentos pueden ser diseñados libremente por cada cadena de farmacias según sus políticas de marketing."
      ],
      correctAnswer: 3,
      explanation: "El texto y formato de las infografías de información toxicológica y advertencias de Venta Directa (Ley 20724) no son libres; deben ser aprobados estrictamente por resolución del Ministro de Salud."
    },
    {
      question: "En relación a la comercialización de medicamentos mediante medios electrónicos (venta online), de acuerdo con el Decreto 466, indique la afirmación CORRECTA:",
      options: [
        "Si el medicamento debe demostrar bioequivalencia, el sitio web tiene la obligación de ofrecer la alternativa de comprar sus bioequivalentes antes de que finalice la compra del producto.",
        "Las farmacias online están eximidas de cumplir el reglamento del Sistema Nacional de Control de Productos Farmacéuticos (Decreto 3), ya que se rigen por la Ley de Comercio Electrónico.",
        "Está permitida la venta electrónica de medicamentos estupefacientes (Receta Cheque) siempre que la farmacia cuente con un sistema de verificación facial del paciente.",
        "El sitio web debe priorizar visualmente en la pantalla los medicamentos de marca comercial por sobre sus alternativas genéricas bioequivalentes."
      ],
      correctAnswer: 0,
      explanation: "El Dto. 466 (Art. 87 F) obliga a las plataformas de expendio electrónico a ofrecer obligatoriamente las opciones bioequivalentes certificadas antes del cierre ('checkout') del carrito de compras."
    },
    {
      question: "De acuerdo con el Reglamento de Farmacias (Decreto 466), ¿qué condición es INCORRECTA respecto a los Depósitos de Vacunas e Inmunoglobulinas?",
      options: [
        "Deben ser dirigidos técnicamente por un químico farmacéutico o por un(a) enfermero(a).",
        "El profesional a cargo será el responsable directo de las actividades que en ellos se realicen.",
        "La dirección técnica del establecimiento por parte del profesional debe realizarse durante el horario indispensable y compatible con la complejidad del depósito.",
        "Están autorizados para fraccionar y vender vacunas de forma directa al público general sin orden médica, siempre que se garantice la cadena de frío."
      ],
      correctAnswer: 3,
      explanation: "Los depósitos de vacunas no están facultados legalmente para vender directamente al público sin una prescripción y evaluación médica de la necesidad de inmunización, siendo su rol el acopio, preservación y distribución intrahospitalaria o clínica (Dto 466, Art 80 bis)."
    },
    {
      question: "Sobre la realización de exámenes en una Farmacia Comunitaria (Decreto 466, Art. 9), indique la afirmación CORRECTA:",
      options: [
        "Las farmacias tienen prohibición absoluta y permanente de realizar cualquier tipo de examen clínico, químico o bioquímico en sus dependencias.",
        "Las farmacias pueden realizar análisis clínicos, químicos o bioquímicos determinados mediante resolución de la Subsecretaría de Salud, bajo la responsabilidad de su Director Técnico.",
        "El Auxiliar de Farmacia puede tomar muestras de sangre para exámenes de laboratorio si cuenta con un curso de punción venosa certificado por la Cruz Roja.",
        "Para practicar exámenes de laboratorio no contemplados por la Subsecretaría, la farmacia no requiere autorización adicional si el Químico Farmacéutico asume la responsabilidad."
      ],
      correctAnswer: 1,
      explanation: "Aunque es poco conocido, el Dto. 466 (Art. 9) autoriza a las farmacias a realizar análisis clínicos, químicos o bioquímicos, pero solo aquellos que determine expresamente la Subsecretaría de Salud por resolución, y bajo responsabilidad del Químico Farmacéutico."
    },
    {
      question: "En relación al cierre de Botiquines autorizados (Decreto 466), señale la afirmación CORRECTA:",
      options: [
        "Si el botiquín deja definitivamente de funcionar, su propietario debe dar aviso a la SEREMI dentro de los 30 días siguientes para cancelar la autorización y liquidar sus existencias.",
        "El propietario puede rematar públicamente sus existencias de estupefacientes sin dar aviso previo a la autoridad sanitaria.",
        "El aviso de cierre definitivo debe entregarse al Instituto de Salud Pública (ISP) con 15 días de anticipación.",
        "Si el botiquín cierra, el recinto pasa automáticamente a ser considerado un Almacén Farmacéutico de uso público."
      ],
      correctAnswer: 0,
      explanation: "El cierre de un botiquín exige notificar a la SEREMI en un plazo máximo de 30 días para cancelar la resolución y estipular el destino final (liquidación) de las existencias (Dto 466, Art 77)."
    },
    {
      question: "Respecto a la exigencia del fraccionamiento de envases clínicos en farmacias, de acuerdo con las disposiciones transitorias del Decreto 466, indique la alternativa INCORRECTA:",
      options: [
        "Las farmacias deberán contar con el servicio de fraccionamiento, ya sea realizado por ellas mismas o mediante un servicio prestado por un tercero.",
        "Si el fraccionamiento es realizado por un tercero, este tercero debe ser autorizado previamente por la SEREMI de Salud.",
        "Las farmacias que ya se encontraban autorizadas en conformidad a este reglamento requieren obligatoriamente tramitar una nueva y segunda autorización sanitaria específica para ejecutar el fraccionamiento.",
        "El servicio prestado por un tercero obliga al cumplimiento de todas las normas de fraccionamiento aplicables al establecimiento original."
      ],
      correctAnswer: 2,
      explanation: "El Artículo 3º Transitorio del Dto. 466 señala explícitamente que las farmacias ya autorizadas no requerirán una nueva autorización sanitaria para ejecutar el fraccionamiento de medicamentos."
    },
    {
      question: "En el contexto de un Laboratorio Farmacéutico de Producción, si se comprueban fallas a la calidad de sus productos mediante un sumario (Decreto 3), indique la afirmación CORRECTA:",
      options: [
        "Si falla un solo lote, el laboratorio pierde su autorización de funcionamiento indefinidamente.",
        "Si se comprueban fallas en tres o más lotes de distintos productos farmacéuticos de una misma línea, el Instituto (ISP) modificará la autorización excluyendo esa línea de producción o suspendiendo la importación/distribución.",
        "El Instituto de Salud Pública solo aplicará una multa a beneficio fiscal, pero no puede suspender líneas de producción autorizadas.",
        "El laboratorio tendrá un plazo de 60 días hábiles para seguir distribuyendo los lotes defectuosos bajo la condición de 'uso compasivo'."
      ],
      correctAnswer: 1,
      explanation: "Ante el fallo de tres o más lotes de distintos productos de una misma línea de producción (Dto. 3, Art. 194), el ISP ejecuta esta drástica medida de exclusión de línea o suspensión total de distribución de esa área."
    },
    {
      question: "Sobre la 'Autorización de instalación, ampliación, modificación o traslado' de un establecimiento del área de salud (Código Sanitario, Libro Sexto), señale la alternativa INCORRECTA:",
      options: [
        "Requerirán de la autorización previa de la Secretaría Regional Ministerial de Salud respectiva de la región en que se encuentren situados.",
        "También requieren autorización sanitaria los establecimientos ambulatorios donde se realicen procedimientos que requieran infraestructura especial y sedación o anestesia local.",
        "Los establecimientos en que se ejerzan prácticas médicas alternativas o complementarias reguladas por decreto están exentos de requerir autorización sanitaria de la SEREMI.",
        "El otorgamiento de la autorización requiere el cumplimiento previo de los requisitos técnicos determinados por el reglamento."
      ],
      correctAnswer: 2,
      explanation: "El Libro Sexto del Código Sanitario (Art. 123) exige claramente que los establecimientos donde se ejerzan prácticas médicas alternativas o complementarias sí requerirán autorización sanitaria de la SEREMI pertinente."
    },
    {
      question: "Según la normativa sanitaria (Decreto 3), respecto al aseguramiento de la calidad y convenios a terceros, señale la afirmación CORRECTA:",
      options: [
        "Los titulares de un registro sanitario tienen prohibido por ley comprar o externalizar servicios de control de calidad o acondicionamiento a otros laboratorios farmacéuticos.",
        "Un laboratorio farmacéutico que externaliza el análisis a un tercero queda eximido legalmente de entregarle la información de las especificaciones del registro sanitario.",
        "El convenio de control de calidad externalizado debe establecer claramente las actividades encomendadas, considerando los requerimientos de las Buenas Prácticas de Laboratorio (BPL).",
        "Si el laboratorio cuenta con una acreditación 'ISO 9001' extranjera, no necesita cumplir con las Buenas Prácticas de Manufactura exigidas en Chile."
      ],
      correctAnswer: 2,
      explanation: "El Dto. 3 (Art. 161 y 163) sí permite tercerizar (comprar servicios) de control de calidad o manufactura, pero exige un convenio notarial estricto que detalle el cumplimiento íntegro de las BPL/BPM."
    },
    {
      question: "En relación a la obtención de la autorización sanitaria de un Laboratorio Farmacéutico (Decreto 3), identifique la afirmación INCORRECTA:",
      options: [
        "La autorización de funcionamiento tendrá una vigencia de tres años contados desde la fecha de su otorgamiento, pudiendo ser renovada automáticamente por periodos sucesivos.",
        "La instalación del laboratorio farmacéutico debe hacerse obligatoriamente en un local independiente.",
        "Toda persona natural o jurídica que adquiera un laboratorio farmacéutico debe comunicarlo al ISP dentro de un plazo de 30 días, adjuntando la nómina de profesionales a cargo.",
        "La solicitud de instalación de un laboratorio farmacéutico será resuelta por el Instituto de Salud Pública (ISP) en un plazo perentorio de 15 días hábiles contados desde su presentación completa."
      ],
      correctAnswer: 3,
      explanation: "A diferencia de una farmacia comunitaria donde la SEREMI tiene 15 días para la instalación, para un Laboratorio de Producción, la solicitud de instalación la resuelve el ISP en un plazo de 30 días hábiles tras recibir la documentación completa (Dto. 3, Art. 114)."
    }
  ]
};