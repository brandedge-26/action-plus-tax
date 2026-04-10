"use client";

import { useState } from "react";
import { Search, Check, X, RefreshCw, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import StatusBadge from "../../../components/StatusBadge";

const apts = [
  { id: "APT-012", client: "John Doe",       email: "john@example.com",    service: "Tax Planning & Consultation",   date: "Apr 15, 2025", time: "2:00 PM — 3:00 PM EST",  status: "confirmed" },
  { id: "APT-011", client: "Sarah Williams", email: "sarah@example.com",   service: "IRS Audit Support",             date: "Apr 16, 2025", time: "10:00 AM — 11:00 AM EST", status: "scheduled" },
  { id: "APT-010", client: "Michael Chen",   email: "michael@example.com", service: "Bookkeeping Review",            date: "Apr 17, 2025", time: "3:00 PM — 4:00 PM EST",  status: "pending"   },
  { id: "APT-009", client: "Emily Johnson",  email: "emily@example.com",   service: "Tax Preparation Consultation",  date: "Apr 18, 2025", time: "11:00 AM — 12:00 PM EST", status: "confirmed" },
  { id: "APT-008", client: "David Brown",    email: "david@example.com",   service: "Self-Employed Tax Review",      date: "Mar 30, 2025", time: "1:00 PM — 2:00 PM EST",  status: "completed" },
  { id: "APT-007", client: "Lisa Garcia",    email: "lisa@example.com",    service: "Crypto Tax Consultation",       date: "Mar 25, 2025", time: "9:00 AM — 10:00 AM EST", status: "cancelled" },
];

// Simple calendar grid — April 2025
const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const aptDays = new Set([15, 16, 17, 18]);

export default function AppointmentsPage() {
  const [search, setSearch]   = useState("");
  const [statuses, setStatuses] = useState<Record<string, string>>(
    Object.fromEntries(apts.map((a) => [a.id, a.status]))
  );

  const filtered = apts.filter((a) => {
    const q = search.toLowerCase();
    return !q || a.client.toLowerCase().includes(q) || a.service.toLowerCase().includes(q) || a.id.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Appointments</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{apts.length} total · {apts.filter(a => a.status === "pending").length} pending approval</p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>April 2025</p>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
                <ChevronLeft size={14} style={{ color: "var(--gray-text)" }} />
              </button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70" style={{ border: "1px solid var(--gray-border)" }}>
                <ChevronRight size={14} style={{ color: "var(--gray-text)" }} />
              </button>
            </div>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-2">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
              <div key={d} className="text-center text-[10px] font-bold py-1" style={{ color: "var(--gray-text)" }}>{d}</div>
            ))}
          </div>

          {/* Days grid — April 1, 2025 = Tuesday (offset 2) */}
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: 2 }).map((_, i) => <div key={`e${i}`} />)}
            {calendarDays.map((day) => {
              const hasApt = aptDays.has(day);
              const isToday = day === 10;
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

          {/* Legend */}
          <div className="mt-4 pt-4 flex gap-4" style={{ borderTop: "1px solid var(--gray-border)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: "var(--primary)" }} />
              <span className="text-xs" style={{ color: "var(--gray-text)" }}>Has appointment</span>
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
                placeholder="Search by client, service, or ID..."
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
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                    {["ID", "Client", "Service", "Date & Time", "Status", "Actions"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((apt, i) => (
                    <tr key={apt.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                      <td className="px-4 py-3.5 text-xs font-bold" style={{ color: "var(--primary)" }}>{apt.id}</td>
                      <td className="px-4 py-3.5">
                        <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{apt.client}</p>
                        <p className="text-xs" style={{ color: "var(--gray-text)" }}>{apt.email}</p>
                      </td>
                      <td className="px-4 py-3.5 text-xs max-w-[130px] truncate" style={{ color: "var(--gray-text)" }}>{apt.service}</td>
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>{apt.date}</p>
                        <p className="text-xs" style={{ color: "var(--gray-text)" }}>{apt.time}</p>
                      </td>
                      <td className="px-4 py-3.5"><StatusBadge status={statuses[apt.id]} /></td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => setStatuses(p => ({ ...p, [apt.id]: "confirmed" }))} title="Confirm"
                            className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                            style={{ background: "var(--success-light)", color: "var(--success)" }}>
                            <Check size={13} strokeWidth={2.5} />
                          </button>
                          <button onClick={() => setStatuses(p => ({ ...p, [apt.id]: "scheduled" }))} title="Reschedule"
                            className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                            style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                            <RefreshCw size={12} strokeWidth={2.5} />
                          </button>
                          <button onClick={() => setStatuses(p => ({ ...p, [apt.id]: "cancelled" }))} title="Cancel"
                            className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                            style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
                            <X size={13} strokeWidth={2.5} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
