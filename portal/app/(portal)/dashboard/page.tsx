"use client";


import Link from "next/link";
import StatusBadge from "../../components/StatusBadge";
import { FileText, Clock, RefreshCw, CheckCircle, PlusCircle, CalendarDays, Upload, ArrowRight } from "lucide-react";

const stats = [
  { label: "Total Applications", value: "4", icon: FileText, change: "+1 this month", accent: false },
  { label: "Pending Review",     value: "2", icon: Clock,     change: "Awaiting admin",  accent: false },
  { label: "In Progress",        value: "1", icon: RefreshCw, change: "Being reviewed",  accent: true },
  { label: "Completed",          value: "1", icon: CheckCircle, change: "Successfully done", accent: false },
];

const recentApplications = [
  { id: "APP-001", service: "Tax Preparation & Filing",      date: "Apr 08, 2025", status: "in_review" },
  { id: "APP-002", service: "Tax Planning & Consultation",   date: "Apr 05, 2025", status: "pending"   },
  { id: "APP-003", service: "Self-Employed Tax Filing",      date: "Mar 28, 2025", status: "completed" },
  { id: "APP-004", service: "Bookkeeping Services",          date: "Mar 20, 2025", status: "pending"   },
];

const quickActions = [
  { href: "/dashboard/apply",        label: "Start New Application", desc: "Submit a service request",   icon: PlusCircle,  primary: true  },
  { href: "/dashboard/appointments", label: "Book Appointment",      desc: "Schedule a consultation",    icon: CalendarDays, primary: false },
  { href: "/dashboard/documents",    label: "Upload Documents",      desc: "Add required files",         icon: Upload,      primary: false },
];

export default function DashboardPage() {
  return (
    <div className="space-y-5">

      {/* Welcome Banner */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{ background: "var(--black)" }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(146,69,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.18) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.28) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #9245FF, #c084fc, #9245FF, transparent)" }} />
        <div className="relative z-10">
          <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Good morning,</p>
          <h2 className="text-2xl font-bold text-white mb-1">John Doe</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            You have{" "}
            <span className="font-bold" style={{ color: "var(--accent)" }}>2 applications</span>
            {" "}awaiting admin review.
          </p>
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
                  style={{ background: s.accent ? "var(--accent-light)" : "var(--primary-light)", color: s.accent ? "var(--accent)" : "var(--primary)" }}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions + Recent */}
      <div className="grid xl:grid-cols-3 gap-5">

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Quick Actions</p>
          <div className="space-y-2.5">
            {quickActions.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.href}
                  href={a.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                  style={a.primary
                    ? { background: "var(--primary)", color: "#fff" }
                    : { background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }
                  }
                  onMouseEnter={(e) => { if (!a.primary) (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--primary)"; }}
                  onMouseLeave={(e) => { if (!a.primary) (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gray-border)"; }}
                >
                  <Icon size={17} strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold leading-none">{a.label}</p>
                    <p className="text-xs mt-0.5 opacity-60">{a.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Recent Applications</p>
            <Link href="/dashboard/applications" className="flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70" style={{ color: "var(--primary)" }}>
              View all <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--gray-border)" }}>
                  <th className="text-left text-xs font-semibold pb-3 pr-4" style={{ color: "var(--gray-text)" }}>ID</th>
                  <th className="text-left text-xs font-semibold pb-3 pr-4" style={{ color: "var(--gray-text)" }}>Service</th>
                  <th className="text-left text-xs font-semibold pb-3 pr-4" style={{ color: "var(--gray-text)" }}>Date</th>
                  <th className="text-left text-xs font-semibold pb-3" style={{ color: "var(--gray-text)" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="group" style={{ borderBottom: "1px solid var(--gray-light)" }}>
                    <td className="py-3 pr-4">
                      <Link href={`/dashboard/applications/${app.id}`} className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>
                        {app.id}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-sm font-medium" style={{ color: "var(--black)" }}>{app.service}</td>
                    <td className="py-3 pr-4 text-xs" style={{ color: "var(--gray-text)" }}>{app.date}</td>
                    <td className="py-3"><StatusBadge status={app.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upcoming Appointment */}
      <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Upcoming Appointment</p>
          <Link href="/dashboard/appointments" className="flex items-center gap-1 text-xs font-semibold hover:opacity-70" style={{ color: "var(--primary)" }}>
            View all <ArrowRight size={12} strokeWidth={2.5} />
          </Link>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "var(--primary-light)", border: "1px solid rgba(146,69,255,0.2)" }}>
          <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0" style={{ background: "var(--primary)" }}>
            <span className="text-[9px] font-bold uppercase tracking-wide leading-none">APR</span>
            <span className="text-lg font-bold leading-none mt-0.5">15</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Tax Planning Consultation</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>2:00 PM — 3:00 PM EST</p>
          </div>
          <StatusBadge status="confirmed" />
        </div>
      </div>

    </div>
  );
}
