// quizData/proLevel4.js

/**
 * < macz.dev />
 * ARCHIVO: Nivel 4 PRO
 * TEMA: Estupefacientes y Psicotrópicos - Decretos 404 y 405
 */

export const proLevel4 = {
  id: 4,
  title: "Nivel 4 PRO: Controlados Dto. 404 y 405",
  description: "Examen crítico sobre manejo de estupefacientes, psicotrópicos, estrellas de seguridad y Receta Cheque.",
  questions: [
    {
      question: "Respecto a los envases de los productos estupefacientes (Decreto 404), señale la afirmación CORRECTA:",
      options: [
        "Pueden contener un máximo de 30 unidades posológicas y llevar una estrella verde.",
        "No podrán contener una cantidad superior a 12 unidades posológicas, no deben ser fraccionados en su expendio y deben llevar una estrella roja.",
        "Pueden ser fraccionados por el Químico Farmacéutico si el médico lo indica en la receta cheque.",
        "La estrella roja de cinco puntas debe cubrir al menos la mitad (1/2) de la superficie de la cara principal del envase."
      ],
      correctAnswer: 1,
      explanation: "El Dto. 404 (Art. 19) establece para estupefacientes un máximo de 12 unidades y estrella ROJA. No confundir con el Dto. 405 (Psicotrópicos) que permite 30 unidades y estrella VERDE."
    },
    {
      question: "En relación con los envases de los productos psicotrópicos (Decreto 405), identifique la alternativa INCORRECTA:",
      options: [
        "Los envases no podrán tener una cantidad superior a treinta unidades posológicas, salvo que se trate de envases clínicos.",
        "Las etiquetas deberán expresar la condición de venta y la leyenda 'Sujeto a Control de Psicotrópicos'.",
        "Las etiquetas llevarán una estrella de cinco puntas de color verde, cuyo tamaño no podrá ser inferior a la sexta parte de la cara principal.",
        "Los productos psicotrópicos de la Lista IV pueden fraccionarse libremente si el paciente presenta una receta médica simple."
      ],
      correctAnswer: 3,
      explanation: "Ningún control legal (Lista I a IV) permite el fraccionamiento físico en el expendio de mostrador, y la Lista IV exige siempre Receta Médica Retenida, no simple."
    },
    {
      question: "Sobre las facultades de los Cirujanos Dentistas para prescribir psicotrópicos (Decreto 405), indique la afirmación CORRECTA:",
      options: [
        "Tienen prohibición absoluta de prescribir cualquier tipo de psicotrópico o estupefaciente.",
        "Pueden prescribir y adquirir en farmacias preparados de la Lista IV (hasta 150 unidades) para administrarlos directamente a sus pacientes en la consulta, quedando la receta retenida en un registro especial de la farmacia.",
        "Pueden adquirir hasta 30 unidades de cualquier psicotrópico de la Lista II (como Ketamina) para uso en pabellón.",
        "Pueden emitir Recetas Cheque para prescribir analgésicos de la Lista III a sus pacientes."
      ],
      correctAnswer: 1,
      explanation: "Los dentistas SÍ pueden usar recetas retenidas para adquirir productos de la Lista IV para su consulta técnica (hasta 150 unidades), pero no están facultados para emitir Receta Cheque."
    },
    {
      question: "De acuerdo con el Decreto 405, respecto a la prescripción por parte de Médicos Veterinarios, señale la alternativa INCORRECTA:",
      options: [
        "Pueden prescribir productos de la Lista IV mediante recetas retenidas.",
        "La receta debe consignar obligatoriamente su uso veterinario.",
        "Los médicos veterinarios están facultados para emitir Recetas Cheque de uso veterinario para productos de la Lista II.",
        "La receta debe incluir el nombre, cédula de identidad, domicilio, teléfono y correo electrónico del dueño o responsable del animal."
      ],
      correctAnswer: 2,
      explanation: "Los médicos veterinarios solo tienen habilitada la prescripción de Lista IV mediante Receta Retenida. La ley no los faculta en ningún caso para emitir Recetas Cheque."
    },
    {
      question: "En cuanto a las competencias de control de las autoridades sanitarias (Art. 4, Decretos 404 y 405), indique la afirmación CORRECTA:",
      options: [
        "La SEREMI de Salud controla la importación y exportación de estupefacientes.",
        "El Instituto de Salud Pública (ISP) controla exclusivamente el expendio y uso de los productos en las farmacias.",
        "Corresponde al ISP el control de la importación, exportación, producción y distribución; mientras que a las SEREMI les corresponde el control de la preparación, transporte, expendio y uso dentro de su territorio.",
        "La Central de Abastecimiento (CENABAST) controla la tenencia y posesión de psicotrópicos en el país."
      ],
      correctAnswer: 2,
      explanation: "La ley divide la fiscalización: ISP se encarga de la macro-fiscalización (Producción, Importación, Distribución mayorista), mientras que las SEREMI realizan la micro-fiscalización (Farmacias, Recetarios y Expendio al público)."
    },
    {
      question: "Respecto a las 'muestras médicas' de estupefacientes (Decreto 404), identifique la alternativa INCORRECTA:",
      options: [
        "No podrán elaborarse ni distribuirse muestras médicas de ninguno de los productos estupefacientes de las Listas I y II.",
        "Se prohíbe efectuar promoción o difusión comercial de los estupefacientes de las Listas I y II.",
        "Los médicos cirujanos pueden entregar muestras médicas de morfina siempre que el paciente firme un recibo de conformidad.",
        "Excepcionalmente, se pueden distribuir si contienen dosis mínimas y el Instituto de Salud Pública (ISP) lo autoriza de forma específica."
      ],
      correctAnswer: 2,
      explanation: "Está tajantemente prohibido entregar muestras médicas de estupefacientes fuertes (Lista I y II). Un recibo de conformidad no anula esta prohibición legal absoluta."
    },
    {
      question: "Sobre la regulación de 'muestras médicas' de psicotrópicos (Decreto 405), señale la afirmación CORRECTA:",
      options: [
        "Los visitadores médicos pueden distribuir libremente muestras de la Lista IV (ej. Clonazepam) en los consultorios.",
        "Las farmacias pueden vender muestras médicas de psicotrópicos si las ofrecen a un precio menor al costo comercial.",
        "No podrán elaborarse ni distribuirse muestras médicas de los productos psicotrópicos de las Listas II, III y IV, salvo autorización específica del ISP para dosis mínimas.",
        "Las muestras médicas de psicotrópicos no requieren llevar la estrella verde en su envase primario."
      ],
      correctAnswer: 2,
      explanation: "La prohibición de elaborar y distribuir muestras médicas aplica a todo producto de las Listas II, III y IV del Decreto 405, no solo a los estupefacientes del Dto. 404."
    },
    {
      question: "En materia de importación y exportación de drogas controladas (Decretos 404 y 405), indique la afirmación INCORRECTA:",
      options: [
        "Solo podrán ser importados por laboratorios, droguerías, farmacias, hospitales e instituciones de investigación previa autorización del ISP.",
        "Los establecimientos deben comunicar al ISP sus previsiones de importación en el mes de diciembre de cada año para el año siguiente.",
        "El ISP otorga la autorización mediante un 'Certificado Oficial de Importación o Exportación'.",
        "El certificado oficial debe emitirse dentro de los 30 días siguientes a la fecha de la solicitud."
      ],
      correctAnswer: 1,
      explanation: "El reglamento exige expresamente que las previsiones de importación se envíen al ISP en el mes de OCTUBRE de cada año, no en diciembre."
    },
    {
      question: "Según las Listas del Decreto 404 (Estupefacientes), identifique la droga que está clasificada de forma INCORRECTA:",
      options: [
        "Heroína (Diacetilmorfina) pertenece a la Lista I.",
        "Fentanilo pertenece a la Lista I.",
        "Codeína pertenece a la Lista I.",
        "Opio pertenece a la Lista I."
      ],
      correctAnswer: 2,
      explanation: "La Codeína es un derivado menor y pertenece a la Lista II. La Lista I está reservada para drogas de altísimo riesgo y potencial de abuso (Heroína, Fentanilo, Opio)."
    },
    {
      question: "Según las Listas del Decreto 405 (Psicotrópicos), señale la droga que está clasificada de forma CORRECTA:",
      options: [
        "El MDMA (Éxtasis) pertenece a la Lista IV de venta en farmacias.",
        "La Ketamina es un anestésico disociativo clasificado en la Lista II.",
        "La Sibutramina pertenece a la Lista II y exige receta cheque.",
        "El Diazepam pertenece a la Lista III."
      ],
      correctAnswer: 1,
      explanation: "La Ketamina fue reclasificada legalmente y actualmente pertenece a la Lista II (exige Receta Cheque). MDMA es Lista I, Sibutramina Lista IV y Diazepam Lista IV."
    },
    {
      question: "En relación a las definiciones legales establecidas en el Artículo 2º de los Decretos 404 y 405, indique la afirmación INCORRECTA:",
      options: [
        "Producción' incluye la fabricación, la obtención de la forma farmacéutica, el envase definitivo y los controles de calidad.",
        "'Posesión' y 'Tenencia' son términos sinónimos que la ley usa indistintamente para referirse al almacenamiento en droguerías.",
        "'Posesión' es la tenencia a cualquier título para uso personal y lícito.",
        "'Tenencia' es la mantención de la mercancía con resguardos reglamentarios para uso de terceros."
      ],
      correctAnswer: 1,
      explanation: "Legalmente no son sinónimos. 'Posesión' se refiere al uso personal lícito (el paciente con su receta); mientras que 'Tenencia' es la custodia con resguardos para terceros (la farmacia o droguería)."
    },
    {
      question: "Respecto al almacenamiento y seguridad de estupefacientes y psicotrópicos en los establecimientos (Art. 35 Dto. 404), señale la afirmación CORRECTA:",
      options: [
        "Solo los estupefacientes de la Lista I deben guardarse bajo llave.",
        "Todos los establecimientos autorizados para mantener existencias deberán conservarlos permanentemente bajo llave y adoptar medidas para prevenir su robo o extravío.",
        "En las farmacias, las benzodiazepinas de la Lista IV pueden exhibirse en estanterías de acceso directo al público.",
        "La llave del mueble de controlados puede ser custodiada por el auxiliar de farmacia en los turnos nocturnos."
      ],
      correctAnswer: 1,
      explanation: "El término legal explícito es 'bajo llave' para TODOS los estupefacientes y psicotrópicos sin importar la lista comercial. Además, la llave es responsabilidad exclusiva del Químico Farmacéutico."
    },
    {
      question: "Sobre la inclusión o exclusión de drogas en las Listas de control (Art. 3, Dtos. 404 y 405), identifique la afirmación INCORRECTA:",
      options: [
        "Se agregan o excluyen mediante un decreto supremo del Ministerio de Salud.",
        "El cambio regirá a contar del día 1° del mes siguiente a su publicación en el Diario Oficial.",
        "El Instituto de Salud Pública puede modificar las Listas mediante una simple circular interna.",
        "Las referencias en otras leyes a 'sustancias que causen dependencia' se entenderán formuladas a los psicotrópicos de este reglamento."
      ],
      correctAnswer: 2,
      explanation: "No basta una circular o resolución del ISP. Al ser las listas parte integral de un Decreto, alterar su contenido exige jerárquicamente un nuevo Decreto Supremo del Ministerio de Salud."
    },
    {
      question: "Según la clasificación del Decreto 405, identifique la condición de venta CORRECTA para las drogas de la Lista II (ej. Anfetamina, Metilfenidato):",
      options: [
        "Venta Directa.",
        "Venta bajo Receta Médica Simple.",
        "Venta bajo Receta Médica Retenida.",
        "Venta bajo Receta Cheque."
      ],
      correctAnswer: 3,
      explanation: "Los productos psicotrópicos clasificados en la Lista II (como las Anfetaminas o el Metilfenidato) tienen como condición de venta estricta la Receta Cheque."
    },
    {
      question: "Identifique la afirmación INCORRECTA sobre la Lista III de Psicotrópicos (Decreto 405):",
      options: [
        "Incluye medicamentos como el Fenobarbital y el Pentobarbital.",
        "Su condición de venta obligatoria es mediante Receta Médica Retenida.",
        "La condición de venta legal de los productos que contengan estas drogas o sus sales es 'BAJO RECETA CHEQUE'.",
        "Las sales de las sustancias enumeradas en esta lista están igualmente controladas."
      ],
      correctAnswer: 1,
      explanation: "La Lista III (que incluye barbitúricos fuertes como Pentobarbital) exige legalmente RECETA CHEQUE, al igual que la Lista II. Es un error común pensar que solo la Lista II usa Receta Cheque."
    },
    {
      question: "De acuerdo con el Decreto 405, respecto a la Lista IV de Psicotrópicos, señale la alternativa CORRECTA:",
      options: [
        "Incluye anorexígenos potentes como la Anfepramona y Fentermina.",
        "Su condición de venta es mediante Receta Cheque.",
        "Incluye fármacos como Alprazolam, Clonazepam, Diazepam y Zolpidem, exigiendo para su expendio Receta Médica Retenida.",
        "Solo los médicos psiquiatras están legalmente facultados para prescribir medicamentos de la Lista IV."
      ],
      correctAnswer: 2,
      explanation: "La Lista IV agrupa a las benzodiazepinas e inductores del sueño comunes (Alprazolam, Diazepam, Zolpidem), cuya condición de expendio en farmacia es bajo Receta Médica Retenida."
    },
    {
      question: "En relación con las definiciones del proceso farmacéutico (Art. 2, Dtos. 404 y 405), identifique la afirmación INCORRECTA:",
      options: [
        "'Preparación' es la elaboración, por medio de operaciones farmacéuticas, de un producto destinado a ser usado como medicamento.",
        "'Extracción' es la separación de uno o varios principios activos desde materias primas.",
        "'Expendio' es la transferencia a cualquier título que efectúa el laboratorio a la farmacia.",
        "'Tránsito' es cuando la mercancía atraviesa un país situado entre el país de origen y el de destino."
      ],
      correctAnswer: 2,
      explanation: "'Expendio' se define legalmente como la venta al detalle y a título oneroso directamente al usuario final (paciente). La transferencia desde un laboratorio a una farmacia se denomina 'Distribución'."
    },
    {
      question: "Sobre la aplicación general de la normativa de Psicotrópicos (Decreto 405), indique la afirmación CORRECTA:",
      options: [
        "Los precursores químicos para fabricar psicotrópicos no están sometidos a ningún control en Chile.",
        "La importación, fraccionamiento, expendio y uso de psicotrópicos se someterán íntegramente a las normas de este reglamento.",
        "Los medicamentos psicotrópicos importados para uso compasivo están exentos de la retención de receta en la farmacia.",
        "Las farmacias no tienen límite de unidades para el expendio de un psicotrópico, siempre que la receta esté firmada."
      ],
      correctAnswer: 1,
      explanation: "El Dto. 405 establece que todas las etapas (importación, fraccionamiento, expendio y uso) quedan sometidas íntegramente a sus normas, sin exenciones para el uso compasivo ni expendio ilimitado."
    },
    {
      question: "Si se requiere modificar la clasificación de una droga pasándola de la Lista IV a la Lista II (ej. aumento de control), identifique la alternativa INCORRECTA según la ley:",
      options: [
        "Debe realizarse a través de un Decreto Supremo del Ministerio de Salud.",
        "Requiere publicación oficial en el Diario Oficial.",
        "Entrará en vigencia inmediatamente a la medianoche del día de su publicación.",
        "Afectará la condición de venta del producto comercial que la contenga, pasando a requerir Receta Cheque."
      ],
      correctAnswer: 2,
      explanation: "Los cambios de lista no entran en vigencia de inmediato tras publicarse. La ley establece que rigen a contar del día 1º del mes siguiente a su publicación en el Diario Oficial."
    },
    {
      question: "Identifique la afirmación CORRECTA sobre los envases y la condición de venta de Psicotrópicos (D. 405):",
      options: [
        "Las recetas de Lista IV retenidas en farmacia deben ser firmadas por el director del Servicio de Salud antes de archivarse.",
        "Los envases deben llevar una estrella de cinco puntas de color rojo, del tamaño de la sexta parte de la cara principal.",
        "Las etiquetas de los envases deben expresar la condición de venta y llevar de forma clara la leyenda en letras negras sobre fondo blanco: 'Sujeto a Control de Psicotrópicos' y una estrella verde.",
        "Los envases clínicos de psicotrópicos para hospitales tienen un límite estricto legal de 30 unidades posológicas."
      ],
      correctAnswer: 2,
      explanation: "El Art. 19 del Dto. 405 indica claramente las condiciones de rotulado para psicotrópicos: leyenda específica en letras negras sobre fondo blanco y la estrella VERDE de cinco puntas."
    }
  ]
};