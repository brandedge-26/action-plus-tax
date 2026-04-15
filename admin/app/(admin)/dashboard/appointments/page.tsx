"use client";

import { useState, useEffect } from "react";
import { Search, Check, X, RefreshCw, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import StatusBadge from "../../../components/StatusBadge";
import { adminFetch } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Consultation = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: string;
  createdAt: string;
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AppointmentsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [search, setSearch]  = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError]    = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await adminFetch("/api/consultations");
      setConsultations(data.consultations ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await adminFetch(`/api/consultations/${id}/status`, { method: "PATCH", body: { status } });
      setConsultations(prev => prev.map(c => c._id === id ? { ...c, status } : c));
      toast.success(`Status updated to ${status}.`);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Update failed.");
    }
  };

  const filtered = consultations.filter((c) => {
    const q = search.toLowerCase();
    return !q || c.fullName.toLowerCase().includes(q) || c.service.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
  });

  // Calendar — current month days with bookings
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const bookedDays = new Set(
    consultations
      .filter(c => c.status !== "cancelled")
      .map(c => {
        const d = new Date(c.date);
        return d.getFullYear() === year && d.getMonth() === month ? d.getDate() : null;
      })
      .filter(Boolean) as number[]
  );

  const pendingCount = consultations.filter(c => c.status === "pending").length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Consultations</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            {loading ? "Loading…" : `${consultations.length} total · ${pendingCount} pending`}
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

      {error && (
        <div className="rounded-xl p-4 text-sm" style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
          {error}
        </div>
      )}

      <div className="grid xl:grid-cols-3 gap-5">

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>
              {MONTHS[month]} {year}
            </p>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
                <ChevronLeft size={14} style={{ color: "var(--gray-text)" }} />
              </button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
                <ChevronRight size={14} style={{ color: "var(--gray-text)" }} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 mb-2">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
              <div key={d} className="text-center text-[10px] font-bold py-1" style={{ color: "var(--gray-text)" }}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const hasApt = bookedDays.has(day);
              const isToday = day === today.getDate();
              return (
                <button
                  key={day}
                  className="aspect-square rounded-lg flex items-center justify-center text-xs font-semibold transition-all hover:opacity-80 relative"
                  style={hasApt
                    ? { background: "var(--primary)", color: "#fff" }
                    : isToday
                    ? { background: "var(--primary-light)", color: "var(--primary)" }
                    : { color: "var(--black)" }
                  }
                >
                  {day}
                  {hasApt && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/60" />}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 flex gap-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: "var(--primary)" }} />
              <span className="text-xs" style={{ color: "var(--gray-text)" }}>Has booking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: "var(--primary-light)" }} />
              <span className="text-xs" style={{ color: "var(--gray-text)" }}>Today</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="xl:col-span-2 space-y-4">
          {/* Search */}
          <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
              <input
                type="text"
                placeholder="Search by name, email, or service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <RefreshCw size={20} strokeWidth={2} className="animate-spin" style={{ color: "var(--gray-text)" }} />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-sm" style={{ color: "var(--gray-text)" }}>
                No consultations found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                      {["Client", "Service", "Date & Time", "Status", "Actions"].map((h) => (
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
                          <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{c.fullName}</p>
                          <p className="text-xs" style={{ color: "var(--gray-text)" }}>{c.email}</p>
                        </td>
                        <td className="px-4 py-3.5 text-xs max-w-[140px] truncate" style={{ color: "var(--gray-text)" }}>
                          {c.service}
                        </td>
                        <td className="px-4 py-3.5">
                          <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{c.date}</p>
                          <p className="text-xs flex items-center gap-1" style={{ color: "var(--gray-text)" }}>
                            <Clock size={10} strokeWidth={2} />
                            {c.time}
                          </p>
                        </td>
                        <td className="px-4 py-3.5"><StatusBadge status={c.status} /></td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateStatus(c._id, "confirmed")}
                              title="Confirm"
                              className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                              style={{ background: "var(--success-light)", color: "var(--success)" }}
                            >
                              <Check size={13} strokeWidth={2.5} />
                            </button>
                            <button
                              onClick={() => updateStatus(c._id, "scheduled")}
                              title="Mark Scheduled"
                              className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                              style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                            >
                              <RefreshCw size={12} strokeWidth={2.5} />
                            </button>
                            <button
                              onClick={() => updateStatus(c._id, "cancelled")}
                              title="Cancel"
                              className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                              style={{ background: "var(--danger-light)", color: "var(--danger)" }}
                            >
                              <X size={13} strokeWidth={2.5} />
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
        </div>
      </div>
    </div>
  );
}
