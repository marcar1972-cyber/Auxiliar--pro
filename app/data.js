// app/data.js

export const articulos = [
  {
    id: "requisitos-auxiliar-farmacia-2026",
    titulo: "Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)",
    contenido: `
Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)

Si estás pensando en trabajar en farmacia, uno de los primeros pasos es conocer los requisitos para ser Auxiliar de Farmacia en Chile. Esta es una de las búsquedas más comunes en Google, y con razón: es una puerta de entrada real al rubro de la salud.

Aquí te lo explico simple, claro y sin enredos.

¿Qué es un Auxiliar de Farmacia?

El Auxiliar de Farmacia es la persona que apoya al Químico Farmacéutico en la atención de público, manejo de medicamentos, control de stock, revisión de vencimientos y orientación básica al paciente, siempre bajo supervisión profesional.

Requisitos para Rendir el Examen de Auxiliar de Farmacia en Chile

De acuerdo al Decreto Supremo N° 466, para poder rendir el Examen de Auxiliar de Farmacia debes cumplir con el siguiente requisito principal:

☑ Mínimo 1 año de experiencia laboral comprobable en farmacia, realizando labores como:
Bodegaje
Reposición de medicamentos
• Dispensación bajo supervisión
• Manejo de productos farmacéuticos

Toda esta experiencia debe estar certificada por el Químico Farmacéutico Director Técnico del establecimiento.

El trámite oficial se realiza únicamente a través del portal del Ministerio de Salud en SEREMI en Línea, donde podrás revisar requisitos actualizados, costos y disponibilidad: https://seremienlinea.minsal.cl/asdigital/

Este proceso es fundamental para obtener la credencial oficial de Auxiliar de Farmacia en Chile y poder trabajar legalmente en farmacias comunitarias.

Requisitos Generales para ser Auxiliar de Farmacia en Chile (2026)

Según la normativa vigente del Ministerio de Salud y el Decreto 466, estos son los requisitos generales:

1. Ser mayor de 18 años
Debes ser legalmente mayor de edad.

2. Enseñanza media completa
Debes contar con tu licencia de cuarto medio aprobada.

3. Haber trabajado en farmacia
Debes acreditar experiencia práctica en una farmacia, bajo supervisión de un Químico Farmacéutico.

Importante: El tiempo exacto y forma de acreditación lo revisa directamente la SEREMI de Salud de tu región.

4. Rendir y aprobar el examen de Auxiliar de Farmacia
Este examen evalúa conocimientos como:
Farmacología básica
Recetas médicas
• Cadena de frío
Fechas de vencimiento
Legislación sanitaria
Buenas prácticas en farmacia

5. Obtener la credencial de Auxiliar de Farmacia
Una vez aprobado el examen, la SEREMI entrega la credencial oficial, que te habilita legalmente para trabajar.

¿Dónde se realiza el trámite?

Todo el proceso se gestiona a través de la SEREMI de Salud de tu región. Cada región puede variar levemente en exigencias de documentos, pero la base legal es la misma en todo Chile.

¿Puedo prepararme sin instituto?

Sí. Puedes:
Estudiar de forma independiente
Usar material online
Prepararte con guías, PDFs, ensayos y contenido práctico

Muchos auxiliares actuales se han preparado así. Lo importante es dominar bien los contenidos del examen.

Conclusión clara

Si quieres ser Auxiliar de Farmacia en Chile el 2026, necesitas:
☑ Cuarto medio
Mínimo 1 año de experiencia en farmacia
☑ Aprobar el examen
Obtener tu credencial SEREMI

No es imposible, pero sí requiere constancia, práctica real y estudio enfocado.
    `,
    enlacesInternos: [],
    enlacesExternos: ["https://seremienlinea.minsal.cl/asdigital/"],
    quiz: {
      nivel1: [
        { id: 101, text: "¿Quién es el responsable técnico legal de una farmacia?", options: ["El Dueño", "El Auxiliar de más antigüedad", "El Químico Farmacéutico", "El Gerente"], correctIndex: 2 },
        { id: 102, text: "¿Cuál es el rango de temperatura para cadena de frío?", options: ["0°C a 5°C", "2°C a 8°C", "8°C a 15°C", "Ambiente"], correctIndex: 1 },
        { id: 103, text: "¿Qué significa que un medicamento sea OTC?", options: ["Con receta retenida", "Venta directa (Over The Counter)", "Uso hospitalario", "Controlado"], correctIndex: 1 },
        { id: 104, text: "El Auxiliar de Farmacia debe trabajar bajo supervisión de:", options: ["El cliente", "El Químico Farmacéutico", "El cajero", "Nadie"], correctIndex: 1 },
        { id: 105, text: "¿Qué organismo fiscaliza a las farmacias en Chile?", options: ["ISP y SEREMI de Salud", "Sernac", "Colegio de Farmacéuticos", "Carabineros"], correctIndex: 0 },
        { id: 106, text: "¿Qué es un medicamento Bioequivalente?", options: ["El original", "Mismo efecto terapéutico comprobado que el original", "Copia barata", "Natural"], correctIndex: 1 },
        { id: 107, text: "¿Cuál es la vía de administración 'Sublingual'?", options: ["Debajo de la lengua", "Inyectable", "Sobre la piel", "Rectal"], correctIndex: 0 },
        { id: 108, text: "¿Qué indica la 'Fecha de Vencimiento'?", options: ["Fabricación", "Límite para consumo seguro", "Fecha de venta", "Apertura"], correctIndex: 1 },
        { id: 109, text: "¿Dónde almacenar medicamentos en casa?", options: ["Baño", "Cocina", "Lugar fresco y seco", "Al sol"], correctIndex: 2 },
        { id: 110, text: "La sigla D.C.I. significa:", options: ["Denominación Común Internacional", "Dosis Común", "Dirección Central", "Droguería"], correctIndex: 0 }
      ],
      nivel2: [
        { id: 201, text: "Según D.S. 466, ¿quién asume la Dirección Técnica si falta el Q.F.?", options: ["Auxiliar experto", "Nadie (Farmacia debe cerrar)", "Dueño", "Alumno"], correctIndex: 1 },
        { id: 202, text: "¿Temperatura ambiental máxima en sala de ventas?", options: ["20°C", "25°C", "30°C", "18°C"], correctIndex: 1 },
        { id: 203, text: "El Auxiliar de Farmacia debe acreditar experiencia de:", options: ["6 meses", "1 año", "2 años", "3 meses"], correctIndex: 1 },
        { id: 204, text: "¿Qué libro es OBLIGATORIO para uso del público?", options: ["Control de Psicotrópicos", "Reclamos y Sugerencias", "Ventas", "Asistencia"], correctIndex: 1 },
        { id: 205, text: "La prohibición de la 'Canela' se refiere a:", options: ["Prohibido vender canela en rama", "Prohibido dar incentivos económicos por marcas específicas", "Prohibido vender genéricos", "Prohibido descuentos a 3ra edad"], correctIndex: 1 },
        { id: 206, text: "¿Es legal fraccionar medicamentos (venta por blíster)?", options: ["No, nunca", "Sí, bajo supervisión Q.F. en área exclusiva", "Sí, en el mesón libremente", "Solo si es urgente"], correctIndex: 1 },
        { id: 207, text: "Si un cliente pide cambiar un remedio de marca por un bioequivalente:", options: ["No se puede", "Es obligatorio ofrecer la alternativa bioequivalente", "Solo si el médico autoriza", "Depende del stock"], correctIndex: 1 },
        { id: 208, text: "¿Dónde deben estar los medicamentos de Venta Directa?", options: ["Ocultos", "En góndolas o estanterías accesibles al público", "En la bodega", "Solo en caja"], correctIndex: 1 },
        { id: 209, text: "¿Quién puede dirigir un Almacén Farmacéutico?", options: ["Auxiliar", "Práctico de Farmacia", "Enfermera", "Dueño"], correctIndex: 1 },
        { id: 210, text: "¿Qué debe incluir obligatoriamente el envase de un medicamento?", options: ["Foto del dueño", "El precio de venta", "Publicidad", "Horario de la farmacia"], correctIndex: 1 },
        { id: 211, text: "¿Cuánto tiempo debe ejercer el DT su cargo diariamente?", options: ["2 horas", "4 horas", "Al menos 8 horas (o todo el horario)", "Solo cuando quiera"], correctIndex: 2 },
        { id: 212, text: "El Botiquín es un recinto destinado a:", options: ["Venta al público", "Uso interno de instituciones (clínicas, barcos)", "Fabricación", "Importación"], correctIndex: 1 },
        { id: 213, text: "¿Qué se prohíbe fraccionar?", options: ["Paracetamol", "Hormonas y oncológicos", "Ibuprofeno", "Vitaminas"], correctIndex: 1 },
        { id: 214, text: "Ante una receta ilegible, ¿qué hace el auxiliar?", options: ["Despacha lo que cree entender", "Pregunta al paciente", "No despacha y deriva al Q.F.", "Llama a otra farmacia"], correctIndex: 2 },
        { id: 215, text: "Los medicamentos deben almacenarse:", options: ["En el suelo", "En estantes, tarimas o pallets (nunca suelo directo)", "Al sol", "Junto a la comida"], correctIndex: 1 }
      ],
      nivel3: [
        { id: 301, text: "¿Qué símbolo identifica a los ESTUPEFACIENTES?", options: ["Estrella Verde", "Estrella Roja (5 puntas)", "Círculo Rojo", "Cruz Negra"], correctIndex: 1 },
        { id: 302, text: "¿Qué símbolo identifica a los PSICOTRÓPICOS?", options: ["Estrella Verde (5 puntas)", "Estrella Roja", "Triángulo Amarillo", "Ninguno"], correctIndex: 0 },
        { id: 303, text: "¿Cuál es la validez de una Receta Cheque?", options: ["60 días", "30 días corridos", "15 días", "1 año"], correctIndex: 1 },
        { id: 304, text: "¿Cómo se deben almacenar los Estupefacientes y Psicotrópicos?", options: ["En estantería abierta", "Bajo llave", "En el refrigerador siempre", "En el mesón"], correctIndex: 1 },
        { id: 305, text: "El Clonazepam y Diazepam pertenecen a la lista:", options: ["Lista I", "Lista II", "Lista III", "Lista IV"], correctIndex: 3 },
        { id: 306, text: "¿Con qué receta se venden las Benzodiazepinas (Lista IV)?", options: ["Receta Cheque", "Receta Médica Retenida", "Receta Simple", "Sin Receta"], correctIndex: 1 },
        { id: 307, text: "Si un jarabe de Codeína tiene más de 60mg por dosis, ¿qué receta usa?", options: ["Simple", "Retenida", "Cheque", "No se vende"], correctIndex: 2 },
        { id: 308, text: "Los Psicotrópicos de Lista II (Anfetaminas) se venden con:", options: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Vale vista"], correctIndex: 2 },
        { id: 309, text: "¿Quién debe despachar personalmente las Recetas Cheque?", options: ["Cualquier auxiliar", "El cajero", "El Director Técnico (Q.F.)", "El alumno"], correctIndex: 2 },
        { id: 310, text: "¿Está permitido entregar muestras médicas de Estupefacientes?", options: ["Sí", "No (salvo excepciones ISP)", "Solo a amigos", "Depende del médico"], correctIndex: 1 },
        { id: 311, text: "¿Qué debe hacer si sospecha que una Receta Cheque es falsa?", options: ["Vender igual", "No despachar, retener y denunciar", "Devolverla al cliente", "Romperla"], correctIndex: 1 },
        { id: 312, text: "La Morfina es un:", options: ["Psicotrópico Lista IV", "Estupefaciente", "Venta Directa", "Cosmético"], correctIndex: 1 },
        { id: 313, text: "¿De qué color es la Receta Cheque para uso en Farmacia?", options: ["Café", "Amarillo", "Rojo", "Azul"], correctIndex: 1 },
        { id: 314, text: "El Libro de Control de Estupefacientes es:", options: ["Opcional", "Obligatorio", "Solo digital", "No existe"], correctIndex: 1 },
        { id: 315, text: "Para importar estupefacientes se requiere autorización de:", options: ["ISP", "Aduana solamente", "Municipalidad", "SII"], correctIndex: 0 },
        { id: 316, text: "¿Qué lista de psicotrópicos está prohibida (sin uso médico)?", options: ["Lista I", "Lista II", "Lista III", "Lista IV"], correctIndex: 0 },
        { id: 317, text: "El Alprazolam se identifica con:", options: ["Estrella Roja", "Estrella Verde", "Sin símbolo", "Círculo Azul"], correctIndex: 1 },
        { id: 318, text: "¿Puede un Dentista recetar Clonazepam?", options: ["No", "Sí, con Receta Retenida", "Sí, con Receta Cheque", "Solo antibióticos"], correctIndex: 1 },
        { id: 319, text: "¿Edad mínima para retirar un medicamento controlado?", options: ["15 años", "18 años (con Cédula)", "21 años", "Cualquier edad"], correctIndex: 1 },
        { id: 320, text: "¿Cuántos productos estupefacientes se pueden prescribir por Receta Cheque?", options: ["Uno solo", "Dos", "Tres", "Los que quepan"], correctIndex: 0 },
        { id: 321, text: "La 'Ruta y Transporte' de estupefacientes debe ser autorizada por:", options: ["Carabineros", "Servicio de Salud (SEREMI)", "El transportista", "Nadie"], correctIndex: 1 },
        { id: 322, text: "¿Las recetas de controlados pueden tener enmiendas?", options: ["Sí, si se entienden", "No, deben ser íntegras", "Solo si el médico firma al lado", "Con liquid paper"], correctIndex: 1 },
        { id: 323, text: "¿Qué sucede con la Receta Retenida después de la venta?", options: ["Se devuelve al cliente", "Se bota", "Se archiva y custodia en la farmacia", "Se envía al médico"], correctIndex: 2 },
        { id: 324, text: "¿Quién aprueba las cuotas anuales de importación de drogas?", options: ["El ISP", "La Farmacia", "El Laboratorio", "El Ministerio de Hacienda"], correctIndex: 0 },
        { id: 325, text: "El Fenobarbital (Barbitúrico) es:", options: ["Lista I", "Lista II", "Lista III (Depresor)", "Venta Directa"], correctIndex: 2 }
      ],
      nivel4: [
        { id: 401, text: "CÁLCULO DE FRASCOS: Receta dice 'Polivitamínico 5 ml al día por 2 meses (60 días)'. Frasco trae 100 ml. ¿Cuántos frascos necesita?", options: ["1 Frasco", "2 Frascos", "3 Frascos", "4 Frascos"], correctIndex: 2 },
        { id: 402, text: "FRACCIONAMIENTO: 'Propranolol 40mg: tomar 1/2 comprimido en la mañana y 1 en la noche, por 3 meses (90 días)'. Caja trae 20 comprimidos. ¿Cuántas cajas necesita?", options: ["5 cajas", "6 cajas", "7 cajas", "8 cajas"], correctIndex: 2 },
        { id: 403, text: "PEDIATRÍA (PESO): Niño de 20 kg. Dosis: 50 mg/kg/día repartido en 4 tomas. ¿Cuántos mg administra en CADA dosis?", options: ["1000 mg", "500 mg", "250 mg", "125 mg"], correctIndex: 2 },
        { id: 404, text: "CÁLCULO GOTAS: Receta '23 gotas c/12hrs por 3 meses (90 días)'. Frasco trae 25ml (500 gotas aprox). ¿Cuántos frascos necesita?", options: ["5 Frascos", "7 Frascos", "9 Frascos", "12 Frascos"], correctIndex: 2 },
        { id: 405, text: "INSULINA (DURACIÓN): Paciente usa 40 UI diarias. El lápiz trae 3 ml (100 UI/ml). ¿Cuántos lápices necesita para 1 mes (30 días)?", options: ["2 Lápices", "3 Lápices", "4 Lápices", "5 Lápices"], correctIndex: 2 },
        { id: 406, text: "CONVERSIÓN: ¿A cuántos miligramos (mg) equivalen 0.005 kg?", options: ["5 mg", "50 mg", "500 mg", "5.000 mg"], correctIndex: 3 },
        { id: 407, text: "ENFERMERÍA: Pasar 500 ml de suero en 4 horas con equipo estándar (20 gotas/ml). Velocidad de goteo:", options: ["20 gotas/min", "42 gotas/min", "60 gotas/min", "83 gotas/min"], correctIndex: 1 },
        { id: 408, text: "DILUCIÓN: Si diluyo 1 gramo de antibiótico en 5 ml de lidocaína. ¿Qué concentración final tengo por ml?", options: ["100 mg/ml", "200 mg/ml", "500 mg/ml", "50 mg/ml"], correctIndex: 1 },
        { id: 409, text: "MEDIDAS CASERAS: Si la indicación dice '1 cucharada de postre'. ¿A qué volumen equivale?", options: ["5 ml", "10 ml", "15 ml", "20 ml"], correctIndex: 1 },
        { id: 410, text: "PORCENTAJE: ¿Qué significa que una solución sea al 2%?", options: ["2 gramos en 100 ml", "2 mg en 100 ml", "2 gramos en 1 litro", "20 mg en 1 ml"], correctIndex: 0 },
        { id: 411, text: "STOCK DE SEGURIDAD: Vendo 5 cajas diarias de un producto crítico. El proveedor tarda 4 días en reponer. ¿Stock mínimo para no quebrar?", options: ["10 cajas", "15 cajas", "20 cajas", "25 cajas"], correctIndex: 2 },
        { id: 412, text: "DOSIS MÁXIMA: La dosis máxima diaria de Paracetamol es 4g. Si tengo comprimidos de 1g, ¿cuántos es el máximo?", options: ["2", "4", "6", "8"], correctIndex: 1 },
        { id: 413, text: "REGLA DE TRES: Dosis médica 120 mg. Jarabe disponible 200mg/5ml. ¿Qué volumen administra?", options: ["2 ml", "3 ml", "4 ml", "5 ml"], correctIndex: 1 },
        { id: 414, text: "DURACIÓN: Una caja trae 30 comprimidos. La dosis es 1 cada 8 horas. ¿Para cuántos días alcanza?", options: ["5 días", "7 días", "10 días", "30 días"], correctIndex: 2 },
        { id: 415, text: "NORMA ALMACENAMIENTO: ¿Con qué frecuencia mínima se deben registrar las temperaturas (refrigerador y sala)?", options: ["1 vez al día", "2 veces al día (AM/PM)", "Semanalmente", "Mensualmente"], correctIndex: 1 },
        { id: 416, text: "DEFINICIÓN: ¿Qué es la 'Farmacotecnia'?", options: ["Ciencia que estudia la venta de remedios", "Ciencia que estudia las manipulaciones para dar forma adecuada a los medicamentos", "Estudio de los precios", "Estudio de la anatomía"], correctIndex: 1 },
        { id: 417, text: "FORMAS FARMACÉUTICAS: ¿Qué caracteriza a las formas 'Unidosis'?", options: ["Permiten una dosis única por unidad (ej: comprimido)", "Vienen en frascos grandes", "Son solo líquidas", "Son para una sola enfermedad"], correctIndex: 0 },
        { id: 418, text: "VÍAS: ¿Qué define a la vía de administración 'Parenteral'?", options: ["Se traga", "Se inhala", "Se administra rompiendo la barrera de la piel (inyectable)", "Se aplica en la piel"], correctIndex: 2 },
        { id: 419, text: "VÍA INTRATECAL: ¿Dónde se deposita el fármaco?", options: ["En la vena", "En el músculo", "Alrededor de la médula espinal (LCR)", "Bajo la lengua"], correctIndex: 2 },
        { id: 420, text: "PREPARADOS: ¿Diferencia clave entre 'Oficinal' y 'Magistral'?", options: ["El precio", "Magistral es para un paciente específico; Oficinal es fórmula estándar", "Oficinal es con receta cheque", "No hay diferencia"], correctIndex: 1 },
        { id: 421, text: "INYECTABLES: ¿Qué requisito visual es indispensable en una solución inyectable?", options: ["Debe ser colorida", "Debe ser límpida y exenta de partículas", "Debe tener espuma", "Debe ser opaca"], correctIndex: 1 },
        { id: 422, text: "PRODUCCIÓN: ¿Qué es un 'Lote'?", options: ["Un grupo de trabajadores", "Una cantidad definida de producto homogénea en su fabricación", "Un conjunto de recetas", "Un tipo de farmacia"], correctIndex: 1 },
        { id: 423, text: "FARMACOLOGÍA: ¿Qué es el 'Efecto de Primer Paso'?", options: ["La primera vez que se toma un remedio", "La degradación del fármaco en el hígado antes de llegar a la sangre", "La absorción en el estómago", "El efecto placebo"], correctIndex: 1 },
        { id: 424, text: "ESTABILIDAD: Los 4 factores principales que dañan los medicamentos son:", options: ["Calor, Frío, Viento, Lluvia", "Temperatura, Humedad, Luz y Tiempo", "Precio, Marca, Laboratorio, Envase", "Ninguna de las anteriores"], correctIndex: 1 },
        { id: 425, text: "INSULINA EN USO: Una vez abierto el lápiz, ¿cómo se puede almacenar?", options: ["Obligatoriamente refrigerado", "En el congelador", "A temperatura ambiente (aprox 4 semanas)", "Al sol"], correctIndex: 2 },
        { id: 426, text: "CONGELACIÓN: ¿Qué sucede si una vacuna se congela por error a 0°C?", options: ["Se conserva mejor", "No pasa nada si se descongela", "Pierde su potencia irreversiblemente y debe eliminarse", "Se vuelve tóxica"], correctIndex: 2 },
        { id: 427, text: "DEVOLUCIONES: Los productos devueltos o vencidos deben ir a:", options: ["La estantería de venta", "La basura común", "Un área de segregación o cuarentena", "Se regalan"], correctIndex: 2 },
        { id: 428, text: "AUTORIZACIÓN: ¿Cuánto dura la autorización sanitaria de una farmacia?", options: ["1 año", "3 años, renovables automáticamente", "5 años", "Indefinida"], correctIndex: 1 },
        { id: 429, text: "PROFESIONALES: ¿Quién puede recetar lentes y fármacos oculares tópicos?", options: ["Enfermera", "Tecnólogo Médico con mención en Oftalmología", "Auxiliar de Óptica", "Nadie"], correctIndex: 1 },
        { id: 430, text: "DENTISTAS: ¿Qué stock de psicotrópicos pueden mantener para urgencias?", options: ["Ninguno", "50 unidades", "Máximo 150 unidades", "Ilimitado"], correctIndex: 2 },
        { id: 431, text: "LIBROS: ¿Qué Lista permite un 'registro simplificado' (totales diarios)?", options: ["Lista I", "Lista II", "Lista III", "Lista IV (Benzodiazepinas)"], correctIndex: 3 },
        { id: 432, text: "IMPORTACIÓN: Validez del certificado oficial de importación de estupefacientes:", options: ["30 días", "4 meses", "6 meses", "1 año"], correctIndex: 1 },
        { id: 433, text: "RECETA CHEQUE: ¿Se permiten enmiendas (correcciones)?", options: ["Sí, si se firma al lado", "No, debe ser íntegra y manuscrita sin borrones", "Solo en la fecha", "Depende del criterio"], correctIndex: 1 },
        { id: 434, text: "FARMACIA MÓVIL: ¿Qué tiene prohibido vender?", options: ["Paracetamol", "Psicotrópicos, Estupefacientes y Recetario Magistral", "Vitaminas", "Insumos"], correctIndex: 1 },
        { id: 435, text: "PUBLICIDAD: ¿Qué medicamentos pueden tener publicidad masiva?", options: ["Todos", "Solo los de Venta Directa (OTC)", "Los antibióticos", "Los bioequivalentes"], correctIndex: 1 },
        { id: 436, text: "FRACCIONAMIENTO: El envase entregado al paciente debe incluir obligatoriamente:", options: ["Precio", "Nombre paciente, fecha vencimiento y lote original", "Teléfono del médico", "Marca del laboratorio"], correctIndex: 1 },
        { id: 437, text: "DESTRUCCIÓN: ¿Cómo se eliminan los estupefacientes vencidos?", options: ["A la basura", "Por el desagüe", "A través de empresas autorizadas por SEREMI", "Se queman en el patio"], correctIndex: 2 },
        { id: 438, text: "TRANSPORTE: Droga estupefaciente salida de aduana requiere certificado de:", options: ["Carabineros", "Ruta y Transporte autorizado por el Servicio de Salud", "El transportista", "Peaje"], correctIndex: 1 },
        { id: 439, text: "DEFINICIÓN LEGAL: La Ley 20.724 define a la farmacia como:", options: ["Un comercio", "Un centro de salud", "Un almacén", "Una empresa"], correctIndex: 1 },
        { id: 440, text: "SUSPENSIÓN: En farmacotecnia, una suspensión se caracteriza porque:", options: ["Está totalmente disuelta", "El principio activo no está disuelto, sino disperso (requiere agitar)", "Es transparente", "Es un gas"], correctIndex: 1 }
      ]
    }
  },
  {
    id: "diferencia-auxiliar-tecnico-farmacia",
    titulo: "Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile",
    contenido: `
Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile
(Explicado Fácil)

Una de las dudas más comunes entre quienes quieren trabajar en farmacia es esta: ¿Cuál es la diferencia entre Auxiliar de Farmacia y Técnico en Farmacia?
Aunque ambos trabajan en farmacias, no son lo mismo, tienen distintas funciones, formación y responsabilidades legales. Aquí te lo explico claro y sin enredos.

¿Qué es un Auxiliar de Farmacia?

El Auxiliar de Farmacia es la persona que trabaja en farmacia apoyando al Químico Farmacéutico, principalmente en:
• Atención de público
• Dispensación de medicamentos bajo supervisión
• Reposición y bodegaje
• Revisión de fechas de vencimiento
• Manejo de stock
• Orientación básica al paciente

En Chile, el Auxiliar no necesita estudiar en instituto, pero sí debe:
• Tener enseñanza media completa
• Contar con mínimo 1 año de experiencia en farmacia
• Rendir y aprobar el examen ante la SEREMI de Salud
• Obtener su credencial oficial de Auxiliar de Farmacia, según el Decreto Supremo N° 466

¿Qué es un Técnico en Farmacia?

El Técnico en Farmacia es un profesional que sí estudia una carrera formal, generalmente:
• En institutos profesionales o centros de formación técnica
• Durante 2 a 3 años
• Con malla académica, prácticas y título técnico

Sus funciones incluyen:
• Apoyar directamente al Químico Farmacéutico
• Preparación de medicamentos
• Control de bodegas
• Gestión de inventarios
• Atención clínica básica
• Apoyo en procesos técnicos más complejos

El Técnico no rinde examen en la SEREMI, ya que su título lo habilita directamente.

Diferencias Claves entre Auxiliar y Técnico en Farmacia

Auxiliar de Farmacia
• No estudia carrera formal
• Aprende trabajando
• Rinde examen SEREMI
• Debe acreditar 1 año de experiencia
• Funciones básicas y apoyo

Técnico en Farmacia
• Estudia 2 a 3 años
• Formación académica
• No rinde examen
• Tiene título profesional
• Funciones técnicas más avanzadas

¿Cuál es mejor?

No es que uno sea "mejor" que otro. Todo depende de tu situación:
Si quieres entrar rápido al rubro, el camino de Auxiliar de Farmacia es más directo. Si buscas formación técnica completa, el camino es el Técnico en Farmacia.
Ambos trabajan en farmacia, ambos pueden crecer y ambos son fundamentales para el funcionamiento del sistema.

Conclusión Clara

✓ El Auxiliar de Farmacia se forma en la práctica + examen SEREMI
✔ El Técnico en Farmacia se forma en instituto + título
Ambos trabajan bajo supervisión del Químico Farmacéutico
Ambos pueden desarrollarse profesionalmente en farmacias
    `,
    enlacesInternos: [],
    enlacesExternos: [],
    quiz: { nivel1: [], nivel2: [], nivel3: [], nivel4: [] }
  },
  {
    id: "examen-competencia-seremi-preguntas-reales",
    titulo: "Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?",
    contenido: `
Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?

Si estás leyendo esto, probablemente estás a punto de enfrentar el paso más importante para tu habilitación profesional: el Examen de Competencia ante la SEREMI de Salud.

Es normal sentir ansiedad. En internet circulan muchos mitos, pero aquí vamos a analizar, basándonos en la normativa oficial (Decretos 466, 404 y 405), cuáles son los temas que sí o si te van a preguntar.

No necesitas suerte, necesitas estrategia. Aquí tienes los 3 pilares fundamentales que debes dominar para aprobar.

1. Legislación Farmacéutica (El filtro principal)

La mayoría de los reprobados caen aquí. La autoridad sanitaria necesita saber si conoces las reglas del juego para no cometer errores legales.

Lo que debes dominar:
• Diferencia entre Receta Cheque y Receta Retenida: No basta con saber el color de la estrella. Debes saber la vigencia (30 días), los libros de control donde se registran y qué decretos las regulan (Decreto 404 para estupefacientes y 405 para psicotrópicos).
• Roles en la Farmacia: ¿Qué puede hacer el auxiliar y qué es exclusivo del Químico Farmacéutico? (Pista: el auxiliar no puede realizar indicaciones terapéuticas ni "recetar").
• Tipos de Establecimientos: Diferencia legal entre Farmacia, Almacén Farmacéutico y Botiquín.

Pregunta típica: "Si llega una receta de Clonazepam (Lista IV) emitida hace 40 días, ¿la puede despachar?"
> Respuesta correcta: No. La vigencia legal máxima para recetas de productos controlados es de 30 días corridos.

2. Almacenamiento y Cadena de Frío

Este es un tema técnico crítico. Un error aquí pone en riesgo la salud pública, por lo que los evaluadores son muy estrictos.

Datos clave que debes memorizar:
• Rango de Temperatura: Los refrigeradores para insulinas, vacunas y colirios deben mantenerse estrictamente entre 2°C y 8°C.
• ¿Qué hacer si se corta la luz?: Debes conocer el protocolo de quiebre de cadena de frío (no abrir la puerta del refrigerador, registrar la temperatura máxima alcanzada y consultar al Director Técnico antes de vender nada).
• FEFO (First Expired, First Out): El sistema de rotación donde lo primero que vence es lo primero que se vende.

3. Matemáticas Farmacéuticas (Cálculo de Dosis)

No te pedirán cálculo integral, pero sí debes manejar la "Regla de Tres" a la perfección.

Ejemplo práctico:
Si el médico receta "Amoxicilina 500mg cada 8 horas por 7 días", debes ser capaz de calcular rápidamente cuántos comprimidos o frascos necesita el paciente para el tratamiento completo.
• Cálculo: 3 veces al día x 7 días = 21 comprimidos. Si la caja trae 16, debes informar al paciente que necesitará 2 cajas.

Consejos Finales para el Día del Examen

1. Vocabulario Técnico: No digas "remedios", di "medicamentos" o "especialidades farmacéuticas". No digas "el doctor de la farmacia", di "Director Técnico".

2. Seguridad ante todo: Ante una pregunta con trampa (ej: "¿Vendería antibióticos sin receta si el paciente tiene mucho dolor?"), la respuesta siempre debe priorizar la normativa legal por sobre la venta comercial.

3. Estudia los Decretos: No te quedes solo con los apuntes de tu curso. Lee directamente el Decreto 466; es la fuente de la verdad.

¿Te estás preparando para el examen? En AuxiliarPro tenemos simuladores basados en preguntas reales para que practiques antes del día clave.
    `,
    enlacesInternos: [],
    enlacesExternos: [],
    quiz: { nivel1: [], nivel2: [], nivel3: [], nivel4: [] }
  },
  {
    id: "que-es-el-decreto-466-farmacias-chile",
    titulo: "¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer",
    contenido: `
¿Qué es el Decreto 466? La 'Biblia' que todo Auxiliar debe conocer

Para quienes operamos dentro del sistema de salud chileno, el Decreto Supremo N° 466 no es simplemente un texto legal; es la columna vertebral de nuestra práctica profesional diaria. Como columna de investigación para AuxiliarPro, hemos desglosado este reglamento para entender por qué cada estante, cada temperatura y cada firma en una receta tiene su origen en este documento publicado por el Ministerio de Salud.

¿Qué establece el Decreto 466 sobre la Farmacia como Centro de Salud?

El Decreto 466 define que las farmacias son centros de salud y establece las condiciones sanitarias mínimas para su funcionamiento. Entre sus puntos más críticos, destaca la obligación de contar con un Químico Farmacéutico Director Técnico (DT) presente durante todo el horario de funcionamiento, quien actúa como responsable sanitario ante la autoridad.

Habilitación del Auxiliar de Farmacia: El Artículo 71

Un punto de gran interés es la habilitación profesional para rendir el examen ante la SEREMI de Salud. Si aún no tienes claro si este es tu camino, te recomendamos revisar nuestra guía sobre las diferencias entre Auxiliar y Técnico en Farmacia. Según la normativa, el postulante debe cumplir con:
• Ser mayor de 18 años y poseer Cédula de Identidad vigente.
• Contar con Licencia de Enseñanza Media completa.
• Acreditar un año de práctica en farmacia certificado por el DT del establecimiento.

Estándares de Almacenamiento y Calidad Exigidos

El análisis del reglamento revela estándares críticos que los fiscalizadores de la SEREMI exigen para garantizar la estabilidad de los fármacos:
• Almacenamiento: Los medicamentos jamás deben tocar el suelo; deben ubicarse en estantes o tarimas que permitan la ventilación.
• Control Térmico: La temperatura ambiental en sala no debe exceder los 25°C.
• Cadena de Frío: Medicamentos sensibles deben mantenerse entre 2°C y 8°C. Puedes consultar más detalles técnicos en el sitio oficial de la SEREMI en Línea.

Conclusión de la Columna

Dominar el Decreto 466 es la diferencia entre ser un vendedor y ser un profesional de la salud. Este reglamento asegura que el paciente reciba un medicamento seguro y eficaz. Si aspiras a obtener tu credencial en 2026, entender esta normativa legal es tu primer gran paso al éxito. Puedes descargar y estudiar este decreto en nuestra biblioteca de recursos.
    `,
    enlacesInternos: ["/blog", "/biblioteca"],
    enlacesExternos: ["https://seremienlinea.minsal.cl"],
    quiz: { nivel1: [], nivel2: [], nivel3: [], nivel4: [] }
  }
];

export const FAQS = [
  {
    q: "¿Dónde hago el trámite del examen?",
    a: "El trámite se encuentra disponible 100% en línea ingresando con tu Clave Única al portal seremienlinea.minsal.cl. Si no tienes cuenta, debes seleccionar la opción \"Registrarse\" y completar el formulario con tus datos personales y un email válido, donde recibirás tus credenciales de acceso."
  },
  {
    q: "¿Qué documentos necesito subir a la plataforma?",
    a: "Para solicitar la certificación, debes adjuntar en formato digital los siguientes antecedentes obligatorios: Certificado de enseñanza media completa. Copia del contrato de trabajo o certificado del empleador que acredite antigüedad laboral. Certificado de desempeño laboral emitido y firmado por un Químico Farmacéutico que acredite al menos 1 año de desempeño efectivo. Foto tipo carnet."
  },
  {
    q: "¿Cuál es el costo detallado del trámite?",
    a: "El proceso tiene costos diferenciados según la etapa: Derecho a Examen: $19.100. Inscripción en el Registro (incluye primer certificado): $47.600. Diploma o Carnet: $29.700. Certificado adicional: $29.700. Validación de documentos: $19.100."
  },
  {
    q: "¿Cómo sé si aprobé y qué pasa después?",
    a: "Tras rendir el examen y si este es aprobado, la SEREMI de Salud le notificará y quedará disponible un segundo trámite por la diferencia de arancel que corresponde a la Resolución de Autorización para el ejercicio de la profesión, incluyendo su carnet y certificado oficial."
  }
];

export const LEVELS = articulos[0].quiz;
