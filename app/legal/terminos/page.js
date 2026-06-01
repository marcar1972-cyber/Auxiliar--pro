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
            <li><strong>Plan Base (Gratuito):</strong> Acceso sin costo a los niveles 1, 2 y 3 del Simulador Inicial.</li>
            <li><strong>Suscripción Nivel PRO:</strong> Otorga acceso total a la plataforma, incluyendo el Desafío de Racha Diaria, Campus Virtual PRO completo, Simulador Fiscalizador SEREMI y Vademécum Profesional.</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mt-4">
            <p className="font-bold text-slate-900 mb-2">Estructura de Suscripciones (Valores vigentes sujetos a promociones):</p>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Pase 15 Días:</strong> Pago único. Otorga acceso total por un período de 15 días exactos. No se renueva automáticamente.</li>
              <li><strong>Plan Mensual PRO:</strong> $3.990 CLP mensuales. <strong>Suscripción con renovación automática</strong>. Se debita mes a mes hasta que el usuario decida cancelar.</li>
              <li><strong>Plan Anual PRO:</strong> $19.990 CLP pago único anual. Otorga acceso ininterrumpido por 365 días.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">Los pagos son procesados y tokenizados de forma segura a través de nuestra pasarela oficial (Mercado Pago).</p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas (CyberDay / Descuentos):</p>
            <p className="text-amber-700 text-sm">
              Las promociones, descuentos o cupones especiales son válidos <strong>únicamente bajo las condiciones estipuladas en la oferta específica</strong>. En el caso de planes de renovación automática adquiridos bajo una tarifa promocional, dicho valor se mantendrá mientras la suscripción permanezca activa ininterrumpidamente, salvo que la oferta indique lo contrario. AuxiliarPro se reserva el derecho de otorgar extensiones de beneficios a usuarios específicos a su entera discreción.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Modificación de Precios y Condiciones</h2>
          <p><strong>AuxiliarPro se reserva el derecho de modificar, actualizar o ajustar los precios</strong> de las suscripciones, así como los beneficios incluidos en cada plan, en cualquier momento. </p>
          <p>En caso de un aumento en el valor de los planes de renovación automática, los usuarios serán notificados oportunamente antes del siguiente ciclo de facturación. El uso continuo de la plataforma y la mantención de la suscripción activa implica la aceptación de las nuevas tarifas.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Facturación Recurrente, Cancelación y Política de Reembolso</h2>
          <p><strong>Renovación Automática:</strong> Al contratar un plan mensual, el usuario acepta y autoriza explícitamente a AuxiliarPro y a su pasarela de pagos (Mercado Pago) a realizar un <strong>cargo automático y recurrente</strong> a su método de pago registrado al inicio de cada nuevo ciclo de facturación (mensual).</p>
          <p><strong>Cancelación de la Suscripción:</strong> El usuario tiene el derecho de cancelar la renovación automática de su plan en cualquier momento. La cancelación detendrá los cobros futuros, pero el usuario mantendrá el acceso PRO hasta el final del período ya pagado. La cancelación debe ser gestionada directamente desde la pasarela de pagos o solicitada al soporte técnico antes de la fecha de corte.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un producto digital de contenido educativo SaaS con acceso inmediato e ilimitado tras el pago, <strong>no se realizarán devoluciones ni reembolsos</strong> (ni totales ni parciales) por períodos ya facturados o por olvido de cancelación por parte del usuario.</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es de uso personal, individual e intransferible. El sistema detectará intentos de acceso simultáneo o de compartir credenciales, lo cual es causal de suspensión definitiva de la cuenta sin derecho a reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Responsabilidad Educativa y Uso en el Mesón</h2>
          <p>AuxiliarPro es exclusivamente una plataforma de entrenamiento académico y apoyo al estudio. El contenido entregado <strong>no constituye consejo médico, diagnóstico, ni reemplaza el criterio oficial de los fiscalizadores de la SEREMI de Salud o normativas vigentes del ISP</strong>.</p>
          <p><strong>El solo hecho de estudiar con el material y los simuladores de AuxiliarPro no otorga certificación oficial ante la SEREMI.</strong> Para poder optar por la credencial, el alumno debe cumplir con los requisitos legales correspondientes, como trabajar un año en farmacia (como bodeguero o en sala) y rendir y aprobar la prueba oficial ante la SEREMI.</p>
          <p>No garantizamos la aprobación del examen oficial de la SEREMI, ya que esto depende del esfuerzo personal, experiencia y estudio del estudiante. Asimismo, el uso de la información brindada (incluyendo el Vademécum o la IA) en el mesón de farmacia real es de exclusiva responsabilidad del usuario y debe ser siempre validada por un Químico Farmacéutico.</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">5. Propiedad Intelectual</h2>
          <p>El código fuente, diseño, estructura de los simuladores, "Vademécum Profesional", bases de datos y herramientas de inteligencia artificial son propiedad exclusiva de AuxiliarPro. Los textos legales (Decretos como el D.S. 466 y Ley 20.724) referenciados son de dominio público. Queda estrictamente prohibida la copia, reproducción, reventa o extracción masiva de datos de la plataforma.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Última actualización: 01 de Junio de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}