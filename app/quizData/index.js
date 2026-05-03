// app/quizData/index.js

// Importaciones del Nivel Básico (Gratis) - Reducido a 3 niveles
// Importamos sin llaves (export default)
import basicEval1 from './basic-eval-1.js';
import basicEval2 from './basic-eval-2.js';
import basicEval3 from './basic-eval-3.js';

// Importaciones del Nivel PRO - Escalado a 15 evaluaciones + Global SEREMI
// Importamos con llaves porque este archivo usa 'export const'
import { proEval1 } from './pro-eval-1.js';
import { proEval2 } from './pro-eval-2.js';
import { proEval3 } from './pro-eval-3.js';
import { proEval4 } from './pro-eval-4.js';
import { proEval5 } from './pro-eval-5.js';
import { proEval6 } from './pro-eval-6.js';
import { proEval7 } from './pro-eval-7.js';
import { proEval8 } from './pro-eval-8.js';
import { proEval9 } from './pro-eval-9.js';
import { proEval10 } from './pro-eval-10.js';
import { proEval11 } from './pro-eval-11.js';
import { proEval12 } from './pro-eval-12.js';
import { proEval13 } from './pro-eval-13.js';
import { proEval14 } from './pro-eval-14.js';
import { proEval15 } from './pro-eval-15.js';
import { proEvalGlobal } from './pro-eval-global.js';

// Mantenemos los nombres de las constantes exportadas (LEVELS y PRO_LEVELS)
// ESTRATEGIA CTO: .filter(Boolean) elimina cualquier 'undefined' evitando caídas.
export const LEVELS = [
  basicEval1,
  basicEval2,
  basicEval3
].filter(Boolean);

export const PRO_LEVELS = [
  proEval1,
  proEval2,
  proEval3,
  proEval4,
  proEval5,
  proEval6,
  proEval7,
  proEval8,
  proEval9,
  proEval10,
  proEval11,
  proEval12,
  proEval13,
  proEval14,
  proEval15,
  proEvalGlobal
].filter(Boolean);