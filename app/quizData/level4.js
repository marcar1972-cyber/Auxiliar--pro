export const level4 = {
  id: 4,
  title: "Cálculos Farmacéuticos",
  icon: "GraduationCap", // Cambiado para usar el icono de la imagen
  qCount: 40,
  timeLimit: 1200,
  passingScore: 32,
  questions: [
    {
      text: "Un tratamiento médico indica la administración de 1 comprimido cada 8 horas. Si la caja contiene 30 comprimidos, ¿para cuántos días alcanza el tratamiento?",
      options: ["5 días", "10 días", "15 días", "30 días"],
      correctIndex: 1,
      studyGuide: "Si se toma 1 cada 8 horas, son 3 al día (24/8=3). 30 comprimidos / 3 diarios = 10 días."
    },
    {
      text: "La dosis máxima diaria de Paracetamol recomendada en adultos es de 4 g. Si el medicamento viene en comprimidos de 1 g, ¿cuál es el número máximo de comprimidos permitidos al día?",
      options: ["2 comprimidos", "4 comprimidos", "6 comprimidos", "8 comprimidos"],
      correctIndex: 1,
      studyGuide: "4 g de dosis total diaria / 1 g por comprimido = 4 unidades diarias."
    },
    {
      text: "Se debe administrar una dosis de 500 mg de un jarabe cuya concentración es de 250 mg por cada 5 ml. ¿Cuántos mililitros (ml) debe medir el paciente?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 1,
      studyGuide: "Por regla de tres: (500 mg * 5 ml) / 250 mg = 10 ml."
    },
    {
      text: "Un paciente debe inyectarse 20 unidades de insulina por la mañana y 10 unidades por la noche. Si el frasco contiene 1.000 unidades, ¿cuántos días durará el frasco?",
      options: ["30 días", "33 días", "45 días", "50 días"],
      correctIndex: 1,
      studyGuide: "Dosis diaria total: 30 unidades. 1.000 unidades / 30 unidades diarias = 33,3 días."
    },
    {
      text: "Una receta indica tomar 1 comprimido cada 12 horas por un periodo de 7 días. ¿Cuántos comprimidos en total necesita el paciente para completar el tratamiento?",
      options: ["7 comprimidos", "14 comprimidos", "21 comprimidos", "28 comprimidos"],
      correctIndex: 1,
      studyGuide: "1 cada 12 horas = 2 al día. 2 al día * 7 días = 14 comprimidos totales."
    },
    {
      text: "Si un jarabe de 120 ml indica una dosis de 5 ml cada 6 horas, ¿para cuántos días de tratamiento rinde el frasco?",
      options: ["4 días", "6 días", "8 días", "10 días"],
      correctIndex: 1,
      studyGuide: "Cada 6 horas son 4 tomas diarias. 4 * 5 ml = 20 ml al día. 120 ml / 20 ml = 6 días."
    },
    {
      text: "Un médico indica 1,5 g de un medicamento repartido en 3 dosis iguales al día. Si los comprimidos son de 500 mg, ¿cuántos comprimidos toma en cada dosis?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "1.5 comprimidos"],
      correctIndex: 0,
      studyGuide: "1,5 g = 1.500 mg totales. 1.500 / 3 dosis = 500 mg por dosis (lo que equivale a 1 comprimido)."
    },
    {
      text: "Un inhalador tiene 200 dosis totales. Si el tratamiento indicado es de 2 inhalaciones (puffs) cada 12 horas, ¿cuántos días durará el inhalador?",
      options: ["25 días", "50 días", "100 días", "200 días"],
      correctIndex: 1,
      studyGuide: "2 inhalaciones cada 12 horas = 4 al día. 200 dosis / 4 diarias = 50 días."
    },
    {
      text: "Se solicita una dosis de 125 mg de un fármaco cuya presentación es de 50 mg / 1 ml. ¿Qué volumen debe medir el auxiliar para el paciente?",
      options: ["1,5 ml", "2,5 ml", "3,5 ml", "5 ml"],
      correctIndex: 1,
      studyGuide: "Dosis deseada (125 mg) / Concentración (50 mg) = 2,5 ml."
    },
    {
      text: "La dosis diaria máxima de Ibuprofeno en adultos es de 2.400 mg. Si los comprimidos son de 600 mg, ¿cuántos comprimidos al día representan el máximo permitido?",
      options: ["2 comprimidos", "3 comprimidos", "4 comprimidos", "6 comprimidos"],
      correctIndex: 2,
      studyGuide: "2.400 mg / 600 mg por unidad = 4 comprimidos diarios."
    },
    {
      text: "Un paciente pediátrico pesa 10 kg y la dosis indicada es de 15 mg por cada kg al día. ¿Cuántos miligramos totales debe tomar al día?",
      options: ["100 mg", "150 mg", "200 mg", "300 mg"],
      correctIndex: 1,
      studyGuide: "10 kg de peso * 15 mg = 150 mg totales diarios."
    },
    {
      text: "Un frasco de gotas de 15 ml indica que 1 ml equivale a 20 gotas. ¿Cuántas gotas totales contiene el frasco?",
      options: ["150 gotas", "200 gotas", "300 gotas", "600 gotas"],
      correctIndex: 2,
      studyGuide: "15 ml de contenido * 20 gotas por cada ml = 300 gotas totales."
    },
    {
      text: "Un colirio de 10 ml se debe usar 1 gota en cada ojo, 2 veces al día. Si el frasco rinde aproximadamente 200 gotas, ¿para cuántos días alcanza?",
      options: ["25 días", "50 días", "100 días", "200 días"],
      correctIndex: 1,
      studyGuide: "2 ojos * 1 gota * 2 veces = 4 gotas al día. 200 gotas / 4 diarias = 50 días."
    },
    {
      text: "Si se indica una dosis única de 0,5 g de un fármaco y se dispone de comprimidos de 250 mg, ¿cuántos comprimidos debe ingerir el paciente?",
      options: ["0.5 comprimido", "1 comprimido", "2 comprimidos", "4 comprimidos"],
      correctIndex: 2,
      studyGuide: "0,5 g es igual a 500 mg. 500 mg / 250 mg por unidad = 2 comprimidos."
    },
    {
      text: "Un frasco de jarabe de 60 ml indica una dosis de 1 cucharadita (5 ml) al día. ¿Cuántas dosis totales contiene el envase?",
      options: ["6 dosis", "10 dosis", "12 dosis", "15 dosis"],
      correctIndex: 2,
      studyGuide: "60 ml totales / 5 ml por dosis = 12 dosis en el frasco."
    },
    {
      text: "Un tratamiento requiere 1 gramo de Amoxicilina cada 8 horas. Si los comprimidos en stock son de 500 mg, ¿cuántos comprimidos toma en cada toma?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "4 comprimidos"],
      correctIndex: 1,
      studyGuide: "1 g = 1.000 mg. 1.000 mg / 500 mg por comprimido = 2 comprimidos por vez."
    },
    {
      text: "Un paciente ingiere 2 comprimidos de 500 mg de Metformina en la mañana y 1 comprimido en la noche. ¿Cuál es su dosis diaria total?",
      options: ["500 mg", "1.000 mg", "1.500 mg", "2.000 mg"],
      correctIndex: 2,
      studyGuide: "3 comprimidos totales al día * 500 mg = 1.500 mg diarios."
    },
    {
      text: "Se receta un jarabe de 125 mg / 5 ml. El paciente debe tomar 250 mg cada 12 horas. ¿Cuántos mililitros debe tomar en cada dosis?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 1,
      studyGuide: "Si 125 mg están en 5 ml, los 250 mg están contenidos en 10 ml."
    },
    {
      text: "Un tratamiento antibiótico dura 10 días, tomando 1 comprimido cada 6 horas. ¿Cuántos comprimidos en total debe dispensar?",
      options: ["10 comprimidos", "20 comprimidos", "30 comprimidos", "40 comprimidos"],
      correctIndex: 3,
      studyGuide: "Cada 6 horas = 4 tomas al día. 4 al día * 10 días = 40 unidades."
    },
    {
      text: "Un paciente debe tomar 1/4 de comprimido de 100 mg de Ácido Acetilsalicílico. ¿Cuántos miligramos consume en cada toma?",
      options: ["10 mg", "25 mg", "50 mg", "75 mg"],
      correctIndex: 1,
      studyGuide: "100 mg / 4 (la cuarta parte) = 25 mg."
    },
    {
      text: "La dosis pediátrica indicada es de 5 ml de jarabe cada 8 horas. ¿Cuántos ml totales consume el niño en 24 horas?",
      options: ["10 ml", "15 ml", "20 ml", "25 ml"],
      correctIndex: 1,
      studyGuide: "Cada 8 horas = 3 veces al día. 3 tomas * 5 ml = 15 ml totales."
    },
    {
      text: "Si un inhalador de 200 dosis se utiliza 2 inhalaciones en la mañana y 2 en la noche, ¿cuántos días durará el producto?",
      options: ["25 días", "50 días", "75 días", "100 días"],
      correctIndex: 1,
      studyGuide: "Uso diario: 4 inhalaciones. 200 dosis / 4 diarias = 50 días de stock."
    },
    {
      text: "Un paciente debe tomar 0,75 g de un fármaco. Si en la farmacia solo hay cápsulas de 250 mg, ¿cuántas debe tomar por dosis?",
      options: ["1 cápsula", "2 cápsulas", "3 cápsulas", "4 cápsulas"],
      correctIndex: 2,
      studyGuide: "0,75 g = 750 mg. 750 mg / 250 mg por cápsula = 3 cápsulas."
    },
    {
      text: "Se indica administrar 2,5 ml de un jarabe pediátrico. ¿A qué medida casera equivale este volumen aproximadamente?",
      options: ["1 cucharada sopera", "1 cucharadita de té", "Media cucharadita de té", "Un vasito medidor"],
      correctIndex: 2,
      studyGuide: "Si la cucharadita de té estándar son 5 ml, los 2,5 ml equivalen a la mitad."
    },
    {
      text: "Un paciente toma 1 comprimido al día de un anticonceptivo de 28 días. ¿Cuántas cajas necesita para cubrir 3 meses de tratamiento (84 días)?",
      options: ["2 cajas", "3 cajas", "4 cajas", "6 cajas"],
      correctIndex: 1,
      studyGuide: "84 días totales / 28 comprimidos por caja = 3 cajas exactas."
    },
    {
      text: "Un tratamiento requiere 1,2 g diarios divididos en 3 tomas iguales. ¿Cuántos miligramos debe tomar en cada dosis?",
      options: ["200 mg", "300 mg", "400 mg", "600 mg"],
      correctIndex: 2,
      studyGuide: "1,2 g = 1.200 mg. 1.200 mg / 3 dosis = 400 mg por toma."
    },
    {
      text: "Un frasco de 30 ml de gotas tiene una concentración de 100 mg / 1 ml. ¿Cuántos miligramos totales de principio activo trae el frasco?",
      options: ["1.000 mg", "3.000 mg", "100 mg", "1.500 mg"],
      correctIndex: 1,
      studyGuide: "30 ml totales * 100 mg por cada ml = 3.000 mg."
    },
    {
      text: "Si la dosis indicada es 1 gramo cada 24 horas y el comprimido disponible es de 500 mg, ¿cuántos comprimidos toma por vez?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "4 comprimidos"],
      correctIndex: 1,
      studyGuide: "1 g = 1.000 mg. Se necesitan 2 unidades de 500 mg."
    },
    {
      text: "Un jarabe de 100 ml rinde exactamente 20 dosis de 5 ml. Si se toma cada 12 horas, ¿cuántos días dura el frasco?",
      options: ["5 días", "10 días", "15 días", "20 días"],
      correctIndex: 1,
      studyGuide: "Dosis diaria: 10 ml (5 ml cada 12h). 100 ml / 10 ml diarios = 10 días."
    },
    {
      text: "Un paciente debe administrarse 2 gotas en cada ojo, 3 veces al día. ¿Cuántas gotas totales consume en una jornada?",
      options: ["6 gotas", "8 gotas", "10 gotas", "12 gotas"],
      correctIndex: 3,
      studyGuide: "4 gotas por toma (2 ojos) * 3 tomas diarias = 12 gotas totales."
    },
    {
      text: "Se indica una dosis de 0,25 mg de un fármaco. Disponemos de comprimidos de 0,5 mg. ¿Cuál es la dosis correcta?",
      options: ["1 comprimido", "Medio comprimido", "Un cuarto de comprimido", "2 comprimidos"],
      correctIndex: 1,
      studyGuide: "0,25 mg representa exactamente la mitad de 0,5 mg."
    },
    {
      text: "Un niño pesa 20 kg y la dosis indicada es 10 mg por cada kg al día. ¿Cuál es la dosis diaria total?",
      options: ["100 mg", "200 mg", "400 mg", "500 mg"],
      correctIndex: 1,
      studyGuide: "20 kg de peso * 10 mg por kilo = 200 mg diarios."
    },
    {
      text: "Si la dosis requerida es 300 mg y la presentación es de 100 mg / 5 ml, ¿cuántos ml debe administrar?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 2,
      studyGuide: "Si 100 mg son 5 ml, entonces 300 mg son 15 ml (el triple)."
    },
    {
      text: "Un frasco de 60 ml indica una posología de 2,5 ml cada 8 horas. ¿Cuántos días dura el tratamiento?",
      options: ["4 días", "6 días", "8 días", "10 días"],
      correctIndex: 2,
      studyGuide: "Consumo diario: 7,5 ml (2.5 ml * 3). 60 ml / 7,5 ml diarios = 8 días."
    },
    {
      text: "Se receta 1,5 g de Vitamina C al día. Si el comprimido efervescente es de 1.000 mg, ¿cuántos toma?",
      options: ["1 comprimido", "1,5 comprimidos", "2 comprimidos", "3 comprimidos"],
      correctIndex: 1,
      studyGuide: "1.500 mg requeridos / 1.000 mg por comprimido = 1.5 unidades."
    },
    {
      text: "Un tratamiento requiere 40 mg de un fármaco. Tenemos gotas de 20 mg / ml (donde 1 ml = 20 gotas). ¿Cuántas gotas toma?",
      options: ["10 gotas", "20 gotas", "40 gotas", "60 gotas"],
      correctIndex: 2,
      studyGuide: "Necesita 2 ml para llegar a 40 mg. 2 ml * 20 gotas = 40 gotas."
    },
    {
      text: "Dosis de 1 gramo cada 12 horas indicada por el médico. ¿Cuántos gramos totales toma el paciente en 24 horas?",
      options: ["1 gramo", "2 gramos", "3 gramos", "4 gramos"],
      correctIndex: 1,
      studyGuide: "2 tomas diarias de 1 g cada una = 2 gramos totales."
    },
    {
      text: "Un paciente asmático usa 2 inhalaciones de rescate 4 veces al día. ¿Cuántas dosis consume al día?",
      options: ["4 dosis", "6 dosis", "8 dosis", "10 dosis"],
      correctIndex: 2,
      studyGuide: "2 inhalaciones * 4 veces = 8 dosis totales al día."
    },
    {
      text: "Si un paciente debe tomar 375 mg de un jarabe concentrado a 125 mg / 5 ml, ¿cuántos ml toma?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 2,
      studyGuide: "375 mg / 125 mg = 3 dosis de 5 ml cada una = 15 ml."
    },
    {
      text: "Un frasco de 20 ml indica que se debe administrar 1 ml por dosis. ¿Cuántas dosis rinde el frasco?",
      options: ["10 dosis", "20 dosis", "30 dosis", "40 dosis"],
      correctIndex: 1,
      studyGuide: "20 ml totales / 1 ml por cada dosis = 20 dosis exactas."
    }
  ]
};
