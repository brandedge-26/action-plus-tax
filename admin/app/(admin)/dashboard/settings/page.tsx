"use client";

import { useState } from "react";
import { Check, Save, Lock, User, Bell, Eye, EyeOff } from "lucide-react";
import { adminFetch } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Tab = "profile" | "security" | "notifications";

export default function SettingsPage() {
  const [tab, setTab]             = useState<Tab>("profile");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew,     setShowNew]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [changingPw, setChangingPw] = useState(false);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "profile",       label: "Profile",       icon: <User size={14} strokeWidth={2} /> },
    { key: "security",      label: "Security",      icon: <Lock size={14} strokeWidth={2} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={14} strokeWidth={2} /> },
  ];

  const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white";
  const inputStyle = { border: "1px solid var(--gray-border)", color: "var(--black)" };

  const handlePasswordChange = async () => {
    if (!pwForm.current.trim()) { toast.error("Current password is required."); return; }
    if (!pwForm.newPw.trim())   { toast.error("New password is required."); return; }
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

        {/* Profile */}
        {tab === "profile" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Admin Profile</p>

            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{ background: "var(--primary)" }}>
                AD
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Admin</p>
                <p className="text-xs" style={{ color: "var(--gray-text)" }}>admin@actionplustax.com</p>
                <p className="text-[10px] mt-1 px-2 py-0.5 rounded-full inline-block font-bold" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>Administrator</p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--gray-border)", paddingTop: "1.25rem" }}>
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--black)" }}>Account Information</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Display Name</label>
                  <input type="text" defaultValue="Admin" className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Admin Email</label>
                  <input type="email" defaultValue="admin@actionplustax.com" className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <button
                onClick={() => toast.success("Profile saved!")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                <Save size={14} />
                Save Profile
              </button>
            </div>
          </div>
        )}

        {/* Security */}
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

        {/* Notifications */}
        {tab === "notifications" && (
          <div className="space-y-4">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Notification Preferences</p>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>Choose which events you want to be alerted about.</p>
            <div className="space-y-1">
              {[
                { label: "New Contact Message",     desc: "Alert when someone submits the contact form",        on: true  },
                { label: "New Appointment Booked",  desc: "Alert when a client books a consultation",          on: true  },
                { label: "Appointment Cancelled",   desc: "Alert when a client cancels an appointment",        on: true  },
                { label: "New Blog Comment",        desc: "Alert when someone comments on a blog post",        on: false },
                { label: "Daily Summary",           desc: "Daily digest of all admin activity",                on: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3.5 rounded-xl"
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 ml-4">
                    <input type="checkbox" defaultChecked={item.on} className="sr-only peer" />
                    <div className="w-10 h-5 rounded-full transition-all bg-gray-200 peer-checked:bg-[var(--primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <button
                onClick={() => toast.success("Notification settings saved!")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                <Check size={14} />
                Save Preferences
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
