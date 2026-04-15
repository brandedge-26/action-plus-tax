"use client";

import Link from "next/link";
import { ArrowRight, Calendar, ShieldCheck, Star } from "lucide-react";

const PRIMARY      = "#0046BE";
const PRIMARY_DARK = "#003DA5";
const YELLOW       = "#FFC200";
const YELLOW_DARK  = "#E6AF00";

const stats = [
  { value: "10+",    label: "Years Experience" },
  { value: "$6,000", label: "Max Refund Advance" },
  { value: "500+",   label: "Clients Served" },
];

const floatCards = [
  { label: "Tax Preparation",  sub: "Individual & Business" },
  { label: "Refund Advance",   sub: "Up to $6,000" },
  { label: "IRS Help",         sub: "Letters & Audits" },
  { label: "Drop Off & Go",    sub: "No Appt Needed" },
  { label: "Tax Planning",     sub: "Year-Round Strategy" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TestHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: PRIMARY }}>

      {/* Subtle grid overlay */}
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

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 flex flex-col items-center text-center gap-6">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <ShieldCheck size={12} strokeWidth={2.5} />
            Trusted Tax Professionals
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full"
            style={{ background: YELLOW, color: "#0A0A0A" }}
          >
            <Star size={11} strokeWidth={2.5} fill="#0A0A0A" />
            Refund Advance up to $6,000
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-white">
          Expert Tax Help —{" "}
          <span style={{ color: YELLOW }}>Call Now</span>{" "}
          for Peace of Mind
        </h1>

        {/* Sub */}
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.78)" }}>
          You could get money in minutes today! Available on a prepaid card.
          Book your appointment now — we&apos;re open late and on weekends.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg"
            style={{ background: YELLOW, color: "#0A0A0A", boxShadow: "0 4px 24px rgba(255,194,0,0.40)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = YELLOW_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.background = YELLOW)}
          >
            Start Your Application
            <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
            style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.35)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
          >
            <Calendar size={17} strokeWidth={2} />
            Book Appointment
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 pt-4 mt-2 w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={i !== 0 ? "pl-8" : ""} style={i !== 0 ? { borderLeft: "1px solid rgba(255,255,255,0.2)" } : {}}>
              <div className="text-2xl font-bold" style={{ color: YELLOW }}>{stat.value}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Service Cards Strip ── */}
      <div className="relative w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-center gap-3 overflow-x-auto">
          {floatCards.map((card) => (
            <div
              key={card.label}
              className="flex-shrink-0 bg-white rounded-xl px-4 py-3 shadow-md flex flex-col gap-0.5 min-w-[140px]"
              style={{ borderTop: `3px solid ${PRIMARY}` }}
            >
              <span className="text-xs font-bold text-[#0A0A0A] leading-snug">{card.label}</span>
              <span className="text-[11px] text-gray-400">{card.sub}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
