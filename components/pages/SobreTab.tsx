"use client";

import FactCard from "@/components/ui/FactCard";

export default function SobreTab() {
  return (
    <section id="sobre" className="section-full" style={{ scrollMarginTop: 80 }}>
      <div className="section-wrapper">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 8vw, 80px)",
              letterSpacing: "0.04em",
              lineHeight: 1,
              marginBottom: "clamp(16px, 3vw, 28px)",
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
              fontSize: "clamp(14px, 2.5vw, 17px)",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "var(--muted)",
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
        </div>

        <div className="fact-grid">
          <div className="reveal reveal-delay-1">
            <FactCard
              icon="🌾"
              title="Agro & Indústria B2B"
              description="Especializado em segmentos tradicionais que precisam de presença digital séria e que converte de verdade."
            />
          </div>
          <div className="reveal reveal-delay-2">
            <FactCard
              icon="🧠"
              title="Estratégia antes do código"
              description="April Dunford framework. Posicionamento real antes de qualquer pixel. Copy que diferencia — não só descreve."
            />
          </div>
          <div className="reveal reveal-delay-3">
            <FactCard
              icon="⚡"
              title="IA aplicada de verdade"
              description="Claude Code, Lovable, Cursor. Entrego mais rápido e com mais precisão. Você paga pelo resultado."
            />
          </div>
          <div className="reveal reveal-delay-4">
            <FactCard
              icon="🤝"
              title="Do briefing à entrega"
              description="Operação solo. Você fala comigo — não com um atendente que repassa pro dev. Direto ao ponto."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
