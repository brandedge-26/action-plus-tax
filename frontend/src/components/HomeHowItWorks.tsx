import Link from "next/link";
import { ArrowRight, MousePointerClick, ClipboardList, Upload, CheckCircle2 } from "lucide-react";

const PRIMARY      = "#01567E";
const PRIMARY_DARK = "#014A6A";
const YELLOW       = "#FFF200";

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
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#fff" }}>

      {/* Subtle blue tint bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "linear-gradient(180deg, #F0F8FA 0%, #fff 100%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: PRIMARY, color: "#fff" }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#0A0A0A" }}>
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
              backgroundImage: `repeating-linear-gradient(90deg, ${YELLOW} 0px, ${YELLOW} 8px, transparent 8px, transparent 18px)`,
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
                      style={{ borderColor: isLast ? YELLOW : `rgba(1,86,126,0.25)` }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: isLast ? YELLOW : PRIMARY,
                          color: isLast ? "#0A0A0A" : "white",
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: YELLOW, color: "#0A0A0A" }}
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
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
            style={{ background: PRIMARY, color: "white", boxShadow: "0 4px 20px rgba(1,86,126,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#014A6A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
          >
            Start Your Application
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
            style={{ background: YELLOW, color: "#0A0A0A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E6D900")}
            onMouseLeave={(e) => (e.currentTarget.style.background = YELLOW)}
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
