"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const dores = [
  "Paga agência todo mês e não sabe exatamente o que está sendo feito",
  "Já tentou IA mas ficou só no ChatGPT básico e não viu resultado real",
  "Sente que os concorrentes estão avançando mais rápido e não sabe como",
  "Tem tarefas repetitivas que consomem horas do seu time — e poderiam ser automatizadas hoje",
];

const entregaveis = [
  "2h ao vivo, 100% personalizadas pro seu negócio",
  "Diagnóstico de onde IA pode entrar agora na sua operação",
  "Aplicação ao vivo com Manus e Claude — você vê funcionando em tempo real",
  "Saí com clareza do que implementar primeiro e como",
];

const passos = [
  "Você garante sua vaga e me conta em 5 minutos como é sua operação hoje",
  "A gente agenda as 2h — eu preparo baseado na sua realidade específica",
  "Você sai da call sabendo usar IA no seu negócio. Sem depender de ninguém.",
];

const provas = [
  { nome: "Sales Embalagens", resultado: "De R$35k pra R$165k de faturamento mensal" },
  { nome: "Torno Metal", resultado: "70 leads qualificados por mês a R$8,34 cada" },
  { nome: "Jacó Locadora", resultado: "1º lugar no Google em menos de 24h" },
];

const whatsappUrl = `https://wa.me/5554996865236?text=${encodeURIComponent("Olá Yuri, quero garantir minha vaga no IA na Prática")}`;

export default function NorteDigitalPage() {
  const [vagas] = useState(5);

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
        <div style={{ maxWidth: 800, padding: "80px 24px" }}>

          {/* Badge de urgência */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              padding: "8px 20px",
              fontSize: 12,
              fontWeight: 500,
              color: "#999999",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 6px #22c55e",
            }} />
            {vagas} vagas · Preço de lançamento R$997
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            2 horas pra você sair
            <br />
            na frente usando IA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: "clamp(16px, 2.5vw, 19px)",
              color: "#666666",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 560,
              margin: "0 auto 48px",
            }}
          >
            Treinamento ao vivo, personalizado pra sua empresa.
            Você sai sabendo usar Manus e Claude no seu negócio —
            sem agência, sem depender de ninguém.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
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
                padding: "18px 44px",
                fontSize: 16,
                fontWeight: 600,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Garantir minha vaga — R$997
            </a>
            <p style={{ fontSize: 13, color: "#444444", fontWeight: 300 }}>
              Sobe pra R$2.997 após as 5 vagas de lançamento
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOR */}
      <section style={{ background: "#111111", padding: "clamp(80px, 12vw, 140px) 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
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
              Você ainda está resolvendo isso manualmente?
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
            <p style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}>
              IA não é futuro. É agora. E quem aprender primeiro leva vantagem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* O QUE É */}
      <section style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 20,
            }}>
              2 horas fora do operacional.
              <br />
              Semanas de avanço na sua empresa.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p style={{
              fontSize: 16,
              fontWeight: 300,
              color: "#666666",
              lineHeight: 1.8,
              marginBottom: 48,
            }}>
              Antes de começar, você me conta como é sua operação hoje —
              o que consome mais tempo, onde está o gargalo, o que você
              já tentou. A partir disso eu monto o treinamento pra sua
              realidade. Nada genérico. Tudo aplicado.
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
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection style={{ marginBottom: 48 }}>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}>
              Resultado não é promessa aqui.
            </h2>
          </AnimatedSection>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}>
            {provas.map((prova, i) => (
              <ProvaCard key={i} {...prova} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p style={{ fontSize: 16, color: "#666666", fontWeight: 300, textAlign: "center" }}>
              5 anos de estrada. Desde o ChatGPT até automação, sites e estratégia com IA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection style={{ marginBottom: 48 }}>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}>
              Simples assim.
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
              <div style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 200,
                color: "#333333",
                lineHeight: 1,
                minWidth: 56,
                letterSpacing: "-0.03em",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p style={{
                fontSize: 16,
                fontWeight: 300,
                color: "#999999",
                lineHeight: 1.7,
                paddingTop: 8,
              }}>
                {passo}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREÇO */}
      <section style={{
        background: "#ffffff",
        color: "#000000",
        padding: "clamp(80px, 12vw, 160px) 0",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#f5f5f5",
              borderRadius: 100,
              padding: "8px 20px",
              fontSize: 12,
              fontWeight: 500,
              color: "#666",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22c55e", display: "inline-block",
                boxShadow: "0 0 6px #22c55e",
              }} />
              {vagas} vagas disponíveis
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: 8,
            }}>
              IA na Prática
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 16, marginBottom: 8 }}>
              <span style={{
                fontSize: "clamp(20px, 4vw, 28px)",
                fontWeight: 300,
                color: "#999",
                textDecoration: "line-through",
                letterSpacing: "-0.02em",
              }}>
                R$2.997
              </span>
              <span style={{
                fontSize: "clamp(56px, 10vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}>
                R$997
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p style={{ fontSize: 15, color: "#666666", fontWeight: 300, marginBottom: 40 }}>
              Treinamento ao vivo · 2h personalizadas · Aplicação real com Manus e Claude
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
                padding: "18px 44px",
                fontSize: 16,
                fontWeight: 600,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Garantir minha vaga agora
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p style={{
              fontSize: 13,
              color: "#999999",
              fontWeight: 300,
              marginTop: 20,
              lineHeight: 1.5,
            }}>
              Após as 5 vagas de lançamento, o valor sobe pra R$2.997.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "flex",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <AnimatedSection>
                <h2 style={{
                  fontSize: "clamp(36px, 6vw, 56px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}>
                  Yuri Correia
                </h2>
                <p style={{ fontSize: 14, color: "#666666", marginBottom: 32, fontWeight: 300 }}>
                  Lagoa Vermelha, RS · 27 anos · 5 anos no digital
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: "#666666",
                  lineHeight: 1.8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}>
                  <p>
                    Comecei a estudar IA em novembro de 2023 — quando ainda era
                    novidade pra maioria. Em 2024 já automatizava processos na
                    unha com n8n. Em 2025 criava sites inteiros com IA. Hoje
                    domino todas as áreas e aplico isso nos negócios dos meus parceiros.
                  </p>
                  <p>
                    O que você vai aprender comigo não é teoria de YouTube.
                    É o que funciona agora, testado em empresas reais,
                    aplicado na sua realidade específica.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 500,
                  marginTop: 40,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}>
                  Nada dado. Tudo conquistado.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection
              delay={0.2}
              style={{ flex: "0 0 auto", width: "clamp(280px, 30vw, 400px)" }}
            >
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
              }}>
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
      <section style={{
        background: "#111111",
        padding: "clamp(80px, 12vw, 160px) 0",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 12,
            }}>
              5 vagas. Preço de lançamento.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p style={{ fontSize: 16, color: "#666666", fontWeight: 300, marginBottom: 16 }}>
              Depois que fechar, o valor vai pra R$2.997.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p style={{ fontSize: 16, color: "#999999", fontWeight: 300, marginBottom: 48 }}>
              2 horas com você. Aplicado no seu negócio. Resultado real.
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
                padding: "18px 44px",
                fontSize: 16,
                fontWeight: 600,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Garantir minha vaga — R$997
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
      <div style={{ fontSize: 14, color: "#666666", marginBottom: 12, fontWeight: 300 }}>
        {nome}
      </div>
      <div style={{ fontSize: 18, fontWeight: 500, color: "#ffffff", lineHeight: 1.4 }}>
        {resultado}
      </div>
    </motion.div>
  );
}
