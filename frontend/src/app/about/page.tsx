"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Cpu,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Heart,
  Eye,
  Star,
  Clock,
  ShieldCheck,
  Users,
  DollarSign,
  Phone,
} from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2012", label: "Year Founded", sub: "Family-owned since day one" },
  { value: "10+", label: "Years Experience", sub: "Proven track record" },
  { value: "500+", label: "Clients Served", sub: "Individuals & businesses" },
  { value: "$6,000", label: "Max Refund Advance", sub: "No credit score impact" },
];

const timeline = [
  {
    year: "2012",
    icon: Building2,
    title: "Founded as Liberty Tax",
    desc: "Action Plus Tax Company began as a family-owned and operated income tax preparation business under the name Liberty Tax in Jesup, GA.",
  },
  {
    year: "2013",
    icon: TrendingUp,
    title: "Refund Advances Launched",
    desc: "Partnered with Republic Bank to launch tax refund advances — giving clients access to up to $6,000 fast with no credit score impact.",
  },
  {
    year: "2014",
    icon: GraduationCap,
    title: "Tax School Added",
    desc: "Opened an in-house income tax school to train and develop skilled Tax Pros from within the community, building lasting expertise.",
  },
  {
    year: "2015",
    icon: Cpu,
    title: "Joined Drake Software",
    desc: "Transitioned from manual to computer-based tax return completion, significantly increasing accuracy, speed, and efficiency.",
  },
  {
    year: "2017",
    icon: MapPin,
    title: "Geographic Expansion",
    desc: "Expanded beyond the original Jesup, GA office to serve clients in other cities and counties across the region.",
  },
  {
    year: "Today",
    icon: CheckCircle2,
    title: "Action Plus Tax",
    desc: "Now a modern, technology-forward tax firm trusted by hundreds of individuals and businesses — and still proudly family-owned.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    desc: "Every decision starts with what is best for you. We treat every client like family — because most of our clients are.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "No surprise fees, ever. You know the exact price before we begin. What we quote is what you pay — guaranteed.",
  },
  {
    icon: Star,
    title: "Deep Expertise",
    desc: "Over 10 years of hands-on tax experience across individual, self-employed, and business filings. We have seen it all.",
  },
  {
    icon: Clock,
    title: "On Your Timeline",
    desc: "Open late weekdays and Saturdays. Walk-ins welcome. We work around your schedule, not the other way around.",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Biggest Refund, Guaranteed",
    desc: "We dig deep into every deduction and credit to make sure you keep as much money as possible.",
  },
  {
    icon: DollarSign,
    title: "Refund Advance up to $6,000",
    desc: "Need money fast? Get a refund advance on a prepaid card with no impact on your credit score.",
  },
  {
    icon: Users,
    title: "One-on-One Attention",
    desc: "No call centers. You work directly with a dedicated Tax Pro who knows your situation.",
  },
  {
    icon: CheckCircle2,
    title: "IRS & Audit Support",
    desc: "Facing an IRS letter or audit? We handle it for you — from response to resolution.",
  },
  {
    icon: GraduationCap,
    title: "Trained In-House Experts",
    desc: "Our Tax Pros are trained at our own tax school, ensuring consistent, high-quality service every time.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Mon–Fri until 7PM and Saturdays until 6PM — because we know your time is valuable.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-0" style={{ background: "#01567E" }}>
          {/* Grid bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          {/* Top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-20">

              {/* Left — Text */}
              <div className="flex flex-col gap-6">
                <span
                  className="inline-flex items-center self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "#FFF200", color: "#041E42" }}
                >
                  About Us
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white tracking-tight leading-[1.1]">
                  A Family Business Built on{" "}
                  <span style={{ color: "#FFF200" }}>Trust &amp; Expertise</span>
                </h1>

                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  Action Plus Tax began as a family-owned tax firm in Jesup, GA in 2012.
                  Over a decade later we still put every client first — expert help,
                  transparent pricing, and results you can count on.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: "#FFF200", color: "#041E42" }}
                  >
                    Book Consultation
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <a
                    href="tel:9125592222"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#FFF200] text-white hover:text-[#FFF200] font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
                  >
                    <Phone size={16} strokeWidth={2} />
                    912-559-2222
                  </a>
                </div>
              </div>

              {/* Right — Hero image */}
              <div className="relative hidden lg:block">
                {/* Glow behind image */}
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,242,0,0.1) 0%, transparent 70%)" }}
                />

                {/* Photo card */}
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Image
                    src="/images/about-hero.jpg"
                    alt="Action Plus Tax professional tax advisor"
                    width={620}
                    height={460}
                    className="w-full object-cover"
                    style={{ height: "440px" }}
                    priority
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(4,30,66,0.75) 0%, rgba(4,30,66,0.1) 50%, transparent 100%)" }}
                  />

                  {/* Floating info card */}
                  <div
                    className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl flex items-center gap-4"
                    style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", backdropFilter: "blur(12px)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: PRIMARY }}
                    >
                      <ShieldCheck size={22} strokeWidth={2} style={{ color: "#fff" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>IRS-Authorized E-File Provider</p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>Family-owned since 2012 · Serving GA & nationwide</p>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                      style={{ background: "#dcfce7", color: "#16a34a" }}
                    >
                      ● Verified
                    </span>
                  </div>
                </div>

                {/* Floating rating badge */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl flex items-center gap-2.5"
                  style={{ background: "#041E42", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
                >
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[1,2,3,4,5].map((s) => <Star key={s} size={11} strokeWidth={0} fill="#FFF200" />)}
                    </div>
                    <p className="text-[11px] font-bold text-white">4.9 / 5.0</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>500+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section
          className="relative py-12 overflow-hidden"
          style={{ background: "#041E42" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="h-[2px] w-full absolute top-0"
            style={{ background: `linear-gradient(90deg, transparent 0%, #FFF200 30%, rgba(255,255,255,0.5) 50%, #FFF200 70%, transparent 100%)` }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center py-8 px-4"
                  style={{ background: "#041E42" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#FFF200" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left — team image */}
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(1,86,126,0.07) 0%, transparent 70%)" }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0" }}
                >
                  <Image
                    src="/images/about-team.jpg"
                    alt="Action Plus Tax team working with clients"
                    width={640}
                    height={460}
                    className="w-full object-cover"
                    style={{ height: "420px" }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(4,30,66,0.55) 0%, transparent 55%)" }}
                  />
                  {/* Bottom label */}
                  <div
                    className="absolute bottom-5 left-5 right-5 p-4 rounded-xl flex items-center gap-3"
                    style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", backdropFilter: "blur(8px)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#FFF200" }}
                    >
                      <Users size={18} strokeWidth={2} style={{ color: "#041E42" }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>Our Tax Pros</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>Trained in-house · One-on-one attention for every client</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center"
                  style={{ background: PRIMARY, boxShadow: "0 8px 28px rgba(1,86,126,0.35)" }}
                >
                  <span className="text-3xl font-bold text-white leading-none">500+</span>
                  <span className="text-[10px] font-bold text-white/70 mt-1 leading-tight">Clients<br />Served</span>
                </div>
              </div>

              {/* Right — text + highlight blocks */}
              <div>
                <span
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "#FFF200", color: "#041E42" }}
                >
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-5">
                  Making Tax Season{" "}
                  <span style={{ color: PRIMARY }}>Simple & Stress-Free</span>
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-5">
                  We believe every person deserves expert tax help — not just those who can afford big firms.
                  That is why we built Action Plus Tax: a place where you get personalized attention,
                  honest pricing, and real results.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  From your very first filing to complex IRS resolution, our Tax Pros are in your corner
                  every step of the way. We handle the paperwork. You keep the refund.
                </p>

                {/* 2x2 highlight blocks */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Personalized", text: "One-on-one Tax Pro for every client" },
                    { label: "Guaranteed", text: "Biggest possible refund, every time" },
                    { label: "Transparent", text: "Know the price before we begin" },
                    { label: "Accessible", text: "Open late & weekends, walk-ins welcome" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl p-5 border border-gray-100 hover:border-[#01567E] hover:shadow-md transition-all group"
                    >
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: PRIMARY }}
                      >
                        {item.label}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 lg:py-28" style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <span
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFF200", color: "#041E42" }}
              >
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                From Liberty Tax to{" "}
                <span style={{ color: PRIMARY }}>Action Plus Tax</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Over a decade of growth, technology, and community service.
              </p>
            </div>

            {/* Timeline grid */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center vertical line */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
                style={{
                  background: "linear-gradient(to bottom, transparent 0%, rgba(255,242,0,0.2) 10%, rgba(255,242,0,0.2) 90%, transparent 100%)",
                }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  const isEven = i % 2 === 0;
                  const isLast = i === timeline.length - 1;

                  return (
                    <div
                      key={item.year}
                      className={`relative flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Content card — half width on desktop */}
                      <div className={`flex-1 md:w-[calc(50%-3rem)] md:flex-none ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <div
                          className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#01567E]/50 hover:shadow-md transition-all"
                        >
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-2"
                            style={{ background: "#FFF200", color: "#041E42" }}
                          >
                            {item.year}
                          </span>
                          <h3 className="text-base font-bold text-[#0A0A0A] mb-1.5">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>

                      {/* Center icon — hidden on mobile */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                          style={{
                            background: isLast ? PRIMARY : PRIMARY_LIGHT,
                            color: isLast ? "white" : PRIMARY,
                          }}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                      </div>

                      {/* Mobile icon (left side) */}
                      <div className="md:hidden shrink-0 flex flex-col items-center gap-1">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: isLast ? PRIMARY : PRIMARY_LIGHT, color: isLast ? "white" : PRIMARY }}
                        >
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                        <span className="text-[9px] font-bold" style={{ color: PRIMARY }}>{item.year}</span>
                      </div>

                      {/* Spacer for opposite side on desktop */}
                      <div className="hidden md:block flex-1 md:w-[calc(50%-3rem)] md:flex-none" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section
          className="py-20 lg:py-24 relative overflow-hidden"
          style={{ background: "#041E42" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFF200", color: "#041E42" }}
              >
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What We{" "}
                <span style={{ color: "#FFF200" }}>Stand For</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl p-6 border transition-all hover:border-[#FFF200] group flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "#FFF200", color: "#041E42" }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFF200] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <span
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#FFF200", color: "#041E42" }}
              >
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
                The Action Plus Tax{" "}
                <span style={{ color: PRIMARY }}>Difference</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                We are not a tax machine. We are Tax Pros who genuinely care about your outcome.
              </p>
            </div>

            {/* Cards + image side by side on large screens */}
            <div className="grid lg:grid-cols-5 gap-6 items-stretch">

              {/* Cards — 3 cols */}
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#01567E] hover:shadow-lg transition-all"
                    >
                      <div className="shrink-0">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: "#FFF200", color: "#041E42" }}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold text-gray-300">0{i + 1}</span>
                          <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Handshake image — 2 cols */}
              <div
                className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[320px]"
                style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.1)", border: "1px solid #E2E8F0" }}
              >
                <Image
                  src="/images/about-values.jpg"
                  alt="Trusted tax partnership — Action Plus Tax"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(1,86,126,0.7) 0%, rgba(4,30,66,0.5) 100%)" }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#FFF200" }}>
                    Our Promise
                  </p>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    &ldquo;We treat every client like our only client.&rdquo;
                  </h3>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    — Action Plus Tax Team
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24" style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden px-8 sm:px-16 py-16 text-center">

              {/* Background office image */}
              <Image
                src="/images/about-cta.jpg"
                alt="Action Plus Tax office"
                fill
                className="object-cover"
              />
              {/* Dark overlay over the image */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(4,30,66,0.88)" }}
              />
              {/* Grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,242,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,242,0,0.25) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.2) 0%, transparent 70%)" }}
              />
              {/* Top accent */}
              <div
                className="h-[2px] w-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }}
              />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FFF200" }}>
                  Ready to Get Started?
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
                  Let Us Handle Your Taxes
                </h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                  Book a free consultation or start your application today.
                  We are here — on your timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:opacity-90 shadow-lg"
                    style={{ background: PRIMARY, color: "white" }}
                  >
                    Book Consultation
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 font-bold px-8 py-4 rounded-xl text-base transition-all hover:border-white text-white"
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    Start Application
                  </Link>
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
