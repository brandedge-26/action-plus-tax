const map: Record<string, { bg: string; color: string; label: string }> = {
  pending:    { bg: "#FEF3C7", color: "#D97706", label: "Pending"    },
  in_review:  { bg: "var(--primary-light)", color: "var(--primary)", label: "In Review" },
  in_progress:{ bg: "var(--primary-light)", color: "var(--primary)", label: "In Progress" },
  completed:  { bg: "var(--success-light)", color: "var(--success)", label: "Completed"  },
  rejected:   { bg: "var(--danger-light)",  color: "var(--danger)",  label: "Rejected"   },
  approved:   { bg: "var(--success-light)", color: "var(--success)", label: "Approved"   },
  confirmed:  { bg: "var(--success-light)", color: "var(--success)", label: "Confirmed"  },
  scheduled:  { bg: "#DBEAFE",              color: "#1D4ED8",        label: "Scheduled"  },
  cancelled:  { bg: "#F3F4F6",              color: "#6B7280",        label: "Cancelled"  },
};

export default function StatusBadge({ status }: { status: string }) {
  const s = map[status] ?? { bg: "#F3F4F6", color: "#6B7280", label: status };
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}
