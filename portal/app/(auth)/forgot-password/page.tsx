"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="w-full max-w-[420px]">
      <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid var(--gray-border)", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--primary-light)" }}>
          <ShieldCheck size={22} strokeWidth={2} style={{ color: "var(--primary)" }} />
        </div>

        <div className="mb-7">
          <h1 className="text-2xl font-bold mb-1.5" style={{ color: "var(--black)" }}>Reset your password</h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--gray-text)" }}>
            Enter your email address and we&apos;ll send you a reset link.
          </p>
        </div>

        {sent ? (
          <div className="rounded-xl p-4 text-center" style={{ background: "#DCFCE7", border: "1px solid #BBF7D0" }}>
            <p className="text-sm font-semibold text-green-800 mb-1">Check your email</p>
            <p className="text-xs text-green-700">We sent a password reset link to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Email Address</label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: "var(--primary)", boxShadow: "0 4px 20px rgba(220,38,38,0.25)" }}
            >
              {loading ? (
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              ) : (
                <>Send Reset Link <ArrowRight size={16} strokeWidth={2.5} /></>
              )}
            </button>
          </form>
        )}

        <Link
          href="/login"
          className="flex items-center justify-center gap-2 mt-5 text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: "var(--gray-text)" }}
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
