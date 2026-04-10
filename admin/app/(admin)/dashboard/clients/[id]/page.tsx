"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, FileText, FolderOpen, CalendarDays, KeyRound } from "lucide-react";
import StatusBadge from "../../../../components/StatusBadge";

const client = {
  id: "USR-001",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 000-0001",
  address: "123 Main St, New York, NY 10001",
  joined: "January 15, 2025",
  lastActive: "April 10, 2025",
  status: "active",
  applications: [
    { id: "APP-047", service: "Tax Preparation & Filing",    date: "Apr 10, 2025", status: "pending"   },
    { id: "APP-032", service: "Tax Planning & Consultation", date: "Mar 05, 2025", status: "completed" },
    { id: "APP-018", service: "Bookkeeping Services",        date: "Feb 12, 2025", status: "completed" },
    { id: "APP-004", service: "Self-Employed Tax Filing",    date: "Jan 20, 2025", status: "completed" },
  ],
  documents: [
    { name: "W2_2024.pdf",          app: "APP-047", date: "Apr 10, 2025", status: "approved" },
    { name: "Bank_Statement_Q1.pdf", app: "APP-047", date: "Apr 10, 2025", status: "pending"  },
    { name: "ID_Proof.jpg",          app: "APP-047", date: "Apr 10, 2025", status: "rejected" },
  ],
};

export default function ClientDetailPage() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <Link href="/dashboard/clients" className="inline-flex items-center gap-1.5 text-xs font-medium mb-2 hover:opacity-70" style={{ color: "var(--gray-text)" }}>
          <ArrowLeft size={14} />
          Back to Clients
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold" style={{ background: "var(--primary)" }}>
              {client.name.split(" ").map(w => w[0]).join("")}
            </div>
            <div>
              <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>{client.name}</h2>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>{client.id}</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-80"
            style={{ border: "1px solid var(--gray-border)", color: "var(--black)", background: "#fff" }}>
            <KeyRound size={14} />
            Reset Password
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">

        {/* Left */}
        <div className="xl:col-span-2 space-y-5">

          {/* Info */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Client Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Mail,        label: "Email",       value: client.email      },
                { icon: Phone,       label: "Phone",       value: client.phone      },
                { icon: MapPin,      label: "Address",     value: client.address    },
                { icon: CalendarDays,label: "Joined",      value: client.joined     },
                { icon: CalendarDays,label: "Last Active", value: client.lastActive },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--primary-light)" }}>
                      <Icon size={14} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "var(--gray-text)" }}>{row.label}</p>
                      <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="flex items-center gap-2 mb-4">
              <FileText size={16} style={{ color: "var(--primary)" }} />
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Applications ({client.applications.length})</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--gray-light)" }}>
                    {["ID", "Service", "Date", "Status"].map(h => (
                      <th key={h} className="text-left text-xs font-semibold px-3 py-2.5 first:rounded-l-lg last:rounded-r-lg" style={{ color: "var(--gray-text)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {client.applications.map((app, i) => (
                    <tr key={app.id} style={{ borderBottom: i < client.applications.length - 1 ? "1px solid var(--gray-light)" : "none" }}>
                      <td className="px-3 py-3">
                        <Link href={`/dashboard/applications/${app.id}`} className="text-xs font-bold hover:underline" style={{ color: "var(--primary)" }}>{app.id}</Link>
                      </td>
                      <td className="px-3 py-3 text-sm" style={{ color: "var(--black)" }}>{app.service}</td>
                      <td className="px-3 py-3 text-xs" style={{ color: "var(--gray-text)" }}>{app.date}</td>
                      <td className="px-3 py-3"><StatusBadge status={app.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen size={16} style={{ color: "var(--primary)" }} />
              <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Documents ({client.documents.length})</p>
            </div>
            <div className="space-y-2">
              {client.documents.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{doc.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--gray-text)" }}>{doc.app} · {doc.date}</p>
                  </div>
                  <StatusBadge status={doc.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--black)" }}>Account Summary</p>
            <div className="space-y-3">
              {[
                { label: "Total Applications", value: client.applications.length, color: "var(--primary)"  },
                { label: "Total Documents",     value: client.documents.length,    color: "var(--black)"   },
                { label: "Completed Apps",      value: client.applications.filter(a => a.status === "completed").length, color: "var(--success)" },
                { label: "Pending Apps",        value: client.applications.filter(a => a.status === "pending").length,   color: "var(--warning)" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--gray-light)" }}>
                  <span className="text-sm" style={{ color: "var(--gray-text)" }}>{s.label}</span>
                  <span className="text-lg font-bold" style={{ color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-sm font-bold mb-3" style={{ color: "var(--black)" }}>Account Status</p>
            <div className="flex items-center gap-2 p-3 rounded-xl" style={{ background: "var(--success-light)" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--success)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--success)" }}>Active Account</span>
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--gray-text)" }}>Last active: {client.lastActive}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
