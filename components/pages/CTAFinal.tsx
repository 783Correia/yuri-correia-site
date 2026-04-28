"use client";

export default function CTAFinal() {
  return (
    <section
      className="section-full"
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Orange gradient bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(217,92,26,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative GO */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(200px, 40vw, 500px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.025)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        GO
      </div>

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 8vw, 80px)",
              letterSpacing: "0.04em",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Pronto pra ter um site que{" "}
            <span style={{ color: "var(--orange)" }}>trabalha</span> por você?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 36px",
            }}
          >
            Manda uma mensagem. Em menos de 24h você sabe se consigo te ajudar — e como.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5554996865236"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--orange)",
                color: "#fff",
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
        </div>
      </div>
    </section>
  );
}
