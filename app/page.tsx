"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeTab from "@/components/pages/HomeTab";
import SobreTab from "@/components/pages/SobreTab";
import ProjetosTab from "@/components/pages/ProjetosTab";
import ServicosTab from "@/components/pages/ServicosTab";

type Tab = "inicio" | "sobre" | "projetos" | "servicos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio");

  const renderTab = () => {
    switch (activeTab) {
      case "inicio":
        return <HomeTab setActiveTab={setActiveTab} />;
      case "sobre":
        return <SobreTab />;
      case "projetos":
        return <ProjetosTab />;
      case "servicos":
        return <ServicosTab />;
    }
  };

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div
        style={{ maxWidth: 720, width: "100%", marginTop: 92 }}
        key={activeTab}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {renderTab()}
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
          © 2026 · Onetech · Lagoa Vermelha RS
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
