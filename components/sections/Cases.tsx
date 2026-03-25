"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface CaseProject {
  name: string;
  segmento: string;
  resultado: string;
  image: string;
  url: string;
}

const cases: CaseProject[] = [
  {
    name: "Sales Embalagens",
    segmento: "B2B · Embalagens",
    resultado: "De R$35k pra R$165k de faturamento mensal",
    image: "/projects/sales-emb.png",
    url: "https://salesemb.com.br/",
  },
  {
    name: "Torno Metal Everton Lopes",
    segmento: "Agro · Indústria · B2B",
    resultado: "70 leads qualificados por mês a R$8,34 cada",
    image: "/projects/torno-metal.png",
    url: "https://tornometalevertonlopes.com.br/",
  },
  {
    name: "Jacó Locadora",
    segmento: "Industrial · Plataformas elevatórias",
    resultado: "1º lugar no Google em menos de 24h",
    image: "/projects/jaco-locadora.png",
    url: "https://www.jacolocadora.com.br/",
  },
  {
    name: "Dieison Corazza",
    segmento: "Imóveis · Alto padrão",
    resultado: "LP de vendas de imóvel premium exclusivo",
    image: "/projects/palazzo-giardino.png",
    url: "https://palazzo-giardino-private.vercel.app/",
  },
  {
    name: "Mateus Pelizzaro",
    segmento: "Saúde · Oftalmologia",
    resultado: "Site institucional + 3 LPs por indicação direta de cliente",
    image: "/projects/agilizza.png",
    url: "#",
  },
  {
    name: "Agilizza Soluções",
    segmento: "B2B · Serviços técnicos",
    resultado: "Site para atrair e converter clientes locais",
    image: "/projects/agilizza.png",
    url: "https://agilizzasolucoes.com.br/",
  },
  {
    name: "TecnoPlay",
    segmento: "E-commerce · Produto digital",
    resultado: "R$16k faturados na plataforma · R$5k renda mensal passiva",
    image: "/projects/tecnoplay.png",
    url: "https://tecnoplay.app.br/",
  },
  {
    name: "Paesaggio",
    segmento: "Paisagismo · Institucional",
    resultado: "Site institucional · Posicionamento e portfólio visual",
    image: "/projects/paesaggio.png",
    url: "https://paesaggio-residencial.vercel.app/",
  },
  {
    name: "Tarvos",
    segmento: "Consultoria · Corporativo",
    resultado: "Site corporativo · Presença digital estratégica",
    image: "/projects/tarvos.png",
    url: "https://tarvos-brand-identity.vercel.app/",
  },
];

function CaseCard({ project, index }: { project: CaseProject; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel={project.url !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: "#111111",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Project image */}
      <div
        style={{
          width: "100%",
          height: 200,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
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
            background: "linear-gradient(to top, #111111 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <h3 style={{ fontSize: 18, fontWeight: 500 }}>
            {project.name}
          </h3>
          <span
            style={{
              fontSize: 16,
              color: "#444",
              transition: "all 0.2s",
              transform: hovered ? "translate(3px, -3px)" : "none",
              ...(hovered ? { color: "#888" } : {}),
            }}
          >
            ↗
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#666666",
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {project.segmento}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.4,
          }}
        >
          {project.resultado}
        </div>
      </div>
    </motion.a>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrapper">
        <AnimatedSection>
          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Negócios reais. Resultados reais.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666666",
              fontWeight: 300,
              marginBottom: 56,
            }}
          >
            Não vendo promessa. Vendo histórico.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {cases.map((c, i) => (
            <CaseCard key={c.name} project={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
