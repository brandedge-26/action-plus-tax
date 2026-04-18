import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Services — Accurate Payroll for Small Businesses",
  description: "Reliable payroll processing for small businesses in Jesup, GA. Action Plus Tax handles payroll calculations, tax withholdings, filings, and compliance — so you don't have to.",
  openGraph: {
    title: "Payroll Services for Small Businesses | Action Plus Tax",
    description: "Accurate and compliant payroll processing for small and growing businesses.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
