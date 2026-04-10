"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderOpen,
  CalendarDays,
  MessageSquare,
  UserCircle,
  LogOut,
  Receipt,
} from "lucide-react";

const navItems = [
  { href: "/dashboard",               label: "Dashboard",        icon: LayoutDashboard, exact: true  },
  { href: "/dashboard/applications",  label: "My Applications",  icon: FileText                      },
  { href: "/dashboard/apply",         label: "New Application",  icon: PlusCircle                    },
  { href: "/dashboard/documents",     label: "My Documents",     icon: FolderOpen                    },
  { href: "/dashboard/appointments",  label: "Appointments",     icon: CalendarDays                  },
  { href: "/dashboard/messages",      label: "Messages",         icon: MessageSquare, badge: 2       },
  { href: "/dashboard/profile",       label: "Profile Settings", icon: UserCircle                    },
];

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      className="fixed top-0 left-0 h-full w-64 flex flex-col z-30 overflow-hidden"
      style={{ background: "#0A0A0A", borderRight: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Purple grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(146,69,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(146,69,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.18) 0%, transparent 70%)" }}
      />

      {/* Logo */}
      <div
        className="relative z-10 flex items-center gap-2.5 px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: PRIMARY }}>
          <Receipt size={15} strokeWidth={2} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-bold leading-none tracking-tight">
            <span style={{ color: PRIMARY }}>Action</span>
            <span className="text-white">Plus</span>
            <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
          </p>
          <p className="text-[9px] mt-0.5 font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
            Client Portal
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative group"
              style={active
                ? { background: PRIMARY, color: "#fff", boxShadow: `0 4px 16px rgba(146,69,255,0.35)` }
                : { color: "rgba(255,255,255,0.45)" }
              }
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(146,69,255,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLAnchorElement).style.background = "";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                }
              }}
            >
              <Icon size={16} strokeWidth={active ? 2.5 : 2} />
              <span>{item.label}</span>
              {item.badge && !active && (
                <span
                  className="ml-auto text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: PRIMARY }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Bottom */}
      <div className="relative z-10 px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
            style={{ background: PRIMARY }}
          >
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate leading-none">John Doe</p>
            <p className="text-xs truncate mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
              john@example.com
            </p>
          </div>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-2 text-xs font-medium py-2 px-3 rounded-xl transition-all w-full"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(146,69,255,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)";
            (e.currentTarget as HTMLAnchorElement).style.background = "";
          }}
        >
          <LogOut size={13} strokeWidth={2} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
