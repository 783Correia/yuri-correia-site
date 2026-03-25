"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface CaseProject {
  name: string;
  segmento: string;
  resultado: string;
  image: string;
}

const cases: CaseProject[] = [
  {
    name: "Sales Embalagens",
    segmento: "B2B · Embalagens",
    resultado: "De R$35k pra R$165k de faturamento mensal",
    image: "/projects/sales-emb.png",
  },
  {
    name: "Torno Metal Everton Lopes",
    segmento: "Agro · Indústria · B2B",
    resultado: "70 leads qualificados por mês a R$8,34 cada",
    image: "/projects/torno-metal.png",
  },
  {
    name: "Jacó Locadora",
    segmento: "Industrial · Plataformas elevatórias",
    resultado: "1º lugar no Google em menos de 24h",
    image: "/projects/jaco-locadora.png",
  },
  {
    name: "Dieison Corazza",
    segmento: "Imóveis · Alto padrão",
    resultado: "LP de captação de leads para imóveis premium",
    image: "/projects/palazzo-giardino.png",
  },
  {
    name: "Mateus Pelizzaro",
    segmento: "Saúde · Oftalmologia",
    resultado: "Site institucional + 3 LPs por indicação direta de cliente",
    image: "/projects/agilizza.png",
  },
];

function CaseCard({ project, index }: { project: CaseProject; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        <h3
          style={{
            fontSize: 18,
            fontWeight: 500,
            marginBottom: 6,
          }}
        >
          {project.name}
        </h3>
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
    </motion.div>
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
