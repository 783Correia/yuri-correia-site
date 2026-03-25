"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Sobre() {
  return (
    <section id="sobre" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Text */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <AnimatedSection>
              <h2
                style={{
                  fontSize: "clamp(36px, 6vw, 56px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}
              >
                Yuri Correia
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#666666",
                  marginBottom: 32,
                  fontWeight: 300,
                }}
              >
                Lagoa Vermelha, RS · 27 anos · 5 anos no digital
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: "#666666",
                  lineHeight: 1.8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <p>
                  Comecei em 2021 na prática — sem faculdade, sem atalho.
                  Estudei copy, tráfego e posicionamento enquanto a maioria
                  vendia curso de vender curso.
                </p>
                <p>
                  Servi o exército por 3 anos. Fui praça mais distinta do
                  período. Aprendi que resultado vem de disciplina, não de
                  talento.
                </p>
                <p>
                  Venho de família humilde e moro no interior. Isso não me
                  limita — me dá mais motivação pra alavancar o negócio dos meus
                  parceiros. Porque quando eles crescem, eu cresço junto.
                </p>
                <p>
                  Quando entendi que antes de qualquer técnica é melhor conhecer
                  o cliente de verdade — criei o Norte Digital. Pra
                  empreendedores reais. Cansados de promessa. Prontos pra
                  estrutura.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 500,
                  marginTop: 40,
                  letterSpacing: "-0.02em",
                }}
              >
                Nada dado. Tudo conquistado.
              </p>
            </AnimatedSection>
          </div>

          {/* Placeholder image */}
          <AnimatedSection delay={0.2} style={{ flex: "0 0 auto", width: "clamp(280px, 30vw, 400px)" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "#1a1a1a",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333333",
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              [ imagem ]
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
