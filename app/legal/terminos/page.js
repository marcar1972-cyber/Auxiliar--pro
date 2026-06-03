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
            <p className="font-bold text-slate-900 mb-2">Estructura de Planes (Valores regulares vigentes):</p>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Pase 15 Días:</strong> Pago único de $3.990 CLP. Otorga acceso total por un período de 15 días exactos. No se renueva automáticamente.</li>
              <li><strong>Plan Mensual PRO:</strong> Pago único de $5.990 CLP. Otorga acceso total por 30 días exactos. No se renueva automáticamente.</li>
              <li><strong>Plan Anual PRO:</strong> Pago único de $49.990 CLP. Otorga acceso ininterrumpido por 365 días. No se renueva automáticamente.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">Los pagos son procesados y tokenizados de forma segura a través de nuestra pasarela oficial (Mercado Pago). Los valores pueden variar según promociones temporales vigentes.</p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-emerald-800 mb-1">Modelo de Pago Único - Sin Cargos Sorpresa:</p>
            <p className="text-emerald-700 text-sm">
              AuxiliarPro opera exclusivamente con <strong>pagos únicos sin renovación automática</strong>. Este modelo ha demostrado ser el más efectivo para garantizar la transparencia y el control total del usuario sobre sus gastos. No realizamos cargos recurrentes ni cobros inesperados. Cuando tu acceso expire, simplemente deberás realizar un nuevo pago si deseas continuar utilizando los servicios PRO. Esta política elimina cualquier riesgo de cargos no deseados y te da libertad total para decidir cuándo renovar.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas (CyberDay, Black Friday y Promociones Temporales):</p>
            <p className="text-amber-700 text-sm">
              AuxiliarPro realiza promociones y descuentos especiales de forma periódica (CyberDay, Black Friday, ofertas flash, entre otras). Estas promociones son válidas <strong>únicamente bajo las condiciones estipuladas en la oferta específica vigente al momento de la compra</strong>. Los precios promocionales aplican exclusivamente al pago único que se está realizando y no generan compromisos futuros ni precios preferenciales para renovaciones posteriores. AuxiliarPro se reserva el derecho de otorgar extensiones de beneficios a usuarios específicos a su entera discreción.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Modificación de Precios y Condiciones</h2>
          <p><strong>AuxiliarPro se reserva el derecho de modificar, actualizar o ajustar los precios</strong> de los planes, así como los beneficios incluidos en cada uno, en cualquier momento.</p>
          <p>Cualquier cambio en los precios aplicará únicamente a nuevos pagos realizados después de la modificación. Los accesos ya adquiridos mantendrán su vigencia completa hasta la fecha de expiración originalmente pactada, sin verse afectados por aumentos posteriores.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Política de Pagos y Reembolsos</h2>
          <p><strong>Pagos Únicos:</strong> Todos los planes de AuxiliarPro son pagos únicos que otorgan acceso por un período determinado (15 días, 30 días o 365 días). Al finalizar el período contratado, el acceso PRO expira automáticamente sin generar cargos adicionales. No existe renovación automática ni cobros recurrentes de ningún tipo.</p>
          <p><strong>Renovación Manual:</strong> Si deseas continuar utilizando los servicios PRO después de que tu acceso expire, deberás realizar un nuevo pago manualmente. Los precios aplicables serán los vigentes al momento de la nueva contratación.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un producto digital de contenido educativo SaaS con acceso inmediato e ilimitado tras el pago, <strong>no se realizarán devoluciones ni reembolsos</strong> (ni totales ni parciales) por períodos ya facturados. El usuario tiene acceso completo a todos los materiales y herramientas desde el momento exacto del pago.</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es de uso personal, individual e intransferible. El sistema detectará intentos de acceso simultáneo o de compartir credenciales, lo cual es causal de suspensión definitiva de la cuenta sin derecho a reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Responsabilidad Educativa y Uso en el Mesón</h2>
          <p>AuxiliarPro es exclusivamente una plataforma de entrenamiento académico y apoyo al estudio. El contenido entregado <strong>no constituye consejo médico, diagnóstico, ni reemplaza el criterio oficial de los fiscalizadores de la SEREMI de Salud o normativas vigentes del ISP</strong>.</p>
          <p><strong>El solo hecho de estudiar con el material y los simuladores de AuxiliarPro no otorga certificación oficial ante la SEREMI.</strong> Para poder optar por la credencial, el alumno debe cumplir con los requisitos legales correspondientes, como trabajar un año en farmacia (como bodeguero o en sala) y rendir y aprobar la prueba oficial ante la SEREMI.</p>
          <p>No garantizamos la aprobación del examen oficial de la SEREMI, ya que esto depende del esfuerzo personal, experiencia y estudio del estudiante. Asimismo, el uso de la información brindada (incluyendo el Vademécum o la IA) en el mesón de farmacia real es de exclusiva responsabilidad del usuario y debe ser siempre validada por un Químico Farmacéutico.</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">5. Propiedad Intelectual</h2>
          <p>El código fuente, diseño, estructura de los simuladores, "Vademécum Profesional", bases de datos y herramientas de inteligencia artificial son propiedad exclusiva de AuxiliarPro. Los textos legales (Decretos como el D.S. 466 y Ley 20.724) referenciados son de dominio público. Queda estrictamente prohibida la copia, reproducción, reventa o extracción masiva de datos de la plataforma.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Última actualización: 03 de Junio de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}