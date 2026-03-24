"use client";

const logos = [
  { src: "/logos/torno-metal.png", alt: "Torno Metal" },
  { src: "/logos/sales-emb.png", alt: "Sales EMB" },
  { src: "/logos/jaco-locadora.png", alt: "Jaco Locadora" },
  { src: "/logos/agilizza.png", alt: "Agilizza" },
  { src: "/logos/tecnoplay.png", alt: "TecnoPlay" },
];

function LogoGroup({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {logos.map((logo, i) => (
        <div
          key={`${keyPrefix}-${i}`}
          style={{
            flexShrink: 0,
            margin: "0 clamp(24px, 4vw, 48px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            style={{
              height: 30,
              width: "auto",
              maxWidth: 120,
              opacity: 0.5,
              filter: "grayscale(1) invert(var(--logo-invert))",
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      ))}
    </>
  );
}

export default function LogosStrip() {
  return (
    <section
      style={{
        width: "100%",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "tick 20s linear infinite",
        }}
      >
        <LogoGroup keyPrefix="a" />
        <LogoGroup keyPrefix="b" />
        <LogoGroup keyPrefix="c" />
      </div>
    </section>
  );
}
