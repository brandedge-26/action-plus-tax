import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — Access Your Client Portal",
  description: "Log in to your Action Plus Tax client portal to track your tax filings, view documents, and communicate with your Tax Pro.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
