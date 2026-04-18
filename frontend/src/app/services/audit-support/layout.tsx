import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRS Audit Support & Representation — Don't Face the IRS Alone",
  description: "Facing an IRS audit? Action Plus Tax provides expert audit support and representation in Jesup, GA. We handle all IRS correspondence and protect your rights.",
  openGraph: {
    title: "IRS Audit Support & Representation | Action Plus Tax",
    description: "Expert IRS audit defense and representation. Let our Tax Pros handle the IRS so you don't have to.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
