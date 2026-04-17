"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import {
  FileText, User, ReceiptText, Bitcoin, Timer, FilePen,
  ShieldAlert, ShieldCheck, CalendarCheck, BookOpen, Users,
  BarChart3, DollarSign, Package, ArrowRight, Phone,
  CheckCircle2, Star, Clock, BadgeCheck, ChevronRight,
} from "lucide-react";

const PRIMARY = "#01567E";
const DARK = "#041E42";

const stats = [
  { value: "10+",    label: "Years in Business",    sub: "Family-owned since 2012" },
  { value: "500+",   label: "Clients Served",        sub: "Individuals & businesses" },
  { value: "$6,000", label: "Max Refund Advance",    sub: "Same-day, no credit check" },
  { value: "100%",   label: "Transparent Pricing",   sub: "No hidden fees — ever" },
];

const allServices = [
  {
    id: "tax-services",
    category: "Tax Services",
    image: "/images/services-tax.jpg",
    color: PRIMARY,
    tagline: "From simple W-2s to complex self-employment returns — accurate, thorough, and maximized every time.",
    services: [
      { icon: FileText,    title: "Tax Preparation & Filing",     sub: "Federal & state, all income types",       badge: "Most Popular", href: "/services/tax-preparation" },
      { icon: User,        title: "Individual Income Tax Filing", sub: "W-2, 1099, retirees, students",          badge: null,           href: "/services/individual-tax" },
      { icon: ReceiptText, title: "Self-Employed / Freelance Tax",sub: "Schedule C, SE tax, all deductions",    badge: null,           href: "/services/self-employed" },
      { icon: Bitcoin,     title: "Crypto & Investment Tax",      sub: "Form 8949, NFTs, staking, DeFi",        badge: null,           href: "/services/crypto-tax" },
      { icon: Timer,       title: "Tax Extensions",               sub: "Form 4868, penalty-free filing",        badge: null,           href: "/services/tax-extensions" },
      { icon: FilePen,     title: "Amended Tax Returns",          sub: "1040-X, up to 3 prior years",          badge: null,           href: "/services/amended-returns" },
    ],
  },
  {
    id: "tax-resolution",
    category: "Tax Resolution",
    image: "/images/services-resolution.jpg",
    color: "#DC2626",
    tagline: "Facing back taxes, liens, garnishments, or audits? Our Tax Pros represent you directly with the IRS.",
    services: [
      { icon: ShieldAlert, title: "Tax Resolution & IRS Support", sub: "Back taxes, liens, payment plans",      badge: "Free Consult", href: "/services/tax-resolution" },
      { icon: ShieldCheck, title: "IRS Audit Support",            sub: "Full representation, all audit types", badge: null,           href: "/services/audit-support" },
    ],
  },
  {
    id: "tax-planning",
    category: "Tax Planning",
    image: "/images/services-planning.jpg",
    color: "#0891B2",
    tagline: "Year-round strategic planning to legally reduce your tax burden before it's due.",
    services: [
      { icon: CalendarCheck, title: "Tax Planning Services", sub: "Year-round strategy & quarterly planning", badge: null, href: "/services/tax-planning" },
    ],
  },
  {
    id: "business-services",
    category: "Business Services",
    image: "/images/services-business.jpg",
    color: "#059669",
    tagline: "Bookkeeping, payroll, and valuation — everything your business needs to stay financially healthy.",
    services: [
      { icon: BookOpen,   title: "Bookkeeping Services", sub: "Monthly books, P&L, reconciliation",       badge: null, href: "/services/bookkeeping" },
      { icon: Users,      title: "Payroll Services",     sub: "Processing, W-2s, tax deposits",          badge: null, href: "/services/payroll" },
      { icon: BarChart3,  title: "Business Valuation",   sub: "Sale, financing, estate planning",         badge: null, href: "/services/business-valuation" },
    ],
  },
  {
    id: "financial-products",
    category: "Financial Products",
    image: "/images/services-hero.jpg",
    color: "#D97706",
    tagline: "Access your refund the same day you file — no credit check, no interest, no waiting.",
    services: [
      { icon: DollarSign, title: "Refund Advance",  sub: "Up to $6,000, same day, no credit check",   badge: "Get Cash Fast", href: "/services/refund-advance" },
      { icon: Package,    title: "Drop Off & Go",   sub: "No appointment, open late & weekends",       badge: null,           href: "/services/drop-off" },
    ],
  },
];

const trustItems = [
  { icon: BadgeCheck, title: "Biggest Refund Guaranteed",  desc: "We find every deduction — or we refund our fee." },
  { icon: ShieldCheck, title: "Audit Protection Included", desc: "IRS issues after filing? We handle it, no extra charge." },
  { icon: Star,        title: "10+ Years of Expertise",    desc: "Trained in-house Tax Pros with over a decade of experience." },
  { icon: Clock,       title: "Open Late & Weekends",      desc: "Mon–Fri until 7PM · Saturday until 6PM. Walk-ins welcome." },
];

export default function ServicesPage() {
  const [activeSlugs, setActiveSlugs] = useState<Set<string> | null>(null);

  useEffect(() => {
    fetch("http://localhost:5510/api/services")
      .then(r => r.json())
      .then(data => {
        const slugs = (data.services ?? []).map((s: { slug: string }) => s.slug);
        setActiveSlugs(new Set(slugs));
      })
      .catch(() => {
        const allSlugs = allServices.flatMap(g => g.services.map(s => s.href.replace("/services/", "")));
        setActiveSlugs(new Set(allSlugs));
      });
  }, []);

  const visibleServices = activeSlugs === null
    ? allServices
    : allServices
        .map(group => ({ ...group, services: group.services.filter(s => activeSlugs.has(s.href.replace("/services/", ""))) }))
        .filter(group => group.services.length > 0);

  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero with Image Background ── */}
        <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          {/* Background image */}
          <Image
            src="/images/services-hero.jpg"
            alt="Tax professional services"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(4,30,66,0.92) 0%, rgba(1,86,126,0.82) 60%, rgba(4,30,66,0.88) 100%)" }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ background: "#FFF200", color: DARK }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PRIMARY }} />
              Serving Jesup, GA &amp; Surrounding Areas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Complete Tax &amp; Financial<br />
              <span style={{ color: "#FFF200" }}>Services Under One Roof</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              From your first filing to complex IRS resolution — our certified Tax Pros handle everything
              accurately, efficiently, and at transparent flat-rate pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90 shadow-lg"
                style={{ background: "#FFF200", color: DARK }}
              >
                Get Free Consultation <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <a href="tel:9125592222"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/70 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Phone size={16} strokeWidth={2} /> 912-559-2222
              </a>
            </div>

            {/* Quick nav pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {visibleServices.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 hover:border-white/60 text-white/70 hover:text-white transition-all"
                >
                  <ChevronRight size={11} strokeWidth={2.5} />
                  {cat.category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="relative py-10 overflow-hidden" style={{ background: DARK }}>
          <div className="h-[2px] w-full absolute top-0"
            style={{ background: `linear-gradient(90deg, transparent 0%, #FFF200 30%, rgba(255,255,255,0.5) 50%, #FFF200 70%, transparent 100%)` }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center py-6 px-4">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#FFF200" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Sections ── */}
        {visibleServices.map((cat, ci) => (
          <section key={cat.id} id={cat.id} className="py-16 lg:py-20 overflow-hidden"
            style={{ background: ci % 2 === 0 ? "#F8FAFC" : "white" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-5 gap-10 lg:gap-16 items-start ${ci % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>

                {/* Image column */}
                <div className={`lg:col-span-2 ${ci % 2 !== 0 ? "lg:col-start-4" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ height: "340px" }}>
                    <Image
                      src={cat.image}
                      alt={cat.category}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,30,66,0.7) 0%, rgba(4,30,66,0.1) 60%, transparent 100%)" }} />
                    {/* Category badge */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: cat.color, color: "#fff" }}
                      >
                        {cat.category}
                      </span>
                      <p className="text-white text-sm font-medium mt-2 leading-relaxed">{cat.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Cards column */}
                <div className={`lg:col-span-3 ${ci % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className={`grid gap-3 ${
                    cat.services.length === 1 ? "grid-cols-1" :
                    cat.services.length === 2 ? "sm:grid-cols-2" :
                    "sm:grid-cols-2"
                  }`}>
                    {cat.services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.title} href={s.href}
                          className="group relative bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 overflow-hidden"
                          style={{ border: "1px solid #E2E8F0" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = PRIMARY; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; }}
                        >
                          {/* Top accent */}
                          <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                            style={{ background: `linear-gradient(90deg, ${PRIMARY}, #0891B2)` }}
                          />

                          {s.badge && (
                            <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full"
                              style={{ background: "#FFF200", color: DARK }}
                            >
                              {s.badge}
                            </span>
                          )}

                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                              style={{ background: `${cat.color}18`, color: cat.color }}
                            >
                              <Icon size={20} strokeWidth={1.8} />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors leading-tight">
                                {s.title}
                              </h3>
                              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: PRIMARY }}>
                            Learn More <ArrowRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Why Choose Us ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: DARK }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(255,242,0,0.15)", color: "#FFF200" }}
              >
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The Action Plus Tax <span style={{ color: "#FFF200" }}>Difference</span>
              </h2>
              <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
                We are not a tax machine. We are Tax Pros who genuinely care about your outcome.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group rounded-2xl p-6 border transition-all hover:border-[#FFF200] flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#FFF200", color: DARK }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFF200] transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 lg:py-24" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFF200", color: DARK }}
              >
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                Getting Started Is <span style={{ color: PRIMARY }}>Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">Four easy steps — and we handle most of the work for you.</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, #60A5FA, ${PRIMARY})`, opacity: 0.2 }}
              />
              {[
                { step: "01", title: "Contact or Walk In",  desc: "Call, book online, or walk in during business hours. No appointment necessary." },
                { step: "02", title: "Meet Your Tax Pro",   desc: "A dedicated Tax Pro reviews your documents and identifies every available deduction." },
                { step: "03", title: "Review Your Return",  desc: "We walk you through the completed return line-by-line before you sign anything." },
                { step: "04", title: "File & Get Paid",     desc: "We e-file your return. Get your refund in days — or get a same-day advance up to $6,000." },
              ].map((s) => (
                <div key={s.step}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#01567E] hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                    style={{ background: "#FFF200", color: DARK }}
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

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden" style={{ background: DARK }}>
              <div className="absolute inset-0 pointer-events-none opacity-15" style={{
                backgroundImage: `linear-gradient(rgba(255,242,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,242,0,0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }} />
              <div className="h-[2px] w-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }}
              />

              <div className="relative grid lg:grid-cols-2 gap-0">
                <div className="px-10 sm:px-16 py-16">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>
                    Ready to Get Started?
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                    Not Sure Which Service You Need?
                  </h2>
                  <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
                    Book a free consultation — no pressure, no obligation. Our Tax Pros review your
                    situation and recommend exactly what you need.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/consultation"
                      className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                      style={{ background: PRIMARY, color: "white" }}
                    >
                      Book Free Consultation <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                    <a href="tel:9125592222"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 font-bold px-7 py-3.5 rounded-xl text-base text-white transition-all"
                    >
                      <Phone size={15} strokeWidth={2} /> 912-559-2222
                    </a>
                  </div>
                </div>

                <div className="px-10 sm:px-16 py-16 border-t lg:border-t-0 lg:border-l" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#FFF200" }}>Why Clients Choose Us</p>
                  <ul className="space-y-4">
                    {[
                      "Certified Tax Pros with 10+ years experience",
                      "Biggest refund guaranteed — or we refund our fee",
                      "IRS representation included with every filing",
                      "Transparent flat pricing — know before you start",
                      "Open late weekdays & Saturdays, walk-ins welcome",
                      "Refund advance up to $6,000 — same day, no credit check",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={15} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
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
