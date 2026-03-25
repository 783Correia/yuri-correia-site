import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yuri Correia — Estrutura digital que gera resultado real";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: 48,
          }}
        >
          YC
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          A experiência do usuário define quem fecha com você.
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: "#666666",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: 700,
          }}
        >
          Há 5 anos construo estruturas digitais que geram resultado real pra empresas B2B.
        </div>
      </div>
    ),
    { ...size }
  );
}
