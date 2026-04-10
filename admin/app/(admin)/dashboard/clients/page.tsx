"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Eye, Mail, Phone } from "lucide-react";

const clients = [
  { id: "USR-001", name: "John Doe",       email: "john@example.com",    phone: "+1 (555) 000-0001", apps: 4, docs: 7, joined: "Jan 15, 2025", lastActive: "Apr 10, 2025", status: "active"   },
  { id: "USR-002", name: "Sarah Williams", email: "sarah@example.com",   phone: "+1 (555) 000-0002", apps: 2, docs: 5, joined: "Feb 03, 2025", lastActive: "Apr 09, 2025", status: "active"   },
  { id: "USR-003", name: "Michael Chen",   email: "michael@example.com", phone: "+1 (555) 000-0003", apps: 1, docs: 2, joined: "Feb 20, 2025", lastActive: "Apr 09, 2025", status: "active"   },
  { id: "USR-004", name: "Emily Johnson",  email: "emily@example.com",   phone: "+1 (555) 000-0004", apps: 3, docs: 4, joined: "Mar 05, 2025", lastActive: "Apr 08, 2025", status: "active"   },
  { id: "USR-005", name: "David Brown",    email: "david@example.com",   phone: "+1 (555) 000-0005", apps: 2, docs: 6, joined: "Mar 12, 2025", lastActive: "Apr 07, 2025", status: "active"   },
  { id: "USR-006", name: "Lisa Garcia",    email: "lisa@example.com",    phone: "+1 (555) 000-0006", apps: 1, docs: 2, joined: "Mar 18, 2025", lastActive: "Apr 06, 2025", status: "inactive" },
  { id: "USR-007", name: "James Wilson",   email: "james@example.com",   phone: "+1 (555) 000-0007", apps: 1, docs: 1, joined: "Mar 22, 2025", lastActive: "Apr 05, 2025", status: "active"   },
  { id: "USR-008", name: "Maria Martinez", email: "maria@example.com",   phone: "+1 (555) 000-0008", apps: 1, docs: 3, joined: "Apr 01, 2025", lastActive: "Apr 04, 2025", status: "active"   },
];

const initials = (name: string) => name.split(" ").map(w => w[0]).join("").toUpperCase();
const avatarColors = ["#9245FF","#EA580C","#0891B2","#16A34A","#D97706","#DC2626","#7C3AED","#DB2777"];

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    return !q || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Clients</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{clients.length} registered clients</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Clients", value: clients.length },
          { label: "Active",        value: clients.filter(c => c.status === "active").length },
          { label: "Total Apps",    value: clients.reduce((s, c) => s + c.apps, 0) },
          { label: "Total Docs",    value: clients.reduce((s, c) => s + c.docs, 0) },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-2xl font-bold" style={{ color: "var(--black)" }}>{s.value}</p>
            <p className="text-xs font-semibold mt-1" style={{ color: "var(--gray-text)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by name, email, or client ID..."
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
                {["Client", "Contact", "Applications", "Documents", "Joined", "Last Active", "Status", ""].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: avatarColors[i % avatarColors.length] }}>
                        {initials(c.name)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{c.name}</p>
                        <p className="text-xs" style={{ color: "var(--gray-text)" }}>{c.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-xs mb-1" style={{ color: "var(--gray-text)" }}>
                      <Mail size={11} strokeWidth={2} />
                      {c.email}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--gray-text)" }}>
                      <Phone size={11} strokeWidth={2} />
                      {c.phone}
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>{c.apps}</span>
                    <span className="text-xs ml-1" style={{ color: "var(--gray-text)" }}>apps</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-sm font-bold" style={{ color: "var(--black)" }}>{c.docs}</span>
                    <span className="text-xs ml-1" style={{ color: "var(--gray-text)" }}>files</span>
                  </td>
                  <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{c.joined}</td>
                  <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{c.lastActive}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.status === "active" ? "var(--success)" : "var(--gray-border)" }} />
                      <span style={{ color: c.status === "active" ? "var(--success)" : "var(--gray-text)" }}>
                        {c.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Link href={`/dashboard/clients/${c.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-80"
                      style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                      <Eye size={12} strokeWidth={2.5} />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
