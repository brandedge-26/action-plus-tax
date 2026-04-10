export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const PRIMARY = "#9245FF";

  return (
    <div className="min-h-screen flex">
      {/* Left Branding Panel */}
      <div
        className="hidden lg:flex lg:w-[480px] flex-col justify-between p-12 relative overflow-hidden flex-shrink-0"
        style={{ background: "#0A0A0A" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(146,69,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.22) 0%, transparent 70%)" }}
        />
        {/* Accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #c084fc, ${PRIMARY}, transparent)` }}
        />

        <div className="relative z-10">
          <p className="text-xl font-bold tracking-tight mb-12">
            <span style={{ color: PRIMARY }}>Action</span>
            <span className="text-white">Plus</span>
            <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white mb-4">
            Manage your tax<br />
            <span style={{ color: PRIMARY }}>services online.</span>
          </h2>
          <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Track applications, upload documents, book appointments — all from one secure portal.
          </p>
        </div>

        <div className="relative z-10 space-y-3.5">
          {[
            "Secure document upload & management",
            "Real-time application status tracking",
            "Direct messaging with your tax expert",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(146,69,255,0.2)" }}
              >
                <svg className="w-3 h-3" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative" style={{ background: "#FAFAFA" }}>
        {/* Subtle grid on right too */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(146,69,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
