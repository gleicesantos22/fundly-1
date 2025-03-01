"use client"
import { Causes } from "@/components/causes";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { ScrollToTop } from "@/components/scroll-to-top";
import { TrendingCampaigns } from "@/components/trending-campaigns";

export default function Home() {
  return (
    <main className="relative">
      <Navbar showContactUs={true} />
      <Hero />
      <TrendingCampaigns />
      <Causes />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
