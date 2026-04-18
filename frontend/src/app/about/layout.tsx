import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Family-Owned Tax Professionals Since 2012",
  description: "Learn about Action Plus Tax — a family-owned tax firm in Jesup, GA serving individuals and businesses since 2012. Meet our certified Tax Pros dedicated to maximizing your refund.",
  openGraph: {
    title: "About Action Plus Tax | Family-Owned Tax Professionals Since 2012",
    description: "Meet our certified Tax Pros in Jesup, GA. Family-owned since 2012, dedicated to maximizing your refund and resolving IRS issues.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
