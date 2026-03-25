"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const headline = "A experiência do usuário define quem fecha com você.";
  const words = headline.split(" ");

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: 72,
      }}
    >
      <div className="wrapper" style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 48,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              animation: "pulse-dot 2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 12, color: "#666666", fontWeight: 400 }}>
            Disponível para projetos
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 0.3em",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{
            fontSize: "clamp(16px, 2.5vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "#666666",
            maxWidth: 640,
            margin: "0 auto 48px",
          }}
        >
          Há 5 anos construo estruturas digitais que geram resultado real pra
          empresas B2B. Tráfego, social media e site têm seu papel — mas é a
          estrutura que decide quem compra.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/norte-digital"
            style={{
              background: "#ffffff",
              color: "#000000",
              borderRadius: 100,
              padding: "16px 32px",
              fontSize: 15,
              fontWeight: 500,
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Quero um Norte Digital
          </Link>
          <Link
            href="/#servicos"
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
