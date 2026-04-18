import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment — Free Tax Consultation",
  description: "Schedule a free tax consultation with Action Plus Tax. Book online in minutes — available for individuals, self-employed, and businesses in Jesup, GA.",
  openGraph: {
    title: "Book a Free Tax Consultation | Action Plus Tax",
    description: "Schedule your appointment online. Our Tax Pros are ready to help you file, plan, and resolve IRS issues.",
  },
};

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
