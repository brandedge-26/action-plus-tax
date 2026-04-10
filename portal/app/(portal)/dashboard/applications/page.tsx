"use client";

import { useState } from "react";
import Link from "next/link";
import StatusBadge from "../../../components/StatusBadge";
import { Search, Plus, Paperclip, ArrowRight } from "lucide-react";

const applications = [
  { id: "APP-001", service: "Tax Preparation & Filing",    category: "Tax Services",    submittedDate: "Apr 08, 2025", updatedDate: "Apr 09, 2025", status: "in_review", docs: 3 },
  { id: "APP-002", service: "Tax Planning & Consultation", category: "Tax Planning",    submittedDate: "Apr 05, 2025", updatedDate: "Apr 05, 2025", status: "pending",   docs: 2 },
  { id: "APP-003", service: "Self-Employed Tax Filing",    category: "Tax Services",    submittedDate: "Mar 28, 2025", updatedDate: "Apr 01, 2025", status: "completed", docs: 5 },
  { id: "APP-004", service: "Bookkeeping Services",        category: "Business Services", submittedDate: "Mar 20, 2025", updatedDate: "Mar 20, 2025", status: "pending", docs: 1 },
];

const filters = ["All", "Pending", "In Review", "Completed", "Rejected"];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = applications.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch = a.id.toLowerCase().includes(q) || a.service.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    const matchFilter = active === "All" || a.status.replace("_", " ").toLowerCase() === active.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>My Applications</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{applications.length} total applications</p>
        </div>
        <Link
          href="/dashboard/apply"
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          <Plus size={16} strokeWidth={2.5} />
          New Application
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl p-4 space-y-3" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by Application ID or service name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={active === f
                ? { background: "var(--primary)", color: "#fff" }
                : { background: "var(--gray-light)", color: "var(--gray-text)" }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                {["App ID", "Service", "Category", "Submitted", "Last Updated", "Docs", "Status", ""].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-5 py-3.5 uppercase tracking-wide" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-14 text-sm" style={{ color: "var(--gray-text)" }}>
                    No applications found.
                  </td>
                </tr>
              ) : filtered.map((app, i) => (
                <tr
                  key={app.id}
                  className="transition-colors"
                  style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="px-5 py-4">
                    <Link href={`/dashboard/applications/${app.id}`} className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>
                      {app.id}
                    </Link>
                  </td>
                  <td className="px-5 py-4 font-semibold text-sm" style={{ color: "var(--black)" }}>{app.service}</td>
                  <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{app.category}</td>
                  <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{app.submittedDate}</td>
                  <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{app.updatedDate}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--gray-text)" }}>
                      <Paperclip size={12} strokeWidth={2} />
                      {app.docs}
                    </span>
                  </td>
                  <td className="px-5 py-4"><StatusBadge status={app.status} /></td>
                  <td className="px-5 py-4">
                    <Link href={`/dashboard/applications/${app.id}`} className="inline-flex items-center gap-1 text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>
                      View <ArrowRight size={12} strokeWidth={2.5} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3" style={{ borderTop: "1px solid var(--gray-border)", background: "var(--gray-light)" }}>
          <p className="text-xs" style={{ color: "var(--gray-text)" }}>Showing {filtered.length} of {applications.length} applications</p>
        </div>
      </div>
    </div>
  );
}
