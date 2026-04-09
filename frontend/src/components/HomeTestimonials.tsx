const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

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
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={PRIMARY}>
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
    <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
            >
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
              What Our Clients{" "}
              <span style={{ color: PRIMARY }}>Are Saying</span>
            </h2>
          </div>
          {/* Rating summary */}
          <div
            className="flex items-center gap-4 shrink-0 border border-gray-200 rounded-2xl px-5 py-3.5 bg-white"
          >
            <div>
              <div className="text-3xl font-bold text-[#0A0A0A]">4.9</div>
              <div className="text-xs text-gray-400 mt-0.5">out of 5</div>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div>
              <Stars />
              <div className="text-xs text-gray-400 mt-1.5">500+ happy clients</div>
            </div>
          </div>
        </div>

        {/* Layout: featured left + 2 right */}
        <div className="grid lg:grid-cols-5 gap-5">

          {/* Featured — larger */}
          <div
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#9245FF]/30 transition-all"
          >
            {/* Quote mark */}
            <div>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-5">
                <path d="M0 32V20C0 13.3 2.7 7.7 8 3L11 6C8.3 8.3 6.7 11.3 6 15H12V32H0ZM22 32V20C22 13.3 24.7 7.7 30 3L33 6C30.3 8.3 28.7 11.3 28 15H34V32H22Z" fill={PRIMARY} opacity="0.15"/>
              </svg>
              <Stars />
              <p className="text-gray-700 text-base leading-relaxed mt-4 mb-6">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-gray-50">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: PRIMARY }}
                >
                  {featured.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0A0A0A]">{featured.name}</div>
                  <div className="text-xs text-gray-400">{featured.title}</div>
                </div>
              </div>
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
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
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md hover:border-[#9245FF]/30 transition-all flex-1"
              >
                <Stars />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: PRIMARY }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A0A0A]">{t.name}</div>
                      <div className="text-[11px] text-gray-400">{t.title}</div>
                    </div>
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
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
