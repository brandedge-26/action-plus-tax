"use client";

import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ServiceInactiveBanner({ slug }: { slug: string }) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5510/api/services")
      .then(r => r.json())
      .then(data => {
        const slugs = new Set<string>((data.services ?? []).map((s: { slug: string }) => s.slug));
        if (slugs.size > 0) setInactive(!slugs.has(slug));
      })
      .catch(() => {}); // On API error, don't show banner
  }, [slug]);

  if (!inactive) return null;

  return (
    <div className="w-full" style={{ background: "#FEF3C7", borderBottom: "2px solid #D97706" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <AlertTriangle size={20} strokeWidth={2} style={{ color: "#D97706", flexShrink: 0 }} />
        <div>
          <p className="text-sm font-bold" style={{ color: "#92400E" }}>
            This Service Is Currently Unavailable
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#B45309" }}>
            This service is temporarily not being offered. Please{" "}
            <Link href="/contact" className="underline font-semibold">contact us</Link>{" "}
            or{" "}
            <Link href="/services" className="underline font-semibold">view our available services</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
