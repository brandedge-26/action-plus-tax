"use client";

import { useState, useEffect } from "react";
import { Search, Eye, Mail, Phone, RefreshCw, X, ShieldCheck, ShieldOff } from "lucide-react";
import { adminFetch } from "../../../lib/adminApi";
import toast from "react-hot-toast";

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
  const [users,   setUsers]   = useState<User[]>([]);
  const [search,  setSearch]  = useState("");
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");
  const [modal,   setModal]   = useState<User | null>(null);

  const loadUsers = async (q = "") => {
    setLoading(true);
    setError("");
    try {
      const data = await adminFetch(`/api/consultations/admin/users${q ? `?search=${encodeURIComponent(q)}` : ""}`);
      setUsers(data.users ?? []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load users.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);
  useEffect(() => {
    const t = setTimeout(() => loadUsers(search), 350);
    return () => clearTimeout(t);
  }, [search]);

  const clients = users.filter(u => u.role === "client");

  return (
    <div className="space-y-5">

      {/* Header */}
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
          { label: "Total Clients", value: clients.length                               },
          { label: "Verified",      value: clients.filter(c => c.isEmailVerified).length },
          { label: "Unverified",    value: clients.filter(c => !c.isEmailVerified).length},
          { label: "Total Users",   value: users.length                                 },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-2xl font-bold" style={{ color: "var(--black)" }}>{s.value}</p>
            <p className="text-xs font-semibold mt-1" style={{ color: "var(--gray-text)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl p-4 text-sm" style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
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
          <div className="text-center py-16 text-sm" style={{ color: "var(--gray-text)" }}>No clients found.</div>
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
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.isEmailVerified ? "var(--success)" : "var(--gray-border)" }} />
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
                      <button
                        onClick={() => setModal(c)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-80"
                        style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                      >
                        <Eye size={12} strokeWidth={2.5} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Client Detail Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(4,30,66,0.45)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl p-6 space-y-5 relative"
            style={{ background: "#fff", boxShadow: "0 24px 64px rgba(1,86,126,0.18)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-70"
              style={{ background: "var(--gray-light)", color: "var(--black)" }}
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* Avatar + Name */}
            <div className="flex items-center gap-4 pr-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                style={{ background: avatarColors[clients.indexOf(modal) % avatarColors.length] || "var(--primary)" }}
              >
                {initials(modal.name)}
              </div>
              <div>
                <p className="text-base font-bold" style={{ color: "var(--black)" }}>{modal.name}</p>
                <p className="text-xs" style={{ color: "var(--gray-text)" }}>ID: {modal._id.slice(-8).toUpperCase()}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                    {modal.role}
                  </span>
                  {modal.isEmailVerified
                    ? <span className="flex items-center gap-1 text-[10px] font-bold" style={{ color: "var(--success)" }}>
                        <ShieldCheck size={11} /> Verified
                      </span>
                    : <span className="flex items-center gap-1 text-[10px] font-bold" style={{ color: "var(--gray-text)" }}>
                        <ShieldOff size={11} /> Unverified
                      </span>
                  }
                </div>
              </div>
            </div>

            {/* Info grid */}
            <div className="space-y-3">
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Email</p>
                <a href={`mailto:${modal.email}`} className="text-xs font-semibold hover:underline" style={{ color: "var(--primary)" }}>{modal.email}</a>
              </div>
              {modal.phone && (
                <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Phone</p>
                  <a href={`tel:${modal.phone}`} className="text-xs font-semibold" style={{ color: "var(--black)" }}>{modal.phone}</a>
                </div>
              )}
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Member Since</p>
                <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{fmt(modal.createdAt)}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-1" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <a
                href={`mailto:${modal.email}`}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl hover:opacity-90"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                <Mail size={14} /> Email
              </a>
              {modal.phone && (
                <a
                  href={`tel:${modal.phone}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90"
                  style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                >
                  <Phone size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
