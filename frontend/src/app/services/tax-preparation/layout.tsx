import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Preparation & Filing — Accurate, Fast & Guaranteed",
  description: "Professional tax preparation and filing for individuals and businesses in Jesup, GA. Our certified Tax Pros ensure maximum refund and 100% accuracy — guaranteed.",
  openGraph: {
    title: "Tax Preparation & Filing | Action Plus Tax",
    description: "Expert tax preparation for individuals and businesses. Maximum refund guaranteed. Available in Jesup, GA.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
