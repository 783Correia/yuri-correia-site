"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";

const phases = [
  {
    phase: "Fase 1",
    days: "45 — 60 dias",
    title: "E-commerce Completo",
    items: [
      "Loja completa: catálogo, página de produto, carrinho, checkout",
      "Pagamento BR (PIX, Boleto, Cartão) e EUA (Cartão, Apple Pay)",
      "Frete calculado automaticamente — Brasil e EUA",
      "Área do cliente: pedidos, rastreio, perfil, favoritos",
      "Admin completo: produtos, pedidos, clientes, banners, métricas",
      "Relatórios de receita separados por mercado (BR vs EUA)",
      "Site em português (BR) e inglês (EUA)",
      "SEO técnico, GA4, Meta Pixel e Google Merchant Center configurados",
      "Publicação em produção com domínio configurado",
    ],
  },
  {
    phase: "Fase 2",
    days: "+20 — 30 dias adicionais",
    title: "Personalizados Corporativos",
    items: [
      "Módulo de pedidos de produtos personalizados (camisas, bonés etc.)",
      "Upload de logo da empresa pelo cliente",
      "Seleção de cores, tamanhos e quantidade mínima",
      "Fila de aprovação de arte no admin",
      "Status visível para o cliente: aguardando logo → aprovando arte → em produção → enviado",
      "Gestão completa de pedidos B2B no admin",
    ],
  },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prazo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Cronograma
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Entrega previsível. Sem surpresas.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Duas fases com escopo claro. Você sabe exatamente o que recebe e quando.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-8" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <TimelineItem key={phase.phase} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  phase: (typeof phases)[number];
  index: number;
}

const TimelineItem = ({ phase, index }: TimelineItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`fade-up relative pl-16 sm:pl-20 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-6">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="glass-card p-6 sm:p-8">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            {phase.phase}
          </span>
          <span className="text-xs text-muted-foreground font-medium">{phase.days}</span>
        </div>
        <h3 className="heading-display text-xl font-bold text-foreground mb-4">{phase.title}</h3>
        <ul className="space-y-2">
          {phase.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineSection;
