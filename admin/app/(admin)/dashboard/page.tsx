"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText, Clock, CheckCircle, CalendarDays,
  TrendingUp, ArrowRight, ArrowUpRight,
} from "lucide-react";
import StatusBadge from "../../components/StatusBadge";
import { adminFetch } from "../../lib/adminApi";

type Contact = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  createdAt: string;
};

type Consultation = {
  _id: string;
  fullName: string;
  service: string;
  date: string;
  time: string;
  status: string;
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function MiniBar({ pct }: { pct: number }) {
  return (
    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--gray-border)" }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--primary)" }} />
    </div>
  );
}

export default function AdminDashboard() {
  const [contacts,      setContacts]      = useState<Contact[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading,       setLoading]       = useState(true);

  useEffect(() => {
    Promise.all([adminFetch("/api/contact"), adminFetch("/api/consultations")])
      .then(([c, a]) => {
        setContacts(c.contacts ?? []);
        setConsultations(a.consultations ?? []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const year         = new Date().getFullYear();
  const todayStr     = new Date().toISOString().split("T")[0];
  const newCount     = contacts.filter(c => c.status === "new").length;
  const repliedCount = contacts.filter(c => c.status === "replied").length;
  const pendingApts  = consultations.filter(c => c.status === "pending").length;

  const monthlyData = useMemo(() =>
    MONTHS.map((_, i) =>
      contacts.filter(c => {
        const d = new Date(c.createdAt);
        return d.getFullYear() === year && d.getMonth() === i;
      }).length
    ),
    [contacts, year]
  );
  const maxVal = Math.max(...monthlyData, 1);

  const recentApps = useMemo(() =>
    [...contacts]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5),
    [contacts]
  );

  const upcomingApts = useMemo(() =>
    [...consultations]
      .filter(c => c.date >= todayStr && c.status !== "cancelled")
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 3),
    [consultations, todayStr]
  );

  const topServices = useMemo(() => {
    const map: Record<string, number> = {};
    consultations.forEach(c => { map[c.service] = (map[c.service] || 0) + 1; });
    const total = consultations.length || 1;
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count, pct: Math.round((count / total) * 100) }));
  }, [consultations]);

  const stats = [
    { label: "Total Messages",     value: loading ? "…" : String(contacts.length),       change: `${newCount} unread`,      icon: FileText,     accent: false        },
    { label: "Total Appointments", value: loading ? "…" : String(consultations.length),  change: `${pendingApts} pending`,  icon: CalendarDays, accent: false        },
    { label: "Pending Review",     value: loading ? "…" : String(newCount),              change: "Unread messages",         icon: Clock,        accent: newCount > 0 },
    { label: "Replied",            value: loading ? "…" : String(repliedCount),          change: "Messages replied",        icon: CheckCircle,  accent: false        },
  ];

  return (
    <div className="space-y-5">

      {/* Welcome banner */}
      <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "var(--black)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,70,190,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,190,0.18) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,70,190,0.28) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #0046BE, #60A5FA, #0046BE, transparent)" }} />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Welcome back,</p>
            <h2 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {loading
                ? "Loading data…"
                : newCount > 0
                ? <><span className="font-bold" style={{ color: "var(--accent)" }}>{newCount} unread {newCount === 1 ? "message" : "messages"}</span> awaiting your review.</>
                : "All messages are up to date."
              }
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/dashboard/applications"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              <FileText size={15} />
              Messages
            </Link>
            <Link
              href="/dashboard/appointments"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <CalendarDays size={15} />
              Appointments
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "var(--gray-text)" }}>{s.label}</p>
                  <p className="text-3xl font-bold" style={{ color: "var(--black)" }}>{s.value}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--gray-text)" }}>{s.change}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: s.accent ? "rgba(255,200,0,0.15)" : "var(--primary-light)",
                    color:      s.accent ? "#B45309"               : "var(--primary)",
                  }}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid xl:grid-cols-3 gap-5">

        {/* Monthly Messages Bar Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Messages This Year</p>
              <p className="text-xs" style={{ color: "var(--gray-text)" }}>Monthly breakdown — {year}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--primary)" }}>
              <TrendingUp size={14} strokeWidth={2.5} />
              {contacts.length} total
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-36">
            {monthlyData.map((v, i) => (
              <div key={MONTHS[i]} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md"
                  style={{
                    height: `${(v / maxVal) * 100}%`,
                    background: i === new Date().getMonth() ? "var(--primary)" : "var(--primary-light)",
                    minHeight: "4px",
                  }}
                />
                <span className="text-[9px] font-semibold" style={{ color: "var(--gray-text)" }}>{MONTHS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Top Services Requested</p>
          {loading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 rounded-lg animate-pulse" style={{ background: "var(--gray-light)" }} />
              ))}
            </div>
          ) : topServices.length === 0 ? (
            <p className="text-xs text-center py-8" style={{ color: "var(--gray-text)" }}>No appointment data yet.</p>
          ) : (
            <div className="space-y-3.5">
              {topServices.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold truncate pr-2" style={{ color: "var(--black)" }}>{s.name}</p>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: "var(--primary)" }}>{s.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MiniBar pct={s.pct} />
                    <span className="text-[10px] w-8 text-right flex-shrink-0" style={{ color: "var(--gray-text)" }}>{s.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Messages + Upcoming Appointments */}
      <div className="grid xl:grid-cols-3 gap-5">

        {/* Recent Messages */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Recent Messages</p>
            <Link href="/dashboard/applications" className="flex items-center gap-1 text-xs font-semibold hover:opacity-70" style={{ color: "var(--primary)" }}>
              View all <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => <div key={i} className="h-12 rounded-xl animate-pulse" style={{ background: "var(--gray-light)" }} />)}
            </div>
          ) : recentApps.length === 0 ? (
            <p className="text-xs text-center py-8" style={{ color: "var(--gray-text)" }}>No messages yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--gray-border)" }}>
                    {["Sender", "Subject", "Date", "Status"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold pb-3 pr-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentApps.map((app) => (
                    <tr key={app._id} style={{ borderBottom: "1px solid var(--gray-light)" }}>
                      <td className="py-3 pr-3">
                        <p className="text-sm" style={{ color: "var(--black)", fontWeight: app.status === "new" ? 700 : 500 }}>{app.name}</p>
                        <p className="text-xs" style={{ color: "var(--gray-text)" }}>{app.email}</p>
                      </td>
                      <td className="py-3 pr-3 text-xs max-w-[150px] truncate" style={{ color: "var(--gray-text)" }}>{app.subject}</td>
                      <td className="py-3 pr-3 text-xs whitespace-nowrap" style={{ color: "var(--gray-text)" }}>
                        {new Date(app.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </td>
                      <td className="py-3 pr-3"><StatusBadge status={app.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Upcoming Appointments</p>
            <Link href="/dashboard/appointments" className="flex items-center gap-1 text-xs font-semibold hover:opacity-70" style={{ color: "var(--primary)" }}>
              All <ArrowRight size={12} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => <div key={i} className="h-16 rounded-xl animate-pulse" style={{ background: "var(--gray-light)" }} />)}
            </div>
          ) : upcomingApts.length === 0 ? (
            <p className="text-xs text-center py-8" style={{ color: "var(--gray-text)" }}>No upcoming appointments.</p>
          ) : (
            <div className="space-y-3">
              {upcomingApts.map((apt) => {
                const parts = apt.date.split("-");
                const monthIdx = parseInt(parts[1]) - 1;
                const day = parseInt(parts[2]);
                return (
                  <div key={apt._id} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                    <div className="w-10 h-10 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0" style={{ background: "var(--primary)" }}>
                      <span className="text-[8px] font-bold uppercase leading-none">{MONTHS[monthIdx]}</span>
                      <span className="text-base font-bold leading-none mt-0.5">{day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: "var(--black)" }}>{apt.fullName}</p>
                      <p className="text-xs truncate" style={{ color: "var(--gray-text)" }}>{apt.service}</p>
                      <p className="text-xs font-bold mt-0.5" style={{ color: "var(--primary)" }}>{apt.time}</p>
                    </div>
                    <ArrowUpRight size={14} style={{ color: "var(--gray-text)" }} className="flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
