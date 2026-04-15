import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CalendarCheck,
  BookOpen,
  ShieldAlert,
  BarChart3,
  ArrowRight,
  Calendar,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const serviceCards = [
  { icon: FileText, title: "Tax Preparation", desc: "Individual & Business Filing", tag: "Most Popular" },
  { icon: ShieldCheck, title: "IRS Audit Support", desc: "Expert Representation", tag: null },
  { icon: CalendarCheck, title: "Tax Planning", desc: "Year-Round Consultation", tag: null },
  { icon: BookOpen, title: "Bookkeeping", desc: "Payroll & Business Services", tag: null },
  { icon: ShieldAlert, title: "Tax Resolution", desc: "IRS Issue Support", tag: null },
  { icon: BarChart3, title: "Business Valuation", desc: "Financial Analysis", tag: null },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Years Experience" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left — Text Content ─── */}
          <div className="flex flex-col gap-6">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
                style={{ background: "var(--primary-light)", color: "var(--primary)", borderColor: "var(--primary-light)" }}
              >
                ✦ Trusted Tax Professionals
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
                style={{ background: "var(--accent-light)", color: "var(--accent)", borderColor: "var(--accent-light)" }}
              >
                + New Services Added
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-(--black)">
              Professional Tax &{" "}
              <span className="text-(--primary)">Financial Services</span>{" "}
              You Can Trust
            </h1>

            {/* Subheadline */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Simple, Secure, and Tailored Solutions for Individuals &amp; Businesses.
              Let us handle your taxes while you focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-(--primary) hover:bg-(--primary-dark) text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
              >
                Start Your Application
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 border border-(--gray-border) hover:border-(--primary) text-gray-700 hover:text-(--primary) font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
              >
                <Calendar size={17} strokeWidth={2} />
                Book Appointment
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-5 mt-1 border-t border-(--gray-border)">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i !== 0 ? "border-l border-(--gray-border) pl-8" : ""}`}
                >
                  <div className="text-2xl font-bold text-(--black)">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right — Services Grid ─── */}
          <div className="relative">
            {/* Background fill */}
            <div className="absolute inset-0 rounded-3xl" style={{ background: "var(--gray-light)" }} />

            <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 sm:p-5">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-2xl p-4 border border-(--gray-border) hover:border-(--primary) hover:shadow-md transition-all cursor-pointer group"
                  >
                    {card.tag && (
                      <span
                        className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2"
                        style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                      >
                        {card.tag}
                      </span>
                    )}

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors"
                      style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div className="text-sm font-semibold text-(--black) group-hover:text-(--primary) transition-colors leading-snug">
                      {card.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-snug">{card.desc}</div>
                  </div>
                );
              })}

              {/* Bottom accent CTA card */}
              <div
                className="col-span-2 sm:col-span-3 rounded-2xl p-4 flex items-center justify-between gap-4"
                style={{ background: "var(--black)" }}
              >
                <div>
                  <div className="text-sm font-semibold text-white">
                    Ready to get started?
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                    File taxes, resolve IRS issues, plan ahead — all in one place.
                  </div>
                </div>
                <Link
                  href="/apply"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  Apply Now <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
