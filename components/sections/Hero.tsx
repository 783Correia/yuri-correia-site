"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cases = [
  { src: "/projects/torno-metal.png",       label: "Torno Metal Everton Lopes", tag: "E-commerce",   result: "70 leads/mês a R$8,34 cada",        stat1: { value: "70",       label: "leads qualificados/mês" },     stat2: { value: "R$8,34",  label: "custo por lead" } },
  { src: "/projects/sales-emb.png",          label: "Sales Embalagens",          tag: "B2B",           result: "De R$35k pra R$165k/mês",           stat1: { value: "R$165k",   label: "faturamento mensal gerado" },  stat2: { value: "4.7×",    label: "crescimento em receita" } },
  { src: "/projects/jaco-locadora.png",      label: "Jaco Locadora",             tag: "Industrial",    result: "1º lugar no Google em 24h",         stat1: { value: "1º lugar", label: "no Google em menos de 24h" }, stat2: { value: "R$5k+",   label: "investimento total" } },
  { src: "/projects/drmateuspellizzaro.png", label: "Dr. Mateus Pellizzaro",     tag: "Saúde",         result: "Site + LP LASIK + SEO local",       stat1: { value: "2",        label: "sites entregues no projeto" }, stat2: { value: "SEO",     label: "otimizado pra buscas locais" } },
  { src: "/projects/agilizza.png",           label: "Agilizza Soluções",         tag: "B2B · Serviços", result: "Site pra atrair clientes locais",  stat1: { value: "Local",    label: "autoridade regional digital" }, stat2: { value: "GMB",     label: "Google Maps estruturado" } },
  { src: "/projects/tecnoplay.png",          label: "TecnoPlay",                 tag: "E-commerce",    result: "R$16k na plataforma + R$5k/mês",   stat1: { value: "R$16k",    label: "faturados na plataforma" },    stat2: { value: "R$5k",    label: "renda mensal passiva" } },
  { src: "/projects/solcenter.png",          label: "Sol Center",                tag: "Energia Solar", result: "Site de autoridade + SEO local",    stat1: { value: "SEO",      label: "autoridade local estruturada" }, stat2: { value: "GEO",   label: "indexado por IAs" } },
  { src: "/projects/falimpeza.png",          label: "FA Limpeza",                tag: "Serviços",      result: "Presença digital do zero",          stat1: { value: "Do zero",  label: "presença digital criada" },    stat2: { value: "GMB",     label: "Google Maps otimizado" } },
  { src: "/projects/palazzo-giardino.png",   label: "Palazzo Giardino",          tag: "Imóveis",       result: "LP de imóvel premium exclusivo",    stat1: { value: "LP",       label: "lançamento exclusivo" },       stat2: { value: "Alto",    label: "padrão de conversão" } },
  { src: "/projects/viva-park.png",          label: "Viva Park Corporate",       tag: "Imóveis",       result: "Lançamento imobiliário Porto Belo", stat1: { value: "LP",       label: "lançamento imobiliário SC" },  stat2: { value: "UX",      label: "otimizado pra fechar" } },
  { src: "/projects/paesaggio.png",          label: "Paesaggio",                 tag: "Paisagismo",    result: "Site institucional + portfólio",    stat1: { value: "Site",     label: "institucional completo" },     stat2: { value: "Visual",  label: "portfólio de alto impacto" } },
];

const INTERVAL = 3200;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cases.length);
    }, INTERVAL);
    return () => clearInterval(t);
  }, []);

  const card = cases[current];

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
      {/* Vertical grid + falling beams */}
      <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", pointerEvents: "none", zIndex: 0 }}>
        {[0, 1, 2, 3, 4].map((col) => (
          <div key={col} style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.04)", position: "relative", overflow: "hidden" }}>
            {col === 1 && <div className="beam-1" style={{ position: "absolute", top: 0, left: "-1px", width: 1, height: "30vh", background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.7), transparent)" }} />}
            {col === 2 && <>
              <div className="beam-2" style={{ position: "absolute", top: 0, left: "-1px", width: 1, height: "45vh", background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.9), transparent)" }} />
              <div className="beam-3" style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "25vh", background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.6), transparent)" }} />
            </>}
            {col === 3 && <div className="beam-4" style={{ position: "absolute", top: 0, left: "-1px", width: 1, height: "35vh", background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.5), transparent)" }} />}
            {col === 4 && <div style={{ borderRight: "1px solid rgba(255,255,255,0.04)", position: "absolute", inset: 0 }} />}
          </div>
        ))}
      </div>

      {/* Ambient glow */}
      <div aria-hidden style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: "60vw", height: "40vh", background: "radial-gradient(ellipse, rgba(234,88,12,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div
        className="wrapper hero-grid"
        style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", padding: "80px 48px", width: "100%" }}
      >
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 100, padding: "6px 14px", marginBottom: 40, width: "fit-content", border: "1px solid rgba(234,88,12,0.3)", background: "rgba(234,88,12,0.06)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ea580c", animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: "rgba(234,88,12,0.9)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>Disponível para projetos</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            A experiência do usuário{" "}
            <span style={{ background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.45) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              define quem fecha com você.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: "#666666", maxWidth: 480, marginBottom: 40 }}>
            Há 5 anos construo estruturas digitais que geram resultado real pra empresas B2B. Tráfego, social e site têm seu papel — mas é a estrutura que decide quem compra.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/norte-digital" className="btn-orange">
              <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Quero um Norte Digital
                <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/#cases"
              style={{ background: "transparent", color: "#ffffff", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontWeight: 500, border: "1px solid rgba(255,255,255,0.12)", transition: "all 0.2s", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "transparent"; }}>
              Ver projetos
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.75 }}
            style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 32 }}>
            <div style={{ display: "flex", marginRight: 4 }}>
              {cases.slice(0, 3).map((c, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid #0a0a0a", overflow: "hidden", marginLeft: i > 0 ? -10 : 0, background: "#222" }}>
                  <Image src={c.src} alt="" width={28} height={28} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: "#555" }}>
              <span style={{ color: "#999" }}>{cases.length}+ projetos</span> entregues com resultado
            </span>
          </motion.div>
        </div>

        {/* Right: Auto-cycling vertical carousel */}
        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>

          {/* Card carousel */}
          <div style={{ position: "relative", width: "100%", maxWidth: 360, overflow: "hidden", borderRadius: 16 }}>
            {/* Glow */}
            <div aria-hidden style={{ position: "absolute", inset: -24, background: "radial-gradient(ellipse, rgba(234,88,12,0.18) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

            {/* Aspect ratio container */}
            <div style={{ position: "relative", width: "100%", paddingBottom: "62.5%", overflow: "hidden", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={current}
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    priority
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

                  {/* Info */}
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ background: "#ea580c", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em", flexShrink: 0 }}>
                        {card.tag}
                      </span>
                      <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{card.label}</span>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 300 }}>{card.result}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Dynamic stats — mudam com o case */}
          <div style={{ width: "100%", maxWidth: 360, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
            <AnimatePresence mode="wait">
              {[card.stat1, card.stat2].map((stat, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px 16px" }}
                >
                  <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", marginBottom: 4 }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: "#555", lineHeight: 1.4 }}>{stat.label}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 24px !important;
          }
          .hero-grid > div:last-child { align-items: center !important; }
        }
      `}</style>
    </section>
  );
}
