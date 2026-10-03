"use client";
import Script from "next/script";
import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };
export default function Analytics() {
 const id = siteConfig.analyticsId;
 useEffect(() => {
  if (!id) return;
  const track = (event: MouseEvent) => {
   const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]') : null;
   if (!anchor) return;
   try { (window as AnalyticsWindow).gtag?.('event','whatsapp_click',{ source:anchor.dataset.cta || 'content', plan:anchor.dataset.plan || undefined, page:window.location.pathname }); } catch { /* Tracking must never block navigation. */ }
  };
  document.addEventListener('click',track); return () => document.removeEventListener('click',track);
 },[id]);
 if (!/^G-[A-Z0-9]+$/.test(id)) return null;
 return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(id)});`}</Script></>;
}
