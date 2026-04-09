import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, Mail } from "lucide-react";

const PRIMARY = "#9245FF";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/appointment" },
];

const services = [
  { label: "Tax Preparation & Filing", href: "/services/tax-preparation" },
  { label: "IRS Audit Support", href: "/services/audit-support" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Refund Advance", href: "/services/refund-advance" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Tax Resolution", href: "/services/tax-resolution" },
];

const hours = [
  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Saturday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export default function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Subtle top purple glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(146,69,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${PRIMARY} 30%, #c084fc 50%, ${PRIMARY} 70%, transparent 100%)`,
        }}
      />

      {/* ── Newsletter bar ── */}
      <div
        className="relative border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-sm">
              Stay updated with tax tips &amp; deadlines
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              No spam — just helpful reminders from our Tax Pros.
            </p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1 sm:w-64">
              <Mail
                size={14}
                strokeWidth={2}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#9245FF] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2.5 rounded-lg transition-all hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Subscribe <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

        {/* Brand col — wider */}
        <div className="lg:col-span-4">
          <Link href="/" className="tracking-tighter text-2xl font-bold inline-block">
            <span style={{ color: PRIMARY }}>Action</span>
            <span className="text-white">Plus</span>
            <span style={{ color: PRIMARY }}>&nbsp;Tax</span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
            Family-owned Tax Professionals serving individuals &amp; businesses
            since 2012. Get your taxes done right — guaranteed.
          </p>

          {/* Contact chips */}
          <div className="mt-6 space-y-2.5">
            <a
              href="tel:9125592222"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                style={{ background: "rgba(146,69,255,0.12)" }}
              >
                <Phone size={13} strokeWidth={2} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                912-559-2222
              </span>
            </a>
            <a
              href="tel:9125592223"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(146,69,255,0.12)" }}
              >
                <Phone size={13} strokeWidth={2} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                912-559-2223
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(146,69,255,0.12)" }}
              >
                <MapPin size={13} strokeWidth={2} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm text-gray-400">
                212 S 1st St, Suite 2, Jesup, GA 31545
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0 transition-colors"
                    style={{ background: "rgba(146,69,255,0.4)" }}
                  />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: "rgba(146,69,255,0.4)" }}
                  />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="lg:col-span-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
            <Clock size={13} strokeWidth={2} style={{ color: PRIMARY }} />
            Office Hours
          </h4>
          <ul className="space-y-3">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-gray-400 text-sm">{h.day}</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={
                    h.open
                      ? { background: "rgba(146,69,255,0.15)", color: PRIMARY }
                      : { background: "rgba(239,68,68,0.12)", color: "#f87171" }
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>

          {/* Book CTA */}
          <Link
            href="/appointment"
            className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-white py-3 rounded-xl transition-all hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Book Appointment
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Action Plus Tax Service. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
