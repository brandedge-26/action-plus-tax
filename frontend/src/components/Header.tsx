"use client";

import { useState, useRef, useEffect } from "react"; // useRef kept for dropdownRef, useEffect for body scroll lock
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileText,
  User,
  ReceiptText,
  Bitcoin,
  Timer,
  FilePen,
  ShieldAlert,
  ShieldCheck,
  CalendarCheck,
  BookOpen,
  Users,
  BarChart3,
  LogIn,
  Phone,
} from "lucide-react";

// ─── Mega Menu Data ───────────────────────────────────────────────────────────
const megaMenu = [
  {
    category: "Tax Services",
    cta: { label: "Apply Now", href: "/apply" },
    items: [
      { label: "Tax Preparation & Filing", href: "/services/tax-preparation", icon: FileText },
      { label: "Individual Income Tax Filing", href: "/services/individual-tax", icon: User },
      { label: "Self-Employed / Freelance Tax", href: "/services/self-employed", icon: ReceiptText },
      { label: "Crypto & Investment Tax", href: "/services/crypto-tax", icon: Bitcoin },
      { label: "Tax Extensions", href: "/services/tax-extensions", icon: Timer },
      { label: "Amended Tax Returns", href: "/services/amended-returns", icon: FilePen },
    ],
  },
  {
    category: "Tax Resolution",
    cta: { label: "Resolve My Tax Issue", href: "/apply?service=resolution" },
    items: [
      { label: "Tax Resolution & IRS Support", href: "/services/tax-resolution", icon: ShieldAlert },
      { label: "IRS Audit Support & Representation", href: "/services/audit-support", icon: ShieldCheck },
    ],
  },
  {
    category: "Tax Planning",
    cta: { label: "Schedule Consultation", href: "/appointment" },
    items: [
      { label: "Tax Planning Services", href: "/services/tax-planning", icon: CalendarCheck },
    ],
  },
  {
    category: "Business Services",
    cta: { label: "Manage My Finances", href: "/apply?service=business" },
    items: [
      { label: "Bookkeeping Services", href: "/services/bookkeeping", icon: BookOpen },
      { label: "Payroll Services", href: "/services/payroll", icon: Users },
      { label: "Business Valuation", href: "/services/business-valuation", icon: BarChart3 },
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
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);          // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-(--gray-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 tracking-tighter text-xl font-bold">
            <span className="text-(--primary)">Action</span>
            <span className="text-(--black)">Plus</span>
            <span className="text-(--primary)">&nbsp;Tax</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasMega ? (
                // Services trigger
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-(--primary) transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-(--primary)" : ""}`}
                    />
                  </button>

                  {/* ── Glassmorphism Mega Dropdown ── */}
                  {servicesOpen && (
                    <>
                      {/* Invisible bridge — keeps hover alive while mouse travels down */}
                      <div className="absolute left-0 right-0 h-5 top-full" />
                    </>
                  )}
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+20px)] w-230 rounded-2xl border border-white/40 shadow-2xl overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.82)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
                      }}
                    >
                      {/* Decorative top bar */}
                      <div className="h-1 w-full bg-linear-to-r from-(--primary) via-(--accent) to-(--primary)" />

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

                            {/* Items */}
                            {col.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-gray-700 font-medium hover:bg-(--primary) hover:text-white transition-all"
                                >
                                  <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-(--primary-light) text-(--primary) group-hover:bg-white/20 group-hover:text-white transition-all">
                                    <Icon size={14} strokeWidth={2} />
                                  </span>
                                  <span className="leading-snug">{item.label}</span>
                                </Link>
                              );
                            })}

                            {/* Column CTA */}
                            <Link
                              href={col.cta.href}
                              onClick={() => setServicesOpen(false)}
                              className="mt-3 flex items-center gap-1 text-xs font-bold text-(--primary) hover:text-(--primary-dark) transition-colors group"
                            >
                              {col.cta.label}
                              <ChevronRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* Bottom banner */}
                      <div
                        className="mx-5 mb-4 rounded-xl px-4 py-3 flex items-center justify-between gap-4"
                        style={{ background: "var(--gray-light)" }}
                      >
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} strokeWidth={2} className="text-(--primary)" />
                          Not sure which service you need?&nbsp;
                          <span className="font-semibold text-(--black)">{"We'll"} help you choose.</span>
                        </div>
                        <Link
                          href="/consultation"
                          onClick={() => setServicesOpen(false)}
                          className="shrink-0 text-xs font-bold bg-(--primary) hover:bg-(--primary-dark) text-white px-4 py-2 rounded-lg transition-colors"
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
                  className="text-sm font-medium text-gray-600 hover:text-(--primary) transition-colors"
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
              className="flex items-center gap-1.5 text-sm font-medium border border-(--gray-border) px-3 py-2 rounded-lg text-gray-600 hover:text-(--primary) transition-colors"
            >
              <LogIn size={15} strokeWidth={2} />
              Client Portal
            </Link>
            <Link
              href="/consultation"
              className="bg-(--primary) hover:bg-(--primary-dark) text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
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
            {mobileOpen
              ? <X size={22} strokeWidth={2} />
              : <Menu size={22} strokeWidth={2} />
            }
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
                  {/* Services accordion trigger */}
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-base font-semibold text-gray-800 hover:text-(--primary) py-3.5 border-b border-gray-100 transition-colors cursor-pointer"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-(--primary)" : ""}`}
                    />
                  </button>

                  {/* Mobile services accordion content */}
                  {mobileServicesOpen && (
                    <div className="mt-1 mb-2 space-y-4">
                      {megaMenu.map((col) => (
                        <div key={col.category} className="bg-gray-50 rounded-xl p-3">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">
                            {col.category}
                          </p>
                          {col.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-(--primary) hover:text-white transition-all group"
                              >
                                <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-(--primary-light) text-(--primary) group-hover:bg-white/20 group-hover:text-white transition-all">
                                  <Icon size={14} strokeWidth={2} />
                                </span>
                                {item.label}
                              </Link>
                            );
                          })}
                          <Link
                            href={col.cta.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 flex items-center gap-1 text-xs font-bold text-(--primary) px-2 py-1"
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
                  className="flex items-center justify-between text-base font-semibold text-gray-800 hover:text-(--primary) py-3.5 border-b border-gray-100 transition-colors"
                >
                  {link.label}
                  <ChevronRight size={16} strokeWidth={2} className="text-gray-300" />
                </Link>
              )
            )}

            {/* Mobile bottom CTAs */}
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-(--gray-border) py-3 rounded-xl hover:border-(--primary) hover:text-(--primary) transition-colors"
              >
                <LogIn size={16} strokeWidth={2} />
                Client Portal
              </Link>
              <Link
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-(--primary) hover:bg-(--primary-dark) text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
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
