import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Building2 } from "lucide-react";

const PRIMARY = "#01567E";
const YELLOW  = "#FFF200";
const DARK    = "#041E42";

const highlights = [
  "Founded in 2012, serving the community for 12+ years",
  "IRS-authorized e-file provider — fully licensed & insured",
  "Partnered with Republic Bank for same-day refund advances",
  "Specialized in individual, self-employed, and small business taxes",
  "Bilingual staff available — English & Spanish",
  "Extended hours through tax season, including weekends",
];

const officeInfo = [
  { icon: MapPin,  label: "Location",       value: "Serving clients locally & nationwide" },
  { icon: Phone,   label: "Phone",          value: "(555) 123-4567" },
  { icon: Clock,   label: "Tax Season Hrs", value: "Mon–Sat 9am–8pm · Sun 10am–5pm" },
  { icon: Building2, label: "Founded",      value: "2012 — Over 12 years in business" },
];

export default function HomeAbout() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: split layout — image left, text right ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Image side */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(1,86,126,0.07) 0%, transparent 70%)" }} />

            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0" }}>
              <Image
                src="/images/team-meeting.jpg"
                alt="Action Plus TAX team in a client consultation meeting"
                width={640}
                height={460}
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,30,66,0.5) 0%, transparent 50%)" }} />

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: YELLOW }}>
                  <Building2 size={18} strokeWidth={2} style={{ color: DARK }} />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0A0A0A" }}>Action Plus TAX</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>Professional Tax & Financial Services since 2012</p>
                </div>
              </div>
            </div>

            {/* Floating years badge */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center"
              style={{ background: PRIMARY, boxShadow: "0 8px 28px rgba(1,86,126,0.35)" }}>
              <span className="text-3xl font-bold text-white leading-none">12+</span>
              <span className="text-[10px] font-bold text-white/70 mt-1 leading-tight">Years<br />Experience</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center self-start gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#E0F4F9", color: PRIMARY }}>
              <Building2 size={11} strokeWidth={3} /> About Us
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight" style={{ color: "#0A0A0A" }}>
              Your Trusted Partner for{" "}
              <span style={{ color: PRIMARY }}>Taxes & Financial Peace</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
              Action Plus TAX was built on one simple belief: every hardworking individual and
              small business deserves access to expert tax advice — without the corporate price tag or the
              runaround. Since 2012, we've helped hundreds of clients navigate tax season with confidence,
              maximize their refunds, and stay fully compliant with the IRS.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
              Whether you're a W-2 employee, a self-employed contractor, or a small business owner,
              our certified Tax Pros bring the same level of care and precision to every return. We
              don't just file your taxes — we make sure you understand every line.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: "#374151" }}>
                  <CheckCircle2 size={15} strokeWidth={2.5} style={{ color: PRIMARY, flexShrink: 0, marginTop: "2px" }} />
                  {h}
                </li>
              ))}
            </ul>

            <Link href="/consultation"
              className="inline-flex items-center self-start gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
              style={{ background: PRIMARY, color: "#fff", boxShadow: "0 4px 20px rgba(1,86,126,0.25)" }}>
              Meet Your Tax Pro
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* ── Bottom: office info strip + handshake image ── */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Info cards — 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {officeInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "#F0F8FA", border: "1px solid #E2E8F0" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#E0F4F9" }}>
                  <Icon size={18} strokeWidth={1.8} style={{ color: PRIMARY }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#94A3B8" }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: "#0A0A0A" }}>{value}</p>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="sm:col-span-2 flex items-center justify-between gap-6 p-6 rounded-2xl"
              style={{ background: DARK, border: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <p className="text-base font-bold text-white mb-1">Ready to get started?</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Book a free consultation today — no obligation.
                </p>
              </div>
              <Link href="/consultation"
                className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all hover:opacity-90 shrink-0"
                style={{ background: YELLOW, color: DARK }}>
                Book Now
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Handshake image — 2 cols */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[280px]"
            style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.1)", border: "1px solid #E2E8F0" }}>
            <Image
              src="/images/professional-handshake.jpg"
              alt="Professional business partnership and trust"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(1,86,126,0.65) 0%, rgba(4,30,66,0.45) 100%)" }} />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: YELLOW }}>Our Commitment</p>
              <h3 className="text-xl font-bold text-white leading-snug">
                "We treat every client like our only client."
              </h3>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                — Action Plus TAX Team
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
