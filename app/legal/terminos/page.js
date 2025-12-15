import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-aux-dark mb-8 transition-colors">
          <ChevronLeft size={20} /> Volver al Inicio
        </Link>
        
        <h1 className="text-3xl font-black text-aux-dark mb-6">Términos de Uso</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Bienvenido a <strong>AuxiliarPro Chile</strong>. Al utilizar esta plataforma, aceptas las siguientes condiciones:</p>
          
          <h2 className="text-lg font-bold text-aux-dark mt-4">1. Uso Educativo</h2>
          <p>Esta plataforma es exclusivamente una herramienta de estudio y preparación. No garantizamos la aprobación del examen oficial de la SEREMI de Salud, ya que esto depende del esfuerzo personal del estudiante.</p>
          
          <h2 className="text-lg font-bold text-aux-dark mt-4">2. Propiedad Intelectual</h2>
          <p>El código fuente, diseño y estructura de "Dermocheck" y los simuladores son propiedad de Marcelo (AuxiliarPro). Los textos legales (Decretos) son de dominio público.</p>
          
          <h2 className="text-lg font-bold text-aux-dark mt-4">3. Responsabilidad</h2>
          <p>No nos hacemos responsables por errores u omisiones en la información, aunque nos esforzamos por mantenerla actualizada según la normativa vigente (D.S. 466).</p>
        </div>
      </div>
    </main>
  );
}
