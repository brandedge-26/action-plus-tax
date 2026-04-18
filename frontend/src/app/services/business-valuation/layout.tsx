import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Valuation — Know What Your Business Is Worth",
  description: "Professional business valuation services from Action Plus Tax in Jesup, GA. Whether buying, selling, or planning — get an accurate, certified valuation you can trust.",
  openGraph: {
    title: "Business Valuation Services | Action Plus Tax",
    description: "Certified business valuations for buying, selling, planning, and tax purposes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
