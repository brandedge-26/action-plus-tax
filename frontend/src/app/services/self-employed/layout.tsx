import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Employed & Freelance Tax — Keep More, Pay Less",
  description: "Tax filing for freelancers, gig workers, and self-employed individuals in Jesup, GA. We find every deduction you qualify for — Schedule C, SE tax, home office, and more.",
  openGraph: {
    title: "Self-Employed & Freelance Tax Filing | Action Plus Tax",
    description: "Specialized tax help for freelancers and self-employed. Maximize deductions and minimize what you owe.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
