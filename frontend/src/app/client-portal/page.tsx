"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  UploadCloud,
  Bell,
  Lock,
  Users,
  Clock,
  ArrowRight,
  ExternalLink,
  X,
  CheckCircle2,
  Star,
  ChevronDown,
  Phone,
  Mail,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import { useAuth, getAvatarInitials } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const YELLOW = "#FFF200";
const DARK = "#041E42";

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: FileText,
    title: "Tax Documents & History",
    desc: "Every filed return, W-2, 1099, and supporting document — organized by year and always accessible. Download any time, no waiting.",
    badge: "Most Used",
  },
  {
    icon: UploadCloud,
    title: "Secure Document Upload",
    desc: "Drop files directly to your Tax Pro through our encrypted pipeline. No email, no fax — just fast, private transfer.",
    badge: null,
  },
  {
    icon: Bell,
    title: "Real-Time Filing Status",
    desc: "Know exactly where your return stands — from submission to IRS acceptance. Automatic notifications at every milestone.",
    badge: null,
  },
  {
    icon: Lock,
    title: "Bank-Level Encryption",
    desc: "AES-256 encryption in transit and at rest. Your data meets the same security standards as the largest U.S. financial institutions.",
    badge: "SOC 2",
  },
  {
    icon: Users,
    title: "Direct Tax Pro Messaging",
    desc: "Skip the phone queue. Message your dedicated Tax Pro directly inside the portal and get responses within one business day.",
    badge: null,
  },
  {
    icon: Clock,
    title: "365-Day Access",
    desc: "Your portal never closes. Pull prior-year returns, download forms for loans or visas, or check your refund history — any day, any time.",
    badge: null,
  },
];

const stats = [
  { value: "12,000+", label: "Clients Served",  icon: Users },
  { value: "99.9%",   label: "Portal Uptime",   icon: Zap },
  { value: "256-bit", label: "Encryption",       icon: Lock },
  { value: "4.9★",    label: "Client Rating",   icon: Star },
];

const securityPoints = [
  { title: "End-to-End Encryption",  desc: "All data encrypted with AES-256 before it leaves your device. Keys are rotated regularly and never stored with your data." },
  { title: "Two-Factor Authentication", desc: "Protect your account with TOTP-based 2FA. Even if someone knows your password, they cannot access your portal." },
  { title: "IRS-Compliant Infrastructure", desc: "Our systems meet IRS Publication 4557 standards for safeguarding taxpayer data at every layer of the stack." },
  { title: "Zero-Knowledge Architecture", desc: "Action Plus TAX employees cannot view your uploaded documents. Only your assigned Tax Pro has access." },
  { title: "Audit Logs",             desc: "Every login, upload, and download is logged with timestamps and IP addresses. You can review your full activity history." },
  { title: "Automatic Session Expiry", desc: "Idle sessions expire after 15 minutes. You are always logged out automatically when leaving the portal inactive." },
];

const faqs = [
  {
    q: "How do I access my client portal?",
    a: "Click the 'Access Portal' button on this page. You will be redirected to our secure portal powered by Drake Software, where you can log in with the credentials your Tax Pro set up for you.",
  },
  {
    q: "What documents can I upload?",
    a: "You can upload W-2s, 1099s, Social Security statements, prior-year returns, ID documents, receipts, and any other supporting documents your Tax Pro requests. Supported formats include PDF, JPG, PNG, and XLSX.",
  },
  {
    q: "Is my information safe in the portal?",
    a: "Yes. The portal uses AES-256 encryption, SOC 2 Type II–certified infrastructure, and IRS-compliant data handling. Your documents are never shared beyond your assigned Tax Pro.",
  },
  {
    q: "How long does it take to get access?",
    a: "Your Tax Pro will send you portal credentials within 24 hours of your first consultation. If you have not received them, contact us via the consultation form and we will resolve it immediately.",
  },
  {
    q: "Can I access returns from previous years?",
    a: "Yes. All filed returns going back to your first year with Action Plus TAX are stored in the portal. You can view, download, or share them at any time.",
  },
  {
    q: "Who do I contact if I have a portal issue?",
    a: "Use the messaging feature inside the portal to contact your Tax Pro directly. For technical issues, email support or book a consultation and we'll get you sorted within one business day.",
  },
];

const steps = [
  {
    num: "01",
    title: "Book a Consultation",
    desc: "Schedule a free consultation. Our Tax Pro reviews your situation and sets up your personalized portal.",
    icon: Phone,
  },
  {
    num: "02",
    title: "Receive Your Credentials",
    desc: "Within 24 hours you'll receive secure portal login credentials from your dedicated Tax Pro.",
    icon: Mail,
  },
  {
    num: "03",
    title: "Upload Your Documents",
    desc: "Log in and drag & drop your W-2s, 1099s, and supporting documents. Fully encrypted — no email needed.",
    icon: UploadCloud,
  },
  {
    num: "04",
    title: "Review, Sign & Done",
    desc: "Your Tax Pro prepares your return. You review, e-sign digitally, and we file directly with the IRS.",
    icon: CheckCircle2,
  },
];

// ─── Portal Launcher Modal ────────────────────────────────────────────────────
function PortalModal({ onClose, userName }: { onClose: () => void; userName: string }) {
  const [countdown, setCountdown] = useState(5);
  const [launched, setLaunched] = useState(false);

  const launch = () => {
    window.open("https://www.drakesoftware.com/", "_blank", "noopener,noreferrer");
    setLaunched(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((n) => {
        if (n <= 1) { clearInterval(interval); launch(); return 0; }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,16,0.85)", backdropFilter: "blur(10px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full rounded-3xl overflow-hidden" style={{ maxWidth: "480px", background: "#fff", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4" style={{ background: DARK }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: YELLOW }}>
              <Lock size={14} strokeWidth={2.5} style={{ color: DARK }} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Secure Tax Portal</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>Powered by Drake Software · AES-256 encrypted</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-8 flex flex-col items-center text-center gap-5">
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ background: launched ? "#dcfce7" : YELLOW, boxShadow: launched ? "0 8px 32px rgba(34,197,94,0.25)" : "0 8px 32px rgba(255,242,0,0.35)" }}>
            {launched
              ? <CheckCircle2 size={38} strokeWidth={1.8} style={{ color: "#16a34a" }} />
              : <ShieldCheck size={38} strokeWidth={1.8} style={{ color: DARK }} />}
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{ color: "#0A0A0A" }}>
              {launched ? "Portal Opened!" : "Launching Your Portal"}
            </h2>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>
              {launched ? `Your portal is open in a new tab, ${userName}.` : `Opening securely in a new tab, ${userName}…`}
            </p>
          </div>

          {/* Countdown ring */}
          {!launched ? (
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#E2E8F0" strokeWidth="5" />
                <circle cx="40" cy="40" r="34" fill="none" stroke={PRIMARY} strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (countdown / 5)}`}
                  style={{ transition: "stroke-dashoffset 0.9s linear" }} />
              </svg>
              <span className="text-2xl font-bold" style={{ color: PRIMARY }}>{countdown}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "#dcfce7" }}>
              <CheckCircle2 size={14} strokeWidth={2} style={{ color: "#16a34a" }} />
              <span className="text-sm font-semibold" style={{ color: "#16a34a" }}>Successfully launched</span>
            </div>
          )}

          {/* Feature pills */}
          <div className="grid grid-cols-2 gap-2 w-full">
            {[
              { icon: FileText,    label: "Tax Returns & History" },
              { icon: UploadCloud, label: "Document Upload" },
              { icon: Bell,        label: "Filing Status" },
              { icon: Users,       label: "Tax Pro Messaging" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "#F0F8FA", border: "1px solid #E2E8F0" }}>
                <Icon size={13} strokeWidth={2} style={{ color: PRIMARY, flexShrink: 0 }} />
                <span className="text-xs font-semibold" style={{ color: "#0A0A0A" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <button onClick={launch}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: YELLOW, color: DARK, boxShadow: "0 4px 20px rgba(255,242,0,0.3)" }}>
              <ExternalLink size={15} strokeWidth={2.5} />
              {launched ? "Open Again in New Tab" : "Launch Now"}
            </button>
            <button onClick={onClose}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
              style={{ color: "#64748B", background: "#F0F8FA" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#E2E8F0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#F0F8FA")}>
              {launched ? "Done" : "Cancel"}
            </button>
          </div>

          <p className="text-[11px]" style={{ color: "#94A3B8" }}>
            <ShieldCheck size={10} strokeWidth={2} className="inline mr-1" style={{ color: "#22c55e" }} />
            Redirecting to a verified, IRS-compliant secure portal.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden transition-all" style={{ border: `1px solid ${open ? PRIMARY + "40" : "#E2E8F0"}`, background: open ? "#F0F8FA" : "#fff" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold" style={{ color: "#0A0A0A" }}>{q}</span>
        <ChevronDown size={16} strokeWidth={2.5} style={{ color: PRIMARY, flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ClientPortalPage() {
  const { user } = useAuth();
  const [portalOpen, setPortalOpen] = useState(false);

  const firstName = user?.name?.trim().split(/\s+/)[0] ?? "there";
  const initials  = user ? getAvatarInitials(user.name) : "?";

  return (
    <>
      <HeaderTest />
      <main>

        {/* ─────────────────────────────── HERO ─────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ background: DARK }}>
          {/* Grid bg */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: "900px", height: "500px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.14) 0%, transparent 65%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 lg:pt-28">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

              {/* Left */}
              <div className="flex flex-col gap-7 pb-16 lg:pb-28">
                <span className="inline-flex items-center self-start gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: YELLOW, color: DARK }}>
                  <ShieldCheck size={11} strokeWidth={3} /> Secure Client Portal
                </span>

                {/* Greeting */}
                {user && (
                  <div className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold shrink-0"
                      style={{ background: YELLOW, color: DARK }}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Welcome back</p>
                      <p className="text-lg font-bold text-white leading-tight">{user.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{user.email}</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(34,197,94,0.2)", color: "#4ade80" }}>● Active</span>
                  </div>
                )}

                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.08]">
                    Your Tax Files,{" "}
                    <span style={{ color: YELLOW }}>Secure<br />& Always Ready.</span>
                  </h1>
                  <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-lg">
                    Upload documents, track your return status, and communicate
                    directly with your Tax Pro — all inside one encrypted,
                    personalized portal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => setPortalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-xl text-base transition-all hover:opacity-90"
                    style={{ background: YELLOW, color: DARK, boxShadow: "0 6px 28px rgba(255,242,0,0.32)" }}>
                    <Lock size={17} strokeWidth={2.5} />
                    Access My Portal
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </button>
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-4 rounded-xl text-base transition-all border"
                    style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.2)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}>
                    Book a Consultation
                  </Link>
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap gap-5 pt-1">
                  {["IRS Authorized", "256-bit Encrypted", "SOC 2 Compliant", "GDPR Ready"].map((b) => (
                    <div key={b} className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: YELLOW }} />
                      <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Dashboard preview */}
              <div className="relative pb-0 lg:pb-0 hidden lg:block">
                <div className="absolute -inset-8 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(255,242,0,0.07) 0%, transparent 65%)" }} />
                <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.04)", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
                  {/* Browser chrome */}
                  <div className="flex items-center gap-3 px-5 py-3.5 border-b" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                    </div>
                    <div className="flex-1 mx-4 flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <Lock size={10} strokeWidth={2.5} style={{ color: "#22c55e" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>portal.actionplustax.com</span>
                    </div>
                    <ShieldCheck size={14} strokeWidth={2} style={{ color: YELLOW }} />
                  </div>

                  {/* Dashboard body */}
                  <div className="p-5 space-y-3">
                    {/* User bar */}
                    {user ? (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(255,242,0,0.1)", border: "1px solid rgba(255,242,0,0.18)" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: YELLOW, color: DARK }}>{initials}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white truncate">{user.name}</p>
                          <p className="text-[10px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{user.email}</p>
                        </div>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.2)", color: "#4ade80" }}>ACTIVE</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                          <Users size={14} strokeWidth={2} style={{ color: "rgba(255,255,255,0.4)" }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Client Dashboard</p>
                          <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>Sign in to personalize</p>
                        </div>
                      </div>
                    )}

                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Returns Filed", val: "3", color: "#22c55e" },
                        { label: "Docs Uploaded", val: "12", color: PRIMARY },
                        { label: "Pending",        val: "0", color: YELLOW },
                      ].map((s) => (
                        <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <p className="text-lg font-bold" style={{ color: s.color }}>{s.val}</p>
                          <p className="text-[9px] font-semibold mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Document list */}
                    {[
                      { label: "2024 Tax Return",     status: "Filed",     color: "#22c55e", icon: FileText },
                      { label: "2023 Tax Return",     status: "Completed", color: "#22c55e", icon: FileText },
                      { label: "W-2 · Jan 2025",      status: "Uploaded",  color: PRIMARY,  icon: UploadCloud },
                      { label: "IRS Acceptance",      status: "Received",  color: "#22c55e", icon: CheckCircle2 },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-center justify-between px-4 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <div className="flex items-center gap-2.5">
                            <Icon size={12} strokeWidth={2} style={{ color: "rgba(255,255,255,0.35)" }} />
                            <span className="text-[11px] font-medium text-white">{item.label}</span>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${item.color}22`, color: item.color }}>{item.status}</span>
                        </div>
                      );
                    })}

                    <button onClick={() => setPortalOpen(true)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all hover:opacity-90"
                      style={{ background: YELLOW, color: DARK }}>
                      <ExternalLink size={13} strokeWidth={2.5} />
                      Open Full Portal
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom wave divider */}
          <div className="w-full overflow-hidden leading-none" style={{ height: "48px" }}>
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#F0F8FA" />
            </svg>
          </div>
        </section>

        {/* ─────────────────────────────── STATS ────────────────────────────── */}
        <section style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white rounded-2xl p-6 flex flex-col gap-3" style={{ border: "1px solid #E2E8F0" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#E0F4F9" }}>
                      <Icon size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#0A0A0A" }}>{s.value}</p>
                      <p className="text-xs font-semibold mt-0.5" style={{ color: "#64748B" }}>{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#E0F4F9", color: PRIMARY }}>
                <TrendingUp size={11} strokeWidth={3} /> How It Works
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "#0A0A0A" }}>
                From First Call to <span style={{ color: PRIMARY }}>IRS Acceptance</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
                Four straightforward steps — designed to take the stress out of tax season.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Dashed connector */}
              <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px" style={{ background: `repeating-linear-gradient(90deg, ${YELLOW} 0px, ${YELLOW} 10px, transparent 10px, transparent 22px)` }} />
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.num} className="relative flex flex-col gap-4 bg-white rounded-2xl p-6 text-center" style={{ border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto relative z-10"
                      style={{ background: i === steps.length - 1 ? YELLOW : PRIMARY, boxShadow: `0 6px 20px ${i === steps.length - 1 ? "rgba(255,242,0,0.35)" : "rgba(1,86,126,0.25)"}` }}>
                      <Icon size={26} strokeWidth={1.8} style={{ color: i === steps.length - 1 ? DARK : "#fff" }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold" style={{ color: i === steps.length - 1 ? YELLOW : PRIMARY }}>STEP {s.num}</span>
                      <h3 className="font-bold text-base mt-1" style={{ color: "#0A0A0A" }}>{s.title}</h3>
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── FEATURES ─────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: "#F0F8FA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: YELLOW, color: DARK }}>
                <Zap size={11} strokeWidth={3} /> Portal Features
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "#0A0A0A" }}>
                Everything You Need,{" "}
                <span style={{ color: PRIMARY }}>In One Place</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
                Your portal is more than a file cabinet. It's your complete tax management center.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all cursor-default"
                    style={{ border: "1px solid #E2E8F0" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = PRIMARY + "50"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(1,86,126,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#E0F4F9" }}>
                        <Icon size={22} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      </div>
                      {f.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: f.badge === "Most Used" ? "#FFF8E6" : "#E0F4F9", color: f.badge === "Most Used" ? "#B45309" : PRIMARY }}>{f.badge}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: "#0A0A0A" }}>{f.title}</h3>
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "#64748B" }}>{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── SECURITY ─────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left — copy */}
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center self-start gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "#E0F4F9", color: PRIMARY }}>
                  <ShieldCheck size={11} strokeWidth={3} /> Enterprise-Grade Security
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "#0A0A0A" }}>
                  Your Data Is Protected{" "}
                  <span style={{ color: PRIMARY }}>at Every Layer</span>
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                  We take data security as seriously as the IRS does. Every piece of your information
                  is shielded by multiple independent security controls — not just one.
                </p>
                <div className="grid gap-3">
                  {securityPoints.map((sp) => (
                    <div key={sp.title} className="flex gap-4 p-4 rounded-xl" style={{ background: "#F0F8FA", border: "1px solid #E0F4F9" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#E0F4F9" }}>
                        <ShieldCheck size={13} strokeWidth={2.5} style={{ color: PRIMARY }} />
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>{sp.title}</p>
                        <p className="text-xs mt-1 leading-relaxed" style={{ color: "#64748B" }}>{sp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — cert cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Award,
                    title: "SOC 2 Type II Certified",
                    desc: "Independently audited for security, availability, and confidentiality controls. Audit reports available on request.",
                    badge: "Certified",
                    badgeColor: "#16a34a",
                  },
                  {
                    icon: ShieldCheck,
                    title: "IRS Publication 4557 Compliant",
                    desc: "Fully compliant with IRS guidelines for safeguarding taxpayer data. Required for all authorized e-file providers.",
                    badge: "Compliant",
                    badgeColor: PRIMARY,
                  },
                  {
                    icon: Lock,
                    title: "AES-256 Encryption Standard",
                    desc: "The same encryption standard used by the U.S. government and major financial institutions worldwide.",
                    badge: "Active",
                    badgeColor: "#16a34a",
                  },
                  {
                    icon: TrendingUp,
                    title: "99.9% Uptime SLA",
                    desc: "Guaranteed portal availability 365 days a year. Maintenance windows are always scheduled outside of tax season.",
                    badge: "Guaranteed",
                    badgeColor: PRIMARY,
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="flex gap-5 p-5 rounded-2xl" style={{ border: "1px solid #E2E8F0", background: "#FAFCFF" }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#E0F4F9" }}>
                        <Icon size={22} strokeWidth={1.8} style={{ color: PRIMARY }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>{c.title}</p>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${c.badgeColor}18`, color: c.badgeColor }}>{c.badge}</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{c.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ────────────────────────────── FAQ ───────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: "#F0F8FA" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#E0F4F9", color: PRIMARY }}>
                FAQ
              </span>
              <h2 className="text-3xl font-bold tracking-tight" style={{ color: "#0A0A0A" }}>
                Common Questions
              </h2>
              <p className="mt-3 text-base" style={{ color: "#64748B" }}>
                Everything you need to know before accessing your portal.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────── CTA ─────────────────────────────── */}
        <section className="relative overflow-hidden py-20" style={{ background: DARK }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: "700px", height: "400px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.12) 0%, transparent 60%)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: YELLOW, boxShadow: "0 8px 32px rgba(255,242,0,0.35)" }}>
              <Lock size={28} strokeWidth={2} style={{ color: DARK }} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {user ? `Ready, ${firstName}. Your Portal Awaits.` : "Access Your Secure Tax Portal"}
            </h2>
            <p className="text-white/55 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              {user
                ? "Your documents, returns, and Tax Pro are just one click away. Access your portal securely right now."
                : "Sign in to access your personalized tax portal. Upload documents, track filings, and communicate with your Tax Pro — all in one secure place."}
            </p>
            {user ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={() => setPortalOpen(true)}
                  className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-xl text-base transition-all hover:opacity-90"
                  style={{ background: YELLOW, color: DARK, boxShadow: "0 6px 28px rgba(255,242,0,0.35)" }}>
                  <Lock size={18} strokeWidth={2.5} />
                  Access My Portal Now
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
                <Link href="/consultation"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all border"
                  style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
                  Talk to a Tax Pro
                </Link>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/login"
                  className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-xl text-base transition-all hover:opacity-90"
                  style={{ background: YELLOW, color: DARK, boxShadow: "0 6px 28px rgba(255,242,0,0.35)" }}>
                  Sign In to Access Portal
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
                <Link href="/signup"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all border"
                  style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
                  Create Free Account
                </Link>
              </div>
            )}
          </div>
        </section>

      </main>
      <SiteFooter />
      {portalOpen && <PortalModal onClose={() => setPortalOpen(false)} userName={firstName} />}
    </>
  );
}
