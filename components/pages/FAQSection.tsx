"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";

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
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(18px, 4vw, 24px) clamp(18px, 4vw, 28px)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text)",
          fontFamily: "var(--font-dm)",
          fontSize: "clamp(13px, 3vw, 15px)",
          fontWeight: 500,
          textAlign: "left",
          gap: 16,
        }}
      >
        {question}
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 22,
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
            padding: "0 clamp(18px, 4vw, 28px) clamp(18px, 4vw, 24px)",
            fontFamily: "var(--font-dm)",
            fontSize: "clamp(12px, 2.8vw, 13px)",
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
    <section id="faq">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 4px",
          marginBottom: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--orange)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 18,
            letterSpacing: "0.12em",
          }}
        >
          Perguntas frequentes
        </span>
      </div>
      <Card>
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </Card>
    </section>
  );
}
