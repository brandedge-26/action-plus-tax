"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ShieldCheck, Star, CheckCircle2 } from "lucide-react";

const PRIMARY      = "#0046BE";
const YELLOW       = "#FFC200";
const YELLOW_DARK  = "#E6AF00";
const DARK         = "#001040";

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

export default function TestHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: PRIMARY }}>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Right glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(0,16,64,0.55) 0%, transparent 70%)" }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-20 lg:pb-24">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                <ShieldCheck size={12} strokeWidth={2.5} />
                Trusted Tax Professionals
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full"
                style={{ background: YELLOW, color: "#0A0A0A" }}>
                <Star size={11} strokeWidth={2.5} fill="#0A0A0A" />
                Refund Advance up to $6,000
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-white">
              Expert Tax Help —{" "}
              <span style={{ color: YELLOW }}>More Money</span>{" "}
              Back in Your Pocket
            </h1>

            {/* Sub */}
            <p className="text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Action Plus TAX has helped 500+ clients maximize refunds and stay IRS-compliant since 2012.
              Get same-day refund advances, expert filing, and year-round support.
            </p>

            {/* Bullet trust points */}
            <ul className="flex flex-col gap-2 self-start">
              {[
                "Free initial consultation — no obligation",
                "IRS-authorized e-file provider since 2012",
                "Refund advance available on a prepaid card today",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <CheckCircle2 size={15} strokeWidth={2.5} style={{ color: YELLOW, flexShrink: 0 }} />
                  {pt}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link href="/apply"
                className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base transition-all"
                style={{ background: YELLOW, color: "#0A0A0A", boxShadow: "0 4px 24px rgba(255,194,0,0.40)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = YELLOW_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.background = YELLOW)}>
                Start Your Application
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}>
                <Calendar size={17} strokeWidth={2} />
                Book Appointment
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-3 mt-1 w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {stats.map((stat, i) => (
                <div key={stat.label} className={i !== 0 ? "pl-6" : ""} style={i !== 0 ? { borderLeft: "1px solid rgba(255,255,255,0.2)" } : {}}>
                  <div className="text-2xl font-bold" style={{ color: YELLOW }}>{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: photo ── */}
          <div className="hidden lg:block relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,194,0,0.1) 0%, transparent 70%)" }} />

            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image
                src="/images/tax-consultation.jpg"
                alt="Professional tax consultant working with a client"
                width={620}
                height={460}
                className="w-full object-cover"
                style={{ height: "440px" }}
                priority
              />
              {/* Dark overlay at bottom */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,16,64,0.7) 0%, rgba(0,16,64,0.1) 50%, transparent 100%)" }} />

              {/* Floating info card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl flex items-center gap-4"
                style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", backdropFilter: "blur(12px)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: PRIMARY }}>
                  <ShieldCheck size={22} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>IRS-Authorized E-File Provider</p>
                  <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>Serving clients since 2012 · Partnered with Republic Bank</p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: "#dcfce7", color: "#16a34a" }}>● Verified</span>
              </div>
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl flex items-center gap-2.5"
              style={{ background: DARK, border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} strokeWidth={0} fill={YELLOW} />)}
                </div>
                <p className="text-[11px] font-bold text-white">4.9 / 5.0</p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>500+ reviews</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Service Cards Strip ── */}
      <div className="relative w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-center gap-3 overflow-x-auto">
          {floatCards.map((card) => (
            <div key={card.label}
              className="flex-shrink-0 bg-white rounded-xl px-4 py-3 shadow-sm flex flex-col gap-0.5 min-w-[140px]"
              style={{ borderTop: `3px solid ${PRIMARY}`, border: `1px solid #E2E8F0`, borderTopWidth: "3px", borderTopColor: PRIMARY }}>
              <span className="text-xs font-bold text-[#0A0A0A] leading-snug">{card.label}</span>
              <span className="text-[11px] text-gray-400">{card.sub}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
