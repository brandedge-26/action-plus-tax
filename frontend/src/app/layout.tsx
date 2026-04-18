import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const plusJakartaSans = Poppins({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Action Plus Tax",
    default: "Action Plus Tax — Professional Tax Services in Jesup, GA",
  },
  description: "Action Plus Tax provides expert tax preparation, IRS audit support, tax planning, bookkeeping, and financial services for individuals and businesses in Jesup, GA.",
  keywords: ["tax preparation", "IRS audit support", "tax planning", "bookkeeping", "tax resolution", "Jesup GA", "Action Plus Tax"],
  openGraph: {
    siteName: "Action Plus Tax",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Action Plus Tax",
  url: "https://actionplustax.com",
  description: "Professional tax preparation, IRS audit support, tax planning, and financial services in Jesup, GA.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://actionplustax.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  sameAs: [],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://actionplustax.com",
  name: "Action Plus Tax",
  url: "https://actionplustax.com",
  telephone: "+1-912-559-2222",
  email: "info@actionplustax.com",
  description: "Family-owned tax professionals serving individuals and businesses since 2012.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "212 S 1st St, Suite 2",
    addressLocality: "Jesup",
    addressRegion: "GA",
    postalCode: "31545",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5993,
    longitude: -81.8851,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=212+S+1st+St+Suite+2+Jesup+GA+31545",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
