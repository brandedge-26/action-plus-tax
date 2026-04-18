"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, ArrowRight, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const DARK = "#041E42";
const YELLOW = "#FFF200";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const justVerified = searchParams.get("verified") === "1";
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(form.email, form.password);
      router.push("/");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Login failed.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#F8FAFC" }}>

      {/* ── Left Panel — Branding (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[48%] xl:w-[52%] flex-col justify-between p-12 relative overflow-hidden"
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
              Client Portal
            </p>
            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
              Manage your taxes<br />from one place.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Access your returns, track your refund status, upload documents, and communicate directly with your Tax Pro — all in your secure portal.
            </p>
          </div>

          {/* Feature list */}
          <ul className="space-y-3">
            {[
              "Secure document upload & storage",
              "Real-time refund & filing status",
              "Direct messaging with your Tax Pro",
              "IRS letters & tax history in one place",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <CheckCircle2 size={15} strokeWidth={2} style={{ color: YELLOW, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>

          {/* Rating */}
          <div
            className="flex items-center gap-4 rounded-2xl p-4 border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: PRIMARY }}>
              <ShieldCheck size={18} strokeWidth={2} style={{ color: "#fff" }} />
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={11} strokeWidth={0} fill={YELLOW} />)}
              </div>
              <p className="text-xs font-semibold text-white">4.9 / 5.0 — Trusted by 500+ clients since 2012</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="relative text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Action Plus Tax. All rights reserved.
        </p>
      </div>

      {/* ── Right Panel — Form ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">

        {/* Mobile logo */}
        <Link href="/" className="tracking-tighter text-2xl font-bold mb-8 inline-block lg:hidden">
          <span style={{ color: PRIMARY }}>Action</span>
          <span style={{ color: DARK }}>Plus</span>
          <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
        </Link>

        <div className="w-full max-w-[420px]">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1.5" style={{ color: "#0A0A0A" }}>
              Sign in to your account
            </h1>
            <p className="text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold hover:underline" style={{ color: PRIMARY }}>
                Create one free
              </Link>
            </p>
          </div>

          {/* Verified banner */}
          {justVerified && (
            <div className="mb-6 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-green-700 bg-green-50 border border-green-200">
              <CheckCircle2 size={16} strokeWidth={2} style={{ color: "#16a34a", flexShrink: 0 }} />
              Email verified! You can now sign in.
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200">
              {error}
            </div>
          )}

          {/* Google */}
          <a
            href="http://localhost:5510/api/auth/google"
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 text-sm font-semibold hover:bg-gray-50 transition-all mb-6"
            style={{ color: "#0A0A0A", background: "white" }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h13.2c-.6 3-2.4 5.6-5 7.3v6h8c4.7-4.3 7.3-10.7 7.3-17.5z" fill="#4285F4" />
              <path d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-8-6c-2.1 1.4-4.8 2.2-7.8 2.2-6 0-11.1-4-12.9-9.4H2.8v6.2C6.7 42.8 14.8 48 24 48z" fill="#34A853" />
              <path d="M11.1 28.9c-.5-1.4-.7-2.8-.7-4.4s.2-3 .7-4.4v-6.2H2.8C1 17.4 0 20.6 0 24s1 6.6 2.8 9.1l8.3-4.2z" fill="#FBBC05" />
              <path d="M24 9.5c3.4 0 6.4 1.2 8.8 3.4l6.5-6.5C35.9 2.8 30.5.5 24 .5 14.8.5 6.7 5.7 2.8 14.1l8.3 6.2C12.9 13.5 18 9.5 24 9.5z" fill="#EA4335" />
            </svg>
            Continue with Google
          </a>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">or sign in with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition-all focus:border-[#01567E] focus:ring-2 focus:ring-[#01567E]/15 bg-white"
                style={{ color: "#0A0A0A" }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-700">Password</label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold hover:underline"
                  style={{ color: PRIMARY }}
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm placeholder-gray-400 outline-none transition-all focus:border-[#01567E] focus:ring-2 focus:ring-[#01567E]/15 bg-white"
                  style={{ color: "#0A0A0A" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
                </button>
              </div>
            </div>



            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60 text-sm"
              style={{ background: PRIMARY, color: "#fff" }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>Sign In <ArrowRight size={16} strokeWidth={2.5} /></>
              )}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            By signing in you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-600">Terms</Link>
            {" "}&amp;{" "}
            <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
