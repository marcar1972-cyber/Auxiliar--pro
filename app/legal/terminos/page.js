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
          <p>Bienvenido a <strong>AuxiliarPro SpA</strong>. Al utilizar esta plataforma y/o contratar cualquiera de nuestros planes, confirmas que has leído, entendido y aceptas las siguientes condiciones:</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">1. Planes de Acceso y Contratación</h2>
          <p>AuxiliarPro SpA ofrece distintos niveles de acceso a su contenido, divididos en una modalidad gratuita y planes de pago:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan Base (Gratuito):</strong> Acceso sin costo al Diagnóstico SEREMI 2026 (3 áreas de evaluación normativa), y acceso temporal a herramientas de trámite durante promociones vigentes.</li>
            <li><strong>Planes PRO:</strong> Otorgan acceso total a la plataforma, incluyendo el Desafío de Racha Diaria, Campus Virtual PRO completo, Simulador Fiscalizador SEREMI, Vademécum Profesional y la Suite de Herramientas de Trámite y Empleabilidad (Generador de Certificados, Recortador de Fotos y Optimizador de CV).</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mt-4">
            <p className="font-bold text-slate-900 mb-2">Estructura de Planes (Valores regulares vigentes):</p>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Pase 15 Días:</strong> Pago único por 15 días — $3.990 CLP. Otorga acceso total por un período exacto de 15 días corridos desde la activación.</li>
              <li><strong>Mensual PRO:</strong> Pago único por 30 días — $5.990 CLP. Otorga acceso total por un período exacto de 30 días corridos desde la activación.</li>
              <li><strong>Hasta Que Apruebes (Anual PRO):</strong> Pago único por 365 días — <span className="line-through text-slate-400">$49.990</span> <span className="text-emerald-700 font-black">$29.990 CLP</span> (precio de relanzamiento). Otorga acceso ininterrumpido por 365 días corridos, incluyendo el beneficio de <strong>seguro anti-repro</strong>: si repruebas el examen SEREMI oficial dentro de tu año de vigencia, continúas entrenando sin costo adicional hasta aprobar.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">Los pagos son procesados y tokenizados de forma segura a través de nuestra pasarela oficial (Mercado Pago). Los valores pueden variar según promociones temporales vigentes, respetando siempre el precio exhibido al momento de la compra conforme al artículo 45 B del D.S. 466/1984 y la Ley 20.724.</p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-emerald-800 mb-1">Modelo Prepago — Sin Renovación Automática:</p>
            <p className="text-emerald-700 text-sm">
              AuxiliarPro SpA opera exclusivamente con <strong>pagos únicos por período contratado</strong>, sin renovación automática ni suscripción recurrente. Este modelo garantiza transparencia y control total del usuario sobre sus gastos: no realizamos cargos futuros ni cobros inesperados. Cuando tu acceso expire, deberás contratar manualmente un nuevo plan si deseas continuar. Esta política elimina cualquier riesgo de cargos no deseados y te da libertad total para decidir si renovar.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas (CyberDay, Black Friday y Promociones Temporales):</p>
            <p className="text-amber-700 text-sm">
              AuxiliarPro SpA realiza promociones y descuentos de forma periódica. Estas promociones son válidas <strong>únicamente bajo las condiciones estipuladas en la oferta específica vigente al momento de la compra</strong>. Los precios promocionales aplican exclusivamente al pago único que se está realizando y no generan compromisos futuros ni precios preferenciales para contrataciones posteriores. AuxiliarPro SpA se reserva el derecho de otorgar extensiones de beneficios a usuarios específicos a su entera discreción.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Modificación de Precios y Condiciones</h2>
          <p><strong>AuxiliarPro SpA se reserva el derecho de modificar, actualizar o ajustar los precios</strong> de los planes, así como los beneficios incluidos en cada uno, en cualquier momento.</p>
          <p>Cualquier cambio en los precios aplicará únicamente a nuevas contrataciones realizadas después de la modificación. Los accesos ya adquiridos mantendrán su vigencia completa hasta la fecha de expiración originalmente pactada, sin verse afectados por ajustes posteriores.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Política de Pagos, Reembolsos y Derecho a Retracto</h2>
          <p><strong>Pagos Únicos por Período:</strong> Todos los planes de AuxiliarPro SpA son pagos únicos que otorgan acceso por un período determinado (15, 30 o 365 días). Al finalizar el período contratado, el acceso PRO expira automáticamente sin generar cargos adicionales. No existe renovación automática ni cobros recurrentes.</p>
          <p><strong>Renovación Manual:</strong> Si deseas continuar utilizando los servicios PRO después de que tu acceso expire, deberás contratar un nuevo plan manualmente. Los precios aplicables serán los vigentes al momento de la nueva contratación.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un producto digital de contenido educativo SaaS con acceso inmediato e ilimitado tras el pago, <strong>no se realizarán devoluciones ni reembolsos</strong> (ni totales ni parciales) por períodos ya facturados. El usuario tiene acceso completo a todos los materiales y herramientas desde el momento exacto del pago.</p>
          <p><strong>Derecho a Retracto (Ley 19.496):</strong> Conforme al artículo 3º bis, letra b) de la Ley de Protección de los Derechos de los Consumidores, <strong>no aplica el derecho a retracto</strong> en contratos de prestación de servicios digitales que hayan comenzado a prestarse con la aceptación expresa del usuario. Al completar el pago y activar tu cuenta, consientes expresamente el inicio inmediato del servicio y renuncias al derecho de retracto.</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es de uso personal, individual e intransferible. El sistema detectará intentos de acceso simultáneo o de compartir credenciales, lo cual es causal de suspensión definitiva de la cuenta sin derecho a reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Independencia Institucional y Responsabilidad Educativa</h2>
          <p><strong>AuxiliarPro SpA es una plataforma EdTech privada e independiente.</strong> Declaramos explícitamente que NO representamos ni tenemos afiliación gubernamental con el Ministerio de Salud (MINSAL), el Instituto de Salud Pública (ISP) ni las Secretarías Regionales Ministeriales (SEREMI) de Salud. Nuestro contenido se basa en normativa oficial publicada (Decretos Supremos 466, 404 y 405 del MINSAL), pero no constituye documento oficial ni reemplaza el criterio de los fiscalizadores.</p>
          <p>AuxiliarPro SpA es exclusivamente una plataforma de entrenamiento académico. El contenido entregado <strong>no constituye consejo médico, diagnóstico clínico, ni reemplaza el criterio oficial de los fiscalizadores de la SEREMI de Salud o normativas vigentes del ISP</strong>.</p>
          <p><strong>El solo hecho de estudiar con el material de AuxiliarPro SpA no otorga certificación oficial ante la SEREMI.</strong> Para optar a la credencial, el alumno debe cumplir con los requisitos legales del D.S. 466/1984 (Art. 28): enseñanza media completa, un año de experiencia laboral en farmacia certificada por el Químico Farmacéutico Director Técnico, y aprobar el examen oficial ante la SEREMI.</p>
          <p>No garantizamos la aprobación del examen oficial de la SEREMI, ya que esto depende del esfuerzo personal, experiencia y estudio del estudiante. Asimismo, el uso de la información brindada (incluyendo el Vademécum o herramientas de IA) en el mesón de farmacia real es de exclusiva responsabilidad del usuario y debe ser siempre validada por el Químico Farmacéutico Director Técnico del establecimiento, conforme al Art. 24 del D.S. 466/1984.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">5. Herramientas de Trámite, Optimización y Privacidad de Datos</h2>
          <p>Al utilizar las herramientas de la plataforma (Generador de Certificado de Idoneidad, Recortador de Fotos y Optimizador de CV), el usuario acepta las siguientes condiciones específicas:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>5.1. Naturaleza de los Documentos Generados:</strong> El "Certificado de Idoneidad y Desempeño Laboral" generado por la plataforma es un borrador o plantilla digital basada en el Artículo 28, letra b) del D.S. 466/1984. Este documento NO tiene validez legal hasta que sea impreso, firmado y timbrado físicamente (o con firma electrónica avanzada) por el Químico Farmacéutico Director Técnico del establecimiento. AuxiliarPro SpA no se hace responsable de la veracidad de los datos ingresados por el usuario ni de la obtención de dicha firma.</li>
            <li><strong>5.2. Trámite ante la SEREMI:</strong> AuxiliarPro SpA facilita la creación de archivos y la guía de pasos, pero NO realiza el envío, postulación o seguimiento del trámite ante la SEREMI en Línea. Esta responsabilidad recae 100% en el usuario, a través del portal oficial <a href="https://seremienlinea.minsal.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">seremienlinea.minsal.cl</a>.</li>
            <li><strong>5.3. Optimizador de CV y Fotos:</strong> Estas herramientas son ayudas técnicas para formatear documentos según estándares del mercado y requisitos generales de la SEREMI. AuxiliarPro SpA no garantiza la contratación laboral ni la aceptación final del documento por parte de la autoridad sanitaria, la cual tiene la facultad discrecional de rechazo.</li>
            <li><strong>5.4. Protección de Datos Personales (Ley 19.628):</strong> Al subir documentos (contratos, fotos, CVs, RUTs), el usuario autoriza a AuxiliarPro SpA a procesar estos datos exclusivamente para la generación de las herramientas solicitadas. Implementamos medidas de seguridad (cifrado y acceso restringido) para proteger esta información. Los datos no serán vendidos ni compartidos con terceros con fines comerciales. El usuario puede solicitar la eliminación de sus archivos subidos contactando a soporte.</li>
          </ul>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">6. Propiedad Intelectual</h2>
          <p>El código fuente, diseño, estructura de los simuladores, Diagnóstico SEREMI 2026, "Vademécum Profesional", bases de datos y herramientas de inteligencia artificial son propiedad exclusiva de AuxiliarPro SpA (MaczDev). Los textos legales (Decretos como el D.S. 466, 404, 405 y Ley 20.724) referenciados son de dominio público conforme a la legislación chilena. Queda estrictamente prohibida la copia, reproducción, reventa o extracción masiva de datos (scraping) de la plataforma.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Última actualización: 16 de Agosto de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}