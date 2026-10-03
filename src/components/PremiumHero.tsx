import Link from "next/link";
import { ArrowRight, MonitorPlay } from "lucide-react";
import HeroStreamingMockup from "@/components/HeroStreamingMockup";
import { siteConfig } from "@/lib/site-config";

export default function PremiumHero() {
 return <section className="relative isolate overflow-hidden bg-background pb-14 pt-32 sm:pb-20 sm:pt-40" aria-labelledby="home-heading">
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(113,100,255,0.16),transparent_60%)]" />
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
   <div><p className="hero-badge eyebrow inline-flex items-center gap-2"><MonitorPlay className="h-4 w-4" />Make room for better evenings</p>
    <h1 id="home-heading" className="hero-title mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Zorba IPTV —<br /><span className="luxury-gradient-text">Live TV, Sports</span><br />&amp; Entertainment</h1>
    <p className="hero-subtitle mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">Explore live television, movies and series across your favorite compatible devices. Flexible plans, a free trial, and setup help through WhatsApp.</p>
    <div className="hero-cta mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/pricing" className="primary-button">View Plans <ArrowRight className="h-4 w-4" /></Link><Link href="/free-trial" className="secondary-button">Start Free Trial</Link></div>
    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><span>{siteConfig.stats.channels} live channels</span><span>{siteConfig.stats.vod} VOD titles</span><span>One connection included</span></div>
    <p className="mt-4 text-xs leading-5 text-muted-foreground">Availability and quality vary by content, region, player and connection.</p>
   </div><div className="hero-float-card min-w-0"><HeroStreamingMockup /></div>
  </div>
 </section>;
}
