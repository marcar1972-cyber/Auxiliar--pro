// app/layout.js
import './globals.css';

export const metadata = {
  title: 'AuxiliarPro - Tu ruta al éxito en Farmacia',
  description: 'Plataforma de estudio para el Examen de Auxiliar de Farmacia en Chile.',
  verification: {
    google: 'iIARSpG3ZCQPX13aWBNtsLFQLgwsCWVc-wb8SswLSqY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-50">
        {children}
      </body>
    </html>
  );
}
