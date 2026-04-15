"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  Paperclip,
  X,
  CheckCircle2,
  Send,
} from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const PRIMARY = "#0046BE";
const PRIMARY_LIGHT = "#EBF3FF";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "912-559-2222",
    sub: "Mon–Fri 9AM–7PM · Sat 10AM–6PM",
    href: "tel:9125592222",
    color: PRIMARY,
    bg: PRIMARY_LIGHT,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    sub: "Quick responses during business hours",
    href: "https://wa.me/19125592222",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@actionplustax.com",
    sub: "We respond within 1 business day",
    href: "mailto:info@actionplustax.com",
    color: "#0284c7",
    bg: "#f0f9ff",
  },
];

const subjects = [
  "Tax Preparation & Filing",
  "IRS Audit Support",
  "Tax Resolution",
  "Refund Advance",
  "Bookkeeping / Payroll",
  "Tax Planning",
  "Book Appointment",
  "Other",
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Saturday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Page Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-12" style={{ background: "#0046BE" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,194,0,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ background: "#FFC200", color: "#001A57" }}
            >
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Let&apos;s Get Your Taxes{" "}
              <span style={{ color: "#FFC200" }}>Done Right</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              Reach out by phone, WhatsApp, or email — or fill in the form below.
              Our Tax Pros typically respond within one business day.
            </p>
          </div>
        </section>

        {/* ── Contact Method Cards ── */}
        <section className="bg-white pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#FFC200] hover:shadow-md transition-all"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: m.bg, color: m.color }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                        {m.label}
                      </p>
                      <p
                        className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#FFC200] transition-colors"
                      >
                        {m.value}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-start">

              {/* ── Contact Form ── */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-9 shadow-sm">
                  <h2 className="text-xl font-bold text-[#0A0A0A] mb-1">Send Us a Message</h2>
                  <p className="text-sm text-gray-400 mb-7">
                    Fill in the form and a Tax Pro will get back to you shortly.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: PRIMARY_LIGHT }}
                      >
                        <CheckCircle2 size={30} style={{ color: PRIMARY }} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-lg font-bold text-[#0A0A0A]">Message Sent!</h3>
                      <p className="text-sm text-gray-500 max-w-sm">
                        Thank you for reaching out. One of our Tax Pros will respond within 1 business day.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setFile(null); }}
                        className="mt-2 text-sm font-semibold underline underline-offset-4"
                        style={{ color: PRIMARY }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1 */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Full Name <span style={{ color: "#FFC200" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#0046BE] focus:ring-2 focus:ring-[#0046BE]/10"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(912) 000-0000"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#0046BE] focus:ring-2 focus:ring-[#0046BE]/10"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Email Address <span style={{ color: "#FFC200" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#0046BE] focus:ring-2 focus:ring-[#0046BE]/10"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Subject <span style={{ color: "#FFC200" }}>*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] outline-none transition-all focus:border-[#0046BE] focus:ring-2 focus:ring-[#0046BE]/10 bg-white"
                        >
                          <option value="" disabled>Select a subject…</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Message <span style={{ color: "#FFC200" }}>*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you…"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-400 outline-none transition-all focus:border-[#0046BE] focus:ring-2 focus:ring-[#0046BE]/10 resize-none"
                        />
                      </div>

                      {/* File attachment */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Attach a File{" "}
                          <span className="font-normal text-gray-400">(optional — PDF, JPG, PNG)</span>
                        </label>
                        {file ? (
                          <div
                            className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl px-4 py-3"
                            style={{ background: PRIMARY_LIGHT }}
                          >
                            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#FFC200" }}>
                              <Paperclip size={14} strokeWidth={2} />
                              <span className="truncate max-w-[200px]">{file.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFile(null)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X size={15} strokeWidth={2} />
                            </button>
                          </div>
                        ) : (
                          <label className="flex items-center gap-3 border border-dashed border-gray-200 rounded-xl px-4 py-4 cursor-pointer hover:border-[#FFC200] transition-colors group">
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: PRIMARY_LIGHT }}
                            >
                              <Paperclip size={15} strokeWidth={2} style={{ color: PRIMARY }} />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600 group-hover:text-[#FFC200] transition-colors">
                                Click to attach a file
                              </p>
                              <p className="text-xs text-gray-400">Max 10MB · PDF, JPG, PNG</p>
                            </div>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={handleFile}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
                        style={{ background: "#FFC200", color: "#001A57" }}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={15} strokeWidth={2.5} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* ── Right: Office Info + Hours + Map ── */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                {/* Office Info */}
                <div className="bg-[#0A0A0A] rounded-3xl p-7 relative overflow-hidden">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,194,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,194,0,0.25) 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative">
                    <h3 className="text-white font-bold text-base mb-5">Our Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(255,194,0,0.15)" }}
                        >
                          <MapPin size={14} strokeWidth={2} style={{ color: PRIMARY }} />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">212 S 1st Street, Suite 2</p>
                          <p className="text-gray-400 text-sm">Jesup, GA 31545</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(255,194,0,0.15)" }}
                        >
                          <Phone size={14} strokeWidth={2} style={{ color: PRIMARY }} />
                        </div>
                        <div>
                          <a href="tel:9125592222" className="text-white text-sm font-medium hover:text-[#0046BE] transition-colors block">912-559-2222</a>
                          <a href="tel:9125592223" className="text-white/50 text-sm hover:text-[#FFC200] transition-colors block">912-559-2223</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={15} strokeWidth={2} style={{ color: PRIMARY }} />
                    <h3 className="text-[#0A0A0A] font-bold text-base">Office Hours</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl"
                        style={{ background: "#F4F7FF", border: "1px solid #F0F0F0" }}
                      >
                        <span className="text-sm text-gray-600">{h.day}</span>
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={
                            h.open
                              ? { background: "#FFC200", color: "#001A57" }
                              : { background: "#FEE2E2", color: "#DC2626" }
                          }
                        >
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Appointment CTA */}
                <Link
                  href="/consultation"
                  className="flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-2xl transition-all hover:opacity-90 shadow-lg"
                  style={{ background: "#FFC200", color: "#001A57" }}
                >
                  Book an Appointment
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Google Map ── */}
        <section className="bg-white pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "360px" }}>
              <iframe
                title="Action Plus Tax Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.0!2d-81.8835!3d31.6065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f03c2d5d5d5d5d%3A0x0!2s212+S+1st+St%2C+Jesup%2C+GA+31545!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
