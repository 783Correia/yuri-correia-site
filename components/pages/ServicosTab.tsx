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
        gap: 20,
        padding: 28,
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        background: hovered ? "var(--s2)" : "transparent",
        transition: "background 0.2s ease",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 42,
          letterSpacing: "0.04em",
          lineHeight: 1,
          color: hovered ? "var(--orange)" : "var(--muted2)",
          transition: "color 0.2s ease",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: 16,
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
            fontSize: 13,
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
            fontSize: 9,
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

export default function ServicosTab() {
  return (
    <>
      {/* Services Card */}
      <div className="stagger-child">
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

      {/* CTA Card */}
      <div className="stagger-child">
        <Card
          style={{
            padding: "52px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Radial gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(217,92,26,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Decorative GO */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-bebas)",
              fontSize: 340,
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
              fontSize: "clamp(36px, 6vw, 58px)",
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
              fontSize: 14,
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 380,
              margin: "0 auto 32px",
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
            }}
          >
            <a
              href="https://wa.me/5554999999999"
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
    </>
  );
}
