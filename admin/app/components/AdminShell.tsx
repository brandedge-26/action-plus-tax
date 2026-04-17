"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, FileText, CalendarDays,
  Users, Settings, Menu, X, Receipt, ChevronDown,
  Briefcase, BookOpen, LogOut, Plus, List, Pencil,
} from "lucide-react";
import { clearAdminToken, adminFetch } from "../lib/adminApi";
import toast from "react-hot-toast";

const navItems = [
  { href: "/dashboard",               label: "Overview",        icon: LayoutDashboard, exact: true },
  { href: "/dashboard/applications",  label: "Applications",    icon: FileText                    },
  { href: "/dashboard/appointments",  label: "Appointments",    icon: CalendarDays                },
  { href: "/dashboard/clients",       label: "Clients",         icon: Users                       },
  { href: "/dashboard/services",      label: "Services",        icon: Briefcase                   },
  { href: "/dashboard/blog",          label: "Blog",            icon: BookOpen,        hasSub: true },
  { href: "/dashboard/settings",      label: "Settings",        icon: Settings                    },
];

const blogSubItems = [
  { href: "/dashboard/blog",     label: "All Blogs", exact: true },
  { href: "/dashboard/blog/new", label: "Add Blog",  exact: true },
];

const pageTitles: Record<string, string> = {
  "/dashboard":               "Overview",
  "/dashboard/applications":  "Applications",
  "/dashboard/appointments":  "Appointments",
  "/dashboard/clients":       "Clients",
  "/dashboard/services":      "Services",
  "/dashboard/blog":          "All Blogs",
  "/dashboard/blog/new":      "New Blog Post",
  "/dashboard/settings":      "Settings",
};

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [adminName, setAdminName] = useState("Admin");
  const [nameModal, setNameModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [savingName, setSavingName] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("apt_admin_user");
      if (stored) {
        const u = JSON.parse(stored);
        if (u.name) setAdminName(u.name);
      }
    } catch { /* ignore */ }
  }, []);

  const handleChangeName = async () => {
    if (!newName.trim()) { toast.error("Name cannot be empty."); return; }
    setSavingName(true);
    try {
      const data = await adminFetch("/api/auth/update-profile", {
        method: "PATCH",
        body: { name: newName.trim() },
      });
      const updated = data.user?.name ?? newName.trim();
      setAdminName(updated);
      const stored = localStorage.getItem("apt_admin_user");
      if (stored) {
        localStorage.setItem("apt_admin_user", JSON.stringify({ ...JSON.parse(stored), name: updated }));
      }
      toast.success("Name updated!");
      setNameModal(false);
      setDropdownOpen(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to update name.");
    } finally {
      setSavingName(false);
    }
  };

  useEffect(() => { setOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    clearAdminToken();
    router.push("/login");
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const getTitle = () => {
    if (pathname.startsWith("/dashboard/applications/")) return "Application Detail";
    if (pathname.startsWith("/dashboard/clients/"))      return "Client Profile";
    if (pathname === "/dashboard/blog/new")              return "New Blog Post";
    if (pathname.match(/^\/dashboard\/blog\/.+\/edit$/)) return "Edit Blog Post";
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
            const active    = isActive(item.href, item.exact);
            const blogOpen  = item.hasSub && pathname.startsWith("/dashboard/blog");
            const Icon      = item.icon;
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative"
                  style={active && !item.hasSub
                    ? { background: "var(--primary)", color: "#fff", boxShadow: "0 4px 16px rgba(1,86,126,0.35)" }
                    : blogOpen
                    ? { background: "rgba(1,86,126,0.18)", color: "#fff" }
                    : { color: "rgba(255,255,255,0.45)" }
                  }
                  onMouseEnter={(e) => { if (!active && !blogOpen) { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(1,86,126,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; } }}
                  onMouseLeave={(e) => { if (!active && !blogOpen) { (e.currentTarget as HTMLAnchorElement).style.background = ""; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; } }}
                >
                  <Icon size={16} strokeWidth={active || blogOpen ? 2.5 : 2} />
                  <span className="flex-1">{item.label}</span>
                  {item.hasSub && (
                    <ChevronDown size={13} strokeWidth={2}
                      className="transition-transform"
                      style={{ transform: blogOpen ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.4)" }}
                    />
                  )}
                </Link>

                {/* Blog subnav */}
                {item.hasSub && blogOpen && (
                  <div className="ml-4 mt-0.5 space-y-0.5">
                    {blogSubItems.map(sub => {
                      const subActive = sub.exact ? pathname === sub.href : pathname.startsWith(sub.href);
                      const SubIcon   = sub.href.includes("new") ? Plus : List;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all"
                          style={subActive
                            ? { background: "var(--primary)", color: "#fff" }
                            : { color: "rgba(255,255,255,0.4)" }
                          }
                          onMouseEnter={(e) => { if (!subActive) { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(1,86,126,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; } }}
                          onMouseLeave={(e) => { if (!subActive) { (e.currentTarget as HTMLAnchorElement).style.background = ""; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; } }}
                        >
                          <SubIcon size={13} strokeWidth={2} />
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="relative z-10 px-3 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2.5 text-sm font-semibold py-2.5 px-3 rounded-xl transition-all w-full"
            style={{ color: "rgba(255,255,255,0.45)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(239,68,68,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.background = ""; }}
          >
            <LogOut size={15} strokeWidth={2} />
            Sign Out
          </button>
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
          {/* Admin chip with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all"
              style={{ border: "1px solid var(--gray-border)" }}
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: "var(--primary)" }}>
                {adminName.charAt(0).toUpperCase()}
              </div>
              <span className="hidden sm:block text-sm font-semibold max-w-[120px] truncate" style={{ color: "var(--black)" }}>{adminName}</span>
              <ChevronDown
                size={13}
                style={{ color: "var(--gray-text)", transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                className="hidden sm:block"
              />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-2xl shadow-lg overflow-hidden z-50 bg-white"
                style={{ border: "1px solid var(--gray-border)", top: "100%" }}
              >
                <button
                  onClick={() => { setNewName(adminName); setNameModal(true); setDropdownOpen(false); }}
                  className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-semibold transition-all"
                  style={{ color: "var(--black)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gray-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = ""; }}
                >
                  <Pencil size={14} strokeWidth={2} style={{ color: "var(--gray-text)" }} />
                  Change Name
                </button>
                <div style={{ height: 1, background: "var(--gray-border)", margin: "0 12px" }} />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-semibold transition-all"
                  style={{ color: "#ef4444" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#fef2f2"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = ""; }}
                >
                  <LogOut size={14} strokeWidth={2} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pt-[60px] min-h-screen md:ml-64">
        <div className="p-4 sm:p-6">{children}</div>
      </main>

      {/* Change Name Modal */}
      {nameModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setNameModal(false); }}
        >
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-base font-bold mb-1" style={{ color: "var(--black)" }}>Change Display Name</h3>
            <p className="text-sm mb-4" style={{ color: "var(--gray-text)" }}>This name will show in the header and settings.</p>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleChangeName(); if (e.key === "Escape") setNameModal(false); }}
              placeholder="Enter your name"
              autoFocus
              className="w-full rounded-xl px-4 py-2.5 text-sm outline-none mb-4"
              style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setNameModal(false)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{ color: "var(--gray-text)", border: "1px solid var(--gray-border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gray-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ""; }}
              >
                Cancel
              </button>
              <button
                onClick={handleChangeName}
                disabled={savingName}
                className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
                style={{ background: "var(--primary)" }}
              >
                {savingName ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
