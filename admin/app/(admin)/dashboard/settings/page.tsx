"use client";

import { useState } from "react";
import { Check, Save } from "lucide-react";

type Tab = "general" | "notifications" | "email" | "security";

export default function SettingsPage() {
  const [tab, setTab]         = useState<Tab>("general");
  const [saved, setSaved]     = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white";
  const inputStyle = { border: "1px solid var(--gray-border)", color: "var(--black)" };

  const tabs: { key: Tab; label: string }[] = [
    { key: "general",       label: "General"       },
    { key: "notifications", label: "Notifications" },
    { key: "email",         label: "Email Templates"},
    { key: "security",      label: "Security"      },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Settings</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>Configure your admin panel and platform settings</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white rounded-2xl p-1 overflow-x-auto" style={{ border: "1px solid var(--gray-border)" }}>
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className="flex-shrink-0 py-2 px-4 rounded-xl text-sm font-semibold transition-all"
            style={tab === t.key ? { background: "var(--primary)", color: "#fff" } : { color: "var(--gray-text)" }}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--gray-border)" }}>

        {tab === "general" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>General Settings</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Business Name",   value: "Action Plus Tax",           type: "text"  },
                { label: "Admin Email",     value: "admin@actionplustax.com",   type: "email" },
                { label: "Phone Number",    value: "+1 (555) 000-0000",         type: "tel"   },
                { label: "Business Address",value: "New York, NY, USA",         type: "text"  },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>{f.label}</label>
                  <input type={f.type} defaultValue={f.value} className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                  />
                </div>
              ))}
            </div>

            <div className="pt-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--black)" }}>Portal Settings</p>
              <div className="space-y-1">
                {[
                  { label: "Allow New Registrations",    desc: "Enable clients to create new accounts",       on: true  },
                  { label: "Allow Appointment Booking",  desc: "Clients can book appointments via portal",    on: true  },
                  { label: "Maintenance Mode",           desc: "Show maintenance message to all clients",     on: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl"
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
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
          </div>
        )}

        {tab === "notifications" && (
          <div className="space-y-4">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Notification Settings</p>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>Choose when the admin receives email alerts</p>
            <div className="space-y-1">
              {[
                { label: "New Application Submitted",  desc: "Email when a client submits a new application",  on: true  },
                { label: "New Document Uploaded",       desc: "Email when a client uploads a document",         on: true  },
                { label: "New Appointment Booked",      desc: "Email when a client books an appointment",       on: true  },
                { label: "New Client Registration",     desc: "Email when a new client creates an account",     on: true  },
                { label: "Message from Client",         desc: "Email when a client sends a message",            on: false },
                { label: "Daily Summary Report",        desc: "Daily digest of all platform activity",          on: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl"
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
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

        {tab === "email" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Email Templates</p>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>Customize automated emails sent to clients</p>
            <div className="space-y-3">
              {[
                { label: "Application Confirmation", subject: "Your application APP-{ID} has been received", preview: "Thank you for submitting your application. We will review it and update you shortly." },
                { label: "Document Approved",         subject: "Your document has been approved",             preview: "Your document {DOC_NAME} for application APP-{ID} has been approved." },
                { label: "Document Rejected",         subject: "Action required: Document rejected",          preview: "Your document {DOC_NAME} was rejected. Please re-upload a clearer version." },
                { label: "Status Update",             subject: "Your application status has been updated",    preview: "Your application APP-{ID} status has been changed to {STATUS}." },
                { label: "Appointment Confirmed",     subject: "Your appointment is confirmed",              preview: "Your appointment on {DATE} at {TIME} has been confirmed." },
              ].map((tpl) => (
                <div key={tpl.label} className="rounded-xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
                  <p className="text-sm font-bold mb-2" style={{ color: "var(--black)" }}>{tpl.label}</p>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--gray-text)" }}>Subject</label>
                      <input type="text" defaultValue={tpl.subject} className={inputClass} style={{ ...inputStyle, background: "var(--gray-light)" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--gray-text)" }}>Body Preview</label>
                      <textarea rows={2} defaultValue={tpl.preview}
                        className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all resize-none"
                        style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)", color: "var(--black)" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "security" && (
          <div className="space-y-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Security Settings</p>
            <div className="space-y-3">
              <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>Change Admin Password</p>
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
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--black)" }}>Access & Security</p>
              <div className="space-y-1">
                {[
                  { label: "Two-Factor Authentication",  desc: "Require 2FA for admin login",          on: false },
                  { label: "Session Timeout",            desc: "Auto-logout after 30 min inactivity",  on: true  },
                  { label: "Login Activity Alerts",      desc: "Email on new admin login from new IP", on: true  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl"
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
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
          </div>
        )}

        {/* Save button */}
        <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: "1px solid var(--gray-border)" }}>
          {saved
            ? <span className="flex items-center gap-2 text-sm text-green-600"><Check size={16} strokeWidth={2.5} /> Settings saved!</span>
            : <div />
          }
          <button onClick={save} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90" style={{ background: "var(--primary)" }}>
            <Save size={14} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
