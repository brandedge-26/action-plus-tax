"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import { Package, CheckCircle2, ArrowRight, Phone, Clock, MapPin } from "lucide-react";

const PRIMARY = "#0046BE";
const PRIMARY_LIGHT = "#EBF3FF";

const steps = [
  { step: "01", title: "Drop Off Your Documents", desc: "Bring your tax documents to our office — no appointment necessary. We accept walk-ins during all business hours." },
  { step: "02", title: "We Prepare Your Return", desc: "Our Tax Pros prepare your return accurately and thoroughly — finding every deduction you're entitled to." },
  { step: "03", title: "We Contact You to Review", desc: "We call or message you when your return is ready. Review it from home or come in to go over it together." },
  { step: "04", title: "Sign, File & Get Your Refund", desc: "Approve your return, we e-file it, and your refund is on its way. Same-day refund advance also available." },
];

const whatToBring = [
  "Government-issued photo ID (driver's license, passport)",
  "Social Security cards for yourself, spouse, and dependents",
  "All W-2 forms from every employer",
  "All 1099 forms (freelance, interest, dividends, retirement)",
  "Last year's tax return (if available)",
  "Bank account info for direct deposit",
  "Receipts for deductible expenses (if applicable)",
  "Any IRS letters you've received",
];

export default function DropOffPage() {
  return (
    <>
      <HeaderTest />
      <main>

        <section className="relative overflow-hidden pt-16 pb-14" style={{ background: "#0046BE" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,194,0,0.15) 0%, transparent 70%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 lg:py-12">
              <div className="flex flex-col gap-6">
                <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#FFC200] transition-colors self-start">← All Services</Link>
                <span className="inline-flex items-center self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "#FFC200", color: "#001A57" }}>Financial Products</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Drop Off &amp; Go{" "}<span style={{ color: "#FFC200" }}>Tax Service</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  No appointment. No waiting. Just drop off your documents and we handle everything.
                  Open late weekdays and Saturdays — we work on your schedule.
                </p>

                {/* Hours & Location */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100" style={{ background: "#F4F7FF" }}>
                    <Clock size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                    <div>
                      <p className="text-xs font-bold text-[#0A0A0A]">Office Hours</p>
                      <p className="text-xs text-gray-500">Mon – Fri: 9AM – 7PM · Saturday: 10AM – 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100" style={{ background: "#F4F7FF" }}>
                    <MapPin size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                    <div>
                      <p className="text-xs font-bold text-[#0A0A0A]">Location</p>
                      <p className="text-xs text-gray-500">212 S 1st Street, Suite 2 · Jesup, GA 31545</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: "#FFC200", color: "#001A57" }}>
                    Drop Off Today <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFC200] text-white hover:text-[#FFC200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all">
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>
              </div>

              {/* What to Bring */}
              <div className="rounded-3xl p-8 border" style={{ background: "#001A57", borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Package size={18} strokeWidth={1.8} style={{ color: PRIMARY }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFC200" }}>What to Bring</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Documents Checklist</h3>
                <ul className="space-y-3">
                  {whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Not sure what you need? Just come in — we'll help you figure it out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-24" style={{ background: "#F4F7FF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "#FFC200", color: "#001A57" }}>How It Works</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Simple as <span style={{ color: "#FFC200" }}>Drop, Wait, Done</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">No scheduling, no waiting, no stress. We do the work — you live your life.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s) => (
                <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#FFC200] hover:shadow-lg transition-all group">
                  <div className="text-3xl font-bold mb-4 leading-none" style={{ color: PRIMARY_LIGHT }}>{s.step}</div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFC200] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden px-8 sm:px-16 py-16 text-center" style={{ background: "#001A57" }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(rgba(255,194,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,194,0,0.25) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
              <div className="h-[2px] w-full absolute top-0" style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }} />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Ready to Drop Off?</h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto mb-8">Walk in anytime during business hours — no appointment needed. We'll take it from there.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:9125592222" className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, color: "white" }}>
                    <Phone size={17} strokeWidth={2} /> Call 912-559-2222
                  </a>
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 font-bold px-8 py-4 rounded-xl text-base text-white hover:border-white transition-all" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
