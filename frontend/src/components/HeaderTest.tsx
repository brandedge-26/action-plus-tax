"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LogIn,
  Phone,
} from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_DARK = "#7B35E0";
const PRIMARY_LIGHT = "#F3ECFF";

// ─── Mega Menu Data ───────────────────────────────────────────────────────────
const megaMenu = [
  {
    category: "Tax Services",
    cta: { label: "Apply Now", href: "/apply" },
    items: [
      { label: "Tax Preparation & Filing", href: "/services/tax-preparation" },
      { label: "Individual Income Tax Filing", href: "/services/individual-tax" },
      { label: "Self-Employed / Freelance Tax", href: "/services/self-employed" },
      { label: "Crypto & Investment Tax", href: "/services/crypto-tax" },
      { label: "Tax Extensions", href: "/services/tax-extensions" },
      { label: "Amended Tax Returns", href: "/services/amended-returns" },
    ],
  },
  {
    category: "Tax Resolution",
    cta: { label: "Resolve My Tax Issue", href: "/apply?service=resolution" },
    items: [
      { label: "Tax Resolution & IRS Support", href: "/services/tax-resolution" },
      { label: "IRS Audit Support & Representation", href: "/services/audit-support" },
    ],
  },
  {
    category: "Tax Planning",
    cta: { label: "Schedule Consultation", href: "/appointment" },
    items: [
      { label: "Tax Planning Services", href: "/services/tax-planning" },
    ],
  },
  {
    category: "Business Services",
    cta: { label: "Manage My Finances", href: "/apply?service=business" },
    items: [
      { label: "Bookkeeping Services", href: "/services/bookkeeping" },
      { label: "Payroll Services", href: "/services/payroll" },
      { label: "Business Valuation", href: "/services/business-valuation" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeaderTest() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 tracking-tighter text-xl font-bold">
            <span style={{ color: PRIMARY }}>Action</span>
            <span className="text-[#0A0A0A]">Plus</span>
            <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors cursor-pointer"
                    style={{ color: servicesOpen ? PRIMARY : undefined }}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      style={{ color: servicesOpen ? PRIMARY : undefined }}
                    />
                  </button>

                  {/* Invisible bridge */}
                  {servicesOpen && (
                    <div className="absolute left-0 right-0 h-5 top-full" />
                  )}

                  {/* ── Mega Dropdown ── */}
                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+20px)] w-[900px] rounded-2xl border border-white/40 shadow-2xl overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "0 8px 40px rgba(146,69,255,0.10), 0 0 0 1px rgba(255,255,255,0.5) inset",
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="h-[3px] w-full"
                        style={{ background: `linear-gradient(90deg, ${PRIMARY}, #c084fc, ${PRIMARY})` }}
                      />

                      <div className="grid grid-cols-4 gap-0 p-5">
                        {megaMenu.map((col, ci) => (
                          <div
                            key={col.category}
                            className={`flex flex-col gap-1 px-4 ${ci !== 0 ? "border-l border-gray-100" : ""}`}
                          >
                            {/* Category heading */}
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                              {col.category}
                            </p>

                            {/* Items — no icons */}
                            {col.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-center rounded-xl px-3 py-2 text-sm text-gray-700 font-medium transition-all hover:text-white"
                                style={{}}
                                onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY)}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                              >
                                <span className="leading-snug">{item.label}</span>
                              </Link>
                            ))}

                            {/* Column CTA */}
                            <Link
                              href={col.cta.href}
                              onClick={() => setServicesOpen(false)}
                              className="mt-3 flex items-center gap-1 text-xs font-bold transition-colors group"
                              style={{ color: PRIMARY }}
                            >
                              {col.cta.label}
                              <ChevronRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* Bottom banner */}
                      <div className="mx-5 mb-4 rounded-xl px-4 py-3 flex items-center justify-between gap-4 bg-[#F3ECFF]">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} strokeWidth={2} style={{ color: PRIMARY }} />
                          Not sure which service you need?&nbsp;
                          <span className="font-semibold text-[#0A0A0A]">{"We'll"} help you choose.</span>
                        </div>
                        <Link
                          href="/consultation"
                          onClick={() => setServicesOpen(false)}
                          className="shrink-0 text-xs font-bold text-white px-4 py-2 rounded-lg transition-colors"
                          style={{ background: PRIMARY }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY_DARK)}
                          onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
                        >
                          Get Consultation
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#9245FF] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop Right CTAs ── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sm font-medium border border-gray-200 px-3 py-2 rounded-lg text-gray-600 transition-colors hover:text-[#9245FF] hover:border-[#9245FF]"
            >
              <LogIn size={15} strokeWidth={2} />
              Client Portal
            </Link>
            <Link
              href="/consultation"
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              style={{ background: PRIMARY }}
              onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
            >
              Get Consultation
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 flex flex-col bg-white overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-base font-semibold text-gray-800 py-3.5 border-b border-gray-100 transition-colors cursor-pointer"
                    style={{ color: mobileServicesOpen ? PRIMARY : undefined }}
                  >
                    Services
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      style={{ color: mobileServicesOpen ? PRIMARY : undefined }}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 mb-2 space-y-4">
                      {megaMenu.map((col) => (
                        <div key={col.category} className="bg-gray-50 rounded-xl p-3">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">
                            {col.category}
                          </p>
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 transition-all hover:text-white"
                              onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY)}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                            >
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            href={col.cta.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 flex items-center gap-1 text-xs font-bold px-2 py-1"
                            style={{ color: PRIMARY }}
                          >
                            {col.cta.label} <ChevronRight size={11} strokeWidth={2.5} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-gray-800 hover:text-[#9245FF] py-3.5 border-b border-gray-100 transition-colors"
                >
                  {link.label}
                  <ChevronRight size={16} strokeWidth={2} className="text-gray-300" />
                </Link>
              )
            )}

            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 py-3 rounded-xl hover:border-[#9245FF] hover:text-[#9245FF] transition-colors"
              >
                <LogIn size={16} strokeWidth={2} />
                Client Portal
              </Link>
              <Link
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
                style={{ background: PRIMARY }}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
