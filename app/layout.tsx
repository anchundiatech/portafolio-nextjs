import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Alejandro Anchundia — Frontend Developer & Web3 Developer",
  description:
    "Portfolio profesional de Alejandro Anchundia, frontend developer especializado en React, TypeScript, Tailwind CSS y ecosistemas Web3 en Solana. Explora proyectos reales, habilidades técnicas y experiencia en desarrollo de software.",
  keywords: [
    "frontend developer", "web3 developer", "React", "TypeScript", "Tailwind CSS",
    "Solana", "desarrollador web", "Ecuador", "Guayaquil", "portfolio",
    "Alejandro Anchundia", "Next.js",
  ],
  authors: [{ name: "Alejandro Anchundia" }],
  creator: "Alejandro Anchundia",
  openGraph: {
    title: "Alejandro Anchundia — Frontend Developer & Web3 Developer",
    description:
      "Portfolio profesional especializado en React, TypeScript y ecosistemas Web3 en Solana.",
    url: "https://andia.dev",
    siteName: "Alejandro Anchundia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Anchundia — Frontend Developer & Web3 Developer",
    description:
      "Portfolio profesional especializado en React, TypeScript y ecosistemas Web3 en Solana.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://andia.dev",
    languages: {
      "es-ES": "https://andia.dev",
      "en-US": "https://andia.dev",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${mono.variable} ${sans.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="X5sJOVYux6OMzZ32Uubae-ch_V7-UmsO-U4oplPaSps" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alejandro Anchundia",
              url: "https://andia.dev",
              jobTitle: "Frontend Developer & Web3 Developer",
              knowsAbout: ["React", "TypeScript", "Tailwind CSS", "Solana", "Next.js"],
              sameAs: [
                "https://github.com/anchundiatech",
                "https://www.linkedin.com/in/alejandro-anchundia/",
                "https://x.com/alejo_dev1",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
