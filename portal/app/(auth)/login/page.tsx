"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full max-w-[420px]">
      {/* Mobile Logo */}
      <p className="text-xl font-bold tracking-tight mb-8 lg:hidden">
        <span style={{ color: "var(--primary)" }}>Action</span>
        <span style={{ color: "var(--black)" }}>Plus</span>
        <span style={{ color: "var(--primary)" }}>&nbsp;Tax</span>
      </p>

      <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid var(--gray-border)", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
        <div className="mb-7">
          <h1 className="text-2xl font-bold mb-1.5" style={{ color: "var(--black)" }}>Sign in to your account</h1>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
              Create one free
            </Link>
          </p>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-(--gray-light) mb-5"
          style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h13.2c-.6 3-2.4 5.6-5 7.3v6h8c4.7-4.3 7.3-10.7 7.3-17.5z" fill="#4285F4"/>
            <path d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-8-6c-2.1 1.4-4.8 2.2-7.8 2.2-6 0-11.1-4-12.9-9.4H2.8v6.2C6.7 42.8 14.8 48 24 48z" fill="#34A853"/>
            <path d="M11.1 28.9c-.5-1.4-.7-2.8-.7-4.4s.2-3 .7-4.4v-6.2H2.8C1 17.4 0 20.6 0 24s1 6.6 2.8 9.1l8.3-4.2z" fill="#FBBC05"/>
            <path d="M24 9.5c3.4 0 6.4 1.2 8.8 3.4l6.5-6.5C35.9 2.8 30.5.5 24 .5 14.8.5 6.7 5.7 2.8 14.1l8.3 6.2C12.9 13.5 18 9.5 24 9.5z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "var(--gray-border)" }} />
          <span className="text-xs font-medium" style={{ color: "var(--gray-text)" }}>or sign in with email</span>
          <div className="flex-1 h-px" style={{ background: "var(--gray-border)" }} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Email Address</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold" style={{ color: "var(--black)" }}>Password</label>
              <Link href="/forgot-password" className="text-xs font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl px-4 py-3 pr-11 text-sm outline-none transition-all"
                style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: "var(--gray-text)" }}
              >
                {showPassword ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: "var(--primary)" }} />
            <span className="text-xs" style={{ color: "var(--gray-text)" }}>Keep me signed in for 30 days</span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "var(--primary)", boxShadow: "0 4px 20px rgba(220,38,38,0.25)" }}
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                Signing in…
              </>
            ) : (
              <>Sign In <ArrowRight size={16} strokeWidth={2.5} /></>
            )}
          </button>
        </form>

        <p className="text-xs text-center mt-6 leading-relaxed" style={{ color: "var(--gray-text)" }}>
          By signing in you agree to our{" "}
          <Link href="/terms" className="underline hover:opacity-70">Terms</Link>{" "}&amp;{" "}
          <Link href="/privacy" className="underline hover:opacity-70">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
