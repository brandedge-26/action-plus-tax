"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const PRIMARY = "#01567E";

function AuthSuccessContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const userRaw = searchParams.get("user");

    if (!token || !userRaw) {
      toast.error("Authentication failed. Please try again.");
      window.location.replace("/login");
      return;
    }

    try {
      JSON.parse(decodeURIComponent(userRaw)); // validate JSON
      localStorage.setItem("apt_access_token", token);
      toast.success("Signed in with Google!");
      window.location.replace("/");
    } catch {
      toast.error("Authentication failed. Please try again.");
      window.location.replace("/login");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8FAFC" }}>
      <div className="flex flex-col items-center gap-4">
        <svg className="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="2.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        <p className="text-sm font-medium text-gray-500">Signing you in…</p>
      </div>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <Suspense>
      <AuthSuccessContent />
    </Suspense>
  );
}
