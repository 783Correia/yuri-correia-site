"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3200);
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
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 400,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: 600,
            }}
          >
            Nenhuma estrutura aqui é fictícia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 400,
              color: "#666666",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: 600,
              marginTop: 4,
            }}
          >
            Todos faturam e lucram com elas.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
