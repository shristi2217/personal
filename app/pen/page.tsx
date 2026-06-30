import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        background: "#0B0B14",
        color: "#F4F1EA",
        fontFamily: "Inter, system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontFamily: "Caveat, cursive", fontSize: "3rem", margin: 0 }}>
        Your name here
      </h1>
      <p style={{ opacity: 0.7, maxWidth: 420 }}>
        Welcome to the portfolio. Psst — there&apos;s a secret drawing toy hidden
        in here somewhere.
      </p>
      <Link
        href="/air-draw"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#F4F1EA",
          textDecoration: "none",
        }}
      >
        ✨ Try the secret thing
      </Link>
    </main>
  );
}
