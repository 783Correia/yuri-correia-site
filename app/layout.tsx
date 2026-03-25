import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yuri-correia-site.vercel.app"),
  title: "Yuri Correia — Estrutura digital que gera resultado real",
  description:
    "Há 5 anos construo estruturas digitais que geram resultado real pra empresas B2B. Sites, landing pages e estratégia digital.",
  openGraph: {
    title: "Yuri Correia — Estrutura digital que gera resultado real",
    description:
      "A experiência do usuário define quem fecha com você. Há 5 anos construo estruturas digitais que geram resultado real pra empresas B2B.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yuri Correia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Correia — Estrutura digital que gera resultado real",
    description:
      "A experiência do usuário define quem fecha com você. Estruturas digitais que geram resultado real pra empresas B2B.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
