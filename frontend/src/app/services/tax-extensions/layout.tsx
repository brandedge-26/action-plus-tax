import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Extensions — Buy More Time, File the Right Way",
  description: "Need more time to file your taxes? Action Plus Tax handles IRS tax extension requests quickly and correctly — avoiding penalties while giving you the time you need.",
  openGraph: {
    title: "Tax Extension Filing | Action Plus Tax",
    description: "File your IRS tax extension correctly and avoid penalties. We handle all the paperwork for you.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
