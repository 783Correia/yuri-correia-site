"use client";

import { useState } from "react";

interface FactCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FactCard({ icon, title, description }: FactCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px 22px",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        background: "var(--s1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(to right, var(--orange), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />
      <div style={{ fontSize: 26, marginBottom: 12 }}>{icon}</div>
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 17,
          letterSpacing: "0.08em",
          color: "var(--text)",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: 12,
          fontWeight: 300,
          color: "var(--muted)",
          lineHeight: 1.65,
        }}
      >
        {description}
      </div>
    </div>
  );
}
