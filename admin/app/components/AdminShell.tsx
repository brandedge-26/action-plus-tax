"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, FileText, FolderOpen, CalendarDays,
  Users, Settings, Menu, X, Receipt, Bell, ChevronDown,
  Briefcase, BookOpen, LogOut,
} from "lucide-react";

const navItems = [
  { href: "/dashboard",               label: "Overview",        icon: LayoutDashboard, exact: true },
  { href: "/dashboard/applications",  label: "Applications",    icon: FileText,        badge: 3   },
  { href: "/dashboard/documents",     label: "Documents",       icon: FolderOpen                  },
  { href: "/dashboard/appointments",  label: "Appointments",    icon: CalendarDays,    badge: 2   },
  { href: "/dashboard/clients",       label: "Clients",         icon: Users                       },
  { href: "/dashboard/services",      label: "Services",        icon: Briefcase                   },
  { href: "/dashboard/blog",          label: "Blog",            icon: BookOpen                    },
  { href: "/dashboard/settings",      label: "Settings",        icon: Settings                    },
];

const pageTitles: Record<string, string> = {
  "/dashboard":               "Overview",
  "/dashboard/applications":  "Applications",
  "/dashboard/documents":     "Documents",
  "/dashboard/appointments":  "Appointments",
  "/dashboard/clients":       "Clients",
  "/dashboard/services":      "Services",
  "/dashboard/blog":          "Blog",
  "/dashboard/settings":      "Settings",
};

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const getTitle = () => {
    if (pathname.startsWith("/dashboard/applications/")) return "Application Detail";
    if (pathname.startsWith("/dashboard/clients/"))      return "Client Profile";
    return pageTitles[pathname] || "Admin";
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--gray-light)" }}>

      {/* Sidebar overlay (mobile) */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full w-64 flex flex-col z-40 overflow-hidden transition-transform duration-300 ease-in-out"
        style={{
          background: "#0A0A0A",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,70,190,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,190,0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }} />
        {/* Glow */}
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,70,190,0.22) 0%, transparent 70%)"
        }} />
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
          background: "linear-gradient(90deg, transparent, #FFC200, #fff8, #FFC200, transparent)"
        }} />

        {/* Logo */}
        <div className="relative z-10 flex items-center justify-between px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#FFC200" }}>
              <Receipt size={15} strokeWidth={2} style={{ color: "#0A0A0A" }} />
            </div>
            <div>
              <p className="text-sm font-bold leading-none tracking-tight">
                <span style={{ color: "#FFC200" }}>Action</span>
                <span className="text-white">Plus</span>
                <span style={{ color: "#FFC200" }}>&nbsp;Tax</span>
              </p>
              <p className="text-[9px] mt-0.5 font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                Admin Panel
              </p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-white/40 hover:text-white p-1">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            const Icon   = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative"
                style={active
                  ? { background: "var(--primary)", color: "#fff", boxShadow: "0 4px 16px rgba(0,70,190,0.35)" }
                  : { color: "rgba(255,255,255,0.45)" }
                }
                onMouseEnter={(e) => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,70,190,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; } }}
                onMouseLeave={(e) => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.background = ""; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; } }}
              >
                <Icon size={16} strokeWidth={active ? 2.5 : 2} />
                <span className="flex-1">{item.label}</span>
                {item.badge && !active && (
                  <span className="text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--primary)" }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Admin user */}
        <div className="relative z-10 px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{ background: "var(--primary)" }}>
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate leading-none">Admin</p>
              <p className="text-xs truncate mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>admin@actionplustax.com</p>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-2 text-xs font-medium py-2 px-3 rounded-xl transition-all w-full"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,70,190,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLAnchorElement).style.background = ""; }}
          >
            <LogOut size={13} strokeWidth={2} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Desktop sidebar always visible */}
      <style>{`@media (min-width: 768px) { aside { transform: translateX(0) !important; } }`}</style>

      {/* TopBar */}
      <header
        className="fixed top-0 right-0 h-[60px] flex items-center justify-between px-4 sm:px-6 z-20 bg-white transition-all"
        style={{ left: 0, borderBottom: "1px solid var(--gray-border)" }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ border: "1px solid var(--gray-border)" }}
          >
            <Menu size={18} strokeWidth={2} style={{ color: "var(--black)" }} />
          </button>
          <div className="hidden md:block w-64 flex-shrink-0" />
          <h1 className="font-bold text-sm sm:text-base" style={{ color: "var(--black)" }}>{getTitle()}</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications */}
          <button className="relative w-9 h-9 rounded-xl flex items-center justify-center" style={{ border: "1px solid var(--gray-border)" }}>
            <Bell size={15} strokeWidth={2} style={{ color: "var(--gray-text)" }} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2 border-white" style={{ background: "var(--primary)" }} />
          </button>
          {/* Admin chip */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: "var(--primary)" }}>
              AD
            </div>
            <span className="hidden sm:block text-sm font-semibold" style={{ color: "var(--black)" }}>Admin</span>
            <ChevronDown size={13} style={{ color: "var(--gray-text)" }} className="hidden sm:block" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pt-[60px] min-h-screen md:ml-64">
        <div className="p-4 sm:p-6">{children}</div>
      </main>

    </div>
  );
}
