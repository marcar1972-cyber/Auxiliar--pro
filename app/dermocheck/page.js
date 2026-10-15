import DermoCheckClient from "./DermoCheckClient";

export const metadata = {
  title: "DermoCheck PRO: Calculadora de Vencimiento y Batch Code Dermocosmético",
  description: "Calcula online la fecha de caducidad de productos Eucerin, La Roche-Posay, Vichy, CeraVe, ISDIN y más utilizando el código de lote (Batch Code). Herramienta gratis para farmacias en Chile.",
  keywords: ["calculadora batch code", "vencimiento eucerin", "leer codigo lote la roche posay", "vencimiento vichy", "batch code cerave", "vencimiento isdin", "auxiliar de farmacia chile"],
  openGraph: {
    title: "Calculadora de Vencimiento Dermo - DermoCheck PRO",
    description: "Ingresa el Batch Code y descubre la fecha exacta de caducidad de cualquier producto dermocosmético.",
    url: "https://www.auxiliaresdefarmacia.cl/dermocheck",
    siteName: "AuxiliarPro Chile",
    images: [
      {
        url: "https://www.auxiliaresdefarmacia.cl/og-dermocheck.jpg",
        width: 1200,
        height: 630,
        alt: "DermoCheck PRO - Calculadora de Vencimiento",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function DermoCheckPage() {
  return <DermoCheckClient />;
}