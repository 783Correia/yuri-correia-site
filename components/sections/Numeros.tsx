"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    target: 165,
    prefix: "R$",
    suffix: "k",
    label: "faturamento mensal gerado pra um cliente",
  },
  {
    target: 70,
    prefix: "",
    suffix: " leads",
    label: "por mês a R$8,34 cada pra indústria B2B",
  },
  {
    target: 5,
    prefix: "",
    suffix: " anos",
    label: "construindo resultado real no digital",
  },
];

export default function Numeros() {
  return (
    <section className="section">
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                flex: 1,
                minWidth: 200,
                textAlign: "center",
                padding: "32px 24px",
                borderRight: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 8vw, 64px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                <AnimatedCounter
                  target={metric.target}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#666666",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  maxWidth: 220,
                  margin: "0 auto",
                }}
              >
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          div[style*="borderRight"] {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </section>
  );
}
