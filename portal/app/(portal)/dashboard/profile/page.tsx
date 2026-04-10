"use client";

import { useState } from "react";
import { Camera, Check } from "lucide-react";

type Tab = "personal" | "security" | "notifications";

export default function ProfilePage() {
  const [tab, setTab]     = useState<Tab>("personal");
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white";
  const inputStyle = { border: "1px solid var(--gray-border)", color: "var(--black)" };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Profile Settings</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>Manage your account information and preferences</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold" style={{ background: "var(--primary)" }}>JD</div>
            <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white" style={{ background: "var(--black)" }}>
              <Camera size={11} strokeWidth={2} className="text-white" />
            </button>
          </div>
          <div className="flex-1">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>John Doe</p>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>john@example.com</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs" style={{ color: "var(--gray-text)" }}>Active Account</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            {[{ v: "4", l: "Applications" }, { v: "7", l: "Documents" }, { v: "4", l: "Appointments" }].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-xl font-bold" style={{ color: "var(--black)" }}>{s.v}</p>
                <p className="text-xs" style={{ color: "var(--gray-text)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white rounded-2xl p-1" style={{ border: "1px solid var(--gray-border)" }}>
        {(["personal", "security", "notifications"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-2 px-4 rounded-xl text-sm font-semibold capitalize transition-all"
            style={tab === t ? { background: "var(--primary)", color: "#fff" } : { color: "var(--gray-text)" }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--gray-border)" }}>

        {tab === "personal" && (
          <div className="space-y-4">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Personal Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "First Name",  type: "text",  value: "John",                          span: false },
                { label: "Last Name",   type: "text",  value: "Doe",                           span: false },
                { label: "Email Address", type: "email", value: "john@example.com",            span: false },
                { label: "Phone Number",  type: "tel",   value: "+1 (555) 000-0000",           span: false },
                { label: "Address",       type: "text",  value: "123 Main St, New York, NY",   span: true  },
                { label: "Date of Birth", type: "date",  value: "1990-01-15",                  span: false },
              ].map((f) => (
                <div key={f.label} className={f.span ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>{f.label}</label>
                  <input
                    type={f.type}
                    defaultValue={f.value}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "security" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Security Settings</p>
            <div className="space-y-3">
              <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>Change Password</p>
              {["Current Password", "New Password", "Confirm New Password"].map((label) => (
                <div key={label}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>{label}</label>
                  <input type="password" placeholder="••••••••" className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
              ))}
            </div>
            <div className="pt-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--black)" }}>Login Methods</p>
              <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg border flex items-center justify-center" style={{ borderColor: "var(--gray-border)" }}>
                    <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                      <path d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h13.2c-.6 3-2.4 5.6-5 7.3v6h8c4.7-4.3 7.3-10.7 7.3-17.5z" fill="#4285F4"/>
                      <path d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-8-6c-2.1 1.4-4.8 2.2-7.8 2.2-6 0-11.1-4-12.9-9.4H2.8v6.2C6.7 42.8 14.8 48 24 48z" fill="#34A853"/>
                      <path d="M11.1 28.9c-.5-1.4-.7-2.8-.7-4.4s.2-3 .7-4.4v-6.2H2.8C1 17.4 0 20.6 0 24s1 6.6 2.8 9.1l8.3-4.2z" fill="#FBBC05"/>
                      <path d="M24 9.5c3.4 0 6.4 1.2 8.8 3.4l6.5-6.5C35.9 2.8 30.5.5 24 .5 14.8.5 6.7 5.7 2.8 14.1l8.3 6.2C12.9 13.5 18 9.5 24 9.5z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>Google Account</p>
                    <p className="text-xs" style={{ color: "var(--gray-text)" }}>Not connected</p>
                  </div>
                </div>
                <button className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>Connect</button>
              </div>
            </div>
            <div className="pt-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--black)" }}>Danger Zone</p>
              <button className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                style={{ border: "1px solid #FECACA", color: "var(--primary)", background: "var(--primary-light)" }}>
                Delete Account
              </button>
            </div>
          </div>
        )}

        {tab === "notifications" && (
          <div className="space-y-4">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Notification Preferences</p>
            <div className="space-y-1">
              {[
                { label: "Application Status Updates",    desc: "When your application status changes",      on: true  },
                { label: "Document Approval / Rejection", desc: "When your documents are reviewed",          on: true  },
                { label: "Appointment Reminders",         desc: "24h reminder before your appointment",      on: true  },
                { label: "New Messages from Admin",       desc: "Email alerts for new admin messages",       on: true  },
                { label: "Weekly Summary",                desc: "Weekly digest of all portal activity",      on: false },
                { label: "Marketing & Promotions",        desc: "Service updates and tax tips",              on: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl transition-colors"
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
          </div>
        )}

        {/* Save */}
        <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: "1px solid var(--gray-border)" }}>
          {saved ? (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Check size={16} strokeWidth={2.5} />
              Changes saved!
            </div>
          ) : <div />}
          <button
            onClick={save}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
