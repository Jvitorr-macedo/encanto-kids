import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: "--font-nunito", 
});

// IMPLEMENTAÇÃO DE SEO E METADADOS
export const metadata: Metadata = {
  title: {
    template: '%s | Encanto Kids',
    default: 'Encanto Kids | Hotelzinho e Espaço Infantil',
  },
  description: "Sistema de gestão escolar e agenda digital para pais. Acompanhe a rotina do seu filho com segurança.",
  keywords: ["escola infantil", "hotelzinho", "patos pb", "educação infantil", "agenda digital", "gestão escolar"],
  authors: [{ name: "João Vítor Macêdo" }],
  openGraph: {
    title: 'Encanto Kids',
    description: 'Cuidado e diversão para o seu pequeno.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Encanto Kids',
  },
  icons: {
    icon: '/logo.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} font-sans antialiased bg-page`}>
        {children}
      </body>
    </html>
  );
}