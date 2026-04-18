import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Income Tax Filing — Personal Tax Returns Done Right",
  description: "Expert individual income tax filing from Action Plus Tax. W-2s, 1099s, deductions, credits — we handle it all and maximize your refund in Jesup, GA.",
  openGraph: {
    title: "Individual Income Tax Filing | Action Plus Tax",
    description: "Personal tax returns filed accurately and fast. Maximize deductions and get the biggest refund possible.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
