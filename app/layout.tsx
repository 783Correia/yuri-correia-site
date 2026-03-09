import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const martianMono = Martian_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuri Correia — Desenvolvedor de Projetos Digitais",
  description:
    "Empresários me contratam pra obter resultados reais. Sites B2B que vendem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bebas.variable} ${dmSans.variable} ${martianMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
