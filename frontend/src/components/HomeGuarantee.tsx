import { ShieldCheck, BadgeCheck, Award } from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const stats = [
  { value: "2012", label: "Founded" },
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "$6,000", label: "Max Refund Advance" },
];

const guarantees = [
  {
    icon: ShieldCheck,
    badge: "Refund Guarantee",
    title: "Biggest Possible Refund — Guaranteed",
    desc: "We make sure you get every dollar you deserve. Our Tax Pros dig deep into deductions and credits to maximize your refund every time.",
    points: ["Federal & State filing covered", "All income sources handled", "Deductions fully optimized"],
  },
  {
    icon: BadgeCheck,
    badge: "Price Transparency",
    title: "No Surprise Guarantee",
    desc: "Know the exact price of tax prep before we begin. Transparent, upfront pricing with no hidden fees — ever. What we quote is what you pay.",
    points: ["Upfront pricing always", "No hidden charges", "Free consultation available"],
  },
  {
    icon: Award,
    badge: "Expert Team",
    title: "Certified Tax Professionals",
    desc: "Our team brings over 10 years of experience handling individual, business, and complex tax situations with precision and care.",
    points: ["10+ years of experience", "IRS-authorized e-file provider", "Partnered with Republic Bank"],
  },
];

export default function HomeGuarantee() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(146,69,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146,69,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.20) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
          >
            Our Promise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Clients{" "}
            <span style={{ color: PRIMARY }}>Trust Us</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Over a decade of helping individuals and businesses get the most from their taxes.
          </p>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-12"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ background: "#0A0A0A" }}
            >
              <span className="text-3xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Guarantee cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.badge}
                className="rounded-2xl p-7 border flex flex-col gap-4 transition-all hover:border-[#9245FF]"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start mt-1"
                    style={{ background: "rgba(146,69,255,0.15)", color: PRIMARY }}
                  >
                    {g.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">{g.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>

                <ul className="space-y-2 mt-1">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-gray-400">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: PRIMARY }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
