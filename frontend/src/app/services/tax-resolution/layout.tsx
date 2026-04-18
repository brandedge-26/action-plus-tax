import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Resolution — Resolve IRS Debt & Back Taxes",
  description: "Owe the IRS? Action Plus Tax offers expert tax resolution services — installment agreements, offers in compromise, penalty abatement, and more in Jesup, GA.",
  openGraph: {
    title: "Tax Resolution Services | Action Plus Tax",
    description: "Resolve IRS debt, back taxes, and penalties with expert help from Action Plus Tax.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
