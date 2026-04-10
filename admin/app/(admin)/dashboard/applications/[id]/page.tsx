"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, MessageSquare, Check, ChevronDown, X } from "lucide-react";
import StatusBadge from "../../../../components/StatusBadge";

const app = {
  id: "APP-047",
  client: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 000-0000",
  address: "123 Main St, New York, NY 10001",
  service: "Tax Preparation & Filing",
  category: "Tax Services",
  submitted: "April 10, 2025",
  status: "pending",
  filingStatus: "Single",
  ssn: "***-**-4321",
  dob: "Jan 15, 1990",
  previousFiling: "Yes",
  notes: "I have both W-2 and some freelance income. Please advise on deductions.",
  documents: [
    { name: "W2_2024.pdf",          type: "PDF", size: "1.2 MB", date: "Apr 10, 2025", status: "approved" },
    { name: "Bank_Statement_Q1.pdf", type: "PDF", size: "3.4 MB", date: "Apr 10, 2025", status: "pending"  },
    { name: "ID_Proof.jpg",          type: "JPG", size: "0.8 MB", date: "Apr 10, 2025", status: "pending"  },
  ],
  timeline: [
    { label: "Application Submitted", date: "Apr 10, 2025 — 9:22 AM", done: true  },
    { label: "Documents Received",    date: "Apr 10, 2025 — 9:30 AM", done: true  },
    { label: "Under Review",          date: "Pending",                 done: false },
    { label: "Completed",             date: "Pending",                 done: false },
  ],
  messages: [
    { from: "Admin", text: "Hello John, we have received your application. We will begin review shortly.", date: "Apr 10, 2025 — 10:00 AM" },
    { from: "Client", text: "Thank you! Let me know if you need any additional documents.", date: "Apr 10, 2025 — 10:30 AM" },
  ],
};

const statuses = ["pending", "in_review", "in_progress", "completed", "rejected"];

const typeColors: Record<string, { bg: string; color: string }> = {
  PDF: { bg: "var(--primary-light)", color: "var(--primary)" },
  JPG: { bg: "#DBEAFE",              color: "#1D4ED8"         },
  PNG: { bg: "#D1FAE5",              color: "#065F46"         },
};

export default function ApplicationDetailPage() {
  const [status, setStatus]   = useState(app.status);
  const [msg, setMsg]         = useState("");
  const [messages, setMessages] = useState(app.messages);
  const [saved, setSaved]     = useState(false);
  const [docStatuses, setDocStatuses] = useState<Record<string, string>>(
    Object.fromEntries(app.documents.map((d) => [d.name, d.status]))
  );

  const handleStatusChange = (s: string) => {
    setStatus(s);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const sendMsg = () => {
    if (!msg.trim()) return;
    setMessages([...messages, { from: "Admin", text: msg.trim(), date: "Now" }]);
    setMsg("");
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <Link href="/dashboard/applications" className="inline-flex items-center gap-1.5 text-xs font-medium mb-2 hover:opacity-70" style={{ color: "var(--gray-text)" }}>
            <ArrowLeft size={14} />
            Back to Applications
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>{app.id}</h2>
            <StatusBadge status={status} />
            {saved && (
              <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                <Check size={12} strokeWidth={2.5} /> Status updated
              </span>
            )}
          </div>
          <p className="text-sm mt-0.5" style={{ color: "var(--gray-text)" }}>{app.service}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {/* Status Changer */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="pl-3 pr-8 py-2.5 rounded-xl text-sm font-semibold outline-none appearance-none cursor-pointer"
              style={{ background: "var(--primary)", color: "#fff", border: "none" }}
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white" />
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-80"
            style={{ border: "1px solid var(--gray-border)", color: "var(--black)", background: "#fff" }}>
            <Download size={15} />
            Download All
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">
        {/* Left */}
        <div className="xl:col-span-2 space-y-5">

          {/* Client Info */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Client Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Full Name",       value: app.client       },
                { label: "Email",           value: app.email        },
                { label: "Phone",           value: app.phone        },
                { label: "Address",         value: app.address      },
                { label: "Date of Birth",   value: app.dob          },
                { label: "Filing Status",   value: app.filingStatus },
                { label: "SSN / Tax ID",    value: app.ssn          },
                { label: "Previous Filing", value: app.previousFiling },
              ].map((row) => (
                <div key={row.label}>
                  <p className="text-xs mb-0.5" style={{ color: "var(--gray-text)" }}>{row.label}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{row.value}</p>
                </div>
              ))}
            </div>
            {app.notes && (
              <div className="mt-4 p-3 rounded-xl" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <p className="text-xs font-bold text-yellow-800 mb-0.5">Client Notes</p>
                <p className="text-xs text-yellow-700">{app.notes}</p>
              </div>
            )}
          </div>

          {/* Documents */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Uploaded Documents</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--gray-light)" }}>
                    {["File", "Type", "Size", "Uploaded", "Status", "Actions"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold px-3 py-2.5 first:rounded-l-lg last:rounded-r-lg" style={{ color: "var(--gray-text)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {app.documents.map((doc, i) => {
                    const tc = typeColors[doc.type] ?? { bg: "var(--gray-light)", color: "var(--gray-text)" };
                    return (
                      <tr key={doc.name} style={{ borderBottom: i < app.documents.length - 1 ? "1px solid var(--gray-light)" : "none" }}>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: tc.bg, color: tc.color }}>{doc.type}</div>
                            <span className="text-sm font-semibold" style={{ color: "var(--black)" }}>{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.type}</td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.size}</td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.date}</td>
                        <td className="px-3 py-3"><StatusBadge status={docStatuses[doc.name]} /></td>
                        <td className="px-3 py-3">
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => setDocStatuses(p => ({ ...p, [doc.name]: "approved" }))}
                              className="text-[10px] font-bold px-2 py-1 rounded-lg transition-all hover:opacity-80"
                              style={{ background: "var(--success-light)", color: "var(--success)" }}
                            >Approve</button>
                            <button
                              onClick={() => setDocStatuses(p => ({ ...p, [doc.name]: "rejected" }))}
                              className="text-[10px] font-bold px-2 py-1 rounded-lg transition-all hover:opacity-80"
                              style={{ background: "var(--danger-light)", color: "var(--danger)" }}
                            >Reject</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={16} style={{ color: "var(--primary)" }} />
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Messages with Client</p>
            </div>
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.from === "Admin" ? "flex-row-reverse" : ""}`}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: m.from === "Admin" ? "var(--primary)" : "var(--black)" }}>
                    {m.from === "Admin" ? "AD" : "C"}
                  </div>
                  <div className={`max-w-[75%] sm:max-w-sm flex flex-col ${m.from === "Admin" ? "items-end" : "items-start"}`}>
                    <div className="px-4 py-2.5 rounded-2xl text-sm"
                      style={m.from === "Admin"
                        ? { background: "var(--primary)", color: "#fff", borderBottomRightRadius: "4px" }
                        : { background: "var(--gray-light)", color: "var(--black)", borderBottomLeftRadius: "4px" }
                      }
                    >{m.text}</div>
                    <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>{m.from} · {m.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Send message to client..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg()}
                className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
              <button onClick={sendMsg} className="text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90" style={{ background: "var(--primary)" }}>Send</button>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div>
          <div className="bg-white rounded-2xl p-5 sticky top-20" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-5" style={{ color: "var(--black)" }}>Application Timeline</p>
            {app.timeline.map((step, i) => (
              <div key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: step.done ? "var(--primary)" : "var(--gray-light)", border: step.done ? "none" : "1px solid var(--gray-border)" }}>
                    {step.done
                      ? <Check size={12} strokeWidth={3} className="text-white" />
                      : <div className="w-2 h-2 rounded-full" style={{ background: "var(--gray-border)" }} />
                    }
                  </div>
                  {i < app.timeline.length - 1 && (
                    <div className="w-0.5 h-10 mt-1" style={{ background: step.done ? "var(--primary-light)" : "var(--gray-border)" }} />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-sm font-semibold" style={{ color: step.done ? "var(--black)" : "var(--gray-text)" }}>{step.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
