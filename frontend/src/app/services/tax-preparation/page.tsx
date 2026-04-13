"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import {
  FileText, CheckCircle2, ArrowRight, Phone,
  DollarSign, ShieldCheck, Clock, Users, Star, BadgeCheck,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const highlights = [
  { value: "$6,000", label: "Max Refund Advance" },
  { value: "Same Day", label: "Results When You File" },
  { value: "100%", label: "Transparent Pricing" },
];

const includes = [
  "Federal & state income tax return preparation",
  "Electronic filing (e-file) for faster refunds",
  "W-2, 1099, and all income types covered",
  "All deductions and credits maximized",
  "Refund advance available same day (up to $6,000)",
  "Audit support included at no extra charge",
  "Prior year returns welcome",
  "Walk-in or drop-off — your choice",
];

const steps = [
  { step: "01", title: "Gather Your Documents", desc: "Bring your W-2s, 1099s, Social Security card, and last year's return. Not sure what to bring? We'll guide you on the phone." },
  { step: "02", title: "Meet Your Tax Pro", desc: "A dedicated Tax Pro reviews your full situation, asks targeted questions, and identifies every legal deduction and credit available to you." },
  { step: "03", title: "Review Your Return", desc: "We walk you through the completed return line-by-line before you sign. No surprises — you know exactly what's on it." },
  { step: "04", title: "E-File & Get Your Refund", desc: "We e-file immediately for the fastest refund. Or get a same-day advance of up to $6,000 loaded on a prepaid card — no credit check." },
];

const features = [
  { icon: DollarSign, title: "Biggest Refund Guaranteed", desc: "We dig deep into every deduction and credit available to you. If another tax preparer gets you a bigger refund, we'll refund our preparation fee." },
  { icon: ShieldCheck, title: "Audit Protection Included", desc: "If the IRS contacts you after filing — letter, notice, or audit — we respond and represent you at no additional charge." },
  { icon: Clock, title: "Open Late & Weekends", desc: "We know tax season is stressful. That's why we're open Mon–Fri until 7PM and Saturdays until 6PM. Walk-ins always welcome." },
  { icon: Users, title: "Dedicated One-on-One Service", desc: "No call centers. No handoffs. Your Tax Pro handles your return from start to finish and is available to answer questions year-round." },
  { icon: Star, title: "10+ Years of Experience", desc: "Over a decade of hands-on tax expertise across individual, self-employed, and complex filings. We've seen every situation — we know how to handle it." },
  { icon: BadgeCheck, title: "Transparent Flat-Rate Pricing", desc: "We quote your price upfront — before we start. What we quote is exactly what you pay. No surprise fees, ever." },
];

const faqs = [
  { q: "What documents do I need to bring?", a: "Bring your government-issued ID, Social Security cards for you and your dependents, all W-2s and 1099s, and last year's return if you have it. Not sure? Just come in — we'll help you figure out what's missing." },
  { q: "How long does tax preparation take?", a: "Most individual returns are completed in 30–90 minutes during your appointment. Complex returns or those requiring additional documents may take longer. Drop-off service is also available." },
  { q: "Can I get my refund the same day?", a: "Yes — when you file with us, you can apply for a refund advance of up to $6,000 loaded onto a prepaid card the same day. No credit check, no interest, no fees." },
  { q: "Do you handle prior year returns?", a: "Absolutely. We prepare and file returns going back multiple years. If you have unfiled returns, we can help you get back into compliance — often with reduced penalties." },
  { q: "What if I get an IRS letter after filing?", a: "Audit protection is included with every return we prepare. Contact us immediately if you receive any IRS correspondence and we'll handle the response on your behalf." },
];

const related = [
  { title: "Individual Income Tax", href: "/services/individual-tax", sub: "W-2, retirees, students" },
  { title: "Self-Employed Tax", href: "/services/self-employed", sub: "Freelancers, gig workers" },
  { title: "Refund Advance", href: "/services/refund-advance", sub: "Up to $6,000 same day" },
  { title: "Tax Resolution", href: "/services/tax-resolution", sub: "IRS issues & back taxes" },
];

export default function TaxPreparationPage() {
  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-white overflow-hidden pt-16 pb-0">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.055) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-14 lg:py-20">

              {/* Left */}
              <div className="flex flex-col gap-6">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Link href="/" className="hover:text-[#9245FF] transition-colors">Home</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <Link href="/services" className="hover:text-[#9245FF] transition-colors">Services</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <span style={{ color: PRIMARY }}>Tax Preparation</span>
                </nav>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                  >
                    Tax Services
                  </span>
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                    ● Most Popular
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                  Tax Preparation<br />
                  <span style={{ color: PRIMARY }}>&amp; Filing</span>
                </h1>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Expert, computerized tax return preparation by certified Tax Pros. We handle federal
                  and state returns for all income types and maximize your refund — every single time.
                </p>

                {/* Highlight boxes */}
                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((h) => (
                    <div key={h.label} className="rounded-xl p-3 text-center border"
                      style={{ background: PRIMARY_LIGHT, borderColor: "rgba(146,69,255,0.2)" }}
                    >
                      <div className="text-lg font-bold" style={{ color: PRIMARY }}>{h.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: PRIMARY, boxShadow: "0 4px 20px rgba(146,69,255,0.25)" }}
                  >
                    File My Taxes Now <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-700 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Free consultation · Biggest refund guaranteed · Audit protection included
                </p>
              </div>

              {/* Right — dark feature card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(146,69,255,0.08) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-3xl p-8 border" style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.12]" aria-hidden="true"
                    style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.6) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>What's Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Everything You Need to File Right</h3>
                    <ul className="space-y-3.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(146,69,255,0.2)" }}
                          >
                            <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: PRIMARY }} />
                          </div>
                          <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        <CheckCircle2 size={12} strokeWidth={2} style={{ color: PRIMARY }} />
                        Serving Jesup, GA &amp; surrounding areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
              >
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Filing Taxes Has Never Been <span style={{ color: PRIMARY }}>This Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">Four steps — and we handle most of the work.</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, #c084fc, ${PRIMARY})`, opacity: 0.2 }}
              />
              {steps.map((s, i) => (
                <div key={s.step}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#9245FF] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{ background: i === steps.length - 1 ? PRIMARY : PRIMARY_LIGHT, color: i === steps.length - 1 ? "white" : PRIMARY, borderColor: i === steps.length - 1 ? PRIMARY : "transparent" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#9245FF] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features / Why Us — dark section ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#0A0A0A" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.07) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.18) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(146,69,255,0.15)", color: PRIMARY }}
              >
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The Action Plus Tax <span style={{ color: PRIMARY }}>Advantage</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Every advantage we offer directly benefits your refund, your peace of mind, and your time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group rounded-2xl p-6 border transition-all hover:border-[#9245FF] flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                  >
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

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
              >
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Common <span style={{ color: PRIMARY }}>Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#9245FF] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
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

        {/* ── Related Services ── */}
        <section className="py-16 lg:py-20" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-[#0A0A0A]">Related Services</h3>
              <Link href="/services" className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: PRIMARY }}>
                View All <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.title} href={r.href}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#9245FF] hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#9245FF] transition-colors">{r.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{r.sub}</p>
                  </div>
                  <ArrowRight size={14} strokeWidth={2.5} style={{ color: PRIMARY }} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden px-10 sm:px-16 py-16 text-center" style={{ background: "#0A0A0A" }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true"
                style={{ backgroundImage: `linear-gradient(rgba(146,69,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.5) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.3) 0%, transparent 70%)" }}
              />
              <div className="h-[2px] w-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #c084fc, ${PRIMARY}, transparent)` }}
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>Get Started Today</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Ready to Get the Biggest Refund Possible?
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Walk in, drop off your documents, or book a free consultation. Our Tax Pros are ready —
                  on your timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: PRIMARY, color: "white" }}
                  >
                    Book Free Consultation <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border-2 font-bold px-8 py-4 rounded-xl text-base text-white hover:border-white transition-all"
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
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
