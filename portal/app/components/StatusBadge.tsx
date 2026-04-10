type StatusKey = "pending" | "in_review" | "in progress" | "completed" | "rejected" | "approved" | "submitted" | "confirmed" | "cancelled" | "scheduled";

const config: Record<StatusKey, { label: string; bg: string; color: string }> = {
  pending:       { label: "Pending",     bg: "#FEF9C3", color: "#854D0E"  },
  submitted:     { label: "Submitted",   bg: "#DBEAFE", color: "#1D4ED8"  },
  in_review:     { label: "In Review",   bg: "#F3ECFF", color: "#9245FF"  },
  "in progress": { label: "In Progress", bg: "#F3ECFF", color: "#9245FF"  },
  completed:     { label: "Completed",   bg: "#DCFCE7", color: "#15803D"  },
  approved:      { label: "Approved",    bg: "#DCFCE7", color: "#15803D"  },
  rejected:      { label: "Rejected",    bg: "#FEE2E2", color: "#DC2626"  },
  confirmed:     { label: "Confirmed",   bg: "#DCFCE7", color: "#15803D"  },
  cancelled:     { label: "Cancelled",   bg: "#F3F4F6", color: "#6B7280"  },
  scheduled:     { label: "Scheduled",   bg: "#EDE9FE", color: "#7C3AED"  },
};

export default function StatusBadge({ status }: { status: string }) {
  const cfg = config[status.toLowerCase() as StatusKey] ?? { label: status, bg: "#F3F4F6", color: "#6B7280" };
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}
