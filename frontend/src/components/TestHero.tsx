"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_DARK = "#7B35E0";
const PRIMARY_LIGHT = "#F3ECFF";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "$6,000", label: "Max Refund Advance" },
  { value: "500+", label: "Clients Served" },
];

const floatCards = [
  { label: "Tax Preparation", sub: "Individual & Business" },
  { label: "Refund Advance", sub: "Up to $6,000" },
  { label: "IRS Help", sub: "Letters & Audits" },
  { label: "Drop Off & Go", sub: "No Appt Needed" },
  { label: "Tax Planning", sub: "Year-Round Strategy" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TestHero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(146,69,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146,69,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, white 100%)",
          }}
        />
      </div>

      {/* Purple glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-85 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 flex flex-col items-center text-center gap-6">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
            style={{ background: PRIMARY_LIGHT, color: PRIMARY, borderColor: "rgba(146,69,255,0.18)" }}
          >
            ✦ Trusted Tax Professionals
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
            style={{ background: "#FFF7ED", color: "#EA580C", borderColor: "rgba(234,88,12,0.15)" }}
          >
            + New Services Added
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-[#0A0A0A]">
          Expert Tax Help —{" "}
          <span style={{ color: PRIMARY }}>Call Now</span>{" "}
          for Peace of Mind
        </h1>

        {/* Sub */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
          You could get money in minutes today! Available on a prepaid card.
          Book your appointment now — we&apos;re open late and on weekends.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
            style={{ background: PRIMARY, boxShadow: "0 4px 24px rgba(146,69,255,0.30)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
          >
            Start Your Application
            <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-700 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-base transition-all bg-white"
          >
            <Calendar size={17} strokeWidth={2} />
            Book Appointment
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 pt-4 mt-2 border-t border-gray-100 w-full">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i !== 0 ? "border-l border-gray-200 pl-8" : ""}>
              <div className="text-2xl font-bold text-[#0A0A0A]">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Grid showcase ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(146,69,255,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(146,69,255,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          {floatCards.map((card) => (
            <div
              key={card.label}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-3 shadow-sm flex flex-col gap-0.5 min-w-[130px] hover:shadow-md transition-shadow"
              style={{ borderTop: `2px solid ${PRIMARY}` }}
            >
              <span className="text-xs font-bold text-[#0A0A0A] leading-snug">{card.label}</span>
              <span className="text-[11px] text-gray-400">{card.sub}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)" }} />
      </div>
    </section>
  );
}
