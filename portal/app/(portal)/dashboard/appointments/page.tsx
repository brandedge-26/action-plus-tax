"use client";

import { useState } from "react";
import StatusBadge from "../../../components/StatusBadge";
import { Search, Plus, X } from "lucide-react";

const appointments = [
  { id: "APT-001", service: "Tax Planning & Consultation", date: "Apr 15, 2025", time: "2:00 PM — 3:00 PM EST",  notes: "Bring last 2 years of tax returns", status: "confirmed" },
  { id: "APT-002", service: "Tax Preparation & Filing",    date: "Apr 22, 2025", time: "10:00 AM — 11:00 AM EST", notes: "",                                 status: "scheduled" },
  { id: "APT-003", service: "IRS Audit Support",           date: "Mar 30, 2025", time: "3:00 PM — 4:00 PM EST",  notes: "Bring all IRS correspondence",     status: "completed" },
  { id: "APT-004", service: "Bookkeeping Consultation",    date: "Mar 10, 2025", time: "1:00 PM — 2:00 PM EST",  notes: "",                                 status: "cancelled" },
];

const services = ["Tax Preparation & Filing", "Tax Planning & Consultation", "IRS Audit Support & Representation", "Tax Resolution", "Bookkeeping Services", "Business Valuation", "General Consultation"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function AppointmentsPage() {
  const [search, setSearch]     = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selTime, setSelTime]   = useState("");

  const filtered = appointments.filter((a) => {
    const q = search.toLowerCase();
    return a.service.toLowerCase().includes(q) || a.id.toLowerCase().includes(q) || a.date.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Appointments</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{appointments.length} total appointments</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          <Plus size={16} strokeWidth={2.5} />
          Book Appointment
        </button>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-5">
            <p className="text-base font-bold" style={{ color: "var(--black)" }}>Book New Appointment</p>
            <button onClick={() => setShowForm(false)} style={{ color: "var(--gray-text)" }} className="hover:opacity-70 transition-opacity">
              <X size={18} strokeWidth={2} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name",    type: "text",  ph: "John Doe"           },
              { label: "Email",        type: "email", ph: "you@email.com"      },
              { label: "Phone",        type: "tel",   ph: "+1 (555) 000-0000"  },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>{f.label} <span style={{ color: "var(--primary)" }}>*</span></label>
                <input type={f.type} placeholder={f.ph}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                  style={{ border: "1px solid var(--gray-border)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Service <span style={{ color: "var(--primary)" }}>*</span></label>
              <select className="w-full rounded-xl px-4 py-2.5 text-sm outline-none bg-white transition-all" style={{ border: "1px solid var(--gray-border)" }}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Preferred Date <span style={{ color: "var(--primary)" }}>*</span></label>
              <input type="date"
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-2" style={{ color: "var(--black)" }}>Preferred Time <span style={{ color: "var(--primary)" }}>*</span></label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button key={slot} type="button" onClick={() => setSelTime(slot)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all"
                    style={selTime === slot
                      ? { background: "var(--primary)", color: "#fff" }
                      : { background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }
                    }
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Additional Notes</label>
              <textarea rows={2} placeholder="Any specific topics to discuss..."
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none resize-none transition-all"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-5 pt-5" style={{ borderTop: "1px solid var(--gray-border)" }}>
            <button onClick={() => setShowForm(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search by service, appointment ID, or date..."
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
                {["ID", "Service", "Date", "Time", "Notes", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-5 py-3.5 uppercase tracking-wide" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-14 text-sm" style={{ color: "var(--gray-text)" }}>No appointments found.</td></tr>
              ) : filtered.map((apt, i) => (
                <tr
                  key={apt.id}
                  className="transition-colors"
                  style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="px-5 py-4 text-xs font-bold" style={{ color: "var(--primary)" }}>{apt.id}</td>
                  <td className="px-5 py-4 font-semibold" style={{ color: "var(--black)" }}>{apt.service}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0 leading-none" style={{ background: "var(--primary)" }}>
                        <span className="text-[8px] font-bold uppercase">{apt.date.split(" ")[0]}</span>
                        <span className="text-sm font-bold">{apt.date.split(" ")[1].replace(",", "")}</span>
                      </div>
                      <span className="text-xs" style={{ color: "var(--black)" }}>{apt.date}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs" style={{ color: "var(--gray-text)" }}>{apt.time}</td>
                  <td className="px-5 py-4 text-xs max-w-[150px] truncate" style={{ color: "var(--gray-text)" }}>{apt.notes || "—"}</td>
                  <td className="px-5 py-4"><StatusBadge status={apt.status} /></td>
                  <td className="px-5 py-4">
                    {apt.status !== "completed" && apt.status !== "cancelled" ? (
                      <div className="flex items-center gap-3">
                        <button className="text-xs font-semibold hover:underline" style={{ color: "var(--accent)" }}>Reschedule</button>
                        <button className="text-xs font-semibold hover:underline" style={{ color: "var(--primary)" }}>Cancel</button>
                      </div>
                    ) : <span className="text-xs" style={{ color: "var(--gray-text)" }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3" style={{ borderTop: "1px solid var(--gray-border)", background: "var(--gray-light)" }}>
          <p className="text-xs" style={{ color: "var(--gray-text)" }}>Showing {filtered.length} of {appointments.length} appointments</p>
        </div>
      </div>
    </div>
  );
}
