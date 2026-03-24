"use client";

import Navbar from "@/components/Navbar";
import HomeTab from "@/components/pages/HomeTab";
import ProjetosTab from "@/components/pages/ProjetosTab";
import ServicosTab from "@/components/pages/ServicosTab";
import SobreTab from "@/components/pages/SobreTab";
import FAQSection from "@/components/pages/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: 720,
          width: "100%",
          marginTop: "clamp(68px, 14vw, 92px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeTab />
          <ProjetosTab />
          <ServicosTab />
          <SobreTab />
          <FAQSection />
        </div>
      </div>
      <footer
        style={{
          width: "100%",
          maxWidth: 720,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          padding: "0 4px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            color: "var(--muted2)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 · Yuri Correia · Lagoa Vermelha RS
        </span>
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 16,
            letterSpacing: "0.12em",
            color: "var(--muted2)",
          }}
        >
          CORRE<span style={{ color: "var(--orange)" }}>.</span>IA
        </span>
      </footer>
    </>
  );
}
