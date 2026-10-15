// ============================================================================
// ARCHIVO: app/quizData/pro-eval-global-01.js
// DESCRIPCIÓN: Examen Global SEREMI II (40 preguntas inéditas, 60 min, 80% aprobación)
// ============================================================================

export const proEvalGlobal01 = {
  id: "pro-eval-global-01",
  title: "EXAMEN GLOBAL SEREMI II: Certificación AuxiliarPro",
  description: "Simulador Oficial de 40 preguntas inéditas estilo SEREMI. Incluye casuística de mesón, trampas legales, cálculos posológicos y preguntas de selección CORRECTA o INCORRECTA. Lee atentamente cada enunciado.",
  timeLimit: 60, // 60 minutos
  passingScore: 80, // 80% de aprobación (32 correctas de 40)
  questions: [
    // ------------------------------------------------------------------------
    // 1. LEGISLACIÓN Y OPERACIÓN DE FARMACIA (Decreto 466 / DFL 725)
    // ------------------------------------------------------------------------
    {
      question: "1. Durante una inspección de la SEREMI, el fiscalizador nota que no hay jabón ni toallas de papel en el baño del personal de la farmacia. Respecto al marco legal aplicable, señale la afirmación CORRECTA:",
      options: [
        "A) Constituye un incumplimiento del Decreto Supremo 404 sobre estupefacientes.",
        "B) Corresponde a una falta exclusiva al Petitorio Mínimo Farmacéutico.",
        "C) Constituye una infracción al Decreto Supremo 594 sobre condiciones sanitarias y ambientales básicas en los lugares de trabajo.",
        "D) Es un incumplimiento de las Buenas Prácticas de Manufactura industrial."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 14 del DTO 466 y Título II del DS 594. Los servicios higiénicos deben contar con elementos de aseo e higiene para el personal."
    },
    {
      question: "2. Un cliente solicita ingresar a la estación de fraccionamiento de la farmacia para observar cómo se cuentan sus comprimidos. De acuerdo con el Artículo 14 bis del Decreto Supremo 466, señale la afirmación CORRECTA:",
      options: [
        "A) Está prohibido el acceso de público general para evitar contaminación cruzada y garantizar la asepsia.",
        "B) Se le debe permitir el ingreso siempre que utilice guantes y mascarilla.",
        "C) Se permite el acceso únicamente si el Químico Farmacéutico firma una autorización escrita.",
        "D) Puede ingresar a observar solo si el local no cuenta con recetario magistral."
      ],
      correctAnswer: 0, // A
      explanation: "Art. 14 bis del DTO 466. El área de fraccionamiento es de acceso restringido al público para resguardar la higiene y asepsia."
    },
    {
      question: "3. En relación con la exhibición de productos en las góndolas o estanterías de la sala de ventas según el Artículo 14 A del Decreto Supremo 466, indique la alternativa CORRECTA:",
      options: [
        "A) Los medicamentos de Venta Directa pueden ubicarse a 50 centímetros del suelo.",
        "B) Exige que los medicamentos estén a la altura media de la vista de un adulto (1,60 metros).",
        "C) Prohíbe la exhibición de Venta Directa fuera del mostrador principal del cajero.",
        "D) Los medicamentos de Venta Directa deben ubicarse a una altura no menor a 1 metro desde el suelo."
      ],
      correctAnswer: 3, // D
      explanation: "Art. 14 A del DTO 466. Los medicamentos de venta directa en repisas/góndolas deben estar colocados a una altura no menor a 1 metro."
    },
    {
      question: "4. Al recibir un pedido de jarabes, el auxiliar nota que una caja de cartón secundaria está manchada con líquido, aunque el frasco de vidrio se ve entero. De acuerdo con las normas de control de calidad, señale la afirmación CORRECTA sobre el procedimiento:",
      options: [
        "A) Se debe limpiar la caja con alcohol y colocar el producto de inmediato en el estante de venta.",
        "B) Se debe trasladar de inmediato al Área de Cuarentena por sospecha de falla en el envase primario.",
        "C) Se debe cambiar el frasco a una caja limpia pertenecientes a otro lote de producto.",
        "D) Se debe vender de inmediato aplicando un descuento por empaque dañado."
      ],
      correctAnswer: 1, // B
      explanation: "Manual de almacenamiento y DTO 466. Ante cualquier sospecha de falla física o ruptura, el producto se aísla en Cuarentena."
    },
    {
      question: "5. En relación con la documentación oficial exigida por el Decreto Supremo 466, señale la afirmación CORRECTA respecto a las obligaciones en la oficina del Director Técnico:",
      options: [
        "A) Debe custodiar el manual de marketing y ventas de la empresa.",
        "B) Debe archivar las copias de los contratos de trabajo de todo el personal.",
        "C) Debe mantener y tener disponibles en todo momento los Registros Oficiales (Libro de Inspección, Reclamos y Libros de Control).",
        "D) Debe mantener únicamente las facturas comerciales de compras de los últimos 5 años."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 14 y 19 del DTO 466. Los registros oficiales deben estar custodiados en la oficina del DT para libre acceso de la fiscalización."
    },
    {
      question: "6. Durante una fiscalización, un inspector de la SEREMI solicita la identificación del auxiliar de turno. Según la reglamentación sanitaria vigente, seleccione la afirmación CORRECTA:",
      options: [
        "A) El auxiliar debe exhibir de inmediato su carnet o certificado de competencias autorizado.",
        "B) El auxiliar puede negarse a identificarse si el Director Técnico no está presente en el local.",
        "C) La documentación solo puede ser mostrada por el representante legal desde la casa matriz.",
        "D) Se requiere la presencia previa de un abogado para proceder a la identificación."
      ],
      correctAnswer: 0, // A
      explanation: "Art. 28 del DTO 466. El carnet o certificado de autorización del auxiliar debe estar disponible de forma inmediata durante su desempeño."
    },
    {
      question: "7. Respecto al funcionamiento de un 'Almacén Farmacéutico' conforme al Artículo 57 del Decreto Supremo 466, señale la afirmación CORRECTA:",
      options: [
        "A) Tiene permitido la elaboración de fórmulas magistrales en zonas rurales.",
        "B) Tiene prohibición expresa de preparar o elaborar fórmulas magistrales u oficinales.",
        "C) No puede ser dirigido por un Práctico de Farmacia autorizado.",
        "D) Tiene prohibida la comercialización de productos de Venta Directa."
      ],
      correctAnswer: 1, // B
      explanation: "Art. 57 del DTO 466. Los Almacenes Farmacéuticos tienen prohibición expresa de elaborar preparaciones magistrales u oficinales."
    },

    // ------------------------------------------------------------------------
    // 2. CONTROLADOS Y RECETAS (Decretos 404 y 405)
    // ------------------------------------------------------------------------
    {
      question: "8. Un cliente se presenta en la farmacia con una receta de Diazepam emitida hace exactamente 35 días. Según lo dispuesto en el Decreto Supremo 405, señale la afirmación CORRECTA:",
      options: [
        "A) Es legal despachar el producto porque la vigencia de las recetas de psicotrópicos es de 60 días.",
        "B) Se procede a despachar el medicamento si el cliente firma una declaración jurada.",
        "C) La ley permite despachar únicamente la mitad del tratamiento indicado en la receta.",
        "D) Se debe rechazar el despacho debido a que la vigencia legal de la receta es de estrictamente 30 días corridos desde su emisión."
      ],
      correctAnswer: 3, // D
      explanation: "Art. 25 del DTO 405 y Art. 26 del DTO 404. Las recetas de productos sujetos a control legal tienen una vigencia estricta de 30 días desde su emisión."
    },
    {
      question: "9. Un paciente solicita fraccionar 15 comprimidos de una caja de Alprazolam (Psicotrópico Lista IV). Basándose en la legislación sanitaria chilena, señale la alternativa CORRECTA:",
      options: [
        "A) El fraccionamiento es legal siempre que el Químico Farmacéutico firme el reverso de la receta.",
        "B) Está estrictamente prohibido por ley el fraccionamiento de productos sujetos a control legal.",
        "C) El procedimiento es válido solo si el pago se realiza en efectivo.",
        "D) El fraccionamiento está permitido únicamente cuando el producto proviene de un envase clínico."
      ],
      correctAnswer: 1, // B
      explanation: "Art. 40 del DTO 466. Existe una prohibición absoluta de fraccionar productos controlados bajo los Decretos 404 y 405."
    },
    {
      question: "10. Al revisar una Receta Retenida de Clonazepam, el auxiliar observa que la cantidad prescrita está escrita en números ('30'), pero se omitió su escritura en letras. Indique la afirmación CORRECTA respecto al procedimiento:",
      options: [
        "A) La receta es totalmente válida para el despacho si la letra del médico es legible.",
        "B) El auxiliar está facultado para escribir con lápiz la palabra 'treinta' al lado del número.",
        "C) Se debe rechazar el despacho o solicitar la aclaración formal, ya que la ley exige las cantidades expresadas en letras y números sin espacios.",
        "D) Se debe retener la receta y entregar al paciente solo la mitad de la dosis prescrita."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 25 del DTO 405. Las recetas de controlados deben indicar las dosis y cantidades en letras y números para evitar adulteraciones."
    },
    {
      question: "11. En relación con la clasificación de sustancias psicotrópicas dispuesta en el Decreto Supremo 405, señale la afirmación CORRECTA respecto a las benzodiazepinas como Alprazolam, Clonazepam y Lorazepam:",
      options: [
        "A) Están clasificadas como sustancias de Lista I.",
        "B) Están clasificadas como sustancias de Lista II.",
        "C) Están clasificadas como sustancias de Lista III.",
        "D) Están clasificadas como sustancias de Lista IV."
      ],
      correctAnswer: 3, // D
      explanation: "Decreto Supremo 405. Las benzodiazepinas de uso masivo están clasificadas bajo la Lista IV de psicotrópicos."
    },
    {
      question: "12. Durante el horario de colación del Director Técnico, se presenta un inspector para fiscalizar el armario de psicotrópicos. Al no estar disponible la llave, señale la conducta CORRECTA del auxiliar conforme al Decreto 466:",
      options: [
        "A) Forzar el candado de seguridad para facilitar la inspección del fiscalizador.",
        "B) Explicar que el auxiliar no custodia ni maneja la llave de controlados en ausencia del Químico Farmacéutico.",
        "C) Retirar productos similares de la bodega general para mostrarlos como muestra.",
        "D) Atender formalmente la fiscalización y firmar el acta de inspección respectiva."
      ],
      correctAnswer: 1, // B
      explanation: "Art. 26 y 14 del DTO 466. La custodia y tenencia de llaves de controlados es de responsabilidad exclusiva del Químico Farmacéutico."
    },
    {
      question: "13. Respecto a los registros obligatorios en los Libros de Control de Estupefacientes o Psicotrópicos (Decretos 404 y 405), señale la afirmación CORRECTA sobre omitir el RUT del adquirente:",
      options: [
        "A) Constituye una falta que rompe la trazabilidad obligatoria exigida por la reglamentación sanitaria.",
        "B) Es una omisión opcional que no genera observaciones en la fiscalización.",
        "C) Es un procedimiento válido si el paciente tiene domicilio en la misma comuna de la farmacia.",
        "D) Corresponde a una infracción de responsabilidad exclusiva del comprador."
      ],
      correctAnswer: 0, // A
      explanation: "Art. 18 de Decretos 404 y 405. El registro del RUT del adquirente es obligatorio para garantizar la trazabilidad de la sustancia."
    },
    {
      question: "14. Un médico prescribe una fórmula magistral que contiene un principio activo clasificado en la Lista III de psicotrópicos. De acuerdo con el Decreto Supremo 405, señale la opción CORRECTA respecto a la receta requerida:",
      options: [
        "A) Se puede despachar presentando una Receta Médica Simple.",
        "B) Requiere únicamente una Receta Médica Retenida común.",
        "C) Exige obligatoriamente la presentación de una Receta Cheque Oficial.",
        "D) Se despacha mediante un vale de pedido interno del establecimiento."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 30 del DTO 405. Las preparaciones magistrales con sustancias de las Listas II y III de psicotrópicos requieren Receta Cheque."
    },

    // ------------------------------------------------------------------------
    // 3. LEY DE FÁRMACOS Y BIOEQUIVALENCIA (Ley 20.724)
    // ------------------------------------------------------------------------
    {
      question: "15. Un paciente presenta una receta de un antihipertensivo comercial donde el médico escribió de su puño y letra la leyenda 'NO INTERCAMBIAR'. Conforme al Artículo 101 del Código Sanitario, seleccione la afirmación CORRECTA:",
      options: [
        "A) El auxiliar debe ignorar la nota y vender el producto bioequivalente de menor precio.",
        "B) Se debe retener y anular la receta por contener prohibiciones expresas.",
        "C) Se debe respetar la indicación del prescriptor y despachar el producto de marca señalado.",
        "D) Corresponde aplicar un cobro de multa al cliente para realizar el cambio."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 101 del Código Sanitario y Ley 20.724. El intercambio por bioequivalente procede salvo prohibición expresa del prescriptor."
    },
    {
      question: "16. En relación con la prescripción médica según la Ley de Fármacos (Ley 20.724), señale la afirmación CORRECTA respecto a omitir la Denominación Común Internacional (DCI) e indicar solo la marca de fantasía:",
      options: [
        "A) Incumple el Artículo 101 del Código Sanitario, el cual exige incluir la DCI para permitir el derecho al intercambio.",
        "B) Constituye una falta tipificada como delito tributario.",
        "C) Invalida de inmediato la receta, la cual debe ser incautada por el auxiliar.",
        "D) Obliga a la farmacia a entregar el medicamento en forma gratuita."
      ],
      correctAnswer: 0, // A
      explanation: "Art. 101 del Código Sanitario. Es obligación incluir la DCI para resguardar el derecho de elección del paciente."
    },
    {
      question: "17. Un producto exhibe en su envase la franja amarilla con el sello de Bioequivalencia (letra 'B'). De acuerdo con la normativa del Instituto de Salud Pública (ISP), señale la alternativa CORRECTA:",
      options: [
        "A) Certifica que el producto ha sido importado desde el extranjero.",
        "B) Indica que el fármaco es de venta libre y no requiere receta médica.",
        "C) Garantiza que el medicamento posee la misma biodisponibilidad, eficacia y seguridad que el producto innovador.",
        "D) Acredita que el producto tiene una fecha de vencimiento superior a 5 años."
      ],
      correctAnswer: 2, // C
      explanation: "Decreto Supremo 3 y Ley 20.724. El sello BE (franja amarilla) certifica la intercambiabilidad terapéutica aprobada por el ISP."
    },
    {
      question: "18. Durante la verificación de precios se detecta que un producto tiene un valor informado en el estante y otro más alto al pasar por la caja. Según el Decreto Supremo 466, señale la afirmación CORRECTA:",
      options: [
        "A) El cobro es legal si el valor registrado en el sistema de caja es el correcto.",
        "B) Constituye una infracción a la obligación de transparencia y veracidad de precios informados al público.",
        "C) La diferencia se considera falta solo si el consumidor realiza una denuncia en la SEREMI.",
        "D) La responsabilidad de la diferencia recae exclusivamente en el laboratorio distribuidor."
      ],
      correctAnswer: 1, // B
      explanation: "Art. 45 A del DTO 466. La farmacia debe garantizar la veracidad y visibilidad de los precios informados al consumidor."
    },

    // ------------------------------------------------------------------------
    // 4. CADENA DE FRÍO Y ALMACENAMIENTO (Norma Técnica 208 y NT 147)
    // ------------------------------------------------------------------------
    {
      question: "19. El termohigrómetro del área de almacenamiento registra 28 °C de temperatura y 75% de humedad relativa. Seleccione la afirmación CORRECTA sobre el riesgo técnico para las formas farmacéuticas sólidas conforme a la Norma Técnica 147:",
      options: [
        "A) Provoca únicamente la pérdida de color del empaque secundario.",
        "B) Produce un aumento irrestricto de la potencia del principio activo.",
        "C) Provoca la transformación del principio activo en una sustancia psicotrópica.",
        "D) Acelera la degradación química y altera la estabilidad y velocidad de disolución del fármaco."
      ],
      correctAnswer: 3, // D
      explanation: "Norma Técnica 147. El exceso de temperatura y humedad acelera la degradación química e hidrólisis de las formas sólidas."
    },
    {
      question: "20. En relación con las condiciones de almacenamiento descritas en la Norma Técnica 208, indique la afirmación CORRECTA sobre el rango de temperatura de la Cadena de Frío:",
      options: [
        "A) Comprende el rango estricto entre 2 °C y 8 °C.",
        "B) Comprende el rango estricto entre 0 °C y 5 °C.",
        "C) Comprende el rango estricto entre 8 °C y 15 °C.",
        "D) Comprende el rango estricto entre -2 °C y 2 °C."
      ],
      correctAnswer: 0, // A
      explanation: "Norma Técnica 208. El rango regulatorio de almacenamiento en refrigeración para productos termolábiles es de 2 °C a 8 °C."
    },
    {
      question: "21. Ocurre un corte general del suministro eléctrico en el establecimiento. De acuerdo con los protocolos de contingencia de la Norma Técnica 208 para productos termolábiles, seleccione la afirmación CORRECTA:",
      options: [
        "A) Se deben abrir las puertas del refrigerador inmediatamente para ventilar el equipo.",
        "B) Se debe mantener el refrigerador herméticamente cerrado para conservar la inercia térmica.",
        "C) Se deben retirar los biológicos y colocarlos en contenedores con agua a temperatura ambiente.",
        "D) Se debe trasladar todo el stock de refrigeración a la estantería de Venta Directa."
      ],
      correctAnswer: 1, // B
      explanation: "Norma Técnica 208. Mantener el equipo cerrado conserva la inercia térmica interna durante una contingencia eléctrica."
    },
    {
      question: "22. Un paciente acude a retirar Insulina NPH y no dispone de termo de transporte. Señale la recomendación de educación sanitaria CORRECTA según la Norma Técnica 208:",
      options: [
        "A) Se le debe indicar que puede transportar la insulina en el bolsillo del abrigo sin riesgo.",
        "B) Se le debe aconsejar congelar la insulina inmediatamente al llegar a su domicilio.",
        "C) Se le debe indicar que el producto debe transportarse en un contenedor térmico con refrigerante, evitando el contacto directo para no congelarlo.",
        "D) Se debe informar que la cadena de frío solo es necesaria una vez abierto el frasco."
      ],
      correctAnswer: 2, // C
      explanation: "Norma Técnica 208. El gel refrigerante no debe tocar directamente el producto para evitar su congelación accidental."
    },
    {
      question: "23. En relación con el almacenamiento de productos biológicos proteicos (como las insulinas), señale la afirmación CORRECTA sobre el efecto de la congelación accidental a -5 °C:",
      options: [
        "A) Produce la desnaturalización irreversible de la proteína, con la pérdida total de su actividad biológica.",
        "B) Aumenta el período de conservación del medicamento por un tiempo de 2 años.",
        "C) Transforma el medicamento en una solución estéril de mayor concentración.",
        "D) No altera la eficacia del producto si este se agita enérgicamente al descongelar."
      ],
      correctAnswer: 0, // A
      explanation: "Norma Técnica 208. La congelación rompe la estructura proteica (desnaturalización), provocando la pérdida total de eficacia."
    },
    {
      question: "24. De acuerdo con la Norma Técnica 208, indique la opción CORRECTA referente a la frecuencia mínima obligatoria para el registro de temperaturas del refrigerador:",
      options: [
        "A) Debe realizarse una vez a la semana cada día lunes.",
        "B) Debe realizarse al menos dos veces al día (mañana y tarde), cubriendo los 7 días de la semana.",
        "C) Debe realizarse únicamente los días en que se reciben pedidos de droguerías.",
        "D) Debe realizarse solo al reiniciar la atención tras un feriado prolongado."
      ],
      correctAnswer: 1, // B
      explanation: "Norma Técnica 208. El registro de temperaturas es obligatorio realizarlo al menos dos veces al día (AM/PM) de lunes a domingo."
    },

    // ------------------------------------------------------------------------
    // 5. TECNOLOGÍA FARMACÉUTICA Y VÍAS DE ADMINISTRACIÓN
    // ------------------------------------------------------------------------
    {
      question: "25. Un paciente consulta si puede triturar un comprimido con recubrimiento entérico para facilitarle la toma a un adulto mayor. Indique la respuesta técnica CORRECTA:",
      options: [
        "A) Se puede triturar siempre que se mezcle con alimentos no helados.",
        "B) Se puede triturar siempre que se duplique la dosis prescrita.",
        "C) No se debe triturar, ya que romper la cubierta expone al principio activo al ácido gástrico o causa irritación de la mucosa estomacal.",
        "D) Se permite la trituración solo si la dosis de la receta está escrita en números."
      ],
      correctAnswer: 2, // C
      explanation: "Tecnología Farmacéutica. La cubierta entérica protege al principio activo del ácido gástrico o evita la irritación estomacal."
    },
    {
      question: "26. Una crema dermatológica expuesta al calor dentro de un vehículo presenta una capa de agua separada del contenido graso. Señale la afirmación CORRECTA respecto al estado del producto:",
      options: [
        "A) Corresponde a una condición normal del producto que se resuelve agitándolo vigorosamente.",
        "B) Ocurrió una separación de fases (ruptura de emulsión) por calor, perdiendo su estabilidad y la homogeneidad de la dosis.",
        "C) El producto sufrió un proceso de congelación interna de sus componentes.",
        "D) La alteración transforma la crema dermatológica en un gel oftálmico estéril."
      ],
      correctAnswer: 1, // B
      explanation: "Tecnología Farmacéutica. El calor altera la estabilidad física de las emulsiones (cremas), causando la separación de fases."
    },
    {
      question: "27. Un usuario indica que una suspensión antibiótica perdió el efecto terapéutico en las últimas dosis del tratamiento. Al indagar, se verifica que no agitaba el frasco antes de usarlo. Señale la explicación técnica CORRECTA:",
      options: [
        "A) Al no agitar la suspensión, el paciente administró solo el vehículo al inicio y una concentración inadecuada del fármaco al final.",
        "B) El principio activo del antibiótico se evaporó a través de la tapa del frasco.",
        "C) La falta de agitación provocó la transformación de la solución en un comprimido recubierto.",
        "D) El volumen total de líquido aumentó por efecto de la gravedad."
      ],
      correctAnswer: 0, // A
      explanation: "Tecnología Farmacéutica. Las suspensiones son heterogéneas; sin agitación previa, el principio activo decanta y la dosificación falla."
    },
    {
      question: "28. En relación con el uso de colirios oftálmicos antibióticos una vez abiertos, seleccione la afirmación CORRECTA sobre su período de validez y conservación:",
      options: [
        "A) Mantienen su utilidad hasta la fecha de vencimiento impresa en la caja exterior.",
        "B) Se deben conservar en congelación para extender su uso por un año.",
        "C) Se pueden reesterilizar hirviendo el frasco semanalmente.",
        "D) Deben desecharse tras 28 a 30 días de su apertura para evitar el riesgo de infecciones por pérdida de esterilidad."
      ],
      correctAnswer: 3, // D
      explanation: "Tecnología Farmacéutica. Los colirios pierden su esterilidad y preservación microbiológica tras 28-30 días de su apertura."
    },
    {
      question: "29. Respecto a los aspectos biofarmacéuticos de la vía de administración intravenosa (IV) directa, señale la alternativa CORRECTA:",
      options: [
        "A) Corresponde a un método de administración indoloro para el paciente.",
        "B) Ofrece una biodisponibilidad del 100% de forma inmediata al no requerir etapa de absorción.",
        "C) Exime del cumplimiento de condiciones de esterilidad en su preparación.",
        "D) Representa la forma farmacéutica de menor costo de fabricación."
      ],
      correctAnswer: 1, // B
      explanation: "Farmacocinética. La vía intravenosa ingresa el principio activo directamente a la circulación sistémica (100% biodisponibilidad)."
    },
    {
      question: "30. Al dispensar un inhalador presurizado (MDI) que contiene un corticoide, indique la instrucción de autocuidado CORRECTA para prevenir la candidiasis orofaríngea:",
      options: [
        "A) Administrar un vaso de jugo cítrico inmediatamente después de la dosis.",
        "B) Realizar enjuagues bucales con agua (gárgaras) y escupir posterior a cada aplicación.",
        "C) Aplicar la dosis del aerosol debajo de la lengua.",
        "D) Suspender el tratamiento en caso de presentar tos leve."
      ],
      correctAnswer: 1, // B
      explanation: "Educación Sanitaria. El enjuague bucal posterior al uso del corticoide remueve los residuos depositados en la orofaringe."
    },
    {
      question: "31. En la administración de un inhalador broncodilatador, señale la afirmación CORRECTA respecto a la recomendación de esperar entre 1 y 2 minutos entre el primer y el segundo disparo ('puf'):",
      options: [
        "A) Es el tiempo requerido para que se recargue la presión de la válvula del aerosol.",
        "B) Evita la congelación del gas propelente en la zona de la garganta.",
        "C) Permite que la primera dosis dilate la vía aérea, facilitando que el segundo disparo alcance zonas más profundas del árbol bronquial.",
        "D) Corresponde a un estándar de cortesía durante la atención en el mesón."
      ],
      correctAnswer: 2, // C
      explanation: "Vías de Administración. El intervalo permite una dilatación inicial que optimiza la llegada del segundo disparo a zonas más profundas."
    },

    // ------------------------------------------------------------------------
    // 6. CÁLCULO POSOLÓGICO Y FRACCIONAMIENTO (Módulo 4.2)
    // ------------------------------------------------------------------------
    {
      question: "32. Una receta médica indica: 'Paracetamol 500 mg, tomar 1 comprimido cada 8 horas por 7 días'. Señale la alternativa CORRECTA respecto al número total de comprimidos requeridos para el tratamiento:",
      options: [
        "A) Requiere un total de 21 comprimidos.",
        "B) Requiere un total de 14 comprimidos.",
        "C) Requiere un total de 28 comprimidos.",
        "D) Requiere un total de 30 comprimidos."
      ],
      correctAnswer: 0, // A
      explanation: "Cálculo: 1 comp. x 3 veces al día (cada 8h) = 3 comprimidos/día. 3 x 7 días = 21 comprimidos totales."
    },
    {
      question: "33. Un paciente pediátrico de 10 kg requiere Amoxicilina a una dosis de 50 mg/kg/día, dividida en 2 tomas diarias (cada 12 horas). Seleccione la opción CORRECTA sobre los miligramos que debe recibir en CADA DOSIS:",
      options: [
        "A) Debe recibir 100 mg por dosis.",
        "B) Debe recibir 500 mg por dosis.",
        "C) Debe recibir 1000 mg por dosis.",
        "D) Debe recibir 250 mg por dosis."
      ],
      correctAnswer: 3, // D
      explanation: "Cálculo: 10 kg x 50 mg/kg/día = 500 mg diarios. Dividido en 2 tomas = 250 mg por cada dosis."
    },
    {
      question: "34. Una prescripción médica establece: 'Tomar medio comprimido en la mañana y 1 comprimido en la noche por 30 días'. Indique la cantidad CORRECTA de comprimidos totales a entregar por la farmacia:",
      options: [
        "A) Se deben entregar 30 comprimidos.",
        "B) Se deben entregar 45 comprimidos.",
        "C) Se deben entregar 60 comprimidos.",
        "D) Se deben entregar 15 comprimidos."
      ],
      correctAnswer: 1, // B
      explanation: "Cálculo: (0,5 + 1) = 1,5 comprimidos/día. 1,5 x 30 días = 45 comprimidos totales."
    },
    {
      question: "35. Se prescribe un tratamiento con jarabe indicando '5 ml cada 8 horas por 10 días'. Si la presentación comercial contiene 100 ml por frasco, seleccione la afirmación CORRECTA sobre la dispensación:",
      options: [
        "A) Se debe dispensar 1 frasco para cubrir el tratamiento completo.",
        "B) Se deben dispensar 3 frascos completos.",
        "C) Se deben dispensar 2 frascos para cubrir los 150 ml totales requeridos por el tratamiento.",
        "D) Se deben dispensar 4 frascos completos."
      ],
      correctAnswer: 2, // C
      explanation: "Cálculo: 5 ml x 3 veces/día x 10 días = 150 ml totales. Al contener 100 ml por frasco (150/100 = 1,5), se dispensan 2 frascos para cubrir el tratamiento."
    },
    {
      question: "36. De acuerdo con lo establecido en el Artículo 19 A del Decreto Supremo 466, señale la afirmación CORRECTA respecto a los datos obligatorios que deben rotularse en el envase de entrega al fraccionar un medicamento:",
      options: [
        "A) Exige únicamente registrar el precio unitario del producto y la firma del comprador.",
        "B) Exige registrar la DCI del fármaco, número de lote, fecha de vencimiento y nombre del paciente.",
        "C) Exige únicamente indicar el nombre comercial del laboratorio y su dirección de fábrica.",
        "D) Exige consignar solo el número de boleta comercial."
      ],
      correctAnswer: 1, // B
      explanation: "Art. 19 A del DTO 466. El envase de fraccionamiento exige DCI, lote, fecha de vencimiento y nombre del paciente."
    },
    {
      question: "37. Un fiscalizador observa que en la farmacia se está fraccionando una suspensión oral que requiere conservación en refrigeración (2 °C a 8 °C). Conforme al Decreto Supremo 466, señale la afirmación CORRECTA:",
      options: [
        "A) La práctica es legal si el auxiliar utiliza elementos de protección personal.",
        "B) La práctica es válida siempre que el Químico Farmacéutico esté presente durante el procedimiento.",
        "C) La práctica es permitida si la entrega se realiza en envases de plástico opaco.",
        "D) La práctica es ilegal, ya que la normativa prohíbe el fraccionamiento de productos que requieran cadena de frío."
      ],
      correctAnswer: 3, // D
      explanation: "Art. 40 del DTO 466. Está estrictamente prohibido fraccionar productos que requieran cadena de frío."
    },
    {
      question: "38. Al realizar el fraccionamiento de un medicamento desde un envase clínico, señale la obligación legal del auxiliar respecto a la información que se debe entregar al usuario (Decreto Supremo 466):",
      options: [
        "A) Es obligatorio adjuntar el folleto de información al paciente (inserto) autorizado por el ISP.",
        "B) Es opcional adjuntar documentación si el paciente no la solicita.",
        "C) Se debe entregar una copia foliada del Libro de Inspección del local.",
        "D) Se debe entregar un formulario de encuesta de satisfacción al cliente."
      ],
      correctAnswer: 0, // A
      explanation: "Art. 40 E del DTO 466. Al entregar un medicamento fraccionado, es obligatorio adjuntar el folleto de información al paciente (inserto)."
    },
    {
      question: "39. En relación con el período de validez general para la presentación y despacho de una receta médica común desde su emisión, señale la alternativa CORRECTA:",
      options: [
        "A) Tiene un plazo máximo de validez de 10 días.",
        "B) Tiene un plazo general de validez de 30 días corridos desde su emisión.",
        "C) Tiene un plazo máximo de validez de 90 días.",
        "D) Mantiene su validez legal por 1 año calendario."
      ],
      correctAnswer: 1, // B
      explanation: "Reglamentación Farmacéutica. La validez general de las recetas comunes para tratamientos agudos es de 30 días desde su emisión."
    },
    {
      question: "40. Seleccione la afirmación CORRECTA referente al rol ético y legal del Auxiliar de Farmacia en el marco del Decreto Supremo 466:",
      options: [
        "A) Posee la facultad legal de modificar la dosis indicada en la receta según la capacidad de pago del usuario.",
        "B) Está autorizado para despachar productos psicotrópicos sin supervisión cuando el Director Técnico no está en el local.",
        "C) Desempeña sus funciones como colaborador directo bajo la supervisión y dependencia del Químico Farmacéutico, promoviendo el Uso Racional de Medicamentos.",
        "D) Debe incentivar la venta de productos de mayor valor económico por sobre la indicación médica."
      ],
      correctAnswer: 2, // C
      explanation: "Art. 28 del DTO 466. El auxiliar actúa bajo la supervisión y dependencia del Químico Farmacéutico, promoviendo el Uso Racional de Medicamentos."
    }
  ]
};

export default proEvalGlobal01;