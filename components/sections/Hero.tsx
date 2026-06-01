"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stackProjects = [
  { src: "/projects/torno-metal.png", label: "Torno Metal", tag: "E-commerce" },
  { src: "/projects/jaco-locadora.png", label: "Jaco Locadora", tag: "B2B" },
  { src: "/projects/sales-emb.png", label: "Sales Embalagens", tag: "+R$130k/mês" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: 72,
        overflow: "hidden",
      }}
    >
      {/* Vertical grid lines + falling beams */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={col}
            style={{
              flex: 1,
              borderLeft: "1px solid rgba(255,255,255,0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {col === 1 && (
              <div
                className="beam-1"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-1px",
                  width: 1,
                  height: "30vh",
                  background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.7), transparent)",
                }}
              />
            )}
            {col === 2 && (
              <>
                <div
                  className="beam-2"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-1px",
                    width: 1,
                    height: "45vh",
                    background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.9), transparent)",
                  }}
                />
                <div
                  className="beam-3"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: 1,
                    height: "25vh",
                    background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.6), transparent)",
                  }}
                />
              </>
            )}
            {col === 3 && (
              <div
                className="beam-4"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-1px",
                  width: 1,
                  height: "35vh",
                  background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.5), transparent)",
                }}
              />
            )}
            {col === 4 && (
              <div style={{ borderRight: "1px solid rgba(255,255,255,0.04)", position: "absolute", inset: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* Orange ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "40vh",
          background: "radial-gradient(ellipse, rgba(234,88,12,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="wrapper"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          padding: "80px 48px",
          width: "100%",
        }}
      >
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 40,
              width: "fit-content",
              border: "1px solid rgba(234,88,12,0.3)",
              background: "rgba(234,88,12,0.06)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#ea580c",
                animation: "pulse-dot 2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 11, color: "rgba(234,88,12,0.9)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Disponível para projetos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            A experiência do usuário{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              define quem fecha com você.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#666666",
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            Há 5 anos construo estruturas digitais que geram resultado real pra
            empresas B2B. Tráfego, social e site têm seu papel — mas é a
            estrutura que decide quem compra.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            <Link href="/norte-digital" className="btn-orange">
              <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Quero um Norte Digital
                <svg
                  className="btn-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/#cases"
              style={{
                background: "transparent",
                color: "#ffffff",
                borderRadius: 100,
                padding: "14px 28px",
                fontSize: 14,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Ver projetos
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
            }}
          >
            <div style={{ display: "flex", marginRight: 4 }}>
              {["/projects/torno-metal.png", "/projects/jaco-locadora.png", "/projects/sales-emb.png"].map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "2px solid #0a0a0a",
                    overflow: "hidden",
                    marginLeft: i > 0 ? -10 : 0,
                    background: "#222",
                  }}
                >
                  <Image src={src} alt="" width={28} height={28} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: "#555" }}>
              <span style={{ color: "#999" }}>9+ projetos</span> entregues com resultado
            </span>
          </motion.div>
        </div>

        {/* Right: Card stack */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 16,
          }}
        >
          {/* Stacked cards */}
          <div
            className="card-stack"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 360,
              aspectRatio: "16/10",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: -24,
                background: "radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Card 3 — back */}
            <div
              className="card-stack-item"
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateY(20px) scale(0.88)",
                zIndex: 1,
                opacity: 0.35,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image src={stackProjects[2].src} alt={stackProjects[2].label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
            </div>

            {/* Card 2 — middle */}
            <div
              className="card-stack-item"
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateY(10px) scale(0.94)",
                zIndex: 2,
                opacity: 0.6,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image src={stackProjects[1].src} alt={stackProjects[1].label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
            </div>

            {/* Card 1 — front */}
            <div
              className="card-stack-item"
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateY(0) scale(1)",
                zIndex: 3,
                opacity: 1,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <Image src={stackProjects[0].src} alt={stackProjects[0].label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    background: "#ea580c",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {stackProjects[0].tag}
                </span>
                <span style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>{stackProjects[0].label}</span>
              </div>
            </div>
          </div>

          {/* Stats row below cards */}
          <div
            style={{
              width: "100%",
              maxWidth: 360,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            {[
              { value: "R$165k", label: "faturamento/mês gerado" },
              { value: "1º lugar", label: "no Google em 24h" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", marginBottom: 4 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 11, color: "#555", lineHeight: 1.4 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile styles */}
      <style jsx global>{`
        @media (max-width: 900px) {
          #inicio .wrapper {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 24px !important;
          }
          #inicio .wrapper > div:last-child {
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
