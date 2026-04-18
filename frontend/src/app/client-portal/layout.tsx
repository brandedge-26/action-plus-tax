import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal — Manage Your Tax Files Securely",
  description: "Access your Action Plus Tax client portal to view your tax filing status, upload documents, download returns, and stay connected with your dedicated Tax Pro.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
