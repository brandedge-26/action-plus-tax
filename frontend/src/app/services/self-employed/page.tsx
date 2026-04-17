"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import ServiceInactiveBanner from "@/components/ServiceInactiveBanner";
import SiteFooter from "@/components/SiteFooter";
import {
  Briefcase, CheckCircle2, ArrowRight, Phone,
  Calculator, Home, Car, TrendingUp, FileText, Users,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

const highlights = [
  { value: "Schedule C", label: "Profit & Loss Form" },
  { value: "SE Tax", label: "Calculated & Filed" },
  { value: "All Deductions", label: "Maximized for You" },
];

const includes = [
  "Schedule C preparation (profit & loss)",
  "Self-employment tax calculation (Social Security & Medicare)",
  "Home office deduction — regular and simplified method",
  "Vehicle & mileage deduction tracking",
  "All business expenses reviewed and claimed",
  "Quarterly estimated tax guidance",
  "Federal & state income tax filing",
  "Prior year freelance returns welcome",
];

const steps = [
  { step: "01", title: "Gather 1099s & Records", desc: "Collect all 1099-NEC, 1099-K, and any business income records. Bring expense receipts, mileage logs, and bank statements. Not sure what to bring? Call us first." },
  { step: "02", title: "Tax Pro Analyzes Business", desc: "Your dedicated Tax Pro reviews your income sources, business type, and expenses to map out every deduction and structure your Schedule C for maximum accuracy." },
  { step: "03", title: "Review Deductions Found", desc: "We walk you through every deduction identified — home office, vehicle, supplies, software, and more — so you understand exactly how your taxable income was reduced." },
  { step: "04", title: "File & Minimize Taxes", desc: "We e-file your complete return, including SE tax calculations and estimated payment vouchers for next quarter. Fast, accurate, and fully compliant." },
];

const features = [
  { icon: FileText, title: "Schedule C Expertise", desc: "We prepare Schedule C returns daily. Every line is reviewed for accuracy and every eligible expense category is explored — nothing is left on the table." },
  { icon: Calculator, title: "SE Tax Calculation", desc: "Self-employment tax (15.3%) is calculated precisely. We also claim the deductible half of SE tax on your Form 1040 to reduce your adjusted gross income." },
  { icon: Home, title: "Home Office Deduction", desc: "If you work from home, you may qualify for a significant deduction. We calculate both the regular and simplified methods and apply whichever is most beneficial." },
  { icon: Car, title: "Vehicle & Mileage Deductions", desc: "We compare the standard mileage rate against actual vehicle expenses and apply the method that yields the larger deduction for your specific usage." },
  { icon: TrendingUp, title: "Quarterly Tax Planning", desc: "We calculate your estimated quarterly payments for the upcoming year so you avoid underpayment penalties and stay ahead of your tax obligation all year long." },
  { icon: Users, title: "All Business Entity Types", desc: "Sole proprietor, single-member LLC, or partnership — we handle every structure. We'll also advise if an S-Corp election could reduce your SE tax burden." },
];

const faqs = [
  { q: "What is self-employment tax and how much do I owe?", a: "Self-employment tax covers Social Security (12.4%) and Medicare (2.9%) — a combined 15.3% on your net self-employment income. As a freelancer, you pay both the employee and employer share. We calculate this precisely and help you claim the offsetting deduction on your 1040." },
  { q: "What deductions can I claim as a self-employed person?", a: "Common deductions include home office, vehicle/mileage, business equipment, software subscriptions, professional services, advertising, phone and internet (business portion), health insurance premiums, and retirement contributions. The list varies by business — we find everything that applies to you." },
  { q: "Do I need to pay quarterly estimated taxes?", a: "If you expect to owe $1,000 or more in taxes after withholding, the IRS requires quarterly estimated payments (due April, June, September, and January). Missing these can result in underpayment penalties. We calculate your exact amounts and provide payment vouchers." },
  { q: "What if I have both W-2 income and freelance income?", a: "Very common. We file a combined return that includes your W-2 income, Schedule C for freelance income, and applies credits and deductions across both. Your W-2 withholding may offset some of your self-employment tax liability." },
];

const related = [
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
  { title: "Individual Income Tax", href: "/services/individual-tax", sub: "W-2, retirees, students" },
  { title: "Tax Planning", href: "/services/tax-planning", sub: "Year-round strategy" },
  { title: "Amended Returns", href: "/services/amended-returns", sub: "Fix prior year returns" },
];

export default function SelfEmployedPage() {
  return (
    <>
      <HeaderTest />
      <ServiceInactiveBanner slug="self-employed" />
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
                  <span style={{ color: "#FFF200" }}>Self-Employed Tax</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Tax Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Self-Employed &amp;<br />
                  <span style={{ color: "#FFF200" }}>Freelance Tax</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed">
                  Specialized tax preparation for freelancers, gig workers, independent contractors, and
                  sole proprietors. We maximize your deductions, handle Schedule C and SE tax, and keep
                  you fully compliant — without overpaying a dollar.
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
                    File Self-Employed Taxes <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFF200] text-white hover:text-[#FFF200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  All deductions maximized · Schedule C specialists · SE tax handled
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
                      <Briefcase size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFF200" }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Complete Self-Employment Tax Service</h3>
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
                Simple Steps to <span style={{ color: "#01567E" }}>Filing Correctly</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">We handle the complexity of self-employment taxes so you don&apos;t have to.</p>
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
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Built for the <span style={{ color: "#FFF200" }}>Self-Employed</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                We specialize in the unique tax situation of freelancers and independent contractors.
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
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>Get Started Today</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Stop Overpaying on Self-Employment Taxes
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Our Tax Pros know every deduction available to freelancers and independent contractors.
                  Let us handle the complexity while you focus on your business.
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
