"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Eye, Trash2, RefreshCw, ChevronDown, Mail, MessageSquare, X, Phone } from "lucide-react";
import StatusBadge from "../../../components/StatusBadge";
import { getContacts, updateContactStatus, deleteContact } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const statuses = ["all", "new", "read", "replied"];

export default function ApplicationsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading]   = useState(true);
  const [search,  setSearch]    = useState("");
  const [status,  setStatus]    = useState("all");
  const [modal, setModal]       = useState<Contact | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getContacts();
      setContacts(data.contacts ?? []);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to load.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleStatus = async (id: string, s: string) => {
    try {
      await updateContactStatus(id, s);
      setContacts(prev => prev.map(c => c._id === id ? { ...c, status: s } : c));
      if (modal?._id === id) setModal(prev => prev ? { ...prev, status: s } : prev);
      toast.success("Status updated.");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    try {
      await deleteContact(id);
      setContacts(prev => prev.filter(c => c._id !== id));
      if (modal?._id === id) setModal(null);
      toast.success("Deleted.");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed.");
    }
  };

  const openModal = async (c: Contact) => {
    setModal(c);
    if (c.status === "new") await handleStatus(c._id, "read");
  };

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.subject.toLowerCase().includes(q);
    const matchS = status === "all" || c.status === status;
    return matchQ && matchS;
  });

  const newCount = contacts.filter(c => c.status === "new").length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Contact Messages</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            {loading ? "Loading…" : `${contacts.length} total · ${newCount} new`}
          </p>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all"
          style={{ background: "var(--primary-light)", color: "var(--primary)" }}
        >
          <RefreshCw size={14} strokeWidth={2} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
            <input
              type="text"
              placeholder="Search by name, email, or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e)  => (e.target.style.borderColor = "var(--gray-border)")}
            />
          </div>
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-text)" }} />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="pl-9 pr-8 py-2.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)", color: "var(--black)" }}
            >
              {statuses.map(s => (
                <option key={s} value={s}>{s === "all" ? "All Status" : s.charAt(0).toUpperCase() + s.slice(1)}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-text)" }} />
          </div>
        </div>
      </div>

      {/* Full-width Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw size={20} className="animate-spin" style={{ color: "var(--gray-text)" }} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--primary-light)" }}>
              <MessageSquare size={24} style={{ color: "var(--primary)" }} />
            </div>
            <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>No messages found</p>
            <p className="text-xs" style={{ color: "var(--gray-text)" }}>Try adjusting your filters</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                  {["Sender", "Subject", "Date", "Status", "Actions"].map(h => (
                    <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={c._id}
                    style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        {c.status === "new" && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />}
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--black)", fontWeight: c.status === "new" ? 700 : 500 }}>{c.name}</p>
                          <p className="text-xs" style={{ color: "var(--gray-text)" }}>{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs max-w-[200px] truncate" style={{ color: "var(--black)" }}>{c.subject}</td>
                    <td className="px-4 py-3.5 text-xs whitespace-nowrap" style={{ color: "var(--gray-text)" }}>{fmt(c.createdAt)}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={c.status} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openModal(c)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                          style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                          title="View"
                        >
                          <Eye size={12} strokeWidth={2.5} />
                        </button>
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                          style={{ background: "var(--danger-light)", color: "var(--danger)" }}
                          title="Delete"
                        >
                          <Trash2 size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(4,30,66,0.45)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl p-6 space-y-5 relative"
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

            {/* Title + status */}
            <div className="flex items-start justify-between gap-3 pr-10">
              <div>
                <p className="text-base font-bold" style={{ color: "var(--black)" }}>{modal.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>Message Detail</p>
              </div>
              <StatusBadge status={modal.status} />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Email</p>
                <a href={`mailto:${modal.email}`} className="text-xs font-semibold hover:underline break-all" style={{ color: "var(--primary)" }}>{modal.email}</a>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Phone</p>
                {modal.phone
                  ? <a href={`tel:${modal.phone}`} className="text-xs font-semibold" style={{ color: "var(--black)" }}>{modal.phone}</a>
                  : <p className="text-xs" style={{ color: "var(--gray-text)" }}>Not provided</p>
                }
              </div>
            </div>

            <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Subject</p>
              <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{modal.subject}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--gray-text)" }}>Message</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--black)" }}>{modal.message}</p>
            </div>

            <p className="text-xs" style={{ color: "var(--gray-text)" }}>Received: {fmt(modal.createdAt)}</p>

            {/* Status actions */}
            <div className="pt-4 space-y-2" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--gray-text)" }}>Mark As</p>
              <div className="flex gap-2 flex-wrap">
                {["new", "read", "replied"].map(s => (
                  <button
                    key={s}
                    onClick={() => handleStatus(modal._id, s)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80 capitalize"
                    style={modal.status === s
                      ? { background: "var(--primary)", color: "#fff" }
                      : { background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }
                    }
                  >{s}</button>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={`mailto:${modal.email}?subject=Re: ${encodeURIComponent(modal.subject)}`}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl hover:opacity-90"
                  style={{ background: "var(--primary)", color: "#fff" }}
                  onClick={() => handleStatus(modal._id, "replied")}
                >
                  <Mail size={14} /> Reply via Email
                </a>
                {modal.phone && (
                  <a
                    href={`tel:${modal.phone}`}
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90"
                    style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                  >
                    <Phone size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
