import Layout from "@/components/Layout";
import { Alert, Table, Button } from "@/components/ui";
import Link from "next/link";

export const metadata = {
  title: "¿Cuánto gana un Auxiliar de Farmacia en Chile? (Actualizado 2026)",
  description: "Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada según datos de mercado.",
};

export default function SueldosPage() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
        </h1>

        <Alert variant="info" className="mb-8">
          <p className="text-sm">
            <strong>Nota de Transparencia:</strong> Los montos presentados son estimaciones referenciales basadas en la recopilación de ofertas laborales en portales como LinkedIn, Laborum y testimonios de trabajadores. No existe una fuente fidedigna única; el sueldo final depende del contrato individual, ubicación y cumplimiento de metas.
          </p>
        </Alert>

        <p className="text-lg text-slate-700 mb-6">
          El mercado laboral para los profesionales de la farmacia en Chile ha experimentado cambios significativos al inicio de este 2026. Con la plena implementación de la Ley de Fármacos II y las nuevas normativas de la autoridad sanitaria, el rol del <strong>Auxiliar de Farmacia en Chile</strong> se ha vuelto más crítico que nunca. Pero, ¿cómo se traduce esta responsabilidad en el sueldo líquido a fin de mes?
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">Cifras Estimadas por Cadena (Mercado 2026)</h2>
        <div className="overflow-x-auto mb-8">
          <Table>
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Cadena / Empresa</th>
                <th className="px-4 py-3 text-left font-bold">Rango Líquido Estimado</th>
                <th className="px-4 py-3 text-left font-bold">Perfil del Cargo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium">Cruz Verde</td>
                <td className="px-4 py-3 text-green-700 font-bold">$650.000 - $850.000</td>
                <td className="px-4 py-3 text-sm">Fuerte enfoque en metas de venta sugerida.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Salcobrand</td>
                <td className="px-4 py-3 text-green-700 font-bold">$620.000 - $800.000</td>
                <td className="px-4 py-3 text-sm">Sueldo base competitivo + bonos por categoría.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Farmacias Ahumada</td>
                <td className="px-4 py-3 text-green-700 font-bold">$600.000 - $780.000</td>
                <td className="px-4 py-3 text-sm">Estabilidad y beneficios corporativos.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Independientes / Dr. Simi</td>
                <td className="px-4 py-3 text-green-700 font-bold">$550.000 - $700.000</td>
                <td className="px-4 py-3 text-sm">Menor carga variable, turnos fijos.</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Desglose de Haberes: ¿Cómo se construye tu sueldo?</h2>
        <p className="mb-4">
          Es fundamental entender que el sueldo de un auxiliar en el retail farmacéutico no es una cifra plana. Para quienes están revisando los <Link href="/blog/requisitos-auxiliar-farmacia-2026" className="text-blue-600 underline">requisitos para ser Auxiliar de Farmacia</Link>, este desglose es vital para negociar su contrato:
        </p>
        <ul className="list-disc pl-8 mb-6 space-y-3">
          <li><strong>Sueldo Base:</strong> Generalmente ajustado al ingreso mínimo mensual legal. Es la parte fija del contrato.</li>
          <li><strong>Gratificación Legal:</strong> En la mayoría de las cadenas se paga mensualmente bajo la modalidad del 25% del sueldo base (con el tope legal de 4.75 IMM).</li>
          <li><strong>Comisiones (Venta Sugerida):</strong> Este es el motor del sueldo en las farmacias de cadena. Depende directamente del cumplimiento de KPIs (indicadores de desempeño) y la venta de productos específicos definidos por la administración.</li>
          <li><strong>Bono de Caja:</strong> Una asignación destinada a cubrir posibles faltantes de dinero al realizar el cuadratura final del turno.</li>
          <li><strong>Asignación de Movilización y Colación:</strong> Montos no imponibles que ayudan a cubrir los gastos básicos del trabajador.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">Factores que hacen variar el ingreso</h2>
        <p className="mb-4">
          No gana lo mismo un auxiliar en Santiago Centro que uno en regiones extremas. La <strong>Asignación de Zona</strong> es un factor determinante, pudiendo aumentar el sueldo líquido hasta en un 20% en ciudades como Punta Arenas, Iquique o Calama debido al alto costo de vida.
        </p>
        <p className="mb-4">
          Otro factor relevante son los <strong>Turnos Nocturnos y Horas Extra</strong>. Las farmacias de urgencia (24 horas) ofrecen bonos por nocturnidad que pueden sumar entre $40.000 y $80.000 adicionales al sueldo base. Si estás preparándote para rendir el <Link href="/blog/examen-competencia-seremi-preguntas-reales" className="text-blue-600 underline">Examen de Competencia SEREMI 2025</Link>, debes saber que poseer la credencial oficial te permite acceder a estos cargos de mayor responsabilidad y renta.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Comparativa: Farmacia Retail vs. Farmacia Clínica</h2>
        <p className="mb-4">
          Muchos alumnos de <strong>AuxiliarPro</strong> nos preguntan por la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 underline">diferencia entre Auxiliar y Técnico</Link> en términos de salario clínico. 
        </p>
        <p className="mb-4">
          En el mundo <strong>Retail</strong>, el sueldo depende mucho de tu capacidad comercial. Un auxiliar proactivo puede superar el millón de pesos bruto en meses de alta demanda (invierno). Por el contrario, en <strong>Farmacia Clínica</strong> (clínicas privadas u hospitales), el sueldo suele ser más estable, con menos comisiones pero mejores beneficios contractuales y una carga de trabajo orientada a la gestión interna de fármacos más que a la atención directa de público.
        </p>

        <div className="bg-slate-50 p-8 rounded-2xl my-10 border border-slate-200">
          <h2 className="text-xl font-bold mb-6 text-slate-900">Preguntas Frecuentes (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-800">¿Se paga adicional por el "Día del Auxiliar"?</h3>
              <p className="text-slate-600 text-sm">Sí, la mayoría de los sindicatos de las grandes cadenas negocian bonos especiales que se pagan en la liquidación de diciembre o el día de la festividad oficial, promediando los $30.000 líquido.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">¿Cuánto es el valor hora para un Part-Time?</h3>
              <p className="text-slate-600 text-sm">Para contratos de 20 horas (fines de semana), el valor líquido promedio por jornada de 10 horas ronda los $28.000 a $35.000, dependiendo de la cadena.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-3xl text-center shadow-xl shadow-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Quieres asegurar un mejor sueldo?</h2>
          <p className="mb-6 opacity-90">Un auxiliar certificado legalmente tiene mayor poder de negociación y acceso a mejores cargos.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/blog/examen-competencia-seremi-preguntas-reales">
              Prepárate para el Examen de Competencia SEREMI 2025
            </Link>
          </Button>
        </div>
      </article>
    </Layout>
  );
}
