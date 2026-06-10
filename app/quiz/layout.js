import QuizPresenceWrapper from "./QuizPresenceWrapper";

export const metadata = {
  title: "Simulador AuxiliarPro v4.0 | Examen Auxiliar de Farmacia SEREMI 2026",
  description: "Entrena con el simulador más avanzado de Chile. +15 niveles técnicos, evaluación global SEREMI y preparación exhaustiva basada en los Decretos 466, 404 y 405.",
  keywords: [
    "simulador examen farmacia chile", 
    "practica examen seremi 2026", 
    "test auxiliar de farmacia", 
    "preparación decreto 466",
    "estudiar para auxiliar de farmacia"
  ],
  alternates: {
    canonical: 'https://auxiliaresdefarmacia.cl/quiz',
  },
  openGraph: {
    title: "Simulador AuxiliarPro v4.0",
    description: "Preparación técnica para Auxiliares de Farmacia. Certificación SEREMI Chile.",
    type: "website",
  },
};

/**
 * < macz.dev />
 * ARCHIVO: QuizLayout - Capa del Servidor (SEO Limpio)
 */
export default function QuizLayout({ children }) {
  return (
    <QuizPresenceWrapper>
      {children}
    </QuizPresenceWrapper>
  );
}