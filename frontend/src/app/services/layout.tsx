import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Tax & Financial Services",
  description: "Explore all services offered by Action Plus Tax — tax preparation, IRS audit support, tax planning, bookkeeping, payroll, refund advance, and more in Jesup, GA.",
  openGraph: {
    title: "Tax & Financial Services | Action Plus Tax",
    description: "Complete tax and financial services for individuals and businesses — from filing to IRS resolution.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
