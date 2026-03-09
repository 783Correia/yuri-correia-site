export default function Ticker() {
  const words = [
    "Estratégia",
    "Design",
    "Resultado",
    "B2B",
    "Agronegócio",
    "Next.js",
    "IA Aplicada",
    "Onetech",
  ];

  const renderGroup = () =>
    words.map((word, i) => (
      <span key={i} style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 15,
            letterSpacing: "0.18em",
            color: "var(--muted2)",
            padding: "0 20px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {word}
        </span>
        <span style={{ color: "var(--orange)", fontSize: 10 }}>✦</span>
      </span>
    ));

  return (
    <div
      style={{
        background: "var(--s1)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "16px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "tick 22s linear infinite",
        }}
      >
        {renderGroup()}
        {renderGroup()}
      </div>
    </div>
  );
}
