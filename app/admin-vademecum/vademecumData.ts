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

// 2. BLOQUE II: NEUROLÓGICO, CARDIOVASCULAR Y ESPECÍFICOS (Carga de 20 Faltantes)
export const BLOQUE_I = [
  {
    nombre: "Fenitoína 100 mg",
    principio_activo: "Fenitoína Sódica",
    categoria: "Anticonvulsivante / Antiepiléptico",
    para_que_sirve: "Control preventivo de convulsiones tónico-clónicas generalizadas (gran mal) y crisis parciales complejas. Frecuentemente prescrito en neurocirugía o traumatismos craneales severos para prevenir episodios epilépticos post-quirúrgicos.",
    posologia: "Dosis médica estrictamente individualizada basada en niveles plasmáticos. Habitualmente en adultos: 100 mg por vía oral 2 a 3 veces al día. Se recomienda administrar junto con alimentos para minimizar la irritación gástrica.",
    contraindicaciones: "Pacientes con bradicardia sinusal, bloqueo auriculoventricular de segundo y tercer grado o síndrome de Stokes-Adams. Riesgo severo de teratogenicidad en embarazo (Síndrome de hidantoína fetal).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Consejo clínico vital: La hiperplasia gingival (crecimiento y sangrado excesivo de las encías) es un efecto secundario crónico muy común. El paciente debe mantener una higiene bucal impecable y visitar al dentista regularmente.",
    cross_selling: "Cepillos dentales de cerdas ultrasuaves (quirúrgicos), pastas dentales para encías sangrantes y colutorios con Clorhexidina al 0.12%."
  },
  {
    nombre: "Carbamazepina 200 mg",
    principio_activo: "Carbamazepina",
    categoria: "Antiepiléptico / Estabilizador del Ánimo",
    para_que_sirve: "Tratamiento de primera línea para crisis epilépticas parciales (con o sin generalización secundaria), neuralgia del trigémino (dolor facial agudo) y profilaxis del trastorno bipolar en pacientes que no responden al litio.",
    posologia: "Dosis inicial sugerida en epilepsia: 200 mg 1 o 2 veces al día. En neuralgia del trigémino, se inicia con 100-200 mg al día. Las dosis deben aumentarse gradualmente según respuesta clínica. Tomar durante o después de las comidas con líquido.",
    contraindicaciones: "Antecedentes de depresión de la médula ósea, porfiria aguda intermitente y uso concomitante o reciente (últimos 14 días) con inhibidores de la MAO (IMAO).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Fuerte inductor enzimático hepático: Acelera el metabolismo de otros fármacos, reduciendo su eficacia (ej. anula el efecto de los anticonceptivos orales). El paciente debe usar métodos de barrera adicionales.",
    cross_selling: "Preservativos (si la paciente usa anticoncepción oral), lágrimas artificiales (puede causar visión borrosa inicialmente)."
  },
  {
    nombre: "Gabapentina 300 mg",
    principio_activo: "Gabapentina",
    categoria: "Neuromodulador / Antiepiléptico Analgésico",
    para_que_sirve: "Tratamiento específico del dolor neuropático periférico intenso (como neuropatía diabética dolorosa o neuralgia postherpética) y terapia adyuvante en adultos y adolescentes con epilepsia parcial.",
    posologia: "Titulación médica escalonada para evitar somnolencia severa: Día 1: 300 mg una vez al día. Día 2: 300 mg dos veces al día. Día 3: 300 mg tres veces al día (dosis de mantenimiento habitual 900 mg/día).",
    contraindicaciones: "Hipersensibilidad conocida al principio activo. Requiere ajuste de dosis estricto (reducción) en pacientes con insuficiencia renal o hemodiálisis.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Advertir al paciente sobre la somnolencia profunda y los mareos durante la primera semana de titulación. El cuerpo suele generar tolerancia en unos 10 días, por lo que no debe abandonar el tratamiento prematuramente.",
    cross_selling: "Complejo vitamínico B (Neurobionta) para potenciar la recuperación de la vaina de mielina del nervio dañado."
  },
  {
    nombre: "Levetiracetam 500 mg",
    principio_activo: "Levetiracetam",
    categoria: "Antiepiléptico de Nueva Generación",
    para_que_sirve: "Terapia de amplio espectro, utilizada como monoterapia o terapia combinada en convulsiones de inicio parcial, mioclónicas o tónico-clónicas primarias generalizadas. Destaca por su alta eficacia clínica.",
    posologia: "Dosis inicial recomendada en adultos: 500 mg dos veces al día. Según la respuesta clínica, la dosis puede incrementarse hasta 1500 mg dos veces al día. Puede tomarse con o sin alimentos.",
    contraindicaciones: "Hipersensibilidad a derivados de la pirrolidona. Precaución especial en pacientes con antecedentes de depresión severa o ideación suicida.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Ventaja terapéutica: A diferencia de los antiepilépticos clásicos (Fenitoína, Carbamazepina), el Levetiracetam casi no presenta interacciones medicamentosas a nivel hepático. Sin embargo, puede inducir irritabilidad o cambios de humor notables.",
    cross_selling: "No requiere suplementación específica. Importante: Sugerir mantener siempre la misma marca (original o bioequivalente), ya que los cambios de laboratorio pueden desestabilizar a pacientes neurológicamente sensibles."
  },
  {
    nombre: "Sumatriptán 50 mg",
    principio_activo: "Sumatriptán Succinato",
    categoria: "Agonista selectivo de Serotonina (5-HT1) / Antimigrañoso",
    para_que_sirve: "Tratamiento de rescate agudo y rápido de las crisis de migraña (jaqueca) con o sin aura. Funciona contrayendo los vasos sanguíneos dilatados del cerebro. NO es un medicamento preventivo o profiláctico.",
    posologia: "1 comprimido (50 mg o 100 mg) lo más pronto posible tras el inicio del dolor de cabeza. Si la migraña cede pero reaparece, puede tomarse una segunda dosis tras 2 horas. Dosis máxima: 300 mg en 24 horas.",
    contraindicaciones: "Absolutamente contraindicado en enfermedad isquémica cardíaca (infarto previo, angina), hipertensión arterial no controlada y uso concomitante con Ergotamina (Migranol).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Educación de mesón crítica: ¡La oportunidad es todo! El paciente debe tomarlo al primer síntoma del aura o dolor. Si se toma cuando la migraña ya alcanzó su peak de dolor y náuseas, su efectividad disminuye drásticamente.",
    cross_selling: "Antieméticos (Domperidona) para las náuseas asociadas a la migraña severa, antifaces de gel frío para alivio local."
  },
  {
    nombre: "Ergotamina + Cafeína (Migranol / Cefalmin)",
    principio_activo: "Tartrato de Ergotamina 1 mg + Cafeína 100 mg",
    categoria: "Antimigrañoso Vasoconstrictor",
    para_que_sirve: "Tratamiento sintomático clásico para abortar crisis agudas de migraña tensional o vascular que no responden a analgésicos comunes.",
    posologia: "Dosis de ataque: 1 a 2 comprimidos al inicio de la crisis. Si el dolor persiste, se puede administrar 1 comprimido adicional cada 30 minutos. Límite estricto: Máximo 6 comprimidos en 24 horas y 10 por semana.",
    contraindicaciones: "Embarazo (riesgo de aborto por contracción uterina), lactancia, hipertensión severa, enfermedad vascular periférica (riesgo de isquemia) y falla hepática/renal.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Advertencia Farmacológica (Ojo de lince): El uso frecuente o diario de Ergotamina genera 'Cefalea de Rebote'. El paciente entra en un círculo vicioso donde el fármaco que alivia el dolor, provoca la siguiente migraña por abstinencia.",
    cross_selling: "Medicamentos gástricos (Metoclopramida) en caso de que la migraña provoque emesis (vómitos) que impida la absorción oral."
  },
  {
    nombre: "Levodopa + Carbidopa (250/25 mg)",
    principio_activo: "Levodopa + Carbidopa",
    categoria: "Antiparkinsoniano (Precursor de Dopamina)",
    para_que_sirve: "Terapia de sustitución fundamental para el control sintomático de la Enfermedad de Parkinson idiopática. Mejora la rigidez muscular, la bradicinesia (lentitud) y el temblor en reposo.",
    posologia: "Dosis escalonada estrictamente por el neurólogo. Habitualmente se distribuye en 3 o 4 tomas diarias para mantener niveles estables de dopamina y evitar fluctuaciones motoras (efecto on-off).",
    contraindicaciones: "Pacientes con glaucoma de ángulo estrecho no tratado, lesiones cutáneas sospechosas de melanoma (puede activarlo) y uso concomitante con IMAO no selectivos.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Interacción Alimentaria Clave: Los aminoácidos de las proteínas (carnes, lácteos, huevos) compiten con la Levodopa para absorberse en el intestino. Aconsejar al paciente tomar la pastilla 30 a 60 minutos antes de las comidas principales.",
    cross_selling: "Suplementación nutricional o espesantes de líquidos para adultos mayores si presentan disfagia (dificultad para tragar) asociada al Parkinson avanzado."
  },
  {
    nombre: "Donepezilo 10 mg",
    principio_activo: "Donepezilo Clorhidrato",
    categoria: "Inhibidor reversible de la Acetilcolinesterasa",
    para_que_sirve: "Tratamiento sintomático paliativo del deterioro cognitivo (memoria y conducta) en la enfermedad de Alzheimer de intensidad leve a moderadamente grave. No cura ni detiene la progresión de la enfermedad.",
    posologia: "Inicio con 5 mg/día durante al menos 4 semanas (para evaluar tolerancia gástrica), aumentando luego a la dosis de mantención de 10 mg/día. Se administra en una toma única por la noche, antes de acostarse.",
    contraindicaciones: "Hipersensibilidad a derivados de piperidina. Requiere precaución extrema en pacientes con antecedentes de úlceras gástricas, asma severa o alteraciones de la conducción cardíaca (bradicardia).",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "N/A",
    tips_venta: "Información al cuidador: Al inicio del tratamiento, es común que el paciente experimente pesadillas, sueños vívidos o náuseas matutinas. Estos efectos suelen ser transitorios y disminuyen con las semanas.",
    cross_selling: "Suplementos nutricionales hipercalóricos (Ensure Advance) debido a que la pérdida de apetito y de peso son comunes en etapas medias del Alzheimer."
  },
  {
    nombre: "Hidróxido de Magnesio / Aluminio",
    principio_activo: "Hidróxido de Magnesio + Hidróxido de Aluminio",
    categoria: "Antiácido Neutralizante de Acción Local",
    para_que_sirve: "Alivio rápido y sintomático de la hiperacidez gástrica, ardor de estómago (pirosis), indigestión ácida y dispepsia. Actúa tamponando químicamente el ácido clorhídrico ya presente en el estómago.",
    posologia: "1 a 2 cucharadas (suspensión) o 1 a 2 comprimidos masticables administrados entre las comidas (1 a 3 horas después de comer) y al acostarse.",
    contraindicaciones: "Insuficiencia renal grave (riesgo de toxicidad por acumulación de aluminio). Contraindicado en dolor abdominal agudo no diagnosticado o sospecha de apendicitis.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Interacción farmacológica crítica: Estos antiácidos son como un 'imán' en el estómago. Atrapan y reducen la absorción de otros fármacos (Especialmente Fierro, Levotiroxina, y antibióticos como Ciprofloxacino). Debe existir un espacio de 2 HORAS entre la toma del antiácido y cualquier otro medicamento.",
    cross_selling: "Inhibidores de bomba (Omeprazol) de venta libre (dosis bajas) si el paciente presenta acidez recurrente más de 3 días a la semana."
  },
  {
    nombre: "Buscapina (Hioscina) 10 mg",
    principio_activo: "Butilbromuro de Hioscina",
    categoria: "Antiespasmódico (Anticolinérgico Periférico)",
    para_que_sirve: "Alivio efectivo de los espasmos agudos del tracto gastrointestinal (cólicos estomacales/intestinales), vías biliares (cólico biliar) y vías genitourinarias (cólicos nefríticos o menstruales severos).",
    posologia: "Adultos y niños mayores de 6 años: 1 a 2 comprimidos recubiertos, 3 a 5 veces al día, ingeridos enteros con abundante líquido. No masticar.",
    contraindicaciones: "Miastenia gravis, megacolon, glaucoma de ángulo estrecho no tratado, retención urinaria por hipertrofia prostática e íleo paralítico.",
    condicion_venta: "Venta Directa / Receta Médica (Según presentación/asociación)",
    lista_control: "N/A",
    tips_venta: "Efectos anticolinérgicos: Informar al paciente que puede experimentar sequedad de boca, visión ligeramente borrosa y disminución del sudor. No confundir con la 'Buscapina Compuesta' o 'Femin', las cuales traen analgésico añadido (Paracetamol o Ibuprofeno).",
    cross_selling: "Té o infusiones digestivas antiespasmódicas (Manzanilla, Melisa), guateros de agua o gel para aplicar calor local en la zona del cólico."
  },
  {
    nombre: "Insulina Cristalina (Rápida)",
    principio_activo: "Insulina Humana Regular (Acción Rápida)",
    categoria: "Antidiabético Inyectable",
    para_que_sirve: "Regulación aguda del metabolismo de la glucosa en pacientes con Diabetes Mellitus tipo 1 y tipo 2. Su inicio de acción es de 30 minutos y su peak máximo ocurre entre 2 a 4 horas post-inyección.",
    posologia: "Inyección subcutánea indicada estrictamente por el médico. Debe administrarse entre 15 a 30 minutos ANTES de una comida que contenga carbohidratos.",
    contraindicaciones: "Episodios de hipoglicemia actual. Hipersensibilidad a la insulina humana.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Regla visual de Farmacia: La Insulina Cristalina (Rápida) debe ser completamente transparente como el agua. Si está turbia o presenta grumos, se debe desechar. Requiere cadena de frío estricta (2°C a 8°C) antes de abrir. Una vez en uso, dura 28 días a temperatura ambiente fresca.",
    cross_selling: "Jeringas de insulina de precisión, agujas para lápiz (si usa Pen), toallitas prepadas con alcohol isopropílico, contenedor rígido para descarte de material cortopunzante."
  },
  {
    nombre: "Probióticos Multicepa / S. Boulardii",
    principio_activo: "Bacterias Lácticas (Lactobacillus, Bifidobacterium) o Levadura (Saccharomyces Boulardii)",
    categoria: "Restaurador de la Flora Intestinal / Antidiarreico Biológico",
    para_que_sirve: "Prevención y tratamiento de diarreas agudas, reducción de la diarrea asociada a la toma de antibióticos, y estabilización del microbioma en pacientes con Síndrome de Intestino Irritable.",
    posologia: "1 a 2 cápsulas o sobres al día. Disolver en líquidos a temperatura ambiente. Jamás administrar con bebidas o comidas muy calientes, ya que el calor destruye los microorganismos vivos.",
    contraindicaciones: "Pacientes gravemente inmunodeprimidos (VIH avanzado no tratado, quimioterapia agresiva) o portadores de catéter venoso central (riesgo de fungemia o bacteriemia sistémica).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Protocolo de Antibióticos: Si el paciente está tomando Amoxicilina o Ciprofloxacino, el S. Boulardii (levadura/hongo) es ideal porque el antibiótico no lo mata. Si lleva un probiótico bacteriano (Lactobacillus), recuérdale que debe tomarlo con al menos 3 horas de diferencia del antibiótico.",
    cross_selling: "Sales de rehidratación oral (sueros) en caso de cuadro diarreico activo."
  },
  {
    nombre: "Atropina + Difenoxilato",
    principio_activo: "Sulfato de Atropina + Clorhidrato de Difenoxilato",
    categoria: "Antidiarreico de Acción Central (Opioide sintético + Anticolinérgico)",
    para_que_sirve: "Tratamiento farmacológico sintomático de apoyo en diarreas agudas y crónicas severas, reduciendo la motilidad (movimiento) propulsiva del intestino.",
    posologia: "Dosis de ataque en adultos: 2 comprimidos, 3 a 4 veces al día (hasta frenar el cuadro). Una vez controlado, la dosis debe reducirse inmediatamente. No recomendado para uso prolongado.",
    contraindicaciones: "Niños pequeños. Contraindicación absoluta en diarreas con sangre causadas por bacterias invasivas (Salmonella, Shigella, C. difficile) ya que detener el tránsito intestinal empeora la infección al retener las toxinas.",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "N/A",
    tips_venta: "Mecanismo dual: El Difenoxilato frena la diarrea, pero al ser un derivado opioide, puede causar adicción en dosis altas. Se le añade una dosis subclínica de Atropina para provocar efectos desagradables (taquicardia, boca seca) si el paciente intenta abusar del fármaco.",
    cross_selling: "Toallitas húmedas para adultos y cremas protectoras de óxido de zinc (por el daño y ardor perianal asociado a diarreas líquidas severas)."
  },
  {
    nombre: "Mebeverina 200 mg",
    principio_activo: "Mebeverina Clorhidrato",
    categoria: "Antiespasmódico Musculotropo Selectivo",
    para_que_sirve: "Alivio sintomático de espasmos gastrointestinales secundarios a enfermedades orgánicas, y tratamiento específico del dolor abdominal, calambres y alteraciones del tránsito en el Síndrome del Intestino Irritable (SII).",
    posologia: "1 cápsula de liberación prolongada (200 mg) administrada 2 veces al día, preferentemente 20 minutos antes del desayuno y la cena. Tragar entera sin masticar.",
    contraindicaciones: "Hipersensibilidad al principio activo. Precaución y evaluación médica en caso de íleo paralítico o megacolon tóxico.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Perfil de seguridad superior: A diferencia de la Hioscina (Buscapina) o la Pargeverina (Viadil), la Mebeverina actúa directamente relajando el músculo liso intestinal sin afectar el sistema nervioso autónomo, por lo que NO causa los molestos efectos secundarios de boca seca, retención de orina o visión borrosa.",
    cross_selling: "Simeticona masticable para aliviar la hinchazón o meteorismo (gases) frecuentemente asociado al colon irritable."
  },
  {
    nombre: "Clonixinato de Lisina 125 mg",
    principio_activo: "Clonixinato de Lisina",
    categoria: "AINE / Analgésico Potente",
    para_que_sirve: "Tratamiento de acción rápida para el dolor somático y visceral de intensidad leve a moderada. Ampliamente prescrito en odontalgias (dolor de muelas), mialgias severas, dolores articulares agudos y dismenorrea (dolor menstrual).",
    posologia: "1 a 2 comprimidos (125-250 mg) cada 6 a 8 horas, dependiendo de la intensidad del dolor. Dosis máxima diaria: 6 comprimidos (750 mg). Tomar con abundante agua junto con las comidas.",
    contraindicaciones: "Úlcera gastroduodenal activa, hemorragia digestiva reciente, asma severo asociado a sensibilidad a AINEs, insuficiencia renal o hepática severa.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Fármaco de muy alta rotación en el mostrador (conocido comercialmente como Nefersil). Es muy efectivo, pero es uno de los analgésicos más gastrolesivos. Advertir al paciente no tomarlo con el estómago vacío.",
    cross_selling: "Protector gástrico (Omeprazol o Famotidina) en terapias mayores a 3 días. Compresas térmicas de gel para inflamaciones musculoesqueléticas."
  },
  {
    nombre: "Amiodarona 200 mg",
    principio_activo: "Amiodarona Clorhidrato",
    categoria: "Antiarrítmico de Clase III",
    para_que_sirve: "Fármaco de alta complejidad utilizado para la profilaxis y tratamiento de arritmias ventriculares graves (con riesgo vital), fibrilación auricular y taquicardias supraventriculares asociadas al Síndrome de Wolff-Parkinson-White.",
    posologia: "Dosificación estrictamente controlada por el cardiólogo. Suele requerir una dosis de carga inicial alta (600 mg/día) seguida de una dosis de mantención ajustada a la mínima efectiva (100-200 mg/día).",
    contraindicaciones: "Bradicardia sinusal severa, bloqueo auriculoventricular sin marcapasos, disfunción tiroidea previa y sensibilidad conocida al yodo.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Precaución Dermatológica: Provoca fotosensibilidad extrema. La exposición directa al sol puede causar severas quemaduras solares o una coloración gris-azulada irreversible en la piel expuesta. Contiene altas cantidades de Yodo, afectando la tiroides.",
    cross_selling: "Bloqueador solar dermatológico FPS 50+ de amplio espectro (UVA/UVB) de uso diario y estricto."
  },
  {
    nombre: "Digoxina 0.25 mg",
    principio_activo: "Digoxina (Glucósido digitálico)",
    categoria: "Cardiotónico / Inotrópico Positivo",
    para_que_sirve: "Mejora la fuerza de contracción del músculo cardíaco. Utilizada principalmente en el tratamiento de la insuficiencia cardíaca crónica y para ralentizar la frecuencia ventricular en pacientes con fibrilación auricular.",
    posologia: "Fármaco de margen terapéutico muy estrecho. Dosis de mantenimiento en adultos varía entre 0.125 mg a 0.25 mg al día, regulada mediante exámenes de niveles séricos de digoxina.",
    contraindicaciones: "Bloqueo auriculoventricular intermitente o completo, miocardiopatía hipertrófica obstructiva, taquicardia o fibrilación ventricular.",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "N/A",
    tips_venta: "Signos de alerta vital (Intoxicación Digitálica): Si el paciente adulto mayor en mostrador reporta pérdida brusca de apetito, náuseas y vómitos intensos, o alteraciones visuales como ver 'halos amarillos o verdes' alrededor de las luces, derivar a Urgencias de inmediato.",
    cross_selling: "No se recomienda venta cruzada. Requiere un monitoreo clínico muy cerrado."
  },
  {
    nombre: "Gemfibrozilo 600 mg",
    principio_activo: "Gemfibrozilo",
    categoria: "Hipolipemiante (Derivado del ácido fíbrico)",
    para_que_sirve: "Tratamiento de la hipertrigliceridemia severa (niveles peligrosamente altos de triglicéridos) y dislipidemia mixta, especialmente para prevenir el riesgo de pancreatitis aguda secundaria a esta condición.",
    posologia: "1200 mg diarios divididos en dos tomas: 600 mg media hora ANTES del desayuno y 600 mg media hora ANTES de la cena.",
    contraindicaciones: "Insuficiencia hepática severa, enfermedad preexistente de la vesícula biliar (cálculos) e insuficiencia renal grave. Precaución extrema al coadministrar con estatinas.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Interacción de riesgo: Si el paciente compra Gemfibrozilo junto con Atorvastatina (u otra estatina), advertir que esta combinación eleva el riesgo de daño muscular grave (rabdomiólisis). Si presentan dolor muscular agudo o debilidad, deben contactar a su médico. Recordar tomar siempre con estómago vacío.",
    cross_selling: "Suplementos de Omega 3 de alta pureza (coadyuvantes en la reducción de triglicéridos) previa validación médica."
  },
  {
    nombre: "Fenofibrato 160 mg",
    principio_activo: "Fenofibrato",
    categoria: "Hipolipemiante Fibrato de Nueva Generación",
    para_que_sirve: "Reducción de niveles elevados de colesterol total, LDL, apolipoproteína B y triglicéridos, al mismo tiempo que aumenta el colesterol HDL (bueno). Utilizado cuando las dietas y el ejercicio no son suficientes.",
    posologia: "1 comprimido o cápsula de 160 mg al día. Las cápsulas deben tragarse enteras con un vaso de agua y SIEMPRE junto con la comida principal para asegurar una óptima absorción.",
    contraindicaciones: "Enfermedad hepática o renal severa, colecistopatía (enfermedades de la vesícula), pancreatitis crónica o aguda (excepto la causada por triglicéridos altos).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "A diferencia del Gemfibrozilo (que se toma con el estómago vacío), el Fenofibrato requiere la presencia de alimentos en el estómago para absorberse correctamente. Es más seguro que el Gemfibrozilo cuando el médico decide combinarlo con una estatina.",
    cross_selling: "Tensiómetro digital (muchos pacientes dislipidémicos padecen Síndrome Metabólico e hipertensión)."
  },
  {
    nombre: "Clopidogrel 75 mg",
    principio_activo: "Clopidogrel Bisulfato",
    categoria: "Antiagregante Plaquetario Profiláctico",
    para_que_sirve: "Inhibe la formación de coágulos en la sangre. Esencial en la prevención secundaria de eventos aterotrombóticos (infartos agudos al miocardio, accidentes cerebrovasculares isquémicos) y crucial en pacientes con stents cardíacos implantados.",
    posologia: "Dosis estándar de mantenimiento: 1 comprimido de 75 mg una vez al día, con o sin alimentos.",
    contraindicaciones: "Hemorragia patológica activa (como úlcera péptica sangrante o hemorragia intracraneal), insuficiencia hepática grave.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Interacción crítica de mostrador: El Clopidogrel es un profármaco que necesita activarse en el hígado. Fármacos como el Omeprazol y el Esomeprazol bloquean esta activación, anulando el efecto anticoagulante y dejando al paciente en riesgo de infarto. Si compran protector gástrico, el seguro suele ser Pantoprazol o Famotidina.",
    cross_selling: "Aspirina de 100 mg (Aspirina EC) ya que la Terapia Antiagregante Dual (Clopidogrel + Aspirina) es un estándar médico muy frecuente posterior a un evento cardíaco."
  }
];