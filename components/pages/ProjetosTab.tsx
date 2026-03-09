"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  logo: string;
  name: string;
  description: string;
  pill?: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    logo: "/logos/torno-metal.png",
    name: "Torno Metal Everton Lopes",
    description: "Agro · B2B · Landing page + Posicionamento para revendedores",
    pill: "↗ Receita comprovada",
    image: "/projects/torno-metal.png",
    url: "https://tornometalevertonlopes.com.br/",
  },
  {
    logo: "/logos/sales-emb.png",
    name: "Sales EMB",
    description: "B2B · Embalagens · De R$35k para R$165k faturados após implementação",
    pill: "↗ +370% receita",
    image: "/projects/sales-emb.png",
    url: "https://salesemb.com.br/",
  },
  {
    logo: "/logos/jaco-locadora.png",
    name: "Jacó Locadora",
    description: "Industrial · Plataformas elevatórias · Anti-click fraud Cloudflare",
    pill: "Anti-fraud",
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
    description: "E-commerce · Produto digital · Tecnologia",
    image: "/projects/tecnoplay.png",
    url: "https://tecnoplay.app.br/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
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
        }}
      >
        {/* Hero Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(160px, 30vw, 200px)",
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
              background:
                "linear-gradient(to top, var(--s1) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Info */}
        <div style={{ padding: "16px 24px 22px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
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
              <Image
                src={project.logo}
                alt={project.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
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
    <>
      <div className="stagger-child">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 4px",
            marginBottom: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--orange)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 18,
                letterSpacing: "0.12em",
              }}
            >
              Projetos selecionados
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted2)",
            }}
          >
            {projects.length} projetos
          </span>
        </div>
      </div>

      {projects.map((project) => (
        <div key={project.name} className="stagger-child">
          <ProjectCard project={project} />
        </div>
      ))}
    </>
  );
}
