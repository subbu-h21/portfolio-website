import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Subramanya Hegde — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #0d0a2e 50%, #0a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              fontSize: 20,
              color: "#7c3aed",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Subramanya Hegde
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 400,
            }}
          >
            Full-Stack Developer · MERN · Python · Events
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 16,
              color: "rgba(124,58,237,0.8)",
              letterSpacing: "0.1em",
            }}
          >
            Vellore, India
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
