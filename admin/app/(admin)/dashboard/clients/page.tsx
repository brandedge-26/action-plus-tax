"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Eye, Mail, Phone, RefreshCw } from "lucide-react";
import { adminFetch } from "../../../lib/adminApi";

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isEmailVerified: boolean;
  createdAt: string;
};

const initials = (name: string) => name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
const avatarColors = ["#0046BE","#EA580C","#0891B2","#16A34A","#D97706","#DC2626","#7C3AED","#DB2777"];

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ClientsPage() {
  const [users, setUsers]   = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState("");

  const loadUsers = async (q = "") => {
    setLoading(true);
    setError("");
    try {
      const data = await adminFetch(`/api/consultations/admin/users${q ? `?search=${encodeURIComponent(q)}` : ""}`);
      setUsers(data.users ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  // Debounced search
  useEffect(() => {
    const t = setTimeout(() => loadUsers(search), 350);
    return () => clearTimeout(t);
  }, [search]);

  const clients = users.filter(u => u.role === "client");

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Clients</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            {loading ? "Loading…" : `${clients.length} registered clients`}
          </p>
        </div>
        <button
          onClick={() => loadUsers(search)}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all"
          style={{ background: "var(--primary-light)", color: "var(--primary)" }}
        >
          <RefreshCw size={14} strokeWidth={2} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Clients",  value: clients.length },
          { label: "Verified",       value: clients.filter(c => c.isEmailVerified).length },
          { label: "Unverified",     value: clients.filter(c => !c.isEmailVerified).length },
          { label: "Total Users",    value: users.length },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-2xl font-bold" style={{ color: "var(--black)" }}>{s.value}</p>
            <p className="text-xs font-semibold mt-1" style={{ color: "var(--gray-text)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl p-4 text-sm" style={{ background: "var(--danger-light)", color: "var(--danger)", border: "1px solid var(--danger-light)" }}>
          {error}
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by name or email..."
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
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw size={20} strokeWidth={2} className="animate-spin" style={{ color: "var(--gray-text)" }} />
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-16 text-sm" style={{ color: "var(--gray-text)" }}>
            No clients found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                  {["Client", "Contact", "Email Verified", "Role", "Joined", ""].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {clients.map((c, i) => (
                  <tr
                    key={c._id}
                    style={{ borderBottom: i < clients.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: avatarColors[i % avatarColors.length] }}
                        >
                          {initials(c.name)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{c.name}</p>
                          <p className="text-xs" style={{ color: "var(--gray-text)" }}>{c._id.slice(-8).toUpperCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-xs mb-1" style={{ color: "var(--gray-text)" }}>
                        <Mail size={11} strokeWidth={2} />
                        {c.email}
                      </div>
                      {c.phone && (
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--gray-text)" }}>
                          <Phone size={11} strokeWidth={2} />
                          {c.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: c.isEmailVerified ? "var(--success)" : "var(--gray-border)" }}
                        />
                        <span style={{ color: c.isEmailVerified ? "var(--success)" : "var(--gray-text)" }}>
                          {c.isEmailVerified ? "Verified" : "Unverified"}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={c.role === "admin"
                          ? { background: "var(--primary-light)", color: "var(--primary)" }
                          : { background: "var(--gray-light)", color: "var(--gray-text)" }
                        }
                      >
                        {c.role}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>
                      {fmt(c.createdAt)}
                    </td>
                    <td className="px-4 py-3.5">
                      <Link
                        href={`/dashboard/clients/${c._id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-80"
                        style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                      >
                        <Eye size={12} strokeWidth={2.5} />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
