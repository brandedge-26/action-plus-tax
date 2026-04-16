"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

export default function SignupPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return;
    setLoading(true);
    setError("");
    try {
      await register(form.fullName, form.email, form.phone, form.password);
      // Store password temporarily so verify-otp can auto-login
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
    if (pw.length < 6) return { label: "Weak", color: "#ef4444", width: "33%" };
    if (pw.length < 10) return { label: "Fair", color: "#f59e0b", width: "66%" };
    return { label: "Strong", color: "#22c55e", width: "100%" };
  };
  const strength = passwordStrength(form.password);
  const mismatch = !!form.confirm && form.confirm !== form.password;

  const inputBase =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#01567E] focus:ring-2 focus:ring-[#01567E]/30 focus:ring-offset-2";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background: "#01567E",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    >
      {/* Logo */}
      <Link href="/" className="tracking-tighter text-2xl font-bold mb-8 inline-block">
        <span style={{ color: "#FFF200" }}>Action</span>
        <span className="text-white">Plus</span>
        <span style={{ color: "#FFF200" }}>&nbsp;Tax</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#0A0A0A] mb-1.5">Create your free account</h1>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold hover:underline" style={{ color: "#FFF200" }}>
              Sign in
            </Link>
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-100">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Full Name <span style={{ color: "#FFF200" }}>*</span>
            </label>
            <input
              type="text" name="fullName" required
              value={form.fullName} onChange={handleChange}
              placeholder="John Smith"
              className={inputBase}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Email Address <span style={{ color: "#FFF200" }}>*</span>
            </label>
            <input
              type="email" name="email" required
              value={form.email} onChange={handleChange}
              placeholder="you@email.com"
              className={inputBase}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Phone Number <span style={{ color: "#FFF200" }}>*</span>
            </label>
            <input
              type="tel" name="phone" required
              value={form.phone} onChange={handleChange}
              placeholder="(912) 000-0000"
              className={inputBase}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Password <span style={{ color: "#FFF200" }}>*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} name="password" required
                value={form.password} onChange={handleChange}
                placeholder="Min. 8 characters"
                className={inputBase + " pr-11"}
              />
              <button type="button" onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                {showPassword ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
              </button>
            </div>
            {strength && (
              <div className="mt-2">
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300"
                    style={{ width: strength.width, background: strength.color }} />
                </div>
                <p className="text-[11px] mt-1 font-medium" style={{ color: strength.color }}>
                  {strength.label} password
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Confirm Password <span style={{ color: "#FFF200" }}>*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"} name="confirm" required
                value={form.confirm} onChange={handleChange}
                placeholder="Re-enter your password"
                className={`${inputBase} pr-11 ${mismatch ? "border-red-300 focus:border-red-400 focus:ring-red-200" : ""}`}
              />
              <button type="button" onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                {showConfirm ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
              </button>
            </div>
            {mismatch && (
              <p className="text-[11px] text-red-500 mt-1">Passwords do not match</p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded accent-[#01567E]" />
            <span className="text-xs text-gray-500 leading-relaxed">
              I agree to the{" "}
              <Link href="/terms" className="font-semibold hover:underline" style={{ color: "#FFF200" }}>Terms of Service</Link>
              {" "}&amp;{" "}
              <Link href="/privacy" className="font-semibold hover:underline" style={{ color: "#FFF200" }}>Privacy Policy</Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading || mismatch}
            className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "#FFF200", color: "#041E42" }}
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

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          By signing up you agree to our{" "}
          <Link href="/terms" className="underline hover:text-gray-600">Terms</Link>
          {" "}&amp;{" "}
          <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
