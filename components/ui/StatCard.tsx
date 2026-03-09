"use client";

import { useState } from "react";

interface StatCardProps {
  value: string;
  symbol?: string;
  label: string;
}

export default function StatCard({ value, symbol, label }: StatCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--s1)",
        border: `1px solid ${hovered ? "var(--border-h)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 40,
          height: 40,
          background:
            "radial-gradient(circle at top right, rgba(217,92,26,0.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 52,
          lineHeight: 1,
          color: "var(--text)",
        }}
      >
        {value}
        {symbol && (
          <span style={{ color: "var(--orange)", fontSize: 32 }}>{symbol}</span>
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          fontWeight: 300,
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}
