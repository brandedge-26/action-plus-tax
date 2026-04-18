import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amended Tax Returns — Fix Errors & Claim What You Missed",
  description: "Filed your taxes incorrectly? Action Plus Tax prepares and files amended tax returns (Form 1040-X) to correct errors, claim missed deductions, and recover overpaid taxes.",
  openGraph: {
    title: "Amended Tax Returns (Form 1040-X) | Action Plus Tax",
    description: "Correct filing errors and claim missed refunds with a professionally prepared amended return.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
