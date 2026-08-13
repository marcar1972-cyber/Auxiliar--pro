// lib/rellenarCertificado.ts
import { PDFDocument, rgb, StandardFonts, PDFFont, PDFPage } from "pdf-lib";

export interface DatosCertificado {
  nombrePostulante: string;
  rutPostulante: string;
  nombreEstablecimiento: string;
  direccionEstablecimiento: string;
  comunaEstablecimiento: string;
  telefonoEstablecimiento: string;
  duracionPeriodo: string;
  fechaInicio: string;
  fechaTermino: string;
  vigente: boolean;
  actividad1: string;
  actividad2: string;
  actividad3: string;
  actividad4: string;
  actividad5: string;
  nombreQF: string;
  rutQF: string;
  emailQF: string;
  ciudadEmision: string;
  fechaEmision: string;
}

interface Seg {
  t: string;
  fill?: boolean;
}
interface Word {
  t: string;
  fill?: boolean;
}
interface Opts {
  size?: number;
  center?: boolean;
  bold?: boolean;
  extra?: number;
}

function formatearFecha(fechaISO: string): string {
  if (!fechaISO) return "___/___/______";
  const p = fechaISO.split("-");
  if (p.length !== 3) return fechaISO;
  return `${p[2]}/${p[1]}/${p[0]}`;
}

export async function rellenarCertificado(
  datos: DatosCertificado
): Promise<Uint8Array> {
  const response = await fetch("/templates/certificado-oficial.pdf");
  if (!response.ok) {
    throw new Error("No se encontró el PDF oficial en public/templates/certificado-oficial.pdf");
  }
  const pdfBytes = await response.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  let page: PDFPage = pdfDoc.getPages()[0];
  const W = page.getWidth();
  const H = page.getHeight();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const NEGRO = rgb(0.12, 0.12, 0.12);
  const AZUL = rgb(0.05, 0.22, 0.7);
  const BLANCO = rgb(1, 1, 1);

  // Borra el cuerpo del PDF oficial pero CONSERVA los logos del MINSAL (10% superior)
  page.drawRectangle({ x: 0, y: 0, width: W, height: H * 0.9, color: BLANCO });

  const margin = W * 0.09;
  const maxW = W - margin * 2;
  let y = H * 0.9 - 22;

  const fontFor = (w: Word, o: Opts): PDFFont =>
    w.fill ? fontBold : o.bold ? fontBold : font;
  const colorFor = (w: Word) => (w.fill ? AZUL : NEGRO);

  const ensure = (need: number) => {
    if (y < need) {
      page = pdfDoc.addPage([W, H]);
      y = H - 60;
    }
  };

  const drawWrapped = (segs: Seg[], o: Opts = {}) => {
    const s = o.size ?? 9.5;
    const lh = s + 4.5;
    const words: Word[] = [];
    segs.forEach((seg) => {
      seg.t.split(" ").forEach((tok) => {
        if (tok) words.push({ t: tok, fill: seg.fill });
      });
    });
    const spaceW = font.widthOfTextAtSize(" ", s);
    let line: Word[] = [];
    let lineW = 0;

    const flush = () => {
      if (!line.length) return;
      ensure(40);
      let x = margin;
      if (o.center) x = (W - lineW) / 2;
      line.forEach((w, i) => {
        const f = fontFor(w, o);
        page.drawText(w.t, { x, y, size: s, font: f, color: colorFor(w) });
        x += f.widthOfTextAtSize(w.t, s) + (i < line.length - 1 ? spaceW : 0);
      });
      y -= lh;
      line = [];
      lineW = 0;
    };

    words.forEach((w) => {
      const wW = fontFor(w, o).widthOfTextAtSize(w.t, s);
      const needed = line.length === 0 ? wW : lineW + spaceW + wW;
      if (needed > maxW && line.length > 0) flush();
      lineW = line.length === 0 ? wW : lineW + spaceW + wW;
      line.push(w);
    });
    flush();
    if (o.extra) y -= o.extra;
  };

  // ===== TÍTULO =====
  drawWrapped([{ t: "CERTIFICADO DE IDONEIDAD Y DESEMPEÑO LABORAL" }], {
    size: 11,
    bold: true,
    center: true,
  });
  drawWrapped([{ t: "(Auxiliar de Farmacia)" }], { center: true, extra: 8 });

  // ===== PÁRRAFO PRINCIPAL (datos en azul) =====
  drawWrapped(
    [
      { t: "Certifico que Don(ña)" },
      { t: datos.nombrePostulante || "________________", fill: true },
      { t: ", cédula de identidad Nº" },
      { t: datos.rutPostulante || "________________", fill: true },
      { t: ", ha trabajado en actividades de apoyo al profesional Químico-Farmacéutico/Farmacéutico, Director Técnico del establecimiento farmacéutico denominado:" },
      { t: datos.nombreEstablecimiento || "________________", fill: true },
      { t: ", ubicado en calle" },
      { t: datos.direccionEstablecimiento || "________________", fill: true },
      { t: ", de la comuna de" },
      { t: datos.comunaEstablecimiento || "________________", fill: true },
      { t: ", teléfono" },
      { t: datos.telefonoEstablecimiento || "________________", fill: true },
      { t: "durante un período de" },
      { t: datos.duracionPeriodo || "________________", fill: true },
      { t: "(Indicar el Nº de años o meses, según corresponda), desde" },
      { t: formatearFecha(datos.fechaInicio), fill: true },
      { t: "(Indicar el día, mes y año de inicio del contrato de trabajo), hasta" },
      { t: datos.vigente ? "la actual fecha" : formatearFecha(datos.fechaTermino), fill: true },
      { t: '(Indicar el día, mes y año de término del contrato de trabajo; si se encuentra vigente, señalar "la actual fecha").' },
    ],
    { extra: 6 }
  );

  // ===== ACTIVIDADES =====
  drawWrapped(
    [
      { t: "En dicho período ha demostrado idoneidad en el desempeño de las siguientes actividades de apoyo a la labor técnica y administrativa del Químico-Farmacéutico/Farmacéutico, Director Técnico del establecimiento:" },
    ],
    { extra: 4 }
  );

  [datos.actividad1, datos.actividad2, datos.actividad3, datos.actividad4, datos.actividad5].forEach(
    (a, i) => {
      drawWrapped([{ t: `${i + 1}.-` }, { t: a || "________________", fill: true }], {
        extra: 2,
      });
    }
  );

  // ===== TEXTO LEGAL =====
  drawWrapped(
    [
      { t: "Se otorga el presente certificado en conformidad a lo establecido en el artículo 28, letra b) del Decreto Supremo Nº 466 de 1984, Reglamento de Farmacias, Droguerías, Almacenes Farmacéuticos, Botiquines y Depósitos Autorizados, del Ministerio de Salud; a fin de acreditar la calidad y el tiempo de desempeño efectivo del personal a que se refiere en labores de apoyo al profesional Químico-Farmacéutico/Farmacéutico, Director Técnico del establecimiento individualizado." },
    ],
    { extra: 10 }
  );

  // ===== DIRECTOR TÉCNICO =====
  drawWrapped([{ t: "Director Técnico que certifica:" }], { bold: true });
  drawWrapped([{ t: "Nombres y Apellidos:" }, { t: datos.nombreQF || "________________", fill: true }]);
  drawWrapped([{ t: "Cédula de Identidad:" }, { t: datos.rutQF || "________________", fill: true }]);
  drawWrapped([{ t: "E-mail:" }, { t: datos.emailQF || "________________", fill: true }], {
    extra: 26,
  });

  // ===== FIRMA =====
  ensure(140);
  const lw = maxW * 0.72;
  const lx = (W - lw) / 2;
  page.drawLine({ start: { x: lx, y }, end: { x: lx + lw, y }, thickness: 0.8, color: NEGRO });
  y -= 13;
  drawWrapped(
    [
      { t: "Firma y timbre Químico-Farmacéutico/Farmacéutico, Director Técnico del establecimiento" },
    ],
    { center: true, bold: true, size: 9, extra: 24 }
  );

  // ===== CIUDAD Y FECHA =====
  drawWrapped(
    [
      {
        t: `${datos.ciudadEmision || "________________"}, ${formatearFecha(datos.fechaEmision)}`,
        fill: true,
      },
    ],
    { center: true }
  );
  drawWrapped([{ t: "Ciudad y Fecha de emisión del presente Certificado" }], {
    center: true,
    bold: true,
    size: 9,
    extra: 26,
  });

  // ===== PIE OFICIAL =====
  drawWrapped([{ t: "Secretarías Regionales Ministeriales de Salud" }], {
    center: true,
    size: 8.5,
  });
  drawWrapped([{ t: "Ministerio de Salud" }], { center: true, size: 8.5 });

  return pdfDoc.save();
}