import ChannelBrowser from "@/components/ChannelBrowser";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Headphones, MonitorPlay, Sparkles } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { premiumImages } from "@/lib/media";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata('Zorba IPTV Channels | Live TV, Sports & Entertainment', 'Explore Zorba IPTV sports, movies, news, family and international categories. Search categories and confirm specific channel availability before ordering.', '/channels');

export default function ChannelsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zorba IPTV Channels",
    url: absoluteUrl("/channels"),
    description: `Explore ${siteConfig.claims.channels}, ${siteConfig.claims.vod}, EPG TV guide support, and HD/FHD/4K quality where available.`,
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.channelHero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-30 object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
        <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-navy/90 via-navy/40 to-navy/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Channel categories</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              <span className="font-serif luxury-gradient-text">Zorba IPTV Channels & Entertainment</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Explore live TV and on-demand categories. Exact channel availability may vary by package and region, and our support team can help confirm the best setup for your device.
            </p>
          </div>

        </div>
      </section>
      <ChannelBrowser />
      <section className="border-y border-border bg-background py-16">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <Sparkles className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">HD / FHD / 4K where available</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Stream quality depends on the selected channel, device, app, and internet connection.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <MonitorPlay className="mb-4 h-7 w-7 text-blue-300" />
            <h2 className="font-black text-white">EPG TV guide included</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Use EPG support to browse schedules and navigate live categories more easily.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <Headphones className="mb-4 h-7 w-7 text-green-300" />
            <h2 className="font-black text-white">Support checks your setup</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Ask WhatsApp support which app and package best fit your screen and active device count.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-black text-white sm:text-5xl">Want help choosing a package?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/62">
            Message Zorba IPTV on WhatsApp with your device, region, and preferred categories. We will help you choose a plan and setup path.
          </p>
          <Link
            href={createWhatsAppSupportUrl("help checking IPTV channel categories for my device")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-[#7C65F5] px-8 font-black text-background transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Ask on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
