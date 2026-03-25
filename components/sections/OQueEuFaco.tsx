"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    number: "01",
    title: "Norte Digital",
    description:
      "Diagnóstico completo da sua operação digital. Antes de qualquer execução, entendo onde tá o buraco — e o que construir primeiro. R$497 · 1 call · Até 2h · Plano de ação em 24h.",
  },
  {
    number: "02",
    title: "Sites e Landing Pages",
    description:
      "Estrutura B2B construída pra converter. Agro, indústria, saúde, imóveis, consultoria. Do posicionamento ao go-live.",
  },
  {
    number: "03",
    title: "Estratégia Digital",
    description:
      "Posicionamento, copy e estrutura antes de qualquer pixel. Porque mensagem errada no site certo não vende.",
  },
];

export default function OQueEuFaco() {
  return (
    <section className="section">
      <div className="wrapper">
        <AnimatedSection>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 64,
              maxWidth: 700,
            }}
          >
            Não vendo site. Vendo estrutura de decisão de compra.
          </h2>
        </AnimatedSection>

        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "clamp(20px, 4vw, 48px)",
                padding: "40px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 7vw, 64px)",
                  fontWeight: 200,
                  color: "#333333",
                  lineHeight: 1,
                  minWidth: 80,
                  letterSpacing: "-0.03em",
                }}
              >
                {service.number}
              </div>
              <div style={{ flex: 1, minWidth: 250 }}>
                <h3
                  style={{
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 500,
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "#666666",
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
