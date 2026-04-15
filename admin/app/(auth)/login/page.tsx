"use client";

import { useState } from "react";
import { Eye, EyeOff, Shield } from "lucide-react";
import toast from "react-hot-toast";
import { adminFetch, setAdminToken } from "../../lib/adminApi";

export default function AdminLoginPage() {
  const [show, setShow]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail]     = useState("admin@actionplustax.com");
  const [password, setPassword] = useState("");

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await adminFetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (data.user?.role !== "admin") {
        toast.error("Access denied. Admin accounts only.");
        setLoading(false);
        return;
      }

      setAdminToken(data.accessToken);
      localStorage.setItem("apt_admin_user", JSON.stringify(data.user));
      toast.success(`Welcome, ${data.user.name}!`);
      window.location.href = "/dashboard";
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Login failed.");
      setLoading(false);
    }
  };

  const PRIMARY = "#0046BE";

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0A0A0A" }}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,70,190,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,190,0.08) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(0,70,190,0.22) 0%, transparent 70%)"
      }} />
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
        background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)`
      }} />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: PRIMARY }}>
            <Shield size={26} strokeWidth={2} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Action Plus Tax — Secure Access</p>
        </div>

        <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <form onSubmit={handle} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-white/70">Admin Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5 text-white/70">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl px-4 py-3 pr-11 text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all mt-2"
              style={{ background: loading ? "rgba(0,70,190,0.5)" : PRIMARY }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Authenticating...
                </span>
              ) : "Sign In to Admin"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-5" style={{ color: "rgba(255,255,255,0.25)" }}>
          Restricted access — authorized personnel only
        </p>
      </div>
    </div>
  );
}
