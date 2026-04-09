"use client";

import HeaderTest from "@/components/HeaderTest";
import TestHero from "@/components/TestHero";
import HomeServices from "@/components/HomeServices";
import HomeGuarantee from "@/components/HomeGuarantee";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeCTA from "@/components/HomeCTA";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <HeaderTest />
      <main>
        <TestHero />
        <HomeServices />
        <HomeHowItWorks />
        <HomeGuarantee />
        <HomeTestimonials />
        <HomeCTA />
      </main>
      <SiteFooter />
    </>
  );
}
