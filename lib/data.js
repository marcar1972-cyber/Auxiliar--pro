/**
 * 📦 BASE DE DATOS MAESTRA - AUXILIARPRO APP
 * Regulado según MINSAL, ISP, DS 466, DS 404, DS 405 y Ley 20.724.
 * Extraído íntegramente de NotebookLM (Mayo 2026).
 */

export const quizData = [
  {
    modulo: "ProEval 1: Marco Legal y Normativo",
    preguntas: [
      {
        pregunta: "Según el triángulo normativo del sector farmacéutico en Chile, ¿cuál es la 'norma madre' que rige todas las actividades de salud en el país?",
        opciones: [
          "A) Ley de Fármacos (Ley 20.724)",
          "B) Código Sanitario (DFL 725)",
          "C) Decreto Supremo 466",
          "D) Norma Técnica 147"
        ],
        correcta: 1
      },
      {
        pregunta: "Según el Artículo 129 A del Código Sanitario, ¿quién debe dirigir técnicamente una farmacia durante todo su horario de funcionamiento?",
        opciones: [
          "A) El administrador comercial del local.",
          "B) El Auxiliar de Farmacia con más experiencia.",
          "C) Un Químico Farmacéutico.",
          "D) El dueño del establecimiento."
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué obligación principal introdujo la Ley de Fármacos (Ley 20.724) respecto a la prescripción médica?",
        opciones: [
          "A) La venta exclusiva de medicamentos genéricos.",
          "B) La obligatoriedad de usar la Denominación Común Internacional (DCI) en las recetas.",
          "C) La prohibición de nombres de fantasía.",
          "D) El despacho gratuito para adultos mayores."
        ],
        correcta: 1
      },
      {
        pregunta: "Un cliente pide ver el reglamento de farmacias para hacer una consulta. Según la normativa, ¿dónde debe estar este material?",
        opciones: [
          "A) Guardado bajo llave en la oficina del Químico Farmacéutico.",
          "B) En formato digital exclusivo para el personal.",
          "C) En un espacio de libre acceso y a disposición del público.",
          "D) En la bodega de medicamentos controlados."
        ],
        correcta: 2
      },
      {
        pregunta: "Al recibir un pedido de medicamentos de cadena de frío, notas que el camión no tiene control de temperatura. ¿Cuál es el procedimiento correcto?",
        opciones: [
          "A) No aceptar el pedido para la venta. Segregar en cuarentena, registrar la irregularidad e informar al Director Técnico.",
          "B) Aceptar el pedido e ingresarlo rápidamente al refrigerador.",
          "C) Aceptarlo, pero anotar la observación en la factura.",
          "D) Llamar al proveedor para pedir un descuento por el riesgo."
        ],
        correcta: 0
      },
      {
        pregunta: "¿Qué tipo de establecimiento tiene prohibida la preparación de fórmulas magistrales y oficinales según el Art. 57 del DTO 466?",
        opciones: [
          "A) Farmacias Privadas",
          "B) Farmacias Homeopáticas",
          "C) Almacenes Farmacéuticos",
          "D) Farmacias Asistenciales (de Hospital)"
        ],
        correcta: 2
      },
      {
        pregunta: "Si un cliente deja un reclamo oficial en el Libro de Reclamos, ¿cuál es el plazo máximo legal que tiene el Director Técnico para responder?",
        opciones: [
          "A) 24 horas",
          "B) 3 días",
          "C) 5 días hábiles",
          "D) 10 días"
        ],
        correcta: 1
      },
      {
        pregunta: "En el ámbito legal farmacéutico, ¿qué busca fomentar la información activa sobre medicamentos bioequivalentes?",
        opciones: [
          "A) Aumentar las ganancias de la industria.",
          "B) Eliminar del mercado a los laboratorios internacionales.",
          "C) El uso racional de medicamentos y disminuir el gasto de bolsillo del paciente.",
          "D) Que el auxiliar recete alternativas más económicas."
        ],
        correcta: 2
      },
      {
        pregunta: "La actividad de una farmacia en Chile se clasifica legalmente como:",
        opciones: [
          "A) Un ejercicio puramente comercial y de libre mercado.",
          "B) Un centro de acopio de productos químicos.",
          "C) Una función sanitaria crítica y un centro de salud.",
          "D) Una tienda de conveniencia con expendio médico."
        ],
        correcta: 2
      },
      {
        pregunta: "¿Cuál de los siguientes cuerpos normativos detalla la estructura física, petitorio mínimo y funcionamiento de una farmacia?",
        opciones: [
          "A) El Decreto Supremo 466",
          "B) El Decreto Supremo 594",
          "C) El Decreto Supremo 404",
          "D) El Decreto Supremo 405"
        ],
        correcta: 0
      }
    ]
  },
  {
    modulo: "ProEval 2: Almacenamiento y Condiciones Sanitarias",
    preguntas: [
      {
        pregunta: "Durante el turno, el termohigrómetro de la bodega marca un 75% de humedad relativa. ¿Cuál es el riesgo técnico inmediato?",
        opciones: [
          "A) El medicamento perderá su color original únicamente.",
          "B) No hay riesgo si la temperatura se mantiene bajo 25°C.",
          "C) El exceso de humedad puede afectar la estabilidad y velocidad de disolución de formas sólidas.",
          "D) Solo deben preocuparse por los productos de cadena de frío."
        ],
        correcta: 2
      },
      {
        pregunta: "Un laboratorio envía una caja de antibióticos por error (no solicitados). El DT indica que el producto debe ir al área de:",
        opciones: [
          "A) Sala de alimentación hasta que lo retiren.",
          "B) Bodega general debidamente marcado.",
          "C) Área de Cuarentena, para estar aislado de la venta.",
          "D) Oficina del DT bajo llave."
        ],
        correcta: 2
      },
      {
        pregunta: "Según el Art. 14 A del DTO 466, ¿a qué altura mínima deben exhibirse los medicamentos de Venta Directa en góndolas?",
        opciones: [
          "A) A la altura de la vista del adulto promedio.",
          "B) A 1 metro de altura.",
          "C) A 50 centímetros del suelo.",
          "D) En el mostrador principal solamente."
        ],
        correcta: 1
      },
      {
        pregunta: "El refrigerador de la farmacia marca 10°C porque se dejó la puerta mal cerrada. ¿Qué fármaco está en riesgo crítico de perder su potencia?",
        opciones: [
          "A) Amoxicilina en cápsulas.",
          "B) Losartán potásico.",
          "C) Insulina Humana, por ser un producto termolábil.",
          "D) Atorvastatina comprimidos."
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué sector de la farmacia requiere obligatoriamente una superficie lisa, impermeable y acceso directo a un lavamanos (Art. 14 bis)?",
        opciones: [
          "A) La sala de ventas.",
          "B) El sector de fraccionamiento.",
          "C) La oficina administrativa.",
          "D) La bodega de psicotrópicos."
        ],
        correcta: 1
      },
      {
        pregunta: "Un cliente solicita 5 comprimidos de una receta de Alprazolam (Psicotrópico). ¿Qué debe responder basándose en la normativa?",
        opciones: [
          "A) Sí, podemos fraccionarlo porque es un envase sólido.",
          "B) No, la ley prohíbe estrictamente fraccionar productos sujetos a control legal.",
          "C) Solo si el Químico Farmacéutico firma la receta ahora mismo.",
          "D) Sí, pero se cobra un recargo por el envase de entrega."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el rango de temperatura que define legalmente a la 'Cadena de Frío' en Chile?",
        opciones: [
          "A) 0°C a 10°C.",
          "B) -2°C a 8°C.",
          "C) +2°C a +8°C.",
          "D) 8°C a 15°C."
        ],
        correcta: 2
      },
      {
        pregunta: "Un inspector nota que no hay jabón ni toallas de papel en el baño del personal. Esta falta corresponde a un incumplimiento de:",
        opciones: [
          "A) La Ley de Fármacos solamente.",
          "B) El DS 594 sobre condiciones sanitarias básicas en el lugar de trabajo.",
          "C) El reglamento de recetario magistral.",
          "D) El petitorio mínimo farmacéutico."
        ],
        correcta: 1
      },
      {
        pregunta: "Al recibir un pedido, el auxiliar nota que un jarabe tiene la caja manchada con líquido pero el frasco no se ve quebrado. Usted debe:",
        opciones: [
          "A) Limpiar la caja y ponerlo a la venta.",
          "B) Cambiar la caja por otra limpia.",
          "C) Trasladarlo a Cuarentena por sospecha de falla de envase primario.",
          "D) Devolverlo al camión sin registrar nada."
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué documento debe custodiar el DT en su oficina y tener disponible 'en todo momento' para la autoridad?",
        opciones: [
          "A) El catálogo comercial del laboratorio.",
          "B) Los Registros Oficiales (Inspección, Reclamos, Control de Stock).",
          "C) Los contratos de trabajo de los auxiliares.",
          "D) El manual de marketing de la cadena."
        ],
        correcta: 1
      }
    ]
  },
  {
    modulo: "ProEval 3: Dispensación, Legislación y Ética",
    preguntas: [
      {
        pregunta: "El Químico Farmacéutico sale por 30 minutos a un trámite. Llega un paciente con una receta de Morfina (Estupefaciente). ¿Qué debe hacer el auxiliar?",
        opciones: [
          "A) Despacharla para no interrumpir el tratamiento del dolor.",
          "B) Informar al paciente que la farmacia debe cerrar temporalmente, ya que no puede funcionar sin la presencia del Químico Farmacéutico.",
          "C) Llamar al DT por teléfono para que autorice el despacho verbalmente.",
          "D) Pedirle a otro auxiliar con más experiencia que firme la receta."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el requisito de experiencia laboral que exige el Art. 28 del DTO 466 para obtener la resolución de auxiliar?",
        opciones: [
          "A) 6 meses de práctica en un hospital.",
          "B) Al menos un año de desempeño certificado por un Químico Farmacéutico.",
          "C) 5 años de desempeño como vendedor de farmacia.",
          "D) Haber aprobado un curso de 1.600 horas."
        ],
        correcta: 1
      },
      {
        pregunta: "Un paciente compra Amoxicilina y comenta que 'siempre le da diarrea con los antibióticos'. ¿Cuál es la acción técnica del auxiliar?",
        opciones: [
          "A) Decirle que es normal y que aguante los 7 días.",
          "B) Sugerirle suspender el antibiótico si le duele el estómago.",
          "C) Derivar la consulta inmediatamente al Químico Farmacéutico para la orientación profesional.",
          "D) Decirle que la marca que compró es de mala calidad."
        ],
        correcta: 2
      },
      {
        pregunta: "Según el Código Sanitario, si una receta viene por nombre de fantasía, es deber del auxiliar:",
        opciones: [
          "A) Vender solo la marca indicada para evitar problemas.",
          "B) Verificar que la receta incluya la DCI y derivar al Químico Farmacéutico si el paciente solicita el intercambio por un bioequivalente.",
          "C) Cambiar el medicamento automáticamente por el más barato.",
          "D) Cobrar un extra por entregar un medicamento distinto."
        ],
        correcta: 1
      },
      {
        pregunta: "Al reponer estanterías, encuentra una insulina cuya fecha de vencimiento fue ayer. ¿Qué acción corresponde?",
        opciones: [
          "A) Dejarla al frente para que se venda rápido (FEFO).",
          "B) Borrar la fecha con un marcador.",
          "C) Trasladarla de inmediato al área de productos no aptos (Cuarentena) e informar al DT.",
          "D) Usarla como muestra de exhibición."
        ],
        correcta: 2
      },
      {
        pregunta: "Un cliente exige que le recomiende 'algo fuerte' para una infección urinaria porque no quiere ir al médico. Su respuesta ética es:",
        opciones: [
          "A) Sugerirle un antibiótico de amplio espectro conocido.",
          "B) Explicar que la prescripción de antibióticos es facultad exclusiva del médico y que la automedicación causa resistencia bacteriana.",
          "C) Venderle un analgésico y decirle que con eso pasará.",
          "D) Decirle que use remedios caseros solamente."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué organismo tiene la facultad de cancelar la autorización sanitaria de un auxiliar por infracciones graves?",
        opciones: [
          "A) El propietario de la farmacia.",
          "B) La Secretaría Regional Ministerial de Salud (SEREMI).",
          "C) El Instituto de Salud Pública (ISP).",
          "D) El Colegio de Químicos Farmacéuticos."
        ],
        correcta: 1
      },
      {
        pregunta: "Usted recibe un pedido de psicotrópicos. ¿Quién debe firmar la guía de recepción y custodiar las llaves del armario metálico?",
        opciones: [
          "A) El guardia de seguridad.",
          "B) El auxiliar con más antigüedad.",
          "C) El Director Técnico (Químico Farmacéutico).",
          "D) El administrador del local."
        ],
        correcta: 2
      },
      {
        pregunta: "Al leer una receta, nota que la dosis es totalmente ilegible. El paciente cree que es 'una al día'. ¿Qué hace usted?",
        opciones: [
          "A) Anota '1 al día' basándose en lo que dice el paciente.",
          "B) Le pide a un compañero que adivine qué dice.",
          "C) Consulta obligatoriamente al Químico Farmacéutico para validar la receta antes de despachar.",
          "D) Le entrega el envase sin etiqueta."
        ],
        correcta: 2
      },
      {
        pregunta: "Un inspector de la SEREMI le pide su identificación y carnet de auxiliar durante una visita. Usted:",
        opciones: [
          "A) Se niega porque no es carabinero.",
          "B) Le entrega los documentos de inmediato, ya que la autorización debe estar disponible en todo momento.",
          "C) Le dice que sus papeles los tiene el dueño en la oficina.",
          "D) Le pide que vuelva cuando esté el abogado."
        ],
        correcta: 1
      }
    ]
  },
  {
    modulo: "ProEval 4: Ley de Fármacos y Bioequivalencia",
    preguntas: [
      {
        pregunta: "Una paciente solicita intercambiar su receta de Atorvastatina de marca por el bioequivalente genérico. El médico escribió 'NO INTERCAMBIAR' de su puño y letra. ¿Qué debe hacer?",
        opciones: [
          "A) Realizar el intercambio de todos modos por ley.",
          "B) Respetar la indicación médica, ya que el prescriptor puede prohibirlo por razones fundadas.",
          "C) Llamar al médico para pedir permiso.",
          "D) Venderle un medicamento de Venta Directa."
        ],
        correcta: 1
      },
      {
        pregunta: "Llega una receta que indica solo el nombre de fantasía. Según el Art. 101 del Código Sanitario, ¿cuál es el error técnico?",
        opciones: [
          "A) No tiene error.",
          "B) El profesional omitió la DCI (Denominación Común Internacional), la cual es obligatoria.",
          "C) El papel de la receta no es oficial.",
          "D) La fecha está escrita en números."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué garantiza la 'Bioequivalencia' certificada por el ISP en un medicamento genérico?",
        opciones: [
          "A) Que es más barato que el original.",
          "B) Que tiene la misma eficacia, seguridad y biodisponibilidad que el innovador.",
          "C) Que el laboratorio es extranjero.",
          "D) Que no tiene efectos secundarios."
        ],
        correcta: 1
      },
      {
        pregunta: "El inspector nota que solo se registró la temperatura de la bodega en la mañana. Según la NT 147, esto es:",
        opciones: [
          "A) Correcto, basta con una vez.",
          "B) Una infracción, ya que los registros deben realizarse al menos dos veces al día (mañana y tarde).",
          "C) Irrelevante si hay aire acondicionado.",
          "D) Responsabilidad del dueño."
        ],
        correcta: 1
      },
      {
        pregunta: "Un cliente quiere comprar un medicamento de Venta Directa pero el sello de seguridad del envase está roto. ¿Cuál es la acción correcta?",
        opciones: [
          "A) Pegarlo con cinta y venderlo.",
          "B) Trasladarlo a Cuarentena e informar al DT, ya que no se garantiza la integridad del contenido.",
          "C) Venderlo con un 50% de descuento.",
          "D) Decirle al cliente que lo abra para revisar."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el objetivo principal de la Política Nacional de Medicamentos (Resolución 515)?",
        opciones: [
          "A) Subir los precios.",
          "B) Garantizar la calidad, seguridad y eficacia de los medicamentos en todo el país.",
          "C) Eliminar las farmacias privadas.",
          "D) Regular los uniformes."
        ],
        correcta: 1
      },
      {
        pregunta: "Un cliente reclama porque el precio en la estantería no coincide con el de la caja. El auxiliar debe saber que:",
        opciones: [
          "A) El cliente siempre tiene la razón.",
          "B) Las farmacias deben garantizar transparencia de precios por envase y unidad; deben coincidir en góndola y caja.",
          "C) Solo importa el precio del sistema.",
          "D) El precio solo se informa si se solicita."
        ],
        correcta: 1
      },
      {
        pregunta: "Un paciente busca un medicamento que no hay stock. El DT explica que ese fármaco pertenece al 'Petitorio Mínimo'. Esto significa que:",
        opciones: [
          "A) Es un medicamento que casi no se vende.",
          "B) Es de existencia obligatoria y la farmacia debe tenerlo siempre disponible para el público.",
          "C) Solo se vende en hospitales.",
          "D) Es solo para niños."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué documento contiene la nómina de medicamentos indispensables basados en la realidad epidemiológica de Chile?",
        opciones: [
          "A) El catálogo de un laboratorio comercial.",
          "B) El Formulario Nacional de Medicamentos.",
          "C) El Libro de Reclamos.",
          "D) El registro de asistencia."
        ],
        correcta: 1
      },
      {
        pregunta: "Al dispensar un antibiótico fraccionado, el auxiliar entrega los comprimidos en un sobre sin información. ¿Qué norma infringe?",
        opciones: [
          "A) Ninguna.",
          "B) El Art. 40, que obliga a rotular el envase de entrega con DCI, vencimiento, lote y nombre del paciente.",
          "C) La ley de tránsito.",
          "D) El código de comercio."
        ],
        correcta: 1
      }
    ]
  },
  {
    modulo: "ProEval 5: Tecnología Farmacéutica y Formas de Dosificación",
    preguntas: [
      {
        pregunta: "Un paciente le consulta si puede disolver una cápsula de Amoxicilina en agua para dársela a su hijo. ¿Cuál es la respuesta técnicamente correcta?",
        opciones: [
          "A) Sí, siempre que se use agua tibia.",
          "B) No, las cápsulas están diseñadas para proteger el fármaco y asegurar su liberación en el tracto digestivo; al abrirla se altera su biodisponibilidad.",
          "C) Sí, pero debe tomarlo de inmediato.",
          "D) Solo si la cápsula es de color transparente."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es la función principal de los excipientes en la formulación de un medicamento?",
        opciones: [
          "A) Curar la enfermedad de forma secundaria.",
          "B) Dar forma, estabilidad, sabor y permitir que el principio activo llegue adecuadamente a la sangre.",
          "C) Reemplazar al principio activo cuando este es muy caro.",
          "D) Actuar solo como colorante para identificar el laboratorio."
        ],
        correcta: 1
      },
      {
        pregunta: "Según el Decreto 466 (Art. 8), ¿cuál de las siguientes es una facultad exclusiva de las farmacias respecto a la tecnología farmacéutica?",
        opciones: [
          "A) Exportar medicamentos a granel.",
          "B) Fabricar especialidades farmacéuticas de forma industrial.",
          "C) Preparar fórmulas magistrales y oficinales prescritas por profesionales.",
          "D) Cambiar la dosis de los medicamentos sin informar al médico."
        ],
        correcta: 2
      },
      {
        pregunta: "El concepto que define la 'forma física en la cual se presenta un medicamento para facilitar su fraccionamiento, dispensación y administración' es:",
        opciones: [
          "A) Registro Sanitario.",
          "B) Posología.",
          "C) Forma Farmacéutica.",
          "D) Materia Prima."
        ],
        correcta: 2
      },
      {
        pregunta: "Caso de Mesón: Llega un pedido de jarabes y nota que uno de ellos presenta turbidez no habitual. Usted debe:",
        opciones: [
          "A) Agitarlo fuerte hasta que se aclare.",
          "B) Trasladarlo de inmediato al área de Cuarentena e informar al Director Técnico, por sospecha de pérdida de estabilidad.",
          "C) Ponerlo a la venta con un descuento.",
          "D) Cambiarle la etiqueta por una de 'Suspensión'."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué garantiza el cumplimiento de las Buenas Prácticas de Manufactura (BPM) en un laboratorio de producción?",
        opciones: [
          "A) Que los medicamentos tengan el precio más bajo del mercado.",
          "B) La calidad uniforme y satisfactoria de los productos farmacéuticos en cada lote.",
          "C) Que el laboratorio pueda vender directamente al público.",
          "D) Que no se necesite un Químico Farmacéutico como Director Técnico."
        ],
        correcta: 1
      },
      {
        pregunta: "Un paciente le pregunta por qué su medicamento es 'Bioequivalente'. Su explicación técnica se basa en que:",
        opciones: [
          "A) Es un medicamento fabricado artesanalmente.",
          "B) Ha demostrado científicamente que tiene la misma eficacia, seguridad y biodisponibilidad que el original.",
          "C) Es un medicamento que no tiene efectos secundarios.",
          "D) Es un producto que se puede comprar sin receta médica."
        ],
        correcta: 1
      },
      {
        pregunta: "Si un médico prescribe una 'Fórmula Magistral', ¿qué característica debe tener esta preparación según la normativa?",
        opciones: [
          "A) Ser una fórmula secreta que solo el farmacéutico conoce.",
          "B) Ser elaborada extemporáneamente para un paciente determinado siguiendo la receta.",
          "C) Estar disponible en grandes cantidades en la estantería de venta directa.",
          "D) Ser importada directamente desde el extranjero."
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál de los siguientes factores ambientales es el que más comúnmente afecta la estabilidad de los medicamentos en bodega?",
        opciones: [
          "A) El ruido ambiental.",
          "B) La temperatura, la humedad y la luz.",
          "C) La altitud geográfica exclusivamente.",
          "D) El tipo de estantería metálica."
        ],
        correcta: 1
      },
      {
        pregunta: "La liberación del principio activo desde una forma sólida depende principalmente de:",
        opciones: [
          "A) El color del envase secundario.",
          "B) El proceso de desintegración y disolución en los fluidos corporales.",
          "C) La hora en que el paciente se toma la presión.",
          "D) El número de serie o lote impreso."
        ],
        correcta: 1
      }
    ]
  },
  {
    modulo: "ProEval 6: Estabilidad, Fraccionamiento y Biofarmacia",
    preguntas: [
      {
        pregunta: "(Situacional) Una madre pregunta si puede moler un comprimido con recubrimiento entérico para dárselo a su hijo en una cuchara con yogurt. ¿Cuál es la instrucción técnica correcta?",
        opciones: [
          "A) Sí, siempre que el yogurt sea natural.",
          "B) No, al romper el recubrimiento el fármaco será destruido por los ácidos estomacales o irritará la mucosa, perdiendo eficacia.",
          "C) Sí, siempre y cuando lo mezcle con agua.",
          "D) Depende del peso del niño."
        ],
        correcta: 1
      }
    ]
  }
];