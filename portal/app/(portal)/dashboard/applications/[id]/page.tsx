"use client";


import Link from "next/link";
import StatusBadge from "../../../../components/StatusBadge";
import { ArrowLeft, Download, Plus, Check } from "lucide-react";

const data: Record<string, {
  id: string; service: string; category: string; submittedDate: string; status: string;
  filingStatus: string; notes: string;
  documents: { name: string; type: string; size: string; date: string; status: string }[];
  timeline: { label: string; date: string; done: boolean }[];
  messages: { from: string; text: string; date: string }[];
}> = {
  "APP-001": {
    id: "APP-001", service: "Tax Preparation & Filing", category: "Tax Services",
    submittedDate: "April 08, 2025", status: "in_review", filingStatus: "Single",
    notes: "Please upload your bank statements for Q4 2024 as well.",
    documents: [
      { name: "W2_2024.pdf",          type: "PDF", size: "1.2 MB", date: "Apr 08, 2025", status: "approved" },
      { name: "Bank_Statement_Q1.pdf", type: "PDF", size: "3.4 MB", date: "Apr 08, 2025", status: "pending"  },
      { name: "ID_Proof.jpg",          type: "JPG", size: "0.8 MB", date: "Apr 08, 2025", status: "approved" },
    ],
    timeline: [
      { label: "Application Submitted",  date: "Apr 08, 2025 — 10:22 AM", done: true  },
      { label: "Documents Received",     date: "Apr 08, 2025 — 11:00 AM", done: true  },
      { label: "Under Review",           date: "Apr 09, 2025 — 9:00 AM",  done: true  },
      { label: "Completed",              date: "Pending",                  done: false },
    ],
    messages: [
      { from: "Admin", text: "We have received your application and documents. Currently under review.",               date: "Apr 09, 2025" },
      { from: "You",   text: "Thank you! Let me know if you need any additional documents.",                           date: "Apr 09, 2025" },
      { from: "Admin", text: "We may need your bank statements for Q4 2024. Please upload them when possible.",       date: "Apr 09, 2025" },
    ],
  },
};

const typeColors: Record<string, { bg: string; color: string }> = {
  PDF: { bg: "var(--primary-light)", color: "var(--primary)" },
  JPG: { bg: "#DBEAFE",              color: "#1D4ED8"         },
};

export default async function AppDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = data[id] ?? data["APP-001"];

  return (
    <div className="space-y-5">

      {/* Back + Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href="/dashboard/applications" className="inline-flex items-center gap-1.5 text-xs font-medium mb-2 transition-opacity hover:opacity-70" style={{ color: "var(--gray-text)" }}>
            <ArrowLeft size={14} strokeWidth={2} />
            Back to Applications
          </Link>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>{app.id}</h2>
            <StatusBadge status={app.status} />
          </div>
          <p className="text-sm mt-0.5" style={{ color: "var(--gray-text)" }}>{app.service}</p>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-80"
          style={{ border: "1px solid var(--gray-border)", color: "var(--black)", background: "#fff" }}>
          <Download size={15} strokeWidth={2} />
          Download
        </button>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">
        {/* Left */}
        <div className="xl:col-span-2 space-y-5">

          {/* Details Card */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Application Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Application ID",  value: app.id           },
                { label: "Service",         value: app.service       },
                { label: "Category",        value: app.category      },
                { label: "Submitted Date",  value: app.submittedDate },
                { label: "Filing Status",   value: app.filingStatus  },
                { label: "Status",          value: <StatusBadge status={app.status} /> },
              ].map((row) => (
                <div key={row.label}>
                  <p className="text-xs mb-0.5" style={{ color: "var(--gray-text)" }}>{row.label}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{row.value}</p>
                </div>
              ))}
            </div>
            {app.notes && (
              <div className="mt-4 p-3 rounded-xl" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <p className="text-xs font-bold text-yellow-800 mb-0.5">Admin Note</p>
                <p className="text-xs text-yellow-700">{app.notes}</p>
              </div>
            )}
          </div>

          {/* Documents */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Uploaded Documents</p>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>
                <Plus size={13} strokeWidth={2.5} />
                Upload More
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--gray-light)", borderRadius: "8px" }}>
                    {["File Name", "Type", "Size", "Uploaded", "Status"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold px-3 py-2.5 first:rounded-l-lg last:rounded-r-lg" style={{ color: "var(--gray-text)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {app.documents.map((doc, i) => {
                    const tc = typeColors[doc.type] ?? { bg: "var(--gray-light)", color: "var(--gray-text)" };
                    return (
                      <tr key={doc.name} style={{ borderBottom: i < app.documents.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                      >
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: tc.bg, color: tc.color }}>
                              {doc.type}
                            </div>
                            <span className="text-sm font-semibold" style={{ color: "var(--black)" }}>{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.type}</td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.size}</td>
                        <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{doc.date}</td>
                        <td className="px-3 py-3"><StatusBadge status={doc.status} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Messages</p>
            <div className="space-y-3 mb-4">
              {app.messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.from === "You" ? "flex-row-reverse" : ""}`}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: msg.from === "You" ? "var(--primary)" : "var(--black)" }}>
                    {msg.from === "You" ? "JD" : "A"}
                  </div>
                  <div className={`max-w-[75%] sm:max-w-sm flex flex-col ${msg.from === "You" ? "items-end" : "items-start"}`}>
                    <div className="px-4 py-2.5 rounded-2xl text-sm"
                      style={msg.from === "You"
                        ? { background: "var(--primary)", color: "#fff", borderBottomRightRadius: "4px" }
                        : { background: "var(--gray-light)", color: "var(--black)", borderBottomLeftRadius: "4px" }
                      }
                    >
                      {msg.text}
                    </div>
                    <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>{msg.from} · {msg.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Type a message..."
                className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
              <button className="text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90" style={{ background: "var(--primary)" }}>
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div>
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
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
