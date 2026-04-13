"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import {
  FileText, CheckCircle2, ArrowRight, Phone,
  RotateCcw, DollarSign, AlertTriangle, BadgeCheck, Building, Layers,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const highlights = [
  { value: "3 Years", label: "Back Returns Eligible" },
  { value: "1040-X", label: "Official IRS Form" },
  { value: "Refund", label: "Recovery Possible" },
];

const includes = [
  "Form 1040-X preparation and filing",
  "All affected schedules updated (A, B, C, D, E, etc.)",
  "IRS explanation letter drafted",
  "Up to 3 prior tax years eligible",
  "Corrected W-2 or 1099 handling",
  "Refund status tracking and guidance",
  "Audit protection on the amended return",
];

const steps = [
  { step: "01", title: "Identify What Needs Fixing", desc: "Tell us what changed — missed deduction, wrong filing status, corrected W-2, missed credit, or anything the IRS flagged. We review your original return to confirm what needs to be corrected." },
  { step: "02", title: "Gather Supporting Documents", desc: "We identify every document needed to support the amendment — corrected W-2s, 1099s, receipts, or IRS correspondence. Missing documents? We help you request them." },
  { step: "03", title: "Prepare Form 1040-X", desc: "We prepare the amended return, update all affected schedules, and draft a clear explanation letter for the IRS. Every change is documented and supported." },
  { step: "04", title: "File & Track Your Refund", desc: "We submit your 1040-X and provide tracking guidance. Amended returns typically take 8–12 weeks to process. We follow up on your behalf if additional IRS response is needed." },
];

const features = [
  { icon: BadgeCheck, title: "Wrong Filing Status", desc: "Filing as Single when you qualified as Head of Household — or vice versa — can significantly change your tax liability. We correct filing status and recalculate everything." },
  { icon: DollarSign, title: "Missed Deductions", desc: "Forgot to claim mortgage interest, student loan interest, charitable contributions, or business expenses? We amend your return and recover any refund you were owed." },
  { icon: FileText, title: "Corrected W-2 or 1099", desc: "Received a corrected form after you filed? We update your return with the corrected income figures and recalculate your liability or refund accordingly." },
  { icon: BadgeCheck, title: "Missed Tax Credits", desc: "Credits like the Child Tax Credit, Earned Income Credit, or Education Credits are often missed. We amend to claim what you're entitled to — even years after the original filing." },
  { icon: AlertTriangle, title: "IRS Errors to Dispute", desc: "If the IRS adjusted your return incorrectly, an amended return or formal response is the path to resolution. We draft the correction and handle all IRS correspondence." },
  { icon: Building, title: "Business Income Corrections", desc: "Self-employment income, rental income, or K-1 partnership income that was reported incorrectly — we correct the business schedules and recalculate the full return." },
];

const faqs = [
  { q: "How far back can I amend a tax return?", a: "You generally have 3 years from the original filing deadline (or 2 years from when you paid the tax, whichever is later) to file an amended return and claim a refund. If you owe additional tax, there is no deadline — but it's best to file promptly to minimize interest." },
  { q: "Will amending my return trigger an IRS audit?", a: "Amending a return does not automatically trigger an audit. The IRS selects returns for audit based on statistical formulas and risk indicators — not simply because an amendment was filed. A properly prepared 1040-X with a clear explanation letter actually reduces audit risk." },
  { q: "How long does an amended return take to process?", a: "The IRS currently takes 8–16 weeks to process amended returns. You can check the status using the IRS 'Where's My Amended Return' tool online. If your amendment is straightforward, it may process faster." },
  { q: "What if I owe more taxes after amending?", a: "If the amendment results in additional tax owed, you should pay it as soon as possible to minimize interest (currently around 8% annually). There are no additional penalties for paying voluntarily — the underpayment only becomes a penalty if the IRS discovers it first." },
];

const related = [
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
  { title: "Individual Income Tax", href: "/services/individual-tax", sub: "W-2, retirees, students" },
  { title: "Tax Resolution", href: "/services/tax-resolution", sub: "IRS issues & back taxes" },
  { title: "Audit Support", href: "/services/audit-support", sub: "IRS audit representation" },
];

export default function AmendedReturnsPage() {
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
                  <span style={{ color: PRIMARY }}>Amended Returns</span>
                </nav>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                  >
                    Tax Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]">
                  Amended Tax<br />
                  <span style={{ color: PRIMARY }}>Return Filing</span>
                </h1>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Filed a return with errors, missed deductions, or an incorrect filing status? We prepare
                  and file Form 1040-X to correct your return — and potentially recover a refund you were
                  already owed.
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
                    Amend My Return <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-700 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Up to 3 years back · Refund recovery · Audit protection included
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
                      <RotateCcw size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Complete Amendment Service</h3>
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
                How We <span style={{ color: PRIMARY }}>Fix Your Return</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">A straightforward process to correct errors and recover any refund owed.</p>
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
                Reasons to Amend
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Common <span style={{ color: PRIMARY }}>Correction Scenarios</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Any of these situations may entitle you to a refund or protect you from IRS penalties.
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
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>Recover What You&apos;re Owed</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Something Was Wrong on Your Return — Let&apos;s Fix It
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Don&apos;t leave money on the table or let IRS errors go unaddressed. Our Tax Pros amend
                  returns accurately and handle all IRS communication on your behalf.
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
