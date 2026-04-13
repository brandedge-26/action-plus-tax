"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import { ShieldAlert, CheckCircle2, ArrowRight, Phone, ChevronRight, ShieldCheck, DollarSign, Clock, Users, Star, BadgeCheck } from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const includes = [
  "Free initial consultation — no obligation",
  "Full IRS representation on your behalf",
  "Back tax negotiation and resolution",
  "Offer in Compromise evaluation & submission",
  "IRS installment agreement setup",
  "Tax lien release and withdrawal",
  "Wage garnishment stop and release",
  "Penalty abatement requests filed",
  "Unfiled return compliance assistance",
];

const resolutionServices = [
  { icon: DollarSign, title: "Back Tax Resolution", desc: "Owe several years of back taxes? We negotiate directly with the IRS to resolve your debt — often for significantly less than the full amount owed." },
  { icon: ShieldCheck, title: "Offer in Compromise", desc: "Settle your total tax debt for less than what you owe. We evaluate your eligibility and submit a complete, professionally prepared OIC package." },
  { icon: BadgeCheck, title: "IRS Installment Agreements", desc: "Can't pay in full? We set up an IRS-approved payment plan that fits your budget and immediately stops collection actions." },
  { icon: ShieldAlert, title: "Tax Lien Release", desc: "IRS placed a tax lien on your property or wages? We work to release or withdraw it — protecting your credit score and financial assets." },
  { icon: Clock, title: "Wage Garnishment Release", desc: "We act immediately to stop IRS wage garnishments and negotiate a resolution that protects your paycheck and financial stability." },
  { icon: Star, title: "Penalty Abatement", desc: "Facing large IRS penalties? We request abatement based on reasonable cause or first-time penalty relief — often eliminating thousands in fees." },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "We review your IRS situation at no cost — no pressure, no obligation — and clearly explain every option available to you." },
  { step: "02", title: "We Take Over", desc: "You sign a power of attorney. From that moment, we handle all IRS communication and you stop dealing with collectors directly." },
  { step: "03", title: "Build Your Strategy", desc: "We analyze your financials, IRS records, and history to build the strongest possible resolution case for your specific situation." },
  { step: "04", title: "Resolve & Move Forward", desc: "We negotiate with the IRS, implement your resolution, and give you a clear path to stay compliant going forward." },
];

const faqs = [
  { q: "Can I really settle my tax debt for less than I owe?", a: "Yes — through the IRS Offer in Compromise program. Not everyone qualifies, but those who do can settle for a fraction of their total balance. We evaluate your eligibility during your free consultation." },
  { q: "What is a power of attorney in this context?", a: "It's a form (IRS Form 2848) that authorizes us to represent you directly with the IRS — receiving notices, responding to correspondence, and attending hearings on your behalf. You stay informed but stop dealing with the IRS personally." },
  { q: "How long does tax resolution take?", a: "It depends on the type of resolution. An installment agreement can be set up in days. An Offer in Compromise typically takes 6–12 months. We give you a realistic timeline during our consultation." },
  { q: "What if I haven't filed taxes in several years?", a: "Non-filing is a serious issue but it's very fixable. We help you file all delinquent returns, often negotiate penalty relief, and get you back into compliance with the IRS — without criminal exposure in most cases." },
];

const related = [
  { title: "IRS Audit Support", href: "/services/audit-support", sub: "Full audit representation" },
  { title: "Tax Planning", href: "/services/tax-planning", sub: "Prevent future issues" },
  { title: "Amended Returns", href: "/services/amended-returns", sub: "Correct prior year filings" },
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "File your current taxes" },
];

export default function TaxResolutionPage() {
  return (
    <>
      <HeaderTest />
      <main>

        <section className="relative bg-white overflow-hidden pt-16 pb-0">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.055) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.12) 0%, transparent 70%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-14 lg:py-20">
              <div className="flex flex-col gap-6">
                <nav className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Link href="/" className="hover:text-[#9245FF] transition-colors">Home</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <Link href="/services" className="hover:text-[#9245FF] transition-colors">Services</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <span style={{ color: PRIMARY }}>Tax Resolution</span>
                </nav>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>Tax Resolution</span>
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700">● Free Consultation</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                  Tax Resolution &amp;<br /><span style={{ color: PRIMARY }}>IRS Support</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Facing back taxes, liens, garnishments, or IRS collection notices? Our Tax Pros take over all
                  IRS communication, negotiate on your behalf, and fight to resolve your tax issue for good.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ background: PRIMARY_LIGHT, borderColor: "rgba(146,69,255,0.2)" }}>
                  <ShieldAlert size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                  <p className="text-sm font-semibold" style={{ color: PRIMARY }}>The sooner you act, the more options you have. Call us today.</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ v: "Free", l: "Initial Consult" }, { v: "Full", l: "IRS Representation" }, { v: "$0", l: "Upfront Obligation" }].map((h) => (
                    <div key={h.l} className="rounded-xl p-3 text-center border" style={{ background: PRIMARY_LIGHT, borderColor: "rgba(146,69,255,0.2)" }}>
                      <div className="text-lg font-bold" style={{ color: PRIMARY }}>{h.v}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, boxShadow: "0 4px 20px rgba(146,69,255,0.25)" }}>
                    Get Free Consultation <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222" className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-700 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-base transition-all">
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(146,69,255,0.08) 0%, transparent 70%)" }} />
                <div className="relative rounded-3xl p-8 border" style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.12]" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.6) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldAlert size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>What's Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Complete IRS Resolution Service</h3>
                    <ul className="space-y-3.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(146,69,255,0.2)" }}>
                            <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: PRIMARY }} />
                          </div>
                          <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>The Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">How We <span style={{ color: PRIMARY }}>Resolve Your IRS Issue</span></h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">We take over from day one so you stop dealing with the IRS directly.</p>
            </div>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: `linear-gradient(90deg, ${PRIMARY}, #c084fc, ${PRIMARY})`, opacity: 0.2 }} />
              {steps.map((s, i) => (
                <div key={s.step} className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#9245FF] hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{ background: i === steps.length - 1 ? PRIMARY : PRIMARY_LIGHT, color: i === steps.length - 1 ? "white" : PRIMARY, borderColor: i === steps.length - 1 ? PRIMARY : "transparent" }}>
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#9245FF] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resolution Types — dark */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#0A0A0A" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.07) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.18) 0%, transparent 70%)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(146,69,255,0.15)", color: PRIMARY }}>Resolution Options</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Every IRS Problem Has <span style={{ color: PRIMARY }}>a Solution</span></h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">We handle every type of IRS issue — from unfiled returns to complex collection matters.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resolutionServices.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-2xl p-6 border transition-all hover:border-[#9245FF] flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#9245FF] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">Common <span style={{ color: PRIMARY }}>Questions</span></h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#9245FF] hover:shadow-md transition-all group">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#9245FF] transition-colors mb-2">{faq.q}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 lg:py-20" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-[#0A0A0A]">Related Services</h3>
              <Link href="/services" className="flex items-center gap-1 text-xs font-bold" style={{ color: PRIMARY }}>View All <ChevronRight size={13} strokeWidth={2.5} /></Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.title} href={r.href} className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#9245FF] hover:shadow-lg transition-all flex items-center justify-between">
                  <div><p className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#9245FF] transition-colors">{r.title}</p><p className="text-xs text-gray-400 mt-0.5">{r.sub}</p></div>
                  <ArrowRight size={14} strokeWidth={2.5} style={{ color: PRIMARY }} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden px-10 sm:px-16 py-16 text-center" style={{ background: "#0A0A0A" }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.5) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
              <div className="h-[2px] w-full absolute top-0" style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #c084fc, ${PRIMARY}, transparent)` }} />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Stop IRS Collections Today</h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto mb-8">The sooner you act, the more options you have. Get a free consultation and let us take over from here.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, color: "white" }}>
                    Get Free Consultation <ArrowRight size={17} strokeWidth={2.5} />
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
