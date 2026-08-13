// components/EncabezadoFormulario.tsx
export default function EncabezadoFormulario() {
  return (
    <header className="bg-white py-12 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-[#28a745] text-white text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
          Paso a paso con AuxiliarPro
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-8 leading-tight">
          Completa tu Certificado de Idoneidad y Desempeño Laboral
        </h1>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8 text-left md:text-center">
          <li className="bg-white border border-slate-200 shadow-sm rounded-lg p-3 flex md:flex-col items-start md:items-center gap-3">
            <span className="bg-[#28a745] text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0">
              1
            </span>
            <p className="text-sm text-slate-600">
              <strong className="text-[#003366]">Rellena</strong> el formulario con tus datos y los de tu Director Técnico.
            </p>
          </li>
          <li className="bg-white border border-slate-200 shadow-sm rounded-lg p-3 flex md:flex-col items-start md:items-center gap-3">
            <span className="bg-[#28a745] text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0">
              2
            </span>
            <p className="text-sm text-slate-600">
              <strong className="text-[#003366]">Descarga</strong> el PDF en formato oficial SEREMI.
            </p>
          </li>
          <li className="bg-white border border-slate-200 shadow-sm rounded-lg p-3 flex md:flex-col items-start md:items-center gap-3">
            <span className="bg-[#28a745] text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0">
              3
            </span>
            <p className="text-sm text-slate-600">
              <strong className="text-[#003366]">Pídele a tu QF</strong> que lo firme y timbre.
            </p>
          </li>
          <li className="bg-white border border-slate-200 shadow-sm rounded-lg p-3 flex md:flex-col items-start md:items-center gap-3">
            <span className="bg-[#28a745] text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0">
              4
            </span>
            <p className="text-sm text-slate-600">
              <strong className="text-[#003366]">Súbelo</strong> a la plataforma de la SEREMI.
            </p>
          </li>
        </ol>

        <p className="text-[#28a745] font-semibold text-lg">
          ¡Te deseamos toda la suerte en tu certificación de Auxiliar de Farmacia! 🍀
        </p>
      </div>
    </header>
  );
}