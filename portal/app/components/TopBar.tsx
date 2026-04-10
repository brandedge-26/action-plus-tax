"use client";

import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";

const pageTitles: Record<string, string> = {
  "/dashboard":               "Dashboard",
  "/dashboard/applications":  "My Applications",
  "/dashboard/apply":         "New Application",
  "/dashboard/documents":     "My Documents",
  "/dashboard/appointments":  "Appointments",
  "/dashboard/messages":      "Messages",
  "/dashboard/profile":       "Profile Settings",
};

export default function TopBar() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.startsWith("/dashboard/applications/")) return "Application Details";
    return pageTitles[pathname] || "Client Portal";
  };

  return (
    <header
      className="fixed top-0 left-64 right-0 h-[60px] flex items-center justify-between px-6 z-20 bg-white"
      style={{ borderBottom: "1px solid var(--gray-border)" }}
    >
      <h1 className="font-bold text-base" style={{ color: "var(--black)" }}>{getTitle()}</h1>

      <div className="flex items-center gap-3">
        {/* Bell */}
        <button
          className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
          style={{ border: "1px solid var(--gray-border)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--gray-border)")}
        >
          <Bell size={15} strokeWidth={2} style={{ color: "var(--gray-text)" }} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2 border-white"
            style={{ background: "var(--primary)" }}
          />
        </button>

        {/* User chip */}
        <div
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl"
          style={{ border: "1px solid var(--gray-border)" }}
        >
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
            style={{ background: "var(--primary)" }}
          >
            JD
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--black)" }}>John Doe</span>
        </div>
      </div>
    </header>
  );
}
