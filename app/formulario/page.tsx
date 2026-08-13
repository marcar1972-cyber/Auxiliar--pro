"use client";

import { useState } from "react";
import { rellenarCertificado, type DatosCertificado } from "../../lib/rellenarCertificado";
import { guardarSolicitud } from "../../lib/guardarSolicitud";
import EncabezadoFormulario from "../../components/EncabezadoFormulario";
import DocumentosTramite from "../../components/DocumentosTramite";
import FooterFormulario from "../../components/FooterFormulario";

// Datos por defecto: actividades prellenadas según Manual AuxiliarPro
const DATOS_INICIALES: DatosCertificado = {
  nombrePostulante: "",
  rutPostulante: "",
  nombreEstablecimiento: "",
  direccionEstablecimiento: "",
  comunaEstablecimiento: "",
  telefonoEstablecimiento: "",
  duracionPeriodo: "",
  fechaInicio: "",
  fechaTermino: "",
  vigente: false,
  actividad1:
    "Recepción de productos farmacéuticos y almacenamiento ordenado en estanterías, asegurando el orden y limpieza (asepsia) del lugar de trabajo.",
  actividad2:
    "Revisión periódica de fechas de vencimiento (control de stock), retiro de mermas y reposición de productos en las áreas de dispensación.",
  actividad3:
    "Lectura e interpretación de recetas médicas simples y dispensación de medicamentos de venta directa, informando al paciente sobre su uso adecuado.",
  actividad4:
    "Control y registro diario de las temperaturas ambientales y del refrigerador para asegurar la conservación adecuada de los medicamentos.",
  actividad5:
    "Registro del movimiento diario de fármacos e insumos, y colaboración en la toma de inventarios físicos.",
  nombreQF: "",
  rutQF: "",
  emailQF: "",
  ciudadEmision: "",
  fechaEmision: "",
};

export default function FormularioPage() {
  const [datos, setDatos] = useState<DatosCertificado>(DATOS_INICIALES);
  const [cargando, setCargando] = useState(false);
  const [pdfGenerado, setPdfGenerado] = useState(false);
  const [guardado, setGuardado] = useState<boolean | null>(null);

  const cambiar = (campo: keyof DatosCertificado, valor: string | boolean) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
  };

  const validarRut = (rut: string): boolean => {
    const limpio = rut.replace(/[^0-9kK]/g, "").toUpperCase();
    if (limpio.length < 8 || limpio.length > 9) return false;
    const cuerpo = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    if (!/^\d+$/.test(cuerpo)) return false;
    let suma = 0;
    let mult = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i], 10) * mult;
      mult = mult === 7 ? 2 : mult + 1;
    }
    const residuo = 11 - (suma % 11);
    let dvEsperado: string;
    if (residuo === 11) dvEsperado = "0";
    else if (residuo === 10) dvEsperado = "K";
    else dvEsperado = residuo.toString();
    return dv === dvEsperado;
  };

  const generarPDF = async () => {
    if (!datos.nombrePostulante || !datos.rutPostulante) {
      alert("Completa el nombre y RUT del postulante.");
      return;
    }
    if (!validarRut(datos.rutPostulante)) {
      alert("El RUT del postulante no es válido.");
      return;
    }

    setCargando(true);
    setPdfGenerado(false);
    setGuardado(null);

    try {
      const pdfBytes = await rellenarCertificado(datos);

      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Certificado_Idoneidad_${datos.nombrePostulante.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Guardar la solicitud en Firebase (no bloquea el PDF si falla)
      const resultado = await guardarSolicitud(datos);
      setGuardado(resultado.ok);

      setPdfGenerado(true);
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Error al generar el PDF. Verifica que el archivo oficial esté en public/templates/certificado-oficial.pdf");
    } finally {
      setCargando(false);
    }
  };

  // Limpia el formulario y vuelve arriba para registrar a otro alumno
  const crearOtroFormulario = () => {
    setDatos(DATOS_INICIALES);
    setPdfGenerado(false);
    setGuardado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado motivacional */}
      <EncabezadoFormulario />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="space-y-6">
          {/* SECCIÓN 1 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">1. Datos del Postulante</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.nombrePostulante}
                  onChange={(e) => cambiar("nombrePostulante", e.target.value)}
                  placeholder="Ej: María Fernanda González Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cédula de Identidad (RUT) *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.rutPostulante}
                  onChange={(e) => cambiar("rutPostulante", e.target.value)}
                  placeholder="12.345.678-9"
                />
              </div>
            </div>
          </section>

          {/* SECCIÓN 2 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">2. Establecimiento Farmacéutico</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Establecimiento *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.nombreEstablecimiento}
                  onChange={(e) => cambiar("nombreEstablecimiento", e.target.value)}
                  placeholder="Ej: Farmacia Cruz Verde"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección (Calle) *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.direccionEstablecimiento}
                  onChange={(e) => cambiar("direccionEstablecimiento", e.target.value)}
                  placeholder="Ej: Av. Libertador Bernardo O'Higgins 1234"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comuna *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={datos.comunaEstablecimiento}
                    onChange={(e) => cambiar("comunaEstablecimiento", e.target.value)}
                    placeholder="Ej: Santiago"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={datos.telefonoEstablecimiento}
                    onChange={(e) => cambiar("telefonoEstablecimiento", e.target.value)}
                    placeholder="+56 2 2345 6789"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 3 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">3. Período de Desempeño</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duración del período *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.duracionPeriodo}
                  onChange={(e) => cambiar("duracionPeriodo", e.target.value)}
                  placeholder="Ej: 1 año y 6 meses"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio *</label>
                  <input
                    type="date"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={datos.fechaInicio}
                    onChange={(e) => cambiar("fechaInicio", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Término</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100"
                    value={datos.fechaTermino}
                    onChange={(e) => cambiar("fechaTermino", e.target.value)}
                    disabled={datos.vigente}
                  />
                  <label className="flex items-center gap-2 mt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={datos.vigente}
                      onChange={(e) => cambiar("vigente", e.target.checked)}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-600">Contrato vigente ("la actual fecha")</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 4 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">4. Actividades de Apoyo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Actividades prellenadas según el Manual AuxiliarPro. Puedes editarlas si necesitas ajustarlas.
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad 1 - Recepción y Almacenamiento *
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={datos.actividad1}
                  onChange={(e) => cambiar("actividad1", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad 2 - Control de Vencimientos y Reposición *
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={datos.actividad2}
                  onChange={(e) => cambiar("actividad2", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad 3 - Dispensación de Medicamentos *
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={datos.actividad3}
                  onChange={(e) => cambiar("actividad3", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad 4 - Cadena de Frío y Temperatura
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={datos.actividad4}
                  onChange={(e) => cambiar("actividad4", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad 5 - Colaboración Administrativa
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={datos.actividad5}
                  onChange={(e) => cambiar("actividad5", e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* SECCIÓN 5 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">5. Químico Farmacéutico / Director Técnico</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombres y Apellidos *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={datos.nombreQF}
                  onChange={(e) => cambiar("nombreQF", e.target.value)}
                  placeholder="Ej: Juan Andrés Morales Rojas"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cédula de Identidad *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={datos.rutQF}
                    onChange={(e) => cambiar("rutQF", e.target.value)}
                    placeholder="12.345.678-9"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={datos.emailQF}
                    onChange={(e) => cambiar("emailQF", e.target.value)}
                    placeholder="director@farmacia.cl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 6 */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">6. Ciudad y Fecha de Emisión</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.ciudadEmision}
                  onChange={(e) => cambiar("ciudadEmision", e.target.value)}
                  placeholder="Ej: Santiago"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Emisión *</label>
                <input
                  type="date"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={datos.fechaEmision}
                  onChange={(e) => cambiar("fechaEmision", e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Aviso de éxito + botón crear otro */}
          {pdfGenerado && (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h2 className="text-xl font-bold text-emerald-800 mb-2">¡Tu certificado se descargó!</h2>
              <p className="text-emerald-700 text-sm mb-3">
                Revisa el PDF, imprímelo y llévalo firmado por tu Químico Farmacéutico
                Director Técnico. Tus datos siguen visibles arriba por si necesitas
                corregir algo y volver a generar.
              </p>
              {guardado === true && (
                <p className="text-emerald-700 text-sm font-semibold mb-4">
                  ☁️ Tus datos quedaron guardados en AuxiliarPro para seguimiento.
                </p>
              )}
              {guardado === false && (
                <p className="text-amber-600 text-sm font-semibold mb-4">
                  ⚠️ No pudimos guardar tus datos en línea, pero tu PDF se descargó correctamente.
                </p>
              )}
              <button
                onClick={crearOtroFormulario}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-md"
              >
                ➕ Crear otro formulario
              </button>
            </div>
          )}

          {/* Botón principal */}
          <button
            onClick={generarPDF}
            disabled={cargando}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg text-lg transition shadow-lg"
          >
            {cargando ? "⏳ Generando..." : "📥 Generar Certificado de Idoneidad (PDF)"}
          </button>

          {/* Nota de confidencialidad (Ley 19.628) */}
          <p className="text-xs text-gray-400 text-center">
            🔒 Tus datos son confidenciales: se utilizan únicamente para generar tu
            certificado y se tratan conforme a la Ley N° 19.628 sobre Protección de
            la Vida Privada.
          </p>
        </div>
      </div>

      {/* Listado de documentos requeridos (debajo del formulario, antes del footer) */}
      <DocumentosTramite />

      {/* Footer con link oficial y tips */}
      <FooterFormulario />
    </main>
  );
}