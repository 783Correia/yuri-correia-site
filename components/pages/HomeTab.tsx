"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import ProjectRow from "@/components/ui/ProjectRow";
import Ticker from "@/components/ui/Ticker";

type Tab = "inicio" | "sobre" | "projetos" | "servicos";

interface HomeTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function HomeTab({ setActiveTab }: HomeTabProps) {
  return (
    <>
      {/* Hero Card */}
      <div className="stagger-child">
        <Card
          style={{
            padding: "36px 36px 32px",
            minHeight: 320,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 3,
              height: "100%",
              background:
                "linear-gradient(to bottom, var(--orange) 0%, transparent 70%)",
              borderRadius: "4px 0 0 4px",
            }}
          />

          {/* Decorative YC */}
          <div
            style={{
              position: "absolute",
              top: -10,
              right: 20,
              fontFamily: "var(--font-bebas)",
              fontSize: 220,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.04)",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            YC
          </div>

          {/* Avatar + Info */}
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 76,
                height: 76,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  background: "var(--s3)",
                  border: "1.5px solid var(--border)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="Yuri Correia"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Green dot */}
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--green)",
                  border: "2.5px solid var(--s1)",
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

            {/* Text */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  marginBottom: 4,
                }}
              >
                Desenvolvedor de Projetos Digitais
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--muted2)",
                    display: "inline-block",
                  }}
                />
                Lagoa Vermelha RS
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 44,
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Yuri Correia
              </h1>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  color: "var(--green)",
                  borderRadius: 100,
                  padding: "4px 11px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  marginTop: 10,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--green)",
                    animation: "pls 2s ease-in-out infinite",
                  }}
                />
                Disponível para projetos
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.72,
              color: "var(--muted)",
              maxWidth: 520,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            Empresários me contratam pra obter{" "}
            <strong style={{ color: "var(--text)" }}>resultados reais</strong>.
            Construo sites B2B que{" "}
            <em style={{ color: "var(--orange)" }}>
              vendem enquanto você dorme
            </em>
            . Estratégia primeiro — código depois.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
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
                padding: "11px 22px",
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "none",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
                padding: "11px 22px",
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid var(--border)",
                transition: "all 0.2s ease",
              }}
            >
              @ocorreiadm
            </a>
          </div>

          {/* Social footer */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 24,
              display: "flex",
              gap: 10,
              position: "relative",
              zIndex: 1,
            }}
          >
            {[
              {
                href: "https://instagram.com/ocorreiadm",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                href: "https://wa.me/5554999003163",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                ),
              },
              {
                href: "#",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--s2)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Card>
      </div>

      {/* Stats Bento */}
      <div className="stagger-child">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          <StatCard value="5" symbol="+" label="Anos ativo" />
          <StatCard value="20" symbol="+" label="Projetos" />
          <StatCard value="∞" label="Comprometido" />
        </div>
      </div>

      {/* Ticker */}
      <div className="stagger-child">
        <Ticker />
      </div>

      {/* Projetos Preview */}
      <div className="stagger-child">
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 28px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--orange)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 18,
                  letterSpacing: "0.12em",
                }}
              >
                Projetos
              </span>
            </div>
            <button
              onClick={() => setActiveTab("projetos")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Ver todos →
            </button>
          </div>
          <div style={{ marginTop: 12 }}>
            <ProjectRow
              logo="/logos/torno-metal.png"
              name="Torno Metal Everton Lopes"
              pill="↗ Receita"
              href="https://tornometalevertonlopes.com.br/"
            />
            <ProjectRow
              logo="/logos/sales-emb.png"
              name="Sales EMB"
              pill="↗ +370% receita"
              href="https://salesemb.com.br/"
            />
            <ProjectRow
              logo="/logos/jaco-locadora.png"
              name="Jacó Locadora"
              pill="Anti-fraud"
              href="https://www.jacolocadora.com.br/"
            />
            <ProjectRow
              logo="/logos/agilizza.png"
              name="Agilizza Soluções"
              href="https://agilizzasolucoes.com.br/"
              isLast
            />
          </div>
        </Card>
      </div>
    </>
  );
}
