"use client";
import Link from "next/link";
import { useState } from "react";
import { Check, ArrowRight, Tv, Users, MonitorPlay } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppPlanUrl } from "@/lib/whatsapp";
import { DeviceCount, formatPrice, planFeatures, pricingDeviceOptions } from "@/lib/pricing-data";

export default function PricingSelector({ compact = false }: { compact?: boolean }) {
 const [selectedDevices, setSelectedDevices] = useState<DeviceCount>(1);
 const option = pricingDeviceOptions.find(o => o.devices === selectedDevices)!;
 return <section id="pricing-plans" aria-labelledby="pricing-heading" className={`relative border-y border-border bg-card/30 ${compact ? "py-14" : "py-20 sm:py-24"}`}>
  <div className="container mx-auto px-5 sm:px-8">
   <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Plans that fit your evenings</p><h2 id="pricing-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">A little less cable.<br /><span className="luxury-gradient-text">A lot more choice.</span></h2><p className="mt-5 text-muted-foreground">Choose your duration. Order through WhatsApp. Test your device with a free trial first.</p></div>
   <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-2 rounded-2xl border border-border bg-background p-2" role="group" aria-label="Simultaneous connections">
    {pricingDeviceOptions.map((o,i) => { const Icon=[Tv,Users,MonitorPlay][i]; return <button type="button" key={o.devices} aria-pressed={selectedDevices === o.devices} onClick={() => setSelectedDevices(o.devices)} className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-xs font-semibold sm:flex-row sm:text-sm ${selectedDevices === o.devices ? "bg-accent text-background" : "text-muted-foreground hover:bg-card"}`}><Icon className="h-4 w-4" />{o.label}</button>; })}
   </div><p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground" aria-live="polite">{option.helper}</p>
   <div className="mt-10 grid gap-5 md:grid-cols-3">
    {option.plans.map(plan => <article key={plan.duration} className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 ${plan.badge === "BEST VALUE" ? "border-accent/60 bg-gradient-to-b from-accent/10 to-card" : "border-border bg-card/70"}`}>
     <div className="flex min-h-8 flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-bold">{plan.duration}</h3>{plan.badge && <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold tracking-wider text-accent">{plan.badge}</span>}</div>
     <p className="mt-7 text-5xl font-bold tracking-tight">{formatPrice(plan.price)}</p><p className="mt-2 text-sm text-muted-foreground">{`Full ${plan.months}-month plan · ${option.label.toLowerCase()}`}</p>
     <ul className="my-7 flex-1 space-y-3">{planFeatures.map(feature => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{feature}</li>)}</ul>
     <Link href={createWhatsAppPlanUrl(plan,selectedDevices)} target="_blank" rel="noopener noreferrer" data-cta="pricing" data-plan={plan.duration} className="whatsapp-button w-full"><WhatsAppIcon className="h-5 w-5" />Order on WhatsApp</Link>
     <Link href="/free-trial" className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 text-sm text-accent">Try before choosing <ArrowRight className="h-4 w-4" /></Link>
    </article>)}
   </div>
   {!compact && <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-background/50 p-6 sm:grid-cols-3">{[{title:"01 · Choose a plan",text:"Match the duration and active connections to your household."},{title:"02 · Message Zorba IPTV",text:"Your selected plan is included in the WhatsApp message. Confirm availability and payment instructions."},{title:"03 · Set up your player",text:"Receive your login details and follow the guide for your device. Activation timing is confirmed by support."}].map(s => <div key={s.title}><h3 className="font-semibold">{s.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{s.text}</p></div>)}</div>}
  </div>
 </section>;
}
