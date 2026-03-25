"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LinksPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 8,
          }}
        >
          YC
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 18,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Yuri Correia
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: 14,
            color: "#666666",
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          Escolha por onde começar.
        </motion.p>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/norte-digital"
              style={{
                display: "block",
                background: "#ffffff",
                color: "#000000",
                borderRadius: 16,
                padding: "20px 24px",
                textAlign: "left",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
                Norte Digital — R$497
              </div>
              <div style={{ fontSize: 13, color: "#666666", fontWeight: 300 }}>
                Diagnóstico da sua estrutura digital
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/#servicos"
              style={{
                display: "block",
                background: "transparent",
                color: "#ffffff",
                borderRadius: 16,
                padding: "20px 24px",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#000000";
                const sub = e.currentTarget.querySelector(
                  "div:last-child"
                ) as HTMLElement;
                if (sub) sub.style.color = "#666666";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                const sub = e.currentTarget.querySelector(
                  "div:last-child"
                ) as HTMLElement;
                if (sub) sub.style.color = "#666666";
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
                Site ou Landing Page
              </div>
              <div style={{ fontSize: 13, color: "#666666", fontWeight: 300 }}>
                Estrutura digital que trabalha por você
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            marginTop: 48,
            fontSize: 13,
            color: "#444444",
            fontWeight: 300,
          }}
        >
          @ocorreiadm
        </motion.div>
      </div>
    </div>
  );
}
