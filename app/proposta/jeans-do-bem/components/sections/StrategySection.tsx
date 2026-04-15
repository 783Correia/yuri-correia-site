"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";
import { CreditCard, Truck, Settings, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    label: "Pagamento",
    br: "PIX · Boleto · Cartão",
    us: "Cartão · Apple Pay · Google Pay",
  },
  {
    icon: Truck,
    label: "Frete",
    br: "Correios · Jadlog · Total Express",
    us: "USPS · UPS · FedEx",
  },
  {
    icon: Settings,
    label: "Admin",
    br: "Produtos · Banners · Pedidos",
    us: "Métricas · Clientes · Estoque",
  },
  {
    icon: ShoppingBag,
    label: "Área do Cliente",
    br: "Pedidos · Rastreio · Perfil",
    us: "Favoritos · Endereços · Avaliações",
  },
];

const StrategySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation(0.1);
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation(0.1);

  return (
    <section id="solucao" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            A Solução
          </p>
          <h2 className="heading-display mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Uma plataforma à altura
            <br />
            <span className="neon-text">da sofisticação da marca.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-6">
            Uma marca que faz upcycling de alto padrão, vende peças únicas e doa para
            instituto social não pode depender de DM no Instagram ou de um template
            genérico de marketplace.
          </p>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-16">
            O e-commerce do Jeans do Bem vai ter{" "}
            <span className="font-semibold text-foreground">experiência de compra premium</span>,{" "}
            <span className="font-semibold text-foreground">dois mercados reais</span> (BR + EUA)
            e um admin que você opera sozinho — sem precisar de
            developer para mudar um banner ou cadastrar uma coleção nova.
          </p>
        </div>

        <div
          ref={featRef}
          className={`fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-20 ${featVisible ? "visible" : ""}`}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="glass-card p-6 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                    {f.label}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-xs font-bold text-muted-foreground/60 uppercase tracking-wider w-4 shrink-0">BR</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.br}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-xs font-bold text-muted-foreground/60 uppercase tracking-wider w-4 shrink-0">US</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.us}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={caseRef}
          className={`fade-up ${caseVisible ? "visible" : ""}`}
        >
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Já fizemos antes
            </p>
            <h3 className="heading-display text-2xl font-bold text-foreground sm:text-3xl mb-4 text-balance">
              E-commerce industrial — em produção, gerando pedidos reais.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Desenvolvemos e entregamos uma plataforma de e-commerce completa para empresa do
              setor industrial: admin com gestão total de produtos, pedidos e clientes,
              integração com dois gateways de pagamento e frete automatizado com quatro
              transportadoras. Funciona em produção hoje.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "6", label: "módulos no admin" },
                { value: "2", label: "gateways de pagamento" },
                { value: "4", label: "transportadoras" },
                { value: "100%", label: "em produção" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="heading-display text-3xl font-bold neon-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
