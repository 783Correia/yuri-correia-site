"use client";
import { useScrollAnimation } from "../../../_lib/useScrollAnimation";
import { Check } from "lucide-react";

const lojaItems = [
  "Catálogo com filtros por categoria, preço e coleção",
  "Página de produto com múltiplas fotos e zoom",
  "Carrinho persistente (salva entre sessões)",
  "Checkout com cálculo de frete em tempo real",
  "Pagamento BR: PIX, Boleto, Cartão de crédito",
  "Pagamento EUA: Cartão, Apple Pay, Google Pay",
  "Área 'Meus Pedidos' com rastreio em tempo real",
  "Login, cadastro e recuperação de senha",
  "Múltiplos endereços salvos",
  "Lista de favoritos",
  "Recuperação de carrinho abandonado (e-mail automático 1h e 24h depois)",
  "Avaliações e notas de produto",
  "Site em português (BR) e inglês (EUA)",
];

const adminItems = [
  "Cadastrar, editar e excluir produtos",
  "Upload de múltiplas imagens com reordenação",
  "Preço em BRL e USD separados por produto",
  "Disponibilidade por mercado (BR / EUA / ambos)",
  "Banners e destaques da home — sem dev",
  "Gerenciar pedidos e inserir código de rastreio",
  "E-mail automático ao cliente ao atualizar rastreio",
  "Histórico completo de compras por cliente",
  "Alertas de estoque baixo",
  "Métricas: receita BR vs EUA, ticket médio, mais vendidos",
  "Filtros de pedido por país, status e data",
  "Gestão de categorias e coleções",
];

const marketingItems = [
  "SEO técnico: meta tags e Open Graph em todas as páginas",
  "Structured data (Product, Organization, Breadcrumb) para Google",
  "Sitemap automático e robots.txt configurados",
  "Google Search Console verificado e monitorando indexação",
  "Google Analytics 4 com metas de conversão por mercado (BR e EUA)",
  "Meta Pixel (Facebook/Instagram) para rastreio de conversões de anúncios",
  "Google Merchant Center — feed de produtos automático para Google Shopping",
  "Open Graph completo para compartilhamentos no Instagram e WhatsApp",
];

const SKUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: colRef, isVisible: colVisible } = useScrollAnimation(0.1);
  const { ref: mktRef, isVisible: mktVisible } = useScrollAnimation(0.1);

  return (
    <section id="entregaveis" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Entregáveis
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            O que você recebe
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Tudo incluso na Fase 1. Sem surpresas, sem funcionalidade &ldquo;extra&rdquo;, sem custo adicional no meio do caminho.
          </p>
        </div>

        <div
          ref={colRef}
          className={`fade-up grid gap-6 lg:grid-cols-2 mb-6 ${colVisible ? "visible" : ""}`}
        >
          <DeliverableColumn title="Loja & Experiência do Cliente" items={lojaItems} delay={0} />
          <DeliverableColumn title="Admin Dashboard" items={adminItems} delay={150} />
        </div>

        <div ref={mktRef} className={`fade-up ${mktVisible ? "visible" : ""}`}>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <h3 className="heading-display text-xl font-bold text-foreground">
                Marketing & Visibilidade
              </h3>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                Google · Meta · SEO
              </span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {marketingItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DeliverableColumnProps {
  title: string;
  items: string[];
  delay: number;
}

const DeliverableColumn = ({ title, items, delay }: DeliverableColumnProps) => {
  return (
    <div className="glass-card p-8" style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="heading-display text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SKUsSection;
