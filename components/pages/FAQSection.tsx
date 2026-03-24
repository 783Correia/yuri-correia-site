"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo demora pra ficar pronto?",
    answer:
      "Landing pages saem em 5-7 dias úteis. Sites institucionais em 10-15 dias. E-commerces em 20-30 dias. Tudo depende da complexidade e da velocidade do seu feedback.",
  },
  {
    question: "Feito com IA — é confiável?",
    answer:
      "IA é ferramenta, não atalho. Uso Claude Code, Cursor e Lovable pra acelerar o processo, mas cada linha de código é revisada. O resultado final tem a mesma (ou mais) qualidade de um projeto 100% manual — só entrega mais rápido.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Antes de codar, alinho tudo: posicionamento, estrutura e referências visuais. Você aprova cada etapa. Se mesmo assim não curtir, faço ajustes até ficar redondo — sem custo extra dentro do escopo combinado.",
  },
  {
    question: "Inclui hospedagem e domínio?",
    answer:
      "Hospedagem na Vercel (gratuita pra maioria dos sites) já está inclusa no setup. Domínio .com.br custa ~R$40/ano e eu configuro pra você. Sem mensalidade escondida.",
  },
  {
    question: "Como funciona o processo?",
    answer:
      "1) Briefing rápido por WhatsApp. 2) Proposta com escopo e prazo em 24h. 3) Aprovação → início. 4) Entregas parciais pra você acompanhar. 5) Ajustes finais e go-live. Simples assim.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(20px, 4vw, 28px) 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text)",
          fontFamily: "var(--font-dm)",
          fontSize: "clamp(14px, 3vw, 17px)",
          fontWeight: 500,
          textAlign: "left",
          gap: 16,
        }}
      >
        {question}
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 24,
            color: "var(--orange)",
            flexShrink: 0,
            transition: "transform 0.25s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            paddingBottom: "clamp(20px, 4vw, 28px)",
            fontFamily: "var(--font-dm)",
            fontSize: "clamp(13px, 2.5vw, 15px)",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.75,
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-full section-alt" style={{ scrollMarginTop: 80 }}>
      <div className="section-wrapper">
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 8vw, 80px)",
              letterSpacing: "0.06em",
              lineHeight: 1,
              marginBottom: "clamp(24px, 4vw, 48px)",
            }}
          >
            PERGUNTAS{" "}
            <span style={{ color: "var(--orange)" }}>FREQUENTES</span>
          </h2>
        </div>

        <div className="reveal" style={{ maxWidth: 800 }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
