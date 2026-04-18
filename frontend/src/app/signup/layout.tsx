import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account — Join Action Plus Tax",
  description: "Create your free Action Plus Tax account to access the client portal, track your tax filings, and manage your documents securely online.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
