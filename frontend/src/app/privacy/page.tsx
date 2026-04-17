"use client";

import Link from "next/link";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const PRIMARY = "#01567E";
const DARK = "#041E42";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly when using our services, including your full name, email address, phone number, mailing address, Social Security Number or Tax ID (required for tax preparation), income and financial records, employment information, and any other documents necessary for the preparation of your tax return. We also collect information automatically when you use our website, such as IP address, browser type, and pages visited.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used solely to prepare, review, and file your tax return; provide IRS audit support and representation; process refund advance applications with our banking partner (Republic Bank); communicate with you about your account, appointments, and tax matters; improve our services; and comply with applicable federal and state laws including IRS requirements.",
  },
  {
    title: "3. Tax Information and IRS Compliance",
    content:
      "As a federally authorized IRS e-file provider, we are required to collect and verify taxpayer identification information in accordance with IRS regulations. Your tax return data is transmitted to the IRS through secure, encrypted channels. We retain copies of your tax records for a period of 7 years as required by professional and legal standards.",
  },
  {
    title: "4. Sharing of Information",
    content:
      "We do not sell, rent, or trade your personal information to any third party. We may share your information only with: (a) the IRS and state tax agencies as required for filing; (b) Republic Bank or applicable banking partners for refund advance processing, with your consent; (c) service providers who assist us in operating our website or business, under strict confidentiality agreements; (d) legal or regulatory authorities when required by law.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement industry-standard administrative, technical, and physical safeguards to protect your personal and financial information from unauthorized access, use, disclosure, alteration, or destruction. Our website uses SSL/TLS encryption. Client documents are stored in secure, access-controlled systems. Staff access to client data is limited to what is necessary to perform their duties.",
  },
  {
    title: "6. Client Portal Security",
    content:
      "Our online client portal requires email verification and password authentication. You are responsible for maintaining the confidentiality of your login credentials. Please notify us immediately at info@actionplustax.com if you suspect unauthorized access to your account.",
  },
  {
    title: "7. Retention of Records",
    content:
      "We retain client tax records, identification documents, and correspondence for a minimum of 7 years following the tax year in question, in accordance with IRS guidance and professional standards. After this period, records are securely destroyed. You may request a copy of your records at any time by contacting our office.",
  },
  {
    title: "8. Your Rights",
    content:
      "You have the right to access the personal information we hold about you, request corrections to inaccurate data, request deletion of your information (subject to legal retention obligations), and withdraw consent for communications at any time. To exercise any of these rights, please contact us in writing at info@actionplustax.com or at our office address.",
  },
  {
    title: "9. Cookies and Website Analytics",
    content:
      "Our website may use cookies and similar technologies to improve functionality and user experience. We may use analytics tools such as Google Analytics to understand website traffic patterns. No personally identifiable tax or financial information is collected through cookies. You may disable cookies through your browser settings without affecting your ability to use our core services.",
  },
  {
    title: "10. Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. Dependent information included in a family tax return is collected solely for tax preparation purposes and is subject to the same security and confidentiality protections as all other client data.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. The most current version will always be available on our website. We will notify registered clients of any material changes by email. Continued use of our services after updates constitutes your acceptance of the revised policy.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at: Action Plus Tax · 212 S 1st Street, Suite 2, Jesup, GA 31545 · Phone: 912-559-2222 · Email: info@actionplustax.com. We will respond to all privacy-related inquiries within 5 business days.",
  },
];

export default function PrivacyPage() {
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
              Privacy <span style={{ color: "#FFF200" }}>Policy</span>
            </h1>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Your privacy and financial data security are our top priority. Last updated:{" "}
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
              <p className="text-white/60 text-sm mb-2">Questions about your privacy or data?</p>
              <p className="text-white font-semibold text-base mb-4">
                Email us at{" "}
                <a href="mailto:info@actionplustax.com" className="underline underline-offset-4" style={{ color: "#FFF200" }}>
                  info@actionplustax.com
                </a>{" "}
                or call{" "}
                <a href="tel:9125592222" className="underline underline-offset-4" style={{ color: "#FFF200" }}>
                  912-559-2222
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:opacity-90"
                  style={{ background: PRIMARY, color: "#fff" }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-xl transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
                >
                  View Terms of Service
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
