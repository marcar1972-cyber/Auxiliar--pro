export const level4 = {
  id: 4,
  title: "Cálculos Farmacéuticos",
  questions: [
    {
      id: 1,
      question: "Un tratamiento indica la administración de 1 comprimido cada 8 horas. Si la caja contiene 30 comprimidos, ¿para cuántos días alcanza el tratamiento?",
      options: ["5 días", "10 días", "15 días", "30 días"],
      answer: "10 días",
      feedback: "Cada 8 horas son 3 tomas al día. 30 total / 3 diarios = 10 días."
    },
    {
      id: 2,
      question: "La dosis máxima diaria de Paracetamol en un adulto es 4 g. Si el medicamento viene en comprimidos de 1 g, ¿cuál es el número máximo de comprimidos permitidos al día?",
      options: ["2 comprimidos", "4 comprimidos", "6 comprimidos", "8 comprimidos"],
      answer: "4 comprimidos",
      feedback: "4 g (dosis máx) dividido por 1 g (concentración) = 4 unidades."
    },
    {
      id: 3,
      question: "Se prescribe Amoxicilina 500 mg cada 12 horas por 7 días. Si la farmacia dispone de cajas de 14 comprimidos de 500 mg, ¿cuántas cajas necesita el paciente?",
      options: ["1 caja", "2 cajas", "3 cajas", "7 cajas"],
      answer: "1 caja",
      feedback: "2 al día x 7 días = 14 comprimidos. Basta con una caja."
    },
    {
      id: 4,
      question: "Un jarabe tiene una concentración de 250 mg / 5 ml. Si la dosis indicada para un niño es de 500 mg, ¿cuántos mililitros (ml) se deben administrar?",
      options: ["5 ml", "7.5 ml", "10 ml", "15 ml"],
      answer: "10 ml",
      feedback: "Si 250mg están en 5ml, 500mg (el doble) están en 10ml."
    },
    {
      id: 5,
      question: "Un paciente con diabetes debe inyectarse 15 unidades de insulina NPH por la mañana y 15 unidades por la noche. Si el frasco contiene 1.000 unidades, ¿cuántos días dura el frasco?",
      options: ["20 días", "33 días", "45 días", "60 días"],
      answer: "33 días",
      feedback: "Dosis diaria: 30 unidades. 1.000 / 30 = 33,3 días."
    },
    {
      id: 6,
      question: "Se indica un tratamiento de Prednisona de 20 mg diarios durante 5 días. Si los comprimidos disponibles son de 5 mg, ¿cuántos comprimidos toma el paciente al día?",
      options: ["1 comprimido", "2 comprimidos", "4 comprimidos", "5 comprimidos"],
      answer: "4 comprimidos",
      feedback: "20 mg (dosis) / 5 mg (comp) = 4 comprimidos diarios."
    },
    {
      id: 7,
      question: "Si una receta indica administrar 2 gotas de un colirio en cada ojo, 3 veces al día, ¿cuántas gotas totales usa el paciente al día?",
      options: ["4 gotas", "6 gotas", "10 gotas", "12 gotas"],
      answer: "12 gotas",
      feedback: "2 ojos x 2 gotas = 4 gotas por vez. 4 gotas x 3 veces = 12 gotas totales."
    },
    {
      id: 8,
      question: "Un inhalador tiene 200 dosis totales. Si el médico indica 2 'puffs' cada 12 horas, ¿cuántos días dura el inhalador?",
      options: ["25 días", "50 días", "100 días", "200 días"],
      answer: "50 días",
      feedback: "4 inhalaciones diarias (2 cada 12h). 200 total / 4 diarias = 50 días."
    },
    {
      id: 9,
      question: "La dosis de un antibiótico es de 10 mg por kilo de peso al día. Si el niño pesa 20 kilos, ¿cuál es la dosis diaria total?",
      options: ["100 mg", "200 mg", "400 mg", "500 mg"],
      answer: "200 mg",
      feedback: "10 mg x 20 kg = 200 mg totales al día."
    },
    {
      id: 10,
      question: "Un paciente debe tomar 1,5 g de un fármaco. Si los comprimidos son de 500 mg, ¿cuántos comprimidos debe ingerir?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "4 comprimidos"],
      answer: "3 comprimidos",
      feedback: "1,5 g = 1.500 mg. 1.500 / 500 = 3 comprimidos."
    },
    {
      id: 11,
      question: "Si una caja de anticonceptivos trae 21 comprimidos activos y se toma 1 al día, ¿cuántas cajas necesita una paciente para cubrir 63 días?",
      options: ["2 cajas", "3 cajas", "4 cajas", "6 cajas"],
      answer: "3 cajas",
      feedback: "63 días / 21 comprimidos por caja = 3 cajas exactas."
    },
    {
      id: 12,
      question: "Se receta un jarabe de 125 mg / 5 ml. Si el paciente debe tomar 250 mg cada 8 horas, ¿cuántos ml toma por vez?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      answer: "10 ml",
      feedback: "Dosis 250mg. Si 125mg están en 5ml, 250mg están en 10ml por toma."
    },
    {
      id: 13,
      question: "Un tratamiento de hierro indica 1 tableta al día por 3 meses (90 días). Si el frasco trae 60 tabletas, ¿cuántos frascos debe comprar para el tratamiento completo?",
      options: ["1 frasco", "1 frasco y medio (2 frascos)", "3 frascos", "4 frascos"],
      answer: "1 frasco y medio (2 frascos)",
      feedback: "Necesita 90. Un frasco no alcanza (60), necesita comprar 2 frascos."
    },
    {
      id: 14,
      question: "Se indica administrar 1 gramo de Vitamina C al día. Si los comprimidos efervescentes son de 1.000 mg, ¿cuántos comprimidos toma al día?",
      options: ["0,5 comprimido", "1 comprimido", "2 comprimidos", "10 comprimidos"],
      answer: "1 comprimido",
      feedback: "1 gramo es igual a 1.000 miligramos."
    },
    {
      id: 15,
      question: "Un colirio de 10 ml rinde aproximadamente 200 gotas. Si se indica 1 gota al día en el ojo derecho, ¿cuánto tiempo dura el frasco?",
      options: ["100 días", "200 días", "300 días", "Un año"],
      answer: "200 días",
      feedback: "200 gotas / 1 gota diaria = 200 días."
    },
    {
      id: 16,
      question: "Dosis diaria máxima de Ibuprofeno en adultos es 2.400 mg. Si los comprimidos son de 600 mg, ¿cuántos comprimidos al día representan el máximo?",
      options: ["2 comprimidos", "3 comprimidos", "4 comprimidos", "6 comprimidos"],
      answer: "4 comprimidos",
      feedback: "2400 / 600 = 4 unidades."
    },
    {
      id: 17,
      question: "Se receta suspensión de Nistatina de 100.000 UI/ml. Si la dosis es de 500.000 UI, ¿cuántos ml se deben administrar?",
      options: ["1 ml", "2.5 ml", "5 ml", "10 ml"],
      answer: "5 ml",
      feedback: "500.000 UI / 100.000 UI por ml = 5 ml."
    },
    {
      id: 18,
      question: "Un paciente toma 1/4 de comprimido de 100 mg de Aspirina. ¿Cuántos miligramos está ingiriendo?",
      options: ["10 mg", "25 mg", "50 mg", "75 mg"],
      answer: "25 mg",
      feedback: "100 mg dividido por 4 (un cuarto) = 25 mg."
    },
    {
      id: 19,
      question: "Una receta indica 2 cucharaditas de jarabe 3 veces al día. Si 1 cucharadita son 5 ml, ¿cuántos ml totales toma al día?",
      options: ["10 ml", "15 ml", "30 ml", "45 ml"],
      answer: "30 ml",
      feedback: "2 cucharaditas = 10 ml por vez. 10 ml x 3 veces = 30 ml diarios."
    },
    {
      id: 20,
      question: "Si un paciente debe tomar 40 mg de un fármaco y solo hay comprimidos de 10 mg, ¿cuántos comprimidos toma por dosis?",
      options: ["1 comprimido", "2 comprimidos", "4 comprimidos", "10 comprimidos"],
      answer: "4 comprimidos",
      feedback: "40 / 10 = 4 unidades."
    },
    {
      id: 21,
      question: "Un frasco de gotas pediátricas contiene 15 ml. Si 1 ml equivale a 20 gotas, ¿cuántas gotas totales trae el frasco?",
      options: ["150 gotas", "300 gotas", "450 gotas", "600 gotas"],
      answer: "300 gotas",
      feedback: "15 ml x 20 gotas/ml = 300 gotas."
    },
    {
      id: 22,
      question: "Se indica tratamiento de 500 mg cada 6 horas. ¿Cuántas tomas realiza el paciente en 24 horas?",
      options: ["2 tomas", "3 tomas", "4 tomas", "6 tomas"],
      answer: "4 tomas",
      feedback: "24 horas / 6 horas de frecuencia = 4 tomas al día."
    },
    {
      id: 23,
      question: "Un paciente requiere 0,25 mg de un fármaco. Si los comprimidos son de 0,5 mg, ¿cuánto debe tomar?",
      options: ["2 comprimidos", "1 comprimido", "Medio comprimido", "Un cuarto de comprimido"],
      answer: "Medio comprimido",
      feedback: "0,25 es la mitad de 0,5."
    },
    {
      id: 24,
      question: "Tratamiento de 1 comprimido al día por 28 días. Si la caja trae 14 comprimidos, ¿cuántas cajas debe comprar?",
      options: ["1 caja", "2 cajas", "3 cajas", "4 cajas"],
      answer: "2 cajas",
      feedback: "28 días / 14 por caja = 2 cajas."
    },
    {
      id: 25,
      question: "Dosis de 15 ml de un jarabe. ¿A cuántas cucharadas soperas equivale (1 cucharada = 15 ml)?",
      options: ["1 cucharada", "2 cucharadas", "3 cucharadas", "Medio frasco"],
      answer: "1 cucharada",
      feedback: "La cucharada sopera estándar se mide como 15 ml."
    },
    {
      id: 26,
      question: "Un paciente toma 2 comprimidos de 500 mg de Metformina en la mañana y 1 en la noche. ¿Cuál es su dosis diaria total?",
      options: ["500 mg", "1.000 mg", "1.500 mg", "2.000 mg"],
      answer: "1.500 mg",
      feedback: "3 comprimidos totales al día x 500 mg = 1.500 mg."
    },
    {
      id: 27,
      question: "Se indica 1 gramo de amoxicilina cada 8 horas. ¿Cuántos gramos totales toma el paciente en 24 horas?",
      options: ["1 gramo", "2 gramos", "3 gramos", "8 gramos"],
      answer: "3 gramos",
      feedback: "3 tomas al día de 1 g cada una = 3 g diarios."
    },
    {
      id: 28,
      question: "Si un jarabe de 100 ml se debe tomar en dosis de 5 ml cada 12 horas, ¿cuántos días dura el frasco?",
      options: ["5 días", "10 días", "20 días", "25 días"],
      answer: "10 días",
      feedback: "Toma 10 ml al día (5 ml x 2). 100 ml / 10 ml día = 10 días."
    },
    {
      id: 29,
      question: "Receta indica: 1 comprimido cada 12 horas por 10 días. ¿Cuántos comprimidos en total necesita?",
      options: ["10 comprimidos", "12 comprimidos", "20 comprimidos", "24 comprimidos"],
      answer: "20 comprimidos",
      feedback: "2 al día x 10 días = 20 unidades."
    },
    {
      id: 30,
      question: "Dosis pediátrica: 5 ml cada 6 horas. ¿Cuántos ml totales toma el niño al día?",
      options: ["10 ml", "15 ml", "20 ml", "30 ml"],
      answer: "20 ml",
      feedback: "4 tomas al día x 5 ml = 20 ml."
    },
    {
      id: 31,
      question: "Un paciente usa 2 inhalaciones de Salbutamol cada 4 horas por rescate. Si lo usa 6 veces en el día, ¿cuántas inhalaciones totales realizó?",
      options: ["6 inhalaciones", "8 inhalaciones", "10 inhalaciones", "12 inhalaciones"],
      answer: "12 inhalaciones",
      feedback: "2 inhalaciones x 6 veces = 12 totales."
    },
    {
      id: 32,
      question: "Si la dosis máxima de un fármaco es 10 mg al día y el paciente toma comprimidos de 2.5 mg, ¿cuántos comprimidos puede tomar como máximo?",
      options: ["2 comprimidos", "4 comprimidos", "6 comprimidos", "8 comprimidos"],
      answer: "4 comprimidos",
      feedback: "10 / 2.5 = 4."
    },
    {
      id: 33,
      question: "Un frasco de 30 ml de gotas. Si 1 ml son 20 gotas, ¿cuántas gotas hay en total?",
      options: ["300 gotas", "450 gotas", "600 gotas", "900 gotas"],
      answer: "600 gotas",
      feedback: "30 ml x 20 gotas = 600 gotas."
    },
    {
      id: 34,
      question: "Se indica 1,2 g de un medicamento al día dividido en 3 tomas. ¿Cuántos miligramos toma en cada dosis?",
      options: ["200 mg", "300 mg", "400 mg", "600 mg"],
      answer: "400 mg",
      feedback: "1,2 g = 1.200 mg. 1.200 / 3 dosis = 400 mg por toma."
    },
    {
      id: 35,
      question: "Un paciente crónico necesita 2 comprimidos diarios por 30 días. Si la caja trae 20 comprimidos, ¿cuántas cajas debe llevar?",
      options: ["1 caja", "2 cajas", "3 cajas", "4 cajas"],
      answer: "3 cajas",
      feedback: "Necesita 60 comprimidos (2x30). 60 / 20 por caja = 3 cajas."
    },
    {
      id: 36,
      question: "Dosis de 75 mg de un jarabe de 25 mg/ml. ¿Cuántos ml administra?",
      options: ["1 ml", "2 ml", "3 ml", "5 ml"],
      answer: "3 ml",
      feedback: "75 / 25 = 3 ml."
    },
    {
      id: 37,
      question: "Un tratamiento dura 5 días, tomando 1 cada 8 horas. ¿Cuántos comprimidos totales consume?",
      options: ["10 comprimidos", "15 comprimidos", "20 comprimidos", "24 comprimidos"],
      answer: "15 comprimidos",
      feedback: "3 al día x 5 días = 15 unidades."
    },
    {
      id: 38,
      question: "Un paciente toma 0,75 g de un fármaco. Si tiene cápsulas de 250 mg, ¿cuántas debe tomar?",
      options: ["1 cápsula", "2 cápsulas", "3 cápsulas", "4 cápsulas"],
      answer: "3 cápsulas",
      feedback: "0,75 g = 750 mg. 750 / 250 = 3 cápsulas."
    },
    {
      id: 39,
      question: "Si se deben administrar 2,5 ml de un jarabe, ¿a qué medida casera equivale aproximadamente?",
      options: ["Media cucharadita (de té)", "Una cucharadita llena", "Una cucharada sopera", "Un vaso de agua"],
      answer: "Media cucharadita (de té)",
      feedback: "Si la cucharadita de té son 5 ml, 2,5 ml es la mitad."
    },
    {
      id: 40,
      question: "Se indica 0,5 g de un medicamento cada 12 horas. ¿Cuántos miligramos totales toma al día?",
      options: ["500 mg", "750 mg", "1.000 mg", "2.000 mg"],
      answer: "1.000 mg",
      feedback: "0,5 g (500mg) x 2 veces al día = 1.000 mg."
    }
  ]
};
