"use client";
import { useState } from "react";
import { createWhatsAppTrialUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
const devices=['Fire TV / Fire Stick','Android TV / Google TV','Samsung / LG Smart TV','Apple TV','iPhone / iPad','Android phone / tablet','Windows / macOS','Other compatible device'];
export default function TrialRequest() {
 const [device,setDevice]=useState(devices[0]);
 return <div className="rounded-2xl border border-border bg-card p-6 sm:p-8"><label htmlFor="trial-device" className="font-semibold">Which device will you use?</label><select id="trial-device" value={device} onChange={e=>setDevice(e.target.value)} className="mt-4 block min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base">{devices.map(d=><option key={d}>{d}</option>)}</select><a href={createWhatsAppTrialUrl(device)} target="_blank" rel="noopener noreferrer" data-cta="trial" className="whatsapp-button mt-6 w-full"><WhatsAppIcon className="h-5 w-5" />Request Free Trial on WhatsApp</a><p className="mt-4 text-sm leading-6 text-muted-foreground">Your selected device is included in the message. Support confirms trial availability, duration and setup details. No payment information is requested here.</p></div>;
}
