"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import ServiceInactiveBanner from "@/components/ServiceInactiveBanner";
import SiteFooter from "@/components/SiteFooter";
import {
  TrendingUp, CheckCircle2, ArrowRight, Phone,
  Calendar, Target, DollarSign, BarChart2, Briefcase, Users,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

const highlights = [
  { value: "Year-Round", label: "Ongoing Access" },
  { value: "Proactive", label: "Strategy, Not Reaction" },
  { value: "Tax Minimized", label: "Legally & Strategically" },
];

const includes = [
  "Personalized tax reduction strategy",
  "Quarterly estimated tax calculation",
  "Deduction maximization planning",
  "Investment and capital gains planning",
  "Business structure review and optimization",
  "Year-round access to your dedicated Tax Pro",
  "Annual strategy review and update",
];

const steps = [
  { step: "01", title: "Strategy Session", desc: "We start with a comprehensive review of your income sources, deductions, investments, and business activity. From this, we build a customized plan to legally minimize your tax liability." },
  { step: "02", title: "Quarterly Check-Ins", desc: "Tax planning isn't a once-a-year activity. We review your financials quarterly, calculate estimated payments, and adjust the strategy as your income or life situation changes." },
  { step: "03", title: "Proactive Recommendations", desc: "Before year-end, we identify actions you can take now to reduce next year's tax bill — timing income and deductions, maximizing retirement contributions, and leveraging available credits." },
  { step: "04", title: "Annual Review & Filing", desc: "At tax time, your return is prepared using the strategy we built together. No surprises — just a return that reflects an entire year of smart planning." },
];

const features = [
  { icon: Calendar, title: "Year-Round Tax Strategy", desc: "Unlike tax preparation, planning happens all year. We monitor your situation continuously and make adjustments whenever your income, business, or life circumstances change." },
  { icon: Target, title: "Quarterly Planning & Estimates", desc: "We calculate your quarterly estimated payments to keep you compliant without overpaying. Accurate estimates prevent underpayment penalties and keep your cash flow predictable." },
  { icon: Users, title: "Life Events Planning", desc: "Marriage, divorce, new child, home purchase, business launch — major life events change your tax picture significantly. We plan around each event to maximize your benefit." },
  { icon: BarChart2, title: "Retirement Income Planning", desc: "We help you plan distributions from IRAs, 401(k)s, and pensions to minimize taxable income in retirement. Roth conversions, Required Minimum Distributions, and Social Security timing are all part of the plan." },
  { icon: DollarSign, title: "Investment Tax Strategy", desc: "We analyze your investment portfolio for tax efficiency — harvesting losses, managing holding periods, and timing capital gains to minimize your effective tax rate." },
  { icon: Briefcase, title: "Business Tax Strategy", desc: "From entity structure to expense timing to owner compensation strategy — we help business owners minimize taxes at both the business and personal level." },
];

const faqs = [
  { q: "When should I start tax planning?", a: "As early as possible — ideally at the beginning of each year or whenever your financial situation changes significantly. Many tax-saving strategies have deadlines (retirement contributions, capital loss harvesting, business expense timing). Waiting until tax season leaves options on the table." },
  { q: "Can tax planning really reduce what I owe?", a: "Yes — proactive planning consistently reduces tax liability for our clients. Legal strategies like maximizing retirement contributions, timing deductions, structuring business income correctly, and claiming every available credit can reduce your effective tax rate significantly." },
  { q: "What's the difference between tax planning and tax preparation?", a: "Tax preparation is backward-looking — reporting what happened. Tax planning is forward-looking — shaping what happens to minimize your tax bill before it's locked in. Planning gives you the tools to act; preparation just records the results." },
  { q: "How often should we meet for tax planning?", a: "We recommend quarterly check-ins at minimum. This aligns with estimated payment due dates and gives us enough time to act on recommendations before year-end. For business owners or clients with variable income, more frequent contact may be appropriate." },
];

const related = [
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
  { title: "Self-Employed Tax", href: "/services/self-employed", sub: "Freelancers, contractors" },
  { title: "Bookkeeping", href: "/services/bookkeeping", sub: "Monthly books & reports" },
  { title: "Business Valuation", href: "/services/business-valuation", sub: "Know your business worth" },
];

export default function TaxPlanningPage() {
  return (
    <>
      <HeaderTest />
      <ServiceInactiveBanner slug="tax-planning" />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-0" style={{ background: "#01567E" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-14 lg:py-20">

              {/* Left */}
              <div className="flex flex-col gap-6">
                <nav className="flex items-center gap-1.5 text-xs text-white/50">
                  <Link href="/" className="hover:text-[#FFF200] transition-colors">Home</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <Link href="/services" className="hover:text-[#FFF200] transition-colors">Services</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <span style={{ color: "#FFF200" }}>Tax Planning</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Tax Planning
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Strategic<br />
                  <span style={{ color: "#FFF200" }}>Tax Planning</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed">
                  Stop reacting to your tax bill and start planning ahead. We build a personalized tax
                  strategy that reduces what you owe, improves your cash flow, and keeps you ahead of
                  IRS requirements — all year long.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((h) => (
                    <div key={h.label} className="rounded-xl p-3 text-center border"
                      style={{ background: PRIMARY_LIGHT, borderColor: "rgba(255,242,0,0.15)" }}
                    >
                      <div className="text-lg font-bold" style={{ color: "#01567E" }}>{h.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Start My Tax Plan <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFF200] text-white hover:text-[#FFF200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Year-round access · Proactive strategy · Deductions maximized
                </p>
              </div>

              {/* Right — dark card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-3xl p-8 border" style={{ background: "#041E42", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.12]" aria-hidden="true"
                    style={{ backgroundImage: `linear-gradient(rgba(255,242,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,242,0,0.25) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFF200" }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Your Complete Tax Planning Service</h3>
                    <ul className="space-y-3.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(255,242,0,0.15)" }}
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

        {/* ── Process ── */}
        <section className="py-20 lg:py-28" style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFF200", color: "#041E42" }}
              >
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                How Your <span style={{ color: "#01567E" }}>Tax Plan Works</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">A continuous cycle of strategy, monitoring, and action — not a once-a-year event.</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, #60A5FA, ${PRIMARY})`, opacity: 0.2 }}
              />
              {steps.map((s, i) => (
                <div key={s.step}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#01567E] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{ background: i === steps.length - 1 ? PRIMARY : PRIMARY_LIGHT, color: i === steps.length - 1 ? "white" : PRIMARY, borderColor: i === steps.length - 1 ? PRIMARY : "transparent" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#041E42" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(255,242,0,0.15)", color: PRIMARY }}
              >
                Planning Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Strategy for <span style={{ color: "#FFF200" }}>Every Situation</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                We tailor your plan to your specific income sources, life stage, and financial goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group rounded-2xl p-6 border transition-all hover:border-[#FFF200] flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#FFF200", color: "#041E42" }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFF200] transition-colors">{item.title}</h3>
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
                style={{ background: "#FFF200", color: "#041E42" }}
              >
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Common <span style={{ color: "#01567E" }}>Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#01567E] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: "#FFF200", color: "#041E42" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors mb-2">{faq.q}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ── */}
        <section className="py-16 lg:py-20" style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-[#0A0A0A]">Related Services</h3>
              <Link href="/services" className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: "#01567E" }}>
                View All <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.title} href={r.href}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#01567E] hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors">{r.title}</p>
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
            <div className="relative rounded-3xl overflow-hidden px-10 sm:px-16 py-16 text-center" style={{ background: "#041E42" }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true"
                style={{ backgroundImage: `linear-gradient(rgba(255,242,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,242,0,0.25) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.2) 0%, transparent 70%)" }}
              />
              <div className="h-[2px] w-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }}
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>Start Planning Now</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  The Best Time to Plan Was Last Year. The Second Best Is Today.
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Every month without a tax plan is a month of potential savings lost. Book a strategy
                  session and start reducing your tax burden immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: PRIMARY, color: "white" }}
                  >
                    Book Strategy Session <ArrowRight size={17} strokeWidth={2.5} />
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
