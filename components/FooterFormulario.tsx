// components/FooterFormulario.tsx
export default function FooterFormulario() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* CTA trámite oficial MINSAL */}
        <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">
            ¿Listo para presentar tu trámite?
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            Con tu certificado firmado y tus documentos en mano, ingresa a la
            plataforma oficial de la SEREMI para iniciar tu Certificación de
            Competencias como Auxiliar de Farmacia.
          </p>
          <a
            href="https://seremienlinea.minsal.cl/asdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
          >
            🏛️ Iniciar mi trámite en Seremi en Línea
          </a>
          <p className="text-xs text-slate-400 mt-3">
            seremienlinea.minsal.cl — Plataforma oficial del Ministerio de Salud
          </p>

          {/* Línea ClaveÚnica */}
          <div className="mt-6 bg-slate-700/50 border border-slate-600 rounded-lg p-4 text-sm text-slate-300 text-left">
            🔑 <strong className="text-white">¿Aún no tienes tu ClaveÚnica?</strong>{" "}
            La necesitarás para iniciar sesión en Seremi en Línea.{" "}
            <a
              href="https://www.claveunica.gob.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-semibold hover:underline"
            >
              Actívala gratis aquí →
            </a>
          </div>
        </section>

        {/* Tips día del examen */}
        <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-extrabold mb-5 text-center">
            🎯 Tips AuxiliarPro para el día del examen
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-2xl">⏰</span>
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Llega media hora antes:</strong>{" "}
                aprovecha de ubicar dónde es la SEREMI y dónde está la entrada.
                Llegar con tiempo te evita nervios de último minuto.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🥪</span>
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Alimenta tu cerebro:</strong> usa
                ese tiempo extra para comer algo liviano (una fruta, un sándwich,
                frutos secos). Un cerebro con energía rinde mucho más ante la
                situación.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">📚</span>
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Entrena antes de la prueba:</strong>{" "}
                aprovecha de repasar en los simuladores de{" "}
                <strong className="text-green-500">auxiliarpro.cl</strong> mientras
                esperas. Llegarás con la materia fresca y la confianza alta.
              </p>
            </li>
          </ul>
        </section>

        <p className="text-center text-sm text-slate-400">
          Built by <span className="font-mono text-green-500">&lt;macz.dev/&gt;</span>
        </p>
      </div>
    </footer>
  );
}