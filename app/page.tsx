"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2, FileCode, Globe, Paintbrush, Smartphone, Database, Server,
  Lock, Zap, Coins, Link2, GitBranch, BarChart3, Brain, Hexagon, Anchor,
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

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
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
      projects: { title: "Proyectos", intro: "Una selección de proyectos reales — hackathons, productos en producción y exploración técnica.", desc1: "Plataforma e-learning con dashboards diferenciados por rol, sistema de autenticación completo y arquitectura REST. Ganador del primer lugar en hackathon de No Country.", desc2: "POS de stablecoins en Solana para comerciantes latinoamericanos. Aceptado en Solana Latam Labs.", desc3: "Análisis de sentimiento de commits de GitHub en tiempo real. Construido en solitario para hackathon midudev.", desc4: "SaaS de gestión de flotas con hooks personalizados, paginación avanzada y CI/CD en Vercel.", desc5: "Portal de salud para gestión moderna de citas y teleasistencia. Construido con React, Vite y Tailwind CSS.", desc6: "Protocolo de pagos descentralizado en Solana Devnet usando Anchor, Rust y Borsh en el frontend.", ver: "Ver" },
    skills: { title: "Skills", frontend: "Frontend", web3: "Web3 & Backend" },
    contact: { eyebrow: " · Contacto", title1: "¿Tienes un", title2: "proyecto", title3: "en mente?", desc: "Estoy abierto a roles full-time, freelance y colaboraciones en proyectos interesantes. Respondo en menos de 24 horas." },
    footer: { phrase: "Cada línea de código es una oportunidad para construir algo que deje huella" },

  },
  en: {
    nav: { about: "about", projects: "projects", skills: "skills", contact: "contact" },
    hero: { desc: "I build interfaces that blend technical clarity with thoughtful user experience. Specialized in React, TypeScript and Web3 ecosystems.", cta: "View projects" },
    about: { title: "About me", stack: "Main stack", github: "GitHub", email: "Email",
      p1: "I'm <strong>Armando Alejandro Anchundia Yela</strong>, frontend developer based in Guayaquil, Ecuador. I specialize in building digital products with React and TypeScript — from SaaS to Web3 protocols on Solana.",
      p2: "My approach combines <strong>technical clarity with functional design</strong>. I don't just write code that works, but interfaces people understand and enjoy using. Every project is an opportunity to improve both architecture and experience.",
      p3: "I'm currently developing <strong>LatamLink Pay</strong> — a stablecoin POS system on Solana for Latin American merchants, accepted into the Solana Latam Labs program.",
    },
      projects: { title: "Projects", intro: "A selection of real projects — hackathons, production products and technical exploration.", desc1: "E-learning platform with role-based dashboards, full auth system and REST architecture. First place winner at No Country hackathon.", desc2: "Stablecoin POS on Solana for Latin American merchants. Accepted at Solana Latam Labs.", desc3: "Real-time GitHub commit sentiment analysis. Solo project for midudev hackathon.", desc4: "Fleet management SaaS with custom hooks, advanced pagination and CI/CD on Vercel.", desc5: "Health portal for modern appointment management and telemedicine. Built with React, Vite and Tailwind CSS.", desc6: "Decentralized payment protocol on Solana Devnet using Anchor, Rust and Borsh on the frontend.", ver: "View" },
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
          Alejandro <span className="">Dev</span>
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

            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <p className="projects-intro">
            {t.projects.intro}
          </p>

          {/* Grid */}
          <div className="projects-grid">
            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[0] = el;
              }}
            >
              <div className="pc-img">
                <img src="/proyects/EduPlaftorm.png" alt="EduPlatform" />
              </div>
              <div className="pc-num">001</div>
              <div className="pc-title">EduPlatform</div>
              <div className="pc-desc">
                {t.projects.desc1}
              </div>
              <div className="pc-stack">
                <span className="pctag"><TechIcon name="React" size={11} /> React</span>
                <span className="pctag"><TechIcon name="Tailwind CSS" size={11} /> Tailwind CSS</span>
                <span className="pctag"><TechIcon name="NestJS" size={11} /> NestJS</span>
                <span className="pctag"><TechIcon name="PostgreSQL" size={11} /> PostgreSQL</span>
                <span className="pctag"><TechIcon name="JWT Auth" size={11} /> JWT Auth</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">🏆 Alura Latam Hackathon</span>
                <div className="project-links">
                  <a className="plink" href="https://github.com/anchundiatech/E-Learning-Platform" target="_blank">GITHUB ↗</a>
                </div>
              </div>
            </div>

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
                <span className="pctag"><TechIcon name="React" size={11} /> React</span>
                <span className="pctag"><TechIcon name="Solana" size={11} /> Solana</span>
                <span className="pctag"><TechIcon name="Web3.js" size={11} /> Web3.js</span>
                <span className="pctag"><TechIcon name="TypeScript" size={11} /> TypeScript</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">🌐 Solana Latam Labs</span>
                <div className="project-links">
                  <a className="plink" href="https://frontend-latam-link.vercel.app/" target="_blank">DEMO ↗</a>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[2] = el;
              }}
            >
               <div className="pc-img">
                <img src="/proyects/gitmood.png" alt="GitMood" />
              </div>
              <div className="pc-num">003</div>
              <div className="pc-title">GitMood</div>
              <div className="pc-desc">
                {t.projects.desc3}
              </div>
              <div className="pc-stack">
                <span className="pctag"><TechIcon name="Next.js" size={11} /> Next.js</span>
                <span className="pctag"><TechIcon name="GitHub API" size={11} /> GitHub API</span>
                <span className="pctag"><TechIcon name="Tailwind" size={11} /> Tailwind</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">Personal</span>
                <div className="project-links">
                  <a className="plink" href="https://github.com/anchundiatech/GitMood" target="_blank">GitHub ↗</a>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[3] = el;
              }}
            >
               <div className="pc-img">
                <img src="/proyects/MediLink.png" alt="MediLink" />
              </div>
              <div className="pc-num">004</div>
              <div className="pc-title">MediLink</div>
              <div className="pc-desc">
                {t.projects.desc5}
              </div>
              <div className="pc-stack">
                <span className="pctag"><TechIcon name="React" size={11} /> React</span>
                <span className="pctag"><TechIcon name="Vite" size={11} /> Vite</span>
                <span className="pctag"><TechIcon name="Tailwind" size={11} /> Tailwind</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">🩺 HealthTech</span>
                <div className="project-links">
                  <a className="plink" href="https://github.com/anchundiatech" target="_blank">GitHub ↗</a>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[4] = el;
              }}
            >
               <div className="pc-img">
                <img src="/proyects/Nexum.png" alt="LatamLink Pay" />
              </div>
              <div className="pc-num">005</div>
              <div className="pc-title">Nexum</div>
              <div className="pc-desc">
                {t.projects.desc6}
              </div>
              <div className="pc-stack">
                <span className="pctag"><TechIcon name="Rust" size={11} /> Rust</span>
                <span className="pctag"><TechIcon name="Anchor" size={11} /> Anchor</span>
                <span className="pctag"><TechIcon name="Solana" size={11} /> Solana</span>
                <span className="pctag"><TechIcon name="React" size={11} /> React</span>
              </div>
              <div className="pc-footer">
                <span className="pc-badge">⚓ WayLearn Bootcamp</span>
                <div className="project-links">
                  <a className="plink" href="https://github.com/anchundiatech/NeXum" target="_blank">GitHub ↗</a>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              ref={(el) => {
                cardsRef.current[5] = el;
              }}
            >
              <div className="pc-img">
                <img src="/proyects/BlackBox.png" alt="BlackBox Fleet" />
              </div>
              <div className="pc-num">006</div>
              <div className="pc-title">BlackBox Fleet</div>
              <div className="pc-desc">
                {t.projects.desc4}
              </div>
              <div className="pc-stack">
                <span className="pctag"><TechIcon name="React" size={11} /> React</span>
                <span className="pctag"><TechIcon name="Vite" size={11} /> Vite</span>
                <span className="pctag"><TechIcon name="TypeScript" size={11} /> TypeScript</span>
                <span className="pctag"><TechIcon name="Tailwind" size={11} /> Tailwind</span>
              </div>
              <div className="pc-footer">
                <span
                  className="pc-badge"
                  style={{ color: "var(--color-frost)" }}
                >
                  ● Live
                </span>
                <div className="project-links">
                  <a className="plink" href="https://github.com/anchundiatech" target="_blank">GitHub ↗</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="section reveal" id="skills">
          <div className="section-header">

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
                <GithubIcon />
                GitHub
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/alejandro-anchundia/" target="_blank">
                <LinkedinIcon />
                LinkedIn
              </a>
              <a className="social-link" href="https://x.com/alejo_dev1" target="_blank">
                <XIcon />
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
