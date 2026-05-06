// vademecumData.js

// 1. OPCIONES LEGALES Y NORMATIVAS (CHILE - ISP DS 466, 404, 405)
export const OPCIONES_DESPLEGABLES = {
  condicionVenta: [
    "Venta Directa",
    "Receta Médica",
    "Receta Médica Retenida",
    "Receta Cheque"
  ],
  listaControl: [
    "N/A",
    "Lista I",
    "Lista II",
    "Lista III",
    "Lista IV",
    "Control de Precursores"
  ]
};

// 2. BLOQUE I: DIGESTIVO Y RESPIRATORIO
export const BLOQUE_I = [
  {
    nombre: "Esomeprazol 20 mg",
    principio_activo: "Esomeprazol Magnésico",
    categoria: "Inhibidor de la Bomba de Protones (IBP)",
    para_que_sirve: "Tratamiento de la enfermedad por reflujo gastroesofágico (ERGE), cicatrización de úlceras gástricas y erradicación de Helicobacter pylori (en terapia combinada).",
    posologia: "20 a 40 mg una vez al día. Es estrictamente necesario tomarlo 30 a 60 minutos antes de la primera comida del día (desayuno) para bloquear las bombas de ácido antes de que se activen.",
    contraindicaciones: "Hipersensibilidad a los benzimidazoles. No coadministrar con Atazanavir o Nelfinavir (antirretrovirales) ya que reduce drásticamente su absorción.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Explicar al cliente que si se lo toma junto con la comida o después de comer, el medicamento pierde hasta un 50% de su eficacia. Las cápsulas/comprimidos no se deben masticar.",
    cross_selling: "Probióticos multicepa para proteger la flora intestinal en tratamientos prolongados."
  },
  {
    nombre: "Famotidina 20 mg",
    principio_activo: "Famotidina",
    categoria: "Antagonista de los Receptores H2",
    para_que_sirve: "Alivio sintomático de la acidez estomacal, prevención y tratamiento de úlceras gástricas y duodenales benignas.",
    posologia: "20 mg cada 12 horas o 40 mg en una sola toma nocturna antes de dormir.",
    contraindicaciones: "Insuficiencia renal grave (requiere ajuste de dosis).",
    condicion_venta: "Venta Directa / Receta Médica (dependiendo de la concentración y caja)",
    lista_control: "N/A",
    tips_venta: "Es una excelente alternativa para recomendar cuando el paciente no tolera los efectos secundarios de los IBP (como el Omeprazol). Actúa rápido en cuadros de acidez nocturna.",
    cross_selling: "Antiácidos masticables de efecto inmediato (ej. sales de aluminio/magnesio) para el alivio durante el día."
  },
  {
    nombre: "Domperidona 10 mg",
    principio_activo: "Domperidona",
    categoria: "Procinético / Antiemético",
    para_que_sirve: "Alivio de los síntomas de náuseas y vómitos, sensación de plenitud epigástrica (pesadez estomacal) y malestar abdominal superior.",
    posologia: "10 mg hasta 3 veces al día. Dosis máxima 30 mg diarios. Debe tomarse de 15 a 30 minutos antes de las comidas.",
    contraindicaciones: "Prolongación del intervalo QT (arritmias), hemorragia gastrointestinal, tumores pituitarios liberadores de prolactina.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Recalcar la importancia de tomarlo ANTES de comer; si se toma con el estómago lleno, su absorción se retrasa. Explicar que acelera el vaciado del estómago, quitando la sensación de 'estar empachado'.",
    cross_selling: "Sales de hidratación oral (si el cuadro se acompaña de vómitos a repetición)."
  },
  {
    nombre: "Simeticona 40 mg",
    principio_activo: "Simeticona (Dimeticona activada)",
    categoria: "Antiflatulento",
    para_que_sirve: "Alivio sintomático de los gases (meteorismo), distensión abdominal, cólicos por gases y preparación para ecografías abdominales.",
    posologia: "Adultos: 40 a 80 mg después de cada comida principal y antes de acostarse. Masticar bien antes de tragar (si es comprimido masticable).",
    contraindicaciones: "Obstrucción intestinal o perforación gastrointestinal conocida.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Ideal para embarazadas y pacientes polimedicados, ya que su efecto es 100% físico en el intestino (rompe las burbujas de gas) y NO se absorbe en el torrente sanguíneo, siendo extremadamente seguro.",
    cross_selling: "Infusiones digestivas (Manzanilla, Anís, Menta), probióticos o enzimas digestivas."
  },
  {
    nombre: "Pancreatina",
    principio_activo: "Pancreatina (Amilasa, Lipasa, Proteasa)",
    categoria: "Enzimas Digestivas",
    para_que_sirve: "Tratamiento de la insuficiencia pancreática exocrina, digestiones lentas y pesadas, y apoyo en la absorción de grasas y proteínas.",
    posologia: "1 a 2 grageas o cápsulas DURANTE o inmediatamente después de las comidas principales.",
    contraindicaciones: "Pancreatitis aguda en fase inicial, alergia a proteínas de origen porcino.",
    condicion_venta: "Venta Directa / Receta Médica (según concentración)",
    lista_control: "N/A",
    tips_venta: "Advertir al cliente que NUNCA mastique ni retenga el comprimido en la boca, ya que las enzimas activas pueden causar irritación severa o ulceración en la mucosa oral.",
    cross_selling: "Hepatoprotectores naturales (Silimarina, Alcachofa) para un apoyo digestivo integral."
  },
  {
    nombre: "Glibenclamida 5 mg",
    principio_activo: "Glibenclamida",
    categoria: "Antidiabético Oral (Sulfonilurea)",
    para_que_sirve: "Tratamiento de la Diabetes Mellitus Tipo 2 cuando la dieta, el ejercicio y la pérdida de peso no logran controlar la glicemia.",
    posologia: "Inicio habitual de 2.5 a 5 mg al día, tomada inmediatamente antes o durante la comida principal (generalmente el desayuno o almuerzo).",
    contraindicaciones: "Diabetes Tipo 1, cetoacidosis diabética, insuficiencia hepática o renal severa, embarazo y lactancia.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Peligro de hipoglicemia: advertir al paciente que nunca debe saltarse la comida después de tomar el comprimido. Si siente sudores fríos, temblores o mareos, debe consumir azúcar rápidamente.",
    cross_selling: "Glucómetro, tiras reactivas, lancetas, tabletas de glucosa o caramelos para emergencias hipoglicémicas."
  },
  {
    nombre: "Sales de Rehidratación Oral",
    principio_activo: "Glucosa, Cloruro de Sodio, Cloruro de Potasio, Citrato",
    categoria: "Rehidratante",
    para_que_sirve: "Prevención y tratamiento de la deshidratación causada por diarrea aguda, vómitos excesivos o sudoración extrema.",
    posologia: "Disolver el contenido de un sobre en exactamente 1 litro de agua hervida y fría. Beber a sorbos pequeños (frecuentes) según el volumen de líquido perdido.",
    contraindicaciones: "Insuficiencia renal aguda o crónica severa, íleo paralítico, vómitos incoercibles (requiere hidratación intravenosa).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Regla de oro del mesón: la mezcla solo dura 24 horas a temperatura ambiente o en el refrigerador; después debe desecharse. No añadir azúcar, jugos ni bebidas isotónicas a la preparación.",
    cross_selling: "Probióticos (Saccharomyces boulardii) para acortar la duración de la diarrea, termómetro digital."
  },
  {
    nombre: "Picosulfato de Sodio 7.5mg/mL",
    principio_activo: "Picosulfato de Sodio",
    categoria: "Laxante Estimulante",
    para_que_sirve: "Tratamiento a corto plazo del estreñimiento agudo y facilitación de la evacuación intestinal.",
    posologia: "Adultos: 10 a 15 gotas en un poco de agua. Niños (bajo indicación médica): 5 a 10 gotas.",
    contraindicaciones: "Dolor abdominal de causa desconocida, obstrucción intestinal, apendicitis, deshidratación grave.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "El efecto tarda entre 8 a 12 horas. El consejo técnico clave es que el paciente lo tome por la noche, para producir la evacuación a la mañana siguiente sin interrumpir su día.",
    cross_selling: "Suplementos de fibra natural (Psyllium), cremas proctológicas si hay antecedentes de hemorroides."
  },
  {
    nombre: "Orlistat 120 mg",
    principio_activo: "Orlistat",
    categoria: "Inhibidor de Lipasas / Anti-obesidad",
    para_que_sirve: "Tratamiento de la obesidad y control de peso a largo plazo, en conjunto con una dieta hipocalórica.",
    posologia: "1 cápsula de 120 mg con el agua justa inmediatamente antes, durante o hasta 1 hora después de cada comida principal.",
    contraindicaciones: "Síndrome de malabsorción crónica, colestasis, lactancia.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Informa con tacto: si el cliente consume una comida muy alta en grasas, el medicamento bloqueará su absorción, lo que puede causar urgencia fecal, gases con manchado u oleosidad rectal severa.",
    cross_selling: "Suplementos multivitamínicos (vitaminas liposolubles A, D, E, K), ya que Orlistat disminuye su absorción. Indicar tomar las vitaminas al menos 2 horas después del fármaco."
  },
  {
    nombre: "Trimebutina 200 mg",
    principio_activo: "Trimebutina Maleato",
    categoria: "Antiespasmódico / Modulador de la Motilidad",
    para_que_sirve: "Tratamiento del Síndrome de Intestino Irritable (SII), restaurando el ritmo normal del intestino (tanto en fase de diarrea como de estreñimiento).",
    posologia: "1 comprimido de 200 mg 15 a 30 minutos antes de las comidas, hasta 3 veces al día.",
    contraindicaciones: "Hipersensibilidad al principio activo. Precaución en el primer trimestre del embarazo.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "A diferencia de otros antiespasmódicos, la Trimebutina es un 'regulador inteligente': si el intestino está lento (constipación) lo acelera, y si está rápido (diarrea) lo frena. Tomar siempre antes de comer.",
    cross_selling: "Probióticos multicepa, simeticona (si hay alta presencia de gases asociados al SII)."
  },
  {
    nombre: "Bromuro de Ipratropio 20 mcg",
    principio_activo: "Bromuro de Ipratropio",
    categoria: "Broncodilatador (Anticolinérgico Inhalado)",
    para_que_sirve: "Tratamiento de mantención y rescate del broncoespasmo reversible asociado a EPOC, bronquitis crónica y asma.",
    posologia: "2 inhalaciones (puff) 4 veces al día, según prescripción médica.",
    contraindicaciones: "Hipersensibilidad a la atropina o sus derivados. Precaución en pacientes con glaucoma de ángulo estrecho.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Crucial educar en el uso de la aerocámara, especialmente en adultos mayores. Si cae líquido del inhalador en los ojos, puede causar dilatación de pupilas y dolor ocular (riesgo de glaucoma).",
    cross_selling: "Aerocámara para adultos, toallitas desinfectantes para limpiar la boquilla."
  },
  {
    nombre: "Budesonida 200 mcg",
    principio_activo: "Budesonida",
    categoria: "Corticoide Inhalado (Preventivo)",
    para_que_sirve: "Tratamiento profiláctico y antiinflamatorio del asma bronquial. NO sirve para aliviar crisis agudas.",
    posologia: "1 a 2 inhalaciones, 2 veces al día (mañana y noche), según pauta médica estricta.",
    contraindicaciones: "Tuberculosis pulmonar activa, infecciones fúngicas o virales severas en las vías respiratorias.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Advertencia de mesón obligatoria: El paciente DEBE enjuagarse la boca y hacer gárgaras con agua después de cada uso y botarla, para evitar el desarrollo de candidiasis oral (hongos en la boca) y ronquera.",
    cross_selling: "Aerocámara, cepillo de dientes suave, colutorios sin alcohol."
  },
  {
    nombre: "Montelukast 10 mg",
    principio_activo: "Montelukast Sódico",
    categoria: "Antagonista de Receptores de Leucotrienos",
    para_que_sirve: "Tratamiento preventivo crónico del asma, prevención de la broncoconstricción inducida por el ejercicio y alivio de la rinitis alérgica.",
    posologia: "10 mg administrados en una sola toma al día, siempre por la noche.",
    contraindicaciones: "Hipersensibilidad al fármaco. No usar para revertir broncoespasmos en ataques agudos de asma.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Recalcar a los padres/pacientes que es un fármaco preventivo a largo plazo. No dilata los bronquios de inmediato. Se toma de noche porque el asma y las alergias empeoran en horas nocturnas.",
    cross_selling: "Soluciones salinas nasales (sterimar), vitaminas C y Zinc para refuerzo inmune."
  },
  {
    nombre: "Clorfenamina Maleato 4 mg",
    principio_activo: "Clorfenamina",
    categoria: "Antihistamínico de Primera Generación",
    para_que_sirve: "Tratamiento sintomático de alergias, rinitis, urticaria, picaduras de insectos y congestión nasal severa.",
    posologia: "Adultos: 1 comprimido (4 mg) cada 6 a 8 horas. No exceder 24 mg diarios.",
    contraindicaciones: "Glaucoma de ángulo estrecho, hipertrofia prostática sintomática, uso en recién nacidos o prematuros.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Es un antialérgico 'de la vieja escuela'. Atraviesa la barrera hematoencefálica, causando Fuerte SOMNOLENCIA. Advertir seriamente no conducir, no operar maquinaria ni mezclar con alcohol.",
    cross_selling: "Geles calmantes para picaduras (Calamina), suero fisiológico nasal."
  },
  {
    nombre: "Desloratadina 5 mg",
    principio_activo: "Desloratadina",
    categoria: "Antihistamínico de Tercera Generación",
    para_que_sirve: "Alivio rápido y prolongado de los síntomas de rinitis alérgica (estornudos, secreción nasal, picor ocular) y urticaria crónica sin causar sedación.",
    posologia: "1 comprimido (5 mg) una vez al día. Se puede tomar con o sin alimentos.",
    contraindicaciones: "Hipersensibilidad al principio activo o a la loratadina. Precaución en falla renal severa.",
    condicion_venta: "Venta Directa / Receta Médica (según presentación)",
    lista_control: "N/A",
    tips_venta: "A diferencia de la Clorfenamina, no da sueño, por lo que es la recomendación ideal para oficinistas, conductores o estudiantes que necesitan alivio antialérgico pero mantener la concentración.",
    cross_selling: "Lágrimas artificiales para la picazón ocular, pañuelos desechables con loción."
  },
  {
    nombre: "Cetirizina 10 mg",
    principio_activo: "Cetirizina Diclorhidrato",
    categoria: "Antihistamínico de Segunda Generación",
    para_que_sirve: "Tratamiento de los síntomas nasales y oculares de la rinitis alérgica estacional y perenne, y alivio de la urticaria crónica idiopática.",
    posologia: "Adultos y niños mayores de 12 años: 10 mg (1 comprimido) una vez al día.",
    contraindicaciones: "Pacientes con enfermedad renal grave (aclaramiento de creatinina < 10 ml/min).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Aunque es de segunda generación, en un 10-15% de los pacientes SÍ produce algo de somnolencia. Por protocolo de mesón, sugerir tomarla por la noche si no se conoce la reacción del paciente.",
    cross_selling: "Aerosoles de agua de mar para lavado nasal, cremas hidratantes para pieles atópicas."
  },
  {
    nombre: "Levocetirizina 5 mg",
    principio_activo: "Levocetirizina Diclorhidrato",
    categoria: "Antihistamínico de Tercera Generación",
    para_que_sirve: "Tratamiento eficaz de la rinitis alérgica y urticaria, siendo el enantiómero activo de la cetirizina (más potente a menor dosis).",
    posologia: "5 mg al día en una sola toma. No requiere ajuste con los alimentos.",
    contraindicaciones: "Insuficiencia renal grave, problemas hereditarios de intolerancia a la galactosa.",
    condicion_venta: "Receta Médica / Venta Directa",
    lista_control: "N/A",
    tips_venta: "Actúa más rápido y con un perfil de seguridad más limpio que la Cetirizina. Excelente opción para rinitis crónicas. Recordar que el efecto dura 24 horas continuas.",
    cross_selling: "Bloqueador solar hipoalergénico (las alergias suelen irritar la barrera cutánea)."
  },
  {
    nombre: "Pseudoefedrina 60 mg",
    principio_activo: "Pseudoefedrina Clorhidrato",
    categoria: "Descongestionante Sistémico",
    para_que_sirve: "Alivio temporal de la congestión nasal y sinusal asociada a resfriados comunes, sinusitis y alergias respiratorias.",
    posologia: "60 mg cada 4 a 6 horas. No superar los 240 mg en 24 horas.",
    contraindicaciones: "Hipertensión arterial grave o no controlada, enfermedad coronaria grave, pacientes en tratamiento con inhibidores de la MAO.",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "Control de Precursores (DS 404/ISP)",
    tips_venta: "Ojo de lince en el mesón: Sube la presión arterial y acelera el corazón. Contraindicado tajantemente en hipertensos no controlados. Por ley, requiere receta para evitar desvío de precursores.",
    cross_selling: "Termómetro, Paracetamol (si hay fiebre), infusiones de limón y miel."
  },
  {
    nombre: "Ambroxol 30mg/5mL",
    principio_activo: "Ambroxol Clorhidrato",
    categoria: "Mucolítico / Expectorante",
    para_que_sirve: "Facilita la eliminación del exceso de moco (flemas) en procesos respiratorios agudos y crónicos (bronquitis, neumonías, traqueítis).",
    posologia: "Adultos: 5 a 10 mL de jarabe, 3 veces al día. Tomar de preferencia después de las comidas.",
    contraindicaciones: "Úlcera péptica activa (los mucolíticos pueden degradar el moco protector del estómago).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "El secreto para que un mucolítico funcione es la HIDRATACIÓN. Indicar al cliente que debe beber al menos 2 litros de agua al día; si no hay agua en el cuerpo, el fármaco no tiene con qué licuar la flema.",
    cross_selling: "Caramelos de propóleo para calmar la irritación de la garganta por la tos productiva."
  },
  {
    nombre: "Codeína Jarabe",
    principio_activo: "Codeína Fosfato",
    categoria: "Antitusivo Central (Opiáceo débil)",
    para_que_sirve: "Tratamiento sintomático de la tos seca, irritativa y no productiva (sin flemas) de intensidad moderada a severa.",
    posologia: "Dosis médica estricta, usualmente 10 a 20 mg cada 4 a 6 horas en adultos.",
    contraindicaciones: "Asma bronquial aguda, EPOC severo, depresión respiratoria, uso en niños menores de 12 años (restricción ISP).",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "Lista IV (Según concentración - DS 404)",
    tips_venta: "Produce estreñimiento severo y somnolencia. Jamás recomendarlo para tos con flemas, ya que al inhibir el reflejo de la tos, las secreciones se acumulan en los pulmones causando infecciones.",
    cross_selling: "Lactulosa o laxantes suaves preventivos, mentolatos o ungüentos pectorales."
  }
];