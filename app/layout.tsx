import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "./config";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alejandro Anchundia | Portafolio - Frontend & Web3 Developer",
    template: "%s",
  },
  description:
    "Portfolio profesional de Alejandro Anchundia, frontend developer especializado en React, TypeScript, Tailwind CSS y ecosistemas Web3 en Solana.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      es: `${SITE_URL}/es`,
      en: `${SITE_URL}/en`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${serif.variable} ${mono.variable} ${sans.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-KHTLV2DC" />
        <GoogleAnalytics gaId="G-8SYE9NF1EG" />
      </body>
    </html>
  );
}
