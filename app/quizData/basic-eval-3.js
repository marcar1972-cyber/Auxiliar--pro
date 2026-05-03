const basicEval3 = {
  id: 3,
  title: "Nivel Inicial 3: Bioequivalencia",
  description: "Conceptos sobre Ley de Fármacos e intercambiabilidad.",
  questions: [
    {
      question: "¿Qué garantiza el sello de Bioequivalencia (franja amarilla) en un medicamento?",
      options: [
        "A) Que el producto es la versión más económica del mercado.",
        "B) Que ha demostrado mediante estudios tener la misma eficacia y seguridad que el producto innovador o referente.",
        "C) Que se trata de un medicamento de venta directa (OTC).",
        "D) Que fue fabricado exclusivamente en Chile."
      ],
      correctAnswer: 1,
      explanation: "La bioequivalencia certifica, mediante estudios clínicos o in vitro, que el medicamento genérico actúa en el organismo con la misma eficacia y seguridad que el original."
    },
    {
      question: "Según la Ley de Fármacos (Ley 20.724), ¿qué información es obligatoria que el médico incluya en la receta?",
      options: [
        "A) La Denominación Común Internacional (DCI) o nombre genérico del principio activo.",
        "B) El precio máximo de venta.",
        "C) La marca de laboratorio sugerida por la farmacia.",
        "D) El nombre del Químico Farmacéutico que la despachará."
      ],
      correctAnswer: 0,
      explanation: "La ley exige que toda receta incluya obligatoriamente el principio activo (DCI) para permitir el intercambio y asegurar el derecho a elegir del paciente."
    },
    {
      question: "En el interior de una farmacia, ¿dónde deben exhibirse los medicamentos de Venta Directa (sin receta)?",
      options: [
        "A) Estrictamente en el recetario magistral.",
        "B) En estanterías, repisas o góndolas de acceso directo al público, según estipula la Ley de Fármacos.",
        "C) Detrás del mesón bajo llave.",
        "D) En el refrigerador de la farmacia."
      ],
      correctAnswer: 1,
      explanation: "La ley establece que los medicamentos que no requieren receta médica deben estar a disposición directa del público en góndolas, facilitando su acceso visual e información."
    },
    {
      question: "¿Qué establece la Ley 20.724 respecto a la publicación de los precios de los medicamentos?",
      options: [
        "A) Es opcional para las farmacias de cadena.",
        "B) Solo deben informarse verbalmente si el cliente pregunta.",
        "C) Solo el ISP debe tener la lista de precios.",
        "D) Todo producto debe indicar su precio de venta en el envase, y la farmacia debe tener una lista a disposición directa del público."
      ],
      correctAnswer: 3,
      explanation: "La ley obliga a las farmacias a informar el precio de manera clara, tanto en el envase como a través de listas (físicas o electrónicas) de acceso directo al público."
    },
    {
      question: "De acuerdo al DS 466, si un paciente compra por internet un medicamento que debe demostrar bioequivalencia, la farmacia digital debe:",
      options: [
        "A) Ofrecer la alternativa de comprar cualquiera de sus equivalentes bioequivalentes antes de que finalice la compra.",
        "B) Bloquear la venta si no sube la receta física.",
        "C) Ocultar el producto genérico para promover la marca.",
        "D) Cobrar un recargo por el envío del bioequivalente."
      ],
      correctAnswer: 0,
      explanation: "El Art 87 F del DS 466 obliga a los sitios electrónicos a ofrecer explícitamente las alternativas bioequivalentes antes del checkout."
    },
    {
      question: "¿A qué profesional le corresponde efectuar o supervisar el fraccionamiento de envases clínicos en una farmacia comunitaria?",
      options: [
        "A) Al Médico Cirujano.",
        "B) Al Técnico en Párvulos.",
        "C) Al Químico Farmacéutico (Director Técnico).",
        "D) Al Administrador del local."
      ],
      correctAnswer: 2,
      explanation: "El Código Sanitario modificado por la Ley 20.724 otorga la función de fraccionamiento y su supervisión al Químico Farmacéutico."
    },
    {
      question: "¿Qué es el Formulario Nacional de Medicamentos en Chile?",
      options: [
        "A) La nómina de medicamentos esenciales identificados por DCI, dosis y forma farmacéutica.",
        "B) Un recetario para elaborar fórmulas magistrales.",
        "C) Un registro de pacientes con enfermedades crónicas.",
        "D) El listado de laboratorios autorizados."
      ],
      correctAnswer: 0,
      explanation: "Es el documento oficial que contiene la nómina de productos farmacéuticos indispensables (arsenal farmacoterapéutico) según la realidad epidemiológica (DS 264)."
    },
    {
      question: "¿Cuál es una diferencia clave de funcionamiento entre una Farmacia y un Almacén Farmacéutico?",
      options: [
        "A) El Almacén Farmacéutico no puede vender medicamentos veterinarios.",
        "B) El Almacén Farmacéutico solo vende medicamentos de venta directa y un petitorio limitado, y NO puede confeccionar fórmulas magistrales.",
        "C) La Farmacia no puede vender cosméticos.",
        "D) El Almacén Farmacéutico requiere Receta Cheque para todos sus productos."
      ],
      correctAnswer: 1,
      explanation: "A diferencia de la farmacia, el almacén farmacéutico tiene un petitorio restringido (venta directa y algunos con receta simple) y no elabora recetario magistral u oficinal."
    },
    {
      question: "Según el Código Sanitario (DFL 725), si la autoridad sanitaria detecta medicamentos falsificados o adulterados en un local, está facultada para:",
      options: [
        "A) Rebajar su precio de venta a la mitad.",
        "B) Donarlos a un hospital público.",
        "C) Devolverlos al proveedor con una carta de amonestación.",
        "D) Su inmediato decomiso, independiente del lugar donde se encuentren."
      ],
      correctAnswer: 3,
      explanation: "El Código Sanitario faculta el decomiso inmediato de productos adulterados o falsificados para proteger la salud pública."
    },
    {
      question: "En una atención presencial, si un paciente solicita un medicamento por su nombre de marca y éste tiene exigencia de bioequivalencia, el establecimiento:",
      options: [
        "A) Debe cobrarle una multa por no pedir el DCI.",
        "B) Tiene la obligación de informar y ofrecer las alternativas bioequivalentes que disponga.",
        "C) Debe negarse a vender la marca y solo entregar el genérico.",
        "D) Debe solicitar autorización al ISP para el cambio."
      ],
      correctAnswer: 1,
      explanation: "Es una obligación establecida por la Ley de Fármacos poner a disposición y comunicar al paciente la existencia de alternativas bioequivalentes."
    }
  ]
};

export default basicEval3;