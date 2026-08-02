import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Crear nuevo documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Colores (basados en el PDF oficial)
    const blackColor = rgb(0, 0, 0);
    
    // Agregar logos MINSAL (esquinas superiores)
    // Nota: Debes tener los logos en /public/logos/
    try {
      const logoPng = fs.readFileSync(path.join(process.cwd(), 'public', 'logos', 'minsal-logo.png'));
      const logoImage = await pdfDoc.embedPng(logoPng);
      
      // Logo izquierda
      page.drawImage(logoImage, {
        x: 40,
        y: height - 80,
        width: 80,
        height: 60,
      });
      
      // Logo derecha
      page.drawImage(logoImage, {
        x: width - 120,
        y: height - 80,
        width: 80,
        height: 60,
      });
    } catch (error) {
      console.log('Logos no encontrados, continuando sin ellos');
    }

    // Título principal
    page.drawText('CERTIFICADO DE IDONEIDAD Y DESEMPEÑO LABORAL', {
      x: width / 2 - 200,
      y: height - 120,
      size: 14,
      font: fontBold,
      color: blackColor,
    });

    page.drawText('(Auxiliar de Farmacia)', {
      x: width / 2 - 80,
      y: height - 140,
      size: 11,
      font: font,
      color: blackColor,
    });

    // Línea divisoria
    page.drawLine({
      start: { x: 50, y: height - 150 },
      end: { x: width - 50, y: height - 150 },
      thickness: 1,
      color: rgb(0.8, 0.8, 0.8),
    });

    // Contenido del certificado
    let yPosition = height - 180;
    const lineHeight = 20;

    // Texto introductorio
    page.drawText(`Certifico que Don(ña) ${data.studentName},`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`cédula de identidad Nº ${data.studentRUT}, ha trabajado en actividades de apoyo al`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`profesional Químico-Farmacéutico/Farmacéutico, Director Técnico del`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`establecimiento farmacéutico denominado: ${data.pharmacyName}, ubicado`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`en calle ${data.pharmacyAddress}, de la comuna de ${data.pharmacyCommune},`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`teléfono ${data.pharmacyPhone || 'N/A'} durante un período de ${data.periodText},`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`desde ${formatDate(data.startDate)}, hasta ${data.endDate === 'la actual fecha' ? 'la actual fecha' : formatDate(data.endDate)}.`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight * 2;
    page.drawText(`En dicho período ha demostrado idoneidad en el desempeño de las siguientes`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`actividades de apoyo a la labor técnica y administrativa del Químico-`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`Farmacéutico/Farmacéutico, Director Técnico del establecimiento:`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    // Lista de actividades
    yPosition -= lineHeight * 1.5;
    data.activities.forEach((activity: string, index: number) => {
      page.drawText(`${index + 1}.- ${activity}`, {
        x: 70,
        y: yPosition,
        size: 10,
        font: font,
        color: blackColor,
      });
      yPosition -= lineHeight;
    });

    // Espacio para más actividades si es necesario
    if (data.activities.length < 5) {
      for (let i = data.activities.length + 1; i <= 5; i++) {
        page.drawText(`${i}.- _________________________________________________________`, {
          x: 70,
          y: yPosition,
          size: 10,
          font: font,
          color: rgb(0.6, 0.6, 0.6),
        });
        yPosition -= lineHeight;
      }
    }

    yPosition -= lineHeight * 1.5;
    page.drawText(`Se otorga el presente certificado en conformidad a lo establecido en el artículo 28,`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`letra b) del Decreto Supremo Nº 466 de 1984, Reglamento de Farmacias,`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`Droguerías, Almacenes Farmacéuticos, Botiquines y Depósitos Autorizados,`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`del Ministerio de Salud; a fin de acreditar la calidad y el tiempo de desempeño`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`efectivo del personal a que se refiere en labores de apoyo al profesional`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`Químico-Farmacéutico/Farmacéutico, Director Técnico del establecimiento`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`individualizado.`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    // Sección de firma
    yPosition -= lineHeight * 3;
    
    page.drawText(`Director Técnico que certifica:`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: fontBold,
      color: blackColor,
    });

    yPosition -= lineHeight * 1.5;
    page.drawText(`Nombres y Apellidos: ${data.qfName}`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`Cédula de Identidad: ${data.qfRUT}`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight;
    page.drawText(`E-mail: ${data.qfEmail || 'N/A'}`, {
      x: 50,
      y: yPosition,
      size: 11,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight * 2.5;
    
    // Línea para firma
    page.drawLine({
      start: { x: 50, y: yPosition },
      end: { x: 350, y: yPosition },
      thickness: 1,
      color: blackColor,
    });

    yPosition -= lineHeight * 0.8;
    page.drawText(`Firma y timbre`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight * 0.8;
    page.drawText(`Químico-Farmacéutico/Farmacéutico,`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight * 0.8;
    page.drawText(`Director Técnico del establecimiento`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    // Ciudad y fecha
    yPosition -= lineHeight * 2;
    page.drawText(`${data.emissionCity}, ${formatDateChile(data.emissionDate)}`, {
      x: 50,
      y: yPosition,
      size: 10,
      font: font,
      color: blackColor,
    });

    yPosition -= lineHeight * 1.5;
    page.drawText(`Secretarías Regionales Ministeriales de Salud`, {
      x: 50,
      y: yPosition,
      size: 9,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });

    yPosition -= lineHeight * 0.8;
    page.drawText(`Ministerio de Salud`, {
      x: 50,
      y: yPosition,
      size: 9,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });

    // Guardar PDF
    const pdfBytes = await pdfDoc.save();
    
    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=Certificado_Idoneidad_${data.studentRUT.replace(/\./g, '').replace('-', '')}.pdf`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Error al generar el certificado' },
      { status: 500 }
    );
  }
}

// Funciones auxiliares para formatear fechas
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateChile(dateString: string): string {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} de ${month} de ${year}`;
}