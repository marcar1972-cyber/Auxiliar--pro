// app/layout.js
import './globals.css';

export const metadata = {
  title: 'AuxiliarPro - Tu ruta al éxito en Farmacia',
  description: 'Plataforma de estudio líder para el Examen de Auxiliar de Farmacia en Chile.',
  keywords: 'auxiliar de farmacia, examen seremi, farmacia chile, estudiar farmacia',
  
  // CÓDIGO DE VERIFICACIÓN DE GOOGLE SEARCH CONSOLE
  verification: {
    google: 'iIARSpG3ZCQPX13aWBNtsLFQLgwsCWVc-wb8SswLSqY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
