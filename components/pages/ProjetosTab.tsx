"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  logo?: string;
  name: string;
  description: string;
  pill?: string;
  image?: string;
  url: string;
}

const projects: Project[] = [
  {
    logo: "/logos/sales-emb.png",
    name: "Sales EMB",
    description: "B2B · Embalagens · De R$35k para R$165k faturados após implementação",
    pill: "↗ +370% receita",
    image: "/projects/sales-emb.png",
    url: "https://salesemb.com.br/",
  },
  {
    logo: "/logos/torno-metal.png",
    name: "Torno Metal Everton Lopes",
    description: "Agro · B2B · Landing page + Posicionamento para revendedores",
    pill: "↗ Receita comprovada",
    image: "/projects/torno-metal.png",
    url: "https://tornometalevertonlopes.com.br/",
  },
  {
    logo: "/logos/jaco-locadora.png",
    name: "Jacó Locadora",
    description: "Industrial · Plataformas elevatórias · Anti-click fraud Cloudflare",
    pill: "1º lugar no Google em 24h",
    image: "/projects/jaco-locadora.png",
    url: "https://www.jacolocadora.com.br/",
  },
  {
    logo: "/logos/agilizza.png",
    name: "Agilizza Soluções",
    description: "B2B · Site institucional · Identidade digital do zero",
    image: "/projects/agilizza.png",
    url: "https://agilizzasolucoes.com.br/",
  },
  {
    logo: "/logos/tecnoplay.png",
    name: "TecnoPlay",
    description: "E-commerce · Produto digital · R$16k faturados na plataforma",
    pill: "R$5k renda mensal passiva",
    image: "/projects/tecnoplay.png",
    url: "https://tecnoplay.app.br/",
  },
  {
    name: "Palazzo Giardino",
    description: "Imobiliário · Landing page de alto padrão · Captação de leads qualificados",
    pill: "Imóveis premium",
    url: "#",
  },
  {
    name: "Paesaggio",
    description: "Paisagismo · Site institucional · Posicionamento e portfólio visual",
    url: "#",
  },
  {
    name: "Tarvos",
    description: "Consultoria · Site corporativo · Presença digital estratégica",
    pill: "Corporativo",
    url: "https://tarvos.com.br/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel={project.url !== "#" ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: "var(--s1)",
          border: `1px solid ${hovered ? "var(--border-h)" : "var(--border)"}`,
          borderRadius: "var(--radius)",
          overflow: "hidden",
          transition: "all 0.25s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          height: "100%",
        }}
      >
        {project.image && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(160px, 22vw, 220px)",
              overflow: "hidden",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                transition: "transform 0.4s ease",
                transform: hovered ? "scale(1.03)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--s1) 0%, transparent 40%)",
                pointerEvents: "none",
              }}
            />
          </div>
        )}
        {!project.image && (
          <div
            style={{
              height: 80,
              background: "linear-gradient(135deg, var(--s2) 0%, var(--s3) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 32,
                color: "var(--orange)",
                opacity: 0.3,
              }}
            >
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        <div style={{ padding: "16px 24px 22px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            {project.logo && (
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image src={project.logo} alt={project.name} fill style={{ objectFit: "contain" }} />
              </div>
            )}
            {!project.logo && (
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "var(--s3)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "var(--font-bebas)",
                  fontSize: 14,
                  color: "var(--orange)",
                }}
              >
                {project.name.charAt(0)}
              </div>
            )}
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text)",
              }}
            >
              {project.name}
            </span>
            <span
              style={{
                marginLeft: "auto",
                color: "var(--muted2)",
                fontSize: 16,
                transition: "all 0.2s ease",
                transform: hovered ? "translate(3px, -3px)" : "none",
                ...(hovered ? { color: "var(--muted)" } : {}),
              }}
            >
              ↗
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted)",
              marginBottom: project.pill ? 10 : 0,
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </div>
          {project.pill && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                background: "var(--orange-s)",
                border: "1px solid var(--orange-b)",
                borderRadius: 100,
                padding: "3px 9px",
                color: "var(--orange)",
              }}
            >
              {project.pill}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function ProjetosTab() {
  return (
    <section id="cases" className="section-full" style={{ scrollMarginTop: 80 }}>
      <div className="section-wrapper">
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 8vw, 80px)",
              letterSpacing: "0.06em",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            CASES COM{" "}
            <span style={{ color: "var(--orange)" }}>RESULTADO</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              marginBottom: "clamp(32px, 5vw, 56px)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {projects.length} projetos entregues
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.name} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
