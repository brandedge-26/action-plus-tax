"use client";

import { useState } from "react";
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
  { title: "End-to-End Encryption",     desc: "All data encrypted with AES-256 before it leaves your device. Keys are rotated regularly and never stored with your data." },
  { title: "Two-Factor Authentication", desc: "Protect your account with TOTP-based 2FA. Even if someone knows your password, they cannot access your portal." },
  { title: "IRS-Compliant Infrastructure", desc: "Our systems meet IRS Publication 4557 standards for safeguarding taxpayer data at every layer of the stack." },
  { title: "Zero-Knowledge Architecture", desc: "Action Plus TAX employees cannot view your uploaded documents. Only your assigned Tax Pro has access." },
  { title: "Audit Logs",                desc: "Every login, upload, and download is logged with timestamps and IP addresses. You can review your full activity history." },
  { title: "Automatic Session Expiry",  desc: "Idle sessions expire after 15 minutes. You are always logged out automatically when leaving the portal inactive." },
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
  const [launched, setLaunched] = useState(false);

  const launch = () => {
    window.open("https://www.drakesoftware.com/", "_blank", "noopener,noreferrer");
    setLaunched(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(4,30,66,0.88)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ maxWidth: "460px", background: "#fff", boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: PRIMARY }}>
              <Lock size={13} strokeWidth={2.5} style={{ color: "#fff" }} />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: DARK }}>Secure Tax Portal</p>
              <p className="text-[11px] text-gray-400">Powered by Drake Software</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
            <X size={15} strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* Status */}
          <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: launched ? "#f0fdf4" : "#F0F8FA", border: `1px solid ${launched ? "#bbf7d0" : "#E0F4F9"}` }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: launched ? "#dcfce7" : "#E0F4F9" }}>
              {launched
                ? <CheckCircle2 size={22} strokeWidth={2} style={{ color: "#16a34a" }} />
                : <ShieldCheck size={22} strokeWidth={2} style={{ color: PRIMARY }} />}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>
                {launched ? "Portal opened in a new tab" : `Ready, ${userName}`}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {launched ? "You can close this dialog." : "Your secure portal is ready to launch."}
              </p>
            </div>
          </div>

          {/* Feature pills */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: FileText,    label: "Tax Returns & History" },
              { icon: UploadCloud, label: "Document Upload" },
              { icon: Bell,        label: "Filing Status" },
              { icon: Users,       label: "Tax Pro Messaging" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <Icon size={13} strokeWidth={2} style={{ color: PRIMARY, flexShrink: 0 }} />
                <span className="text-xs font-semibold" style={{ color: "#374151" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button onClick={launch}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: PRIMARY, color: "#fff" }}>
              <ExternalLink size={15} strokeWidth={2.5} />
              {launched ? "Open Again in New Tab" : "Launch Portal"}
            </button>
            <button onClick={onClose}
              className="w-full py-3 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors">
              {launched ? "Done" : "Cancel"}
            </button>
          </div>

          <p className="text-[11px] text-center text-gray-400">
            <ShieldCheck size={10} strokeWidth={2} className="inline mr-1" style={{ color: "#22c55e" }} />
            IRS-authorized · AES-256 encrypted · SOC 2 compliant
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
    <div className="rounded-xl overflow-hidden transition-all" style={{ border: `1px solid ${open ? PRIMARY + "35" : "#E2E8F0"}`, background: "#fff" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold" style={{ color: "#0A0A0A" }}>{q}</span>
        <ChevronDown size={15} strokeWidth={2.5} style={{ color: PRIMARY, flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t" style={{ borderColor: "#F1F5F9" }}>
          <p className="text-sm leading-relaxed pt-3" style={{ color: "#64748B" }}>{a}</p>
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
        <section style={{ background: DARK }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">

              {/* Left */}
              <div className="flex flex-col gap-6 pb-16 lg:pb-24">

                {/* Eyebrow */}
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: YELLOW }}>
                  Client Portal
                </p>

                {/* Greeting card — only when logged in */}
                {user && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl w-fit"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ background: YELLOW, color: DARK }}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{user.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{user.email}</p>
                    </div>
                    <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>Active</span>
                  </div>
                )}

                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                    Your Tax Files,<br />
                    <span style={{ color: YELLOW }}>Secure & Ready.</span>
                  </h1>
                  <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "480px" }}>
                    Upload documents, track your return, and message your Tax Pro
                    — all inside one encrypted portal built for Action Plus Tax clients.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button onClick={() => setPortalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
                    style={{ background: YELLOW, color: DARK }}>
                    <Lock size={15} strokeWidth={2.5} />
                    Access My Portal
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </button>
                  <Link href="/consultation"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
                    style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                    Book a Consultation
                  </Link>
                </div>

                {/* Compact trust indicators */}
                <div className="flex items-center gap-2 pt-2 flex-wrap">
                  {["IRS Authorized", "AES-256 Encrypted", "SOC 2 Compliant"].map((b, i) => (
                    <span key={b} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {i > 0 && <span className="w-px h-3 block" style={{ background: "rgba(255,255,255,0.15)" }} />}
                      <ShieldCheck size={11} strokeWidth={2} style={{ color: "rgba(255,255,255,0.3)" }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — UI Cards */}
              <div className="hidden lg:flex flex-col gap-3 pb-16 lg:pb-24">

                {/* Card 1 — Filing Status */}
                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold text-white">2024 Filing Status</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>
                      IRS Accepted
                    </span>
                  </div>
                  {/* Progress steps */}
                  <div className="flex items-center gap-0">
                    {[
                      { label: "Submitted",  done: true },
                      { label: "Processing", done: true },
                      { label: "Accepted",   done: true },
                      { label: "Refund",     done: false },
                    ].map((step, i, arr) => (
                      <div key={step.label} className="flex items-center flex-1 last:flex-none">
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: step.done ? "#4ade80" : "rgba(255,255,255,0.08)", border: step.done ? "none" : "1px solid rgba(255,255,255,0.15)" }}>
                            {step.done
                              ? <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: "#052e16" }} />
                              : <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />}
                          </div>
                          <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: step.done ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)" }}>
                            {step.label}
                          </span>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="flex-1 h-px mx-1 mb-4" style={{ background: step.done ? "#4ade8040" : "rgba(255,255,255,0.07)" }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2 — Recent Documents */}
                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-white">Recent Documents</p>
                    <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>4 files</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { name: "2024 Tax Return.pdf",  size: "312 KB",  status: "Filed",    statusColor: "#4ade80" },
                      { name: "W-2 Form · Employer",  size: "48 KB",   status: "Uploaded", statusColor: "#60a5fa" },
                      { name: "IRS Notice CP2000",     size: "124 KB",  status: "Reviewed", statusColor: "#4ade80" },
                      { name: "1099-INT · Chase Bank", size: "28 KB",   status: "Pending",  statusColor: YELLOW },
                    ].map((doc) => (
                      <div key={doc.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(255,255,255,0.07)" }}>
                          <FileText size={12} strokeWidth={2} style={{ color: "rgba(255,255,255,0.4)" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium text-white truncate">{doc.name}</p>
                          <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.25)" }}>{doc.size}</p>
                        </div>
                        <span className="text-[9px] font-bold shrink-0" style={{ color: doc.statusColor }}>{doc.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 3 — Tax Pro */}
                <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: PRIMARY, color: "#fff" }}>
                    JM
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">James Mitchell</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Your Tax Pro · EA, 12 yrs exp.</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
                    <span className="text-[10px] font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>Online</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────── STATS ────────────────────────────── */}
        <section className="py-12 bg-white border-b" style={{ borderColor: "#E2E8F0" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x" style={{ "--tw-divide-color": "#E2E8F0" } as React.CSSProperties}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-center lg:items-start lg:px-10 gap-1 text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} strokeWidth={2} style={{ color: PRIMARY }} />
                    </div>
                    <p className="text-2xl font-bold" style={{ color: DARK }}>{s.value}</p>
                    <p className="text-xs font-medium text-gray-400">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>
                How It Works
              </p>
              <h2 className="text-3xl font-bold tracking-tight" style={{ color: DARK }}>
                From first call to IRS acceptance
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-500">
                Four straightforward steps — designed to take the stress out of tax season.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={s.num} className="relative flex flex-col gap-4 bg-white rounded-2xl p-6"
                    style={{ border: "1px solid #E2E8F0" }}>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: isLast ? YELLOW : PRIMARY }}>
                        <Icon size={18} strokeWidth={2} style={{ color: isLast ? DARK : "#fff" }} />
                      </div>
                      <span className="text-2xl font-black" style={{ color: "#E2E8F0" }}>{s.num}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: DARK }}>{s.title}</h3>
                      <p className="text-sm mt-1.5 leading-relaxed text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── FEATURES ─────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>
                Portal Features
              </p>
              <h2 className="text-3xl font-bold tracking-tight" style={{ color: DARK }}>
                Everything in one place
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-500">
                Your portal is more than a file cabinet — it's your complete tax management center.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-shadow hover:shadow-md"
                    style={{ border: "1px solid #E2E8F0" }}>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#EEF6FB" }}>
                        <Icon size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                      </div>
                      {f.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: f.badge === "Most Used" ? "#FFF8E6" : "#EEF6FB", color: f.badge === "Most Used" ? "#B45309" : PRIMARY }}>
                          {f.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: DARK }}>{f.title}</h3>
                      <p className="text-sm mt-1.5 leading-relaxed text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── SECURITY ─────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

              {/* Left */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>Security</p>
                  <h2 className="text-3xl font-bold tracking-tight" style={{ color: DARK }}>
                    Your data, protected at every layer
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-500">
                    We take data security as seriously as the IRS does. Every piece of your information is shielded by multiple independent security controls.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {securityPoints.map((sp) => (
                    <div key={sp.title} className="flex gap-3.5 p-4 rounded-xl bg-white" style={{ border: "1px solid #E2E8F0" }}>
                      <CheckCircle2 size={15} strokeWidth={2.5} style={{ color: PRIMARY, flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: DARK }}>{sp.title}</p>
                        <p className="text-xs mt-1 leading-relaxed text-gray-500">{sp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-3 lg:pt-16">
                {[
                  { icon: Award,      title: "SOC 2 Type II Certified",          desc: "Independently audited for security, availability, and confidentiality controls. Audit reports available on request.", badge: "Certified",  badgeColor: "#16a34a" },
                  { icon: ShieldCheck, title: "IRS Publication 4557 Compliant",   desc: "Fully compliant with IRS guidelines for safeguarding taxpayer data. Required for all authorized e-file providers.", badge: "Compliant",  badgeColor: PRIMARY },
                  { icon: Lock,       title: "AES-256 Encryption Standard",       desc: "The same encryption used by the U.S. government and major financial institutions worldwide.", badge: "Active",    badgeColor: "#16a34a" },
                  { icon: TrendingUp, title: "99.9% Uptime SLA",                  desc: "Guaranteed portal availability 365 days a year. Maintenance windows are always scheduled outside of tax season.", badge: "Guaranteed", badgeColor: PRIMARY },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-white" style={{ border: "1px solid #E2E8F0" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#EEF6FB" }}>
                        <Icon size={18} strokeWidth={2} style={{ color: PRIMARY }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold" style={{ color: DARK }}>{c.title}</p>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                            style={{ background: `${c.badgeColor}15`, color: c.badgeColor }}>
                            {c.badge}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-500">{c.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ────────────────────────────── FAQ ───────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>FAQ</p>
              <h2 className="text-3xl font-bold tracking-tight" style={{ color: DARK }}>Common questions</h2>
              <p className="mt-3 text-base text-gray-500">Everything you need to know before accessing your portal.</p>
            </div>
            <div className="flex flex-col gap-2">
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────── CTA ─────────────────────────────── */}
        <section className="py-16 lg:py-20" style={{ background: DARK }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {user ? `Ready, ${firstName}.` : "Access your portal."}<br />
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Your Tax Pro is waiting.</span>
                </h2>
                <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {user
                    ? "Your documents and returns are one click away."
                    : "Sign in to access your personalized tax portal."}
                </p>
              </div>
              <div className="flex flex-col gap-2.5 shrink-0">
                {user ? (
                  <>
                    <button onClick={() => setPortalOpen(true)}
                      className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 whitespace-nowrap"
                      style={{ background: YELLOW, color: DARK }}>
                      <Lock size={15} strokeWidth={2.5} />
                      Access My Portal
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </button>
                    <Link href="/consultation"
                      className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm text-center transition-all"
                      style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                      Talk to a Tax Pro
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login"
                      className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 whitespace-nowrap"
                      style={{ background: YELLOW, color: DARK }}>
                      Sign In to Access Portal
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                    <Link href="/signup"
                      className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-all"
                      style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                      Create Free Account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      {portalOpen && <PortalModal onClose={() => setPortalOpen(false)} userName={firstName} />}
    </>
  );
}
