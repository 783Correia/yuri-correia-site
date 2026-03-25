"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface ServiceCard {
  title: string;
  subtitle: string;
  features: string[];
  buttonLabel: string;
  whatsappMsg: string;
  featured?: boolean;
}

const cards: ServiceCard[] = [
  {
    title: "Norte Digital",
    subtitle: "O diagnóstico que vem antes de qualquer investimento.",
    features: [
      "1 call até 2h",
      "Diagnóstico completo",
      "Plano de ação em 24h",
    ],
    buttonLabel: "Agendar agora",
    whatsappMsg: "Olá Yuri, quero agendar meu Norte Digital",
  },
  {
    title: "Site ou Landing Page",
    subtitle: "Estrutura digital B2B construída pra converter.",
    features: ["Posicionamento", "Design e copy", "Performance e SEO"],
    buttonLabel: "Quero um orçamento",
    whatsappMsg: "Olá Yuri, quero um orçamento de site/LP",
    featured: true,
  },
  {
    title: "Projeto Completo",
    subtitle: "Site + LPs + estratégia. Do zero ao ar.",
    features: [
      "Diagnóstico inicial",
      "Execução completa",
      "Entrega com resultado",
    ],
    buttonLabel: "Vamos conversar",
    whatsappMsg: "Olá Yuri, quero conversar sobre um projeto completo",
  },
];

function ServiceCardComponent({
  card,
  index,
}: {
  card: ServiceCard;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111111",
        border: card.featured
          ? "1px solid rgba(255,255,255,0.3)"
          : `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        padding: "40px 32px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <h3
        style={{
          fontSize: 22,
          fontWeight: 500,
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#666666",
          fontWeight: 300,
          lineHeight: 1.5,
          marginBottom: 32,
        }}
      >
        {card.subtitle}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginBottom: 32,
          flex: 1,
        }}
      >
        {card.features.map((feature) => (
          <div
            key={feature}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              color: "#999999",
              fontWeight: 300,
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 14 }}>·</span>
            {feature}
          </div>
        ))}
      </div>

      <a
        href={`https://wa.me/5554999003163?text=${encodeURIComponent(card.whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          background: card.featured ? "#ffffff" : "transparent",
          color: card.featured ? "#000000" : "#ffffff",
          borderRadius: 100,
          padding: "14px 24px",
          fontSize: 15,
          fontWeight: 500,
          border: card.featured ? "none" : "1px solid #ffffff",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!card.featured) {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = "#000000";
          } else {
            e.currentTarget.style.transform = "scale(1.02)";
          }
        }}
        onMouseLeave={(e) => {
          if (!card.featured) {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ffffff";
          } else {
            e.currentTarget.style.transform = "scale(1)";
          }
        }}
      >
        {card.buttonLabel}
      </a>
    </motion.div>
  );
}

export default function ServicosPrecos() {
  return (
    <section id="servicos" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrapper">
        <AnimatedSection style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Por onde você quer começar?
          </h2>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {cards.map((card, i) => (
            <ServiceCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
