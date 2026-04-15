"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Consigo mexer no site sozinho, sem chamar dev?",
    a: "Sim, é exatamente pra isso que o admin existe. Trocar banner, lançar coleção nova, atualizar preço, ver pedidos — tudo pelo painel, sem precisar de ninguém.",
  },
  {
    q: "Por que não usar Shopify para o mercado americano?",
    a: "Shopify cobra taxa por venda (até 2%), tem limitações sérias para PIX e boleto no Brasil, e não permite personalizar a experiência da marca. Para o Jeans do Bem, que vende exclusividade e propósito, um template genérico enfraquece o posicionamento.",
  },
  {
    q: "Vocês já entregaram um projeto assim antes?",
    a: "Sim. E-commerce completo para empresa industrial — está em produção hoje, com pedidos reais acontecendo. O projeto existe e pode ser demonstrado numa conversa.",
  },
  {
    q: "A Fase 2 de personalizados é obrigatória?",
    a: "Não. A Fase 1 já é um e-commerce completo e independente. A Fase 2 é uma expansão natural para vender bolsas, ecobags, necessaires e outros itens personalizados para empresas — algo que se encaixa perfeitamente na Coleção Corporativa que a marca já tem.",
  },
];

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation(0.1);

  return (
    <footer className="relative overflow-hidden">
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="section-container">
          <div ref={faqRef} className={`fade-up ${faqVisible ? "visible" : ""}`}>
            <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
              Dúvidas Comuns
            </p>
            <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl text-foreground mb-4">
              Perguntas que você provavelmente já tem
            </h2>
            <p className="mx-auto max-w-xl text-center text-muted-foreground mb-12">
              Respondendo antes de perguntar — porque uma boa proposta não deixa dúvidas no ar.
            </p>
            <div className="mx-auto max-w-3xl grid gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10 pb-24 sm:pb-32">
        <div ref={ref} className={`fade-up text-center ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Próximo passo
          </p>
          <h2 className="heading-display mx-auto max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            O mercado americano de moda sustentável
            não vai esperar para sempre.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground mb-10 text-balance">
            Cada mês sem plataforma própria é uma coleção que o consumidor americano
            não encontra. O próximo passo é uma conversa de 20 minutos para alinhar
            os detalhes. Sem compromisso.
          </p>

          <a
            href="https://wa.me/5554999003163?text=Ol%C3%A1%2C+vi+a+proposta+de+e-commerce+para+o+Jeans+do+Bem+e+quero+conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(215_58%_22%/0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com Yuri no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-20 border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              © 2026 Yuri Correia · yuricorrea.ty@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
}

const FaqItem = ({ faq, index }: FaqItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-6 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="font-semibold text-foreground mb-2">{faq.q}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
    </div>
  );
};

export default FooterSection;
