import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Tips & Insights Blog — Expert Tax Advice",
  description: "Stay informed with Action Plus Tax's blog. Get expert tax tips, IRS guidance, deadline reminders, and financial advice from our certified Tax Pros.",
  openGraph: {
    title: "Tax Tips & Insights | Action Plus Tax Blog",
    description: "Expert tax advice, IRS updates, and financial tips from Action Plus Tax professionals.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
