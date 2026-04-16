"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import ServiceInactiveBanner from "@/components/ServiceInactiveBanner";
import SiteFooter from "@/components/SiteFooter";
import {
  Users, CheckCircle2, ArrowRight, Phone,
  Clock, DollarSign, FileText, Calendar, Layers, BadgeCheck,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

const highlights = [
  { value: "On-Time", label: "Every Pay Period" },
  { value: "Tax Deposits", label: "Handled for You" },
  { value: "W-2 Ready", label: "Year-End Prep" },
];

const includes = [
  "Bi-weekly, semi-monthly, or monthly payroll processing",
  "Federal and state tax withholding calculation",
  "Tax deposits and quarterly filings (Form 941)",
  "Direct deposit setup and management",
  "Year-end W-2 and 1099 preparation",
  "New hire reporting to state agencies",
  "Dedicated payroll specialist",
  "Payroll reports and records maintained",
];

const steps = [
  { step: "01", title: "Onboarding & Setup", desc: "We collect your employee information, pay rates, and tax IDs. Your payroll schedule is configured to your business — weekly, bi-weekly, or semi-monthly. Setup is typically complete within 3–5 business days." },
  { step: "02", title: "Process Each Pay Period", desc: "Submit hours or approve salaries each cycle. We calculate gross pay, withholdings (federal, state, Social Security, Medicare), deductions, and net pay for each employee." },
  { step: "03", title: "Tax Deposits & Filings", desc: "All required federal and state tax deposits are made on time. We file Form 941 quarterly and handle all payroll tax compliance so you never miss a deadline." },
  { step: "04", title: "Year-End W-2 & Reports", desc: "We prepare and distribute W-2s to all employees and file with the SSA by January 31. Year-end payroll summaries are provided for your records and tax return." },
];

const features = [
  { icon: Clock, title: "Accurate, On-Time Processing", desc: "Employees are paid on schedule, every time. We handle the calculations, deductions, and direct deposit so your payroll never misses a beat." },
  { icon: DollarSign, title: "Payroll Tax Deposits", desc: "Federal and state payroll tax deposits are made according to your deposit schedule (monthly or semi-weekly). Late deposits trigger IRS penalties — we make sure it never happens." },
  { icon: Layers, title: "Direct Deposit Management", desc: "We set up and manage direct deposit for all employees. Funds hit accounts on payday — no paper checks, no delays." },
  { icon: Calendar, title: "Quarterly Payroll Reports", desc: "Form 941 is filed each quarter. We handle all reporting to the IRS and state agencies, keeping your business in full compliance without any effort on your part." },
  { icon: FileText, title: "W-2 Preparation", desc: "Year-end W-2s are prepared for every employee and filed with the Social Security Administration. Employees receive their forms on time, every year." },
  { icon: BadgeCheck, title: "New Hire Reporting", desc: "Federal and state law requires new hire reporting within days of a new employee's start date. We submit reports on your behalf so you stay compliant from day one." },
];

const faqs = [
  { q: "What size businesses do you serve?", a: "We work with businesses of all sizes — from solo S-Corp owners running payroll for themselves to companies with 50+ employees. Our service scales to your needs and payroll frequency without requiring you to manage any of the compliance details." },
  { q: "What if I miss a payroll tax deposit deadline?", a: "Late payroll tax deposits can result in IRS penalties of 2%–15% depending on how late the payment is. When you use our payroll service, we handle all deposits on your behalf and guarantee they are submitted on time. We track your deposit schedule and act before deadlines." },
  { q: "Can you set up direct deposit for my employees?", a: "Yes — direct deposit setup is included in our payroll service. Employees provide their bank information once, and from that point forward their net pay is deposited automatically on payday. We handle all ACH transactions and provide employees with digital pay stubs." },
  { q: "What about year-end tax forms?", a: "W-2s for all employees and 1099s for contractors are prepared, distributed, and filed with the appropriate agencies by January 31. We also provide a complete year-end payroll summary that feeds directly into your business tax return — no additional work required from you." },
];

const related = [
  { title: "Bookkeeping", href: "/services/bookkeeping", sub: "Monthly books & reports" },
  { title: "Business Valuation", href: "/services/business-valuation", sub: "Know your business worth" },
  { title: "Tax Planning", href: "/services/tax-planning", sub: "Year-round strategy" },
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
];

export default function PayrollPage() {
  return (
    <>
      <HeaderTest />
      <ServiceInactiveBanner slug="payroll" />
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
                  <span style={{ color: "#FFF200" }}>Payroll Services</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Business Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Payroll<br />
                  <span style={{ color: "#FFF200" }}>Services</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed">
                  Full-service payroll processing for businesses of any size. We handle pay calculations,
                  tax deposits, filings, direct deposit, and year-end W-2s — so your employees are paid
                  right and you stay compliant without the hassle.
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
                    Set Up My Payroll <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFF200] text-white hover:text-[#FFF200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  On-time every cycle · Tax deposits handled · W-2s included
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
                      <Users size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFF200" }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Complete Payroll Management</h3>
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
                How We <span style={{ color: "#FFF200" }}>Manage Your Payroll</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">Setup is fast. After that, payroll runs like clockwork — every pay period.</p>
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
                What We Handle
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Full-Spectrum <span style={{ color: "#FFF200" }}>Payroll Coverage</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Every component of payroll — from processing to compliance — handled under one roof.
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
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>Get Started Today</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Pay Your Team Right — Every Single Time
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Let us take payroll off your plate completely. We handle processing, deposits, filings,
                  and year-end forms so you can focus on growing your business.
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
