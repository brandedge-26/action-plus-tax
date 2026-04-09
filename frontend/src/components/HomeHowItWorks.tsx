import Link from "next/link";
import { ArrowRight, MousePointerClick, ClipboardList, Upload, CheckCircle2 } from "lucide-react";

const PRIMARY = "#9245FF";
const PRIMARY_LIGHT = "#F3ECFF";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Choose a Service",
    desc: "Browse our services and select the one that fits your needs — tax filing, IRS help, bookkeeping, and more.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Fill Your Application",
    desc: "Complete your application online in minutes. Personal info, filing status, and service details — simple and guided.",
  },
  {
    number: "03",
    icon: Upload,
    title: "Upload Documents",
    desc: "Securely upload your W-2s, 1099s, ID, and any required documents. Drag & drop or browse from your device.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "We Handle the Rest",
    desc: "Our Tax Pros review, prepare, and file. Track your status in the Client Portal and get notified every step of the way.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
            Get Your Taxes Done in{" "}
            <span style={{ color: PRIMARY }}>4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Our streamlined process makes filing fast, secure, and stress-free — entirely online.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line (desktop) */}
          <div
            className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-px"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, rgba(146,69,255,0.25) 0px, rgba(146,69,255,0.25) 8px, transparent 8px, transparent 18px)`,
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.number} className="flex flex-col items-center text-center relative">

                  {/* Icon circle */}
                  <div className="relative mb-5">
                    <div
                      className="w-[88px] h-[88px] rounded-full flex items-center justify-center border-2 bg-white"
                      style={{ borderColor: isLast ? PRIMARY : "rgba(146,69,255,0.20)" }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: isLast ? PRIMARY : PRIMARY_LIGHT,
                          color: isLast ? "white" : PRIMARY,
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: PRIMARY }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A0A0A] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
            style={{ background: PRIMARY, boxShadow: "0 4px 20px rgba(146,69,255,0.25)" }}
          >
            Start Your Application
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#9245FF] text-gray-600 hover:text-[#9245FF] font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
