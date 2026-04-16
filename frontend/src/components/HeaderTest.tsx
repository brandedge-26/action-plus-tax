"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LogIn,
  Phone,
  LogOut,
  User,
} from "lucide-react";
import { useAuth, getAvatarInitials } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const PRIMARY_DARK = "#014A6A";
const PRIMARY_LIGHT = "#E0F4F9";

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
    cta: { label: "Schedule Consultation", href: "/consultation" },
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

// ─── Avatar Dropdown ──────────────────────────────────────────────────────────
function AvatarDropdown() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!user) return null;

  const initials = getAvatarInitials(user.name);
  const displayName = user.name.trim().split(/\s+/).slice(0, 2).join(" ");

  const handleLogout = async () => {
    setOpen(false);
    await logout();
    router.push("/login");
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors"
        style={{ color: "white" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {/* Avatar circle */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{ background: "#FFF200", color: "#041E42" }}
        >
          {initials}
        </div>
        <span className="text-sm font-medium hidden lg:block max-w-[120px] truncate">
          {displayName}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl border shadow-xl overflow-hidden z-50"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.08)" }}
        >
          {/* User info */}
          <div className=" px-4 py-3.5 border-b border-gray-100">
            <p className="text-sm font-bold text-[#0A0A0A] truncate">{user.name}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>

          {/* Menu items */}
          <div className="py-1.5">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <User size={15} strokeWidth={2} className="text-gray-400" />
              My Profile
            </Link>

            <div className="mx-3 my-1.5 h-px bg-gray-100" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
              style={{ color: "#DC2626" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FEF2F2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <LogOut size={15} strokeWidth={2} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeaderTest() {
  const { user, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeSlugs, setActiveSlugs] = useState<Set<string> | null>(null);

  useEffect(() => {
    fetch("http://localhost:5510/api/services")
      .then(r => r.json())
      .then(data => {
        const slugs = new Set<string>((data.services ?? []).map((s: { slug: string }) => s.slug));
        setActiveSlugs(slugs.size > 0 ? slugs : null);
      })
      .catch(() => setActiveSlugs(null));
  }, []);

  // Filter megaMenu to only show active services (null = show all)
  const filteredMegaMenu = activeSlugs === null
    ? megaMenu
    : megaMenu
        .map(col => ({
          ...col,
          items: col.items.filter(item => activeSlugs.has(item.href.replace("/services/", ""))),
        }))
        .filter(col => col.items.length > 0);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "#041E42", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 tracking-tighter text-xl font-bold">
            <span style={{ color: "#FFF200" }}>Action</span>
            <span className="text-white">Plus</span>
            <span style={{ color: "#FFF200" }}>&nbsp;Tax</span>
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
                    className="flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer"
                    style={{ color: servicesOpen ? "#FFF200" : "rgba(255,255,255,0.85)" }}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      style={{ color: servicesOpen ? "#FFF200" : "rgba(255,255,255,0.85)" }}
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
                        boxShadow: "0 8px 40px rgba(1,86,126,0.10), 0 0 0 1px rgba(255,255,255,0.5) inset",
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="h-[3px] w-full"
                        style={{ background: `linear-gradient(90deg, ${PRIMARY}, #60A5FA, ${PRIMARY})` }}
                      />

                      <div className="grid grid-cols-4 gap-0 p-5">
                        {filteredMegaMenu.map((col, ci) => (
                          <div
                            key={col.category}
                            className={`flex flex-col gap-1 px-4 ${ci !== 0 ? "border-l border-gray-100" : ""}`}
                          >
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                              {col.category}
                            </p>
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
                      <div className="mx-5 mb-4 rounded-xl px-4 py-3 flex items-center justify-between gap-4 bg-[#E0F4F9]">
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
                  className="text-sm font-medium transition-colors" style={{ color: "rgba(255,255,255,0.85)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF200")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop Right CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            {!loading && (
              user ? (
                <>
                  <AvatarDropdown />
                  <Link
                    href="/client-portal"
                    className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all"
                    style={{ background: "#FFF200", color: "#0A0A0A" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#E6D900")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#FFF200")}
                  >
                    Client Portal
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
                    style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                  >
                    <LogIn size={15} strokeWidth={2} />
                    Client Portal
                  </Link>
                  <Link
                    href="/consultation"
                    className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all"
                    style={{ background: "#FFF200", color: "#0A0A0A" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#E6D900")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#FFF200")}
                  >
                    Get Consultation
                  </Link>
                </>
              )
            )}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
            style={{ color: "white" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto" style={{ background: "#041E42" }}>
          <div className="px-4 py-4 flex flex-col gap-1">

            {/* Mobile user info (if logged in) */}
            {user && (
              <div
                className="flex items-center gap-3 p-4 rounded-2xl mb-2"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: "#FFF200", color: "#041E42" }}
                >
                  {getAvatarInitials(user.name)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    {user.name.trim().split(/\s+/).slice(0, 2).join(" ")}
                  </p>
                  <p className="text-xs text-white/50 truncate">{user.email}</p>
                </div>
              </div>
            )}

            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-base font-semibold py-3.5 border-b transition-colors cursor-pointer"
                    style={{ color: mobileServicesOpen ? "#FFF200" : "white", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    Services
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      style={{ color: mobileServicesOpen ? "#FFF200" : "rgba(255,255,255,0.5)" }}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 mb-2 space-y-4">
                      {filteredMegaMenu.map((col) => (
                        <div key={col.category} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.1)" }}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">
                            {col.category}
                          </p>
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                              style={{ color: "rgba(255,255,255,0.85)" }}
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
                  className="flex items-center justify-between text-base font-semibold py-3.5 border-b transition-colors"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.15)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF200")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {link.label}
                  <ChevronRight size={16} strokeWidth={2} className="text-gray-300" />
                </Link>
              )
            )}

            <div className="pt-4 space-y-2">
              {user ? (
                <>
                  <Link
                    href="/client-portal"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl transition-colors"
                    style={{ background: "#FFF200", color: "#0A0A0A" }}
                  >
                    Client Portal
                  </Link>
                  <MobileLogoutButton />
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl transition-colors"
                    style={{ color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    <LogIn size={16} strokeWidth={2} />
                    Client Portal
                  </Link>
                  <Link
                    href="/consultation"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl transition-colors"
                    style={{ background: "#FFF200", color: "#0A0A0A" }}
                  >
                    Get Consultation
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl transition-colors"
      style={{ color: "#FFF200", border: "1px solid rgba(255,242,0,0.4)" }}
    >
      <LogOut size={16} strokeWidth={2} />
      Sign Out
    </button>
  );
}
