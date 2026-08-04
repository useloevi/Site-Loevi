import {
  Cormorant_Garamond,
  Cormorant_SC,
  Parisienne,
  Be_Vietnam_Pro,
  DM_Sans,
} from "next/font/google";

// Cada fonte vira uma variável CSS (--font-...), aplicada no <body> em layout.js.
// Assim, qualquer CSS do projeto pode usar var(--font-x) e a fonte certa
// é carregada e otimizada automaticamente pelo Next.js (sem <link> manual).

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-sc",
  display: "swap",
});

export const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const fontVariables = [
  cormorantGaramond.variable,
  cormorantSC.variable,
  parisienne.variable,
  beVietnamPro.variable,
  dmSans.variable,
].join(" ");
