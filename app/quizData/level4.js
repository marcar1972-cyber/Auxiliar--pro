// app/quizData/level4.js
export const level4 = {
  id: 4,
  title: "Cálculos Farmacéuticos",
  icon: "GraduationCap", // Icono de birrete para estética profesional
  qCount: 40,
  timeLimit: 3600, // 60 minutos exactos para el nivel
  passingScore: 32, // 80% de aprobación exigido
  questions: [
    {
      text: "Un paciente presenta una receta que indica administrar 1 comprimido cada 8 horas. Si la caja adquirida contiene 30 comprimidos, ¿para cuántos días de tratamiento alcanza exactamente el stock?",
      options: ["5 días", "10 días", "15 días", "30 días"],
      correctIndex: 1,
      studyGuide: "8 horas equivalen a 3 tomas diarias. 30 unidades totales divididas por 3 unidades al día resultan en 10 días de stock."
    },
    {
      text: "La dosis máxima diaria recomendada de Paracetamol en un adulto sano es de 4 g. Si se dispone de comprimidos con una concentración de 1 g cada uno, ¿cuál es el número máximo de comprimidos permitidos en 24 horas?",
      options: ["2 comprimidos", "4 comprimidos", "6 comprimidos", "8 comprimidos"],
      correctIndex: 1,
      studyGuide: "Dosis total (4 g) dividida por la concentración unitaria (1 g) da un máximo de 4 unidades al día."
    },
    {
      text: "Se debe administrar una dosis de 500 mg de un jarabe cuya concentración declarada es de 250 mg por cada 5 ml. ¿Cuántos mililitros (ml) exactos debe medir el paciente?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 1,
      studyGuide: "Mediante regla de tres: si 250 mg están en 5 ml, los 500 mg (el doble) se encuentran en 10 ml."
    },
    {
      text: "Un paciente insulinodependiente debe inyectarse 20 unidades de insulina por la mañana y 10 unidades por la noche. Si el frasco contiene 1.000 unidades totales, ¿cuántos días durará el frasco?",
      options: ["30 días", "33 días", "45 días", "50 días"],
      correctIndex: 1,
      studyGuide: "Dosis diaria total: 30 unidades. 1.000 unidades del frasco dividido por 30 diarias resulta en 33,3 días de duración."
    },
    {
      text: "Una receta indica tomar 1 comprimido cada 12 horas por un periodo de 7 días. ¿Cuántos comprimidos en total debe dispensar el auxiliar para completar el tratamiento?",
      options: ["7 comprimidos", "14 comprimidos", "21 comprimidos", "28 comprimidos"],
      correctIndex: 1,
      studyGuide: "Frecuencia de 12 horas implica 2 tomas diarias. 2 unidades al día por 7 días de tratamiento resultan en 14 comprimidos."
    },
    {
      text: "Si un jarabe de 120 ml indica una posología de 5 ml cada 6 horas, ¿para cuántos días de tratamiento rinde el contenido total del frasco?",
      options: ["4 días", "6 días", "8 días", "10 días"],
      correctIndex: 1,
      studyGuide: "Frecuencia de 6 horas implica 4 tomas diarias. 4 tomas por 5 ml cada una son 20 ml al día. 120 ml dividido 20 ml diarios da 6 días."
    },
    {
      text: "Un médico prescribe 1,5 g de un fármaco repartido en 3 dosis diarias iguales. Si los comprimidos disponibles son de 500 mg, ¿cuántos comprimidos debe ingerir el paciente en cada toma?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "1.5 comprimidos"],
      correctIndex: 0,
      studyGuide: "1,5 g equivale a 1.500 mg totales. Dividido en 3 dosis, cada toma es de 500 mg, lo que corresponde a 1 comprimido."
    },
    {
      text: "Un inhalador de dosis medida cuenta con 200 dosis totales. Si el tratamiento indicado es de 2 inhalaciones (puffs) cada 12 horas, ¿cuántos días durará el inhalador?",
      options: ["25 días", "50 días", "100 días", "200 días"],
      correctIndex: 1,
      studyGuide: "2 inhalaciones cada 12 horas son 4 al día. 200 dosis totales dividido 4 diarias resultan en 50 días de stock."
    },
    {
      text: "Se solicita una dosis de 125 mg de un fármaco cuya presentación líquida es de 50 mg / 1 ml. ¿Qué volumen debe medir el auxiliar para cumplir la dosis?",
      options: ["1,5 ml", "2,5 ml", "3,5 ml", "5 ml"],
      correctIndex: 1,
      studyGuide: "Dosis deseada (125 mg) dividida por la concentración (50 mg por ml) resulta en 2,5 ml de volumen."
    },
    {
      text: "La dosis diaria máxima de Ibuprofeno en un adulto es de 2.400 mg. Si los comprimidos en stock son de 600 mg, ¿cuántos comprimidos al día representan el límite máximo?",
      options: ["2 comprimidos", "3 comprimidos", "4 comprimidos", "6 comprimidos"],
      correctIndex: 2,
      studyGuide: "2.400 mg de límite máximo dividido por la concentración de 600 mg por unidad da 4 comprimidos diarios."
    },
    {
      text: "Un paciente pediátrico pesa 10 kg y la dosis indicada es de 15 mg por cada kg de peso al día. ¿Cuántos miligramos totales debe recibir el niño en 24 horas?",
      options: ["100 mg", "150 mg", "200 mg", "300 mg"],
      correctIndex: 1,
      studyGuide: "Se multiplica el peso (10 kg) por la dosis unitaria (15 mg), resultando en 150 mg totales al día."
    },
    {
      text: "Un frasco de gotas oftálmicas de 15 ml indica que 1 ml equivale exactamente a 20 gotas. ¿Cuántas gotas totales contiene el envase?",
      options: ["150 gotas", "200 gotas", "300 gotas", "600 gotas"],
      correctIndex: 2,
      studyGuide: "15 ml de contenido total multiplicado por 20 gotas por cada mililitro resulta en 300 gotas."
    },
    {
      text: "Un colirio de 10 ml debe ser utilizado mediante 1 gota en cada ojo, 2 veces al día. Si el frasco rinde 200 gotas, ¿para cuántos días alcanza?",
      options: ["25 días", "50 días", "100 días", "200 días"],
      correctIndex: 1,
      studyGuide: "2 ojos con 1 gota cada uno son 2 gotas por vez. Al ser 2 veces al día, son 4 gotas diarias. 200 gotas / 4 diarias = 50 días."
    },
    {
      text: "Si se indica una dosis única de 0,5 g de un fármaco y se dispone de comprimidos de 250 mg, ¿cuántas unidades debe ingerir el paciente?",
      options: ["0.5 comprimido", "1 comprimido", "2 comprimidos", "4 comprimidos"],
      correctIndex: 2,
      studyGuide: "0,5 g es equivalente a 500 mg. 500 mg requeridos dividido 250 mg por comprimido resulta en 2 unidades."
    },
    {
      text: "Un frasco de jarabe de 60 ml indica una dosis de 1 cucharadita (5 ml) una vez al día. ¿Cuántas dosis totales contiene el frasco?",
      options: ["6 dosis", "10 dosis", "12 dosis", "15 dosis"],
      correctIndex: 2,
      studyGuide: "60 ml totales dividido por la dosis de 5 ml resulta en un total de 12 dosis disponibles."
    },
    {
      text: "Un tratamiento requiere 1 gramo de Amoxicilina cada 8 horas. Si los comprimidos disponibles son de 500 mg, ¿cuántos comprimidos toma en cada toma?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "4 comprimidos"],
      correctIndex: 1,
      studyGuide: "1 g equivale a 1.000 mg. 1.000 mg requeridos dividido 500 mg por comprimido resulta en 2 comprimidos por vez."
    },
    {
      text: "Un paciente ingiere 2 comprimidos de 500 mg de Metformina en la mañana y 1 comprimido en la noche. ¿Cuál es su dosis diaria total en miligramos?",
      options: ["500 mg", "1.000 mg", "1.500 mg", "2.000 mg"],
      correctIndex: 2,
      studyGuide: "3 comprimidos totales al día multiplicados por 500 mg cada uno resultan en 1.500 mg diarios."
    },
    {
      text: "Se receta un jarabe con concentración 125 mg / 5 ml. El paciente debe tomar 250 mg cada 12 horas. ¿Cuántos mililitros debe tomar por dosis?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 1,
      studyGuide: "Si 125 mg están en 5 ml, los 250 mg requeridos se encuentran contenidos en 10 ml."
    },
    {
      text: "Un tratamiento antibiótico dura 10 días, tomando 1 comprimido cada 6 horas. ¿Cuántos comprimidos totales requiere el tratamiento?",
      options: ["10 comprimidos", "20 comprimidos", "30 comprimidos", "40 comprimidos"],
      correctIndex: 3,
      studyGuide: "Cada 6 horas son 4 tomas diarias. 4 tomas al día por 10 días resultan en 40 comprimidos totales."
    },
    {
      text: "Un paciente debe tomar 1/4 de comprimido de 100 mg de Ácido Acetilsalicílico. ¿Cuántos miligramos consume en cada toma?",
      options: ["10 mg", "25 mg", "50 mg", "75 mg"],
      correctIndex: 1,
      studyGuide: "100 mg dividido por 4 (la cuarta parte) resulta en una dosis de 25 mg."
    },
    {
      text: "La dosis pediátrica indicada es de 5 ml de jarabe cada 8 horas. ¿Cuántos ml totales consume el niño en 24 horas?",
      options: ["10 ml", "15 ml", "20 ml", "25 ml"],
      correctIndex: 1,
      studyGuide: "Cada 8 horas implica 3 tomas al día. 3 tomas de 5 ml cada una resultan en 15 ml totales al día."
    },
    {
      text: "Si un inhalador de 200 dosis se utiliza 2 inhalaciones en la mañana y 2 en la noche, ¿cuántos días durará el producto?",
      options: ["25 días", "50 días", "75 días", "100 días"],
      correctIndex: 1,
      studyGuide: "Uso diario total de 4 inhalaciones. 200 dosis dividido 4 diarias resulta en 50 días de stock."
    },
    {
      text: "Un paciente debe tomar 0,75 g de un fármaco. Si solo se dispone de cápsulas de 250 mg, ¿cuántas debe tomar por dosis?",
      options: ["1 cápsula", "2 cápsulas", "3 cápsulas", "4 cápsulas"],
      correctIndex: 2,
      studyGuide: "0,75 g es igual a 750 mg. 750 mg requerido dividido 250 mg por cápsula resulta en 3 unidades."
    },
    {
      text: "Se indica administrar 2,5 ml de un jarabe pediátrico. ¿A qué medida casera equivale este volumen aproximadamente?",
      options: ["1 cucharada sopera", "1 cucharadita de té", "Media cucharadita de té", "Un vasito medidor"],
      correctIndex: 2,
      studyGuide: "La cucharadita de té estándar son 5 ml, por lo tanto 2,5 ml equivalen a la mitad de dicha medida."
    },
    {
      text: "Un paciente toma 1 comprimido al día de un anticonceptivo en envase de 28 días. ¿Cuántas cajas necesita para cubrir 84 días de tratamiento?",
      options: ["2 cajas", "3 cajas", "4 cajas", "6 cajas"],
      correctIndex: 1,
      studyGuide: "84 días totales dividido por 28 comprimidos que trae cada caja resulta en 3 cajas exactas."
    },
    {
      text: "Un tratamiento requiere 1,2 g diarios divididos en 3 tomas iguales. ¿Cuántos miligramos debe tomar el paciente en cada dosis?",
      options: ["200 mg", "300 mg", "400 mg", "600 mg"],
      correctIndex: 2,
      studyGuide: "1,2 g equivale a 1.200 mg. 1.200 mg dividido 3 dosis resulta en 400 mg por cada toma."
    },
    {
      text: "Un frasco de 30 ml de gotas tiene una concentración de 100 mg / 1 ml. ¿Cuántos miligramos totales de principio activo contiene el frasco?",
      options: ["1.000 mg", "3.000 mg", "100 mg", "1.500 mg"],
      correctIndex: 1,
      studyGuide: "30 ml de contenido total multiplicado por 100 mg por cada mililitro resulta en 3.000 mg totales."
    },
    {
      text: "Si la dosis indicada es 1 gramo cada 24 horas y el comprimido disponible es de 500 mg, ¿cuántos comprimidos toma por dosis?",
      options: ["1 comprimido", "2 comprimidos", "3 comprimidos", "4 comprimidos"],
      correctIndex: 1,
      studyGuide: "1 g equivale a 1.000 mg. Se requieren 2 unidades de 500 mg para cumplir la dosis."
    },
    {
      text: "Un jarabe de 100 ml rinde exactamente 20 dosis de 5 ml. Si el paciente toma la dosis cada 12 horas, ¿cuántos días dura el frasco?",
      options: ["5 días", "10 días", "15 días", "20 días"],
      correctIndex: 1,
      studyGuide: "Dosis diaria: 10 ml (5 ml cada 12h). 100 ml totales dividido 10 ml diarios resulta en 10 días."
    },
    {
      text: "Un paciente debe administrarse 2 gotas en cada ojo, 3 veces al día. ¿Cuántas gotas totales consume en una jornada?",
      options: ["6 gotas", "8 gotas", "10 gotas", "12 gotas"],
      correctIndex: 3,
      studyGuide: "2 ojos multiplicado por 2 gotas son 4 gotas por toma. Al ser 3 tomas diarias, resultan en 12 gotas."
    },
    {
      text: "Se indica una dosis de 0,25 mg de un fármaco. Disponemos de comprimidos de 0,5 mg en el local. ¿Cuál es la dosis física correcta?",
      options: ["1 comprimido", "Medio comprimido", "Un cuarto de comprimido", "2 comprimidos"],
      correctIndex: 1,
      studyGuide: "0,25 mg representa exactamente la mitad de un comprimido de 0,5 mg."
    },
    {
      text: "Un niño pesa 20 kg y la dosis indicada es 10 mg por cada kg de peso al día. ¿Cuál es la dosis diaria total?",
      options: ["100 mg", "200 mg", "400 mg", "500 mg"],
      correctIndex: 1,
      studyGuide: "Se multiplica el peso (20 kg) por la dosis unitaria (10 mg/kg), resultando en 200 mg diarios."
    },
    {
      text: "Si la dosis requerida es 300 mg y la presentación es de 100 mg / 5 ml, ¿cuántos mililitros debe medir el auxiliar?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 2,
      studyGuide: "Si 100 mg están en 5 ml, los 300 mg (el triple) se encuentran en 15 ml."
    },
    {
      text: "Un frasco de 60 ml indica una posología de 2,5 ml cada 8 horas. ¿Cuántos días dura el tratamiento completo?",
      options: ["4 días", "6 días", "8 días", "10 días"],
      correctIndex: 2,
      studyGuide: "Consumo diario: 7,5 ml (2,5 ml tres veces). 60 ml dividido 7,5 ml diarios resulta en 8 días."
    },
    {
      text: "Se receta 1,5 g de Vitamina C al día. Si el comprimido efervescente disponible es de 1.000 mg, ¿cuántos toma?",
      options: ["1 comprimido", "1,5 comprimidos", "2 comprimidos", "3 comprimidos"],
      correctIndex: 1,
      studyGuide: "1.500 mg requeridos dividido por 1.000 mg por comprimido resulta en 1,5 unidades."
    },
    {
      text: "Un tratamiento requiere 40 mg de un fármaco. Tenemos gotas de 20 mg / ml (donde 1 ml = 20 gotas). ¿Cuántas gotas toma?",
      options: ["10 gotas", "20 gotas", "40 gotas", "60 gotas"],
      correctIndex: 2,
      studyGuide: "Requiere 2 ml para alcanzar 40 mg. 2 ml multiplicados por 20 gotas resulta en 40 gotas."
    },
    {
      text: "Dosis de 1 gramo cada 12 horas indicada en receta médica. ¿Cuántos gramos totales toma el paciente en 24 horas?",
      options: ["1 gramo", "2 gramos", "3 gramos", "4 gramos"],
      correctIndex: 1,
      studyGuide: "Dos tomas diarias de 1 g cada una resultan en un total de 2 gramos al día."
    },
    {
      text: "Un paciente asmático usa 2 inhalaciones de rescate 4 veces al día. ¿Cuántas dosis consume en total durante la jornada?",
      options: ["4 dosis", "6 dosis", "8 dosis", "10 dosis"],
      correctIndex: 2,
      studyGuide: "2 inhalaciones multiplicadas por 4 veces al día resultan en 8 dosis totales."
    },
    {
      text: "Si un paciente debe tomar 375 mg de un jarabe con concentración 125 mg / 5 ml, ¿cuántos ml debe medir?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      correctIndex: 2,
      studyGuide: "375 mg dividido 125 mg por unidad resulta en 3 dosis de 5 ml, es decir, 15 ml."
    },
    {
      text: "Un frasco de 20 ml indica que se debe administrar 1 ml por cada dosis. ¿Cuántas dosis rinde el frasco?",
      options: ["10 dosis", "20 dosis", "30 dosis", "40 dosis"],
      correctIndex: 1,
      studyGuide: "20 ml totales dividido por 1 ml que es la dosis unitaria resulta en 20 dosis exactas."
    }
  ]
};
