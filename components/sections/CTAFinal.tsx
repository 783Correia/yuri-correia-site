"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      style={{
        background: "#111111",
        padding: "clamp(80px, 12vw, 160px) 0",
        scrollMarginTop: 80,
      }}
    >
      <div className="wrapper" style={{ textAlign: "center", maxWidth: 700 }}>
        <AnimatedSection>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Chega de investir no digital sem saber onde vai o dinheiro.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p
            style={{
              fontSize: 16,
              color: "#666666",
              fontWeight: 300,
              marginBottom: 48,
            }}
          >
            Uma conversa resolve isso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`https://wa.me/5554996865236?text=${encodeURIComponent("Olá Yuri, quero agendar meu Norte Digital")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#000000",
                borderRadius: 100,
                padding: "16px 32px",
                fontSize: 15,
                fontWeight: 500,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Quero um Norte Digital
            </a>
            <a
              href={`https://wa.me/5554996865236?text=${encodeURIComponent("Olá Yuri, quero um orçamento")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#ffffff",
                borderRadius: 100,
                padding: "16px 32px",
                fontSize: 15,
                fontWeight: 500,
                border: "1px solid #ffffff",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Quero um site ou LP
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
