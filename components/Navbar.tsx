"use client";

import { useState, useEffect } from "react";

type Section = "inicio" | "cases" | "servicos" | "sobre";

const sections: { id: Section; label: string; icon: React.ReactNode }[] = [
  {
    id: "inicio",
    label: "Início",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: "cases",
    label: "Cases",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "servicos",
    label: "Serviços",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "sobre",
    label: "Sobre",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [hoveredSection, setHoveredSection] = useState<Section | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("inicio");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [themeHovered, setThemeHovered] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return el ? el.offsetTop - 120 : 0;
      });
      const scrollY = window.scrollY;
      let current: Section = "inicio";
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          current = sections[i].id;
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        background: "var(--nav-bg)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid var(--border)",
        borderRadius: 100,
        padding: "6px 8px",
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "background 0.3s ease, border-color 0.3s ease",
        maxWidth: "calc(100vw - 16px)",
      }}
    >
      {sections.map((section) => (
        <div
          key={section.id}
          style={{ position: "relative" }}
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <button
            onClick={() => scrollTo(section.id)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color:
                activeSection === section.id || hoveredSection === section.id
                  ? "var(--text)"
                  : "var(--muted)",
              background:
                activeSection === section.id || hoveredSection === section.id
                  ? "var(--s3)"
                  : "transparent",
              transition: "all 0.2s ease",
            }}
          >
            {section.icon}
          </button>
          {hoveredSection === section.id && (
            <span
              style={{
                position: "absolute",
                bottom: -34,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                background: "var(--s2)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "4px 8px",
                whiteSpace: "nowrap",
                color: "var(--text)",
                pointerEvents: "none",
              }}
            >
              {section.label}
            </span>
          )}
        </div>
      ))}

      <div
        style={{
          width: 1,
          height: 18,
          background: "var(--border)",
          margin: "0 4px",
        }}
      />

      {/* Theme toggle */}
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setThemeHovered(true)}
        onMouseLeave={() => setThemeHovered(false)}
      >
        <button
          onClick={toggleTheme}
          style={{
            width: 38,
            height: 38,
            borderRadius: 100,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: themeHovered ? "var(--text)" : "var(--muted)",
            background: themeHovered ? "var(--s3)" : "transparent",
            transition: "all 0.2s ease",
          }}
        >
          {theme === "dark" ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
        {themeHovered && (
          <span
            style={{
              position: "absolute",
              bottom: -34,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              background: "var(--s2)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "4px 8px",
              whiteSpace: "nowrap",
              color: "var(--text)",
              pointerEvents: "none",
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        )}
      </div>

      <div
        style={{
          width: 1,
          height: 18,
          background: "var(--border)",
          margin: "0 4px",
        }}
      />

      <a
        href="https://wa.me/5554999003163"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        style={{
          background: "var(--text)",
          color: "var(--bg)",
          borderRadius: 100,
          padding: "8px 14px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 500,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 5,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
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
