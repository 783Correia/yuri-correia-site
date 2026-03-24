"use client";

import { useState, useEffect } from "react";

type Section = "inicio" | "cases" | "servicos" | "sobre" | "faq";

const navLinks: { id: Section; label: string }[] = [
  { id: "cases", label: "Cases" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<Section>("inicio");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sectionIds: Section[] = ["inicio", "cases", "servicos", "sobre", "faq"];
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop - 120 : 0;
      });
      const scrollY = window.scrollY;
      let current: Section = "inicio";
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          current = sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: Section) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 12,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        borderRadius: 100,
        padding: "6px 10px 6px 18px",
        display: "flex",
        alignItems: "center",
        gap: 4,
        transition: "all 0.3s ease",
        maxWidth: "calc(100vw - 16px)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("inicio")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-bebas)",
          fontSize: 18,
          letterSpacing: "0.1em",
          color: "var(--text)",
          marginRight: 12,
          whiteSpace: "nowrap",
        }}
      >
        CORRE<span style={{ color: "var(--orange)" }}>.</span>IA
      </button>

      {/* Nav links */}
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          style={{
            background: activeSection === link.id ? "var(--s3)" : "transparent",
            border: "none",
            cursor: "pointer",
            borderRadius: 100,
            padding: "7px 14px",
            fontFamily: "var(--font-dm)",
            fontSize: 13,
            fontWeight: 400,
            color: activeSection === link.id ? "var(--text)" : "var(--muted)",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {link.label}
        </button>
      ))}

      <div
        style={{
          width: 1,
          height: 18,
          background: "var(--border)",
          margin: "0 6px",
          flexShrink: 0,
        }}
      />

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        style={{
          width: 34,
          height: 34,
          borderRadius: 100,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--muted)",
          background: "transparent",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}
      >
        {theme === "dark" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>

      {/* CTA */}
      <a
        href="https://wa.me/5554999003163"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        style={{
          background: "var(--text)",
          color: "var(--bg)",
          borderRadius: 100,
          padding: "8px 16px",
          fontFamily: "var(--font-dm)",
          fontSize: 13,
          fontWeight: 500,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        <span className="nav-cta-text">Contratar</span>
      </a>
    </nav>
  );
}
