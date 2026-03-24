"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    name: "Sites que vendem",
    description:
      "Landing pages e sites B2B construídos pra converter. Design, copy e performance alinhados em torno de um único objetivo: resultado mensurável pro seu negócio.",
    tech: "Next.js · Tailwind · Lovable",
  },
  {
    number: "02",
    name: "Estratégia de posicionamento",
    description:
      "Antes de qualquer pixel, entendo seu mercado, seu cliente e seus concorrentes. Uso o framework April Dunford pra criar mensagem que diferencia de verdade.",
    tech: "April Dunford · Copy estratégica",
  },
  {
    number: "03",
    name: "IA aplicada sem enrolação",
    description:
      "Workflow acelerado por Claude Code, Lovable e Cursor. Entrego mais rápido, com mais precisão — e o cliente não paga a mais por isso. IA é ferramenta, não desculpa.",
    tech: "Claude Code · Cursor · Antigravity",
  },
];

function ServiceCard({
  number,
  name,
  description,
  tech,
}: {
  number: string;
  name: string;
  description: string;
  tech: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(24px, 4vw, 36px)",
        border: `1px solid ${hovered ? "var(--border-h)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        background: "var(--s1)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(48px, 8vw, 72px)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          color: hovered ? "var(--orange)" : "var(--muted2)",
          transition: "color 0.2s ease",
          marginBottom: 16,
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: "clamp(16px, 3vw, 20px)",
          fontWeight: 500,
          color: "var(--text)",
          marginBottom: 10,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: "clamp(13px, 2.5vw, 14px)",
          fontWeight: 300,
          color: "var(--muted)",
          lineHeight: 1.72,
          marginBottom: 16,
          flex: 1,
        }}
      >
        {description}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: "var(--muted2)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          paddingTop: 14,
          borderTop: "1px solid var(--border)",
        }}
      >
        {tech}
      </div>
    </div>
  );
}

export default function ServicosTab() {
  return (
    <section
      id="servicos"
      className="section-full section-alt"
      style={{ scrollMarginTop: 80 }}
    >
      <div className="section-wrapper">
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 8vw, 80px)",
              letterSpacing: "0.06em",
              lineHeight: 1,
              marginBottom: "clamp(32px, 5vw, 56px)",
            }}
          >
            O QUE EU <span style={{ color: "var(--orange)" }}>FAÇO</span>
          </h2>
        </div>

        <div className="services-row">
          {services.map((service, i) => (
            <div key={service.number} className={`reveal reveal-delay-${i + 1}`}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
