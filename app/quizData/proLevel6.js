// quizData/proLevel6.js

/**
 * < macz.dev />
 * ARCHIVO: Nivel 6 PRO
 * TEMA: Profesiones Auxiliares y Funciones en Farmacia (Dto. 90 y 466)
 */

export const proLevel6 = {
  id: 6,
  title: "Nivel 6 PRO: Roles y Funciones Legales",
  description: "Examen exhaustivo sobre el Reglamento de Profesiones Auxiliares, roles del Químico Farmacéutico, Prácticos y Auxiliares.",
  questions: [
    {
      question: "De acuerdo con el Reglamento de Farmacias (Decreto 466), respecto a la distinción entre 'Dispensación' y 'Expendio', señale la afirmación CORRECTA:",
      options: [
        "El auxiliar de farmacia es el responsable legal de la dispensación de medicamentos.",
        "El expendio es el acto profesional de informar y orientar al paciente, realizado por el Químico Farmacéutico.",
        "El Químico Farmacéutico es el responsable de la dispensación, mientras que los técnicos y auxiliares están encargados del expendio o entrega física del medicamento.",
        "No existe diferencia legal entre ambos términos; ambos se refieren a la venta al detalle."
      ],
      correctAnswer: 2,
      explanation: "El Decreto 466 y el Decreto 3 distinguen claramente que la Dispensación es un acto profesional del Q.F. (incluye orientación), mientras que el Expendio es la entrega física, labor en la que participan técnicos y auxiliares."
    },
    {
      question: "Sobre los requisitos para ser reconocido como 'Práctico de Farmacia' (Decreto 466), indique la alternativa INCORRECTA:",
      options: [
        "Haberse desempeñado como auxiliar de farmacia por lo menos durante cinco años cronológicos.",
        "Uno de los años de experiencia debe ser inmediatamente anterior a la solicitud de autorización.",
        "Debe contar con una certificación del Director Técnico de la farmacia donde ejerció.",
        "Basta con tener el título de Técnico en Administración para ser autorizado automáticamente como Práctico."
      ],
      correctAnswer: 3,
      explanation: "El cargo de Práctico exige 5 años de experiencia previa como auxiliar y rendir un examen de competencia. Un título administrativo no habilita para este cargo sanitario."
    },
    {
      question: "Respecto a la definición legal de 'Auxiliar Paramédico' (Decreto 90), señale la afirmación CORRECTA:",
      options: [
        "Es un profesional independiente que puede recetar medicamentos de venta directa.",
        "Es una persona habilitada para ejecutar técnicas y labores de apoyo bajo la supervisión, control y dependencia del profesional de salud correspondiente.",
        "Puede realizar las funciones propias del Director Técnico en farmacias si este se ausenta por más de 15 días.",
        "Su título le permite dirigir técnicamente una Droguería en comunas con menos de 10.000 habitantes."
      ],
      correctAnswer: 1,
      explanation: "El Decreto 90 define al auxiliar como una persona habilitada para colaborar en las tareas de salud bajo la supervisión, control y dependencia directa del profesional responsable."
    },
    {
      question: "En relación con las funciones del auxiliar de farmacia (Manual de Procedimientos), identifique la alternativa INCORRECTA:",
      options: [
        "Recibir las recetas y revisar que cumplan con la normativa vigente.",
        "Informar al paciente sobre la indicación médica para el cumplimiento del tratamiento.",
        "Elaborar la etiqueta con las indicaciones del médico bajo supervisión.",
        "Prescribir alternativas terapéuticas cuando el medicamento solicitado no esté disponible en stock."
      ],
      correctAnswer: 3,
      explanation: "Prescribir medicamentos es una facultad exclusiva de profesionales habilitados (médicos, dentistas, etc.). El auxiliar tiene estrictamente prohibido prescribir o cambiar terapias."
    },
    {
      question: "Según el Decreto 466, una de las responsabilidades exclusivas e indelegables del Director Técnico es:",
      options: [
        "Realizar el aseo de las estanterías de medicamentos controlados.",
        "Adiestrar al personal auxiliar y supervisar el correcto desempeño de las funciones que en este se deleguen.",
        "Reponer los productos de venta directa (OTC) en las góndolas de acceso al público.",
        "Cobrar las recetas en la caja registradora durante las horas de turno."
      ],
      correctAnswer: 1,
      explanation: "El adiestramiento técnico y la supervisión del personal auxiliar es una obligación legal expresa e indelegable del Director Técnico según el Art. 11 del Dto 466."
    },
    {
      question: "¿Qué antecedente laboral es obligatorio adjuntar para solicitar la Certificación de Competencias como Auxiliar de Farmacia ante la SEREMI?",
      options: [
        "Un certificado de salud compatible con el cargo emitido por un médico cirujano.",
        "Un certificado de desempeño laboral emitido por el Químico Farmacéutico que acredite al menos 1 año de desempeño efectivo.",
        "Una carta de recomendación del dueño o representante legal del establecimiento.",
        "Un registro de asistencia timbrado por la Inspección del Trabajo."
      ],
      correctAnswer: 1,
      explanation: "La plataforma de trámites SEREMI exige un certificado de desempeño laboral de al menos 1 año de experiencia efectiva, emitido y firmado por un Químico Farmacéutico."
    },
    {
      question: "Sobre el examen de competencias para Auxiliar Paramédico (Decreto 90), señale la afirmación CORRECTA:",
      options: [
        "Consta únicamente de una prueba escrita de alternativas.",
        "El examen debe ser rendido ante el Instituto de Salud Pública (ISP).",
        "El examen consta de un componente de carácter teórico y uno práctico.",
        "Quienes reprueben el examen no podrán volver a rendirlo bajo ninguna circunstancia."
      ],
      correctAnswer: 2,
      explanation: "El reglamento de profesiones auxiliares establece que la evaluación de competencias ante la autoridad sanitaria consta obligatoriamente de un componente teórico y uno práctico."
    },
    {
      question: "En un Almacén Farmacéutico, la Dirección Técnica puede ser ejercida por (Decreto 466):",
      options: [
        "Un Médico Cirujano con especialidad en Farmacología.",
        "Un Práctico de Farmacia debidamente autorizado.",
        "Un Auxiliar de Farmacia con 1 año de experiencia.",
        "El propietario del local, siempre que posea Licencia de Enseñanza Media."
      ],
      correctAnswer: 1,
      explanation: "A diferencia de las farmacias (donde solo puede ser un Q.F.), los Almacenes Farmacéuticos pueden ser dirigidos técnicamente por un Práctico de Farmacia autorizado."
    },
    {
      question: "Sobre el manejo de productos bajo control legal (estupefacientes y psicotrópicos), indique la afirmación INCORRECTA:",
      options: [
        "El Director Técnico es responsable de su adquisición, tenencia y custodia.",
        "El auxiliar de farmacia puede despachar estos productos personalmente sin supervisión si el Q.F. está en colación.",
        "El Director Técnico debe supervisar personalmente el expendio de estos productos.",
        "Estos medicamentos deben mantenerse permanentemente bajo llave."
      ],
      correctAnswer: 1,
      explanation: "El expendio de productos controlados es responsabilidad directa del Q.F., quien debe supervisar personalmente estas ventas. El auxiliar no puede despacharlos solo."
    },
    {
      question: "Respecto a la formación de los auxiliares, el Decreto 90 establece que podrán ser autorizados como Auxiliares Paramédicos quienes:",
      options: [
        "Posean solo Licencia de Enseñanza Media y 6 meses de práctica.",
        "Tengan aprobado hasta el sexto semestre de la carrera de Química y Farmacia, previa aprobación del examen de competencias.",
        "Sean titulados de cualquier carrera técnica de nivel superior, sin importar el área.",
        "Acrediten un curso de capacitación de al menos 40 horas cronológicas."
      ],
      correctAnswer: 1,
      explanation: "El Decreto 90 permite la autorización de estudiantes de Química y Farmacia que tengan aprobado hasta el sexto semestre (3er año), rindiendo y aprobando el examen de competencias."
    },
    {
      question: "El Director Técnico de una farmacia tiene la obligación legal de extender copias de las recetas cuando (Decreto 466):",
      options: [
        "El cliente lo solicite para cobrar un seguro, independientemente de la condición de venta.",
        "Se trate de medicamentos cuya condición de venta sea 'Receta Retenida'.",
        "Se trate de recetas de venta directa (OTC).",
        "El paciente pierda la receta original antes de comprar el producto."
      ],
      correctAnswer: 1,
      explanation: "El Art. 11 del Dto 466 obliga al Director Técnico a extender copias de recetas en el caso de medicamentos cuya condición de venta sea bajo receta retenida, para que el paciente guarde registro de su terapia."
    },
    {
      question: "En relación al fraccionamiento de envases clínicos, señale la afirmación CORRECTA:",
      options: [
        "El auxiliar de farmacia puede decidir qué medicamentos fraccionar basándose en la demanda del público.",
        "Es una función que debe ser efectuada o supervisada directamente por el Químico Farmacéutico.",
        "Los envases clínicos tienen prohibición absoluta de ser fraccionados en farmacias privadas.",
        "No se requiere dejar registro escrito del proceso de fraccionamiento si lo realiza el Director Técnico."
      ],
      correctAnswer: 1,
      explanation: "El fraccionamiento es una labor técnica crítica que debe ser efectuada o supervisada directamente por el Químico Farmacéutico para garantizar la seguridad del proceso."
    },
    {
      question: "Sobre el personal que se desempeña en una farmacia, identifique la alternativa INCORRECTA:",
      options: [
        "El personal auxiliar no podrá desempeñar las funciones que competen exclusivamente al Químico Farmacéutico.",
        "Los estudiantes de farmacia pueden realizar su práctica profesional en estos establecimientos.",
        "La farmacia puede funcionar solo con auxiliares si el Director Técnico deja sus instrucciones por escrito en el Libro de Inspección.",
        "El auxiliar debe participar en programas de educación sobre uso racional de medicamentos dirigidos a la comunidad."
      ],
      correctAnswer: 2,
      explanation: "La farmacia NO puede operar legalmente solo con auxiliares; requiere la presencia obligatoria del Director Técnico (o su reemplazo legal) durante todo el horario de atención."
    },
    {
      question: "Respecto al 'Libro de Inspección' de la farmacia, indique la afirmación CORRECTA:",
      options: [
        "Es un cuaderno privado donde el dueño anota las faltas disciplinarias del personal.",
        "Debe estar permanentemente a disposición de los profesionales de la SEREMI de Salud y el ISP para consignar sus observaciones.",
        "Solo puede ser abierto y leído por el Director Técnico.",
        "En él se deben registrar diariamente todas las ventas de medicamentos de venta directa."
      ],
      correctAnswer: 1,
      explanation: "El Libro de Inspección es un documento oficial, foliado y timbrado, destinado exclusivamente a que la autoridad sanitaria consigne sus visitas y observaciones."
    },
    {
      question: "De acuerdo al Manual de Procedimientos, ¿cuál es una labor técnica permitida al auxiliar bajo supervisión?",
      options: [
        "Modificar la dosis de una receta si detecta que es muy alta para un niño.",
        "Interpretar recetas médicas y colaborar en la elaboración de etiquetas de despacho.",
        "Firmar los vales de estupefacientes ante la llegada de pedidos de laboratorio.",
        "Validar técnicamente la seguridad y eficacia de un nuevo fármaco que ingresa a la farmacia."
      ],
      correctAnswer: 1,
      explanation: "El auxiliar colabora en la interpretación de recetas y la rotulación de etiquetas de despacho, pero no puede tomar decisiones terapéuticas ni validar pedidos de controlados."
    },
    {
      question: "Sobre la certificación del auxiliar en la plataforma 'SEREMI en línea', indique la afirmación INCORRECTA:",
      options: [
        "Se debe adjuntar el Certificado de Enseñanza Media.",
        "El usuario debe registrar obligatoriamente una región y comuna para el trámite.",
        "El pago del arancel de 'Derecho a Examen' se realiza después de aprobar la prueba teórica.",
        "Se debe subir una foto tipo carnet del solicitante."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. El pago del arancel de 'Derecho a Examen' se realiza al inicio del trámite, una vez que la SEREMI acepta los antecedentes cargados y antes de rendir la prueba."
    },
    {
      question: "Según el Decreto 466, el Director Técnico debe velar especialmente por la calidad de los productos en:",
      options: [
        "Los medicamentos que se encuentran en exhibición en la vitrina exterior.",
        "El despacho a domicilio, asegurando la conservación y estabilidad.",
        "Los productos de higiene y odorización personal.",
        "Los artículos de escritorio y oficina que vende la farmacia."
      ],
      correctAnswer: 1,
      explanation: "El Director Técnico es responsable de velar por que los medicamentos despachados a domicilio mantengan su calidad, estabilidad y conservación durante todo el trayecto."
    },
    {
      question: "En el examen para Práctico de Farmacia, uno de los contenidos obligatorios a evaluar es (Decreto 466):",
      options: [
        "Contabilidad avanzada y gestión de recursos humanos.",
        "Acciones farmacológicas, interacciones y contraindicaciones de los productos del petitorio de Almacenes Farmacéuticos.",
        "Procedimientos de importación directa de materias primas desde el extranjero.",
        "Diseño arquitectónico de locales farmacéuticos según la norma asísmica."
      ],
      correctAnswer: 1,
      explanation: "El examen para Práctico se enfoca en el conocimiento técnico-clínico de los medicamentos que componen el petitorio mínimo obligatorio de los establecimientos que pueden dirigir."
    },
    {
      question: "Respecto a la supervisión del personal, el Decreto 466 establece que la infracción a las funciones exclusivas del Q.F. es responsabilidad de:",
      options: [
        "Solo el auxiliar que ejecutó la acción.",
        "Solo el Director Técnico por falta de vigilancia.",
        "Tanto el personal que desempeñó la función como el Director Técnico que no la impidió.",
        "El dueño del establecimiento únicamente."
      ],
      correctAnswer: 2,
      explanation: "La normativa responsabiliza solidariamente tanto al auxiliar que realiza una función que no le compete como al Director Técnico que no supervisó correctamente para evitarlo."
    },
    {
      question: "Identifique la afirmación CORRECTA sobre la 'Receta Médica' según la normativa de profesiones auxiliares:",
      options: [
        "Es una orden que el auxiliar puede modificar si el médico cometió un error evidente de caligrafía.",
        "Es un instrumento que el auxiliar debe recibir y revisar para verificar que cumpla con los requisitos legales antes del expendio.",
        "Solo puede ser recibida físicamente por el Director Técnico, quedando prohibido que el auxiliar la toque.",
        "No es obligatoria para el expendio de productos si el auxiliar conoce personalmente al paciente."
      ],
      correctAnswer: 1,
      explanation: "Es función del auxiliar recibir la receta y realizar la primera revisión formal (datos del médico, RUN del paciente, fecha, firma) antes de proceder con el expendio."
    },
    {
      question: "Sobre las Droguerías, el Decreto 466 establece que:",
      options: [
        "Pueden ser dirigidas técnicamente por un Práctico de Farmacia si tienen más de 10 años de experiencia.",
        "Deben funcionar obligatoriamente bajo la dirección técnica de un Químico Farmacéutico.",
        "Están autorizadas para vender medicamentos directamente al público si el Q.F. supervisa la venta.",
        "El auxiliar de droguería tiene las mismas facultades que el auxiliar de farmacia comunitaria."
      ],
      correctAnswer: 1,
      explanation: "Las Droguerías son establecimientos mayoristas que requieren obligatoriamente la dirección técnica de un Q.F. y tienen prohibición absoluta de venta directa al público usuario."
    },
    {
      question: "Identifique cuál NO corresponde a una de las áreas legales de los Auxiliares Paramédicos según el Decreto 90:",
      options: [
        "Auxiliar Paramédico de Odontología.",
        "Auxiliar Paramédico de Nutrición y Dietética Deportiva.",
        "Auxiliar Paramédico de Radiología e Imagenología.",
        "Auxiliar Paramédico de Anatomía Patológica."
      ],
      correctAnswer: 1,
      explanation: "El Decreto 90 enumera 8 áreas específicas; la nutrición dietética deportiva no figura como una categoría regulada de auxiliar paramédico."
    },
    {
      question: "Sobre el 'Certificado de Desempeño Laboral' exigido por la SEREMI para los auxiliares, indique la alternativa CORRECTA:",
      options: [
        "Puede ser emitido por el dueño de la farmacia aunque no sea profesional de la salud.",
        "Debe ser emitido por el Químico Farmacéutico y acreditar un año de desempeño efectivo.",
        "Se puede reemplazar por una declaración jurada ante notario del propio interesado.",
        "Solo es válido si tiene una antigüedad menor a 30 días desde su emisión."
      ],
      correctAnswer: 1,
      explanation: "El certificado de desempeño debe ser emitido por el Químico Farmacéutico (Director Técnico o colaborador) para dar fe del conocimiento técnico adquirido por el auxiliar durante un año."
    },
    {
      question: "En relación con la educación al usuario, el Manual de Auxiliar indica que este debe:",
      options: [
        "Diagnosticar síntomas leves para recomendar el mejor antibiótico disponible.",
        "Participar en programas de educación sobre el uso racional de medicamentos dirigidos a la comunidad.",
        "Abstenerse de dar cualquier tipo de información al paciente, derivando todo al médico.",
        "Informar los precios de los productos basándose exclusivamente en el margen de ganancia de la farmacia."
      ],
      correctAnswer: 1,
      explanation: "Una de las funciones activas del auxiliar es colaborar en la educación sanitaria y la promoción del uso racional de los medicamentos."
    },
    {
      question: "Respecto a la planta física y seguridad (Decreto 466), el auxiliar debe colaborar en:",
      options: [
        "Asegurar que el almacenamiento y conservación de los productos sea el adecuado.",
        "Mantener el local permanentemente desinsectado y desratizado.",
        "Controlar que la temperatura de la sala de ventas sea mayor a 30°C.",
        "Las opciones A y B son correctas."
      ],
      correctAnswer: 3,
      explanation: "El auxiliar apoya en el almacenamiento adecuado bajo normas de conservación y en velar por las condiciones higiénicas del establecimiento (desratización/desinsectación)."
    },
    {
      question: "El Director Técnico debe 'adiestrar al personal auxiliar'. Esto significa legalmente que:",
      options: [
        "Debe pagarles cursos externos de capacitación cada 6 meses.",
        "Debe formarlos y supervisar el cumplimiento de las funciones delegadas dentro del marco legal.",
        "Es responsable de que los auxiliares aprueben el examen de la SEREMI en su primer intento.",
        "Debe realizarles exámenes médicos de salud mental una vez al año."
      ],
      correctAnswer: 1,
      explanation: "El adiestramiento consiste en la capacitación interna continua y la fiscalización del desempeño del auxiliar dentro de sus facultades legales."
    },
    {
      question: "Sobre los Almacenes Farmacéuticos, identifique la alternativa INCORRECTA:",
      options: [
        "Su horario de atención debe ser comunicado por escrito al ISP.",
        "Deben contar con un petitorio mínimo de medicamentos de existencia permanente.",
        "Pueden vender estupefacientes de Lista I mediante receta cheque.",
        "Deben tener un ejemplar del Reglamento de Farmacias para consulta."
      ],
      correctAnswer: 2,
      explanation: "Es INCORRECTA. Los Almacenes Farmacéuticos tienen prohibido por ley el expendio de estupefacientes y psicotrópicos sujetos a control."
    },
    {
      question: "La autorización sanitaria de una farmacia (Decreto 466) se otorga mediante:",
      options: [
        "Un contrato de palabra con el Seremi de Salud.",
        "Una resolución que debe estar disponible para ser presentada a cualquier persona que la solicite.",
        "Una patente comercial emitida por la Municipalidad correspondiente.",
        "Un certificado de calidad ISO 9001."
      ],
      correctAnswer: 1,
      explanation: "La autorización sanitaria es una Resolución Exenta emitida por la SEREMI de Salud y debe estar siempre disponible físicamente en el local."
    },
    {
      question: "Si un auxiliar de farmacia detecta un efecto no deseado reportado por un cliente, según el Manual de Procedimientos debe:",
      options: [
        "Recomendarle que suspenda el tratamiento de inmediato.",
        "Informar al paciente que debe acudir al establecimiento de salud más cercano y dar aviso al Director Técnico.",
        "Cambiarle el medicamento por uno que no cause ese efecto.",
        "Ignorar el comentario, ya que los efectos secundarios son normales."
      ],
      correctAnswer: 1,
      explanation: "Ante una posible reacción adversa (RAM), el auxiliar debe derivar al paciente a atención médica y reportar el caso de inmediato a su Director Técnico."
    },
    {
      question: "El cumplimiento de las normas e instrucciones de la autoridad sanitaria en la farmacia es responsabilidad de (Decreto 466):",
      options: [
        "Exclusivamente del dueño del local.",
        "Del Director Técnico, quien debe supervisar que todas las actividades se desarrollen dentro del marco legal.",
        "Solo de los fiscalizadores del ISP cuando visitan el local.",
        "Del contador de la empresa farmacéutica."
      ],
      correctAnswer: 1,
      explanation: "El Director Técnico es el responsable sanitario máximo ante la ley del correcto funcionamiento del establecimiento farmacéutico."
    }
  ]
};