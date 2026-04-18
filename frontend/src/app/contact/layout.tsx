import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch With Our Tax Pros",
  description: "Have a tax question? Contact Action Plus Tax in Jesup, GA. Call 912-559-2222, visit our office at 212 S 1st St, or send us a message online.",
  openGraph: {
    title: "Contact Action Plus Tax | Jesup, GA Tax Professionals",
    description: "Reach our Tax Pros by phone, email, or in person. Open Mon–Fri 9AM–7PM, Saturday 10AM–6PM.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
