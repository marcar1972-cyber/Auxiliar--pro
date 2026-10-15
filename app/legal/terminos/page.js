import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-slate-800 mb-8 transition-colors">
          <ChevronLeft size={20} /> Volver al Inicio
        </Link>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black text-slate-900">Términos y Condiciones de Uso</h1>
          <span className="text-xs font-bold text-[#003366] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Versión 5.2
          </span>
        </div>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Bienvenido a <strong>AuxiliarPro SpA</strong>. Al utilizar esta plataforma y/o contratar cualquiera de nuestros planes, confirmas que has leído, entendido y aceptas las siguientes condiciones del servicio (Sistemas v5.2):</p>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">1. Planes de Acceso y Contratación</h2>
          <p>AuxiliarPro SpA ofrece distintos niveles de acceso a su contenido, divididos en una modalidad gratuita de evaluación y planes de pago:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan Base (Gratuito):</strong> Acceso sin costo al Diagnóstico SEREMI 2026 (10 preguntas estratégicas) y acceso a herramientas de práctica abiertas.</li>
            <li><strong>Planes PRO (Suscripciones Teóricas):</strong> Otorgan acceso a los módulos de estudio del Campus Virtual PRO, entrenamientos tipo examen SEREMI, Vademécum Profesional y Desafío de Racha Diaria según el nivel contratado (Pase 15 Días y Mensual PRO).</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl mt-4">
            <p className="font-bold text-slate-900 mb-3 text-base">Estructura y Cobertura de Herramientas por Plan:</p>
            
            <div className="space-y-4 text-xs md:text-sm text-slate-700">
              {/* Plan 15 Días */}
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <p className="font-black text-slate-900 text-sm mb-1">Pase 15 Días — $3.990 CLP <span className="font-normal text-slate-500">(Pago único / 15 días corridos)</span></p>
                <p className="text-slate-500 mb-2">Diseñado exclusivamente para estudio intensivo final y repaso express de última hora.</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Desafío de Racha Diaria (Hábito de estudio)</li>
                  <li>Campus Virtual PRO (4 Módulos de preparación)</li>
                  <li>1 Examen Global TIPO SEREMI (100% interactivo)</li>
                  <li>Vademécum Profesional</li>
                  <li className="text-slate-400 italic">No incluye Certificado de Participación ni 2° Examen Global de Refuerzo.</li>
                </ul>
              </div>

              {/* Plan Mensual PRO */}
              <div className="bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-200">
                <p className="font-black text-[#003366] text-sm mb-1">Mensual PRO — $5.990 CLP <span className="font-normal text-slate-500">(Pago único / 30 días corridos)</span></p>
                <p className="text-slate-600 mb-2 font-medium">Preparación completa, doble evaluación técnica y acreditación interna.</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
                  <li>Desafío de Racha Diaria (Hábito de estudio)</li>
                  <li>Campus Virtual PRO completo (4 Módulos)</li>
                  <li><strong>2 Exámenes Globales TIPO SEREMI</strong> (Doble entrenamiento real)</li>
                  <li><strong>Certificado Oficial de Participación</strong> (Validación QR AuxiliarPro)</li>
                  <li>Vademécum Profesional</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 italic leading-normal">
              Los pagos son procesados y tokenizados de forma segura a través de nuestra pasarela oficial (Mercado Pago). Los valores pueden variar según promociones temporales vigentes, respetando siempre el precio exhibido al momento de la compra conforme al artículo 45 B del D.S. 466/1984 y la Ley 20.724.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-emerald-800 mb-1">Modelo Prepago — Sin Renovación Automática:</p>
            <p className="text-emerald-700 text-sm">
              AuxiliarPro SpA opera exclusivamente con <strong>pagos únicos por período contratado</strong>, sin renovación automática ni suscripción recurrente. Este modelo garantiza transparencia y control total del usuario sobre sus gastos: no realizamos cargos futuros ni cobros inesperados. Cuando tu acceso expire, deberás contratar manualmente un nuevo plan si deseas continuar.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
            <p className="font-bold text-amber-800 mb-1">Cláusulas Especiales de Ofertas y Promociones Temporales:</p>
            <p className="text-amber-700 text-sm">
              AuxiliarPro SpA realiza promociones periódicas. Estas son válidas <strong>únicamente bajo las condiciones estipuladas en la oferta específica vigente al momento de la compra</strong>. Los precios promocionales aplican exclusivamente al pago único que se realiza y no generan compromisos ni tarifas preferenciales futuras.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mt-4">2. Modificación de Precios y Condiciones</h2>
          <p><strong>AuxiliarPro SpA se reserva el derecho de modificar, actualizar o ajustar los precios</strong> de los planes, así como las herramientas incluidas en cada uno, en cualquier momento.</p>
          <p>Cualquier cambio en precios o modalidades aplicará únicamente a nuevas contrataciones. Los accesos ya adquiridos mantendrán sus condiciones y vigencia hasta la fecha de expiración pactada.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">3. Política de Pagos, Reembolsos y Derecho a Retracto</h2>
          <p><strong>Pagos Únicos:</strong> Todos los accesos son por tiempo determinado (15 o 30 días). Al finalizar el plazo, el acceso expira automáticamente.</p>
          <p><strong>Reembolsos:</strong> Al tratarse de un servicio de educación y capacitación digital e interactiva (EdTech) de acceso inmediato tras la confirmación del pago, <strong>no se realizarán devoluciones ni reembolsos</strong> (totales ni parciales) por períodos ya activados o facturados.</p>
          <p><strong>Derecho a Retracto (Ley 19.496 / Ley 21.719):</strong> Conforme al artículo 3º bis, letra b) de la Ley de Protección de los Derechos de los Consumidores, <strong>no aplica el derecho a retracto</strong> en contratos de prestación de servicios educativos y contenidos digitales que hayan comenzado a prestarse con la aceptación expresa del usuario al completar la compra.</p>
          <p><strong>Uso de Cuenta:</strong> Toda cuenta es personal e intransferible. La detección de accesos simultáneos o credenciales compartidas es causal de suspensión definitiva sin reembolso.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">4. Independencia Institucional y Acreditación Sanitaria</h2>
          <p><strong>AuxiliarPro SpA es una plataforma EdTech privada e independiente.</strong> Declaramos explícitamente que NO representamos ni formamos parte del Ministerio de Salud (MINSAL), del Instituto de Salud Pública (ISP) ni de las Secretarías Regionales Ministeriales (SEREMI) de Salud.</p>
          <p><strong>El solo hecho de estudiar en la plataforma o recibir el Certificado de Participación de AuxiliarPro no constituye un título ni Autorización Sanitaria oficial.</strong> Para optar a la credencial legal de Auxiliar de Farmacia, el alumno debe cumplir con el D.S. 466/1984 (Art. 28): enseñanza media completa, 1 año de práctica laboral en farmacia acreditada por el Químico Farmacéutico Director Técnico, y rendir/aprobar el Examen de Competencia ante la SEREMI de Salud.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-4">5. Herramientas Auxiliares y Protección de Datos (Ley N° 21.719 / Ley 19.628)</h2>
          <p>Al utilizar las herramientas de apoyo de la plataforma (Vademécum Profesional y DermoCheck), el usuario acepta:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>5.1. Uso Informativo:</strong> Las herramientas de la plataforma son de carácter orientativo y formativo. La información sanitaria técnica siempre debe ser validada por el Químico Farmacéutico Director Técnico del establecimiento.</li>
            <li><strong>5.2. Protección de Datos Personales (Ley N° 21.719 / v5.2):</strong> AuxiliarPro SpA procesa los datos de registro exclusivamente para prestar los servicios educativos contratados bajo estrictos estándares de cifrado y confidencialidad conforme a la legislación chilena sobre protección de datos personales. No comercializamos ni transferimos información a terceros. El usuario puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) escribiendo a soporte.</li>
          </ul>
          
          <h2 className="text-lg font-bold text-slate-900 mt-4">6. Propiedad Intelectual</h2>
          <p>El código fuente, algoritmos, interfaz de la versión 5.2, simulación de preguntas, "Vademécum Profesional" y la herramienta "DermoCheck" son propiedad exclusiva de AuxiliarPro SpA (MaczDev). Queda prohibida la reproducción parcial, total o reventa no autorizada.</p>

          <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium flex justify-between items-center">
            <span>Última actualización: 29 de Septiembre de 2026.</span>
            <span>AuxiliarPro SpA — v5.2</span>
          </p>
        </div>
      </div>
    </main>
  );
}