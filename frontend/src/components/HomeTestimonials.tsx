const PRIMARY = "#0046BE";
const YELLOW  = "#FFC200";

const testimonials = [
  {
    quote:
      "Their Tax Pros connected with me one-on-one, answered every question I had, and went the extra mile. My refund was bigger than I expected. Couldn't be happier.",
    name: "Adnan Alam",
    title: "Individual Tax Client",
    initials: "AA",
    service: "Tax Preparation",
    featured: true,
  },
  {
    quote:
      "Flexible hours and a super easy process. They handled everything — I just dropped off my documents and got a notification when it was done.",
    name: "Adrian Matthews",
    title: "Business Tax Client",
    initials: "AM",
    service: "Drop Off & Go",
    featured: false,
  },
  {
    quote:
      "10 years of experience really shows. They found deductions I had no idea about and the No Surprise Guarantee gave me total peace of mind.",
    name: "Maria Johnson",
    title: "Self-Employed Client",
    initials: "MJ",
    service: "Self-Employed Filing",
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={YELLOW}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: PRIMARY }}>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: YELLOW, color: "#0A0A0A" }}
            >
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Our Clients{" "}
              <span style={{ color: YELLOW }}>Are Saying</span>
            </h2>
          </div>
          {/* Rating summary */}
          <div
            className="flex items-center gap-4 shrink-0 rounded-2xl px-5 py-3.5"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>out of 5</div>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div>
              <Stars />
              <div className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>500+ happy clients</div>
            </div>
          </div>
        </div>

        {/* Layout: featured left + 2 right */}
        <div className="grid lg:grid-cols-5 gap-5">

          {/* Featured — larger */}
          <div
            className="lg:col-span-3 rounded-2xl p-8 flex flex-col justify-between transition-all"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <div>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-5">
                <path d="M0 32V20C0 13.3 2.7 7.7 8 3L11 6C8.3 8.3 6.7 11.3 6 15H12V32H0ZM22 32V20C22 13.3 24.7 7.7 30 3L33 6C30.3 8.3 28.7 11.3 28 15H34V32H22Z"
                  fill={YELLOW} opacity="0.5"/>
              </svg>
              <Stars />
              <p className="text-base leading-relaxed mt-4 mb-6 text-white">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: YELLOW, color: "#0A0A0A" }}
                >
                  {featured.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{featured.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{featured.title}</div>
                </div>
              </div>
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: YELLOW, color: "#0A0A0A" }}
              >
                {featured.service}
              </span>
            </div>
          </div>

          {/* 2 smaller cards stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 flex flex-col gap-4 flex-1 transition-all"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <Stars />
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.82)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: YELLOW, color: "#0A0A0A" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{t.name}</div>
                      <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>{t.title}</div>
                    </div>
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: YELLOW, color: "#0A0A0A" }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
