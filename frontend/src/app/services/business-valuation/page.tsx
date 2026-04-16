"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import ServiceInactiveBanner from "@/components/ServiceInactiveBanner";
import SiteFooter from "@/components/SiteFooter";
import {
  BarChart2, CheckCircle2, ArrowRight, Phone,
  DollarSign, Users, Building, TrendingUp, Shield, Target,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

const highlights = [
  { value: "Pro Report", label: "Written Valuation" },
  { value: "3 Methods", label: "Multiple Approaches" },
  { value: "Bank-Ready", label: "Accepted for Financing" },
];

const includes = [
  "Comprehensive financial analysis of your business",
  "Multiple valuation methods applied",
  "Industry benchmarks and comparable analysis",
  "Written valuation report with full documentation",
  "Presentation-ready format for lenders or buyers",
  "Confidential and professionally prepared",
  "Follow-up consultation to review findings",
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "We discuss your reason for the valuation — sale, financing, succession, dispute — and gather preliminary information about your business structure, industry, and financials." },
  { step: "02", title: "Document Collection", desc: "We collect 3–5 years of financial statements, tax returns, and any relevant operational data. All information is handled with strict confidentiality throughout the process." },
  { step: "03", title: "Analysis & Valuation", desc: "We apply the most appropriate valuation methods — asset-based, income-based, and market comparable — and analyze results in the context of your industry and market conditions." },
  { step: "04", title: "Report Delivery & Review", desc: "We deliver a comprehensive written valuation report and schedule a review session to walk through the findings, explain the methodology, and answer all your questions." },
];

const features = [
  { icon: DollarSign, title: "Selling Your Business", desc: "Know exactly what your business is worth before entering negotiations. A professional valuation establishes a defensible asking price and strengthens your position with buyers." },
  { icon: Building, title: "Buying a Business", desc: "Don't overpay. We evaluate target acquisition businesses independently so you know whether the asking price is reasonable before you commit to a purchase." },
  { icon: Users, title: "Partnership Disputes", desc: "When partners disagree on value — for buyouts, disputes, or ownership transfers — an independent professional valuation provides an objective, defensible number." },
  { icon: TrendingUp, title: "Financing & SBA Loans", desc: "Lenders frequently require a business valuation for SBA loans and commercial financing. Our reports are prepared to bank standards and accepted by most lenders." },
  { icon: Shield, title: "Estate & Succession Planning", desc: "Transferring business ownership through an estate or succession plan requires an accurate valuation for tax and legal purposes. We prepare IRS-compliant valuations for these situations." },
  { icon: Target, title: "Strategic Planning", desc: "Understanding your business value is the starting point for strategic decision-making — investment, expansion, exit planning, or measuring growth over time." },
];

const faqs = [
  { q: "What methods do you use to value a business?", a: "We apply multiple valuation methodologies depending on your business type and purpose: the Income Approach (discounted cash flow or capitalization of earnings), the Market Approach (comparable sales of similar businesses), and the Asset Approach (net asset value). Using multiple methods produces a more accurate and defensible valuation." },
  { q: "How long does a business valuation take?", a: "Most valuations are completed within 2–4 weeks of receiving all required financial documents. The timeline depends on the complexity of your business, the quality of available financial records, and the purpose of the valuation. We'll provide a specific estimate at the outset." },
  { q: "Is the valuation report usable for bank financing?", a: "Yes — our valuation reports are prepared to meet the standards required by most commercial lenders and SBA loan programs. We format reports for professional presentation and include all supporting analysis that lenders typically require for financing decisions." },
  { q: "How accurate is a business valuation?", a: "A business valuation is a professional opinion of value — not a guaranteed sale price. However, using multiple methodologies, current market data, and industry benchmarks produces results that are consistently reliable for negotiation, financing, legal, and tax purposes. We stand behind our methodology and are available to explain or defend our conclusions." },
];

const related = [
  { title: "Bookkeeping", href: "/services/bookkeeping", sub: "Monthly books & reports" },
  { title: "Payroll Services", href: "/services/payroll", sub: "On-time, accurate payroll" },
  { title: "Tax Planning", href: "/services/tax-planning", sub: "Year-round strategy" },
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
];

export default function BusinessValuationPage() {
  return (
    <>
      <HeaderTest />
      <ServiceInactiveBanner slug="business-valuation" />
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
                  <span style={{ color: "#FFF200" }}>Business Valuation</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Business Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Business<br />
                  <span style={{ color: "#FFF200" }}>Valuation</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed">
                  Professional, defensible business valuations for sale, financing, succession, or dispute
                  resolution. We apply multiple valuation methods and deliver a comprehensive written
                  report — ready for banks, buyers, attorneys, or the IRS.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((h) => (
                    <div key={h.label} className="rounded-xl p-3 text-center border"
                      style={{ background: PRIMARY_LIGHT, borderColor: "rgba(255,242,0,0.15)" }}
                    >
                      <div className="text-lg font-bold" style={{ color: "#FFF200" }}>{h.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Request Valuation Quote <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFF200] text-white hover:text-[#FFF200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Confidential · Multiple methods · Bank &amp; lender accepted
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
                      <BarChart2 size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFF200" }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Professional Valuation Package</h3>
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
                From Documents to <span style={{ color: "#FFF200" }}>Definitive Value</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">A structured, professional process that produces a reliable, defensible result.</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, #60A5FA, ${PRIMARY})`, opacity: 0.2 }}
              />
              {steps.map((s, i) => (
                <div key={s.step}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#FFF200] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{ background: i === steps.length - 1 ? PRIMARY : PRIMARY_LIGHT, color: i === steps.length - 1 ? "white" : PRIMARY, borderColor: i === steps.length - 1 ? PRIMARY : "transparent" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFF200] transition-colors mb-2">{s.title}</h3>
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
                Use Cases
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                When You Need a <span style={{ color: "#FFF200" }}>Business Valuation</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                A professional valuation is essential in any situation where the value of your business is at stake.
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
                Common <span style={{ color: "#FFF200" }}>Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#FFF200] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: "#FFF200", color: "#041E42" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFF200] transition-colors mb-2">{faq.q}</h3>
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
              <Link href="/services" className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: "#FFF200" }}>
                View All <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.title} href={r.href}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#FFF200] hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFF200] transition-colors">{r.title}</p>
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
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>Know Your Worth</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Get a Professional Business Valuation You Can Trust
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Whether you&apos;re selling, financing, planning, or resolving a dispute — we deliver a
                  valuation that stands up to scrutiny and gives you confidence at the table.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: PRIMARY, color: "white" }}
                  >
                    Request Valuation Quote <ArrowRight size={17} strokeWidth={2.5} />
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
