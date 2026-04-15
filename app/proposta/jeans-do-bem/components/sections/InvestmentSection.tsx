"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    recommended: false,
    title: "Fase 1",
    subtitle: "E-commerce Completo",
    duration: "Entrega em 45–60 dias",
    price: "R$ 14.500",
    priceLabel: " à vista",
    note: null,
    features: [
      "Loja completa BR + EUA",
      "Pagamento: PIX, Boleto, Cartão (BR) e Cartão, Apple Pay (EUA)",
      "Frete automático BR e EUA",
      "Área do cliente completa",
      "Admin dashboard com 6 módulos",
      "Banners e destaques editáveis sem dev",
      "Métricas por mercado (BR vs EUA)",
      "Site em português e inglês",
      "Deploy em produção",
    ],
  },
  {
    recommended: true,
    title: "Pacote Completo",
    subtitle: "Fase 1 + Fase 2",
    duration: "Entrega total em ~90 dias",
    price: "R$ 17.500",
    priceLabel: " à vista",
    note: "Economize R$ 1.500",
    features: [
      "Tudo da Fase 1",
      "Módulo de personalizados corporativos",
      "Upload de logo da empresa",
      "Seleção de cores, tamanhos e quantidade",
      "Aprovação de arte no admin",
      "Status de produção em tempo real",
      "Gestão de pedidos B2B no admin",
    ],
  },
  {
    recommended: false,
    title: "Fase 2",
    subtitle: "Personalizados Corporativos",
    duration: "+20–30 dias após Fase 1",
    price: "R$ 4.500",
    priceLabel: " adicional",
    note: "Requer Fase 1",
    features: [
      "Bolsas, ecobags, necessaires e outros",
      "Upload de logo pelo cliente",
      "Cores, tamanhos, quantidade mínima",
      "Aprovação de arte no admin",
      "Status visível ao cliente",
      "Gestão de pedidos B2B",
    ],
  },
];

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Investimento
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Investimento claro. Retorno real.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Escolha o que faz sentido agora. A infraestrutura já está pronta para crescer.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: (typeof plans)[number];
  index: number;
}

const PlanCard = ({ plan, index }: PlanCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up relative flex flex-col ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`flex flex-1 flex-col rounded-xl border p-8 transition-all duration-300 ${
          plan.recommended
            ? "border-primary/30 bg-primary/[0.04] shadow-[0_0_30px_hsl(215_58%_22%/0.08)]"
            : "glass-card"
        }`}
      >
        {plan.recommended && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wider uppercase whitespace-nowrap rounded-full">
            Recomendado
          </span>
        )}

        <div className="mb-6">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">
            {plan.duration}
          </p>
          <h3 className="heading-display text-2xl font-bold text-foreground">{plan.title}</h3>
          <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
        </div>

        <div className="mb-6 border-y border-border py-6">
          <p className="heading-display text-3xl font-bold text-foreground">
            {plan.price}
            <span className="text-base font-normal text-muted-foreground">{plan.priceLabel}</span>
          </p>
          {plan.note && (
            <p className="mt-2 text-sm font-medium text-primary">{plan.note}</p>
          )}
        </div>

        <ul className="flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvestmentSection;
