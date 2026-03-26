export default function Convinience() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-6 py-10 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0C4A6E 0%, #075985 50%, #0284C7 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        .font-display { font-family: 'DM Serif Display', serif; }
        body { font-family: 'DM Sans', sans-serif; }
        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 36px 36px;
        }
      `}</style>

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      {/* Blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(56,189,248,0.12)", filter: "blur(70px)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(30,64,175,0.18)", filter: "blur(70px)", transform: "translate(-30%, 30%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
            <path
              d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z"
              fill="rgba(255,255,255,0.15)"
              stroke="#7DD3FC"
              strokeWidth="1.5"
            />
            <path d="M16 10v7" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="21" r="1.2" fill="#7DD3FC" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl text-white mb-5 leading-tight">
          We're still working <br />
          on <span style={{ color: "#7DD3FC", fontStyle: "italic" }}>this page</span>
        </h1>

        {/* Apology text */}
        <p className="text-base leading-relaxed mb-10 max-w-sm" style={{ color: "#BAE6FD" }}>
          Sorry for the inconvenience! This section is currently under construction.
          We'll have it ready for you very soon — thanks for your patience. 🙏
        </p>

        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)" }}
        >
          ← Go back to Home
        </a>
      </div>
    </div>
  );
}