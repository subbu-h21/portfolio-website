export function GradientOrbs() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Orange orb — top right */}
      <div
        className="orb-1 absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(234,88,12,0.07) 0%, rgba(154,52,18,0.03) 45%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />

      {/* Amber orb — bottom left */}
      <div
        className="orb-2 absolute -bottom-64 -left-48 w-[650px] h-[650px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(217,119,6,0.06) 0%, rgba(120,53,15,0.03) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orange accent — upper center-left */}
      <div
        className="orb-3 absolute top-[30%] -left-24 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(249,115,22,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
