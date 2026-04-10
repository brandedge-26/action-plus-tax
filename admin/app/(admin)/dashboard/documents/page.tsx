"use client";

import { useState } from "react";
import { Search, Download, Check, X, Filter, ChevronDown } from "lucide-react";
import StatusBadge from "../../../components/StatusBadge";

const docs = [
  { id: 1, name: "W2_2024.pdf",          app: "APP-047", client: "John Doe",       type: "PDF", size: "1.2 MB", date: "Apr 10, 2025", status: "pending"  },
  { id: 2, name: "Bank_Statement_Q1.pdf", app: "APP-047", client: "John Doe",       type: "PDF", size: "3.4 MB", date: "Apr 10, 2025", status: "pending"  },
  { id: 3, name: "IRS_Letter_2024.pdf",   app: "APP-046", client: "Sarah Williams", type: "PDF", size: "0.5 MB", date: "Apr 09, 2025", status: "approved" },
  { id: 4, name: "Business_Records.xlsx", app: "APP-045", client: "Michael Chen",   type: "XLS", size: "2.1 MB", date: "Apr 09, 2025", status: "approved" },
  { id: 5, name: "ID_Proof.jpg",          app: "APP-047", client: "John Doe",       type: "JPG", size: "0.8 MB", date: "Apr 10, 2025", status: "rejected" },
  { id: 6, name: "1099_2024.pdf",         app: "APP-043", client: "David Brown",    type: "PDF", size: "1.8 MB", date: "Apr 07, 2025", status: "approved" },
  { id: 7, name: "Expense_Receipts.pdf",  app: "APP-043", client: "David Brown",    type: "PDF", size: "4.2 MB", date: "Apr 07, 2025", status: "pending"  },
  { id: 8, name: "Crypto_Report.pdf",     app: "APP-042", client: "Lisa Garcia",    type: "PDF", size: "0.9 MB", date: "Apr 06, 2025", status: "rejected" },
];

const typeColors: Record<string, { bg: string; color: string }> = {
  PDF: { bg: "var(--primary-light)", color: "var(--primary)" },
  JPG: { bg: "#DBEAFE",              color: "#1D4ED8"         },
  PNG: { bg: "#D1FAE5",              color: "#065F46"         },
  XLS: { bg: "#DCFCE7",              color: "#16A34A"         },
};

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [statuses, setStatuses] = useState<Record<number, string>>(
    Object.fromEntries(docs.map((d) => [d.id, d.status]))
  );

  const tabs = [
    { key: "all",      label: "All",      count: docs.length },
    { key: "pending",  label: "Pending",  count: docs.filter(d => d.status === "pending").length },
    { key: "approved", label: "Approved", count: docs.filter(d => d.status === "approved").length },
    { key: "rejected", label: "Rejected", count: docs.filter(d => d.status === "rejected").length },
  ];

  const filtered = docs.filter((d) => {
    const q = search.toLowerCase();
    const matchQ = !q || d.name.toLowerCase().includes(q) || d.client.toLowerCase().includes(q) || d.app.toLowerCase().includes(q);
    const matchF = filter === "all" || d.status === filter;
    return matchQ && matchF;
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Documents</h2>
        <p className="text-sm" style={{ color: "var(--gray-text)" }}>Review and manage all uploaded client documents</p>
      </div>

      {/* Stats tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setFilter(t.key)}
            className="p-4 rounded-2xl text-left transition-all"
            style={{
              background: filter === t.key ? "var(--primary)" : "#fff",
              border: `1px solid ${filter === t.key ? "var(--primary)" : "var(--gray-border)"}`,
            }}
          >
            <p className="text-2xl font-bold" style={{ color: filter === t.key ? "#fff" : "var(--black)" }}>{t.count}</p>
            <p className="text-xs font-semibold mt-1" style={{ color: filter === t.key ? "rgba(255,255,255,0.75)" : "var(--gray-text)" }}>{t.label}</p>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by file name, client, or application ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                {["Document", "Application", "Client", "Size", "Uploaded", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((doc, i) => {
                const tc = typeColors[doc.type] ?? { bg: "var(--gray-light)", color: "var(--gray-text)" };
                return (
                  <tr key={doc.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: tc.bg, color: tc.color }}>{doc.type}</div>
                        <span className="text-sm font-semibold" style={{ color: "var(--black)" }}>{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>{doc.app}</span>
                    </td>
                    <td className="px-4 py-3.5 text-sm" style={{ color: "var(--black)" }}>{doc.client}</td>
                    <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{doc.size}</td>
                    <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{doc.date}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={statuses[doc.id]} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setStatuses(p => ({ ...p, [doc.id]: "approved" }))}
                          title="Approve"
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                          style={{ background: "var(--success-light)", color: "var(--success)" }}>
                          <Check size={13} strokeWidth={2.5} />
                        </button>
                        <button
                          onClick={() => setStatuses(p => ({ ...p, [doc.id]: "rejected" }))}
                          title="Reject"
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                          style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
                          <X size={13} strokeWidth={2.5} />
                        </button>
                        <button
                          title="Download"
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                          style={{ background: "var(--gray-light)", color: "var(--gray-text)" }}>
                          <Download size={13} strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
