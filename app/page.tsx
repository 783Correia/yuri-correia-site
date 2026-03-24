"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomeTab from "@/components/pages/HomeTab";
import ProjetosTab from "@/components/pages/ProjetosTab";
import ServicosTab from "@/components/pages/ServicosTab";
import SobreTab from "@/components/pages/SobreTab";
import FAQSection from "@/components/pages/FAQSection";
import LogosStrip from "@/components/ui/LogosStrip";
import CTAFinal from "@/components/pages/CTAFinal";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HomeTab />
      <LogosStrip />
      <ProjetosTab />
      <ServicosTab />
      <SobreTab />
      <FAQSection />
      <CTAFinal />

      <footer
        style={{
          width: "100%",
          padding: "32px 0",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="section-wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted2)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            © 2026 · Yuri Correia · CORRE.IA
          </span>
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: 18,
              letterSpacing: "0.12em",
              color: "var(--muted2)",
            }}
          >
            CORRE<span style={{ color: "var(--orange)" }}>.</span>IA
          </span>
        </div>
      </footer>
    </>
  );
}
