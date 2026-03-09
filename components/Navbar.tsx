"use client";

import { useState } from "react";

type Tab = "inicio" | "sobre" | "projetos" | "servicos";

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
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
    id: "sobre",
    label: "Sobre",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "projetos",
    label: "Projetos",
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
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null);

  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        background: "rgba(18,17,16,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid var(--border)",
        borderRadius: 100,
        padding: "7px 10px",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          style={{ position: "relative" }}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <button
            onClick={() => setActiveTab(tab.id)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color:
                activeTab === tab.id || hoveredTab === tab.id
                  ? "var(--text)"
                  : "var(--muted)",
              background:
                activeTab === tab.id || hoveredTab === tab.id
                  ? "var(--s3)"
                  : "transparent",
              transition: "all 0.2s ease",
            }}
          >
            {tab.icon}
          </button>
          {hoveredTab === tab.id && (
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
              {tab.label}
            </span>
          )}
        </div>
      ))}

      <div
        style={{
          width: 1,
          height: 18,
          background: "var(--border)",
          margin: "0 6px",
        }}
      />

      <a
        href="https://wa.me/5554999999999"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "var(--text)",
          color: "var(--bg)",
          borderRadius: 100,
          padding: "9px 18px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 500,
          marginLeft: 4,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        Contratar
      </a>
    </nav>
  );
}
