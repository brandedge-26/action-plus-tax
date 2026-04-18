import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drop Off & Go Tax Filing — Quick & Convenient",
  description: "No appointment needed. Drop off your tax documents at Action Plus Tax in Jesup, GA and we'll handle the rest. Fast, secure, and hassle-free tax filing.",
  openGraph: {
    title: "Drop Off & Go Tax Filing | Action Plus Tax",
    description: "Drop off your documents and we'll file your taxes for you. Fast, secure, and convenient.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
