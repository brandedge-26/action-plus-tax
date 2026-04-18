"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";

const PRIMARY = "#01567E";
const DARK = "#041E42";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "Google authentication failed. Please try again.";

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[400px] text-center">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "#FEF2F2" }}>
          <AlertCircle size={26} strokeWidth={2} style={{ color: "#DC2626" }} />
        </div>

        <h1 className="text-xl font-bold mb-2" style={{ color: DARK }}>
          Authentication Failed
        </h1>
        <p className="text-sm text-gray-500 mb-7 leading-relaxed">
          {decodeURIComponent(message)}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/login"
            className="w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm transition-all hover:opacity-90"
            style={{ background: PRIMARY, color: "#fff" }}
          >
            Back to Login
          </Link>
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm border border-gray-200 transition-all hover:bg-gray-50"
            style={{ color: DARK }}
          >
            Go to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <AuthErrorContent />
    </Suspense>
  );
}
