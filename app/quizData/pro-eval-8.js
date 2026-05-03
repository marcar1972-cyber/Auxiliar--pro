// app/quizData/pro-eval-8.js

export const proEval8 = {
  id: "pro-eval-8",
  title: "Evaluación PRO 8: Formas Farmacéuticas Semisólidas y Tópicas (Módulo 2.4)",
  description: "Diferenciación técnica entre cremas, pomadas, geles y pastas, junto a la normativa de fraccionamiento de óvulos y supositorios.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente consulta si puede fraccionar una tira de 6 óvulos de Clotrimazol porque solo le recetaron 3. ¿Es legal este procedimiento?",
      options: [
        "A) No, los óvulos no se pueden fraccionar bajo ninguna circunstancia.",
        "B) Sí, el Art. 40 del DTO 466 permite el fraccionamiento de semisólidos moldeados como óvulos y supositorios.",
        "C) Solo si la farmacia tiene un recetario magistral.",
        "D) Solo si el médico lo autorizó por escrito en la receta."
      ],
      correctAnswer: 1, // B
      explanation: "El Art. 40 del DTO 466 prohíbe fraccionar líquidos o cremas en pote, pero permite expresamente el fraccionamiento de formas farmacéuticas sólidas y semisólidas moldeadas (como supositorios y óvulos), siempre que el corte mantenga el envase primario (blíster) intacto y sellado."
    },
    {
      question: "2. ¿Cuál es la principal diferencia técnica entre una pomada y una crema?",
      options: [
        "A) La pomada es de venta directa y la crema requiere receta simple.",
        "B) La pomada es un sistema monofásico generalmente graso, mientras que la crema es una emulsión multifásica (agua/aceite).",
        "C) La crema siempre es estéril y la pomada no.",
        "D) No hay diferencia, son sinónimos."
      ],
      correctAnswer: 1, // B
      explanation: "Fundamento físico-químico: Las pomadas son sistemas monofásicos (generalmente lipofílicos o muy grasos) altamente oclusivos. Las cremas son emulsiones de dos fases (agua en aceite o aceite en agua), lo que permite mayor cosmeticidad, mejor absorción y facilidad de lavado."
    },
    {
      question: "3. Caso de Mesón: Un paciente anciano tiene una irritación por pañal y busca una 'Pasta Lassar'. Usted sabe que esta es una pasta porque:",
      options: [
        "A) Es muy líquida y se absorbe de inmediato.",
        "B) Tiene una alta concentración de polvos dispersos que actúan como barrera física.",
        "C) Contiene alcohol en su composición.",
        "D) Solo se vende en hospitales."
      ],
      correctAnswer: 1, // B
      explanation: "En tecnología farmacéutica, las pastas son preparados semisólidos que contienen una alta proporción (frecuentemente entre 20% y 50%) de polvos finamente dispersos en el excipiente, lo que les otorga propiedades de barrera protectora gruesa y rigidez."
    },
    {
      question: "4. Según el Art. 86 del Decreto 466, ¿cómo debe expresarse la fórmula de una crema en su rotulado?",
      options: [
        "A) Solo el nombre del principio activo.",
        "B) En miligramos por envase total.",
        "C) En porcentajes y en la dosis unitaria respectiva.",
        "D) Solo con el nombre genérico internacional (DCI)."
      ],
      correctAnswer: 2, // C
      explanation: "El Artículo 86 del DTO 466 exige transparencia total en la concentración. Para ungüentos, pomadas o cremas, la fórmula cuali-cuantitativa debe expresarse obligatoriamente indicando la cantidad de principio activo en porcentajes y en su dosis unitaria."
    },
    {
      question: "5. ¿Qué riesgo sanitario se corre al utilizar un semisólido cuya fecha de expiración ya pasó?",
      options: [
        "A) Ninguno, las cremas duran para siempre.",
        "B) El producto ya no garantiza estabilidad, pudiendo haber crecido microorganismos en su fase acuosa o degradado el fármaco.",
        "C) Solo que el olor sea un poco más fuerte.",
        "D) El precio debe ser reembolsado por el laboratorio."
      ],
      correctAnswer: 1, // B
      explanation: "Según el Art. 5 del DS 3 (Reglamento de Productos Farmacéuticos), la fecha de vencimiento marca el límite de estabilidad probada. Las cremas, al poseer una fase acuosa, son altamente susceptibles a la proliferación bacteriana y fúngica una vez que caducan sus conservantes."
    },
    {
      question: "6. Caso de Mesón: Una madre solicita un gel analgésico para su hijo deportista porque dice que 'se absorbe más rápido'. Técnicamente, esto se debe a que:",
      options: [
        "A) Los geles contienen más grasa que las pomadas.",
        "B) Los geles tienen una estructura que permite una liberación más rápida del fármaco al no tener fases grasas oclusivas.",
        "C) Los geles son siempre bioequivalentes.",
        "D) El color transparente ayuda a la absorción."
      ],
      correctAnswer: 1, // B
      explanation: "Biofarmacéuticamente, los geles son sistemas coloidales semisólidos donde el líquido (generalmente agua o alcohol) está inmovilizado por una red tridimensional. Al carecer de bases grasas oclusivas, liberan el principio activo muy rápidamente tras la evaporación del solvente en la piel."
    },
    {
      question: "7. Al dispensar una receta de Betametasona crema, el auxiliar debe informar al paciente sobre:",
      options: [
        "A) Que debe aplicarla sobre heridas sangrantes.",
        "B) La importancia de lavar y secar la zona antes de la aplicación para favorecer la penetración.",
        "C) Que puede mezclarla con su perfume favorito.",
        "D) Que debe guardarla en el congelador."
      ],
      correctAnswer: 1, // B
      explanation: "Parte fundamental del rol del auxiliar como educador sanitario es indicar el uso correcto. Aplicar sobre piel limpia y seca elimina barreras de suciedad o sebo, optimiza la absorción del corticoide y previene la sobreinfección bajo la capa de crema."
    },
    {
      question: "8. ¿Qué documento oficial del Ministerio de Salud define a la farmacia como un 'Centro de Salud' responsable de la dispensación informada?",
      options: [
        "A) Decreto 404.",
        "B) DFL 725 (Código Sanitario).",
        "C) Ley de Tránsito.",
        "D) Código de Comercio."
      ],
      correctAnswer: 1, // B
      explanation: "El DFL 725 (Código Sanitario), tras las modificaciones introducidas por la Ley 20.724 (Ley de Fármacos), define expresamente a las farmacias en Chile como 'Centros de Salud', elevando su rol desde el simple comercio hacia la responsabilidad de dispensación clínica e informada."
    },
    {
      question: "9. ¿Cuál de estos semisólidos se utiliza principalmente para proteger la piel de agentes irritantes formando una capa gruesa e impermeable?",
      options: [
        "A) Gel de Diclofenaco.",
        "B) Crema de Hidrocortisona.",
        "C) Pasta de Óxido de Zinc.",
        "D) Solución de Yodo."
      ],
      correctAnswer: 2, // C
      explanation: "La Pasta de Óxido de Zinc (comúnmente conocida como Pasta Lassar) es el ejemplo clásico de un semisólido protector cutáneo. Su altísima carga de polvos sólidos crea una barrera física gruesa e impermeable contra la humedad y fluidos irritantes."
    },
    {
      question: "10. Un inspector de la SEREMI fiscaliza el área de despacho de semisólidos y nota que un auxiliar está trasvasijando crema de un pote grande a uno pequeño sin etiquetas. ¿Qué falta se configura?",
      options: [
        "A) Ninguna, es un fraccionamiento normal.",
        "B) Infracción al Art. 40, ya que los semisólidos no moldeados (cremas en pote) no son fraccionables y el rotulado debe ser completo.",
        "C) Falta administrativa del Director Técnico solamente.",
        "D) Es legal si el pote pequeño es nuevo."
      ],
      correctAnswer: 1, // B
      explanation: "El trasvasije (sacar contenido de un pote grande a granel hacia uno menor) está estrictamente prohibido porque altera la estabilidad, genera contaminación cruzada y rompe la trazabilidad. Solo se permite el fraccionamiento entregando unidades selladas de fábrica en su envase primario."
    }
  ]
};