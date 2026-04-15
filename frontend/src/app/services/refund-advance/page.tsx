"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import { DollarSign, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const PRIMARY = "#0046BE";
const PRIMARY_LIGHT = "#EBF3FF";

const amounts = [
  { amount: "$500", desc: "Perfect for covering immediate bills or expenses while your refund is processed." },
  { amount: "$1,000", desc: "Handle larger expenses — car repairs, medical bills, or monthly necessities." },
  { amount: "$2,500", desc: "Cover several months of bills or handle larger unexpected expenses." },
  { amount: "$4,000", desc: "Tackle big financial needs while you wait for your full refund." },
  { amount: "$6,000", desc: "Maximum advance available — the largest same-day refund advance option." },
];

const faqs = [
  { q: "Does it affect my credit score?", a: "No. The refund advance has no impact on your credit score. We don't run a hard credit check." },
  { q: "How fast do I get the money?", a: "If approved, funds are loaded onto a prepaid card the same day you file your taxes with us." },
  { q: "Is there interest or fees?", a: "No interest and no fees on the advance itself. Standard tax preparation fees apply." },
  { q: "Who qualifies for the advance?", a: "Most clients qualify. You must file your federal taxes with us and meet basic eligibility requirements. We'll let you know immediately." },
  { q: "What happens when my real refund arrives?", a: "Your actual refund pays back the advance automatically. You keep the rest." },
];

export default function RefundAdvancePage() {
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
                  Tax Refund{" "}<span style={{ color: "#FFC200" }}>Advance</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  Don't wait weeks for your refund. Get up to $6,000 on a prepaid card the same day you file
                  — with no credit score impact, no interest, and no fees.
                </p>

                {/* Key benefits */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Up to", value: "$6,000" },
                    { label: "Credit Impact", value: "None" },
                    { label: "Interest", value: "$0" },
                  ].map((b) => (
                    <div key={b.label} className="rounded-xl p-3 text-center border border-gray-100" style={{ background: PRIMARY_LIGHT }}>
                      <div className="text-xl font-bold" style={{ color: "#FFC200" }}>{b.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{b.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: "#FFC200", color: "#001A57" }}>
                    Get My Advance <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFC200] text-white hover:text-[#FFC200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all">
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>
              </div>

              {/* Advance amounts */}
              <div className="rounded-3xl p-8 border" style={{ background: "#001A57", borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign size={18} strokeWidth={1.8} style={{ color: PRIMARY }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFC200" }}>Available Advance Amounts</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Choose the Amount You Need</h3>
                <div className="space-y-3">
                  {amounts.map((a) => (
                    <div key={a.amount} className="flex items-start gap-4 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,194,0,0.15)" }}>
                      <span className="text-lg font-bold shrink-0" style={{ color: "#FFC200" }}>{a.amount}</span>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-24" style={{ background: "#F4F7FF" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "#FFC200", color: "#001A57" }}>Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Refund Advance <span style={{ color: "#FFC200" }}>FAQs</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#FFC200] transition-all">
                  <h3 className="text-sm font-bold text-[#0A0A0A] mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Get Your Money Today</h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto mb-8">File your taxes with us and walk out with up to $6,000 on a prepaid card — same day, no credit check.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, color: "white" }}>
                    Apply Now <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222" className="inline-flex items-center justify-center gap-2 border-2 font-bold px-8 py-4 rounded-xl text-base text-white hover:border-white transition-all" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                    <Phone size={17} strokeWidth={2} /> 912-559-2222
                  </a>
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
