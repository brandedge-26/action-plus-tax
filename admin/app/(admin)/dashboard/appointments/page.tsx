"use client";

import { useState, useEffect } from "react";
import {
  Search, Check, X, RefreshCw, ChevronLeft, ChevronRight,
  Clock, Eye, Filter, Phone, Mail,
} from "lucide-react";
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

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];
const statuses = ["all","pending","confirmed","scheduled","cancelled"];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AppointmentsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<Consultation | null>(null);

  // Calendar state
  const today = new Date();
  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [dateFilter, setDateFilter] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch("/api/consultations");
      setConsultations(data.consultations ?? []);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to load.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await adminFetch(`/api/consultations/${id}/status`, { method: "PATCH", body: { status } });
      setConsultations(prev => prev.map(c => c._id === id ? { ...c, status } : c));
      if (selected?._id === id) setSelected(prev => prev ? { ...prev, status } : prev);
      toast.success(`Marked as ${status}.`);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Update failed.");
    }
  };

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
    else setCalMonth(m => m + 1);
  };

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay    = new Date(calYear, calMonth, 1).getDay();

  const bookedDays = new Set(
    consultations
      .filter(c => c.status !== "cancelled")
      .map(c => {
        const d = new Date(c.date);
        return d.getFullYear() === calYear && d.getMonth() === calMonth ? d.getDate() : null;
      })
      .filter(Boolean) as number[]
  );

  const toDateStr = (day: number) =>
    `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const filtered = consultations.filter(c => {
    const q  = search.toLowerCase();
    const matchQ  = !q || c.fullName.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.service.toLowerCase().includes(q);
    const matchS  = statusFilter === "all" || c.status === statusFilter;
    const matchD  = !dateFilter || c.date === dateFilter;
    return matchQ && matchS && matchD;
  });

  const pendingCount = consultations.filter(c => c.status === "pending").length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Appointments</h2>
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

      {/* Calendar — compact */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button onClick={prevMonth} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
              <ChevronLeft size={13} style={{ color: "var(--gray-text)" }} />
            </button>
            <span className="text-sm font-bold min-w-[120px] text-center" style={{ color: "var(--black)" }}>
              {MONTHS[calMonth]} {calYear}
            </span>
            <button onClick={nextMonth} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
              <ChevronRight size={13} style={{ color: "var(--gray-text)" }} />
            </button>
          </div>
          {dateFilter && (
            <button
              onClick={() => setDateFilter(null)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            >
              <X size={11} strokeWidth={2.5} /> Clear filter
            </button>
          )}
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => (
            <div key={d} className="text-center text-[10px] font-bold py-0.5" style={{ color: "var(--gray-text)" }}>{d}</div>
          ))}
        </div>
        {/* Day cells */}
        <div className="grid grid-cols-7 gap-0.5">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day     = i + 1;
            const dateStr = toDateStr(day);
            const hasApt  = bookedDays.has(day);
            const isToday = day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
            const isSelected = dateFilter === dateStr;
            return (
              <button
                key={day}
                onClick={() => setDateFilter(isSelected ? null : dateStr)}
                className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center text-xs font-semibold transition-all hover:opacity-80 relative"
                style={
                  isSelected ? { background: "var(--success)", color: "#fff" }
                  : hasApt   ? { background: "var(--primary)", color: "#fff" }
                  : isToday  ? { background: "#FFF200", color: "#041E42" }
                  : { color: "var(--gray-text)" }
                }
              >
                {day}
                {hasApt && !isSelected && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/60" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
            <input
              type="text"
              placeholder="Search by name, email, or service..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
              onFocus={e => (e.target.style.borderColor = "var(--primary)")}
              onBlur={e => (e.target.style.borderColor = "var(--gray-border)")}
            />
          </div>
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-text)" }} />
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="pl-9 pr-8 py-2.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
              style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)", color: "var(--black)" }}
            >
              {statuses.map(s => (
                <option key={s} value={s}>{s === "all" ? "All Status" : s.charAt(0).toUpperCase() + s.slice(1)}</option>
              ))}
            </select>
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
          <div className="text-center py-16 text-sm" style={{ color: "var(--gray-text)" }}>No appointments found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                  {["Client", "Service", "Date & Time", "Phone", "Status", "Actions"].map(h => (
                    <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={c._id}
                    style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FAFAFA")}
                    onMouseLeave={e => (e.currentTarget.style.background = "")}
                  >
                    <td className="px-4 py-3.5">
                      <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{c.fullName}</p>
                      <p className="text-xs" style={{ color: "var(--gray-text)" }}>{c.email}</p>
                    </td>
                    <td className="px-4 py-3.5 text-xs max-w-[160px] truncate" style={{ color: "var(--gray-text)" }}>{c.service}</td>
                    <td className="px-4 py-3.5">
                      <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{c.date}</p>
                      <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "var(--gray-text)" }}>
                        <Clock size={10} strokeWidth={2} />{c.time}
                      </p>
                    </td>
                    <td className="px-4 py-3.5 text-xs whitespace-nowrap" style={{ color: "var(--gray-text)" }}>{c.phone}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={c.status} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => setSelected(c)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "var(--primary-light)", color: "var(--primary)" }} title="View Detail">
                          <Eye size={12} strokeWidth={2.5} />
                        </button>
                        <button onClick={() => updateStatus(c._id, "confirmed")} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "var(--success-light)", color: "var(--success)" }} title="Confirm">
                          <Check size={12} strokeWidth={2.5} />
                        </button>
                        <button onClick={() => updateStatus(c._id, "cancelled")} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "var(--danger-light)", color: "var(--danger)" }} title="Cancel">
                          <X size={12} strokeWidth={2.5} />
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
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(4,30,66,0.45)" }} onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-lg rounded-3xl p-6 space-y-5 relative"
            style={{ background: "#fff", boxShadow: "0 24px 64px rgba(1,86,126,0.18)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-70" style={{ background: "var(--gray-light)", color: "var(--black)" }}>
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* Title + status */}
            <div className="flex items-start justify-between gap-3 pr-10">
              <div>
                <p className="text-base font-bold" style={{ color: "var(--black)" }}>{selected.fullName}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>Appointment Detail</p>
              </div>
              <StatusBadge status={selected.status} />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Email</p>
                <a href={`mailto:${selected.email}`} className="text-xs font-semibold hover:underline break-all" style={{ color: "var(--primary)" }}>{selected.email}</a>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Phone</p>
                <a href={`tel:${selected.phone}`} className="text-xs font-semibold" style={{ color: "var(--black)" }}>{selected.phone}</a>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Date</p>
                <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{selected.date}</p>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Time</p>
                <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{selected.time}</p>
              </div>
            </div>

            <div className="rounded-xl p-3" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Service</p>
              <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{selected.service}</p>
            </div>

            {selected.notes && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--gray-text)" }}>Notes</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--black)" }}>{selected.notes}</p>
              </div>
            )}

            <p className="text-xs" style={{ color: "var(--gray-text)" }}>Booked: {fmtDate(selected.createdAt)}</p>

            {/* Status actions */}
            <div className="pt-4 space-y-2" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--gray-text)" }}>Update Status</p>
              <div className="flex gap-2 flex-wrap">
                {["pending","confirmed","scheduled","cancelled"].map(s => (
                  <button
                    key={s}
                    onClick={() => updateStatus(selected._id, s)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80 capitalize"
                    style={selected.status === s
                      ? { background: "var(--primary)", color: "#fff" }
                      : { background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }
                    }
                  >{s}</button>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={`mailto:${selected.email}`}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl hover:opacity-90"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  <Mail size={14} /> Email Client
                </a>
                <a
                  href={`tel:${selected.phone}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90"
                  style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                >
                  <Phone size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
