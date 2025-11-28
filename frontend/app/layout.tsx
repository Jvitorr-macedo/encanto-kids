import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// 1. Definimos a variável CSS aqui
const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: "--font-nunito", // Importante: Mesmo nome usado no globals.css
});

export const metadata: Metadata = {
  title: "Encanto Kids | Gestão Escolar",
  description: "Portal administrativo e agenda digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 2. Injetamos a variável no body */}
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}