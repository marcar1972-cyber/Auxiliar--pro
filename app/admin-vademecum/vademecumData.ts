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

// 2. BLOQUE I: NEUROLÓGICO, CARDIOVASCULAR Y ESPECÍFICOS (Ya cargado anteriormente)
export const BLOQUE_I = [
  // ... (Aquí mantienes todo el array de BLOQUE_I que ya tenías)
];

// 🚀 3. BLOQUE II: RESPIRATORIO, ANTIINFECCIOSOS, DERMATOLÓGICOS Y UROLÓGICOS
export const BLOQUE_II = [
  {
    nombre: "Metilfenidato 10 mg",
    principio_activo: "Metilfenidato Clorhidrato",
    categoria: "Estimulante del Sistema Nervioso Central",
    para_que_sirve: "Tratamiento del Trastorno por Déficit de Atención e Hiperactividad (TDAH) y, en casos específicos, narcolepsia. Mejora la atención y reduce la impulsividad.",
    posologia: "Dosis estrictamente individualizada por el psiquiatra o neurólogo. Habitualmente se inicia con 10 mg 2 o 3 veces al día (desayuno y almuerzo). No administrar después de las 18:00 hrs para evitar insomnio.",
    contraindicaciones: "Ansiedad severa, agitación, glaucoma, síndrome de Tourette, hipertensión arterial severa y uso concomitante con IMAO.",
    condicion_venta: "Receta Cheque",
    lista_control: "Lista II",
    tips_venta: "Control Legal Estricto: Solo se dispensa con Receta Cheque (talón amarillo/marrón/rojo según MINSAL). No se puede fraccionar bajo ninguna circunstancia. Revisar que la receta esté dentro de los 30 días de vigencia.",
    cross_selling: "No aplica venta cruzada por ley. Se puede ofrecer apoyo con organización de pastillas semanal para cuidadores."
  },
  {
    nombre: "Bromhexina 8 mg/5 ml Jarabe",
    principio_activo: "Clorhidrato de Bromhexina",
    categoria: "Mucolítico / Expectorante",
    para_que_sirve: "Fluidifica y reduce la viscosidad de las secreciones bronquiales espesas, facilitando su expulsión mediante la tos en bronquitis, asma y afecciones respiratorias con dificultad de expectoración.",
    posologia: "Adultos y niños mayores de 10 años: 10 ml (8 mg) 3 veces al día. Niños de 5 a 10 años: 5 ml 3 veces al día. Agitar antes de usar.",
    contraindicaciones: "Úlcera gástrica activa (precaución), hipersensibilidad al fármaco. No usar en tos seca improductiva.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Consejo de mesón clave: El medicamento por sí solo no 'saca' la flema. Debes instruir al paciente a beber al menos 2 litros de agua al día; la hidratación es el mejor mucolítico que existe.",
    cross_selling: "Vitamina C efervescente, miel de abeja pura o pastillas para la garganta con miel y limón."
  },
  {
    nombre: "Oximetazolina 0.05% Spray Nasal",
    principio_activo: "Clorhidrato de Oximetazolina",
    categoria: "Descongestionante Nasal Tópico (Alfa-agonista)",
    para_que_sirve: "Alivio rápido y temporal de la congestión nasal severa asociada a resfriados, rinitis alérgica o sinusitis.",
    posologia: "1 a 2 aplicaciones en cada fosa nasal, cada 10 a 12 horas. No exceder las 2 aplicaciones diarias por fosa.",
    contraindicaciones: "Glaucoma de ángulo estrecho, hipertensión arterial severa, hipertiroidismo y pacientes en tratamiento con IMAO.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "¡Alerta de Rinitis Medicamentosa! Advertir al paciente que este spray es solo para 'salir del paso' (máximo 3 a 5 días). Si se usa en exceso, provoca un efecto rebote que tapa la nariz crónicamente y daña la mucosa.",
    cross_selling: "Lavados nasales con Suero Fisiológico 0.9% o sprays de Agua de Mar (hipertónica o isotónica) para higiene diaria sin efecto rebote."
  },
  {
    nombre: "Cefalexina 500 mg",
    principio_activo: "Cefalexina Monohidrato",
    categoria: "Antibiótico (Cefalosporina de 1ª Generación)",
    para_que_sirve: "Tratamiento de infecciones bacterianas susceptibles: otitis media, infecciones de piel y tejidos blandos, infecciones del tracto urinario y faringoamigdalitis estreptocócica.",
    posologia: "Adultos: 250 a 500 mg cada 6 horas. Niños: 25 a 50 mg/kg/día divididos en 4 tomas. Duración habitual: 7 a 10 días.",
    contraindicaciones: "Hipersensibilidad a cefalosporinas. Precaución extrema (o evitar) en pacientes con alergia severa a penicilinas (riesgo de reactividad cruzada).",
    condicion_venta: "Receta Médica Retenida",
    lista_control: "N/A",
    tips_venta: "Educación al paciente: Debe completar los 7-10 días de tratamiento aunque se sienta bien al tercer día. Suspender antes genera resistencia bacteriana. Tomar con o sin alimentos.",
    cross_selling: "Probióticos (Saccharomyces Boulardii) para prevenir diarrea asociada a antibióticos. Recordar tomar el probiótico con 3 horas de diferencia de la Cefalexina."
  },
  {
    nombre: "Doxiciclina 100 mg",
    principio_activo: "Doxiciclina Hiclato",
    categoria: "Antibiótico (Tetraciclina de amplio espectro)",
    para_que_sirve: "Infecciones del tracto respiratorio, acné severo, enfermedades de transmisión sexual (Clamidia, Sífilis en alérgicos a penicilina), y profilaxis de malaria.",
    posologia: "Adultos: 100 mg cada 12 horas el primer día, seguido de 100 mg una vez al día o 50 mg cada 12 horas. Tomar con un vaso lleno de agua.",
    contraindicaciones: "Embarazo y lactancia (afecta huesos y dientes del feto/bebé). Niños menores de 8 años (decoloración dental permanente). Insuficiencia hepática severa.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Prevención de Esofagitis: El paciente debe tomarla con al menos 200 ml de agua y NO acostarse durante al menos 30 minutos después, para evitar úlceras esofágicas. Provoca fotosensibilidad severa.",
    cross_selling: "Bloqueador solar FPS 50+ de uso obligatorio si el paciente va a exponerse al sol, ya que la piel se quema con facilidad extrema."
  },
  {
    nombre: "Terbinafina 250 mg",
    principio_activo: "Clorhidrato de Terbinafina",
    categoria: "Antifúngico Sistémico (Alilamina)",
    para_que_sirve: "Tratamiento de onicomicosis (hongos en uñas de manos y pies) y tiñas extensas que no responden a tratamiento tópico.",
    posologia: "Adultos: 250 mg una vez al día. Duración: 6 semanas para uñas de manos, 12 semanas para uñas de pies. Tomar con o sin alimentos.",
    contraindicaciones: "Insuficiencia hepática crónica o aguda. Precaución en insuficiencia renal (depuración < 50 ml/min).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Paciencia clínica: El crecimiento de la uña sana es lento. El paciente debe entender que el resultado estético final se verá meses después de terminar las pastillas. Requiere exámenes de hígado previos.",
    cross_selling: "Esmaltes antifúngicos tópicos (como apoyo), cortauñas de uso exclusivo para la uña afectada (para no contagiar otras) y talco antimicótico para zapatos."
  },
  {
    nombre: "Clotrimazol 1% Crema",
    principio_activo: "Clotrimazol",
    categoria: "Antifúngico Tópico (Imidazol)",
    para_que_sirve: "Tratamiento tópico de dermatofitosis (tiña corporal, cruris, pedis), candidiasis cutánea y pitiriasis versicolor.",
    posologia: "Aplicar una capa delgada sobre el área afectada y 2 cm alrededor, 2 a 3 veces al día. Duración: 2 a 4 semanas.",
    contraindicaciones: "Hipersensibilidad a imidazoles. No aplicar en los ojos. Primer trimestre de embarazo (bajo evaluación médica).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Regla de aplicación: Continuar aplicando la crema durante 1 a 2 semanas DESPUÉS de que las lesiones hayan desaparecido visualmente para evitar recaídas. No cubrir con vendajes oclusivos.",
    cross_selling: "Polvos antimicóticos para calzar (si es tiña pedis), toallas de uso exclusivo y jabón de azufre o neutro."
  },
  {
    nombre: "Albendazol 400 mg",
    principio_activo: "Albendazol",
    categoria: "Antiparasitario Intestinal de Amplio Espectro",
    para_que_sirve: "Tratamiento de helmintiasis intestinales comunes: Oxiuriasis (oxiuros), Ascariasis, Tricuriasis y Uncinariasis.",
    posologia: "Dosis única de 400 mg (1 comprimido o 10 ml de suspensión) para la mayoría de las parasitosis. En estrongiloidiasis o teniasis se requieren 3 días consecutivos. Masticar el comprimido.",
    contraindicaciones: "Embarazo (teratogénico en animales). Precaución en pacientes con antecedentes de discrasias sanguíneas o enfermedad hepática.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Para que sea más efectivo contra los parásitos adultos, se recomienda administrarlo en ayunas o con una comida ligera. Si es para Oxiuros (que pica el ano de noche), se debe repetir la dosis a los 15 días.",
    cross_selling: "Suspensión de Albendazol (si el paciente es niño pequeño que no puede tragar pastillas), jabón de manos antibacterial."
  },
  {
    nombre: "Levonorgestrel 1.5 mg (PAE)",
    principio_activo: "Levonorgestrel",
    categoria: "Anticonceptivo Hormonal de Emergencia",
    para_que_sirve: "Prevención del embarazo tras relaciones sexuales sin protección o fallo del método anticonceptivo habitual (Anticoncepción de Emergencia).",
    posologia: "1 comprimido de 1.5 mg por vía oral lo antes posible. Eficacia máxima si se toma en las primeras 12 horas. Límite absoluto: 72 horas (3 días) post-coito.",
    contraindicaciones: "Embarazo confirmado (no interrumpe embarazos existentes). Sangrado vaginal anormal de origen desconocido.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Educación vital: NO es un método anticonceptivo regular, es de RESCATE. Si la paciente vomita antes de 2 horas, debe repetir la dosis. Puede alterar el ciclo menstrual (adelantarlo o atrasarlo).",
    cross_selling: "Test de embarazo (instruir que se lo haga en 3 semanas si su menstruación se retrasa más de 7 días), preservativos para uso inmediato."
  },
  {
    nombre: "Sildenafil 50 mg",
    principio_activo: "Citrato de Sildenafil",
    categoria: "Inhibidor de la Fosfodiesterasa tipo 5 (PDE5)",
    para_que_sirve: "Tratamiento de la disfunción eréctil. Facilita la erección solo ante estimulación sexual, relajando los vasos sanguíneos del pene.",
    posologia: "Dosis recomendada: 50 mg aproximadamente 1 hora antes de la actividad sexual. Puede ajustarse a 100 mg o reducirse a 25 mg según eficacia y tolerancia.",
    contraindicaciones: "ABSOLUTAMENTE CONTRAINDICADO en pacientes que usen nitratos (nitroglicerina para el corazón) por riesgo de hipotensión fatal. Cardiopatías inestables severas.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "El 'factor comida': Si el paciente lo toma después de una comida copiosa o muy grasosa, el efecto tardará mucho más en aparecer o será más débil. Lo ideal es en ayunas o con comida ligera.",
    cross_selling: "Ninguno directo por seguridad. Si el paciente usa pastillas para la próstata (Tamsulosina), advertir que puede marearse al levantarse (hipotensión ortostática)."
  },
  {
    nombre: "Tadalafil 5 mg",
    principio_activo: "Tadalafil",
    categoria: "Inhibidor de la Fosfodiesterasa tipo 5 (PDE5) - Acción Prolongada",
    para_que_sirve: "Disfunción eréctil (permite espontaneidad por su larga duración) y tratamiento de los signos y síntomas de la Hiperplasia Prostática Benigna (HPB).",
    posologia: "Para HPB o uso diario DE: 5 mg una vez al día, a la misma hora, sin importar las comidas. Para uso a demanda (10-20 mg): 30 min antes de la relación sexual.",
    contraindicaciones: "Uso concomitante con nitratos. Pacientes con infarto reciente (últimos 90 días), insuficiencia cardíaca inestable o hipotensión severa.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "La gran ventaja: A diferencia del Sildenafil, el Tadalafil permanece en el sistema hasta 36 horas. La dosis diaria de 5 mg también mejora los síntomas urinarios de la próstata agrandada.",
    cross_selling: "Evitar combinar con alfabloqueantes (como Doxazosina) sin supervisión estricta por riesgo de bajadas de presión."
  },
  {
    nombre: "Finasterida 5 mg",
    principio_activo: "Finasterida",
    categoria: "Inhibidor de la 5-alfa Reductasa",
    para_que_sirve: "Tratamiento y control de la Hiperplasia Prostática Benigna (HPB). Reduce el tamaño de la próstata, mejora el flujo urinario y disminuye el riesgo de retención aguda de orina.",
    posologia: "1 comprimido de 5 mg al día, con o sin alimentos. Los resultados clínicos (reducción de la próstata) pueden tardar de 3 a 6 meses en notarse.",
    contraindicaciones: "Mujeres y niños. Mujeres embarazadas NO deben manipular comprimidos triturados o rotos (riesgo de malformaciones en feto masculino).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Advertencia de seguridad: Las mujeres embarazadas o que puedan estarlo no deben tocar las pastillas de Finasterida (el principio activo se absorbe por la piel y afecta al feto).",
    cross_selling: "Si el paciente también tiene disfunción eréctil, el médico podría evaluar combinar con Tadalafil."
  },
  {
    nombre: "Mupirocina 2% Ungüento",
    principio_activo: "Mupirocina Cálcica",
    categoria: "Antibiótico Tópico",
    para_que_sirve: "Tratamiento de infecciones bacterianas de la piel altamente contagiosas como el impétigo, foliculitis, y heridas infectadas por Staphylococcus aureus (incluyendo MRSA).",
    posologia: "Aplicar una pequeña cantidad sobre el área afectada 3 veces al día durante 5 a 10 días. Puede cubrirse con gasa estéril.",
    contraindicaciones: "Hipersensibilidad a la mupirocina. No usar en áreas extensas de piel lesionada o en mucosas (ojos, boca) por riesgo de absorción sistémica del polietilenglicol.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Cadena de frío: Muchas marcas comerciales de Mupirocina requieren conservación en refrigerador (2°C a 8°C). Revisar la caja al recibirla del proveedor y al entregarla al paciente.",
    cross_selling: "Gasas estériles, micropore (tela adhesiva), jabón antibacterial para higiene de la zona."
  },
  {
    nombre: "Neomicina + Bacitracina Ungüento",
    principio_activo: "Sulfato de Neomicina + Bacitracina Zinc",
    categoria: "Antibiótico Tópico de Amplio Espectro",
    para_que_sirve: "Prevención y tratamiento de infecciones superficiales de la piel causadas por bacterias Gram positivas y Gram negativas en cortes, rasguños y quemaduras leves.",
    posologia: "Limpiar la zona y aplicar una capa fina de ungüento 1 a 3 veces al día.",
    contraindicaciones: "Hipersensibilidad a aminoglucósidos (neomicina). No aplicar en quemaduras extensas, heridas profundas o úlceras por decúbito avanzadas sin indicación médica.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Es el 'botiquín de primeros auxilios' por excelencia. Advertir que si la herida es profunda, muy sucia o tiene bordes irregulares, debe ir a urgencias para evaluar puntos o vacuna antitetánica.",
    cross_selling: "Suero fisiológico en monodosis para limpieza previa de la herida, curitas, vendas elásticas."
  },
  {
    nombre: "Ketoconazol 2% Champú",
    principio_activo: "Ketoconazol",
    categoria: "Antifúngico Tópico / Anticaspa",
    para_que_sirve: "Tratamiento de la dermatitis seborreica (caspa severa, descamación, prurito) y tiña del cuero cabelludo (tinea capitis).",
    posologia: "Aplicar sobre el cabello húmedo, masajear el cuero cabelludo y DEJAR ACTUAR de 3 a 5 minutos antes de enjuagar. Usar 2 veces por semana durante 2 a 4 semanas.",
    contraindicaciones: "Hipersensibilidad al ketoconazol. Evitar contacto con los ojos (irrita severamente).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "El error más común: Usarlo como champú normal y enjuagar de inmediato. El medicamento necesita tiempo de contacto con el hongo. Si el paciente dice 'no me funcionó', pregúntale cómo lo usó.",
    cross_selling: "Acondicionadores hidratantes o reparadores, ya que el ketoconazol tiende a dejar el cabello muy reseco y áspero."
  },
  {
    nombre: "Permetrina 1% Loción",
    principio_activo: "Permetrina",
    categoria: "Antiparasitario Tópico (Escabicida / Pediculicida)",
    para_que_sirve: "Tratamiento de elección para la pediculosis (piojos) y escabiosis (sarna). Actúa por contacto paralizando el sistema nervioso de los parásitos.",
    posologia: "Piojos: Aplicar en cabello seco, dejar 10 min y enjuagar. Escabiosis: Aplicar de cuello a pies (incluyendo pliegues), dejar 8-14 horas (toda la noche) y bañarse.",
    contraindicaciones: "Hipersensibilidad a piretroides o crisantemos. Precaución en lactantes menores de 2 meses y embarazadas (evaluar riesgo/beneficio).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "El secreto del éxito no es solo la loción, es el entorno: Toda la ropa de cama, toallas y ropa usada en los últimos 3 días debe lavarse con agua caliente (60°C) o sellarse en bolsas de plástico por 72 horas.",
    cross_selling: "Peine lendrera metálico de dientes finos, spray desinfectante para textiles/ambientes, champú con ácido acético (vinagre) para disolver el 'pegamento' de las liendres."
  },
  {
    nombre: "Ácido Fólico 1 mg",
    principio_activo: "Ácido Fólico (Vitamina B9)",
    categoria: "Vitamina / Antianémico",
    para_que_sirve: "Prevención de defectos del tubo neural en el feto (anencefalia, espina bífida) y tratamiento de anemias megaloblásticas por deficiencia de folatos.",
    posologia: "Prevención en embarazo: 0.4 a 1 mg al día, iniciando al menos 1 mes antes de la concepción y durante el primer trimestre. Tratamiento de anemia: Dosis según indicación médica.",
    contraindicaciones: "Anemia perniciosa no diagnosticada (enmascara el déficit de B12 permitiendo daño neurológico irreversible).",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Es la vitamina 'seguro de vida' para embarazadas. Si la paciente planea buscar un embarazo, debe empezar a tomarlo YA, no cuando se entere de que está embarazada, ya que el tubo neural se forma en las primeras 4 semanas.",
    cross_selling: "Sulfato Ferroso (el dúo dinámico para prevenir anemia en el embarazo), multivitamínicos prenatales."
  },
  {
    nombre: "Sulfato Ferroso 200 mg",
    principio_activo: "Sulfato Ferroso (equiv. a 60 mg de Hierro Elemental)",
    categoria: "Antianémico / Suplemento Mineral",
    para_que_sirve: "Prevención y tratamiento de la anemia ferropénica (por falta de hierro), común en embarazadas, niños en crecimiento, vegetarianos estrictos o personas con sangrado crónico.",
    posologia: "Tratamiento: 1 comprimido al día (o cada 2 días para mejor absorción y menos efectos gástricos). Preferiblemente en ayunas o con comidas ricas en Vitamina C.",
    contraindicaciones: "Hemocromatosis, anemias hemolíticas, úlcera péptica activa, enfermedad inflamatoria intestinal severa.",
    condicion_venta: "Venta Directa",
    lista_control: "N/A",
    tips_venta: "Efectos esperados: Advertir al paciente que las heces se pondrán de color negro verdoso (es normal e inofensivo). Si causa mucho dolor de guata, sugerir tomarlo con el estómago lleno o en días alternos.",
    cross_selling: "Vitamina C (el ácido ascórbico multiplica por 3 la absorción del hierro). Evitar tomar junto con lácteos, café o té (bloquean la absorción)."
  },
  {
    nombre: "Tobramicina 0.3% Gotas Oftálmicas",
    principio_activo: "Tobramicina",
    categoria: "Antibiótico Oftálmico (Aminoglucósido)",
    para_que_sirve: "Tratamiento de infecciones bacterianas externas del ojo: conjuntivitis bacterianas, blefaritis, queratitis y dacriocistitis.",
    posologia: "1 a 2 gotas en el ojo afectado cada 4 a 8 horas. En infecciones severas, puede instilarse cada 1 a 2 horas las primeras 48 horas.",
    contraindicaciones: "Hipersensibilidad a aminoglucósidos o a otros componentes. Infecciones virales o fúngicas del ojo (no tiene efecto y puede empeorar).",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Técnica de aplicación: Lavarse bien las manos, tirar del párpado inferior hacia abajo, instilar la gota en el 'saco' sin que la punta del gotario toque el ojo o las pestañas (para no contaminar el frasco).",
    cross_selling: "Suero fisiológico en monodosis o agua destilada estéril para limpiar las 'lagañas' o secreciones antes de aplicar la gota."
  },
  {
    nombre: "Latanoprost 0.005% Gotas Oftálmicas",
    principio_activo: "Latanoprost",
    categoria: "Análogo de Prostaglandina (Antiglaucomatoso)",
    para_que_sirve: "Reducción de la presión intraocular elevada en pacientes con glaucoma de ángulo abierto o hipertensión ocular. Previene el daño al nervio óptico y la ceguera.",
    posologia: "1 gota en el ojo afectado una vez al día, preferentemente por la NOCHE. No exceder la dosis diaria (menos es más, más dosis reduce la eficacia).",
    contraindicaciones: "Hipersensibilidad al principio activo. Precaución en pacientes con historia de uveítis o edema macular quístico.",
    condicion_venta: "Receta Médica",
    lista_control: "N/A",
    tips_venta: "Cadena de Frío Estricta: El frasco SIN ABRIR debe guardarse en el refrigerador (2-8°C). Una vez abierto, puede conservarse a temperatura ambiente (máx 25°C) pero solo por 28 días. ¡Marcar la fecha de apertura en la caja!",
    cross_selling: "Ninguno directo. El foco es la adherencia estricta: el glaucoma es asintomático hasta que se pierde la visión, por lo que el paciente no 'siente' que el medicamento funciona."
  }
];