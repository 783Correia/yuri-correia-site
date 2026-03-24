"use client";

import Image from "next/image";

export default function HomeTab() {
  return (
    <section
      id="inicio"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Radial gradient bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(217,92,26,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative YC */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(200px, 30vw, 500px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        YC
      </div>

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Avatar + Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "clamp(72px, 14vw, 96px)",
                height: "clamp(72px, 14vw, 96px)",
                borderRadius: "50%",
                background: "var(--s3)",
                border: "2px solid var(--border)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image src="/avatar.png" alt="Yuri Correia" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Green dot */}
            <div
              style={{
                position: "absolute",
                bottom: 4,
                right: 4,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--green)",
                border: "3px solid var(--bg)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: "50%",
                  background: "rgba(52,211,153,0.28)",
                  animation: "rip 2s ease-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.2)",
            color: "var(--green)",
            borderRadius: 100,
            padding: "5px 14px",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--green)",
              animation: "pls 2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          Disponível para projetos
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(48px, 10vw, 120px)",
            letterSpacing: "0.03em",
            lineHeight: 0.95,
            margin: "0 auto 20px",
            maxWidth: 900,
          }}
        >
          Seu próximo site vai{" "}
          <span style={{ color: "var(--orange)" }}>vender</span> por você
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "clamp(15px, 2.5vw, 19px)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--muted)",
            maxWidth: 560,
            margin: "0 auto 36px",
          }}
        >
          Empresários me contratam pra obter{" "}
          <strong style={{ color: "var(--text)" }}>resultados reais</strong>.
          Sites B2B que{" "}
          <em style={{ color: "var(--orange)" }}>vendem enquanto você dorme</em>.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/5554999003163"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              borderRadius: 100,
              padding: "14px 32px",
              fontFamily: "var(--font-dm)",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "none",
              transition: "transform 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="https://instagram.com/ocorreiadm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "var(--muted)",
              borderRadius: 100,
              padding: "14px 32px",
              fontFamily: "var(--font-dm)",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "all 0.2s ease",
            }}
          >
            @ocorreiadm
          </a>
        </div>

        {/* Stats inline */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 56px)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          <span>
            <strong style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "var(--text)", display: "block", lineHeight: 1, letterSpacing: "0.04em" }}>
              5<span style={{ color: "var(--orange)" }}>+</span>
            </strong>
            Anos ativo
          </span>
          <span
            style={{
              width: 1,
              background: "var(--border)",
              alignSelf: "stretch",
            }}
          />
          <span>
            <strong style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "var(--text)", display: "block", lineHeight: 1, letterSpacing: "0.04em" }}>
              20<span style={{ color: "var(--orange)" }}>+</span>
            </strong>
            Projetos
          </span>
          <span
            style={{
              width: 1,
              background: "var(--border)",
              alignSelf: "stretch",
            }}
          />
          <span>
            <strong style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "var(--text)", display: "block", lineHeight: 1, letterSpacing: "0.04em" }}>
              100<span style={{ color: "var(--orange)" }}>%</span>
            </strong>
            Comprometido
          </span>
        </div>
      </div>
    </section>
  );
}
