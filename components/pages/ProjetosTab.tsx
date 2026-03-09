"use client";

import Card from "@/components/ui/Card";
import ProjectRow from "@/components/ui/ProjectRow";

export default function ProjetosTab() {
  return (
    <div className="stagger-child">
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "22px 28px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              Projetos selecionados
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted2)",
            }}
          >
            4 projetos
          </span>
        </div>
        <div style={{ marginTop: 12 }}>
          <ProjectRow
            icon="🌱"
            name="Torno Metal Everton Lopes"
            description="Agro · B2B · Landing page + Posicionamento para revendedores"
            pill="↗ Receita comprovada"
          />
          <ProjectRow
            icon="🏗️"
            name="Jacó Locadora"
            description="Industrial · Plataformas elevatórias · Anti-click fraud Cloudflare"
            pill="Anti-fraud"
          />
          <ProjectRow
            icon="⚙️"
            name="Agilizza Soluções"
            description="B2B · Site institucional · Identidade digital do zero"
          />
          <ProjectRow
            icon="🎮"
            name="TecnoPlay"
            description="E-commerce · Produto digital · Tecnologia"
            isLast
          />
        </div>
      </Card>
    </div>
  );
}
