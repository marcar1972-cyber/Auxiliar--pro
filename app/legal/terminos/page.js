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
          <p>Bienvenido a <strong>AuxiliarPro Chile</strong>. Al utilizar esta plataforma y/o suscribirte a cualquiera de nuestros planes, confirmas que has leído, entendido y aceptas las siguientes condiciones:</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">1. Planes de Acceso y Suscripciones</h2>
          <p>AuxiliarPro ofrece distintos niveles de acceso a su contenido, divididos en una modalidad gratuita y planes de pago:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan Base (Gratuito):</strong> Acceso sin costo a los niveles 1 y 2 del simulador, Guías de estudio base liberadas y la calculadora DermoCheck.</li>
            <li><strong>Suscripción Nivel PRO:</strong> Otorga acceso total a la plataforma, incluyendo el Simulador Inicial Completo (Niveles 1 al 7), Simulador Avanzado tipo SEREMI, Vademécum Profesional y futuras herramientas (como Asistente IA y Módulo de Psicología).</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mt-4">
            <p className="font-bold text-slate-900 mb-2">Estructura de Valores (Suscripción Recurrente):</p>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li><strong>Plan Mensual:</strong> $5.990 CLP con renovación automática cada 30 días.</li>
              <li><strong>Plan Anual:</strong> $49.990 CLP con renovación automática cada 365 días (12 meses).</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2 italic">El usuario autoriza el cobro periódico en su método de pago registrado a través de nuestra pasarela de pagos (Reveniu).</p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas (Preventa / Descuentos):</p>
            <p className="text-amber-700 text-sm">
              Las promociones, descuentos de preventa o cupones especiales son válidos <strong>únicamente bajo las condiciones estipuladas en la oferta específica</strong> (por ejemplo: descuento aplicable solo al primer mes de suscripción). Una vez finalizado el período promocional, la suscripción se renovará automáticamente al valor normal del plan contratado, salvo cancelación previa por parte del usuario. AuxiliarPro se reserva el derecho de otorgar extensiones de beneficios a usuarios específicos a su entera discreción.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Modificación de Precios y Condiciones</h2>
          <p><strong>AuxiliarPro se reserva el derecho de modificar, actualizar o ajustar los precios</strong> de las suscripciones, así como los beneficios incluidos en cada plan, en cualquier momento. </p>
          <p>En caso de un aumento en el valor de las suscripciones recurrentes activas, los usuarios serán notificados con al menos 30 días de anticipación al correo electrónico registrado. Si el usuario no está de acuerdo con el nuevo valor, podrá cancelar su suscripción antes de que se efectúe el siguiente ciclo de facturación. El uso continuo de la plataforma después de la modificación implica la aceptación de las nuevas tarifas.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Cancelaciones y Política de Reembolso</h2>
          <p><strong>Cancelación de Suscripciones:</strong> El usuario puede cancelar la renovación automática de su plan (Mensual o Anual) en cualquier momento desde su panel de control o a través de los enlaces proporcionados por la pasarela de pago. La cancelación evitará futuros cobros, pero el usuario mantendrá su acceso PRO ininterrumpido hasta que finalice el período que ya ha sido pagado.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un producto digital de contenido educativo con acceso inmediato, <strong>no se realizarán devoluciones ni reembolsos</strong> (ni totales ni parciales) una vez procesado el pago y habilitado el acceso a la plataforma.</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es de uso personal, individual e intransferible. El sistema detectará intentos de acceso simultáneo o de compartir credenciales, lo cual es causal de suspensión definitiva de la cuenta sin derecho a reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Responsabilidad Educativa y Uso en el Mesón</h2>
          <p>AuxiliarPro es exclusivamente una plataforma de entrenamiento académico y apoyo al estudio. El contenido entregado <strong>no constituye consejo médico, diagnóstico, ni reemplaza el criterio oficial de los fiscalizadores de la SEREMI de Salud o normativas vigentes del ISP</strong>.</p>
          <p><strong>El solo hecho de estudiar con el material y los simuladores de AuxiliarPro no otorga certificación oficial ante la SEREMI.</strong> Para poder optar por la credencial, el alumno debe cumplir con los requisitos legales correspondientes, como trabajar un año en farmacia (como bodeguero o en sala) y rendir y aprobar la prueba oficial ante la SEREMI.</p>
          <p>No garantizamos la aprobación del examen oficial de la SEREMI, ya que esto depende del esfuerzo personal, experiencia y estudio del estudiante. Asimismo, el uso de la información brindada (incluyendo el Vademécum o la IA) en el mesón de farmacia real es de exclusiva responsabilidad del usuario y debe ser siempre validada por un Químico Farmacéutico.</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">5. Propiedad Intelectual</h2>
          <p>El código fuente, diseño, estructura de los simuladores, "Vademécum Profesional", bases de datos y herramientas de inteligencia artificial son propiedad exclusiva de AuxiliarPro. Los textos legales (Decretos como el D.S. 466 y Ley 20.724) referenciados son de dominio público. Queda estrictamente prohibida la copia, reproducción, reventa o extracción masiva de datos de la plataforma.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Última actualización: 20 de Marzo de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}