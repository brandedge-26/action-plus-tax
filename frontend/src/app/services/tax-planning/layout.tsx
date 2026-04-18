import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planning Services — Reduce Your Tax Bill Year-Round",
  description: "Strategic tax planning services from Action Plus Tax. Minimize your tax liability, plan for the future, and keep more of what you earn — serving Jesup, GA and surrounding areas.",
  openGraph: {
    title: "Tax Planning Services | Action Plus Tax",
    description: "Strategic year-round tax planning to minimize your liability and maximize savings.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
