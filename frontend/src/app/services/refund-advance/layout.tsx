import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Advance — Get Your Tax Refund Fast",
  description: "Need your refund now? Action Plus Tax offers refund advance options so you can access your money faster. File with us and get paid quickly in Jesup, GA.",
  openGraph: {
    title: "Tax Refund Advance | Action Plus Tax",
    description: "Get access to your tax refund faster with our refund advance program. No waiting required.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
