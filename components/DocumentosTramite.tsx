// components/DocumentosTramite.tsx
interface Documento {
  titulo: string;
  detalle: string;
  link?: { url: string; texto: string };
}

export default function DocumentosTramite() {
  const documentos: Documento[] = [
    {
      titulo: "Certificado de enseñanza media",
      detalle:
        "Licencia de Enseñanza Media o equivalente, calificada por el Ministerio de Educación.",
      link: {
        url: "https://certificados.mineduc.cl/",
        texto: "🎓 ¿No lo tienes? Obtén tu certificado en MINEDUC →",
      },
    },
    {
      titulo: "Copia del contrato de trabajo o Certificado del empleador",
      detalle:
        "Debe acreditar tu antigüedad laboral en el establecimiento farmacéutico.",
    },
    {
      titulo: "Certificado de desempeño laboral emitido por el Químico Farmacéutico",
      detalle:
        "Acredita a lo menos 1 año de desempeño efectivo. ¡Es el certificado tipo descargable que generas gratis en el formulario de arriba!",
    },
    {
      titulo: "Foto tipo carnet",
      detalle: "Fotografía reciente, fondo blanco, tamaño carnet.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <span className="inline-block bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            ★ Checklist oficial SEREMI
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
            ¿Qué necesito para hacer el trámite?
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Para hacer el trámite en la plataforma de la SEREMI, se solicitan los siguientes documentos:
          </p>

          <ul className="space-y-4">
            {documentos.map((doc, i) => (
              <li
                key={i}
                className="flex gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:border-green-500 transition"
              >
                <span className="bg-green-600 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{doc.titulo}</p>
                  <p className="text-slate-600 text-xs mt-1">{doc.detalle}</p>
                  {doc.link && (
                    <a
                      href={doc.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-[#28a745] hover:underline"
                    >
                      {doc.link.texto}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}