"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectRowProps {
  logo: string;
  name: string;
  description?: string;
  tags?: string[];
  pill?: string;
  isLast?: boolean;
  href?: string;
}

export default function ProjectRow({
  logo,
  name,
  description,
  tags,
  pill,
  isLast,
  href = "#",
}: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 3vw, 16px)",
          padding: "14px clamp(14px, 4vw, 28px)",
          borderBottom: isLast ? "none" : "1px solid var(--border)",
          background: hovered ? "var(--s2)" : "transparent",
          transition: "background 0.2s ease",
        }}
      >
        <div
          style={{
            width: "clamp(36px, 8vw, 46px)",
            height: "clamp(36px, 8vw, 46px)",
            borderRadius: 12,
            background: "var(--s3)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={logo}
            alt={name}
            fill
            style={{ objectFit: "contain", padding: 6 }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "clamp(12px, 3vw, 14px)",
              fontWeight: 500,
              color: "var(--text)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </div>
          {description && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(8px, 2vw, 10px)",
                color: "var(--muted)",
                marginTop: 2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
              fontSize: "clamp(7px, 1.8vw, 9px)",
              background: "var(--orange-s)",
              border: "1px solid var(--orange-b)",
              borderRadius: 100,
              padding: "3px 8px",
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
