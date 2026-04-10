"use client";

import { useState } from "react";
import StatusBadge from "../../../components/StatusBadge";
import { Search, Upload } from "lucide-react";

const documents = [
  { id: 1, name: "W2_2024.pdf",            type: "PDF",  size: "1.2 MB", application: "APP-001", service: "Tax Preparation & Filing",    uploadDate: "Apr 08, 2025", status: "approved" },
  { id: 2, name: "Bank_Statement_Q1.pdf",   type: "PDF",  size: "3.4 MB", application: "APP-001", service: "Tax Preparation & Filing",    uploadDate: "Apr 08, 2025", status: "pending"  },
  { id: 3, name: "ID_Proof.jpg",            type: "JPG",  size: "0.8 MB", application: "APP-001", service: "Tax Preparation & Filing",    uploadDate: "Apr 08, 2025", status: "approved" },
  { id: 4, name: "Tax_Return_2023.pdf",     type: "PDF",  size: "2.1 MB", application: "APP-002", service: "Tax Planning & Consultation", uploadDate: "Apr 05, 2025", status: "pending"  },
  { id: 5, name: "Income_Statement.pdf",    type: "PDF",  size: "1.7 MB", application: "APP-002", service: "Tax Planning & Consultation", uploadDate: "Apr 05, 2025", status: "rejected" },
  { id: 6, name: "1099_Form.pdf",           type: "PDF",  size: "0.5 MB", application: "APP-003", service: "Self-Employed Tax Filing",    uploadDate: "Mar 28, 2025", status: "approved" },
  { id: 7, name: "Business_Expenses.xlsx",  type: "XLSX", size: "0.3 MB", application: "APP-003", service: "Self-Employed Tax Filing",    uploadDate: "Mar 28, 2025", status: "approved" },
];

const typeColors: Record<string, { bg: string; color: string }> = {
  PDF:  { bg: "var(--primary-light)", color: "var(--primary)" },
  JPG:  { bg: "#DBEAFE",              color: "#1D4ED8"         },
  PNG:  { bg: "#DBEAFE",              color: "#1D4ED8"         },
  XLSX: { bg: "#DCFCE7",              color: "#15803D"         },
};

export default function DocumentsPage() {
  const [search, setSearch]         = useState("");
  const [statusFilter, setFilter]   = useState("All");
  const [dragOver, setDragOver]     = useState(false);

  const counts = {
    All:      documents.length,
    Approved: documents.filter((d) => d.status === "approved").length,
    Pending:  documents.filter((d) => d.status === "pending").length,
    Rejected: documents.filter((d) => d.status === "rejected").length,
  };

  const filtered = documents.filter((d) => {
    const q = search.toLowerCase();
    const matchSearch = d.name.toLowerCase().includes(q) || d.application.toLowerCase().includes(q) || d.service.toLowerCase().includes(q);
    const matchStatus = statusFilter === "All" || d.status === statusFilter.toLowerCase();
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>My Documents</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{documents.length} total files</p>
        </div>
        <label
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-all hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          <Upload size={16} strokeWidth={2.5} />
          Upload Document
          <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
        </label>
      </div>

      {/* Stat Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(Object.entries(counts) as [string, number][]).map(([label, count]) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className="p-4 rounded-2xl text-left transition-all"
            style={statusFilter === label
              ? { background: "var(--primary-light)", border: "1px solid #FECACA" }
              : { background: "#fff", border: "1px solid var(--gray-border)" }
            }
          >
            <p className="text-2xl font-bold" style={{ color: statusFilter === label ? "var(--primary)" : "var(--black)" }}>{count}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>{label}</p>
          </button>
        ))}
      </div>

      {/* Drop Zone */}
      <div
        onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className="rounded-2xl p-8 text-center transition-all cursor-pointer"
        style={{
          border: `2px dashed ${dragOver ? "var(--primary)" : "var(--gray-border)"}`,
          background: dragOver ? "var(--primary-light)" : "#fff",
        }}
      >
        <Upload size={28} strokeWidth={1.5} className="mx-auto mb-2" style={{ color: "var(--gray-text)" }} />
        <p className="text-sm font-medium" style={{ color: "var(--black)" }}>
          Drag & drop files or{" "}
          <span className="font-bold cursor-pointer hover:underline" style={{ color: "var(--primary)" }}>browse</span>
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>PDF, JPG, PNG — Max 10MB per file</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by file name, application ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)" }}
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
                {["File", "Type", "Size", "Application", "Uploaded", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-5 py-3.5 uppercase tracking-wide" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-14 text-sm" style={{ color: "var(--gray-text)" }}>No documents found.</td></tr>
              ) : filtered.map((doc, i) => {
                const tc = typeColors[doc.type] ?? { bg: "var(--gray-light)", color: "var(--gray-text)" };
                return (
                  <tr
                    key={doc.id}
                    className="transition-colors"
                    style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: tc.bg, color: tc.color }}>
                          {doc.type}
                        </div>
                        <span className="text-sm font-semibold" style={{ color: "var(--black)" }}>{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{doc.type}</td>
                    <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{doc.size}</td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>{doc.application}</p>
                      <p className="text-xs truncate max-w-[130px]" style={{ color: "var(--gray-text)" }}>{doc.service}</p>
                    </td>
                    <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{doc.uploadDate}</td>
                    <td className="px-5 py-4"><StatusBadge status={doc.status} /></td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <button className="text-xs font-semibold hover:underline" style={{ color: "var(--gray-text)" }}>Preview</button>
                        <button className="text-xs font-semibold hover:underline" style={{ color: "var(--primary)" }}>Download</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3" style={{ borderTop: "1px solid var(--gray-border)", background: "var(--gray-light)" }}>
          <p className="text-xs" style={{ color: "var(--gray-text)" }}>Showing {filtered.length} of {documents.length} documents</p>
        </div>
      </div>
    </div>
  );
}
