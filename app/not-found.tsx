// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "10rem",
          fontWeight: "bold",
          margin: "0",
          color: "#ff8c00", // Orange pour le 404
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        Page non trouvée
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Veuillez vérifier l&apos;URL ou retourner à la page d&apos;accueil.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.1rem",
        }}
      >
        Retour à la page d&apos;accueil
      </Link>
    </div>
  );
}
