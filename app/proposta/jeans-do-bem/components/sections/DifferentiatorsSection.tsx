"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";

const differentiators = [
  {
    number: "01",
    title: "Cada peça é única. O sistema sabe disso.",
    body: "O Jeans do Bem faz upcycling — cada peça é literalmente irrepetível. Quando um cliente adiciona ao carrinho, a peça fica reservada por 15 minutos. Se não finalizar a compra, volta pro catálogo automaticamente. Sem risco de vender a mesma peça duas vezes. Nenhum template de Shopify faz isso por padrão.",
  },
  {
    number: "02",
    title: "30% pro Instituto Levvo aparece na hora certa.",
    body: "Esse é o maior diferencial da marca — e vai sair do rodapé. No checkout, o cliente vê em tempo real: \"Com esse pedido, R$87 vão para o Instituto Levvo.\" Isso não é detalhe. É o motivo pelo qual alguém escolhe o Jeans do Bem em vez de qualquer outra marca de moda. A plataforma vai fazer esse valor aparecer onde ele fecha a venda.",
  },
  {
    number: "03",
    title: "Vendas recuperadas automaticamente.",
    body: "Alguém chegou até o checkout, escolheu a peça, e abandonou. Para uma peça de R$895, isso é dinheiro na mesa. A plataforma dispara automaticamente dois e-mails: um 1h depois e outro 24h depois — com foto do produto, nome e link direto de volta ao carrinho. Sem esforço manual. Incluso na Fase 1.",
  },
  {
    number: "04",
    title: "Cliente com dúvida antes de comprar vai ter resposta.",
    body: "Para peças únicas de alto valor, o cliente precisa de segurança antes de clicar em pagar. Botão flutuante de WhatsApp com mensagem pré-preenchida — produto, coleção, dúvida — direto pra vocês. Converte quem estava na dúvida.",
  },
  {
    number: "05",
    title: "Câmbio no controle de vocês, não do dev.",
    body: "O preço em dólar é configurável direto pelo admin. Se o câmbio mudar e vocês quiserem ajustar a margem, é um campo no painel — não uma chamada de suporte. Simples.",
  },
];

const DifferentiatorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Diferenciais
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4 text-balance">
            O que outros não entregam.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Qualquer dev faz uma loja. Poucos pensam no negócio por trás dela.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {differentiators.map((d, i) => (
            <DifferentiatorItem key={d.number} item={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DifferentiatorItemProps {
  item: (typeof differentiators)[number];
  index: number;
}

const DifferentiatorItem = ({ item, index }: DifferentiatorItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 flex gap-6 sm:gap-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="heading-display text-4xl font-bold shrink-0 leading-none mt-1"
        style={{ color: "hsl(215 58% 22% / 0.15)" }}
      >
        {item.number}
      </div>
      <div>
        <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.body}
        </p>
      </div>
    </div>
  );
};

export default DifferentiatorsSection;
