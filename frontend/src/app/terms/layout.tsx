import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Action Plus Tax terms of service. Understand our policies, client responsibilities, and service agreements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
