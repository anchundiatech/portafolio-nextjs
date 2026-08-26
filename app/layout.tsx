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

const TITLE = "Alejandro Anchundia — Frontend Developer & Web3 Developer";
const DESCRIPTION =
  "Portfolio profesional de Alejandro Anchundia, frontend developer especializado en React, TypeScript, Tailwind CSS y ecosistemas Web3 en Solana. Explora proyectos reales, habilidades técnicas y experiencia en desarrollo de software.";
const SHORT_DESCRIPTION =
  "Portfolio profesional especializado en React, TypeScript y ecosistemas Web3 en Solana.";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    icons: [
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    ],
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      "frontend developer", "web3 developer", "React", "TypeScript", "Tailwind CSS",
      "Solana", "desarrollador web", "Ecuador", "Orellana", "Quito", "portfolio", "desarrollador de software",
      "Alejandro Anchundia", "Next.js",
    ],
    authors: [{ name: "Alejandro Anchundia", url: SITE_URL }],
    creator: "Alejandro Anchundia",
    category: "technology",
    openGraph: {
      title: TITLE,
      description: SHORT_DESCRIPTION,
      url: SITE_URL,
      siteName: "Alejandro Anchundia",
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: SHORT_DESCRIPTION,
      creator: "@alejo_dev1",
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        "es-ES": SITE_URL,
        "en-US": SITE_URL,
      },
    },
    verification: {
      google: "X5sJOVYux6OMzZ32Uubae-ch_V7-UmsO-U4oplPaSps",
    },
  };
}

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alejandro Anchundia",
              alternateName: "Armando Alejandro Anchundia Yela",
              url: SITE_URL,
              image: `${SITE_URL}/unnamed.png`,
              description: DESCRIPTION,
              jobTitle: "Frontend Developer & Web3 Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orellana",
                addressCountry: "EC",
              },
              knowsAbout: ["React", "TypeScript", "Tailwind CSS", "Solana", "Next.js", "Web3", "Rust"],
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
      <GoogleTagManager gtmId="GTM-KHTLV2DC" />
      <GoogleAnalytics gaId="G-8SYE9NF1EG" />
    </html>
  );
}
