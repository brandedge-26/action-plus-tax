"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRIMARY = "#01567E";
const PRIMARY_DARK = "#014A6A";

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 text-center"
          style={{ background: PRIMARY }}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(white 1px, transparent 1px),
                linear-gradient(90deg, white 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow circles */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="relative">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Online & In Person — Help Is Here!
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Let Us Take Care Of You
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
              Expert Tax Pros ready to file, resolve IRS issues, and maximize your refund.
              Available late weekdays and Saturdays.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg"
                style={{ background: "#FFF200", color: "#0A0A0A" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#E6D900")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FFF200")}
              >
                Book an Appointment
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
