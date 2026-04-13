"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import {
  BookOpen, CheckCircle2, ArrowRight, Phone,
  BarChart2, RefreshCw, FileText, DollarSign, Users, Layers,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const highlights = [
  { value: "Monthly", label: "Books Updated" },
  { value: "Clean Reports", label: "P&L & Balance Sheet" },
  { value: "Tax-Ready", label: "Year-End Coordination" },
];

const includes = [
  "Monthly transaction recording and categorization",
  "Bank and credit card reconciliation",
  "Profit & loss statement and balance sheet",
  "Accounts payable and receivable tracking",
  "Payroll integration support",
  "Cloud-based access via QuickBooks or similar",
  "Year-end coordination with your tax return",
  "QuickBooks setup and ongoing support",
];

const steps = [
  { step: "01", title: "Connect Your Accounts", desc: "We set up your bookkeeping system and connect your bank accounts, credit cards, and payment platforms. QuickBooks setup is included. Most clients are fully set up within a week." },
  { step: "02", title: "Monthly Bookkeeping", desc: "Every month, we record and categorize all transactions, reconcile your accounts, and prepare updated financial statements. Your books are always current." },
  { step: "03", title: "Review & Reporting", desc: "We deliver monthly P&L and balance sheet reports with clear summaries. You always know where your business stands financially — without digging through spreadsheets." },
  { step: "04", title: "Tax-Ready Year-End", desc: "At year-end, we coordinate your finalized books with our tax team. No scrambling for records — your return is prepared from clean, verified financials." },
];

const features = [
  { icon: Layers, title: "Monthly Transaction Recording", desc: "Every income and expense is recorded, categorized, and matched to the correct account. No more guessing or manually sorting through statements at tax time." },
  { icon: RefreshCw, title: "Bank Reconciliation", desc: "We reconcile all bank and credit card accounts monthly. This ensures your books match your actual account balances and catches errors before they compound." },
  { icon: BarChart2, title: "Financial Statements", desc: "Monthly profit & loss statements and balance sheets give you a clear picture of your business performance. Reports are formatted for easy reading — no accounting degree required." },
  { icon: DollarSign, title: "Accounts Receivable & Payable", desc: "We track who owes you and what you owe. Aging reports help you follow up on overdue invoices and manage vendor payments without missing due dates." },
  { icon: Users, title: "Payroll Integration", desc: "We work with your payroll provider to ensure payroll entries are properly recorded in your books. No duplication, no gaps — payroll flows cleanly into your financial records." },
  { icon: FileText, title: "Tax-Ready Books", desc: "Clean books mean an accurate, faster tax return. We coordinate directly with our tax team at year-end so your return is prepared from verified, complete financial records." },
];

const faqs = [
  { q: "Why do I need professional bookkeeping?", a: "Accurate books are the foundation of every good business decision — and every accurate tax return. Poor bookkeeping leads to missed deductions, incorrect financial statements, cash flow surprises, and audit risk. Professional bookkeeping eliminates all of these problems and pays for itself at tax time." },
  { q: "How often will my books be updated?", a: "We update books monthly as a standard. For higher-volume businesses or those requiring more frequent reporting, we offer weekly bookkeeping. You always have access to your books through your cloud-based accounting platform." },
  { q: "What software do you use?", a: "We primarily work with QuickBooks Online, which we can set up and manage on your behalf. We can also work with other platforms depending on your existing setup. If you don't have software yet, we'll recommend the right tool for your business size and industry." },
  { q: "Will clean books actually help at tax time?", a: "Dramatically. When your books are accurate and well-organized, your tax return is completed faster, with fewer questions, and more confidence that every deduction is captured. Clients with professional bookkeeping consistently pay less in tax preparation fees and receive their returns sooner." },
];

const related = [
  { title: "Payroll Services", href: "/services/payroll", sub: "On-time, accurate payroll" },
  { title: "Business Valuation", href: "/services/business-valuation", sub: "Know your business worth" },
  { title: "Tax Planning", href: "/services/tax-planning", sub: "Year-round strategy" },
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
];

export default function BookkeepingPage() {
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
                <nav className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Link href="/" className="hover:text-[#9245FF] transition-colors">Home</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <Link href="/services" className="hover:text-[#9245FF] transition-colors">Services</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <span style={{ color: PRIMARY }}>Bookkeeping</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                  >
                    Business Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                  Professional<br />
                  <span style={{ color: PRIMARY }}>Bookkeeping</span>
                </h1>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Accurate, organized financial records delivered monthly. We handle the books so you can
                  focus on running your business — and arrive at tax season fully prepared with clean,
                  tax-ready financials.
                </p>

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
                    Get Started Today <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-700 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Monthly books · QuickBooks support · Tax-ready financials
                </p>
              </div>

              {/* Right — dark card */}
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
                      <BookOpen size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Complete Monthly Bookkeeping</h3>
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

        {/* ── Process ── */}
        <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
              >
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Getting Your Books <span style={{ color: PRIMARY }}>In Order</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">From setup to monthly delivery — we handle everything so your records are always current.</p>
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

        {/* ── Features ── */}
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
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Everything Your <span style={{ color: PRIMARY }}>Books Need</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Comprehensive bookkeeping that keeps your business financial records accurate, complete, and ready for any purpose.
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
                  Clean Books Mean Better Decisions — and a Better Tax Return
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Stop managing spreadsheets and scrambling at year-end. Let us handle your books monthly
                  so you always know where your business stands.
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
