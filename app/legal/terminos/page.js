import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-slate-800 mb-8 transition-colors">
          <ChevronLeft size={20} /> Volver al Inicio
        </Link>
        
        <h1 className="text-3xl font-black text-slate-900 mb-6">Términos y Condiciones de Uso</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Bienvenido a <strong>AuxiliarPro Chile</strong>. Al utilizar esta plataforma y/o completar cualquier transacción comercial en ella, confirmas que has leído y aceptas las siguientes condiciones:</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">1. Planes de Acceso y Suscripciones</h2>
          <p>AuxiliarPro ofrece distintos niveles de acceso a su contenido, divididos en modalidades gratuitas y de pago:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan Aprendiz (Gratuito):</strong> Acceso sin costo a los niveles 1 y 2 del simulador, material de estudio básico, blog y la herramienta DermoCheck.</li>
            <li><strong>Suscripciones Recurrentes (Plan Titular y Plan Certificado):</strong> Otorgan acceso total a la plataforma (Niveles 1 al 7 y Vademécum PRO). Estos planes operan bajo un modelo de <strong>renovación automática</strong> (mensual o anual, según corresponda). El usuario autoriza el cobro periódico en su método de pago registrado.</li>
            <li><strong>Pase Vitalicio PRO (Pago Único):</strong> Otorga acceso de por vida a todo el contenido actual y futuras actualizaciones sin cobros recurrentes.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas:</p>
            <ul className="list-disc pl-4 text-amber-700 space-y-1">
              <li><strong>Pase Vitalicio:</strong> Es una oferta de lanzamiento por tiempo limitado que <strong>expirará el 15 de marzo de 2026</strong>. Posterior a esta fecha, no volverá a estar disponible.</li>
              <li><strong>Plan Certificado (Descuento):</strong> El descuento promocional aplicado al Plan Certificado es válido <strong>exclusivamente por los primeros 11 meses</strong>. Cumplido ese plazo, la renovación se realizará por el valor normal de la suscripción, salvo cancelación previa por parte del usuario.</li>
            </ul>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Cancelaciones y Política de Reembolso</h2>
          <p><strong>Cancelación de Suscripciones:</strong> El usuario puede cancelar la renovación automática de su Plan Titular o Certificado en cualquier momento. La cancelación evitará futuros cobros, pero el usuario mantendrá su acceso PRO ininterrumpido hasta que finalice el período que ya ha sido pagado.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un producto digital de contenido educativo con acceso inmediato, <strong>no se realizarán reembolsos</strong> ni totales ni parciales una vez procesado el pago y habilitado el acceso a la plataforma (aplica para todos los planes de suscripción y el pase vitalicio).</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es de uso personal e intransferible. El sistema detectará intentos de acceso simultáneo o de compartir credenciales, lo cual es causal de suspensión definitiva de la cuenta sin derecho a reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Responsabilidad Educativa y Uso en el Mesón</h2>
          <p>AuxiliarPro es exclusivamente una plataforma de entrenamiento académico. El contenido entregado <strong>no constituye consejo médico, diagnóstico, ni reemplaza el criterio oficial de los fiscalizadores de la SEREMI de Salud o normativas vigentes del ISP</strong>.</p>
          <p>No garantizamos la aprobación del examen oficial de la SEREMI, ya que esto depende del esfuerzo personal del estudiante. Asimismo, el uso de la información brindada en el mesón de farmacia real es de exclusiva responsabilidad del usuario.</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Propiedad Intelectual</h2>
          <p>El código fuente, diseño, estructura de los simuladores, "Vademécum PRO" y la sección "DermoCheck" son propiedad exclusiva de AuxiliarPro. Los textos legales (Decretos como el D.S. 466 y Ley 20.724) referenciados son de dominio público.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
            Última actualización: Febrero de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}