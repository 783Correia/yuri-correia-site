"use client";

import { useState, CSSProperties } from "react";

interface CardProps {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Card({ children, style, className }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--s1)",
        border: `1px solid ${hovered ? "var(--border-h)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        transition: "border-color 0.2s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
