"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "Qual a diferença entre você e uma agência?",
    answer:
      "Agência tem atendente, designer, redator e dev. Você fala com todos e entende com nenhum. Comigo você fala direto com quem pensa e executa. Sem telefone sem fio.",
  },
  {
    question: "Por que começar pelo Norte Digital?",
    answer:
      "Porque a maioria contrata execução sem entender o problema real. O Norte Digital garante que a gente construa o que vai funcionar — não o que parece bonito.",
  },
  {
    question: "Atende qualquer segmento?",
    answer:
      "Especializado em B2B — agro, indústria, saúde, imóveis, consultoria. Se você vende pra empresa ou pra decisor de compra, provavelmente consigo te ajudar.",
  },
  {
    question: "Quanto tempo demora pra ficar pronto?",
    answer:
      "Landing page: 5 a 7 dias úteis. Site institucional: 10 a 15 dias. Tudo depende da velocidade do seu feedback — você é parte do processo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "50% na aprovação da proposta, 50% na entrega. Sem surpresa, sem escopo aberto.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 0",
          color: "#ffffff",
          fontSize: "clamp(16px, 2.5vw, 18px)",
          fontWeight: 400,
          textAlign: "left",
          gap: 16,
          transition: "color 0.2s",
        }}
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: 24,
            color: "#666666",
            flexShrink: 0,
            fontWeight: 300,
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                paddingBottom: 28,
                fontSize: 15,
                fontWeight: 300,
                color: "#666666",
                lineHeight: 1.7,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrapper" style={{ maxWidth: 800 }}>
        <AnimatedSection style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Perguntas diretas. Respostas diretas.
          </h2>
        </AnimatedSection>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
