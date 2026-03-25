"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Manifesto() {
  return (
    <section
      style={{
        background: "#111111",
        padding: "clamp(80px, 12vw, 160px) 0",
      }}
    >
      <div className="wrapper" style={{ maxWidth: 800, textAlign: "center" }}>
        <AnimatedSection>
          <p
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              marginBottom: 40,
            }}
          >
            Tráfego, comercial, social media — todos têm seu papel. Mas antes de
            qualquer técnica, o que define resultado é conhecer o cliente de
            verdade.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#666666",
              marginBottom: 48,
            }}
          >
            Fábrica não vende peça por reels. Clínica não fecha paciente por
            story. A venda acontece no WhatsApp, na visita, no telefone. O
            digital é o caminho que leva até esse momento — e quando esse caminho
            tá quebrado, não adianta investir mais. Adianta consertar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            É isso que eu faço.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
