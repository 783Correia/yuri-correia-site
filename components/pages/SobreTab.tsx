"use client";

import Card from "@/components/ui/Card";
import FactCard from "@/components/ui/FactCard";

export default function SobreTab() {
  return (
    <>
      {/* About Card */}
      <div className="stagger-child">
        <Card style={{ padding: "44px 40px", position: "relative" }}>
          {/* Decorative 27 */}
          <div
            style={{
              position: "absolute",
              top: -5,
              right: 30,
              fontFamily: "var(--font-bebas)",
              fontSize: 120,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.04)",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            27
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(38px, 6vw, 64px)",
              letterSpacing: "0.04em",
              lineHeight: 1.05,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            Não fiz faculdade. Fiz{" "}
            <em
              style={{
                fontFamily: "var(--font-dm)",
                fontStyle: "italic",
                fontSize: "70%",
                fontWeight: 300,
                color: "var(--orange)",
              }}
            >
              resultado.
            </em>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 540,
              position: "relative",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.82,
                color: "var(--muted)",
              }}
            >
              Comecei em 2021 aprendendo WordPress no YouTube. Hoje uso{" "}
              <strong style={{ color: "var(--text)" }}>
                IA, Next.js e Tailwind
              </strong>{" "}
              pra entregar em dias o que antes levava meses — sem perder
              qualidade, sem cobrar a mais por isso.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.82,
                color: "var(--muted)",
              }}
            >
              Meu diferencial não é a ferramenta. É como{" "}
              <strong style={{ color: "var(--text)" }}>
                penso o problema antes de abrir o editor
              </strong>
              . A maioria dos devs entrega site bonito. Eu entrego{" "}
              <strong style={{ color: "var(--text)" }}>
                argumento visual que convence
              </strong>
              .
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.82,
                color: "var(--muted)",
              }}
            >
              Opero sob a marca{" "}
              Atendo empresas B2B no agronegócio e na indústria que precisam de
              presença digital séria — não de portfólio de agência.
            </p>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 32,
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
                border: "none",
                transition: "background 0.2s ease",
              }}
            >
              Falar comigo
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

      {/* Fact Grid */}
      <div className="stagger-child">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
          }}
        >
          <FactCard
            icon="🌾"
            title="Agro & Indústria B2B"
            description="Especializado em segmentos tradicionais que precisam de presença digital séria e que converte de verdade."
          />
          <FactCard
            icon="🧠"
            title="Estratégia antes do código"
            description="April Dunford framework. Posicionamento real antes de qualquer pixel. Copy que diferencia — não só descreve."
          />
          <FactCard
            icon="⚡"
            title="IA aplicada de verdade"
            description="Claude Code, Lovable, Cursor. Entrego mais rápido e com mais precisão. Você paga pelo resultado."
          />
          <FactCard
            icon="🤝"
            title="Do briefing à entrega"
            description="Operação solo. Você fala comigo — não com um atendente que repassa pro dev. Direto ao ponto."
          />
        </div>
      </div>
    </>
  );
}
