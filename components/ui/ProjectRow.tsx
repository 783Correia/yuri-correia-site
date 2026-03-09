"use client";

import { useState } from "react";

interface ProjectRowProps {
  icon: string;
  name: string;
  description?: string;
  tags?: string[];
  pill?: string;
  isLast?: boolean;
}

export default function ProjectRow({
  icon,
  name,
  description,
  tags,
  pill,
  isLast,
}: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "18px 28px",
          borderBottom: isLast ? "none" : "1px solid var(--border)",
          background: hovered ? "var(--s2)" : "transparent",
          transition: "background 0.2s ease",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            background: "var(--s3)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text)",
            }}
          >
            {name}
          </div>
          {description && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--muted)",
                marginTop: 2,
              }}
            >
              {description}
            </div>
          )}
          {tags && (
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 4,
                flexWrap: "wrap",
              }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {pill && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              background: "var(--orange-s)",
              border: "1px solid var(--orange-b)",
              borderRadius: 100,
              padding: "3px 9px",
              color: "var(--orange)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {pill}
          </span>
        )}
        <span
          style={{
            color: "var(--muted2)",
            fontSize: 16,
            transition: "all 0.2s ease",
            transform: hovered ? "translate(3px, -3px)" : "none",
            ...(hovered ? { color: "var(--muted)" } : {}),
            flexShrink: 0,
          }}
        >
          ↗
        </span>
      </div>
    </a>
  );
}
