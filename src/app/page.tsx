import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Film,
  Clock,
  Radio,
  Globe,
  Server,
  Headphones,
  Play,
  ShieldCheck,
  Smartphone,
  Trophy,
  Tv,
  Zap,
  Check,
} from "lucide-react";
import PremiumHero from "@/components/PremiumHero";
import ChannelTicker from "@/components/ChannelTicker";
import AnimatedLogos from "@/components/AnimatedLogos";
import StatsBar from "@/components/StatsBar";
import MovieCarousel from "@/components/MovieCarousel";
import DeviceMarquee from "@/components/DeviceMarquee";
import PricingSelector from "@/components/PricingSelector";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingSummary } from "@/lib/pricing-data";
import { blogPosts } from "@/lib/blog-data";

export const metadata = pageMetadata('Zorba IPTV | Live TV, Sports, Movies & IPTV Plans', 'Explore Zorba IPTV plans, live TV categories, sports, movies, device setup guides and a free trial. Order or ask questions through WhatsApp.', '/');

const homeFaqs = [
 { question: "How do I order Zorba IPTV?", answer: "Choose your connection count and duration, then message support on WhatsApp. Your selected plan is included in the message. Confirm availability, payment instructions and activation timing before paying." },
 { question: "What do the plans cost?", answer: `${pricingSummary}. These are full plan totals for one simultaneous connection. Each additional connection adds 10% of the original one-connection price.` },
 { question: "Can I test my device first?", answer: "Yes. Request a free trial and tell support your device, player and preferred categories. Confirm the trial duration, then test playback, guide data and your usual viewing time." },
 { question: "Can I use more than one screen?", answer: siteConfig.claims.devicePolicy },
 { question: "Is every channel available in 4K?", answer: "No. HD, FHD and 4K options depend on the channel or title, your player, device and internet connection. Ask about important channels before subscribing." },
 { question: "How are technical issues and refunds handled?", answer: "Report the issue to support with your device, player and a description. Refund requests are reviewed under the refund policy; payment and policy details should be confirmed before ordering." },
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "WebPage", name: siteConfig.defaultTitle, url: absoluteUrl("/"), description: siteConfig.defaultDescription };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ─── 1. HERO SECTION (Split Left/Right) ─── */}
      <PremiumHero />
      <PricingSelector compact />

      {/* ─── 2. CHANNEL TICKER & BRAND MARQUEE ─── */}
      <ChannelTicker />
      <AnimatedLogos />

      {/* ─── 3. STATS COUNTER BAR ─── */}
      <StatsBar />

      {/* ─── 4. ALTERNATING LEFT/RIGHT FEATURE SHOWCASES ─── */}

      {/* SECTION A: LIVE SPORTS (Left Copy / Right Visual Showcase) */}
      <section
        id="sports-showcase"
        className="relative overflow-hidden bg-background py-24 sm:py-32"
        aria-labelledby="sports-showcase-heading"
      >
        <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.03] blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Sports Value Proposition */}
            <div className="flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Trophy className="h-3.5 w-3.5" />
                Your match-night setup
              </div>

              <h2
                id="sports-showcase-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Make Time for a Kickoff, Grand Prix, or{" "}
                <span className="luxury-gradient-text">Title Fight</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Follow the sports you care about with a player and connection that fit your device.
                Football, basketball, combat sports and motorsports are popular viewing categories.
                Confirm a specific league, event or channel with support before ordering; schedules and availability can change.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Check Before Kickoff</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Test the channel at your normal viewing time and keep a compatible backup device ready.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Connection Guidance</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Compare Ethernet and Wi-Fi to identify local connection issues before an important event.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Catch-Up Where Available</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Ask which channels support catch-up and how far back their available guide history extends.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Radio className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Interactive EPG Guide</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Use your player’s schedule view; refresh guide data and check its timezone if times look wrong.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={createWhatsAppSupportUrl("help with sports channels and activation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="sports-whatsapp"
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-accent/30"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  Get Sports Access
                </Link>
                <Link
                  href="/channels"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.08]"
                >
                  Explore Sports Lineup <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Layered Sports Visual Showcase */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-3 shadow-2xl shadow-black/60">
                {/* Main sports image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/photos/stadium.webp"
                    alt="An illuminated football stadium at night"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top floating live badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 px-3.5 py-1 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-red-400">Sports category preview</span>
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-md">
                    Test your connection
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/75 p-4"><p className="text-sm font-bold">Plan your next sports evening</p><p className="mt-2 text-xs text-white/75">Check your preferred event and channel with support.</p></div>
                </div>

                {/* Secondary row with mini card & specs */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-white/70">
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Bitrate</span>
                    <span className="font-bold text-accent">Check bitrate</span>
                  </div>
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Audio</span>
                    <span className="font-bold text-white">Player dependent</span>
                  </div>
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Catch-Up</span>
                    <span className="font-bold text-green-400">Ask support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: MASSIVE VOD CINEMA VAULT (Left Visual Showcase / Right Copy) */}
      <section
        id="cinema-vod"
        className="relative overflow-hidden border-t border-border bg-card/20 py-24 sm:py-32"
        aria-labelledby="cinema-vod-heading"
      >
        <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/[0.04] blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Cinematic Poster Bento Showcase */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg">
                {/* 2x3 poster grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { img: "/photos/cinema.webp", title: "Cinema nights", tag: "Movies" },
                    { img: "/photos/home-theater.webp", title: "Series evenings", tag: "VOD" },
                    { img: "/photos/film-projector.webp", title: "Classic cinema", tag: "Movies" },
                    { img: "/photos/living-room.webp", title: "Family viewing", tag: "Entertainment" },
                    { img: "/photos/film-reels.webp", title: "Film favorites", tag: "Cinema" },
                    { img: "/photos/movie-production.webp", title: "More stories", tag: "Drama" },
                  ].map((movie, index) => (
                    <div
                      key={movie.title}
                      className={`group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/8 bg-card shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-accent/15 ${
                        index === 1 ? "-translate-y-2" : index === 4 ? "translate-y-2" : ""
                      }`}
                    >
                      <Image
                        src={movie.img}
                        alt={`Photo illustrating ${movie.title.toLowerCase()}`}
                        fill
                        sizes="(min-width: 1024px) 160px, 30vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-95" />
                      <div className="absolute inset-x-2 bottom-2">
                        <span className="rounded bg-accent/90 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-background">
                          {movie.tag}
                        </span>
                        <p className="mt-1 truncate text-xs font-bold text-white">{movie.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating VOD stat badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/10 bg-card/90 px-6 py-2.5 shadow-2xl backdrop-blur-xl">
                  <Film className="h-4 w-4 text-accent" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {siteConfig.claims.vod}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: VOD Copy & Features */}
            <div className="order-1 flex flex-col lg:order-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Film className="h-3.5 w-3.5" />
                Massive On-Demand Cinema
              </div>

              <h2
                id="cinema-vod-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Your Personal Home Theater,{" "}
                <span className="luxury-gradient-text">Built for Your Evenings</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Explore movies and series by genre in a compatible IPTV player. Your available catalogue
                may vary by region and package. Ask support about specific titles, languages and
                accessibility features rather than assuming a particular studio or platform is included.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Discover Your Genres",
                    desc: "Browse available cinema, drama, comedy and documentary categories. Check individual titles with support.",
                  },
                  {
                    title: "Multi-Language Audio & Subtitles",
                    desc: "Audio languages and subtitles depend on each title and player. Test your preferred options during the trial.",
                  },
                  {
                    title: "Picture & Sound That Fit",
                    desc: "Match the available resolution and audio format to your screen and player; use HD if higher-quality playback is unstable.",
                  },
                  {
                    title: "Smart Search & Category Shelves",
                    desc: "Search and favorites vary between apps. Choose a player with navigation you can use comfortably with your remote.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/channels"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5"
                >
                  <Play className="h-4 w-4 fill-current" /> Browse Movie Shelves
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-accent/40"
                >
                  View Subscription Tiers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="anti-freeze-infrastructure" className="bg-background py-24" aria-labelledby="anti-freeze-heading"><div className="container mx-auto grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-2"><div><p className="eyebrow">A smooth setup starts at home</p><h2 id="anti-freeze-heading" className="mt-4 text-3xl font-bold sm:text-5xl">Less guesswork.<br /><span className="luxury-gradient-text">Better streaming habits.</span></h2><p className="mt-6 leading-8 text-muted-foreground">Streaming depends on the full path from the source to your screen. A fast speed test alone cannot explain intermittent Wi-Fi, a busy router or an unsupported decoder. Check one variable at a time and record what changes.</p><ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground"><li><strong className="text-white">Start with a wired comparison.</strong> Connect the same device over Ethernet where possible. If playback improves, work on the local Wi-Fi rather than buying a different subscription.</li><li><strong className="text-white">Match the picture to the device.</strong> Compare HD with a higher-resolution option. Your app, decoder and display must support the format; a 4K label alone is not a compatibility guarantee.</li><li><strong className="text-white">Keep a useful record.</strong> Note the player, time, channel and symptom. One failing channel needs a different investigation from every stream freezing across the household.</li></ul><Link href="/blog/iptv-wifi-vs-ethernet" className="mt-6 inline-flex min-h-11 items-center gap-2 text-accent">Read the network comparison <ArrowRight className="h-4 w-4" /></Link></div><div className="rounded-3xl border border-border bg-card p-6"><div className="relative aspect-video"><Image src="/photos/network.webp" alt="Ethernet cables connected to network equipment" fill sizes="(min-width:1024px) 500px,90vw" /></div><h3 className="mt-4 text-lg font-bold">Your pre-viewing checklist</h3><ol className="mt-4 space-y-3 text-sm text-muted-foreground"><li>1. Confirm your channel and active connection allowance.</li><li>2. Refresh the player and guide before your event.</li><li>3. Test on the device and network you will actually use.</li><li>4. Share repeatable symptoms with support.</li></ol><Link href="/free-trial" className="secondary-button mt-6">Test your setup with a trial</Link></div></div></section>

      {/* SECTION D: MULTI-SCREEN COMPATIBILITY (Left Visual Device Mockup / Right Copy) */}
      <section
        id="multi-screen-devices"
        className="relative overflow-hidden border-t border-border bg-card/20 py-24 sm:py-32"
        aria-labelledby="devices-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Device Visual Showcase */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-white/10 bg-card/60 p-4 shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8">
                  <Image
                    src="/photos/home-theater.webp"
                    alt="A modern living room with a wall-mounted television"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <span className="rounded-lg bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      Compatible TV players
                    </span>
                    <span className="rounded-lg bg-accent/90 px-3 py-1 text-xs font-black text-background">
                      Compatible Devices
                    </span>
                  </div>
                </div>

                {/* Device Chips Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  {["Smart TV", "Fire Stick", "Android TV", "Apple TV", "Windows/Mac", "iPhone/iPad"].map(
                    (device) => (
                      <div
                        key={device}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-white/6 bg-white/[0.03] py-2.5 text-white/80 transition hover:border-accent/30 hover:text-white"
                      >
                        <Tv className="h-3.5 w-3.5 text-accent" />
                        <span>{device}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: Device Copy & Screen Plans */}
            <div className="order-1 flex flex-col lg:order-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Smartphone className="h-3.5 w-3.5" />
                Multi-Screen Freedom
              </div>

              <h2
                id="devices-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                One Subscription, Any Screen in{" "}
                <span className="luxury-gradient-text">Your Home</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Whether you watch in the living room on a Samsung or LG Smart TV, in the bedroom with an
                Amazon Fire Stick, or on the go with your iPhone or Android tablet, Zorba IPTV provides
                support for compatible players. Confirm your exact model and app before choosing a plan.
              </p>

              {/* 1, 2, or 3 Device Plans explanation */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">1 Active Device Plan</h3>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                      Solo Viewer
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Base prices include one simultaneous stream on a compatible TV, stick or mobile player.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">2 Active Devices Plan</h3>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                      Couples &amp; Rooms
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Two simultaneous streams add 10% of the original one-connection plan price.
                  </p>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">3 Active Devices Plan</h3>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-black text-background">
                      Family Pack
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Three simultaneous streams add 20% of the original one-connection plan price.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/pricing"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5"
                >
                  Compare Connection Plans
                </Link>
                <Link
                  href="/blog/legacy-mag-stalker-vs-modern-multi-screen-iptv-apps-2026"
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
                >
                  Migrating from an Old MAG Box? Read the 2026 Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. TRENDING MOVIE CAROUSEL ─── */}
      <MovieCarousel />

      {/* ─── 6. DEVICE MARQUEE ─── */}
      <DeviceMarquee />

      {/* ─── 7. INTERACTIVE PRICING SELECTOR ─── */}


      {/* ─── 8. WHY CHOOSE Zorba IPTV BENTO GRID ─── */}
      <section className="relative border-y border-border bg-card/30 py-24 sm:py-32" aria-label="Why choose Zorba IPTV">
        <div className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">The Zorba Standard</p>
            <h2 className="mt-4 font-serif text-3xl font-black tracking-tight text-white sm:text-5xl">
              A Better Way to Set Up <span className="luxury-gradient-text">Zorba IPTV</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Choose a plan with clear connection limits and start with a practical device check.
              Our guides explain the steps, and WhatsApp support helps you confirm the details
              that matter to your household before you subscribe.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Headphones className="h-6 w-6 text-accent" />,
                title: "WhatsApp Setup Support",
                desc: "Ask about playlist imports, app setup and troubleshooting. Support confirms availability and response timing.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-accent" />,
                title: "Clear Refund Process",
                desc: "Read the refund policy and discuss unresolved technical issues with support before requesting a review.",
              },
              {
                icon: <Globe className="h-6 w-6 text-accent" />,
                title: "Comprehensive EPG TV Guide",
                desc: "Browse available schedule information in your compatible player. Coverage and guide history depend on the channel.",
              },
              {
                icon: <Clock className="h-6 w-6 text-accent" />,
                title: "Choose Your Duration",
                desc: "Select a prepaid duration and confirm the total and renewal arrangements in your WhatsApp conversation.",
              },
              {
                icon: <Zap className="h-6 w-6 text-accent" />,
                title: "Guided Device Setup",
                desc: "Share your model and player. Receive suitable login instructions and confirm activation timing with support.",
              },
              {
                icon: <Server className="h-6 w-6 text-accent" />,
                title: "Practical Streaming Checks",
                desc: "Check network stability, available resolution and player compatibility before changing your hardware.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="stagger-in group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_16px_48px_-12px_rgba(106,115,255,0.1)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. INTERACTIVE FAQ ACCORDION ─── */}
      <section className="relative bg-background py-24 sm:py-32" aria-labelledby="home-faq-heading">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Got questions?</p>
            <h2 id="home-faq-heading" className="mt-4 font-serif text-3xl font-black text-white sm:text-5xl">
              Frequently Asked <span className="luxury-gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Everything you need to know about setting up and streaming with Zorba IPTV.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">Have a specific question not listed here?</p>
            <Link
              href={createWhatsAppSupportUrl("I have a question before ordering Zorba IPTV")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-bold text-accent transition hover:text-accent-hover"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask our WhatsApp Support Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 10. LATEST 2026 IPTV GUIDES (BLOG PREVIEWS) ─── */}
      <section className="relative border-t border-border bg-card/20 py-24 sm:py-32" aria-label="Blog articles">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">2026 Streaming Guides</p>
              <h2 className="mt-4 font-serif text-3xl font-black text-white sm:text-5xl">
                Latest Insights &amp; Setup Tutorials
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Browse all articles{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="stagger-in group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_-12px_rgba(106,115,255,0.1)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-accent backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-serif text-lg font-black text-white transition-colors duration-300 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-foreground">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-black text-accent">
                    Read guide <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. HIGH-CONVERTING CLOSING HERO CTA ─── */}
      <section className="relative overflow-hidden border-t border-border bg-card/30 py-28 text-center" aria-label="Get started">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[140px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-5 dot-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-sm font-semibold text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Free trial available
            </div>

            <h2 className="font-serif text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Ready to Activate <span className="luxury-gradient-text">{siteConfig.brandName}</span>?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Tell support which device you use and what you want to watch. Request a trial, confirm
              channel availability, and get ordering instructions when you are ready.
            </p>
          </div>

          <Link
            href={createWhatsAppSupportUrl("help activating Zorba IPTV")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-10 text-base font-bold text-background shadow-[0_12px_40px_rgba(106,115,255,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(106,115,255,0.45)] hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Start Premium Experience
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> Read the refund policy
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> Flexible prepaid durations
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> WhatsApp setup support
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
