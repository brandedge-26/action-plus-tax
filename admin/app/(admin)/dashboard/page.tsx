"use client";

import Link from "next/link";
import {
  Users, FileText, Clock, CheckCircle, CalendarDays,
  TrendingUp, ArrowRight, ArrowUpRight, Eye,
} from "lucide-react";
import StatusBadge from "../../components/StatusBadge";

const stats = [
  { label: "Total Clients",      value: "128", change: "+12 this month", icon: Users,        accent: false },
  { label: "Total Applications", value: "47",  change: "+8 this month",  icon: FileText,     accent: false },
  { label: "Pending Review",     value: "12",  change: "Needs attention",icon: Clock,        accent: true  },
  { label: "Completed",          value: "31",  change: "All time",       icon: CheckCircle,  accent: false },
];

const recentApps = [
  { id: "APP-047", client: "John Doe",       service: "Tax Preparation & Filing",    date: "Apr 10, 2025", status: "pending"   },
  { id: "APP-046", client: "Sarah Williams", service: "IRS Audit Support",           date: "Apr 09, 2025", status: "in_review" },
  { id: "APP-045", client: "Michael Chen",   service: "Bookkeeping Services",        date: "Apr 09, 2025", status: "pending"   },
  { id: "APP-044", client: "Emily Johnson",  service: "Tax Planning & Consultation", date: "Apr 08, 2025", status: "completed" },
  { id: "APP-043", client: "David Brown",    service: "Self-Employed Tax Filing",    date: "Apr 07, 2025", status: "in_review" },
];

const upcomingApts = [
  { id: "APT-012", client: "John Doe",    service: "Tax Planning",         date: "Apr 15, 2025", time: "2:00 PM" },
  { id: "APT-011", client: "Sarah W.",    service: "IRS Audit Support",    date: "Apr 16, 2025", time: "10:00 AM" },
  { id: "APT-010", client: "Michael C.",  service: "Bookkeeping Review",   date: "Apr 17, 2025", time: "3:00 PM" },
];

const services = [
  { name: "Tax Preparation & Filing", count: 18, pct: 38 },
  { name: "Tax Planning & Consultation", count: 10, pct: 21 },
  { name: "IRS Audit Support", count: 8, pct: 17 },
  { name: "Bookkeeping Services", count: 6, pct: 13 },
  { name: "Self-Employed Tax Filing", count: 5, pct: 11 },
];

// Simple bar chart using divs
function MiniBar({ pct }: { pct: number }) {
  return (
    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--gray-border)" }}>
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: "var(--primary)" }} />
    </div>
  );
}

// Monthly sparkline data
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const appData = [5, 8, 6, 12, 10, 9, 14, 11, 13, 8, 10, 7];
const maxVal  = Math.max(...appData);

export default function AdminDashboard() {
  return (
    <div className="space-y-5">

      {/* Welcome banner */}
      <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "var(--black)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(146,69,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.18) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.28) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #9245FF, #c084fc, #9245FF, transparent)" }} />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Good morning,</p>
            <h2 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              You have{" "}
              <span className="font-bold" style={{ color: "var(--accent)" }}>12 pending applications</span>
              {" "}awaiting review.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/dashboard/applications" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90" style={{ background: "var(--primary)" }}>
              <FileText size={15} />
              Review Apps
            </Link>
            <Link href="/dashboard/appointments" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.accent ? "var(--accent-light)" : "var(--primary-light)", color: s.accent ? "var(--accent)" : "var(--primary)" }}>
                  <Icon size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid xl:grid-cols-3 gap-5">

        {/* Monthly Applications Bar Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Applications This Year</p>
              <p className="text-xs" style={{ color: "var(--gray-text)" }}>Monthly breakdown — 2025</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--primary)" }}>
              <TrendingUp size={14} strokeWidth={2.5} />
              +24% vs last year
            </div>
          </div>
          {/* Bar Chart */}
          <div className="flex items-end gap-1.5 h-36">
            {appData.map((v, i) => (
              <div key={months[i]} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full rounded-t-md transition-all"
                  style={{
                    height: `${(v / maxVal) * 100}%`,
                    background: i === 3 ? "var(--primary)" : "var(--primary-light)",
                    minHeight: "4px",
                  }}
                />
                <span className="text-[9px] font-semibold" style={{ color: "var(--gray-text)" }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Popularity */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Top Services</p>
          <div className="space-y-3.5">
            {services.map((s) => (
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
        </div>
      </div>

      {/* Recent Applications + Upcoming Appointments */}
      <div className="grid xl:grid-cols-3 gap-5">

        {/* Recent Applications */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Recent Applications</p>
            <Link href="/dashboard/applications" className="flex items-center gap-1 text-xs font-semibold hover:opacity-70" style={{ color: "var(--primary)" }}>
              View all <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--gray-border)" }}>
                  {["ID", "Client", "Service", "Date", "Status", ""].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold pb-3 pr-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentApps.map((app) => (
                  <tr key={app.id} style={{ borderBottom: "1px solid var(--gray-light)" }}>
                    <td className="py-3 pr-3">
                      <Link href={`/dashboard/applications/${app.id}`} className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>{app.id}</Link>
                    </td>
                    <td className="py-3 pr-3 text-sm font-medium" style={{ color: "var(--black)" }}>{app.client}</td>
                    <td className="py-3 pr-3 text-xs max-w-[150px] truncate" style={{ color: "var(--gray-text)" }}>{app.service}</td>
                    <td className="py-3 pr-3 text-xs" style={{ color: "var(--gray-text)" }}>{app.date}</td>
                    <td className="py-3 pr-3"><StatusBadge status={app.status} /></td>
                    <td className="py-3">
                      <Link href={`/dashboard/applications/${app.id}`}>
                        <Eye size={15} strokeWidth={2} style={{ color: "var(--gray-text)" }} className="hover:text-[var(--primary)]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Upcoming Appointments</p>
            <Link href="/dashboard/appointments" className="flex items-center gap-1 text-xs font-semibold hover:opacity-70" style={{ color: "var(--primary)" }}>
              All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingApts.map((apt) => (
              <div key={apt.id} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                <div className="w-10 h-10 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0" style={{ background: "var(--primary)" }}>
                  <span className="text-[8px] font-bold uppercase leading-none">{apt.date.split(",")[0].split(" ")[0]}</span>
                  <span className="text-base font-bold leading-none mt-0.5">{apt.date.split(" ")[1]?.replace(",","")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: "var(--black)" }}>{apt.client}</p>
                  <p className="text-xs truncate" style={{ color: "var(--gray-text)" }}>{apt.service}</p>
                  <p className="text-xs font-bold mt-0.5" style={{ color: "var(--primary)" }}>{apt.time}</p>
                </div>
                <ArrowUpRight size={14} style={{ color: "var(--gray-text)" }} className="flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
