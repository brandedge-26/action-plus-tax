"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Eye, Download, ChevronDown } from "lucide-react";
import StatusBadge from "../../../components/StatusBadge";

const all = [
  { id: "APP-047", client: "John Doe",       email: "john@example.com",    service: "Tax Preparation & Filing",       category: "Tax Services",      submitted: "Apr 10, 2025", status: "pending",    docs: 3 },
  { id: "APP-046", client: "Sarah Williams", email: "sarah@example.com",   service: "IRS Audit Support & Representation", category: "Tax Resolution",  submitted: "Apr 09, 2025", status: "in_review",  docs: 5 },
  { id: "APP-045", client: "Michael Chen",   email: "michael@example.com", service: "Bookkeeping Services",           category: "Business Services", submitted: "Apr 09, 2025", status: "pending",    docs: 2 },
  { id: "APP-044", client: "Emily Johnson",  email: "emily@example.com",   service: "Tax Planning & Consultation",    category: "Tax Planning",      submitted: "Apr 08, 2025", status: "completed",  docs: 4 },
  { id: "APP-043", client: "David Brown",    email: "david@example.com",   service: "Self-Employed Tax Filing",       category: "Tax Services",      submitted: "Apr 07, 2025", status: "in_review",  docs: 6 },
  { id: "APP-042", client: "Lisa Garcia",    email: "lisa@example.com",    service: "Cryptocurrency Tax Reporting",   category: "Tax Services",      submitted: "Apr 06, 2025", status: "rejected",   docs: 2 },
  { id: "APP-041", client: "James Wilson",   email: "james@example.com",   service: "Tax Extensions",                 category: "Tax Services",      submitted: "Apr 05, 2025", status: "completed",  docs: 1 },
  { id: "APP-040", client: "Maria Martinez", email: "maria@example.com",   service: "Amended Tax Returns",            category: "Tax Services",      submitted: "Apr 04, 2025", status: "pending",    docs: 3 },
];

const statuses = ["all", "pending", "in_review", "completed", "rejected"];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = all.filter((a) => {
    const q = search.toLowerCase();
    const matchQ = !q || a.id.toLowerCase().includes(q) || a.client.toLowerCase().includes(q) || a.service.toLowerCase().includes(q);
    const matchS = status === "all" || a.status === status;
    return matchQ && matchS;
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Applications</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{all.length} total · {all.filter(a => a.status === "pending").length} pending</p>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-80"
          style={{ border: "1px solid var(--gray-border)", color: "var(--black)", background: "#fff" }}>
          <Download size={15} strokeWidth={2} />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
            <input
              type="text"
              placeholder="Search by ID, client name, or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
            />
          </div>
          {/* Status filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-text)" }} />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="pl-9 pr-8 py-2.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)", color: "var(--black)" }}
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s === "all" ? "All Statuses" : s.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-text)" }} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                {["App ID", "Client", "Service", "Submitted", "Docs", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((app, i) => (
                <tr key={app.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="px-4 py-3.5">
                    <Link href={`/dashboard/applications/${app.id}`} className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>{app.id}</Link>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{app.client}</p>
                    <p className="text-xs" style={{ color: "var(--gray-text)" }}>{app.email}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-sm" style={{ color: "var(--black)" }}>{app.service}</p>
                    <p className="text-xs" style={{ color: "var(--gray-text)" }}>{app.category}</p>
                  </td>
                  <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{app.submitted}</td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>{app.docs} files</span>
                  </td>
                  <td className="px-4 py-3.5"><StatusBadge status={app.status} /></td>
                  <td className="px-4 py-3.5">
                    <Link href={`/dashboard/applications/${app.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                      style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                      <Eye size={12} strokeWidth={2.5} />
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-sm" style={{ color: "var(--gray-text)" }}>No applications match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
