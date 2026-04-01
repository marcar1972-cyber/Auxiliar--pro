// quizData/proLevel2.js

export const proLevel2 = {
  id: 2,
  title: "Nivel 2 PRO: Recetas, Bioequivalencia y Dispensación",
  description: "Examen avanzado sobre intercambiabilidad, normativas de rotulado y regulaciones de expendio electrónico.",
  questions: [
    {
      question: "Respecto a la intercambiabilidad de medicamentos bioequivalentes (Código Sanitario y Dto. 466), señale la afirmación CORRECTA:",
      options: [
        "El químico farmacéutico puede dispensar el bioequivalente aunque el médico solo haya escrito el nombre de fantasía.",
        "El médico debe autorizar expresamente el intercambio estampando un timbre de 'intercambiable' en la receta.",
        "El químico farmacéutico dispensará el bioequivalente si el médico individualizó el producto por su nombre de fantasía y agregó la Denominación Común Internacional (DCI).",
        "Solo se puede intercambiar si el bioequivalente pertenece al mismo laboratorio que el medicamento original."
      ],
      correctAnswer: 2,
      explanation: "Según el Código Sanitario, para que proceda la intercambiabilidad a solicitud del paciente, es requisito que en la receta médica se haya incluido la Denominación Común Internacional (DCI) del principio activo, además del nombre de fantasía si el médico así lo decidió."
    },
    {
      question: "En relación con las definiciones legales del Decreto 3, identifique la alternativa INCORRECTA:",
      options: [
        "'Dispensación' es el acto de proporcionar un medicamento e informar sobre su uso, reacciones y conservación.",
        "'Dispensación' y 'Expendio' son términos legales sinónimos que la ley utiliza indistintamente.",
        "'Expendio' se refiere a la venta al detalle, al público usuario o consumidor.",
        "La receta médica es una orden suscrita por un profesional habilitado para que un medicamento sea dispensado."
      ],
      correctAnswer: 1,
      explanation: "La normativa distingue claramente ambos términos: el 'Expendio' es el acto comercial de venta, mientras que la 'Dispensación' es un acto profesional farmacéutico que incluye la entrega del producto junto con la educación y orientación sanitaria al paciente."
    },
    {
      question: "Sobre la regulación de rotulado e información de precios (Decreto 466), indique la afirmación INCORRECTA:",
      options: [
        "El rotulado de precios en los envases debe ser con un tamaño mínimo de cuerpo '10'.",
        "Se permite escribir manualmente el precio sobre etiquetas adhesivas o directamente en los envases.",
        "Si el envase es pequeño, la etiqueta del precio puede cubrir el número de registro sanitario de forma excepcional.",
        "En medicamentos de venta directa (OTC), se debe informar el precio total y el valor por unidad de medida."
      ],
      correctAnswer: 2,
      explanation: "El Decreto 466 prohíbe estrictamente que la etiqueta de precio cubra u obstaculice la visibilidad de la información sanitaria obligatoria, como el número de registro ISP, lote o fecha de vencimiento, independientemente del tamaño del producto."
    },
    {
      question: "Respecto al fraccionamiento de envases clínicos (Decreto 466, Art. 40), señale la alternativa CORRECTA:",
      options: [
        "En la dispensación de productos fraccionados, es obligatorio entregar físicamente al paciente el folleto de información (inserto).",
        "Las farmacias están exentas de procedimientos documentados si el fraccionamiento lo realiza el Farmacéutico.",
        "No es obligatorio colocar la fecha de vencimiento si el tratamiento dura menos de 7 días.",
        "Si se fraccionan unidades de dos lotes distintos, basta con anotar el lote con el vencimiento más lejano."
      ],
      correctAnswer: 0,
      explanation: "La ley exige que al realizar el fraccionamiento se entregue siempre el folleto de información al paciente (inserto). Además, en caso de mezclar lotes, debe primar la seguridad del paciente indicando siempre la fecha de vencimiento más próxima."
    },
    {
      question: "En relación al expendio de medicamentos a través de medios electrónicos, identifique la afirmación INCORRECTA:",
      options: [
        "El sitio debe contener infografías de uso racional e información de centros toxicológicos.",
        "Quien solicite medicamentos debe informar obligatoriamente sus datos de contacto y dirección.",
        "El paquete de despacho debe estar sellado y etiquetado con los datos del requirente y del local.",
        "Si el despacho lo realiza un tercero (transporte externo), la farmacia se exime de responsabilidad sanitaria."
      ],
      correctAnswer: 3,
      explanation: "La responsabilidad sanitaria por la calidad y conservación de los productos (incluyendo la cadena de frío) recae siempre en el Director Técnico de la farmacia que despacha, independientemente de si el transporte es contratado a una empresa externa."
    },
    {
      question: "De acuerdo a las exigencias de recetas médicas (Decreto 3), señale la afirmación INCORRECTA:",
      options: [
        "'Receta Retenida Simplificada' es un documento oficial distinto y menos estricto para benzodiazepinas.",
        "Las recetas magistrales se elaboran en el momento de su presentación para un paciente determinado.",
        "Las recetas de estupefacientes y psicotrópicos retenidas deben archivarse obligatoriamente.",
        "La receta cheque se extiende en formularios oficiales, ya sean gráficos o electrónicos."
      ],
      correctAnswer: 0,
      explanation: "No existe legalmente un tipo de documento llamado 'Receta Retenida Simplificada'. El término simplificado se refiere únicamente a la modalidad de registro interno en el libro de la farmacia para ciertos fármacos, pero el documento médico sigue siendo una receta retenida bajo norma general."
    },
    {
      question: "En relación a las 'muestras médicas', indique la afirmación CORRECTA:",
      options: [
        "Las muestras de psicotrópicos pueden distribuirse libremente por los visitadores médicos.",
        "Deben llevar la mención 'MUESTRA MÉDICA PROHIBIDA SU VENTA' de forma clara e indeleble.",
        "Las farmacias pueden vender muestras médicas si la caja está completa y a valor rebajado.",
        "El rotulado de una muestra médica puede omitir la fecha de vencimiento por ser de consumo inmediato."
      ],
      correctAnswer: 1,
      explanation: "Las muestras médicas tienen prohibida su venta bajo cualquier circunstancia y deben portar obligatoriamente la advertencia legal en sus envases. La distribución de psicotrópicos como muestras está altamente regulada y no es libre."
    },
    {
      question: "Respecto al isologo obligatorio para bioequivalentes, indique la afirmación INCORRECTA:",
      options: [
        "El Ministerio de Salud aprueba mediante norma técnica las listas de fármacos que requieren bioequivalencia.",
        "El isologo debe figurar al menos en cuatro de las seis caras del envase secundario.",
        "El isologo debe figurar únicamente en la cara frontal principal del envase secundario.",
        "En productos sin caja (envase primario expuesto), el isologo debe ir en la etiqueta rotulada."
      ],
      correctAnswer: 2,
      explanation: "La normativa gráfica para bioequivalentes exige que el sello amarillo (isologo) sea visible desde múltiples ángulos, por lo que debe aparecer en al menos 4 de las 6 caras de la caja, no solo en la frontal."
    },
    {
      question: "Sobre la dispensación y condiciones de venta, identifique la alternativa INCORRECTA:",
      options: [
        "La dispensación exige informar sobre interacciones y condiciones de almacenamiento.",
        "La condición de venta es determinada exclusivamente por el registro sanitario otorgado por el ISP.",
        "El Auxiliar puede autorizar la venta de un fármaco retenido sin receta si el paciente firma un compromiso.",
        "Quedan prohibidas las leyendas publicitarias o de promoción en los envases de medicamentos."
      ],
      correctAnswer: 2,
      explanation: "Bajo ninguna circunstancia legal el personal de la farmacia puede eximir al paciente de la presentación de una receta retenida. Hacerlo constituye una infracción sanitaria grave que no se subsana con firmas o compromisos personales."
    },
    {
      question: "En materia de listados de precios y publicidad (Decreto 466), señale la afirmación CORRECTA:",
      options: [
        "Las farmacias tienen prohibido publicar sus listas de precios en sus sitios web.",
        "En venta electrónica OTC, se pueden usar descuentos que incentiven el sobreconsumo por volumen.",
        "El sistema de consulta debe permitir búsquedas por principio activo, mostrando todas las opciones objetivamente.",
        "Las farmacias solo están obligadas a informar el precio por envase completo, no por dosis unitaria."
      ],
      correctAnswer: 2,
      explanation: "La Ley de Fármacos establece que el consumidor debe tener acceso a información comparativa. Por ello, los sistemas de consulta deben permitir buscar por principio activo (DCI) y mostrar todas las alternativas registradas de forma transparente."
    }
  ]
};