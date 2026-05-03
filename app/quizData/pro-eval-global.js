// app/quizData/pro-eval-global.js

export const proEvalGlobal = {
  id: "pro-eval-global",
  title: "EXAMEN GLOBAL SEREMI: Certificación AuxiliarPro",
  description: "Simulador Oficial de 40 preguntas. Abarca Legislación, Farmacotecnia, Almacenamiento y Cálculos. Lee atentamente, abundan las preguntas 'cazabobos'.",
  timeLimit: 60, // 60 minutos
  passingScore: 70, // 70% de aprobación (28 correctas)
  questions: [
    {
      question: "1. (TERMINOLOGÍA) En el contexto de la farmacodinamia, seleccione la alternativa CORRECTA que indica qué órgano del cuerpo humano exhibe el efecto COLAGOGO:",
      options: [
        "A) El hígado, al aumentar la producción y secreción de bilis nueva.",
        "B) La vesícula biliar, al contraerse y liberar la bilis almacenada hacia el intestino delgado.",
        "C) El estómago, al reducir competitivamente la segregación de ácidos gástricos.",
        "D) El páncreas, al secretar activamente enzimas digestivas hacia el duodeno."
      ],
      correctAnswer: 1, // B
      explanation: "Concepto clave: Un colagogo provoca la contracción de la vesícula biliar para vaciar la bilis almacenada hacia el intestino. Esto difiere del efecto 'colerético', el cual estimula al hígado para que produzca mayor cantidad de bilis."
    },
    {
      question: "2. (LEGISLACIÓN) Según el Decreto Supremo 466 respecto a la receta médica simple, identifique la alternativa INCORRECTA (aquella que NO es un elemento estrictamente obligatorio para su validación legal):",
      options: [
        "A) La firma y el RUT del médico prescriptor.",
        "B) La dosis, forma farmacéutica y posología del tratamiento.",
        "C) El diagnóstico clínico detallado del paciente.",
        "D) La fecha de emisión de la receta."
      ],
      correctAnswer: 2, // C
      explanation: "¡Clave de examen! El diagnóstico médico no es un requisito legal obligatorio en una receta simple por protección a la privacidad. Sin embargo, si falta la firma del profesional o la dosis, la receta es absolutamente inválida."
    },
    {
      question: "3. (LEGISLACIÓN) Según el Código Sanitario, determine la alternativa CORRECTA respecto a quién asume la responsabilidad legal y ejerce la Dirección Técnica de una farmacia comunitaria:",
      options: [
        "A) El Administrador comercial o el dueño, siempre que tenga la patente municipal al día.",
        "B) El Técnico de Nivel Superior en Farmacia (TENS).",
        "C) Exclusiva e indelegablemente el Químico Farmacéutico.",
        "D) El Auxiliar de Farmacia si cuenta con la certificación SEREMI y más de 5 años de experiencia."
      ],
      correctAnswer: 2, // C
      explanation: "Pregunta capciosa clásica. La dirección técnica recae exclusiva e indelegablemente en el Químico Farmacéutico. Ni el dueño, ni el técnico, ni el auxiliar pueden asumir esta figura ante la ley."
    },
    {
      question: "4. (DISPENSACIÓN) Un paciente solicita Naproxeno de venta libre (OTC) por un dolor muscular leve. Según las normativas del ISP, indique la alternativa CORRECTA sobre qué presentación puede dispensar SIN receta médica:",
      options: [
        "A) Naproxeno base 500 mg.",
        "B) Naproxeno base 550 mg.",
        "C) Naproxeno sódico 220 mg.",
        "D) Naproxeno sódico 1000 mg."
      ],
      correctAnswer: 2, // C
      explanation: "Por regla general, las dosis mayores de Naproxeno (500mg, 550mg) exigen receta médica. La presentación catalogada como Venta Directa (OTC) suele ser únicamente el Naproxeno sódico de 220 mg."
    },
    {
      question: "5. (FARMACOLOGÍA) Respecto al Paracetamol, identifique la afirmación CORRECTA en relación a su dosis máxima en adultos y su perfil terapéutico:",
      options: [
        "A) Su dosis máxima es de 2 gramos al día y es un potente antiinflamatorio sistémico.",
        "B) Su dosis máxima es de 4 gramos al día, y sus efectos son analgésico y antipirético, sin acción antiinflamatoria relevante.",
        "C) Su dosis máxima es de 6 gramos al día y su principal riesgo asociado es la falla renal aguda.",
        "D) Su dosis máxima es de 4 gramos al día y su principal función es combatir infecciones virales respiratorias."
      ],
      correctAnswer: 1, // B
      explanation: "El Paracetamol es analgésico y antipirético (no antiinflamatorio). Su dosis máxima segura en adultos es de 4 gramos al día (4000 mg). Excederla conlleva un alto riesgo de hepatotoxicidad (daño al hígado)."
    },
    {
      question: "6. (FARMACOLOGÍA) Al revisar el arsenal de jarabes, usted encuentra Carbocisteína en dosis de 750 mg. Seleccione la alternativa CORRECTA respecto a su clasificación terapéutica:",
      options: [
        "A) Antitusivo de acción central que inhibe el reflejo de la tos.",
        "B) Broncodilatador pediátrico de acción rápida.",
        "C) Mucolítico, destinado a fluidificar las secreciones.",
        "D) Antihistamínico de primera generación que produce somnolencia."
      ],
      correctAnswer: 2, // C
      explanation: "La carbocisteína es un mucolítico (rompe y fluidifica las secreciones). Clave cazabobos: no es un antitusivo, por lo que no 'corta' la tos, sino que facilita la expectoración."
    },
    {
      question: "7. (DISPENSACIÓN) Ante un cuadro de indigestión leve o acidez ocasional, indique la alternativa CORRECTA sobre el tratamiento OTC (Venta libre) más clásico a sugerir en el mesón:",
      options: [
        "A) Un antibiótico intestinal (ej: Neomicina) para prevenir infecciones.",
        "B) Un antiespasmódico potente con receta retenida.",
        "C) Un antiácido (ej: hidróxido de aluminio/magnesio) o simeticona.",
        "D) Un corticoide sistémico oral de dosis baja."
      ],
      correctAnswer: 2, // C
      explanation: "Las opciones típicas para indigestión OTC son antiácidos, simeticona o sales efervescentes. Jamás se deben sugerir antibióticos ni corticoides sin prescripción médica."
    },
    {
      question: "8. (FARMACOTECNIA) En el cálculo y dispensación de Insulina, seleccione la alternativa CORRECTA que indica en qué unidad de medida se expresa invariablemente este producto biológico:",
      options: [
        "A) Miligramos (mg).",
        "B) Centímetros cúbicos (cc) absolutos.",
        "C) Unidades Internacionales (UI).",
        "D) Microgramos (mcg)."
      ],
      correctAnswer: 2, // C
      explanation: "Punto crítico de seguridad: La insulina jamás se dosifica en miligramos directos. Su formulación base (ej: 0,5 UI/kg/día) se calcula y administra estrictamente en Unidades Internacionales (UI)."
    },
    {
      question: "9. (CÁLCULO) Un médico prescribe: 'Administrar 10 gotas cada 8 horas por 7 días'. Si sabemos que referencialmente 1 ml equivale a 20 gotas, y cada frasco trae 20 ml. Indique la alternativa CORRECTA sobre cuántos frascos necesita comprar el paciente para terminar su tratamiento:",
      options: [
        "A) 1 frasco.",
        "B) 2 frascos.",
        "C) 3 frascos.",
        "D) Medio frasco, pero el ISP exige despachar 2."
      ],
      correctAnswer: 0, // A
      explanation: "Cálculo: 10 gotas x 3 veces al día = 30 gotas/día. Por 7 días = 210 gotas en total. Si 1 frasco de 20 ml contiene unas 400 gotas (20ml x 20 gotas/ml), con 1 solo frasco le alcanza perfectamente."
    },
    {
      question: "10. (ALMACENAMIENTO) Según el Decreto 466, las vacunas e insulinas son productos biológicos que exigen cadena de frío. Identifique la alternativa CORRECTA que señala la temperatura estándar de conservación exigida:",
      options: [
        "A) Entre 0°C y 4°C, permitiendo el congelamiento superficial.",
        "B) Menor a -20°C en congelador hermético exclusivo.",
        "C) Entre +2°C y +8°C, sin interrumpir la cadena en ningún momento.",
        "D) Entre +8°C y +15°C en estantería cerrada y oscura."
      ],
      correctAnswer: 2, // C
      explanation: "La cadena de frío para productos biológicos en farmacia exige mantenerlos estrictamente entre +2°C y +8°C. Congelar estos productos destruye el principio activo."
    },
    {
      question: "11. (LEGISLACIÓN) Según los Decretos 404 y 405, indique la alternativa CORRECTA sobre la vigencia legal máxima e improrrogable para despachar una Receta Cheque o una Receta Médica Retenida desde su fecha de emisión:",
      options: [
        "A) 30 días corridos.",
        "B) 15 días hábiles.",
        "C) 60 días para pacientes diagnosticados como crónicos.",
        "D) No caducan si el médico indica explícitamente 'tratamiento permanente'."
      ],
      correctAnswer: 0, // A
      explanation: "Ambos tipos de recetas de productos controlados (Estupefacientes y Psicotrópicos) tienen una validez legal de exactamente 30 días contados desde la fecha de su extensión."
    },
    {
      question: "12. (LEGISLACIÓN) Respecto al comercio electrónico en farmacias (venta online), seleccione la afirmación CORRECTA sobre la restricción legal impuesta por el DS 466 respecto a los estupefacientes:",
      options: [
        "A) Se pueden vender online si el paciente escanea y adjunta la receta cheque a color.",
        "B) Se pueden vender si el despacho a domicilio se hace a través de transporte blindado.",
        "C) Está estrictamente prohibido el expendio de medicamentos sujetos a control de Receta Cheque a través de medios electrónicos.",
        "D) Solo se autoriza si el pago se realiza con tarjeta de crédito a nombre del paciente titular."
      ],
      correctAnswer: 2, // C
      explanation: "La legislación prohíbe explícitamente vender medicamentos de las listas de estupefacientes (Receta Cheque) a través de internet o canales electrónicos para evitar desvíos."
    },
    {
      question: "13. (FARMACOLOGÍA) Según el DS 404, si un jarabe antitusivo contiene Codeína en una dosis superior a 10 mg pero inferior a 60 mg por unidad. Indique la alternativa CORRECTA sobre su condición de venta obligatoria:",
      options: [
        "A) Venta Libre (OTC).",
        "B) Receta Médica Simple.",
        "C) Receta Médica Retenida.",
        "D) Receta Cheque (Estupefacientes)."
      ],
      correctAnswer: 2, // C
      explanation: "Codeína hasta 10mg: receta simple. Entre 10mg y 59mg: Receta Retenida. Dosis de 60mg o más: Receta Cheque (Estupefaciente pleno)."
    },
    {
      question: "14. (LEY DE FÁRMACOS) La Ley 20.724 sobre medicamentos Bioequivalentes establece una regla clara. Ante una receta que prescribe un medicamento de marca, identifique la alternativa CORRECTA sobre el deber del farmacéutico:",
      options: [
        "A) Cambiarlo automáticamente por un genérico para cumplir con las normativas de Cenabast.",
        "B) Informar e intercambiar por un producto bioequivalente certificado SÓLO a solicitud expresa o aceptación del paciente.",
        "C) Rechazar la receta si el médico no escribió explícitamente la palabra 'Bioequivalente'.",
        "D) Llamar al médico tratante para pedir autorización telefónica antes de cualquier cambio."
      ],
      correctAnswer: 1, // B
      explanation: "La ley faculta al farmacéutico a realizar la intercambiabilidad por un producto bioequivalente demostrado, pero esta acción se hace siempre a solicitud o aceptación del paciente."
    },
    {
      question: "15. (ALMACENAMIENTO) Si usted detecta medicamentos con fecha de vencimiento expirada en la sala de ventas, seleccione la alternativa CORRECTA sobre el procedimiento normativo a seguir:",
      options: [
        "A) Destruirlos inmediatamente tirándolos a la basura común para evitar fiscalizaciones.",
        "B) Venderlos con un 50% de descuento bajo firma de consentimiento del cliente.",
        "C) Retirarlos, segregarlos e identificarlos en un sector exclusivo y bajo llave, a la espera de su destrucción oficial.",
        "D) Devolverlos al laboratorio discretamente sin dejar registro en el libro de la farmacia."
      ],
      correctAnswer: 2, // C
      explanation: "Los productos caducados se consideran alterados y un riesgo para la salud pública. Deben segregarse en un área de 'Rechazados' bajo llave, para evitar confusiones hasta su disposición final."
    },
    {
      question: "16. (LEGISLACIÓN) Identifique la alternativa CORRECTA sobre cómo se debe proceder legalmente si un pediatra extiende una Receta Cheque para un niño pequeño que aún no posee RUT:",
      options: [
        "A) La receta es nula de pleno derecho y no se puede despachar bajo ninguna circunstancia.",
        "B) Se debe anotar el RUT de la madre, padre o tutor legal que realiza la compra.",
        "C) El médico debe inventar un RUT provisorio utilizando el número de ficha del hospital.",
        "D) Se deja el RUT en blanco y se anota obligatoriamente la edad en años cumplidos entre paréntesis junto al nombre."
      ],
      correctAnswer: 3, // D
      explanation: "El Artículo 26 del DS 404 establece esta excepción específica para menores sin Cédula de Identidad: el espacio del RUT queda vacío, pero la edad en años debe ir entre paréntesis junto al nombre."
    },
    {
      question: "17. (DEFINICIONES) Indique la afirmación CORRECTA que define la diferencia conceptual que hace el Decreto 3 entre 'Expendio' y 'Dispensación':",
      options: [
        "A) Son sinónimos legales y significan exactamente lo mismo en la práctica.",
        "B) El expendio es la entrega gratuita en hospitales y la dispensación es la venta en farmacias privadas.",
        "C) La dispensación es el acto profesional que incluye la entrega del medicamento acompañada de información y orientación sobre su uso racional.",
        "D) El expendio es una labor exclusiva del Químico y la dispensación es labor exclusiva del Auxiliar."
      ],
      correctAnswer: 2, // C
      explanation: "Expender es el simple acto comercial de entregar. Dispensar es un acto clínico-farmacéutico que incluye educar al paciente sobre posología, almacenamiento y reacciones adversas."
    },
    {
      question: "18. (LEGISLACIÓN) Toda farmacia debe mantener permanentemente registros oficiales. Identifique la alternativa INCORRECTA (aquel libro que NO es una exigencia sanitaria obligatoria en el mesón):",
      options: [
        "A) Libro de Recetas.",
        "B) Libro de Reclamos y Sugerencias a disposición del público.",
        "C) Libro de Psicotrópicos y Estupefacientes.",
        "D) Libro de Asistencia y Novedades del Sindicato de Trabajadores."
      ],
      correctAnswer: 3, // D
      explanation: "La autoridad sanitaria fiscaliza los libros técnicos (Recetas, Controlados, Reclamos). Los registros sindicales o de Recursos Humanos corresponden a la Inspección del Trabajo, no al Código Sanitario."
    },
    {
      question: "19. (FARMACOTECNIA) Según la normativa vigente, la labor de fraccionamiento de envases clínicos para entregar dosis exactas al paciente puede ser realizada por el Auxiliar de Farmacia. Seleccione la alternativa CORRECTA sobre la condición que permite esta labor:",
      options: [
        "A) Siempre que el Auxiliar cuente con más de 10 años de experiencia demostrable en el rubro.",
        "B) Exclusivamente si se realiza bajo la supervisión directa y responsabilidad del Químico Farmacéutico.",
        "C) Si el paciente firma un documento notarial de exención de responsabilidad civil.",
        "D) Si se utilizan tijeras estériles compradas y abiertas en la misma farmacia."
      ],
      correctAnswer: 1, // B
      explanation: "Toda labor técnica (como el fraccionamiento o preparación de magistrales) ejecutada por un Auxiliar debe estar amparada bajo la supervigilancia del Director Técnico (QF)."
    },
    {
      question: "20. (LEGISLACIÓN) Indique la afirmación CORRECTA sobre el requisito fundamental que exige el Ministerio de Salud (Decreto 38) para otorgar el certificado oficial de 'Auxiliar de Farmacia':",
      options: [
        "A) Pagar una patente profesional en la municipalidad de la comuna donde trabaja.",
        "B) Presentar un contrato de trabajo indefinido vigente en una farmacia de cadena.",
        "C) Rendir y aprobar satisfactoriamente un examen de competencia ante la SEREMI de Salud, previo cumplimiento de requisitos básicos.",
        "D) Estar matriculado cursando la carrera de Química y Farmacia en una universidad acreditada."
      ],
      correctAnswer: 2, // C
      explanation: "El reconocimiento de la competencia como Auxiliar requiere certificar idoneidad mediante un examen oficial rendido directamente ante la autoridad sanitaria regional (SEREMI)."
    },
    {
      question: "21. (FARMACOLOGÍA) Para evitar la resistencia antimicrobiana, el ISP dictaminó una regla estricta. Seleccione la alternativa CORRECTA respecto a la condición de venta exigida SIEMPRE para antibióticos sistémicos en Chile (ej: Amoxicilina):",
      options: [
        "A) Venta Libre (OTC) si el paciente presenta fiebre evidente.",
        "B) Receta Médica Simple sin retención del documento.",
        "C) Receta Médica Retenida.",
        "D) Receta Cheque foliada."
      ],
      correctAnswer: 2, // C
      explanation: "Todos los antibióticos de uso sistémico en farmacias comunitarias deben expenderse reteniendo la receta, para evitar la automedicación y frenar la resistencia bacteriana."
    },
    {
      question: "22. (FARMACOVIGILANCIA) Indique la alternativa CORRECTA que da nombre a la disciplina que detecta, evalúa, comprende y previene las Reacciones Adversas a Medicamentos (RAM) en los pacientes:",
      options: [
        "A) Farmacocinética clínica avanzada.",
        "B) Epidemiología de campo farmacéutico.",
        "C) Farmacovigilancia.",
        "D) Bioequivalencia terapéutica cruzada."
      ],
      correctAnswer: 2, // C
      explanation: "La Farmacovigilancia es la herramienta del ISP y de las farmacias para reportar si un medicamento, ya aprobado y en venta, causa efectos tóxicos no previstos en la población."
    },
    {
      question: "23. (ALMACENAMIENTO) Los productos con la advertencia de almacenamiento 'Fotosensibles' requieren precauciones. Identifique la afirmación CORRECTA sobre cómo deben manejarse:",
      options: [
        "A) Mantenerlos obligatoriamente en refrigeración bajo 0°C.",
        "B) Protegerlos de la luz solar directa, idealmente conservándolos en sus envases secundarios opacos o frascos color ámbar.",
        "C) Almacenarlos en vitrinas de vidrio transparente para su fácil ubicación e inventario.",
        "D) Conservarlos sumergidos en soluciones salinas estabilizadoras."
      ],
      correctAnswer: 1, // B
      explanation: "La luz ultravioleta degrada rápidamente el principio activo de moléculas fotosensibles. El color ámbar del frasco o mantenerlos dentro de su caja de cartón previene esta degradación química."
    },
    {
      question: "24. (LEGISLACIÓN) En zonas rurales aisladas, el Código Sanitario permite la instalación de un 'Almacén Farmacéutico'. Seleccione la alternativa CORRECTA que describe su principal limitación legal frente a una 'Farmacia':",
      options: [
        "A) Tienen prohibición absoluta de vender analgésicos comunes como Paracetamol.",
        "B) Están eximidos de la obligación de tener un libro de reclamos y sugerencias.",
        "C) No están facultados para despachar Recetas Cheque (Estupefacientes) ni elaborar preparados magistrales.",
        "D) Su autorización se limita exclusivamente a la venta de productos de uso veterinario."
      ],
      correctAnswer: 2, // C
      explanation: "El Almacén Farmacéutico posee un petitorio más limitado y carece de las instalaciones y facultades legales para el manejo de drogas de alto riesgo (estupefacientes) o formulación de recetarios."
    },
    {
      question: "25. (CÁLCULO) Si la viñeta de una solución tópica indica una concentración de '5% p/v' (peso/volumen). Indique la afirmación CORRECTA que explica matemáticamente esta proporción:",
      options: [
        "A) 5 miligramos de soluto contenidos en 5 mililitros de solvente.",
        "B) 5 gramos de principio activo disueltos y contenidos en cada 100 mililitros de solución.",
        "C) 5 partes de agua purificada por cada 100 partes de polvo base.",
        "D) 5 microgramos de droga por cada litro de preparación."
      ],
      correctAnswer: 1, // B
      explanation: "En formulaciones farmacéuticas, el porcentaje p/v se lee siempre como: X gramos de soluto disueltos en 100 mililitros de solución total."
    },
    {
      question: "26. (LEGISLACIÓN) Identifique la alternativa CORRECTA que nombra el documento emanado del Ministerio de Salud que obliga a todas las farmacias a mantener un stock mínimo permanente de ciertos medicamentos indispensables:",
      options: [
        "A) El Vademécum farmacéutico anual ilustrado.",
        "B) El Manual Oficial de Abastecimiento de Cenabast.",
        "C) El Petitorio Mínimo de Farmacias.",
        "D) El Libro de Registro de Psicotrópicos."
      ],
      correctAnswer: 2, // C
      explanation: "El Petitorio Mínimo es el listado exigido por ley que garantiza que cualquier paciente, en cualquier farmacia de Chile, encuentre los medicamentos esenciales para urgencias de salud pública."
    },
    {
      question: "27. (FARMACOLOGÍA) El principio activo Clonazepam pertenece a la familia de las Benzodiacepinas. Legalmente, corresponde a la Lista IV. Seleccione la alternativa CORRECTA sobre la condición legal de su expendio:",
      options: [
        "A) Venta Directa estrictamente controlada por el Auxiliar.",
        "B) Receta Médica Simple vigente por 60 días.",
        "C) Receta Médica Retenida.",
        "D) Receta Cheque exclusiva para especialistas psiquiatras."
      ],
      correctAnswer: 2, // C
      explanation: "Las Benzodiacepinas (Diazepam, Alprazolam, Clonazepam) son psicotrópicos depresores del SNC (Decreto 405) y se despachan reteniendo la receta médica y registrando el saldo en el libro oficial."
    },
    {
      question: "28. (LEGISLACIÓN) Si la Autoridad Sanitaria fiscaliza una farmacia durante la madrugada y esta se encuentra cerrada en el día que le correspondía su 'Turno'. Indique la afirmación CORRECTA sobre a qué se expone el establecimiento:",
      options: [
        "A) A una amonestación ética privada del Colegio de Químicos Farmacéuticos.",
        "B) A la cancelación temporal de la patente comercial efectuada por Carabineros de Chile.",
        "C) A la instrucción inmediata de un Sumario Sanitario cursado por la SEREMI de Salud.",
        "D) A ninguna sanción legal si el dueño justifica la ausencia al día siguiente hábil."
      ],
      correctAnswer: 2, // C
      explanation: "El turno de farmacia es una carga pública irrenunciable que asegura atención 24/7. Su incumplimiento gatilla automáticamente un Sumario Sanitario que incluye severas multas o clausura."
    },
    {
      question: "29. (DISPENSACIÓN) Ante la solicitud de un paciente por un medicamento catalogado legalmente como 'Venta Directa'. Identifique la alternativa CORRECTA sobre cómo debe actuar el Auxiliar de Farmacia:",
      options: [
        "A) Debe exigir siempre el carnet de identidad del comprador para dejar registro.",
        "B) Debe retener y timbrar cualquier documento o papel médico que traiga el paciente.",
        "C) Lo dispensa libremente sin exigir la presentación de receta médica, orientando sobre su uso.",
        "D) Debe solicitar autorización verbal al QF por cada caja de venta directa vendida."
      ],
      correctAnswer: 2, // C
      explanation: "La condición de 'Venta Directa' o venta libre (OTC) implica que el producto tiene un margen de seguridad amplio y el paciente puede adquirirlo sin prescripción de un facultativo."
    },
    {
      question: "30. (FARMACOTECNIA) Un paciente presenta una receta magistral para preparar un colirio oftálmico (producto estéril). Seleccione la afirmación CORRECTA sobre si puede elaborarse en el recetario de cualquier farmacia comunitaria estándar:",
      options: [
        "A) Sí, es posible utilizando guantes quirúrgicos y mascarillas N95.",
        "B) Sí, siempre que el QF autorice y supervise directamente el procedimiento manual.",
        "C) No, los preparados estériles exigen autorización específica del ISP para operar áreas limpias y cabinas de flujo laminar.",
        "D) No, en Chile están absolutamente prohibidas las recetas magistrales de uso oftálmico."
      ],
      correctAnswer: 2, // C
      explanation: "Las formulaciones estériles (inyectables, colirios) requieren condiciones de asepsia industrial (aire filtrado, presión positiva) reguladas por el Decreto 79. No se preparan en recetarios comunes."
    },
    {
      question: "31. (ALMACENAMIENTO) En la logística de droguerías y farmacias, indique la alternativa CORRECTA que describe qué implica que un lote de medicamentos sea puesto en estado de 'Cuarentena':",
      options: [
        "A) Significa que los envases contienen cepas de virus vivos o atenuados.",
        "B) Significa que su venta o uso está prohibido y retenido temporalmente hasta que control de calidad determine su liberación o rechazo definitivo.",
        "C) Significa que los medicamentos vencen inexorablemente en un plazo de 40 días exactos.",
        "D) Significa que son medicamentos de uso exclusivo y restringido para hospitales militares."
      ],
      correctAnswer: 1, // B
      explanation: "Término técnico: La Cuarentena es el aislamiento físico y/o informático de un producto farmacéutico del cual se tienen dudas sobre su calidad, seguridad o eficacia, hasta verificarlo."
    },
    {
      question: "32. (FARMACOLOGÍA) Respecto a los Corticoides sistémicos (ej: Prednisona). Identifique la afirmación CORRECTA que constituye una advertencia clínica clave en la educación al paciente durante la dispensación:",
      options: [
        "A) Se le debe indicar que puede suspender el tratamiento de golpe en cuanto desaparezca el dolor.",
        "B) Se le debe informar que son completamente inofensivos y se pueden usar preventivamente todos los inviernos.",
        "C) Se le debe advertir que tienen efectos inmunosupresores y su interrupción debe ser siempre gradual bajo estricta indicación médica.",
        "D) Se le debe aclarar que no requieren receta médica en sus presentaciones de baja concentración oral."
      ],
      correctAnswer: 2, // C
      explanation: "Los corticoides actúan sobre el eje suprarrenal. Una suspensión abrupta puede generar una crisis suprarrenal grave; además, deprimen el sistema inmune. Exigen receta retenida."
    },
    {
      question: "33. (DEFINICIONES) Según la Ley de Fármacos chilena, seleccione la alternativa CORRECTA que define el significado de la sigla 'DCI' obligatoria en las cajas de medicamentos:",
      options: [
        "A) Denominación Comercial Interna de cada laboratorio.",
        "B) Denominación Común Internacional (el nombre genérico o científico del principio activo).",
        "C) Departamento de Control de Infecciones del Instituto de Salud Pública.",
        "D) Dosis Clínica Indicada para pacientes adultos."
      ],
      correctAnswer: 1, // B
      explanation: "La DCI es el nombre oficial y universal otorgado por la OMS al principio activo (ej: Amoxicilina), independiente de la marca de fantasía que le asigne el laboratorio."
    },
    {
      question: "34. (CÁLCULO) Una receta pediátrica indica administrar 500 mg de Amoxicilina cada 8 horas. Si la farmacia dispone del jarabe de 'Amoxicilina 250mg / 5ml'. Indique la afirmación CORRECTA sobre cuántos ml debe administrar la madre en cada toma:",
      options: [
        "A) 2,5 ml.",
        "B) 5 ml.",
        "C) 10 ml.",
        "D) 15 ml."
      ],
      correctAnswer: 2, // C
      explanation: "Regla de tres: Si en 5 ml hay 250 mg, para alcanzar los 500 mg que pide el médico (el doble de dosis), se necesitan 10 ml en la jeringa dosificadora."
    },
    {
      question: "35. (LEGISLACIÓN) El Artículo 100 bis de la Ley 20.724 es claro sobre los medicamentos de venta directa (OTC). Identifique la alternativa CORRECTA sobre qué elemento deben presentar obligatoriamente en la cara exterior de su envase:",
      options: [
        "A) El precio de venta a público impreso directamente por el laboratorio fabricante.",
        "B) La indicación terapéutica clara para orientar la decisión de compra del consumidor y sellos de inviolabilidad.",
        "C) El nombre de pila y apellidos del químico farmacéutico creador de la fórmula original.",
        "D) Advertencias gráficas tipo 'discos pare' color negro, similares a las de los alimentos altos en azúcares."
      ],
      correctAnswer: 1, // B
      explanation: "Dado que el paciente elige el producto sin consejo médico, la ley exige que la caja diga claramente para qué sirve (ej: 'Alivio del dolor de cabeza') y que posea sellos para asegurar que no fue manipulado."
    },
    {
      question: "36. (SALUD OCUPACIONAL) Según el Decreto 594, cuando se requiere tomar muestras biológicas (ej: orina) a trabajadores expuestos a riesgos químicos en un sistema de turnos rotativos. Seleccione la alternativa CORRECTA sobre en qué momento debe realizarse la toma de muestra:",
      options: [
        "A) Inmediatamente al inicio de la jornada laboral.",
        "B) Exactamente en el horario de colación del trabajador.",
        "C) Al final de la jornada laboral del turno correspondiente.",
        "D) En el primer día libre o de descanso del trabajador."
      ],
      correctAnswer: 2, // C
      explanation: "Para evaluar correctamente la exposición acumulada de agentes químicos o sus metabolitos en un trabajador sometido a turnos, el DS 594 exige que la muestra se extraiga al final de su jornada laboral."
    },
    {
      question: "37. (LEGISLACIÓN) El fraccionamiento de envases clínicos en farmacias (DFL 725) exige un protocolo. Indique la afirmación CORRECTA sobre qué debe acompañar obligatoriamente a las dosis exactas al momento de entregarlas al paciente:",
      options: [
        "A) Un descuento en el precio final de al menos un 20% exigido por ley.",
        "B) El envase clínico original vacío del cual fueron extraídas las dosis.",
        "C) Una rotulación en el envase de entrega que identifique al producto, prescriptor, paciente e indicaciones de empleo.",
        "D) Un certificado emitido ante notario y firmado por el Director Técnico de la farmacia."
      ],
      correctAnswer: 2, // C
      explanation: "Para garantizar la trazabilidad y la seguridad clínica, las dosis fraccionadas no se pueden entregar 'sueltas'; deben ir en envases rotulados con todos los datos clave de la terapia y el paciente."
    },
    {
      question: "38. (ADMINISTRACIÓN) Respecto a las atribuciones del personal de farmacia frente a recetas médicas. Identifique la alternativa CORRECTA sobre en qué circunstancia el Auxiliar de Farmacia está facultado para modificar la posología prescrita:",
      options: [
        "A) Solo si el paciente le ruega rebajar la dosis argumentando que el remedio es muy fuerte para su estómago.",
        "B) Si el Auxiliar nota por su experiencia que la dosis recetada es de adulto pero el paciente es un niño.",
        "C) Si el medicamento exacto no está disponible en stock y el Auxiliar decide ofrecer uno de mayor concentración ajustando él mismo las tomas.",
        "D) Bajo ninguna circunstancia. Ni el Auxiliar ni el QF pueden alterar unilateralmente la prescripción o posología dictada por el médico."
      ],
      correctAnswer: 3, // D
      explanation: "Principio ético y legal: El farmacéutico y sus auxiliares dispensan, no prescriben. Si se detecta un error de sobredosificación, se debe retener la receta y contactar al médico, nunca modificarla por iniciativa propia."
    },
    {
      question: "39. (LEGISLACIÓN) El Código Sanitario (Decretos 404/405) prohíbe la promoción comercial o distribución gratuita de 'Muestras Médicas' de Estupefacientes y Psicotrópicos. Seleccione la afirmación CORRECTA que describe la única excepción legal que permite esta acción:",
      options: [
        "A) Si el laboratorio fabricante emite un permiso notarial que proteja legalmente a sus visitadores médicos.",
        "B) Si las muestras contienen dosis mínimas y cuentan con una autorización expresa, previa y específica del Instituto de Salud Pública (ISP).",
        "C) Si las muestras son entregadas en mano y de forma exclusiva a los Químicos Farmacéuticos de turno.",
        "D) Si los productos tienen una fecha de vencimiento crítica, menor a 30 días, para evitar mermas."
      ],
      correctAnswer: 1, // B
      explanation: "La entrega de muestras médicas de drogas controladas fomenta el riesgo de desvíos y adicción. Por ley, está prohibida salvo excepciones muy acotadas, con bajas dosis y que posean permiso explícito del ISP."
    },
    {
      question: "40. (FARMACOTECNIA) En relación a las vías de administración revisadas en el Manual de Procedimientos. Indique la alternativa CORRECTA que describe la principal ventaja farmacocinética de la vía 'Sublingual' frente a la vía 'Oral' tradicional (comprimidos que se tragan):",
      options: [
        "A) Permite administrar y tolerar volúmenes líquidos mayores a 10 ml sin causar náuseas.",
        "B) Es la única vía autorizada legalmente para tratar a pacientes en estado de coma profundo.",
        "C) Evita el metabolismo de primer paso hepático, logrando una absorción directa a la circulación sistémica y un efecto terapéutico rápido.",
        "D) Su principal ventaja es que previene la formación de caries al no tener contacto directo con el esmalte de los dientes."
      ],
      correctAnswer: 2, // C
      explanation: "Bajo la lengua existe una rica red venosa que absorbe el fármaco y lo lleva directo al torrente sanguíneo, 'saltándose' el filtro del hígado (primer paso), logrando efectos en pocos minutos (ej: crisis hipertensivas)."
    }
  ]
};