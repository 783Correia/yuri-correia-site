"use client";

import Card from "@/components/ui/Card";
import FactCard from "@/components/ui/FactCard";

export default function SobreTab() {
  return (
    <section id="sobre" style={{ scrollMarginTop: 80 }}>
      {/* About Card */}
      <div>
        <Card style={{ padding: "clamp(28px, 6vw, 44px) clamp(20px, 5vw, 40px)", position: "relative" }}>
          {/* Decorative 27 */}
          <div
            style={{
              position: "absolute",
              top: -5,
              right: 30,
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(80px, 16vw, 120px)",
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
              fontSize: "clamp(28px, 5vw, 48px)",
              letterSpacing: "0.04em",
              lineHeight: 1.05,
              marginBottom: "clamp(14px, 3vw, 22px)",
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

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "clamp(13px, 3vw, 14px)",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "var(--muted)",
              maxWidth: 540,
              position: "relative",
              zIndex: 1,
            }}
          >
            Comecei em 2021 aprendendo WordPress no YouTube. Hoje uso{" "}
            <strong style={{ color: "var(--text)" }}>
              IA, Next.js e Tailwind
            </strong>{" "}
            pra entregar em dias o que antes levava meses. Meu diferencial não é a ferramenta — é como{" "}
            <strong style={{ color: "var(--text)" }}>
              penso o problema antes de abrir o editor
            </strong>
            . Atendo empresas B2B no agronegócio e na indústria que precisam de presença digital séria.
          </p>
        </Card>
      </div>

      {/* Fact Grid */}
      <div style={{ marginTop: 12 }}>
        <div
          className="fact-grid"
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
    </section>
  );
}
