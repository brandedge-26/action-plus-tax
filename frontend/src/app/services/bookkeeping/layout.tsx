import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services — Accurate Books for Your Business",
  description: "Professional bookkeeping services for small businesses and self-employed in Jesup, GA. Keep your finances organized, tax-ready, and stress-free with Action Plus Tax.",
  openGraph: {
    title: "Bookkeeping Services | Action Plus Tax",
    description: "Accurate, organized bookkeeping for small businesses. Stay tax-ready year-round.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
