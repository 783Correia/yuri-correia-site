"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/torno-metal.png", alt: "Torno Metal" },
  { src: "/logos/sales-emb.png", alt: "Sales EMB" },
  { src: "/logos/jaco-locadora.png", alt: "Jacó Locadora" },
  { src: "/logos/agilizza.png", alt: "Agilizza" },
  { src: "/logos/tecnoplay.png", alt: "TecnoPlay" },
];

function LogoGroup() {
  return (
    <>
      {logos.map((logo, i) => (
        <Image
          key={i}
          src={logo.src}
          alt={logo.alt}
          width={100}
          height={28}
          style={{
            height: 28,
            width: "auto",
            margin: "0 clamp(24px, 4vw, 48px)",
            opacity: 0.4,
            filter: "grayscale(1)",
            transition: "opacity 0.3s ease",
          }}
        />
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
        <LogoGroup />
        <LogoGroup />
        <LogoGroup />
      </div>
    </section>
  );
}
