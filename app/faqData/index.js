import { examQuestions } from './examQuestions';
import { legalQuestions } from './legalQuestions';
import { laborQuestions } from './laborQuestions';

export const FAQS = [
  {
    category: "Examen SEREMI 2026",
    questions: examQuestions
  },
  {
    category: "Legislación y Decreto 466",
    questions: legalQuestions
  },
  {
    category: "Laboral y Sueldos",
    questions: laborQuestions
  }
];
