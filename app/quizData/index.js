// app/quizData/index.js

// Importaciones del Nivel PRO
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
import { proEvalGlobal01 } from './pro-eval-global-01.js';

// 🚀 CTO FIX: El diagnóstico tiene su propia página (page.tsx).
// Si las preguntas están dentro de ese page.tsx, no necesitamos importarlo aquí.
// (Solo descomenta la línea de abajo si tu page.tsx importa los datos desde un archivo .js aquí)
// import diagnosticoData from './nombre-real-de-tu-archivo.js'; 

export const LEVELS = [
  // diagnosticoData 
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
  proEvalGlobal,
  proEvalGlobal01
].filter(Boolean);