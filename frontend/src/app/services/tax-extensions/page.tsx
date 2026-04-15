"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import {
  Clock, CheckCircle2, ArrowRight, Phone,
  AlertTriangle, Shield, DollarSign, Calendar, FileText, TrendingDown, Calculator,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#0046BE";
const PRIMARY_LIGHT = "#EBF3FF";

const highlights = [
  { value: "6 Months", label: "More Time to File" },
  { value: "Penalty-Free", label: "When Done Correctly" },
  { value: "Same Day", label: "Filing Available" },
];

const includes = [
  "Form 4868 federal extension filing",
  "State extension filing (where applicable)",
  "Tax liability estimate to avoid penalties",
  "Estimated payment guidance",
  "Penalty and interest avoidance strategy",
  "Follow-up filing appointment scheduled",
];

const steps = [
  { step: "01", title: "Contact Us Before the Deadline", desc: "Extensions must be filed by the original tax deadline (typically April 15). Call or walk in — we act fast so you don't miss the window." },
  { step: "02", title: "Estimate Your Tax Liability", desc: "An extension gives you more time to file — not more time to pay. We calculate what you likely owe and help you make a payment to avoid interest and penalties." },
  { step: "03", title: "File Form 4868", desc: "We file your federal extension (and applicable state extensions) electronically the same day. You receive confirmation that the IRS has accepted your extension." },
  { step: "04", title: "Schedule Your Return Appointment", desc: "With your extension locked in, we schedule your full tax return appointment at a time that works for you — no rush, no stress." },
];

const features = [
  { icon: AlertTriangle, title: "What Happens Without Filing", desc: "Missing the tax deadline without an extension results in a failure-to-file penalty of 5% per month on unpaid taxes, up to 25%. An extension completely eliminates this penalty." },
  { icon: Shield, title: "Extension vs. No Extension", desc: "Filing an extension on time costs nothing and buys you up to 6 more months. Not filing — even if you can't pay — triggers steep penalties that compound monthly." },
  { icon: DollarSign, title: "Interest vs. Penalties", desc: "An extension stops the failure-to-file penalty but does not stop interest on unpaid taxes. We help you make an accurate estimated payment to minimize what you owe later." },
  { icon: Calendar, title: "State Extensions Included", desc: "Most states accept the federal extension automatically, but some require a separate state form. We handle both so your state filing is also protected." },
  { icon: Calculator, title: "Estimated Payment Calculation", desc: "We calculate your approximate tax liability based on available income information and determine how much to pay with your extension to avoid underpayment penalties." },
  { icon: TrendingDown, title: "Audit Risk Reduction", desc: "A properly filed extension with an estimated payment reduces your audit exposure compared to a late or missing return. We keep you in good standing with the IRS." },
];

const faqs = [
  { q: "Does a tax extension give me more time to pay?", a: "No — a tax extension gives you more time to file your return, not more time to pay. Any taxes owed are still due by the original deadline (typically April 15). We help you estimate what you owe and make an appropriate payment to avoid interest and underpayment penalties." },
  { q: "How long is a tax extension?", a: "A federal tax extension grants an additional 6 months, moving your filing deadline from April 15 to October 15. Most state extensions follow the same timeline. Note that the extension is automatic — there is no IRS approval required, only a timely filed Form 4868." },
  { q: "Are there any penalties for filing a tax extension?", a: "No — filing an extension itself carries no penalty. The extension eliminates the failure-to-file penalty (5% per month). However, if you owe taxes and don't pay by April 15, you will owe interest (currently ~8% annually) and possibly an underpayment penalty. We minimize this by estimating and paying what's owed upfront." },
  { q: "Do I need to explain why I need an extension?", a: "No explanation is required. Form 4868 is a simple form — you estimate your tax liability, indicate any payment you're making, and submit it. The IRS does not ask for a reason. Any taxpayer can request an extension." },
];

const related = [
  { title: "Tax Preparation", href: "/services/tax-preparation", sub: "Full-service filing" },
  { title: "Amended Returns", href: "/services/amended-returns", sub: "Fix prior year returns" },
  { title: "Tax Resolution", href: "/services/tax-resolution", sub: "IRS issues & back taxes" },
  { title: "Individual Income Tax", href: "/services/individual-tax", sub: "W-2, retirees, students" },
];

export default function TaxExtensionsPage() {
  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-0" style={{ background: "#0046BE" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,194,0,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-14 lg:py-20">

              {/* Left */}
              <div className="flex flex-col gap-6">
                <nav className="flex items-center gap-1.5 text-xs text-white/50">
                  <Link href="/" className="hover:text-[#FFC200] transition-colors">Home</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <Link href="/services" className="hover:text-[#FFC200] transition-colors">Services</Link>
                  <ChevronRight size={11} strokeWidth={2.5} />
                  <span style={{ color: "#FFC200" }}>Tax Extensions</span>
                </nav>

                {/* Warning Banner */}
                <div className="flex items-start gap-3 rounded-xl px-4 py-3 border border-orange-200 bg-orange-50">
                  <AlertTriangle size={16} strokeWidth={2} className="text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-orange-700 font-medium leading-relaxed">
                    <span className="font-bold">Important:</span> An extension gives you more time to FILE — not more time to PAY. Taxes owed are still due by the original deadline.
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "#FFC200", color: "#001A57" }}
                  >
                    Tax Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Tax Extension<br />
                  <span style={{ color: "#FFC200" }}>Filing Service</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed">
                  Not ready to file by the deadline? We file your extension the same day, estimate your tax
                  liability to avoid penalties, and schedule your return appointment at your convenience.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((h) => (
                    <div key={h.label} className="rounded-xl p-3 text-center border"
                      style={{ background: PRIMARY_LIGHT, borderColor: "rgba(255,194,0,0.15)" }}
                    >
                      <div className="text-lg font-bold" style={{ color: "#FFC200" }}>{h.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{h.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: "#FFC200", color: "#001A57" }}
                  >
                    File My Extension Now <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFC200] text-white hover:text-[#FFC200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} /> 912-559-2222
                  </a>
                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                  Same-day filing · Federal &amp; state · Penalty avoidance strategy
                </p>
              </div>

              {/* Right — dark card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-3xl p-8 border" style={{ background: "#001A57", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.12]" aria-hidden="true"
                    style={{ backgroundImage: `linear-gradient(rgba(255,194,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,194,0,0.25) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFC200" }}>What&apos;s Included</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Everything in Our Extension Service</h3>
                    <ul className="space-y-3.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(255,194,0,0.15)" }}
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
        <section className="py-20 lg:py-28" style={{ background: "#F4F7FF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFC200", color: "#001A57" }}
              >
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Fast, Simple <span style={{ color: "#FFC200" }}>Extension Filing</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">We file your extension the same day — before the deadline passes.</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, #60A5FA, ${PRIMARY})`, opacity: 0.2 }}
              />
              {steps.map((s, i) => (
                <div key={s.step}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#FFC200] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{ background: i === steps.length - 1 ? PRIMARY : PRIMARY_LIGHT, color: i === steps.length - 1 ? "white" : PRIMARY, borderColor: i === steps.length - 1 ? PRIMARY : "transparent" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFC200] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#001A57" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,194,0,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(255,194,0,0.15)", color: PRIMARY }}
              >
                What You Need to Know
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Extension Filing <span style={{ color: "#FFC200" }}>Explained</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Understanding extensions helps you avoid costly mistakes and stay in good standing with the IRS.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group rounded-2xl p-6 border transition-all hover:border-[#FFC200] flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#FFC200", color: "#001A57" }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFC200] transition-colors">{item.title}</h3>
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
                style={{ background: "#FFC200", color: "#001A57" }}
              >
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Common <span style={{ color: "#FFC200" }}>Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#FFC200] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: "#FFC200", color: "#001A57" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFC200] transition-colors mb-2">{faq.q}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ── */}
        <section className="py-16 lg:py-20" style={{ background: "#F4F7FF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-[#0A0A0A]">Related Services</h3>
              <Link href="/services" className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: "#FFC200" }}>
                View All <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.title} href={r.href}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#FFC200] hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FFC200] transition-colors">{r.title}</p>
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
            <div className="relative rounded-3xl overflow-hidden px-10 sm:px-16 py-16 text-center" style={{ background: "#001A57" }}>
              <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true"
                style={{ backgroundImage: `linear-gradient(rgba(255,194,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,194,0,0.25) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,194,0,0.2) 0%, transparent 70%)" }}
              />
              <div className="h-[2px] w-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }}
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFC200" }}>Don&apos;t Miss the Deadline</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  File Your Extension Today — Same Day Service
                </h2>
                <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
                  Call us or walk in before the deadline. We file your extension immediately and take the
                  stress off your plate while you prepare to file your full return.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: PRIMARY, color: "white" }}
                  >
                    File Extension Now <ArrowRight size={17} strokeWidth={2.5} />
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

