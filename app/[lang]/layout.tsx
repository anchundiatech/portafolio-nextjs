import type { Metadata } from "next";
import { SITE_URL } from "../config";

const BASE_TITLES = {
  es: "Alejandro Anchundia | Portafolio — Frontend & Web3 Developer",
  en: "Alejandro Anchundia | Portfolio — Frontend & Web3 Developer",
} as const;

const DESCRIPTIONS = {
  es: "Portfolio profesional de Alejandro Anchundia, frontend developer especializado en React, TypeScript, Tailwind CSS y ecosistemas Web3 en Solana. Explora proyectos reales, habilidades técnicas y experiencia en desarrollo de software.",
  en: "Portfolio of Alejandro Anchundia, frontend developer specializing in React, TypeScript, Tailwind CSS and Web3 ecosystems on Solana. Explore real projects, technical skills and software engineering experience.",
} as const;

const SHORT_DESCRIPTIONS = {
  es: "Portfolio profesional especializado en React, TypeScript y ecosistemas Web3 en Solana.",
  en: "Professional portfolio focused on React, TypeScript and Web3 ecosystems on Solana.",
} as const;

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const resolvedLang = lang === "en" ? "en" : "es";
  const isEnglish = resolvedLang === "en";

  return {
    title: {
      default: BASE_TITLES[resolvedLang],
      template: "%s",
    },
    description: DESCRIPTIONS[resolvedLang],
    keywords: isEnglish
      ? [
          "Alejandro Anchundia",
          "Frontend Developer",
          "Web3 Developer",
          "Solana",
          "React",
          "TypeScript",
          "Next.js",
          "LatamLink Pay",
          "Web Developer Ecuador",
        ]
      : [
          "Alejandro Anchundia",
          "Frontend Developer",
          "Web3 Developer",
          "Solana",
          "React",
          "TypeScript",
          "Next.js",
          "LatamLink Pay",
          "Desarrollador Web Ecuador",
        ],
    openGraph: {
      title: BASE_TITLES[resolvedLang],
      description: SHORT_DESCRIPTIONS[resolvedLang],
      url: `${SITE_URL}/${resolvedLang}`,
      siteName: "Alejandro Anchundia",
      locale: isEnglish ? "en_US" : "es_EC",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: BASE_TITLES[resolvedLang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: BASE_TITLES[resolvedLang],
      description: SHORT_DESCRIPTIONS[resolvedLang],
      creator: "@andiadev",
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_URL}/${resolvedLang}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return <div lang={lang === "en" ? "en" : "es"}>{children}</div>;
}
