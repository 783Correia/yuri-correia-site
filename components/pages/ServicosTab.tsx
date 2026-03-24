"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";

function ServiceItem({
  number,
  name,
  description,
  tech,
  isLast,
}: {
  number: string;
  name: string;
  description: string;
  tech: string;
  isLast?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "clamp(12px, 3vw, 20px)",
        padding: "clamp(18px, 4vw, 28px)",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        background: hovered ? "var(--s2)" : "transparent",
        transition: "background 0.2s ease",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(32px, 7vw, 42px)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          color: hovered ? "var(--orange)" : "var(--muted2)",
          transition: "color 0.2s ease",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "clamp(14px, 3.5vw, 16px)",
            fontWeight: 500,
            color: "var(--text)",
            marginBottom: 6,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "clamp(12px, 2.8vw, 13px)",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.72,
            marginBottom: 6,
          }}
        >
          {description}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(8px, 2vw, 9px)",
            color: "var(--muted2)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginTop: 6,
          }}
        >
          {tech}
        </div>
      </div>
    </div>
  );
}

const packages = [
  {
    name: "Landing Page",
    price: "R$ 1.200",
    description: "Página única de conversão com copy estratégica, design responsivo e otimização para leads.",
    features: ["1 página de alta conversão", "Copy persuasiva", "Mobile-first", "Entrega em 5-7 dias"],
    highlight: false,
  },
  {
    name: "Site Institucional",
    price: "R$ 2.500",
    description: "Presença digital completa para empresas B2B. Múltiplas páginas, SEO e posicionamento.",
    features: ["Até 5 páginas", "SEO otimizado", "Posicionamento estratégico", "Entrega em 10-15 dias"],
    highlight: true,
  },
  {
    name: "E-commerce",
    price: "R$ 4.500",
    description: "Loja virtual completa com catálogo, carrinho e integração com meios de pagamento.",
    features: ["Catálogo de produtos", "Checkout integrado", "Painel administrativo", "Entrega em 20-30 dias"],
    highlight: false,
  },
];

function PackageCard({
  pkg,
}: {
  pkg: (typeof packages)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--s1)",
        border: `1px solid ${pkg.highlight ? "var(--orange-b)" : hovered ? "var(--border-h)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        padding: "clamp(24px, 5vw, 32px)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column" as const,
      }}
    >
      {pkg.highlight && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "var(--orange)",
          }}
        />
      )}
      {pkg.highlight && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8,
            background: "var(--orange-s)",
            border: "1px solid var(--orange-b)",
            borderRadius: 100,
            padding: "3px 8px",
            color: "var(--orange)",
            alignSelf: "flex-start",
            marginBottom: 12,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Mais popular
        </span>
      )}
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 20,
          letterSpacing: "0.08em",
          color: "var(--text)",
          marginBottom: 4,
        }}
      >
        {pkg.name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(36px, 8vw, 48px)",
          lineHeight: 1,
          color: "var(--text)",
          marginBottom: 12,
        }}
      >
        {pkg.price}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--muted)",
            marginLeft: 4,
          }}
        >
          a partir
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: "clamp(11px, 2.5vw, 12px)",
          fontWeight: 300,
          color: "var(--muted)",
          lineHeight: 1.65,
          marginBottom: 16,
        }}
      >
        {pkg.description}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {pkg.features.map((f) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(9px, 2vw, 10px)",
              color: "var(--muted)",
            }}
          >
            <span style={{ color: "var(--orange)", fontSize: 12 }}>✓</span>
            {f}
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/5554999003163"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "auto",
          background: pkg.highlight ? "var(--orange)" : "var(--s3)",
          color: pkg.highlight ? "#fff" : "var(--text)",
          borderRadius: 100,
          padding: "10px 20px",
          fontFamily: "var(--font-dm)",
          fontSize: 12,
          fontWeight: 500,
          textDecoration: "none",
          textAlign: "center" as const,
          border: "none",
          transition: "all 0.2s ease",
        }}
      >
        Quero esse
      </a>
    </div>
  );
}

export default function ServicosTab() {
  return (
    <section id="servicos" style={{ scrollMarginTop: 80 }}>
      {/* Services Card */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 4px",
            marginBottom: 8,
          }}
        >
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
            O que eu faço
          </span>
        </div>
        <Card>
          <ServiceItem
            number="01"
            name="Sites que vendem"
            description="Landing pages e sites B2B construídos pra converter. Design, copy e performance alinhados em torno de um único objetivo: resultado mensurável pro seu negócio."
            tech="Next.js · Tailwind · Lovable"
          />
          <ServiceItem
            number="02"
            name="Estratégia de posicionamento"
            description="Antes de qualquer pixel, entendo seu mercado, seu cliente e seus concorrentes. Uso o framework April Dunford pra criar mensagem que diferencia de verdade."
            tech="April Dunford · Copy estratégica"
          />
          <ServiceItem
            number="03"
            name="IA aplicada sem enrolação"
            description="Workflow acelerado por Claude Code, Lovable e Cursor. Entrego mais rápido, com mais precisão — e o cliente não paga a mais por isso. IA é ferramenta, não desculpa."
            tech="Claude Code · Cursor · Antigravity"
            isLast
          />
        </Card>
      </div>

      {/* Pricing Packages */}
      <div style={{ marginTop: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 4px",
            marginBottom: 8,
          }}
        >
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
            Pacotes
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--muted2)",
              marginLeft: "auto",
            }}
          >
            valores iniciais
          </span>
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div style={{ marginTop: 12 }}>
        <Card
          style={{
            padding: "clamp(32px, 7vw, 52px) clamp(20px, 5vw, 40px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(217,92,26,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(180px, 40vw, 340px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.025)",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            GO
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 6vw, 58px)",
              letterSpacing: "0.05em",
              lineHeight: 1.05,
              marginBottom: 16,
              position: "relative",
              zIndex: 1,
            }}
          >
            Pronto pra ter um site que{" "}
            <span style={{ color: "var(--orange)" }}>trabalha</span> por você?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "clamp(12px, 3vw, 14px)",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 380,
              margin: "0 auto 28px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Manda uma mensagem. Em menos de 24h você sabe se consigo te ajudar —
            e como.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5554999003163"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--orange)",
                color: "#fff",
                borderRadius: 100,
                padding: "11px 22px",
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="https://instagram.com/ocorreiadm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--muted)",
                borderRadius: 100,
                padding: "11px 22px",
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid var(--border)",
              }}
            >
              @ocorreiadm
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
