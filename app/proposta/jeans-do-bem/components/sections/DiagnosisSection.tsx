"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";
import { Globe2, ShoppingBag, Heart } from "lucide-react";

const cards = [
  {
    icon: Globe2,
    title: "O MERCADO AMERICANO ESTÁ ESPERANDO",
    subtitle: "Oportunidade real",
    description:
      "Sustainable fashion cresceu 35% ao ano nos EUA. O consumidor americano paga premium por marcas com história real, upcycling genuíno e impacto social comprovado. O Jeans do Bem é exatamente isso — e ainda não chegou lá.",
  },
  {
    icon: ShoppingBag,
    title: "SEU PRODUTO VALE R$1.035. O CANAL NÃO PODE SER INSTAGRAM.",
    subtitle: "Posicionamento em risco",
    description:
      "A Coleção Elevate vai de R$149 a R$895. Peças únicas de upcycling de alto padrão vendidas por DM ou marketplace genérico perdem posicionamento e margem. A marca merece uma vitrine digital à altura do produto.",
  },
  {
    icon: Heart,
    title: "30% DO LUCRO VAI PARA O INSTITUTO LEVVO.",
    subtitle: "Diferencial invisível",
    description:
      "Esse é o maior diferencial competitivo da marca — e está enterrado numa página de rodapé. O e-commerce precisa tornar o impacto social central na experiência: o cliente sente que está comprando moda e fazendo o bem ao mesmo tempo.",
  },
];

const DiagnosisSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projeto" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Diagnóstico
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Por que agora?
          </h2>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground mb-16 text-balance">
            Antes de mostrar o que vamos construir, precisa ficar claro o que está em jogo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <DiagnosisCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DiagnosisCardProps {
  card: (typeof cards)[number];
  index: number;
}

const DiagnosisCard = ({ card, index }: DiagnosisCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = card.icon;

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 transition-all duration-500 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-1 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
        {card.subtitle}
      </div>
      <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-tight">
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
};

export default DiagnosisSection;
