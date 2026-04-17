"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, CheckCircle2, Users, DollarSign, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const DARK    = "#041E42";
const YELLOW  = "#FFF200";

export default function SignupPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return;
    setLoading(true);
    setError("");
    try {
      await register(form.fullName, form.email, form.phone, form.password);
      sessionStorage.setItem("apt_tmp_creds", JSON.stringify({ password: form.password }));
      router.push(`/verify-otp?email=${encodeURIComponent(form.email)}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = (pw: string) => {
    if (!pw) return null;
    if (pw.length < 6)  return { label: "Weak",   color: "#ef4444", width: "33%" };
    if (pw.length < 10) return { label: "Fair",   color: "#f59e0b", width: "66%" };
    return                     { label: "Strong", color: "#22c55e", width: "100%" };
  };
  const strength  = passwordStrength(form.password);
  const mismatch  = !!form.confirm && form.confirm !== form.password;

  const inputBase =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition-all focus:border-[#01567E] focus:ring-2 focus:ring-[#01567E]/15 bg-white";

  return (
    <div className="min-h-screen flex" style={{ background: "#F8FAFC" }}>

      {/* ── Left Panel — Branding (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[44%] xl:w-[48%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(1,86,126,0.4) 0%, transparent 70%)" }}
        />

        {/* Logo */}
        <div className="relative">
          <Link href="/" className="tracking-tighter text-2xl font-bold inline-block">
            <span style={{ color: YELLOW }}>Action</span>
            <span className="text-white">Plus</span>
            <span style={{ color: YELLOW }}>&nbsp;Tax</span>
          </Link>
        </div>

        {/* Center content */}
        <div className="relative flex flex-col gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: YELLOW }}>
              Join 500+ Clients
            </p>
            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
              Your taxes, handled<br />by real experts.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Create a free account to get started with Action Plus Tax. Book consultations, upload documents, and track your filing — all in one secure place.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: ShieldCheck, label: "Biggest Refund, Guaranteed", desc: "We maximize every deduction and credit." },
              { icon: DollarSign,  label: "Refund Advance up to $6,000", desc: "Same-day funds, no credit score impact." },
              { icon: Users,       label: "One-on-One Tax Pro", desc: "A dedicated expert handles your case." },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: PRIMARY }}>
                  <Icon size={16} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="relative text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Action Plus Tax. All rights reserved.
        </p>
      </div>

      {/* ── Right Panel — Form ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 overflow-y-auto">

        {/* Mobile logo */}
        <Link href="/" className="tracking-tighter text-2xl font-bold mb-8 inline-block lg:hidden">
          <span style={{ color: PRIMARY }}>Action</span>
          <span style={{ color: DARK }}>Plus</span>
          <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
        </Link>

        <div className="w-full max-w-[440px]">

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold mb-1.5" style={{ color: "#0A0A0A" }}>
              Create your free account
            </h1>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold hover:underline" style={{ color: PRIMARY }}>
                Sign in
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Full Name <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="John Smith" className={inputBase} style={{ color: "#0A0A0A" }} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputBase} style={{ color: "#0A0A0A" }} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Phone Number <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(912) 000-0000" className={inputBase} style={{ color: "#0A0A0A" }} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Password <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} name="password" required
                  value={form.password} onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className={inputBase + " pr-11"}
                  style={{ color: "#0A0A0A" }}
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {showPassword ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
                </button>
              </div>
              {strength && (
                <div className="mt-2">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: strength.width, background: strength.color }} />
                  </div>
                  <p className="text-[11px] mt-1 font-medium" style={{ color: strength.color }}>{strength.label} password</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Confirm Password <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"} name="confirm" required
                  value={form.confirm} onChange={handleChange}
                  placeholder="Re-enter your password"
                  className={`${inputBase} pr-11 ${mismatch ? "border-red-300 focus:border-red-400 focus:ring-red-200" : ""}`}
                  style={{ color: "#0A0A0A" }}
                />
                <button type="button" onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {showConfirm ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
                </button>
              </div>
              {mismatch && <p className="text-[11px] text-red-500 mt-1">Passwords do not match</p>}
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer pt-1">
              <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded accent-[#01567E]" />
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="font-semibold hover:underline" style={{ color: PRIMARY }}>Terms of Service</Link>
                {" "}&amp;{" "}
                <Link href="/privacy" className="font-semibold hover:underline" style={{ color: PRIMARY }}>Privacy Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || mismatch}
              className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60 text-sm"
              style={{ background: PRIMARY, color: "#fff" }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Creating account…
                </>
              ) : (
                <>Create Free Account <ArrowRight size={16} strokeWidth={2.5} /></>
              )}
            </button>
          </form>

          <div className="flex items-center gap-3 mt-5 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-5">
            {[
              { icon: ShieldCheck, label: "SSL Secured" },
              { icon: CheckCircle2, label: "IRS Authorized" },
              { icon: Users,       label: "500+ Clients" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon size={16} strokeWidth={1.8} style={{ color: PRIMARY }} />
                <span className="text-[10px] font-medium text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
