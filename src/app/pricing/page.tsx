import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import PricingSelector from "@/components/PricingSelector";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingDeviceOptions } from "@/lib/pricing-data";

export const metadata = pageMetadata('Zorba IPTV Pricing | Subscription Plans', 'Compare Zorba IPTV subscription durations and connection options. View full plan totals, compare one-, two- and three-connection totals and order through WhatsApp.', '/pricing');

export default function PricingPage() {
  const schema = { "@context":"https://schema.org", "@type":"Service", name:"Zorba IPTV subscription", provider:{"@id":absoluteUrl('/#organization')}, offers:pricingDeviceOptions.flatMap(option=>option.plans.map(plan=>({"@type":"Offer",name:`${plan.duration} · ${option.label.toLowerCase()}`,price:plan.price,priceCurrency:"USD",url:absoluteUrl('/pricing'),description:`${option.devices} simultaneous ${option.devices===1?"connection":"connections"}`}))) };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src="/photos/home-theater.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-30 object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-background/90 via-background/40 to-background/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Flexible subscription durations</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl text-foreground font-serif">
              Zorba IPTV Pricing & Subscription Plans
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose your duration and one, two or three simultaneous connections. Each extra connection adds 10% of the original plan price. Test your device with a free trial before ordering.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={createWhatsAppSupportUrl("help choosing the right Zorba IPTV pricing plan")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-[#8B9CFF] px-8 font-black text-background transition hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Ask on WhatsApp
              </Link>
              <Link
                href="#plans"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 font-black text-white transition hover:border-accent/40 hover:text-accent"
              >
                Compare Plans
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="plans" className="scroll-mt-24">
        <PricingSelector />
      </div>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-5 pb-10"><h2 className="text-2xl font-bold">Check your setup before you choose</h2><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Confirm your preferred channels, compatible player, available picture quality and active connection allowance. Your total is for the selected prepaid duration. Payment methods, activation timing and renewal details are confirmed on WhatsApp.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/free-trial" className="primary-button">Start Free Trial</Link><Link href="/devices" className="secondary-button">Device Support</Link><Link href="/faq" className="secondary-button">Plan FAQs</Link></div></div>
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="luxury-surface rounded-2xl p-6">
            <Smartphone className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">Device-based clarity</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Install on supported devices. Active streams depend on your selected 1, 2, or 3 device package.
            </p>
          </div>
          <div className="luxury-surface rounded-2xl p-6">
            <ShieldCheck className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">Refund review</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Report unresolved technical issues to support and review the refund policy before ordering.
            </p>
          </div>
          <div className="luxury-surface rounded-2xl p-6">
            <Sparkles className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">Setup included</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              WhatsApp support helps with app setup, playlist login, EPG refreshes, and basic troubleshooting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
