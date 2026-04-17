"use client";


import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const PRIMARY = "#01567E";
const DARK = "#041E42";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the services of Action Plus Tax, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all clients, visitors, and users of our website, in-person services, and online portal.",
  },
  {
    title: "2. Services Provided",
    content:
      "Action Plus Tax provides tax preparation and filing, IRS audit support and representation, tax resolution, bookkeeping, payroll services, business valuation, tax planning, and related financial services. The specific services rendered to each client are governed by the engagement agreement signed at the time of service.",
  },
  {
    title: "3. Client Responsibilities",
    content:
      "Clients are responsible for providing accurate, complete, and timely information and documents required for tax preparation and filing. Action Plus Tax is not liable for errors or penalties resulting from incomplete, inaccurate, or misleading information provided by the client. Clients must review and approve all returns before submission.",
  },
  {
    title: "4. Fees and Payment",
    content:
      "Service fees are disclosed prior to the start of any engagement. Payment is due upon completion of services unless otherwise agreed in writing. Fees are non-refundable once a tax return has been prepared and submitted for client review and approval. Refund advance fees and terms are governed by the applicable bank partner agreement.",
  },
  {
    title: "5. Refund Advance",
    content:
      "Refund advance products (up to $6,000) are offered through our banking partner, Republic Bank. Approval, terms, and availability are subject to the partner's eligibility requirements and are not guaranteed. Action Plus Tax does not make credit decisions regarding refund advance products.",
  },
  {
    title: "6. IRS Authorization",
    content:
      "Clients who wish Action Plus Tax to communicate directly with the IRS on their behalf must execute a valid Form 2848 (Power of Attorney) or Form 8821 (Tax Information Authorization). Without such authorization, Action Plus Tax cannot represent clients in IRS proceedings.",
  },
  {
    title: "7. Confidentiality",
    content:
      "All client information shared with Action Plus Tax is treated as strictly confidential. We do not sell, rent, or disclose client information to third parties except as required by law, with client consent, or as necessary to perform the contracted services (e.g., e-filing with the IRS, banking partners for refund advances).",
  },
  {
    title: "8. Accuracy and IRS Guarantee",
    content:
      "Action Plus Tax guarantees the accuracy of all tax returns prepared by our staff. If an error made by Action Plus Tax results in a penalty or interest charge from the IRS, we will reimburse the penalty and interest directly attributable to our error. This guarantee does not cover penalties resulting from inaccurate or incomplete information provided by the client.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, the total liability of Action Plus Tax for any claim arising from our services shall not exceed the fees paid by the client for the specific service giving rise to the claim. Action Plus Tax is not liable for indirect, incidental, special, or consequential damages, including lost refunds due to client-provided inaccuracies.",
  },
  {
    title: "10. Electronic Communications",
    content:
      "By providing your email address and phone number, you consent to receive communications from Action Plus Tax regarding your tax matters, appointment confirmations, service updates, and promotional offers. You may opt out of marketing communications at any time by contacting us or unsubscribing via the provided link.",
  },
  {
    title: "11. Amendments",
    content:
      "Action Plus Tax reserves the right to update these Terms of Service at any time. The most current version will be published on our website. Continued use of our services after any such update constitutes acceptance of the revised terms.",
  },
  {
    title: "12. Governing Law",
    content:
      "These Terms of Service are governed by the laws of the State of Georgia. Any disputes arising from or related to these terms or the services provided by Action Plus Tax shall be subject to the exclusive jurisdiction of the courts located in Wayne County, Georgia.",
  },
];

export default function TermsPage() {
  return (
    <>
      <HeaderTest />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-16 pb-14" style={{ background: DARK }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,242,0,0.12) 0%, transparent 70%)" }}
          />
          <div className="h-[2px] w-full absolute bottom-0"
            style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, rgba(255,255,255,0.4), ${PRIMARY}, transparent)` }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#FFF200" }}>Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Terms of <span style={{ color: "#FFF200" }}>Service</span>
            </h1>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Please read these terms carefully before using our services. Last updated:{" "}
              <span className="text-white/70 font-medium">April 2025</span>
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-14 lg:py-20" style={{ background: "#F8FAFC" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="bg-white rounded-2xl p-6 sm:p-8"
                  style={{ border: "1px solid #E2E8F0", borderLeft: `4px solid ${PRIMARY}` }}
                >
                  <h2 className="text-lg font-bold mb-3" style={{ color: DARK }}>{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{section.content}</p>
                </article>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-10 rounded-2xl p-7 text-center" style={{ background: DARK }}>
              <p className="text-white/60 text-sm mb-2">Questions about these terms?</p>
              <p className="text-white font-semibold text-base mb-4">
                Contact us at{" "}
                <a href="mailto:info@actionplustax.com" className="underline underline-offset-4" style={{ color: "#FFF200" }}>
                  info@actionplustax.com
                </a>{" "}
                or call{" "}
                <a href="tel:9125592222" className="underline underline-offset-4" style={{ color: "#FFF200" }}>
                  912-559-2222
                </a>
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:opacity-90"
                style={{ background: PRIMARY, color: "#fff" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
