const basicEval1 = {
  id: "basic-eval-1",
  title: "Nivel Básico 1",
  backRoute: "/quiz", // 👈 AQUÍ: Inyectamos la ruta de retorno al Lobby
  questions: [
    {
      question: "Según la normativa sanitaria vigente en Chile, ¿cómo se define legalmente a una farmacia?",
      options: [
        "Como un centro comercial exclusivo de expendio de insumos de salud.",
        "Como un centro de salud donde se realizan acciones de fomento, protección y recuperación de la salud, y se dispensan medicamentos.",
        "Como una bodega mayorista para la distribución de productos farmacéuticos.",
        "Como un almacén farmacéutico autorizado solo para venta de productos directos."
      ],
      correctAnswer: 1
    },
    {
      question: "Durante tu turno de farmacia, ¿a quién le corresponde ejercer la Dirección Técnica y estar presente en todo el horario de funcionamiento?",
      options: [
        "Al Auxiliar Paramédico de Farmacia más antiguo del local.",
        "Al dueño o representante legal del establecimiento.",
        "Exclusivamente al profesional Químico Farmacéutico.",
        "A cualquier profesional de la salud con título universitario."
      ],
      correctAnswer: 2
    },
    {
      question: "La Ley 20.724 (Ley de Fármacos) establece exigencias sobre el Petitorio Mínimo. ¿Cuál es su objetivo en la farmacia?",
      options: [
        "Contar de forma permanente con los medicamentos esenciales para asegurar el acceso a la población.",
        "Tener un registro de los medicamentos más caros del local.",
        "Listar únicamente los medicamentos que requieren receta cheque.",
        "Es una lista optativa que cada farmacia decide si implementar o no."
      ],
      correctAnswer: 0
    },
    {
      question: "En relación a la identificación del personal de farmacia de cara al público, la normativa exige que el Auxiliar de Farmacia deba:",
      options: [
        "Usar delantal blanco sin necesidad de identificación.",
        "Portar una credencial que indique claramente su nombre, apellidos y cargo.",
        "Exhibir su certificado de la SEREMI de Salud en su puesto de trabajo.",
        "Vestir uniforme del color que indique el laboratorio patrocinador."
      ],
      correctAnswer: 1
    },
    {
      question: "Si el Químico Farmacéutico delega en el Auxiliar la dispensación de un producto bioequivalente, ¿qué condición se debió cumplir primero?",
      options: [
        "El medicamento debe pertenecer a la Lista IV de Psicotrópicos.",
        "El paciente debe haber solicitado expresamente la alternativa genérica certificada y el médico haber incluido la DCI en la receta.",
        "El Auxiliar puede decidir el cambio si el bioequivalente es más económico.",
        "El médico debe haber prohibido expresamente el cambio de marca."
      ],
      correctAnswer: 1
    },
    {
      question: "Respecto al fraccionamiento de medicamentos (entregar la dosis exacta prescrita), ¿quién es el responsable legal de efectuarlo o supervisarlo?",
      options: [
        "El paciente en su domicilio.",
        "El Auxiliar de Farmacia de forma autónoma.",
        "El médico que emitió la receta.",
        "El Químico Farmacéutico, garantizando condiciones seguras e higiénicas."
      ],
      correctAnswer: 3
    },
    {
      question: "¿Qué medida de seguridad establece el reglamento respecto a los medicamentos de 'venta directa' que se exhiben en góndolas?",
      options: [
        "Deben estar al nivel del suelo para fácil acceso.",
        "Deben estar protegidos en vitrinas cerradas con llave obligatoriamente.",
        "Solo pueden exhibirse envases vacíos (cajas simuladas).",
        "Deben resguardarse a una distancia que impida su libre acceso a niños."
      ],
      correctAnswer: 3
    },
    {
      question: "Según el Decreto 404 (Estupefacientes) y el Decreto 405 (Psicotrópicos), ¿cuál es la condición legal de las sustancias incluidas en la 'Lista I'?",
      options: [
        "Son medicamentos de venta directa que no requieren receta médica.",
        "Son medicamentos de alto riesgo que se despachan habitualmente con Receta Cheque.",
        "Está estrictamente prohibida su comercialización en farmacias; solo se autorizan para investigación médica o científica.",
        "Son preparados magistrales que exigen Receta Médica Retenida."
      ],
      correctAnswer: 2
    },
    {
      question: "En la atención en el mesón, un paciente pide devolver un medicamento con receta que compró el día anterior. Según las normativas del ISP:",
      options: [
        "Se debe aceptar si presenta la boleta original.",
        "Está prohibida la devolución para garantizar que no se haya alterado la calidad y seguridad del fármaco.",
        "Se puede aceptar si el paciente asegura no haber abierto la caja.",
        "Solo se aceptan devoluciones si el Auxiliar aprueba la revisión."
      ],
      correctAnswer: 1
    },
    {
      question: "Según la Ley de Fármacos, ¿qué información debe estar obligatoriamente visible en el envase de los productos farmacéuticos a la venta?",
      options: [
        "El precio de venta impreso o adherido.",
        "El margen de ganancia de la farmacia.",
        "La dirección del laboratorio fabricante.",
        "El nombre del auxiliar que lo dispensó."
      ],
      correctAnswer: 0
    }
  ]
};

export default basicEval1;