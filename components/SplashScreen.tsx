"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 32px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(18px, 3.5vw, 28px)",
              fontWeight: 300,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Nenhuma estrutura aqui é fictícia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              fontSize: "clamp(18px, 3.5vw, 28px)",
              fontWeight: 300,
              color: "#666666",
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: 600,
              letterSpacing: "-0.01em",
              marginTop: 8,
            }}
          >
            Todos faturam e lucram com elas.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
