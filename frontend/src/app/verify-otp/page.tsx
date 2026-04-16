"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail, RotateCcw } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PRIMARY = "#01567E";
const YELLOW = "#FFF200";

function VerifyOtpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const { verifyOtp, resendOtp } = useAuth();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resending, setResending] = useState(false);
  const [resendMsg, setResendMsg] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = cleaned;
    setOtp(next);
    if (cleaned && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length === 6) {
      setOtp(text.split(""));
      inputsRef.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) return;
    setLoading(true);
    setError("");
    try {
      const autoLoggedIn = await verifyOtp(email, code);
      router.push(autoLoggedIn ? "/" : "/login?verified=1");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Verification failed.");
      setOtp(["", "", "", "", "", ""]);
      inputsRef.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setResending(true);
    setResendMsg("");
    setError("");
    try {
      await resendOtp(email);
      setResendMsg("New OTP sent! Check your inbox.");
      setCountdown(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputsRef.current[0]?.focus();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to resend OTP.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background: PRIMARY,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    >
      {/* Logo */}
      <Link href="/" className="tracking-tighter text-2xl font-bold mb-8 inline-block">
        <span style={{ color: YELLOW }}>Action</span>
        <span className="text-white">Plus</span>
        <span style={{ color: YELLOW }}>&nbsp;Tax</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: "#E0F4F9" }}
        >
          <Mail size={26} style={{ color: PRIMARY }} strokeWidth={1.7} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-1.5">Verify your email</h1>
        <p className="text-sm text-gray-500 mb-7 leading-relaxed">
          We sent a 6-digit OTP to{" "}
          <span className="font-semibold text-[#0A0A0A]">{email}</span>.
          Enter it below to activate your account.
        </p>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-100">
            {error}
          </div>
        )}

        {/* Success resend msg */}
        {resendMsg && (
          <div className="mb-5 rounded-xl px-4 py-3 text-sm text-green-700 bg-green-50 border border-green-100">
            {resendMsg}
          </div>
        )}

        {/* OTP inputs */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-2" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputsRef.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 text-center text-xl font-bold border-2 rounded-xl outline-none transition-all"
                style={{
                  borderColor: digit ? PRIMARY : "#E5E7EB",
                  color: "#0A0A0A",
                  boxShadow: digit ? `0 0 0 3px rgba(1,86,126,0.12)` : "none",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.currentTarget.style.borderColor = digit ? PRIMARY : "#E5E7EB")}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || otp.join("").length < 6}
            className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: YELLOW, color: "#041E42" }}
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                Verifying…
              </>
            ) : (
              <>Verify Email <ArrowRight size={16} strokeWidth={2.5} /></>
            )}
          </button>
        </form>

        {/* Resend */}
        <div className="mt-5 text-center">
          {canResend ? (
            <button
              onClick={handleResend}
              disabled={resending}
              className="flex items-center justify-center gap-1.5 text-sm font-semibold mx-auto transition-colors disabled:opacity-60"
              style={{ color: PRIMARY }}
            >
              <RotateCcw size={14} strokeWidth={2.5} className={resending ? "animate-spin" : ""} />
              {resending ? "Sending…" : "Resend OTP"}
            </button>
          ) : (
            <p className="text-sm text-gray-400">
              Resend OTP in{" "}
              <span className="font-semibold tabular-nums" style={{ color: PRIMARY }}>
                {countdown}s
              </span>
            </p>
          )}
        </div>

        <div className="mt-4 text-center">
          <Link href="/signup" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            ← Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense>
      <VerifyOtpContent />
    </Suspense>
  );
}
