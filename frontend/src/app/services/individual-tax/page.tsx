"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import { User, CheckCircle2, ArrowRight, Phone, ChevronRight, DollarSign, ShieldCheck, Clock, BadgeCheck, Star, Users } from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const includes = [
  "Federal & all state income tax returns",
  "W-2, 1099-INT, 1099-DIV, 1099-R — all income types",
  "Itemized vs. standard deduction — we choose the best for you",
  "Child Tax Credit, EIC, education credits applied",
  "Homeowner deductions (mortgage interest, property tax)",
  "E-filing for fastest possible refund",
  "Refund advance up to $6,000 available same day",
  "Audit protection included at no extra charge",
];

const whoWeHelp = [
  { icon: User, title: "W-2 Employees", desc: "Single job, multiple jobs, or part-time — we handle all W-2 income and find every deduction available to you." },
  { icon: DollarSign, title: "Retirees", desc: "Social Security, pensions, 401(k) distributions, and IRA withdrawals — we ensure you only pay exactly what you owe." },
  { icon: Star, title: "Students", desc: "Education credits, tuition deductions, student loan interest — maximized so you keep more of what you earn." },
  { icon: ShieldCheck, title: "Rental Property Owners", desc: "Depreciation, repairs, mortgage interest, management fees — your rental income reported correctly every time." },
  { icon: Clock, title: "Investors", desc: "Stocks, bonds, dividends, and capital gains — we report all investment income and minimize your tax on it." },
  { icon: Users, title: "Multiple Income Sources", desc: "Side income, gig work, freelance alongside a W-2? We combine everything accurately for the best outcome." },
];

const steps = [
  { step: "01", title: "Bring Your Documents", desc: "ID, Social Security cards, W-2s, 1099s, and last year's return. Not sure what you need? Just come in — we'll help." },
  { step: "02", title: "Tax Pro Reviews Everything", desc: "Your dedicated Tax Pro analyzes your income sources, filing status, and life events to identify every deduction." },
  { step: "03", title: "Review Before Signing", desc: "We go through your return together before you approve anything. Full transparency — no surprises." },
  { step: "04", title: "File & Collect Your Refund", desc: "E-filed for the fastest refund. Or walk out the same day with up to $6,000 on a prepaid card." },
];

const faqs = [
  { q: "What's the difference between filing individually vs. jointly?", a: "For married couples, we compare both options and choose the filing status that gives you the better outcome. There's no one-size-fits-all answer — it depends on your specific income, deductions, and credits." },
  { q: "I have a simple return — is it worth coming in?", a: "Yes. Even simple returns often have credits or deductions that tax software misses. Our Tax Pros frequently find additional refund money for clients who thought their return was straightforward." },
  { q: "What if I owe money instead of getting a refund?", a: "We still prepare your return accurately, help you minimize what you owe, and explain your payment options. If you can't pay in full, we'll walk you through IRS payment plan options." },
  { q: "Can I bring a family member's return at the same time?", a: "Yes — we welcome family appointments. We can prepare returns for multiple family members in one visit or as separate appointments, whichever you prefer." },
];

const related = [
  { title: "Tax Preparation & Filing", href: "/services/tax-preparation", sub: "Federal & state, all types" },
  { title: "Self-Employed Tax", href: "/services/self-employed", sub: "Schedule C, deductions" },
  { title: "Refund Advance", href: "/services/refund-advance", sub: "Up to $6,000 same day" },
  { title: "Amended Returns", href: "/services/amended-returns", sub: "Fix prior year returns" },
];

export default function IndividualTaxPage() {
  return (
    <>
      <HeaderTest />
      <main>

        {/* Hero */}
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
                  <span style={{ color: PRIMARY }}>Individual Tax</span>
                </nav>
                <span className="inline-flex items-center self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>Tax Services</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                  Individual Income<br /><span style={{ color: PRIMARY }}>Tax Filing</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Personal tax returns done right — for every income type and life situation. Whether you have a single W-2 or multiple sources, our Tax Pros maximize your refund and ensure 100% accuracy.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[{ v: "All", l: "Income Types" }, { v: "Max", l: "Refund Guaranteed" }, { v: "Same Day", l: "Refund Advance" }].map((h) => (
                    <div key={h.l} className="rounded-xl p-3 text-center border" style={{ background: PRIMARY_LIGHT, borderColor: "rgba(146,69,255,0.2)" }}>
                      <div className="text-base font-bold" style={{ color: PRIMARY }}>{h.v}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, boxShadow: "0 4px 20px rgba(146,69,255,0.25)" }}>
                    File My Return <ArrowRight size={17} strokeWidth={2.5} />
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
                      <User size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>What's Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Your Complete Individual Return</h3>
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

        {/* How It Works */}
        <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>The Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">From Documents to <span style={{ color: PRIMARY }}>Refund in Minutes</span></h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">We handle the hard part — you just bring your documents.</p>
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

        {/* Who We Help */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#0A0A0A" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.07) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.18) 0%, transparent 70%)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(146,69,255,0.15)", color: PRIMARY }}>Who We Help</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                We File for <span style={{ color: PRIMARY }}>Every Situation</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">No return is too simple or too complex. Our Tax Pros handle it all.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoWeHelp.map((item) => {
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">File Your Individual Return Today</h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto mb-8">Walk in, drop off, or book a free consultation. Our Tax Pros are here to maximize your refund.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation" className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all" style={{ background: PRIMARY, color: "white" }}>
                    Book Free Consultation <ArrowRight size={17} strokeWidth={2.5} />
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
