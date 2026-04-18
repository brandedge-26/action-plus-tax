"use client";

import { useState, useEffect } from "react";
import { Save, Lock, User, Eye, EyeOff } from "lucide-react";
import { adminFetch } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Tab = "profile" | "security";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profile");

  // ── Profile state ──────────────────────────────────────────────────────────
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("apt_admin_user");
      if (stored) {
        const u = JSON.parse(stored);
        setProfile({ name: u.name ?? "", email: u.email ?? "" });
      }
    } catch { /* ignore */ }
  }, []);

  const handleSaveProfile = async () => {
    if (!profile.name.trim()) { toast.error("Display name is required."); return; }
    setSavingProfile(true);
    try {
      const data = await adminFetch("/api/auth/update-profile", {
        method: "PATCH",
        body: { name: profile.name.trim() },
      });
      // update localStorage so header reflects change
      const stored = localStorage.getItem("apt_admin_user");
      if (stored) {
        const u = JSON.parse(stored);
        localStorage.setItem("apt_admin_user", JSON.stringify({ ...u, name: data.user?.name ?? profile.name }));
      }
      toast.success("Profile saved!");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  // ── Security state ─────────────────────────────────────────────────────────
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [changingPw, setChangingPw] = useState(false);

  const handlePasswordChange = async () => {
    if (!pwForm.current.trim()) { toast.error("Current password is required."); return; }
    if (!pwForm.newPw.trim()) { toast.error("New password is required."); return; }
    if (pwForm.newPw.length < 6) { toast.error("New password must be at least 6 characters."); return; }
    if (pwForm.newPw !== pwForm.confirm) { toast.error("Passwords do not match."); return; }
    setChangingPw(true);
    try {
      await adminFetch("/api/auth/change-password", {
        method: "PATCH",
        body: { currentPassword: pwForm.current, newPassword: pwForm.newPw },
      });
      toast.success("Password changed successfully!");
      setPwForm({ current: "", newPw: "", confirm: "" });
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to change password.");
    } finally {
      setChangingPw(false);
    }
  };

  // ── Shared ─────────────────────────────────────────────────────────────────
  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "profile", label: "Profile", icon: <User size={14} strokeWidth={2} /> },
    { key: "security", label: "Security", icon: <Lock size={14} strokeWidth={2} /> },
  ];

  const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white";
  const inputStyle = { border: "1px solid var(--gray-border)", color: "var(--black)" };

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Settings</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>Manage your admin account preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white rounded-2xl p-1 overflow-x-auto" style={{ border: "1px solid var(--gray-border)" }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold transition-all whitespace-nowrap"
            style={tab === t.key ? { background: "var(--primary)", color: "#fff" } : { color: "var(--gray-text)" }}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--gray-border)" }}>

        {/* ── Profile ── */}
        {tab === "profile" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Admin Profile</p>

            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{ background: "var(--primary)" }}>
                {profile.name ? profile.name.charAt(0).toUpperCase() : "A"}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--black)" }}>{profile.name || "Admin"}</p>
                <p className="text-xs" style={{ color: "var(--gray-text)" }}>{profile.email || "admin@actionplustax.com"}</p>
                <p className="text-[10px] mt-1 px-2 py-0.5 rounded-full inline-block font-bold" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>Administrator</p>
              </div>
            </div>


          </div>
        )}

        {/* ── Security ── */}
        {tab === "security" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Change Password</p>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>Update your admin account password. Choose a strong password with at least 6 characters.</p>

            <div className="space-y-4">
              {/* Current password */}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={pwForm.current}
                    onChange={e => setPwForm(f => ({ ...f, current: e.target.value }))}
                    placeholder="••••••••"
                    className={`${inputClass} pr-10`}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                  <button type="button" onClick={() => setShowCurrent(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }}>
                    {showCurrent ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* New password */}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>New Password</label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    value={pwForm.newPw}
                    onChange={e => setPwForm(f => ({ ...f, newPw: e.target.value }))}
                    placeholder="Min 6 characters"
                    className={`${inputClass} pr-10`}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                  <button type="button" onClick={() => setShowNew(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }}>
                    {showNew ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Confirm new password */}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={pwForm.confirm}
                    onChange={e => setPwForm(f => ({ ...f, confirm: e.target.value }))}
                    placeholder="Repeat new password"
                    className={`${inputClass} pr-10`}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                  <button type="button" onClick={() => setShowConfirm(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }}>
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {pwForm.confirm && pwForm.newPw !== pwForm.confirm && (
                  <p className="text-xs mt-1" style={{ color: "var(--danger)" }}>Passwords do not match</p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <button
                onClick={handlePasswordChange}
                disabled={changingPw}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 disabled:opacity-50"
                style={{ background: "var(--primary)" }}
              >
                <Lock size={14} />
                {changingPw ? "Changing…" : "Change Password"}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
