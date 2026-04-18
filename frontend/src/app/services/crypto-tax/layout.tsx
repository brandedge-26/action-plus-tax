import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto & Investment Tax — Report It Right, Pay What's Fair",
  description: "Expert cryptocurrency and investment tax reporting from Action Plus Tax. We handle capital gains, crypto transactions, stock sales, and IRS compliance in Jesup, GA.",
  openGraph: {
    title: "Crypto & Investment Tax Reporting | Action Plus Tax",
    description: "Accurate crypto tax reporting and capital gains calculations. Stay compliant with the IRS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
