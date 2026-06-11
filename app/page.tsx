"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2, FileCode, Globe, Paintbrush, Smartphone, Database, Server,
  Lock, Zap, Coins, Link2, GitBranch, BarChart3, Brain, Hexagon, Anchor,
  Github, Linkedin, Twitter,
} from "lucide-react";

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  React: Code2, TypeScript: FileCode, "Next.js": Globe, "Tailwind CSS": Paintbrush,
  Vite: Zap, "React Native": Smartphone, Solana: Coins, "Web3.js": Link2,
  Supabase: Database, NestJS: Server, Gemini: Brain, Rust: Hexagon,
  Anchor, PostgreSQL: Database, "JWT Auth": Lock, "GitHub API": GitBranch,
  "Sentiment API": BarChart3, Expo: Globe, Web3: Coins, Tailwind: Paintbrush,
};

const roles = ["Frontend Developer", "Web3 Developer"];

function TechIcon({ name, size = 12 }: { name: string; size?: number }) {
  const Icon = techIcons[name];
  return Icon ? <Icon size={size} className="tag-icon" /> : null;
}

const translations = {
  es: {
    nav: { about: "sobre mí", projects: "proyectos", skills: "skills", contact: "contactar" },
    hero: { desc: "Construyo interfaces que combinan claridad técnica con experiencia de usuario cuidada. Especializado en React, TypeScript y ecosistemas Web3.", cta: "Ver proyectos" },
    about: { title: "Sobre mí", stack: "Stack principal", github: "GitHub", email: "Email",
      p1: 'Soy <strong>Alejandro Anchundia </strong>, frontend developer y Web3 Developer. Me especializo en construir productos digitales con React y TypeScript — desde SaaS hasta protocolos Web3 en Solana.',
      p2: 'Mi enfoque combina <strong>claridad técnica con diseño funcional</strong>. No solo escribo código que funciona, sino interfaces que las personas entienden y disfrutan usar. Cada proyecto es una oportunidad de mejorar tanto la arquitectura como la experiencia.',
      p3: 'Actualmente estoy desarrollando <strong>LatamLink Pay</strong> — un sistema POS de stablecoins en Solana para comerciantes latinoamericanos, aceptado en el programa Solana Latam Labs.',
    },
    projects: { title: "Proyectos", intro: "Una selección de proyectos reales — hackathons, productos en producción y exploración técnica.", featured: "Proyecto destacado · 001", badge1: "🏆 1er lugar · No Country Hackathon", demo: "Demo", desc1: "Plataforma e-learning con dashboards diferenciados por rol, sistema de autenticación completo y arquitectura REST. Ganador del primer lugar en hackathon de No Country.", desc2: "POS de stablecoins en Solana para comerciantes latinoamericanos. Aceptado en Solana Latam Labs.", desc3: "Análisis de sentimiento de commits de GitHub en tiempo real. Construido en solitario para hackathon midudev.", desc4: "App clínica de salud mental con check-ins IA entre sesiones. Supabase + Gemini 1.5 Pro. XPRIZE 2026.", desc5: "SaaS de gestión de flotas con hooks personalizados, paginación avanzada y CI/CD en Vercel.", desc6: "Protocolo de pagos descentralizado en Solana Devnet usando Anchor, Rust y Borsh en el frontend.", desc7: "App de networking por proximidad con dos vertientes: social y eventos. Piloto en conferencias tech de Guayaquil.", progress: "En progreso", ver: "Ver" },
    skills: { title: "Skills & Experiencia", frontend: "Frontend", web3: "Web3 & Backend" },
    contact: { eyebrow: "04 · Contacto", title1: "¿Tienes un", title2: "proyecto", title3: "en mente?", desc: "Estoy abierto a roles full-time, freelance y colaboraciones en proyectos interesantes. Respondo en menos de 24 horas." },
    footer: { phrase: "Cada línea de código es una oportunidad para construir algo que deje huella" },

  },
  en: {
    nav: { about: "about", projects: "projects", skills: "skills", contact: "contact" },
    hero: { desc: "I build interfaces that blend technical clarity with thoughtful user experience. Specialized in React, TypeScript and Web3 ecosystems.", cta: "View projects" },
    about: { title: "About me", stack: "Main stack", github: "GitHub", email: "Email",
      p1: "I'm <strong>Armando Alejandro Anchundia Yela</strong>, frontend developer based in Guayaquil, Ecuador. I specialize in building digital products with React and TypeScript — from SaaS to Web3 protocols on Solana.",
      p2: "My approach combines <strong>technical clarity with functional design</strong>. I don't just write code that works, but interfaces people understand and enjoy using. Every project is an opportunity to improve both architecture and experience.",
      p3: "I'm currently developing <strong>LatamLink Pay</strong> — a stablecoin POS system on Solana for Latin American merchants, accepted into the Solana Latam Labs program — and <strong>Lumina AI</strong>, a mental health clinical app for the XPRIZE Build with Gemini.",
    },
    projects: { title: "Projects", intro: "A selection of real projects — hackathons, production products and technical exploration.", featured: "Featured project · 001", badge1: "🏆 1st place · No Country Hackathon", demo: "Demo", desc1: "E-learning platform with role-based dashboards, full auth system and REST architecture. First place winner at No Country hackathon.", desc2: "Stablecoin POS on Solana for Latin American merchants. Accepted at Solana Latam Labs.", desc3: "Real-time GitHub commit sentiment analysis. Solo project for midudev hackathon.", desc4: "Mental health clinical app with AI check-ins between sessions. Supabase + Gemini 1.5 Pro. XPRIZE 2026.", desc5: "Fleet management SaaS with custom hooks, advanced pagination and CI/CD on Vercel.", desc6: "Decentralized payment protocol on Solana Devnet using Anchor, Rust and Borsh on the frontend.", desc7: "Proximity networking app with social and events tracks. Pilot at tech conferences in Guayaquil.", progress: "In progress", ver: "View" },
    skills: { title: "Skills & Experience", frontend: "Frontend", web3: "Web3 & Backend" },
    contact: { eyebrow: "04 · Contact", title1: "Have a", title2: "project", title3: "in mind?", desc: "I'm open to full-time roles, freelance and collaborations on interesting projects. I respond within 24 hours." },
    footer: { phrase: "Every line of code is an opportunity to build something that leaves a mark" },

  },
};

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<"es" | "en">("es");
  const [roleIndex, setRoleIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const t = translations[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const savedLang = localStorage.getItem("lang") as "es" | "en" | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const cardEls = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const cardIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }, 80);
            cardIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cardEls.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(16px)";
      c.style.transition =
        "opacity .6s ease, transform .6s ease, background .2s, border-color .25s";
      cardIO.observe(c);
    });

    return () => cardIO.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="logo" href="/">
          <span className="">Dev</span>
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
          </ul>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "\u263E" : "\u2600"}
          </button>
          <a className="nav-cta" href="mailto:armandoanchundiayela@gmail.com">
            {t.nav.contact}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-gradient-overlay" />

        <div className="hero-visual">
          <img
            src="/unnamed.png"
            alt="Alejandro Anchundia"
          />
        </div>

        <div className="hero-content" style={{ padding: "0 3rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <h1 className="hero-name">
            Alejandro<br />
            <em className="hero-gradient-text">Anchundia</em>
          </h1>
          <div className="hero-role">
            <span className="hero-role-text" key={roleIndex}>{roles[roleIndex]}</span>
            <span className="hero-role-cursor">|</span>
          </div>
          <p className="hero-desc">
            {t.hero.desc}
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              {t.hero.cta}
            </a>
            <a
              href="https://github.com/anchundiatech"
              target="_blank"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="section reveal" id="about">
          <div className="section-header">
            <span className="section-index">01</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
              <div className="about-links">
                <a
                  className="about-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="about-link"
                  href="mailto:armandoanchundiayela@gmail.com"
                  target="_blank"
                >
                  Email
                </a>
                <a className="about-link" href="https://www.linkedin.com/in/alejandro-anchundia/" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <div className="stack-title">{t.about.stack}</div>
              <div className="stack-grid">
                <div className="stack-item">
                  <Code2 size={14} className="stack-icon" />
                  React / JSX
                </div>
                <div className="stack-item">
                  <FileCode size={14} className="stack-icon" />
                  TypeScript
                </div>
                <div className="stack-item">
                  <Globe size={14} className="stack-icon" />
                  Next.js
                </div>
                <div className="stack-item">
                  <Paintbrush size={14} className="stack-icon" />
                  Tailwind CSS
                </div>
                <div className="stack-item">
                  <Zap size={14} className="stack-icon" />
                  Vite
                </div>
                <div className="stack-item">
                  <Smartphone size={14} className="stack-icon" />
                  React Native
                </div>
                <div className="stack-item">
                  <Coins size={14} className="stack-icon amber" />
                  Solana / Web3
                </div>
                <div className="stack-item">
                  <Database size={14} className="stack-icon amber" />
                  Supabase
                </div>
                <div className="stack-item">
                  <Server size={14} className="stack-icon amber" />
                  NestJS
                </div>
                <div className="stack-item">
                  <Brain size={14} className="stack-icon amber" />
                  Gemini AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="section reveal" id="projects">
          <div className="section-header">
            <span className="section-index">02</span>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <p className="projects-intro">
            {t.projects.intro}
          </p>

          {/* Featured */}
          <div
            className="project-featured"
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
          >
            <div className="project-img">
              <img
                className="project-img-actual"
                src="/proyects/EduPlaftorm.png"
                alt="EduPlatform"
              />
            </div>
            <div className="project-info">
              <div className="project-index">{t.projects.featured}</div>
              <div className="project-title">EduPlatform</div>
              <div className="project-desc">
                {t.projects.desc1}
              </div>
              <div className="project-stack">
                <span className="ptag hi"><TechIcon name="React" size={12} /> React</span>
                <span className="ptag hi">{techIcons["Tailwind CSS"] && <techIcons["Tailwind CSS"] size={12} />} Tailwind CSS</span>
                <span className="ptag">{techIcons.NestJS && <techIcons.NestJS size={12} />} NestJS</span>
                <span className="ptag">{techIcons.PostgreSQL && <techIcons.PostgreSQL size={12} />} PostgreSQL</span>
                <span className="ptag">{techIcons["JWT Auth"] && <techIcons["JWT Auth"] size={12} />} JWT Auth</span>
              </div>
              <div className="project-badge">
                {t.projects.badge1}
              </div>
              <div className="project-links">
                <a
                  className="plink"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  GitHub ↗
                </a>
                <a className="plink ghost" href="https://edu-platform-omega-ten.vercel.app/">
                  {t.projects.demo} ↗
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[1] = el;
              }}
            >
              <div className="pc-img">
                <img src="/proyects/LatamLinkpay.png" alt="LatamLink Pay" />
              </div>
              <div className="pc-num">002</div>
              <div className="pc-title">LatamLink Pay</div>
              <div className="pc-desc">
                {t.projects.desc2}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons.React && <techIcons.React size={11} />} React</span>
                <span className="pctag">{techIcons.Solana && <techIcons.Solana size={11} />} Solana</span>
                <span className="pctag">{techIcons["Web3.js"] && <techIcons["Web3.js"] size={11} />} Web3.js</span>
                <span className="pctag">{techIcons.TypeScript && <techIcons.TypeScript size={11} />} TypeScript</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">🌐 Solana Latam Labs</span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[2] = el;
              }}
            >
              <div className="pc-num">003</div>
              <div className="pc-title">GitMood</div>
              <div className="pc-desc">
                {t.projects.desc3}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons["Next.js"] && <techIcons["Next.js"] size={11} />} Next.js</span>
                <span className="pctag">{techIcons["GitHub API"] && <techIcons["GitHub API"] size={11} />} GitHub API</span>
                <span className="pctag">{techIcons.Tailwind && <techIcons.Tailwind size={11} />} Tailwind</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">Personal</span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[3] = el;
              }}
            >
              <div className="pc-num">004</div>
              <div className="pc-title">Lumina AI</div>
              <div className="pc-desc">
                {t.projects.desc4}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons["React Native"] && <techIcons["React Native"] size={11} />} React Native</span>
                <span className="pctag">{techIcons.Expo && <techIcons.Expo size={11} />} Expo</span>
                <span className="pctag">{techIcons.Gemini && <techIcons.Gemini size={11} />} Gemini</span>
                <span className="pctag">{techIcons.Supabase && <techIcons.Supabase size={11} />} Supabase</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">🏅 XPRIZE Gemini</span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[4] = el;
              }}
            >
              <div className="pc-img">
                <img src="/proyects/BlackBox.png" alt="BlackBox Fleet" />
              </div>
              <div className="pc-num">005</div>
              <div className="pc-title">BlackBox Fleet</div>
              <div className="pc-desc">
                {t.projects.desc5}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons.React && <techIcons.React size={11} />} React</span>
                <span className="pctag">{techIcons.Vite && <techIcons.Vite size={11} />} Vite</span>
                <span className="pctag">{techIcons.TypeScript && <techIcons.TypeScript size={11} />} TypeScript</span>
                <span className="pctag">{techIcons.Tailwind && <techIcons.Tailwind size={11} />} Tailwind</span>
              </div>
              <div className="pc-footer">
                <span
                  className="pc-badge"
                  style={{ color: "var(--color-frost)" }}
                >
                  ● Live
                </span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[5] = el;
              }}
            >
              <div className="pc-num">006</div>
              <div className="pc-title">Nexum</div>
              <div className="pc-desc">
                {t.projects.desc6}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons.Rust && <techIcons.Rust size={11} />} Rust</span>
                <span className="pctag">{techIcons.Anchor && <techIcons.Anchor size={11} />} Anchor</span>
                <span className="pctag">{techIcons.Solana && <techIcons.Solana size={11} />} Solana</span>
                <span className="pctag">{techIcons.React && <techIcons.React size={11} />} React</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">⚓ WayLearn Bootcamp</span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[6] = el;
              }}
            >
              <div className="pc-num">007</div>
              <div className="pc-title">Kankei</div>
              <div className="pc-desc">
                {t.projects.desc7}
              </div>
              <div className="pc-stack">
                <span className="pctag">{techIcons["React Native"] && <techIcons["React Native"] size={11} />} React Native</span>
                <span className="pctag">{techIcons.Expo && <techIcons.Expo size={11} />} Expo</span>
                <span className="pctag">{techIcons.Supabase && <techIcons.Supabase size={11} />} Supabase</span>
              </div>
              <div className="pc-footer">
                <span
                  className="pc-badge"
                  style={{ color: "var(--color-amber)" }}
                >
                  ◐ {t.projects.progress}
                </span>
                <a
                  className="pc-link"
                  href="https://github.com/anchundiatech"
                  target="_blank"
                >
                  {t.projects.ver} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="section reveal" id="skills">
          <div className="section-header">
            <span className="section-index">03</span>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>

          <div className="skills-layout">
            <div>
              <div className="skill-category">
                <div className="skill-cat-name">{t.skills.frontend}</div>

                <div className="skill-row">
                  <span className="skill-name">React / JSX</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                    </div>
                    <span className="skill-pct">92</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">Tailwind CSS</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                    </div>
                    <span className="skill-pct">88</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">74</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">Next.js / Vite</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">80</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">React Native / Expo</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot on" />
                      <div className="skill-dot" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">68</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-cat-name">{t.skills.web3}</div>

                <div className="skill-row">
                  <span className="skill-name">Solana / Anchor</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">65</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">NestJS / REST APIs</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">62</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">Supabase / PostgreSQL</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">60</span>
                  </div>
                </div>

                <div className="skill-row">
                  <span className="skill-name">Gemini AI / n8n</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-dots">
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot on amber" />
                      <div className="skill-dot" />
                      <div className="skill-dot" />
                    </div>
                    <span className="skill-pct">58</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="section reveal" id="contact">
          <div className="contact-wrap">
            <span className="contact-eyebrow">{t.contact.eyebrow}</span>
            <h2 className="contact-title">
              {t.contact.title1}<br />
              <em>{t.contact.title2}</em> {t.contact.title3}
            </h2>
            <p className="contact-sub">
              {t.contact.desc}
            </p>
            <a
              className="contact-email"
              href="mailto:armandoanchundiayela@gmail.com"
            >
              armandoanchundiayela@gmail.com
            </a>
            <div className="contact-divider" />
            <div className="social-links">
              <a
                className="social-link"
                href="https://github.com/anchundiatech"
                target="_blank"
              >
                <Github size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                GitHub
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/alejandro-anchundia/" target="_blank">
                <Linkedin size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                LinkedIn
              </a>
              <a className="social-link" href="https://x.com/alejo_dev1" target="_blank">
                <Twitter size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <span>© 2026 · Alejandro Anchundia</span>
        <span>{t.footer.phrase}</span>
      </footer>
    </>
  );
}
