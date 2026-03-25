"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 0 32px",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              YC
            </span>

            <div
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                fontSize: 14,
                color: "#666666",
              }}
            >
              <Link href="/norte-digital" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                Norte Digital
              </Link>
              <Link href="/#cases" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                Cases
              </Link>
              <Link href="/#sobre" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                Sobre
              </Link>
              <a href="https://instagram.com/ocorreiadm" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                Instagram
              </a>
              <a href="https://wa.me/5554999003163" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                WhatsApp
              </a>
            </div>

            <span style={{ fontSize: 14, color: "#666666" }}>
              ocorreia.com.br
            </span>
          </div>

          {/* Bottom line */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 24,
              fontSize: 12,
              color: "#333333",
              textAlign: "center",
            }}
          >
            © 2026 Yuri Correia — Nada dado. Tudo conquistado.
          </div>
        </div>
      </div>
    </footer>
  );
}
