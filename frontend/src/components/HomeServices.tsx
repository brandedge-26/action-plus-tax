import Link from "next/link";
import {
  FileText,
  ShieldAlert,
  DollarSign,
  Package,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

const PRIMARY       = "#01567E";
const PRIMARY_DARK  = "#014A6A";
const YELLOW        = "#FFF200";
const YELLOW_DARK   = "#E6D900";

const featured = {
  icon: FileText,
  title: "Hassle-Free Tax Help",
  desc: "Tax issues can be stressful — so our Tax Pros handle everything for you. From filing to IRS letters, we fight on your behalf from start to finish.",
  badge: "Most Popular",
  href: "/services/tax-preparation",
};

const services = [
  {
    icon: DollarSign,
    title: "Refund Advance",
    desc: "$500 up to $6,000 on a prepaid card — with no credit score impact.",
    tag: "Get Money Fast",
    href: "/services/refund-advance",
  },
  {
    icon: Package,
    title: "Drop Off & Go",
    desc: "Open late & weekends. No appointment necessary. We do the work.",
    tag: null,
    href: "/services/drop-off",
  },
  {
    icon: ShieldAlert,
    title: "IRS Letter & Audit Help",
    desc: "We resolve IRS issues and represent you with confidence.",
    tag: null,
    href: "/services/tax-resolution",
  },
  {
    icon: Users,
    title: "Personalized Help",
    desc: "10+ years of experience. Expert Tax Pros who put you first.",
    tag: null,
    href: "/services/tax-planning",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    desc: "Late weekdays & Saturdays — we work on your timeline.",
    tag: null,
    href: "/services",
  },
];

export default function HomeServices() {
  const FeaturedIcon = featured.icon;

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
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: YELLOW, color: "#0A0A0A" }}
          >
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tax Help, from{" "}
            <span style={{ color: YELLOW }}>Start to Finish</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Expert Tax Pros ready to file, amend, answer questions, and resolve IRS issues.
          </p>
        </div>

        {/* Featured card */}
        <Link
          href={featured.href}
          className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl p-7 border mb-5 transition-all duration-300 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)"; }}
        >
          {/* Yellow left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: YELLOW }} />

          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: YELLOW, color: "#0A0A0A" }}>
            <FeaturedIcon size={26} strokeWidth={1.6} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">{featured.title}</h3>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: YELLOW, color: "#0A0A0A" }}>
                {featured.badge}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.72)" }}>{featured.desc}</p>
          </div>

          <div
            className="shrink-0 flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            style={{ background: YELLOW, color: "#0A0A0A" }}
          >
            Apply Now <ArrowRight size={15} strokeWidth={2.5} />
          </div>
        </Link>

        {/* 5-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="group relative rounded-2xl p-5 border transition-all duration-300 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = YELLOW; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                {s.tag && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: YELLOW, color: "#0A0A0A" }}>
                    {s.tag}
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: YELLOW, color: "#0A0A0A" }}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
                </div>
                <span className="mt-auto flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: YELLOW }}>
                  Learn More <ArrowRight size={11} strokeWidth={2.5} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold pb-0.5 border-b-2 transition-colors"
            style={{ color: YELLOW, borderColor: YELLOW }}
          >
            View All Services
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
