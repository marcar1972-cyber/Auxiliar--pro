// vademecumData.ts

export const OPCIONES_DESPLEGABLES = {
  condicionVenta: [
    "Venta Directa (Vd)",
    "Receta Médica Simple",
    "Receta Médica Retenida",
    "Receta Médica Retenida Con Control De Stock Y Registro De Cliente",
    "Receta Médica Retenida Con Control De Stock Y Registro Simplificado",
    "Receta Cheque (Rch)"
  ],
  listaControl: [
    "N/A", 
    "Lista IV (Psicotrópico)", 
    "Lista II (Estupefaciente)", 
    "Lista III"
  ]
};

export const BLOQUE_G = [
  {
    nombre: "Amoxicilina 500 mg",
    principio_activo: "Amoxicilina Trihidrato 500 mg",
    categoria: "Antibiótico (Penicilina)",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Retenida",
    para_que_sirve: "Tratamiento de infecciones bacterianas del tracto respiratorio, genitourinario, piel, tejidos blandos e infecciones odontológicas.",
    posologia: "Adultos: 500 mg cada 8 horas. El tratamiento habitual dura entre 7 y 10 días.",
    contraindicaciones: "Hipersensibilidad (alergia) comprobada a las penicilinas o cefalosporinas (riesgo de shock anafiláctico).",
    tips_venta: "LEY DE FÁRMACOS: Obligatorio retener la receta. Preguntar siempre por alergias. Recomendar tomar junto con las comidas para disminuir el malestar estomacal.",
    cross_selling: "Probióticos (ej. Perenteryl) para reponer la flora intestinal y prevenir la diarrea asociada a antibióticos."
  },
  {
    nombre: "Azitromicina 500 mg",
    principio_activo: "Azitromicina Dihidrato 500 mg",
    categoria: "Antibiótico (Macrólido)",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Retenida",
    para_que_sirve: "Infecciones del tracto respiratorio inferior (bronquitis, neumonía), superior (sinusitis, faringitis), infecciones de piel y enfermedades de transmisión sexual (Chlamydia).",
    posologia: "Adultos: 500 mg una vez al día, durante 3 a 5 días según indicación médica.",
    contraindicaciones: "Hipersensibilidad a macrólidos. Precaución en pacientes con insuficiencia hepática grave o arritmias.",
    tips_venta: "TOMA CON HORARIO: Se debe tomar 1 hora antes o 2 horas después de las comidas. Aclarar al paciente que aunque tome solo 3 pastillas, el efecto curativo dura en el cuerpo varios días más.",
    cross_selling: "Pastillas anestésicas bucofaríngeas si el paciente refiere fuerte dolor de garganta."
  },
  {
    nombre: "Ciprofloxacino 500 mg",
    principio_activo: "Ciprofloxacino Clorhidrato 500 mg",
    categoria: "Antibiótico (Fluoroquinolona)",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Retenida",
    para_que_sirve: "Infecciones severas y complicadas del tracto urinario, gastrointestinales (diarrea infecciosa), respiratorias, óseas y articulares.",
    posologia: "Adultos: 500 mg cada 12 horas. Duración depende de la gravedad de la infección.",
    contraindicaciones: "Menores de 18 años (riesgo de daño en cartílagos de crecimiento), embarazo, lactancia, alergia a quinolonas.",
    tips_venta: "INTERACCIÓN LÁCTEOS: Advertir no tomar junto con leche, yogur o antiácidos, ya que anulan la absorción del fármaco. Causa fotosensibilidad (usar bloqueador).",
    cross_selling: "Analgésico urinario (Fenazopiridina) para el alivio inmediato de la disuria (ardor intenso), bloqueador solar FPS 50+ y Cranberry (Arándano rojo) en cápsulas o concentrado, para evitar la adhesión bacteriana en la vejiga y prevenir recurrencias."
  },
  {
    nombre: "Cefadroxilo 500 mg",
    principio_activo: "Cefadroxilo Monohidrato 500 mg",
    categoria: "Antibiótico (Cefalosporina 1ª Gen)",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Retenida",
    para_que_sirve: "Infecciones de la piel y tejidos blandos, faringitis y amigdalitis estreptocócica, infecciones urinarias no complicadas.",
    posologia: "Adultos: 500 mg cada 12 horas, o 1 gramo cada 24 horas según indicación.",
    contraindicaciones: "Alergia conocida a las cefalosporinas o reacción severa a las penicilinas.",
    tips_venta: "TOLERANCIA GÁSTRICA: Recomendar administrar junto con alimentos para disminuir la irritación gástrica.",
    cross_selling: "Antipiréticos (Paracetamol) si el paciente cursa con fiebre por la infección, y probióticos."
  },
  {
    nombre: "Cetirizina 10 mg",
    principio_activo: "Cetirizina Diclorhidrato 10 mg",
    categoria: "Antihistamínico (2ª Generación)",
    lista_control: "N/A",
    condicion_venta: "Venta Directa (Vd)",
    para_que_sirve: "Tratamiento de los síntomas nasales y oculares de la rinitis alérgica estacional y perenne. Tratamiento de la urticaria crónica.",
    posologia: "Adultos y niños mayores de 6 años: 10 mg (1 comprimido) una vez al día.",
    contraindicaciones: "Pacientes con insuficiencia renal grave. Precaución durante el embarazo y lactancia.",
    tips_venta: "EFECTO SEDANTE LEVE: Aunque es de segunda generación y da 'menos' sueño que la clorfenamina, se recomienda tomar en la noche, ya que en algunas personas sí produce somnolencia.",
    cross_selling: "Soluciones salinas (Fisiolím o similares) para aseo nasal y descongestión local libre de fármacos."
  },
  {
    nombre: "Clorfenamina 4 mg",
    principio_activo: "Clorfenamina Maleato 4 mg",
    categoria: "Antihistamínico (1ª Generación)",
    lista_control: "N/A",
    condicion_venta: "Venta Directa (Vd)",
    para_que_sirve: "Alivio rápido de reacciones alérgicas agudas, rinitis, conjuntivitis alérgica y picaduras de insectos.",
    posologia: "Adultos: 4 mg cada 6 u 8 horas. No superar los 24 mg al día.",
    contraindicaciones: "Ataque agudo de asma, glaucoma de ángulo estrecho, hiperplasia prostática sintomática.",
    tips_venta: "ALERTA DE SEDACIÓN PROFUNDA: Advierte tajantemente que causa MUCHO sueño. Prohibido manejar vehículos o consumir alcohol tras su ingesta.",
    cross_selling: "Cremas calmantes tópicas (Calamina o Hidrocortisona de VD) si la alergia es cutánea o por picaduras."
  },
  {
    nombre: "Pregabalina 75 mg",
    principio_activo: "Pregabalina 75 mg",
    categoria: "Anticonvulsivante / Neuromodulador",
    lista_control: "Lista IV (Psicotrópico)",
    condicion_venta: "Receta Médica Retenida Con Control De Stock Y Registro Simplificado",
    para_que_sirve: "Tratamiento del dolor neuropático periférico y central, fibromialgia, trastorno de ansiedad generalizada y terapia coadyuvante en convulsiones.",
    posologia: "La dosis se titula (aumenta gradualmente). Generalmente inicia con 75 mg dos veces al día.",
    contraindicaciones: "Hipersensibilidad al fármaco. Precaución extrema en pacientes con insuficiencia renal o adultos mayores por riesgo de mareos y caídas.",
    tips_venta: "REVISIÓN LEGAL Y PRECAUCIÓN: Revisar minuciosamente la receta retenida. Advertir sobre mareos y somnolencia al inicio del tratamiento. JAMÁS suspender bruscamente.",
    cross_selling: "Complejo B (Neurobionta) como apoyo vitamínico para la neuropatía, y parches térmicos para el dolor muscular localizado."
  },
  {
    nombre: "Celecoxib 200 mg",
    principio_activo: "Celecoxib 200 mg",
    categoria: "AINE (Inhibidor selectivo COX-2)",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Simple",
    para_que_sirve: "Alivio sintomático en el tratamiento de artrosis, artritis reumatoide y espondilitis anquilosante. Genera menor irritación gástrica que el Ibuprofeno o Diclofenaco.",
    posologia: "Adultos: 200 mg al día, en una o dos tomas.",
    contraindicaciones: "Alergia conocida a las SULFAMIDAS. Pacientes con insuficiencia cardíaca grave, cardiopatía isquémica o úlcera péptica activa.",
    tips_venta: "ALERTA CARDIOVASCULAR: No recomendar como venta sugerida en pacientes con antecedentes de infartos o trombosis. Indicar que se tome con alimentos.",
    cross_selling: "Suplementos de colágeno hidrolizado o vitaminas para articulaciones como tratamiento a largo plazo."
  },
  {
    nombre: "Ketorolaco 10 mg",
    principio_activo: "Ketorolaco Trometamol 10 mg",
    categoria: "Analgésico / AINE",
    lista_control: "N/A",
    condicion_venta: "Receta Médica Simple",
    para_que_sirve: "Manejo a corto plazo del dolor agudo de intensidad moderada a severa (ej. dolor postoperatorio, cólico renal, dolor dental intenso).",
    posologia: "Adultos: 10 mg cada 4 a 6 horas según necesidad. Dosis máxima diaria: 40 mg.",
    contraindicaciones: "Úlcera péptica activa, hemorragia digestiva, insuficiencia renal moderada a grave. No usar antes o durante una cirugía por riesgo de sangrado.",
    tips_venta: "LÍMITE ESTRICTO DE USO: Recalcar enfáticamente que NO DEBE usarse por más de 5 días continuos, debido al altísimo riesgo de hemorragia gástrica y daño renal.",
    cross_selling: "Protectores gástricos (solo si el médico lo prescribió en conjunto) o enjuagues bucales antisépticos/anestésicos si el dolor es de origen odontológico."
  },
  {
    nombre: "Desloratadina 5 mg",
    principio_activo: "Desloratadina 5 mg",
    categoria: "Antihistamínico (2ª Generación)",
    lista_control: "N/A",
    condicion_venta: "Venta Directa (Vd)",
    para_que_sirve: "Alivio de los síntomas asociados a la rinitis alérgica y a la urticaria crónica idiopática. Efecto rápido y sostenido por 24 horas.",
    posologia: "Adultos y adolescentes (mayores de 12 años): 5 mg (1 comprimido) una vez al día.",
    contraindicaciones: "Hipersensibilidad a la desloratadina o a la loratadina.",
    tips_venta: "IDEAL PARA TRABAJADORES: A diferencia de otros, este antihistamínico no cruza la barrera hematoencefálica, por lo que NO produce sueño. Ideal para estudiar, trabajar o conducir.",
    cross_selling: "Gotas oftálmicas lubricantes (Lágrimas Artificiales) para aliviar el picor y enrojecimiento ocular asociado a la alergia."
  }
];