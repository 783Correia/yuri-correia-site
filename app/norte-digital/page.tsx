"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const dores = [
  "Investe em tráfego todo mês e não sabe de onde vem o cliente que realmente compra",
  "Tem Instagram, site e WhatsApp — mas nada conversa com o outro",
  "Já trocou de agência mais de uma vez e o resultado continua o mesmo",
  "Seu vendedor responde pergunta mas não fecha venda",
];

const entregaveis = [
  "Call de até 2h com Yuri Correia",
  "Diagnóstico completo da estrutura digital atual",
  "Documento com plano de ação entregue em até 24h",
];

const passos = [
  "Você agenda pelo WhatsApp e preenche um briefing rápido sobre seu negócio",
  "A call acontece. 2 horas de diagnóstico real e visão estratégica",
  "Documento com plano de ação chega em até 24h no seu WhatsApp",
];

const provas = [
  { nome: "Sales Embalagens", resultado: "De R$35k pra R$165k de faturamento mensal" },
  { nome: "Torno Metal", resultado: "70 leads qualificados por mês a R$8,34 cada" },
  { nome: "Jacó Locadora", resultado: "1º lugar no Google em menos de 24h" },
];

const whatsappUrl = `https://wa.me/5554999003163?text=${encodeURIComponent("Olá Yuri, quero agendar meu Norte Digital")}`;

export default function NorteDigitalPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 72,
          textAlign: "center",
        }}
      >
        <div className="wrapper" style={{ maxWidth: 800, padding: "80px 24px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Você investe em digital todo mês.
            <br />
            Sabe exatamente o que tá funcionando?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: "clamp(16px, 2.5vw, 18px)",
              color: "#666666",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 600,
              margin: "0 auto 48px",
            }}
          >
            1 call. 2 horas. Diagnóstico completo. Plano de ação na sua mão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#ffffff",
                color: "#000000",
                borderRadius: 100,
                padding: "18px 40px",
                fontSize: 16,
                fontWeight: 500,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Agendar Norte Digital — R$497
            </a>
          </motion.div>
        </div>
      </section>

      {/* DOR */}
      <section style={{ background: "#111111", padding: "clamp(80px, 12vw, 140px) 0" }}>
        <div className="wrapper" style={{ maxWidth: 800 }}>
          <AnimatedSection>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                marginBottom: 48,
              }}
            >
              Se você se identificar com algum disso — o Norte Digital é pra
              você.
            </h2>
          </AnimatedSection>

          {dores.map((dor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: "24px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                fontSize: 16,
                fontWeight: 300,
                color: "#999999",
                lineHeight: 1.6,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "#333", fontSize: 14, flexShrink: 0, marginTop: 2 }}>—</span>
              {dor}
            </motion.div>
          ))}

          <AnimatedSection delay={0.5} style={{ marginTop: 48 }}>
            <p
              style={{
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              O problema nunca foi o investimento. Foi a estrutura.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* O QUE É */}
      <section className="section">
        <div className="wrapper" style={{ maxWidth: 800 }}>
          <AnimatedSection>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              2 horas que mudam como você enxerga seu negócio digital.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "#666666",
                lineHeight: 1.8,
                marginBottom: 48,
              }}
            >
              Você me mostra tudo — operação, o que já tentou, onde quer chegar.
              Eu olho de fora, sem filtro, sem papo de agência. Você sai com
              clareza de onde tá o buraco e o que construir primeiro.
            </p>
          </AnimatedSection>

          {entregaveis.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: "20px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                fontSize: 16,
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ color: "#333", fontSize: 14 }}>—</span>
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={{ background: "#111111", padding: "clamp(80px, 10vw, 120px) 0" }}>
        <div className="wrapper">
          <AnimatedSection style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Quem já tinha essa dor.
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
              marginBottom: 48,
            }}
          >
            {provas.map((prova, i) => (
              <ProvaCard key={i} {...prova} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p
              style={{
                fontSize: 16,
                color: "#666666",
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              Resultado não é promessa. É histórico.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section">
        <div className="wrapper" style={{ maxWidth: 800 }}>
          <AnimatedSection style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Três passos. Sem enrolação.
            </h2>
          </AnimatedSection>

          {passos.map((passo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                display: "flex",
                gap: "clamp(16px, 3vw, 32px)",
                padding: "32px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(36px, 6vw, 56px)",
                  fontWeight: 200,
                  color: "#333333",
                  lineHeight: 1,
                  minWidth: 56,
                  letterSpacing: "-0.03em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: "#999999",
                  lineHeight: 1.7,
                  paddingTop: 8,
                }}
              >
                {passo}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREÇO — inversão visual */}
      <section
        style={{
          background: "#ffffff",
          color: "#000000",
          padding: "clamp(80px, 12vw, 160px) 0",
          textAlign: "center",
        }}
      >
        <div className="wrapper" style={{ maxWidth: 600 }}>
          <AnimatedSection>
            <div
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}
            >
              Norte Digital
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              style={{
                fontSize: "clamp(56px, 10vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              R$497
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p
              style={{
                fontSize: 16,
                color: "#666666",
                fontWeight: 300,
                marginBottom: 40,
              }}
            >
              1 call · Até 2h · Plano de ação em 24h
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#000000",
                color: "#ffffff",
                borderRadius: 100,
                padding: "18px 40px",
                fontSize: 16,
                fontWeight: 500,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Quero agendar meu Norte Digital
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p
              style={{
                fontSize: 13,
                color: "#999999",
                fontWeight: 300,
                marginTop: 24,
                lineHeight: 1.5,
              }}
            >
              Após a call, se houver oportunidade de projeto — apresento
              proposta. Sem pressão.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section className="section">
        <div className="wrapper">
          <div
            style={{
              display: "flex",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
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
                    Criei o Norte Digital pra empreendedores reais. Cansados de
                    vídeo motivacional. Cansados de promessa de ganho absurdo.
                    Que querem sentar com alguém que olha pro negócio deles como
                    se fosse o próprio.
                  </p>
                  <p>
                    Venho de família humilde, moro no interior. Isso não me
                    limita — me dá mais motivação pra alavancar o negócio dos
                    meus parceiros. Porque quando eles crescem, eu cresço junto.
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
                    color: "#ffffff",
                  }}
                >
                  Nada dado. Tudo conquistado.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection
              delay={0.2}
              style={{ flex: "0 0 auto", width: "clamp(280px, 30vw, 400px)" }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/yuri.png"
                  alt="Yuri Correia"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 280px, 400px"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "#111111",
          padding: "clamp(80px, 12vw, 160px) 0",
          textAlign: "center",
        }}
      >
        <div className="wrapper" style={{ maxWidth: 600 }}>
          <AnimatedSection>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              Chega de achismo.
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
              2 horas. Um plano. Clareza total.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#ffffff",
                color: "#000000",
                borderRadius: 100,
                padding: "18px 40px",
                fontSize: 16,
                fontWeight: 500,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Agendar Norte Digital — R$497
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ProvaCard({
  nome,
  resultado,
  index,
}: {
  nome: string;
  resultado: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a1a",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        padding: 28,
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: "#666666",
          marginBottom: 12,
          fontWeight: 300,
        }}
      >
        {nome}
      </div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: 1.4,
        }}
      >
        {resultado}
      </div>
    </motion.div>
  );
}
