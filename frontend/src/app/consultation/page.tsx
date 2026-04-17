"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  CalendarDays,
  Clock,
  ShieldCheck,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";
import toast from "react-hot-toast";

const PRIMARY = "#01567E";
const PRIMARY_LIGHT = "#E0F4F9";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  "Tax Preparation & Filing",
  "Individual Income Tax Filing",
  "Self-Employed / Freelance Tax",
  "Cryptocurrency & Investment Tax",
  "Tax Extensions",
  "Amended Tax Returns",
  "Tax Resolution & IRS Issue Support",
  "IRS Audit Support & Representation",
  "Tax Planning Services",
  "Bookkeeping Services",
  "Payroll Services",
  "Business Valuation",
  "Not sure — help me choose",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
];

const expects = [
  {
    icon: Users,
    title: "One-on-One with a Tax Pro",
    desc: "You'll speak directly with an expert — no call centers, no bots.",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation, 100% Free",
    desc: "Our consultation is completely free. Ask anything, no commitment required.",
  },
  {
    icon: Clock,
    title: "20–30 Minute Session",
    desc: "A focused session to understand your situation and map out the next steps.",
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ─── Mini Calendar ─────────────────────────────────────────────────────────────
function MiniCalendar({ selected, onSelect }: { selected: string; onSelect: (d: string) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const toDateStr = (day: number) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  };
  const isSunday = (day: number) => new Date(viewYear, viewMonth, day).getDay() === 0;

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
          <ChevronLeft size={16} strokeWidth={2} />
        </button>
        <span className="text-sm font-bold text-[#0A0A0A]">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-400 py-1">{d}</div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const str = toDateStr(day);
          const disabled = isPast(day) || isSunday(day);
          const isSelected = selected === str;
          const isToday = str === toDateStr(today.getDate()) && viewMonth === today.getMonth() && viewYear === today.getFullYear();

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(str)}
              className={`
                h-8 w-full text-xs font-medium rounded-lg transition-all
                ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-[#E0F4F9] cursor-pointer"}
                ${isSelected ? "text-white font-bold" : ""}
                ${isToday && !isSelected ? "ring-1 ring-[#01567E]" : ""}
              `}
              style={isSelected ? { background: PRIMARY } : {}}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ConsultationPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    service: "", date: "", time: "", notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim())  { toast.error("Please enter your full name."); return; }
    if (!form.email.trim())     { toast.error("Please enter your email address."); return; }
    if (!/\S+@\S+\.\S+/.test(form.email)) { toast.error("Please enter a valid email address."); return; }
    if (!form.phone.trim())     { toast.error("Please enter your phone number."); return; }
    if (!form.service)          { toast.error("Please select a service."); return; }
    if (!form.date)             { toast.error("Please select an appointment date."); return; }
    if (!form.time)             { toast.error("Please select a time slot."); return; }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5510/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Booking failed.");
      toast.success("Consultation booked! We'll confirm within 1 business day.");
      setDone(true);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#01567E] focus:ring-2 focus:ring-[#01567E]/30 focus:ring-offset-2 bg-white";

  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-12" style={{ background: "#01567E" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ background: "#FFF200", color: "#041E42" }}
            >
              Free Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Book Your Free{" "}
              <span style={{ color: "#FFF200" }}>Tax Consultation</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              Speak one-on-one with an expert Tax Pro. No obligation, completely free.
              Pick a time that works for you.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="pb-20 lg:pb-28 pt-10" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-start">

              {/* ── Booking Form ── */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-9 shadow-sm"
                  style={{ borderTop: `3px solid ${PRIMARY}` }}
                >

                  {done ? (
                    <div className="flex flex-col items-center text-center gap-5 py-10">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: PRIMARY_LIGHT }}>
                        <CheckCircle2 size={34} style={{ color: PRIMARY }} strokeWidth={1.6} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A]">Consultation Booked!</h3>
                      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                        We've received your request. A Tax Pro will confirm your slot and reach out within 1 business day.
                      </p>
                      <div
                        className="w-full rounded-2xl p-5 text-sm text-left space-y-2 border"
                        style={{ background: PRIMARY_LIGHT, borderColor: "rgba(255,242,0,0.15)" }}
                      >
                        {form.service && <p><span className="font-semibold text-[#0A0A0A]">Service:</span> <span className="text-gray-600">{form.service}</span></p>}
                        {form.date && <p><span className="font-semibold text-[#0A0A0A]">Date:</span> <span className="text-gray-600">{form.date}</span></p>}
                        {form.time && <p><span className="font-semibold text-[#0A0A0A]">Time:</span> <span className="text-gray-600">{form.time}</span></p>}
                      </div>
                      <button
                        onClick={() => { setDone(false); setForm({ fullName:"", email:"", phone:"", service:"", date:"", time:"", notes:"" }); }}
                        className="text-sm font-semibold underline underline-offset-4"
                        style={{ color: PRIMARY }}
                      >
                        Book another consultation
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-[#0A0A0A] mb-1">Schedule Your Session</h2>
                      <p className="text-sm text-gray-400 mb-7">Fill in your details, choose a service, pick a date &amp; time.</p>

                      <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Personal Info */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Your Information</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name <span style={{ color: "#DC2626" }}>*</span></label>
                              <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="John Smith" className={inputCls} />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number <span style={{ color: "#DC2626" }}>*</span></label>
                              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(912) 000-0000" className={inputCls} />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address <span style={{ color: "#DC2626" }}>*</span></label>
                            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputCls} />
                          </div>
                        </div>

                        {/* Service */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Select a Service</p>
                          <select name="service" required value={form.service} onChange={handleChange} className={inputCls}>
                            <option value="" disabled>Which service do you need?</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>

                        {/* Date picker */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                            <CalendarDays size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                            Choose a Date
                          </p>
                          <div className="border border-gray-100 rounded-2xl p-4">
                            <MiniCalendar
                              selected={form.date}
                              onSelect={(d) => setForm((p) => ({ ...p, date: d, time: "" }))}
                            />
                          </div>
                          {form.date && (
                            <p className="text-xs font-semibold mt-2" style={{ color: PRIMARY }}>
                              ✓ Selected: {new Date(form.date + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                            </p>
                          )}
                        </div>

                        {/* Time slots */}
                        {form.date && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                              <Clock size={13} strokeWidth={2} style={{ color: PRIMARY }} />
                              Choose a Time Slot
                            </p>
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                              {timeSlots.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setForm((p) => ({ ...p, time: t }))}
                                  className="text-xs font-semibold py-2 px-1 rounded-xl border transition-all"
                                  style={
                                    form.time === t
                                      ? { background: PRIMARY, color: "white", borderColor: PRIMARY }
                                      : { background: "white", color: "#374151", borderColor: "#e5e7eb" }
                                  }
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Notes */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Additional Notes</p>
                          <textarea
                            name="notes" rows={3} value={form.notes} onChange={handleChange}
                            placeholder="Anything specific you'd like to discuss? (optional)"
                            className={inputCls + " resize-none"}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading || !form.date || !form.time}
                          className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-50"
                          style={{ background: PRIMARY, color: "#fff" }}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                              </svg>
                              Booking…
                            </>
                          ) : (
                            <>Confirm Consultation <ArrowRight size={16} strokeWidth={2.5} /></>
                          )}
                        </button>

                        {(!form.date || !form.time) && (
                          <p className="text-xs text-center text-gray-400">Please select a date and time to continue</p>
                        )}
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* ── Right Panel ── */}
              <div className="lg:col-span-2 flex flex-col gap-5 lg:sticky lg:top-24">

                {/* What to expect */}
                <div className="bg-[#0A0A0A] rounded-3xl p-7 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,242,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,242,0,0.25) 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div
                    className="h-[2px] w-full absolute top-0 left-0"
                    style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, #60A5FA, ${PRIMARY}, transparent)` }}
                  />
                  <div className="relative">
                    <h3 className="text-white font-bold text-base mb-5">What to Expect</h3>
                    <ul className="space-y-5">
                      {expects.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.title} className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,242,0,0.15)", color: "#FFF200" }}>
                              <Icon size={16} strokeWidth={1.8} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">{item.title}</p>
                              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Prefer to call? */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-[#0A0A0A] font-bold text-sm mb-4">Prefer to reach us directly?</h3>
                  <div className="space-y-3">
                    <a href="tel:9125592222"
                      className="flex items-center gap-3 py-3 px-4 rounded-xl border border-gray-100 hover:border-[#01567E] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: PRIMARY_LIGHT }}>
                        <Phone size={15} strokeWidth={2} style={{ color: PRIMARY }} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Call Us</p>
                        <p className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#01567E] transition-colors">912-559-2222</p>
                      </div>
                    </a>
                    <a href="https://wa.me/19125592222" target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 py-3 px-4 rounded-xl border border-gray-100 hover:border-[#16a34a] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                        <MessageCircle size={15} strokeWidth={2} style={{ color: "#16a34a" }} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">WhatsApp</p>
                        <p className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#16a34a] transition-colors">Chat with us</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Office hours */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-[#0A0A0A] font-bold text-sm mb-4 flex items-center gap-2">
                    <Clock size={14} strokeWidth={2} style={{ color: PRIMARY }} /> Available Hours
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      { day: "Mon – Fri", time: "9:00 AM – 7:00 PM", open: true },
                      { day: "Saturday", time: "10:00 AM – 6:00 PM", open: true },
                      { day: "Sunday", time: "Closed", open: false },
                    ].map((h) => (
                      <li key={h.day} className="flex items-center justify-between gap-3 py-2 px-3 rounded-xl" style={{ background: "#F0F8FA" }}>
                        <span className="text-sm text-gray-600">{h.day}</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={h.open ? { background: "#DCFCE7", color: "#16a34a" } : { background: "#FEE2E2", color: "#DC2626" }}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact page link */}
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 font-semibold py-3.5 rounded-2xl text-sm transition-all border hover:shadow-md"
                  style={{ border: "1px solid #E2E8F0", color: PRIMARY, background: "white" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = PRIMARY; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; }}
                >
                  Send a Message Instead
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
