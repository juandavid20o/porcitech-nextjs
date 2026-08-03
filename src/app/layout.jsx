import './globals.css';

export const metadata = {
  title: 'Sistema Integral Porcino - PorciTech',
  description: 'Gestión inteligente para la porcicultura',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}